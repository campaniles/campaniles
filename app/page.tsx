import { AppLayout } from "@/components/app";
import { Hero, Cta } from "@/components/pages/home";

export default function Home() {
  return (
    <AppLayout>
      <Hero />
      <Cta />
    </AppLayout>
  );
}
