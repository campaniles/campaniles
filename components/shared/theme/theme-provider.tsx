"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import type { ThemeProviderProps } from "next-themes";

/**
 * Application theme provider.
 *
 * Wraps `next-themes` with the project's defaults:
 * - `attribute="class"` toggles the `.dark` class on <html>, matching the
 *   `dark` custom variant defined in `app/globals.css`.
 * - For now the app is locked to the light theme via `forcedTheme`. Dark and
 *   system support (and the theme toggle) are kept in the codebase and can be
 *   re-enabled later by removing `forcedTheme` and restoring the toggle.
 * - Light is the default theme otherwise.
 *
 * Defaults can be overridden per-usage via props.
 */
function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="light"
      forcedTheme="light"
      enableSystem={false}
      disableTransitionOnChange
      {...props}
    >
      {children}
    </NextThemesProvider>
  );
}

export { ThemeProvider };
