import { cn } from "@/lib/utils";
import { AppTopbar } from "@/components/app/app-topbar";
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
      <AppTopbar />
      <AppHeader />
      <main className="flex flex-1 flex-col pt-24">
        <div className="mx-auto flex w-full max-w-5xl flex-1 flex-col px-4 py-8 sm:px-6 sm:py-12">
          {children}
        </div>
      </main>
      <AppFooter />
    </div>
  );
}

export { AppLayout };
