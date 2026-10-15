import { useTranslations } from "next-intl";

import { cn } from "@/lib/utils";

type HeroProps = React.ComponentProps<"section">;

function Hero({ className, ...props }: HeroProps) {
  const t = useTranslations("home.hero");

  return (
    <section
      id="hero"
      data-slot="home-hero"
      className={cn("flex w-full flex-col items-center text-center", className)}
      {...props}
    >
      <h1 className="text-4xl font-semibold tracking-tight text-balance text-foreground sm:text-5xl md:text-6xl">
        <span className="block">{t("titleLine1")}</span>
        <span className="block text-muted-foreground">{t("titleLine2")}</span>
      </h1>
    </section>
  );
}

export { Hero };
