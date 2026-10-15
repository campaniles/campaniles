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
      <div className="mx-auto w-full max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
        <article className="prose prose-zinc max-w-none dark:prose-invert">
          {children}
        </article>
      </div>
    </AppLayout>
  );
}
