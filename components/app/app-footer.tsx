import { cn } from "@/lib/utils";
import { Link } from "@/i18n/navigation";

// Evaluated once at build time rather than during prerender, which keeps the
// component compatible with Cache Components (no unstable `new Date()` at render).
const currentYear = new Date().getFullYear();

type AppFooterProps = React.ComponentProps<"footer">;

function AppFooter({ className, ...props }: AppFooterProps) {
  return (
    <footer
      data-slot="app-footer"
      className={cn(
        "w-full border-t border-border bg-background",
        className
      )}
      {...props}
    >
      <div className="mx-auto flex w-full max-w-5xl flex-col items-center justify-between gap-3 px-4 py-6 text-sm text-muted-foreground sm:flex-row sm:px-6">
        <p>&copy; {currentYear} Campaniles.</p>

        <nav className="flex items-center gap-4">
          <Link
            href="/legal/terms"
            className="transition-colors hover:text-foreground"
          >
            Terms
          </Link>
          <Link
            href="/legal/privacy"
            className="transition-colors hover:text-foreground"
          >
            Privacy
          </Link>
          <Link
            href="/legal/cookies"
            className="transition-colors hover:text-foreground"
          >
            Cookies
          </Link>
        </nav>
      </div>
    </footer>
  );
}

export { AppFooter };
