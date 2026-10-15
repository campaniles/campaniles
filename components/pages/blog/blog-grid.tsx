import { cn } from "@/lib/utils";
import type { ContentSummary } from "@/lib/content";
import { BlogCard } from "@/components/pages/blog/blog-card";

type BlogGridProps = React.ComponentProps<"div"> & {
  items: ContentSummary<"blog">[];
};

function BlogGrid({ items, className, ...props }: BlogGridProps) {
  if (items.length === 0) {
    return (
      <p className="text-sm text-muted-foreground" data-slot="blog-grid-empty">
        No posts yet.
      </p>
    );
  }

  return (
    <div
      data-slot="blog-grid"
      className={cn(
        "grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3",
        className
      )}
      {...props}
    >
      {items.map((item) => (
        <BlogCard key={item.slug} item={item} />
      ))}
    </div>
  );
}

export { BlogGrid };
