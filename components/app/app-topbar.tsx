import { cn } from "@/lib/utils";

type AppTopbarProps = React.ComponentProps<"div">;

function AppTopbar({ className, children, ...props }: AppTopbarProps) {
  return (
    <div
      data-slot="app-topbar"
      className={cn(
        "fixed inset-x-0 top-0 z-50 h-10 w-full bg-background",
        className
      )}
      {...props}
    >
      <div className="mx-auto flex h-10 w-full max-w-5xl items-center justify-between gap-2 px-4 sm:px-6">
        {children}
      </div>
    </div>
  );
}

export { AppTopbar };
