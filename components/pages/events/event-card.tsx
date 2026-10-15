import { cn } from "@/lib/utils";
import { Link } from "@/i18n/navigation";
import type { ContentSummary } from "@/lib/content";

type EventCardProps = React.ComponentProps<"article"> & {
  item: ContentSummary<"events">;
};

function formatDateRange(start?: string, end?: string): string | null {
  if (start && end) return `${start} – ${end}`;
  return start ?? end ?? null;
}

function EventCard({ item, className, ...props }: EventCardProps) {
  const { frontmatter, slug } = item;
  const when = formatDateRange(frontmatter.startDate, frontmatter.endDate);

  return (
    <article
      data-slot="event-card"
      className={cn(
        "group flex flex-col gap-2 rounded-xl border border-border p-5 transition-colors hover:border-foreground/20",
        className
      )}
      {...props}
    >
      <Link href={`/events/${slug}`} className="flex flex-col gap-2">
        <h3 className="text-lg font-semibold tracking-tight text-foreground">
          {frontmatter.title}
        </h3>
        {frontmatter.description ? (
          <p className="line-clamp-3 text-sm text-muted-foreground">
            {frontmatter.description}
          </p>
        ) : null}
        <div className="mt-1 flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
          {when ? <time>{when}</time> : null}
          {frontmatter.location ? <span>· {frontmatter.location}</span> : null}
        </div>
      </Link>
    </article>
  );
}

export { EventCard };
