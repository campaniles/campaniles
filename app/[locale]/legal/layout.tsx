import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";

import { AppLayout } from "@/components/app";

export const metadata: Metadata = {
  title: {
    template: "%s · Campaniles",
    default: "Legal · Campaniles",
  },
};

export default async function LegalLayout({
  children,
  params,
}: LayoutProps<"/[locale]/legal">) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <AppLayout>
      <article className="prose prose-sm prose-zinc mx-auto max-w-3xl break-words sm:prose-base dark:prose-invert">
        {children}
      </article>
    </AppLayout>
  );
}
