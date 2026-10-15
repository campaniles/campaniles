import { setRequestLocale } from "next-intl/server";

import { getSection } from "@/lib/content";
import { BlogToolbar } from "@/components/pages/blog";

export default async function BlogPage({
  params,
}: PageProps<"/[locale]/blog">) {
  const { locale } = await params;
  setRequestLocale(locale);

  const items = await getSection("blog");

  return (
    <section className="flex flex-col gap-8">
      <h1 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
        Blog
      </h1>
      <BlogToolbar items={items} />
    </section>
  );
}
