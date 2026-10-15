import { cn } from "@/lib/utils";
import type { ContentSummary } from "@/lib/content";
import { ReviewCard } from "@/components/pages/reviews/review-card";

type ReviewListProps = React.ComponentProps<"div"> & {
  items: ContentSummary<"reviews">[];
};

function ReviewList({ items, className, ...props }: ReviewListProps) {
  if (items.length === 0) {
    return (
      <p
        className="text-sm text-muted-foreground"
        data-slot="review-list-empty"
      >
        No reviews yet.
      </p>
    );
  }

  return (
    <div
      data-slot="review-list"
      className={cn("flex flex-col gap-4", className)}
      {...props}
    >
      {items.map((item) => (
        <ReviewCard key={item.slug} item={item} />
      ))}
    </div>
  );
}

export { ReviewList };
