import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";

import { AppLayout } from "@/components/app";

export const metadata: Metadata = {
  title: "News · Campaniles",
  description: "Technology news for the computer science and IT community.",
};

export default async function NewsPage({
  params,
}: PageProps<"/[locale]/news">) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <AppLayout>
      <h1 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
        News
      </h1>
    </AppLayout>
  );
}
