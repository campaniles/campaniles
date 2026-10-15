import { setRequestLocale } from "next-intl/server";

import { getSection } from "@/lib/content";
import { NewsToolbar } from "@/components/pages/news";

export default async function NewsPage({
  params,
}: PageProps<"/[locale]/news">) {
  const { locale } = await params;
  setRequestLocale(locale);

  const items = await getSection("news");

  return (
    <section className="flex flex-col gap-8">
      <h1 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
        News
      </h1>
      <NewsToolbar items={items} />
    </section>
  );
}
