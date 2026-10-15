import { cn } from "@/lib/utils";
import { Link } from "@/i18n/navigation";

type AppHeaderProps = React.ComponentProps<"header">;

function AppHeader({ className, ...props }: AppHeaderProps) {
  return (
    <header
      data-slot="app-header"
      className={cn(
        "sticky top-0 z-40 w-full bg-background/80 backdrop-blur",
        className
      )}
      {...props}
    >
      <div className="mx-auto flex h-14 w-full max-w-5xl items-center justify-between gap-4 px-4 sm:px-6">
        <Link
          href="/"
          className="text-base font-semibold tracking-tight text-foreground sm:text-lg"
        >
          Campaniles
        </Link>
      </div>
    </header>
  );
}

export { AppHeader };
