import { cn } from "@/lib/utils";
import { Link } from "@/i18n/navigation";
import type { ContentSummary } from "@/lib/content";

type ReviewCardProps = React.ComponentProps<"article"> & {
  item: ContentSummary<"reviews">;
};

function ReviewCard({ item, className, ...props }: ReviewCardProps) {
  const { frontmatter, slug } = item;

  return (
    <article
      data-slot="review-card"
      className={cn(
        "group flex flex-col gap-2 rounded-xl border border-border p-5 transition-colors hover:border-foreground/20",
        className
      )}
      {...props}
    >
      <Link href={`/reviews/${slug}`} className="flex flex-col gap-2">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-lg font-semibold tracking-tight text-foreground">
            {frontmatter.title}
          </h3>
          {typeof frontmatter.rating === "number" ? (
            <span className="shrink-0 text-sm font-medium text-primary">
              {frontmatter.rating.toFixed(1)}
            </span>
          ) : null}
        </div>
        {frontmatter.product ? (
          <p className="text-xs text-muted-foreground">{frontmatter.product}</p>
        ) : null}
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

export { ReviewCard };
