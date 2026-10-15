"use client";

import * as React from "react";

import { cn } from "@/lib/utils";
import type { ContentSummary } from "@/lib/content";
import { BlogGrid } from "@/components/pages/blog/blog-grid";

type BlogSearchProps = React.ComponentProps<"div"> & {
  items: ContentSummary<"blog">[];
};

/**
 * Client-side search over blog posts. Filters by title, description, and tags,
 * then renders the matches in a grid.
 */
function BlogSearch({ items, className, ...props }: BlogSearchProps) {
  const [query, setQuery] = React.useState("");

  const filtered = React.useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return items;
    return items.filter(({ frontmatter }) =>
      [frontmatter.title, frontmatter.description, ...(frontmatter.tags ?? [])]
        .join(" ")
        .toLowerCase()
        .includes(q)
    );
  }, [items, query]);

  return (
    <div
      data-slot="blog-search"
      className={cn("flex flex-col gap-6", className)}
      {...props}
    >
      <input
        type="search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search posts"
        aria-label="Search posts"
        className="h-10 w-full rounded-lg border border-border bg-background px-3 text-sm outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50"
      />
      <BlogGrid items={filtered} />
    </div>
  );
}

export { BlogSearch };
