import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/shared/theme";
import { LanguageToggle } from "@/components/shared/language";

type AppTopbarProps = React.ComponentProps<"div">;

function AppTopbar({ className, ...props }: AppTopbarProps) {
  return (
    <div
      data-slot="app-topbar"
      className={cn(
        "fixed inset-x-0 top-0 z-50 h-10 w-full bg-background",
        className
      )}
      {...props}
    >
      <div className="mx-auto flex h-10 w-full max-w-5xl items-center justify-end gap-1 px-4 sm:gap-2 sm:px-6">
        <LanguageToggle />
        <ThemeToggle />
      </div>
    </div>
  );
}

export { AppTopbar };
