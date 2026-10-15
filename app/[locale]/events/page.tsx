import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";

import { AppLayout } from "@/components/app";

export const metadata: Metadata = {
  title: "Events · Campaniles",
  description: "Technology events for the computer science and IT community.",
};

export default async function EventsPage({
  params,
}: PageProps<"/[locale]/events">) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <AppLayout>
      <h1 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
        Events
      </h1>
    </AppLayout>
  );
}
