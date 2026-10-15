import { cn } from "@/lib/utils";
import type { ContentSummary } from "@/lib/content";
import { BlogCard } from "@/components/pages/blog/blog-card";

type BlogListProps = React.ComponentProps<"div"> & {
  items: ContentSummary<"blog">[];
};

function BlogList({ items, className, ...props }: BlogListProps) {
  if (items.length === 0) {
    return (
      <p className="text-sm text-muted-foreground" data-slot="blog-list-empty">
        No posts yet.
      </p>
    );
  }

  return (
    <div
      data-slot="blog-list"
      className={cn("flex flex-col gap-4", className)}
      {...props}
    >
      {items.map((item) => (
        <BlogCard key={item.slug} item={item} />
      ))}
    </div>
  );
}

export { BlogList };
