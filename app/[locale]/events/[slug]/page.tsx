import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";

import { getEntry } from "@/lib/content";

export const instant = false;

export async function generateMetadata({
  params,
}: PageProps<"/[locale]/events/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const entry = await getEntry("events", slug);
  if (!entry) return {};
  return {
    title: entry.frontmatter.title,
    description: entry.frontmatter.description,
  };
}

function formatDateRange(start?: string, end?: string): string | null {
  if (start && end) return `${start} – ${end}`;
  return start ?? end ?? null;
}

export default async function EventArticlePage({
  params,
}: PageProps<"/[locale]/events/[slug]">) {
  const { locale, slug } = await params;
  setRequestLocale(locale);

  const entry = await getEntry("events", slug);
  if (!entry || entry.frontmatter.draft) {
    notFound();
  }

  const { frontmatter, html } = entry;
  const when = formatDateRange(frontmatter.startDate, frontmatter.endDate);

  return (
    <article className="mx-auto max-w-3xl">
      <header className="mb-8 flex flex-col gap-2">
        <h1 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          {frontmatter.title}
        </h1>
        <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
          {when ? <time>{when}</time> : null}
          {frontmatter.location ? <span>· {frontmatter.location}</span> : null}
        </div>
      </header>
      <div
        className="prose prose-sm prose-zinc max-w-none break-words sm:prose-base dark:prose-invert"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </article>
  );
}
