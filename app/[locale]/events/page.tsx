import { setRequestLocale } from "next-intl/server";

import { getSection } from "@/lib/content";
import { EventToolbar } from "@/components/pages/events";

export default async function EventsPage({
  params,
}: PageProps<"/[locale]/events">) {
  const { locale } = await params;
  setRequestLocale(locale);

  const items = await getSection("events");

  return (
    <section className="flex flex-col gap-8">
      <h1 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
        Events
      </h1>
      <EventToolbar items={items} />
    </section>
  );
}
