import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";

import { AppLayout } from "@/components/app";

export const metadata: Metadata = {
  title: {
    template: "%s · Blog · Campaniles",
    default: "Blog · Campaniles",
  },
  description: "Technical writing and analysis from the Campaniles community.",
};

export default async function BlogLayout({
  children,
  params,
}: LayoutProps<"/[locale]/blog">) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <AppLayout>{children}</AppLayout>;
}
