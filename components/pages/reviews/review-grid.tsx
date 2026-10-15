import { cn } from "@/lib/utils";
import type { ContentSummary } from "@/lib/content";
import { ReviewCard } from "@/components/pages/reviews/review-card";

type ReviewGridProps = React.ComponentProps<"div"> & {
  items: ContentSummary<"reviews">[];
};

function ReviewGrid({ items, className, ...props }: ReviewGridProps) {
  if (items.length === 0) {
    return (
      <p
        className="text-sm text-muted-foreground"
        data-slot="review-grid-empty"
      >
        No reviews yet.
      </p>
    );
  }

  return (
    <div
      data-slot="review-grid"
      className={cn(
        "grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3",
        className
      )}
      {...props}
    >
      {items.map((item) => (
        <ReviewCard key={item.slug} item={item} />
      ))}
    </div>
  );
}

export { ReviewGrid };
