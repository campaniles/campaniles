import { cn } from "@/lib/utils";

type HeroProps = React.ComponentProps<"section">;

function Hero({ className, ...props }: HeroProps) {
  return (
    <section
      id="hero"
      data-slot="home-hero"
      className={cn("w-full", className)}
      {...props}
    >
      <h1 className="text-3xl font-semibold tracking-tight text-foreground">
        Hero
      </h1>
    </section>
  );
}

export { Hero };
