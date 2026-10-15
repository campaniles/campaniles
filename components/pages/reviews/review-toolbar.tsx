"use client";

import * as React from "react";
import { LayoutGrid, List } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import type { ContentSummary } from "@/lib/content";
import { ReviewGrid } from "@/components/pages/reviews/review-grid";
import { ReviewList } from "@/components/pages/reviews/review-list";

type SortKey = "newest" | "oldest" | "title" | "rating";
type ViewType = "grid" | "list";

const SORTS: { value: SortKey; label: string }[] = [
  { value: "newest", label: "Newest" },
  { value: "oldest", label: "Oldest" },
  { value: "title", label: "Title" },
  { value: "rating", label: "Rating" },
];

type ReviewToolbarProps = React.ComponentProps<"div"> & {
  items: ContentSummary<"reviews">[];
  defaultView?: ViewType;
};

/**
 * Interactive toolbar for the reviews section: filter (search), sort-by
 * (including rating), and view-type (grid/list).
 */
function ReviewToolbar({
  items,
  defaultView = "grid",
  className,
  ...props
}: ReviewToolbarProps) {
  const [query, setQuery] = React.useState("");
  const [sort, setSort] = React.useState<SortKey>("newest");
  const [view, setView] = React.useState<ViewType>(defaultView);

  const visible = React.useMemo(() => {
    const q = query.trim().toLowerCase();

    const filtered = q
      ? items.filter(({ frontmatter }) =>
          [
            frontmatter.title,
            frontmatter.description,
            frontmatter.product ?? "",
            ...(frontmatter.tags ?? []),
          ]
            .join(" ")
            .toLowerCase()
            .includes(q)
        )
      : items;

    return [...filtered].sort((a, b) => {
      if (sort === "title") {
        return a.frontmatter.title.localeCompare(b.frontmatter.title);
      }
      if (sort === "rating") {
        return (b.frontmatter.rating ?? 0) - (a.frontmatter.rating ?? 0);
      }
      const cmp = (a.frontmatter.date ?? "").localeCompare(
        b.frontmatter.date ?? ""
      );
      return sort === "oldest" ? cmp : -cmp;
    });
  }, [items, query, sort]);

  return (
    <div
      data-slot="review-toolbar"
      className={cn("flex flex-col gap-6", className)}
      {...props}
    >
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Filter reviews"
          aria-label="Filter reviews"
          className="h-9 w-full rounded-lg border border-border bg-background px-3 text-sm outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 sm:max-w-xs"
        />

        <div className="flex items-center gap-2 sm:ml-auto">
          <DropdownMenu>
            <DropdownMenuTrigger
              render={
                <Button variant="outline" size="sm">
                  Sort: {SORTS.find((s) => s.value === sort)?.label}
                </Button>
              }
            />
            <DropdownMenuContent align="end">
              <DropdownMenuRadioGroup
                value={sort}
                onValueChange={(v) => setSort(v as SortKey)}
              >
                {SORTS.map(({ value, label }) => (
                  <DropdownMenuRadioItem key={value} value={value}>
                    {label}
                  </DropdownMenuRadioItem>
                ))}
              </DropdownMenuRadioGroup>
            </DropdownMenuContent>
          </DropdownMenu>

          <div className="flex items-center gap-1">
            <Button
              variant={view === "grid" ? "secondary" : "ghost"}
              size="icon-sm"
              aria-label="Grid view"
              aria-pressed={view === "grid"}
              onClick={() => setView("grid")}
            >
              <LayoutGrid />
            </Button>
            <Button
              variant={view === "list" ? "secondary" : "ghost"}
              size="icon-sm"
              aria-label="List view"
              aria-pressed={view === "list"}
              onClick={() => setView("list")}
            >
              <List />
            </Button>
          </div>
        </div>
      </div>

      {view === "grid" ? (
        <ReviewGrid items={visible} />
      ) : (
        <ReviewList items={visible} />
      )}
    </div>
  );
}

export { ReviewToolbar };
