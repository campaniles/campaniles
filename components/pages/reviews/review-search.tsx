"use client";

import * as React from "react";

import { cn } from "@/lib/utils";
import type { ContentSummary } from "@/lib/content";
import { ReviewGrid } from "@/components/pages/reviews/review-grid";

/**
 * Client-side search over reviews. Filters by title, description, product, and
 * tags, then renders the matches in a grid.
 */
type ReviewSearchProps = React.ComponentProps<"div"> & {
  items: ContentSummary<"reviews">[];
};

function ReviewSearch({ items, className, ...props }: ReviewSearchProps) {
  const [query, setQuery] = React.useState("");

  const filtered = React.useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return items;
    return items.filter(({ frontmatter }) =>
      [
        frontmatter.title,
        frontmatter.description,
        frontmatter.product ?? "",
        ...(frontmatter.tags ?? []),
      ]
        .join(" ")
        .toLowerCase()
        .includes(q)
    );
  }, [items, query]);

  return (
    <div
      data-slot="review-search"
      className={cn("flex flex-col gap-6", className)}
      {...props}
    >
      <input
        type="search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search reviews"
        aria-label="Search reviews"
        className="h-10 w-full rounded-lg border border-border bg-background px-3 text-sm outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50"
      />
      <ReviewGrid items={filtered} />
    </div>
  );
}

export { ReviewSearch };
