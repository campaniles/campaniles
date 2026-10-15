"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import type { ThemeProviderProps } from "next-themes";

/**
 * Application theme provider.
 *
 * Wraps `next-themes` with the project's defaults:
 * - `attribute="class"` toggles the `.dark` class on <html>, matching the
 *   `dark` custom variant defined in `app/globals.css`.
 * - Light and dark themes only; system preference is disabled.
 * - Light is the default theme.
 *
 * Defaults can be overridden per-usage via props.
 */
function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return (
    <NextThemesProvider
      attribute="class"
      themes={["light", "dark"]}
      defaultTheme="light"
      enableSystem={false}
      disableTransitionOnChange
      {...props}
    >
      {children}
    </NextThemesProvider>
  );
}

export { ThemeProvider };
