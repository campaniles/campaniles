"use client";

import * as React from "react";
import { LayoutGrid, List } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import type { ContentSummary } from "@/lib/content";
import { EventGrid } from "@/components/pages/events/event-grid";
import { EventList } from "@/components/pages/events/event-list";

type SortKey = "upcoming" | "newest" | "title";
type ViewType = "grid" | "list";

const SORTS: { value: SortKey; label: string }[] = [
  { value: "upcoming", label: "Upcoming" },
  { value: "newest", label: "Newest" },
  { value: "title", label: "Title" },
];

type EventToolbarProps = React.ComponentProps<"div"> & {
  items: ContentSummary<"events">[];
  defaultView?: ViewType;
};

/**
 * Interactive toolbar for the events section: filter (search), sort-by
 * (including upcoming by start date), and view-type (grid/list).
 */
function EventToolbar({
  items,
  defaultView = "grid",
  className,
  ...props
}: EventToolbarProps) {
  const [query, setQuery] = React.useState("");
  const [sort, setSort] = React.useState<SortKey>("upcoming");
  const [view, setView] = React.useState<ViewType>(defaultView);

  const visible = React.useMemo(() => {
    const q = query.trim().toLowerCase();

    const filtered = q
      ? items.filter(({ frontmatter }) =>
          [
            frontmatter.title,
            frontmatter.description,
            frontmatter.location ?? "",
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
      if (sort === "upcoming") {
        return (a.frontmatter.startDate ?? "").localeCompare(
          b.frontmatter.startDate ?? ""
        );
      }
      return (b.frontmatter.date ?? "").localeCompare(a.frontmatter.date ?? "");
    });
  }, [items, query, sort]);

  return (
    <div
      data-slot="event-toolbar"
      className={cn("flex flex-col gap-6", className)}
      {...props}
    >
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
        <Input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Filter events"
          aria-label="Filter events"
          className="h-9 sm:max-w-xs"
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

          <ToggleGroup
            variant="outline"
            size="sm"
            value={[view]}
            onValueChange={(v) => {
              const next = v.at(-1);
              if (next === "grid" || next === "list") setView(next);
            }}
          >
            <ToggleGroupItem value="grid" aria-label="Grid view">
              <LayoutGrid />
            </ToggleGroupItem>
            <ToggleGroupItem value="list" aria-label="List view">
              <List />
            </ToggleGroupItem>
          </ToggleGroup>
        </div>
      </div>

      {view === "grid" ? (
        <EventGrid items={visible} />
      ) : (
        <EventList items={visible} />
      )}
    </div>
  );
}

export { EventToolbar };
