import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";

import { AppLayout } from "@/components/app";

export const metadata: Metadata = {
  title: "Blog · Campaniles",
  description: "Technical writing and analysis from the Campaniles community.",
};

export default async function BlogPage({
  params,
}: PageProps<"/[locale]/blog">) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <AppLayout>
      <h1 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
        Blog
      </h1>
    </AppLayout>
  );
}
