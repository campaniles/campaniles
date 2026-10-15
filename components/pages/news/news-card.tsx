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

type NewsCardProps = React.ComponentProps<typeof Card> & {
  item: ContentSummary<"news">;
};

function NewsCard({ item, className, ...props }: NewsCardProps) {
  const { frontmatter, slug } = item;

  return (
    <Card
      data-slot="news-card"
      className={cn(
        "border border-border bg-transparent ring-0 transition-colors hover:border-foreground/20",
        className
      )}
      {...props}
    >
      <Link href={`/news/${slug}`} className="flex flex-col gap-(--card-spacing)">
        <CardHeader>
          <CardTitle className="text-lg">{frontmatter.title}</CardTitle>
          {frontmatter.description ? (
            <CardDescription className="line-clamp-3">
              {frontmatter.description}
            </CardDescription>
          ) : null}
        </CardHeader>
        <CardContent className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
          {frontmatter.date ? <time>{frontmatter.date}</time> : null}
          {frontmatter.source ? (
            <Badge variant="secondary">{frontmatter.source}</Badge>
          ) : null}
        </CardContent>
      </Link>
    </Card>
  );
}

export { NewsCard };
