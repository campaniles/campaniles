import { cn } from "@/lib/utils";
import { AppHeader } from "@/components/app/app-header";
import { AppFooter } from "@/components/app/app-footer";

type AppLayoutProps = React.ComponentProps<"div">;

function AppLayout({ className, children, ...props }: AppLayoutProps) {
  return (
    <div
      data-slot="app-layout"
      className={cn("flex min-h-full flex-1 flex-col", className)}
      {...props}
    >
      <AppHeader />
      <main className="flex flex-1 flex-col">{children}</main>
      <AppFooter />
    </div>
  );
}

export { AppLayout };
