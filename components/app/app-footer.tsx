import { cn } from "@/lib/utils";

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
      <div className="mx-auto flex w-full max-w-5xl items-center justify-center px-4 py-6 text-sm text-muted-foreground sm:px-6">
        <p>
          &copy; {new Date().getFullYear()} Campaniles. An independent,
          community-first platform.
        </p>
      </div>
    </footer>
  );
}

export { AppFooter };
