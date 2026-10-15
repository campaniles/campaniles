import type { MetadataRoute } from "next";

import { routing, type Locale } from "@/i18n/routing";

const BASE_URL = "https://campaniles.com";

/**
 * Paths that exist for every locale, relative to the locale root ("" is the
 * home page). Add new public routes here as they are created.
 */
const ROUTES = [
  "",
  "/legal/terms",
  "/legal/privacy",
  "/legal/cookies",
] as const;

/**
 * Builds an absolute URL for a given locale + path, honoring the routing
 * config's `as-needed` prefix: the default locale is served from the
 * unprefixed root, other locales are prefixed with their code.
 */
function urlFor(locale: Locale, path: string): string {
  const prefix = locale === routing.defaultLocale ? "" : `/${locale}`;
  return `${BASE_URL}${prefix}${path}`;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return ROUTES.map((path) => {
    const languages = Object.fromEntries(
      routing.locales.map((locale) => [locale, urlFor(locale, path)])
    );

    return {
      url: urlFor(routing.defaultLocale, path),
      lastModified,
      changeFrequency: path === "" ? "weekly" : "yearly",
      priority: path === "" ? 1 : 0.5,
      alternates: { languages },
    };
  });
}
