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
          eyebrow="Experience"
          title="Where I've shipped"
          description="Full-stack and AI engineering across a BI-focused federal data company, freelance AI product work, and a competitive front-end scholarship program."
        />
        <Button
          variant="outline"
          nativeButton={false}
          render={<Link href="/resume" />}
          className="shrink-0"
        >
          Full resume
          <ArrowRight className="size-4" />
        </Button>
      </FadeIn>

      <div className="mt-10">
        <ExperienceTimeline items={experience} compact />
      </div>
    </section>
  );
}
