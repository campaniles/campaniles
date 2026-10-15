"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";

type ThemeToggleProps = Omit<
  React.ComponentProps<typeof Button>,
  "onClick" | "children"
>;

/**
 * Button that toggles between the light and dark themes.
 *
 * The icons are swapped purely via the `dark` CSS variant rather than
 * client-only state, so the markup is identical on the server and client and
 * there is no hydration mismatch.
 */
function ThemeToggle({
  variant = "ghost",
  size = "icon-sm",
  ...props
}: ThemeToggleProps) {
  const { setTheme, resolvedTheme } = useTheme();

  return (
    <Button
      variant={variant}
      size={size}
      aria-label="Toggle theme"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      {...props}
    >
      <Sun className="hidden dark:block" />
      <Moon className="block dark:hidden" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}

export { ThemeToggle };
