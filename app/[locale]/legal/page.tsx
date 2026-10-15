import { hasLocale } from "next-intl";

import { redirect } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";

export default async function LegalIndexPage({
  params,
}: PageProps<"/[locale]/legal">) {
  const { locale } = await params;
  const resolved = hasLocale(routing.locales, locale)
    ? locale
    : routing.defaultLocale;

  redirect({ href: "/legal/terms", locale: resolved });
}
