import { useTranslations } from "next-intl";

import { cn } from "@/lib/utils";

type CtaProps = React.ComponentProps<"section">;

function Cta({ className, ...props }: CtaProps) {
  const t = useTranslations("home.cta");

  return (
    <section
      id="cta"
      data-slot="home-cta"
      className={cn("flex w-full flex-col items-center text-center", className)}
      {...props}
    >
      <div className="flex h-24 w-full items-center justify-center rounded-xl bg-primary px-6 text-xl font-semibold text-primary-foreground sm:h-32 sm:text-2xl md:h-40 md:text-3xl">
        {t("explore")}
      </div>
    </section>
  );
}

export { Cta };
