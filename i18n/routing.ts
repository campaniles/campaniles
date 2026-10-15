import { defineRouting } from "next-intl/routing";

/**
 * i18n routing configuration.
 *
 * - English ("en") is the default locale.
 * - `localePrefix: "as-needed"` means the default locale is served WITHOUT a
 *   prefix (so "/" is the canonical English URL), while any non-default locale
 *   added in the future will be served under its own prefix (e.g. "/fr").
 * - With only the default locale configured, the middleware redirects the
 *   explicit default-locale path ("/en") back to the unprefixed root ("/").
 *
 * To add a language later: append its code to `locales` and drop a matching
 * JSON file into `messages/` (e.g. `messages/fr.json`).
 */
export const routing = defineRouting({
  locales: ["en"],
  defaultLocale: "en",
  localePrefix: "as-needed",
  // Persist the visitor's language choice so returning visitors land in the
  // locale they last used. One year, site-wide.
  localeCookie: {
    maxAge: 60 * 60 * 24 * 365,
  },
});

export type Locale = (typeof routing.locales)[number];
