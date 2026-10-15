import "server-only";

import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkGfm from "remark-gfm";
import remarkRehype from "remark-rehype";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeStringify from "rehype-stringify";

/**
 * Markdown → HTML pipeline.
 *
 * - GitHub-Flavored Markdown (tables, task lists, strikethrough, autolinks).
 * - Heading slugs plus "quiet" autolinked anchors for deep-linking.
 * - Syntax-highlighted code blocks via Shiki (rehype-pretty-code).
 *
 * This module is server-only: it is used at build/request time to render
 * content and must never be bundled into client components.
 */
const processor = unified()
  .use(remarkParse)
  .use(remarkGfm)
  .use(remarkRehype, { allowDangerousHtml: false })
  .use(rehypeSlug)
  .use(rehypeAutolinkHeadings, { behavior: "wrap" })
  .use(rehypePrettyCode, {
    theme: { light: "github-light", dark: "github-dark" },
    keepBackground: false,
  })
  .use(rehypeStringify);

/** Renders a Markdown string to an HTML string. */
export async function renderMarkdown(markdown: string): Promise<string> {
  const file = await processor.process(markdown);
  return String(file);
}
