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
  title: "Laboratório de IA",
  description:
    "LLMs, retrieval-augmented generation e visão computacional — projetos de engenharia na interseção entre IA e software em produção.",
  path: "/ai",
});

const pillars = [
  {
    icon: Bot,
    title: "LLMs & Agentes",
    description:
      "Orquestração multi-agente com CrewAI, pipelines de RAG e fine-tuning de LLMs para aplicações específicas de domínio — mais recentemente na Sensilog, construindo funcionalidades de IA para produtos reais de clientes.",
  },
  {
    icon: Eye,
    title: "Visão Computacional",
    description:
      "Detecção de objetos em tempo real e interação baseada em gestos, construída sobre YOLO, OpenCV e MediaPipe — de pesquisa acadêmica a experimentos interativos de HCI.",
  },
  {
    icon: Sparkles,
    title: "Aplicado, não acadêmico",
    description:
      "Todo projeto aqui está conectado a uma interface ou fluxo de trabalho concreto. O objetivo é sempre um sistema usável, não um notebook isolado.",
  },
];

export default function AIPage() {
  const aiProjects = getProjectsByCategory("ai");

  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
      <FadeIn>
        <SectionHeading
          eyebrow="Laboratório de IA"
          title="Onde IA encontra engenharia de produção"
          description="Trato LLMs e visão computacional como problemas de engenharia: interfaces reais, restrições reais, trade-offs reais — não experimentos isolados em um notebook."
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
        <h2 className="text-xl font-medium">
          Projetos de IA & Visão Computacional
        </h2>
        <p className="text-muted-foreground mt-2">
          Cases completos — problema, arquitetura e trade-offs — para cada
          projeto abaixo.
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
          Ver todos os projetos
          <ArrowRight className="size-4" />
        </Button>
      </FadeIn>
    </div>
  );
}
