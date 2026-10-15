import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";

import { getEntry } from "@/lib/content";

export const instant = false;

export async function generateMetadata({
  params,
}: PageProps<"/[locale]/reviews/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const entry = await getEntry("reviews", slug);
  if (!entry) return {};
  return {
    title: entry.frontmatter.title,
    description: entry.frontmatter.description,
  };
}

export default async function ReviewArticlePage({
  params,
}: PageProps<"/[locale]/reviews/[slug]">) {
  const { locale, slug } = await params;
  setRequestLocale(locale);

  const entry = await getEntry("reviews", slug);
  if (!entry || entry.frontmatter.draft) {
    notFound();
  }

  const { frontmatter, html } = entry;

  return (
    <article className="mx-auto max-w-3xl">
      <header className="mb-8 flex flex-col gap-2">
        <div className="flex items-start justify-between gap-3">
          <h1 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            {frontmatter.title}
          </h1>
          {typeof frontmatter.rating === "number" ? (
            <span className="shrink-0 text-lg font-medium text-primary">
              {frontmatter.rating.toFixed(1)}
            </span>
          ) : null}
        </div>
        <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
          {frontmatter.product ? <span>{frontmatter.product}</span> : null}
          {frontmatter.date ? <time>· {frontmatter.date}</time> : null}
          {frontmatter.author ? <span>· {frontmatter.author}</span> : null}
        </div>
      </header>
      <div
        className="prose prose-sm prose-zinc max-w-none break-words sm:prose-base dark:prose-invert"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </article>
  );
}
