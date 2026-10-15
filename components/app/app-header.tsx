import Image from "next/image";

import { cn } from "@/lib/utils";
import { Link } from "@/i18n/navigation";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

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

        <div className="hidden justify-center md:flex">
          <NavigationMenu>
            <NavigationMenuList className="gap-1">
              {NAV_LINKS.map(({ href, label }) => (
                <NavigationMenuItem key={href}>
                  <NavigationMenuLink render={<Link href={href} />}>
                    {label}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="flex items-center justify-end">
          <a
            href="https://github.com/campaniles/campaniles"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub repository"
            className="inline-flex items-center rounded-md p-1 opacity-80 transition-opacity hover:opacity-100"
          >
            <Image
              src="/icons/socials/github/dark.png"
              alt=""
              width={20}
              height={20}
              className="size-5 object-contain"
            />
          </a>
        </div>
      </div>
    </header>
  );
}

export { AppHeader };
