"use client";

import * as React from "react";
import { useTheme } from "next-themes";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

// Only light is offered for now. Add { value: "dark" } / { value: "system" }
// back here (and drop `forcedTheme` in ThemeProvider) to re-enable them.
const THEMES = [{ value: "light", label: "Light" }] as const;

type ThemeToggleProps = Omit<
  React.ComponentProps<typeof Button>,
  "children" | "render"
>;

/**
 * Text-only theme picker.
 *
 * Opens a dropdown with Light / Dark / System options. The active selection is
 * indicated within the menu, so the trigger label stays static and the markup
 * is identical on the server and client (no hydration mismatch).
 */
function ThemeToggle({
  variant = "link",
  size = "sm",
  className,
  ...props
}: ThemeToggleProps) {
  const { theme, setTheme } = useTheme();

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
            Theme
          </Button>
        }
      />
      <DropdownMenuContent align="end">
        <DropdownMenuRadioGroup value={theme} onValueChange={setTheme}>
          {THEMES.map(({ value, label }) => (
            <DropdownMenuRadioItem key={value} value={value}>
              {label}
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export { ThemeToggle };
