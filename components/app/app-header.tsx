import Link from "next/link";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

type AppHeaderProps = React.ComponentProps<"header">;

function AppHeader({ className, ...props }: AppHeaderProps) {
  return (
    <header
      data-slot="app-header"
      className={cn(
        "sticky top-0 z-40 w-full border-b border-border bg-background/80 backdrop-blur",
        className
      )}
      {...props}
    >
      <div className="mx-auto flex h-14 w-full max-w-5xl items-center justify-between gap-4 px-4 sm:px-6">
        <Link
          href="/"
          className="font-semibold tracking-tight text-foreground"
        >
          Campaniles
        </Link>

        <nav className="flex items-center gap-1 text-sm">
          <Button variant="ghost" size="sm" render={<Link href="/" />}>
            Home
          </Button>
        </nav>
      </div>
    </header>
  );
}

export { AppHeader };
