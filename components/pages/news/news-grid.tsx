import { cn } from "@/lib/utils";
import type { ContentSummary } from "@/lib/content";
import { NewsCard } from "@/components/pages/news/news-card";

type NewsGridProps = React.ComponentProps<"div"> & {
  items: ContentSummary<"news">[];
};

function NewsGrid({ items, className, ...props }: NewsGridProps) {
  if (items.length === 0) {
    return (
      <p className="text-sm text-muted-foreground" data-slot="news-grid-empty">
        No news yet.
      </p>
    );
  }

  return (
    <div
      data-slot="news-grid"
      className={cn(
        "grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3",
        className
      )}
      {...props}
    >
      {items.map((item) => (
        <NewsCard key={item.slug} item={item} />
      ))}
    </div>
  );
}

export { NewsGrid };
