import { setRequestLocale } from "next-intl/server";

import { AppLayout } from "@/components/app";
import { Hero, Cta } from "@/components/pages/home";

export default async function Home({ params }: PageProps<"/[locale]">) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <AppLayout>
      <Hero />
      <Cta />
    </AppLayout>
  );
}
