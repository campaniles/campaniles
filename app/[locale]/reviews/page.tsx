import { setRequestLocale } from "next-intl/server";

import { getSection } from "@/lib/content";
import { ReviewToolbar } from "@/components/pages/reviews";

export default async function ReviewsPage({
  params,
}: PageProps<"/[locale]/reviews">) {
  const { locale } = await params;
  setRequestLocale(locale);

  const items = await getSection("reviews");

  return (
    <section className="flex flex-col gap-8">
      <h1 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
        Reviews
      </h1>
      <ReviewToolbar items={items} />
    </section>
  );
}
