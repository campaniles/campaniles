import { useTranslations } from "next-intl";

import { cn } from "@/lib/utils";

type CtaProps = React.ComponentProps<"section">;

function Cta({ className, ...props }: CtaProps) {
  const t = useTranslations("home.cta");

  return (
    <section
      id="cta"
      data-slot="home-cta"
      className={cn("w-full", className)}
      {...props}
    >
      <h2 className="text-2xl font-semibold tracking-tight text-foreground">
        {t("heading")}
      </h2>
    </section>
  );
}

export { Cta };
