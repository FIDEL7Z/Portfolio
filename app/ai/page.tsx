import type { Metadata } from "next";
import Link from "next/link";
import { Bot, Eye, Sparkles, ArrowRight } from "lucide-react";
import { getProjectsByCategory } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";
import { SectionHeading } from "@/components/shared/section-heading";
import { ProjectCard } from "@/components/projects/project-card";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/motion/fade-in";
import { StaggerItem, StaggerList } from "@/components/motion/stagger-list";

export const metadata: Metadata = buildMetadata({
  title: "AI Lab",
  description:
    "LLMs, retrieval-augmented generation, and computer vision — engineering projects at the intersection of AI and production software.",
  path: "/ai",
});

const pillars = [
  {
    icon: Bot,
    title: "LLMs & Agents",
    description:
      "Multi-agent orchestration with CrewAI, RAG pipelines, and fine-tuning LLMs for domain-specific applications — most recently at Sensilog, building AI features for real client products.",
  },
  {
    icon: Eye,
    title: "Computer Vision",
    description:
      "Real-time object detection and gesture-based interaction, built on YOLO, OpenCV, and MediaPipe — from academic research to interactive HCI experiments.",
  },
  {
    icon: Sparkles,
    title: "Applied, not academic",
    description:
      "Every project here ties back to a concrete interface or workflow. The goal is always a usable system, not a standalone notebook.",
  },
];

export default function AIPage() {
  const aiProjects = getProjectsByCategory("ai");

  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
      <FadeIn>
        <SectionHeading
          eyebrow="AI Lab"
          title="Where AI meets production engineering"
          description="I treat LLMs and computer vision as engineering problems: real interfaces, real constraints, real trade-offs — not isolated experiments in a notebook."
        />
      </FadeIn>

      <StaggerList className="mt-10 grid gap-6 sm:grid-cols-3">
        {pillars.map((pillar) => (
          <StaggerItem key={pillar.title}>
            <div className="border-border bg-card h-full rounded-2xl border p-6">
              <pillar.icon className="text-primary size-5" />
              <h2 className="mt-4 font-medium">{pillar.title}</h2>
              <p className="text-muted-foreground mt-2 text-sm">
                {pillar.description}
              </p>
            </div>
          </StaggerItem>
        ))}
      </StaggerList>

      <FadeIn delay={0.1} className="mt-20">
        <h2 className="text-xl font-medium">AI & Computer Vision projects</h2>
        <p className="text-muted-foreground mt-2">
          Full case studies — problem, architecture, and trade-offs — for each
          project below.
        </p>
      </FadeIn>

      <StaggerList className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {aiProjects.map((project) => (
          <StaggerItem key={project.slug}>
            <ProjectCard project={project} />
          </StaggerItem>
        ))}
      </StaggerList>

      <FadeIn delay={0.15} className="mt-16 flex justify-center">
        <Button
          variant="outline"
          nativeButton={false}
          render={<Link href="/projects" />}
        >
          See all projects
          <ArrowRight className="size-4" />
        </Button>
      </FadeIn>
    </div>
  );
}
