import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";

import { getEntry } from "@/lib/content";

export const instant = false;

export async function generateMetadata({
  params,
}: PageProps<"/[locale]/news/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const entry = await getEntry("news", slug);
  if (!entry) return {};
  return {
    title: entry.frontmatter.title,
    description: entry.frontmatter.description,
  };
}

export default async function NewsArticlePage({
  params,
}: PageProps<"/[locale]/news/[slug]">) {
  const { locale, slug } = await params;
  setRequestLocale(locale);

  const entry = await getEntry("news", slug);
  if (!entry || entry.frontmatter.draft) {
    notFound();
  }

  const { frontmatter, html } = entry;

  return (
    <article className="mx-auto max-w-3xl">
      <header className="mb-8 flex flex-col gap-2">
        <h1 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          {frontmatter.title}
        </h1>
        <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
          {frontmatter.date ? <time>{frontmatter.date}</time> : null}
          {frontmatter.source ? <span>· {frontmatter.source}</span> : null}
        </div>
      </header>
      <div
        className="prose prose-sm prose-zinc max-w-none break-words sm:prose-base dark:prose-invert"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </article>
  );
}
