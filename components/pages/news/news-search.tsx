"use client";

import * as React from "react";

import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import type { ContentSummary } from "@/lib/content";
import { NewsGrid } from "@/components/pages/news/news-grid";

type NewsSearchProps = React.ComponentProps<"div"> & {
  items: ContentSummary<"news">[];
};

/**
 * Client-side search over news entries. Filters by title, description, and
 * tags, then renders the matches in a grid.
 */
function NewsSearch({ items, className, ...props }: NewsSearchProps) {
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
      data-slot="news-search"
      className={cn("flex flex-col gap-6", className)}
      {...props}
    >
      <Input
        type="search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search news"
        aria-label="Search news"
        className="h-10"
      />
      <NewsGrid items={filtered} />
    </div>
  );
}

export { NewsSearch };
