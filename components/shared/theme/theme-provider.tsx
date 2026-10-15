"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import type { ThemeProviderProps } from "next-themes";

/**
 * Application theme provider.
 *
 * Wraps `next-themes` with the project's defaults:
 * - `attribute="class"` toggles the `.dark` class on <html>, matching the
 *   `dark` custom variant defined in `app/globals.css`.
 * - Light, dark, and system preference are supported.
 * - Light is the default theme (used until the user picks one, and when
 *   "system" cannot be resolved).
 *
 * Defaults can be overridden per-usage via props.
 */
function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="light"
      enableSystem
      disableTransitionOnChange
      {...props}
    >
      {children}
    </NextThemesProvider>
  );
}

export { ThemeProvider };
