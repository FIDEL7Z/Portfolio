import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getExperience } from "@/lib/content";
import { SectionHeading } from "@/components/shared/section-heading";
import { ExperienceTimeline } from "@/components/shared/experience-timeline";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/motion/fade-in";

export function ExperiencePreview() {
  const experience = getExperience().slice(0, 3);

  return (
    <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <FadeIn className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <SectionHeading
          eyebrow="Experiência"
          title="Onde já entreguei"
          description="Engenharia full-stack e de IA em uma empresa federal de dados focada em BI, trabalho freelance em produtos de IA e um programa competitivo de bolsas em front-end."
        />
        <Button
          variant="outline"
          nativeButton={false}
          render={<Link href="/resume" />}
          className="shrink-0"
        >
          Currículo completo
          <ArrowRight className="size-4" />
        </Button>
      </FadeIn>

      <div className="mt-10">
        <ExperienceTimeline items={experience} compact />
      </div>
    </section>
  );
}
