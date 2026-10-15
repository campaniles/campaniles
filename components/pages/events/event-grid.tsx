import { cn } from "@/lib/utils";
import type { ContentSummary } from "@/lib/content";
import { EventCard } from "@/components/pages/events/event-card";

type EventGridProps = React.ComponentProps<"div"> & {
  items: ContentSummary<"events">[];
};

function EventGrid({ items, className, ...props }: EventGridProps) {
  if (items.length === 0) {
    return (
      <p className="text-sm text-muted-foreground" data-slot="event-grid-empty">
        No events yet.
      </p>
    );
  }

  return (
    <div
      data-slot="event-grid"
      className={cn(
        "grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3",
        className
      )}
      {...props}
    >
      {items.map((item) => (
        <EventCard key={item.slug} item={item} />
      ))}
    </div>
  );
}

export { EventGrid };
