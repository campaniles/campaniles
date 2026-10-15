import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";

import { AppLayout } from "@/components/app";

export const metadata: Metadata = {
  title: {
    template: "%s · Events · Campaniles",
    default: "Events · Campaniles",
  },
  description: "Technology events for the computer science and IT community.",
};

export default async function EventsLayout({
  children,
  params,
}: LayoutProps<"/[locale]/events">) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <AppLayout>{children}</AppLayout>;
}
