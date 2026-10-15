import Image from "next/image";

import { cn } from "@/lib/utils";
import { Link } from "@/i18n/navigation";

type AppHeaderProps = React.ComponentProps<"header">;

function AppHeader({ className, ...props }: AppHeaderProps) {
  return (
    <header
      data-slot="app-header"
      className={cn(
        "fixed inset-x-0 top-10 z-40 h-14 w-full bg-background",
        className
      )}
      {...props}
    >
      <div className="mx-auto flex h-14 w-full max-w-5xl items-center justify-between gap-4 px-4 sm:px-6">
        <Link
          href="/"
          className="flex items-center gap-2 text-base font-semibold tracking-tight text-foreground sm:text-lg"
        >
          <Image
            src="/icons/app/dark.png"
            alt=""
            width={28}
            height={28}
            priority
            className="size-7 object-contain"
          />
          <span>Campaniles</span>
        </Link>
      </div>
    </header>
  );
}

export { AppHeader };
