import { cn } from "@/lib/utils";
import { AppTopbar } from "@/components/app/app-topbar";
import { AppHeader } from "@/components/app/app-header";
import { AppFooter } from "@/components/app/app-footer";
import { ThemeToggle } from "@/components/shared/theme";

type AppLayoutProps = React.ComponentProps<"div">;

function AppLayout({ className, children, ...props }: AppLayoutProps) {
  return (
    <div
      data-slot="app-layout"
      className={cn("flex min-h-full flex-1 flex-col", className)}
      {...props}
    >
      <AppTopbar>
        <div className="ml-auto flex items-center">
          <ThemeToggle />
        </div>
      </AppTopbar>
      <AppHeader />
      <main className="flex flex-1 flex-col">{children}</main>
      <AppFooter />
    </div>
  );
}

export { AppLayout };
