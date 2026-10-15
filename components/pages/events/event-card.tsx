import { cn } from "@/lib/utils";
import { Link } from "@/i18n/navigation";
import type { ContentSummary } from "@/lib/content";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

type EventCardProps = React.ComponentProps<typeof Card> & {
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
    <Card
      data-slot="event-card"
      className={cn(
        "border border-border bg-transparent ring-0 transition-colors hover:border-foreground/20",
        className
      )}
      {...props}
    >
      <Link
        href={`/events/${slug}`}
        className="flex flex-col gap-(--card-spacing)"
      >
        <CardHeader>
          <CardTitle className="text-lg">{frontmatter.title}</CardTitle>
          {frontmatter.description ? (
            <CardDescription className="line-clamp-3">
              {frontmatter.description}
            </CardDescription>
          ) : null}
        </CardHeader>
        <CardContent className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
          {when ? <time>{when}</time> : null}
          {frontmatter.location ? (
            <Badge variant="secondary">{frontmatter.location}</Badge>
          ) : null}
        </CardContent>
      </Link>
    </Card>
  );
}

export { EventCard };
