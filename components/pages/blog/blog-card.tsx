import { cn } from "@/lib/utils";
import { Link } from "@/i18n/navigation";
import type { ContentSummary } from "@/lib/content";

type BlogCardProps = React.ComponentProps<"article"> & {
  item: ContentSummary<"blog">;
};

function BlogCard({ item, className, ...props }: BlogCardProps) {
  const { frontmatter, slug } = item;

  return (
    <article
      data-slot="blog-card"
      className={cn(
        "group flex flex-col gap-2 rounded-xl border border-border p-5 transition-colors hover:border-foreground/20",
        className
      )}
      {...props}
    >
      <Link href={`/blog/${slug}`} className="flex flex-col gap-2">
        <h3 className="text-lg font-semibold tracking-tight text-foreground">
          {frontmatter.title}
        </h3>
        {frontmatter.description ? (
          <p className="line-clamp-3 text-sm text-muted-foreground">
            {frontmatter.description}
          </p>
        ) : null}
        <div className="mt-1 flex items-center gap-2 text-xs text-muted-foreground">
          {frontmatter.date ? <time>{frontmatter.date}</time> : null}
          {frontmatter.author ? <span>· {frontmatter.author}</span> : null}
        </div>
      </Link>
    </article>
  );
}

export { BlogCard };
