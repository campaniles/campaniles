"use client";

import * as React from "react";

import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import type { ContentSummary } from "@/lib/content";
import { EventGrid } from "@/components/pages/events/event-grid";

/**
 * Client-side search over events. Filters by title, description, location, and
 * tags, then renders the matches in a grid.
 */
type EventSearchProps = React.ComponentProps<"div"> & {
  items: ContentSummary<"events">[];
};

function EventSearch({ items, className, ...props }: EventSearchProps) {
  const [query, setQuery] = React.useState("");

  const filtered = React.useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return items;
    return items.filter(({ frontmatter }) =>
      [
        frontmatter.title,
        frontmatter.description,
        frontmatter.location ?? "",
        ...(frontmatter.tags ?? []),
      ]
        .join(" ")
        .toLowerCase()
        .includes(q)
    );
  }, [items, query]);

  return (
    <div
      data-slot="event-search"
      className={cn("flex flex-col gap-6", className)}
      {...props}
    >
      <Input
        type="search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search events"
        aria-label="Search events"
        className="h-10"
      />
      <EventGrid items={filtered} />
    </div>
  );
}

export { EventSearch };
