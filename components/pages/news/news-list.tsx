import { cn } from "@/lib/utils";
import type { ContentSummary } from "@/lib/content";
import { NewsCard } from "@/components/pages/news/news-card";

type NewsListProps = React.ComponentProps<"div"> & {
  items: ContentSummary<"news">[];
};

function NewsList({ items, className, ...props }: NewsListProps) {
  if (items.length === 0) {
    return (
      <p className="text-sm text-muted-foreground" data-slot="news-list-empty">
        No news yet.
      </p>
    );
  }

  return (
    <div
      data-slot="news-list"
      className={cn("flex flex-col gap-4", className)}
      {...props}
    >
      {items.map((item) => (
        <NewsCard key={item.slug} item={item} />
      ))}
    </div>
  );
}

export { NewsList };
