import { cn } from "@/lib/utils";
import { Link } from "@/i18n/navigation";
import type { ContentSummary } from "@/lib/content";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

type ReviewCardProps = React.ComponentProps<typeof Card> & {
  item: ContentSummary<"reviews">;
};

function ReviewCard({ item, className, ...props }: ReviewCardProps) {
  const { frontmatter, slug } = item;

  return (
    <Card
      data-slot="review-card"
      className={cn(
        "border border-border bg-transparent ring-0 transition-colors hover:border-foreground/20",
        className
      )}
      {...props}
    >
      <Link
        href={`/reviews/${slug}`}
        className="flex flex-col gap-(--card-spacing)"
      >
        <CardHeader>
          <CardTitle className="text-lg">{frontmatter.title}</CardTitle>
          {typeof frontmatter.rating === "number" ? (
            <CardAction>
              <Badge>{frontmatter.rating.toFixed(1)}</Badge>
            </CardAction>
          ) : null}
          {frontmatter.description ? (
            <CardDescription className="line-clamp-3">
              {frontmatter.description}
            </CardDescription>
          ) : null}
        </CardHeader>
        <CardContent className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
          {frontmatter.product ? <span>{frontmatter.product}</span> : null}
          {frontmatter.date ? <time>· {frontmatter.date}</time> : null}
        </CardContent>
      </Link>
    </Card>
  );
}

export { ReviewCard };
