import { cn } from "@/lib/utils";
import type { ContentSummary } from "@/lib/content";
import { EventCard } from "@/components/pages/events/event-card";

type EventListProps = React.ComponentProps<"div"> & {
  items: ContentSummary<"events">[];
};

function EventList({ items, className, ...props }: EventListProps) {
  if (items.length === 0) {
    return (
      <p className="text-sm text-muted-foreground" data-slot="event-list-empty">
        No events yet.
      </p>
    );
  }

  return (
    <div
      data-slot="event-list"
      className={cn("flex flex-col gap-4", className)}
      {...props}
    >
      {items.map((item) => (
        <EventCard key={item.slug} item={item} />
      ))}
    </div>
  );
}

export { EventList };
