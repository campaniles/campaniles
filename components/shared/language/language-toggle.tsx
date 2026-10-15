"use client";

import * as React from "react";
import { useLocale } from "next-intl";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { usePathname, useRouter } from "@/i18n/navigation";
import { routing, type Locale } from "@/i18n/routing";

/**
 * Human-readable names for each supported locale. Extend this as locales are
 * added to `routing.locales`.
 */
const LOCALE_LABELS: Record<Locale, string> = {
  en: "English",
};

type LanguageToggleProps = Omit<
  React.ComponentProps<typeof Button>,
  "children" | "render"
>;

/**
 * Text-only language picker.
 *
 * Lists every locale in `routing.locales` (currently English only) and switches
 * to the selected locale while preserving the current pathname. The trigger
 * label stays static so the markup is identical on the server and client.
 */
function LanguageToggle({
  variant = "link",
  size = "sm",
  className,
  ...props
}: LanguageToggleProps) {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  function onValueChange(next: string) {
    router.replace(pathname, { locale: next as Locale });
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        render={
          <Button
            variant={variant}
            size={size}
            className={cn("px-1 text-foreground underline", className)}
            {...props}
          >
            Language
          </Button>
        }
      />
      <DropdownMenuContent align="end">
        <DropdownMenuRadioGroup value={locale} onValueChange={onValueChange}>
          {routing.locales.map((value) => (
            <DropdownMenuRadioItem key={value} value={value}>
              {LOCALE_LABELS[value]}
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export { LanguageToggle };
