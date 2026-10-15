import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";

import { AppLayout } from "@/components/app";

export const metadata: Metadata = {
  title: {
    template: "%s · Reviews · Campaniles",
    default: "Reviews · Campaniles",
  },
  description: "Technology reviews for the computer science and IT community.",
};

export default async function ReviewsLayout({
  children,
  params,
}: LayoutProps<"/[locale]/reviews">) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <AppLayout>{children}</AppLayout>;
}
