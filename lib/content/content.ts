import "server-only";

import { promises as fs } from "node:fs";
import path from "node:path";

import matter from "gray-matter";

import { renderMarkdown } from "@/lib/content/markdown";
import {
  CONTENT_SECTIONS,
  type ContentEntry,
  type ContentSection,
  type ContentSummary,
  type FrontmatterBySection,
} from "@/lib/content/types";

/** Absolute path to the content root (`<repo>/content`). */
const CONTENT_ROOT = path.join(process.cwd(), "content");

/** A content file is skipped when it is not Markdown or is a template (`_`). */
function isContentFile(fileName: string): boolean {
  return fileName.endsWith(".md") && !fileName.startsWith("_");
}

/** Lists the publishable slugs within a section (templates excluded). */
export async function getSlugs(section: ContentSection): Promise<string[]> {
  const dir = path.join(CONTENT_ROOT, section);

  let entries: string[];
  try {
    entries = await fs.readdir(dir);
  } catch {
    // Section folder may not exist yet or contain no files.
    return [];
  }

  return entries
    .filter(isContentFile)
    .map((fileName) => fileName.replace(/\.md$/, ""));
}

/** Reads and parses a single entry, returning `null` if it does not exist. */
export async function getEntry<S extends ContentSection>(
  section: S,
  slug: string
): Promise<ContentEntry<S> | null> {
  "use cache";

  const filePath = path.join(CONTENT_ROOT, section, `${slug}.md`);

  let raw: string;
  try {
    raw = await fs.readFile(filePath, "utf8");
  } catch {
    return null;
  }

  const { data, content } = matter(raw);
  const frontmatter = data as FrontmatterBySection[S];
  const html = await renderMarkdown(content);

  return {
    section,
    slug: frontmatter.slug || slug,
    frontmatter,
    body: content,
    html,
  };
}

/**
 * Returns summaries (frontmatter only) for all publishable, non-draft entries
 * in a section, newest first by `date`.
 */
export async function getSection<S extends ContentSection>(
  section: S
): Promise<ContentSummary<S>[]> {
  "use cache";

  const slugs = await getSlugs(section);

  const summaries = await Promise.all(
    slugs.map(async (slug) => {
      const filePath = path.join(CONTENT_ROOT, section, `${slug}.md`);
      const raw = await fs.readFile(filePath, "utf8");
      const { data } = matter(raw);
      const frontmatter = data as FrontmatterBySection[S];
      return { section, slug: frontmatter.slug || slug, frontmatter };
    })
  );

  return summaries
    .filter((entry) => !entry.frontmatter.draft)
    .sort((a, b) =>
      (b.frontmatter.date ?? "").localeCompare(a.frontmatter.date ?? "")
    );
}

/** Returns summaries for every section keyed by section name. */
export async function getAllSections(): Promise<{
  [S in ContentSection]: ContentSummary<S>[];
}> {
  const result = {} as { [S in ContentSection]: ContentSummary<S>[] };

  await Promise.all(
    CONTENT_SECTIONS.map(async (section) => {
      result[section] = (await getSection(section)) as never;
    })
  );

  return result;
}
