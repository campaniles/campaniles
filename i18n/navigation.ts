import { createNavigation } from "next-intl/navigation";

import { routing } from "@/i18n/routing";

/**
 * Locale-aware navigation APIs.
 *
 * Use these in place of the equivalents from `next/link` and `next/navigation`
 * so links and redirects automatically respect the active locale and the
 * routing config (unprefixed default locale, prefixed locales added later).
 */
export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);
