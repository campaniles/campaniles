/**
 * Content types for the file-based content system under `content/`.
 *
 * Each section (news, reviews, events, blog) stores Markdown files with YAML
 * frontmatter. Files whose name starts with `_` (e.g. `_template.md`) are
 * treated as templates and skipped by the loaders.
 */

/** The content sections, matching the folders under `content/`. */
export const CONTENT_SECTIONS = [
  "news",
  "reviews",
  "events",
  "blog",
] as const;

export type ContentSection = (typeof CONTENT_SECTIONS)[number];

/** Frontmatter fields common to every content type. */
export interface BaseFrontmatter {
  title: string;
  description: string;
  slug: string;
  date: string;
  author: string;
  tags: string[];
  draft: boolean;
}

export interface NewsFrontmatter extends BaseFrontmatter {
  source?: string;
}

export interface ReviewFrontmatter extends BaseFrontmatter {
  product?: string;
  rating?: number;
  pros?: string[];
  cons?: string[];
}

export interface EventFrontmatter extends BaseFrontmatter {
  startDate?: string;
  endDate?: string;
  location?: string;
  url?: string;
}

export type BlogFrontmatter = BaseFrontmatter;

/** Maps each section to its frontmatter shape. */
export interface FrontmatterBySection {
  news: NewsFrontmatter;
  reviews: ReviewFrontmatter;
  events: EventFrontmatter;
  blog: BlogFrontmatter;
}

/**
 * A fully parsed content entry: typed frontmatter, the raw Markdown body, and
 * the rendered HTML.
 */
export interface ContentEntry<S extends ContentSection = ContentSection> {
  section: S;
  slug: string;
  frontmatter: FrontmatterBySection[S];
  /** Raw Markdown body (frontmatter stripped). */
  body: string;
  /** Rendered HTML from the Markdown body. */
  html: string;
}

/** Lightweight list item: frontmatter only, no body/HTML. */
export interface ContentSummary<S extends ContentSection = ContentSection> {
  section: S;
  slug: string;
  frontmatter: FrontmatterBySection[S];
}
