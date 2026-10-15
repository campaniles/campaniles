import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";

import { AppLayout } from "@/components/app";

export const metadata: Metadata = {
  title: {
    template: "%s · News · Campaniles",
    default: "News · Campaniles",
  },
  description: "Technology news for the computer science and IT community.",
};

export default async function NewsLayout({
  children,
  params,
}: LayoutProps<"/[locale]/news">) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <AppLayout>{children}</AppLayout>;
}
