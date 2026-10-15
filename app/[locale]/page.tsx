import { setRequestLocale } from "next-intl/server";

import { AppLayout } from "@/components/app";
import { Hero, Cta } from "@/components/pages/home";

export default async function Home({ params }: PageProps<"/[locale]">) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <AppLayout>
      <div className="flex min-h-full flex-1 flex-col justify-between gap-10 sm:gap-16">
        <Hero />
        <Cta />
      </div>
    </AppLayout>
  );
}
