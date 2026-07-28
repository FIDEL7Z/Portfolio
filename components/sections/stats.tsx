import { siteConfig } from "@/lib/content";
import { FadeIn } from "@/components/motion/fade-in";

export function Stats() {
  return (
    <section className="border-border/60 bg-secondary/20 border-y">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-4 py-12 sm:px-6 md:grid-cols-4">
        {siteConfig.stats.map((stat, index) => (
          <FadeIn
            key={stat.label}
            delay={index * 0.05}
            className="text-center md:text-left"
          >
            <p className="font-mono text-3xl font-semibold tracking-tight sm:text-4xl">
              {stat.value}
            </p>
            <p className="text-muted-foreground mt-1 text-sm">{stat.label}</p>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
