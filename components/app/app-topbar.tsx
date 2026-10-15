import { cn } from "@/lib/utils";

type AppTopbarProps = React.ComponentProps<"div">;

function AppTopbar({ className, children, ...props }: AppTopbarProps) {
  return (
    <div
      data-slot="app-topbar"
      className={cn(
        "w-full bg-background/80 backdrop-blur",
        className
      )}
      {...props}
    >
      <div className="mx-auto flex h-14 w-full max-w-5xl items-center justify-between gap-4 px-4 sm:px-6">
        {children}
      </div>
    </div>
  );
}

export { AppTopbar };
