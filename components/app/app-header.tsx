import Image from "next/image";

import { cn } from "@/lib/utils";
import { Link } from "@/i18n/navigation";

const NAV_LINKS = [
  { href: "/news", label: "News" },
  { href: "/reviews", label: "Reviews" },
  { href: "/events", label: "Events" },
  { href: "/blog", label: "Blog" },
] as const;

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
      <div className="mx-auto grid h-14 w-full max-w-5xl grid-cols-[auto_1fr_auto] items-center gap-4 px-4 sm:px-6">
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

        <nav className="hidden items-center justify-center gap-6 text-sm font-medium md:flex">
          {NAV_LINKS.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              {label}
            </Link>
          ))}
        </nav>

        <span aria-hidden className="w-0" />
      </div>
    </header>
  );
}

export { AppHeader };
