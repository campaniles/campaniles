import { cn } from "@/lib/utils";
import { Link } from "@/i18n/navigation";
import type { ContentSummary } from "@/lib/content";

type NewsCardProps = React.ComponentProps<"article"> & {
  item: ContentSummary<"news">;
};

function NewsCard({ item, className, ...props }: NewsCardProps) {
  const { frontmatter, slug } = item;

  return (
    <article
      data-slot="news-card"
      className={cn(
        "group flex flex-col gap-2 rounded-xl border border-border p-5 transition-colors hover:border-foreground/20",
        className
      )}
      {...props}
    >
      <Link href={`/news/${slug}`} className="flex flex-col gap-2">
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
          {frontmatter.source ? <span>· {frontmatter.source}</span> : null}
        </div>
      </Link>
    </article>
  );
}

export { NewsCard };
