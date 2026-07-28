import Link from "next/link";
import { ArrowRight, Bot, Eye, Sparkles } from "lucide-react";
import { SectionHeading } from "@/components/shared/section-heading";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/motion/fade-in";

const pillars = [
  {
    icon: Bot,
    title: "LLMs & Agents",
    description:
      "Multi-agent orchestration with CrewAI, RAG pipelines, and LLM fine-tuning for domain-specific applications.",
  },
  {
    icon: Eye,
    title: "Computer Vision",
    description:
      "Real-time detection and gesture-based interaction with YOLO, OpenCV, and MediaPipe.",
  },
  {
    icon: Sparkles,
    title: "Applied, not academic",
    description:
      "Every AI project ties back to a concrete workflow or interface — not a standalone notebook.",
  },
];

export function AISpotlight() {
  return (
    <section className="border-border/60 from-primary/5 border-y bg-gradient-to-b to-transparent">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <FadeIn>
          <SectionHeading
            eyebrow="AI Lab"
            title="Where AI meets production engineering"
            description="LLMs, retrieval-augmented generation, and computer vision — explored as engineering problems with real interfaces, not isolated experiments."
          />
        </FadeIn>

        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          {pillars.map((pillar, index) => (
            <FadeIn key={pillar.title} delay={index * 0.08}>
              <div className="border-border bg-card h-full rounded-2xl border p-6">
                <pillar.icon className="text-primary size-5" />
                <h3 className="mt-4 font-medium">{pillar.title}</h3>
                <p className="text-muted-foreground mt-2 text-sm">
                  {pillar.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.2} className="mt-10">
          <Button nativeButton={false} render={<Link href="/ai" />}>
            Explore the AI Lab
            <ArrowRight className="size-4" />
          </Button>
        </FadeIn>
      </div>
    </section>
  );
}
