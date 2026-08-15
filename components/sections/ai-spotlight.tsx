import Link from "next/link";
import { ArrowRight, Bot, Eye, Sparkles } from "lucide-react";
import { SectionHeading } from "@/components/shared/section-heading";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/motion/fade-in";

const pillars = [
  {
    icon: Bot,
    title: "LLMs & Agentes",
    description:
      "Orquestração multi-agente com CrewAI, pipelines de RAG e fine-tuning de LLMs para aplicações específicas de domínio.",
  },
  {
    icon: Eye,
    title: "Visão Computacional",
    description:
      "Detecção em tempo real e interação baseada em gestos com YOLO, OpenCV e MediaPipe.",
  },
  {
    icon: Sparkles,
    title: "Aplicado, não acadêmico",
    description:
      "Todo projeto de IA está conectado a um fluxo de trabalho ou interface concreta — não é um notebook isolado.",
  },
];

export function AISpotlight() {
  return (
    <section className="border-border/60 from-primary/5 border-y bg-gradient-to-b to-transparent">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <FadeIn>
          <SectionHeading
            eyebrow="Laboratório de IA"
            title="Onde IA encontra engenharia de produção"
            description="LLMs, retrieval-augmented generation e visão computacional — explorados como problemas de engenharia com interfaces reais, não experimentos isolados."
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
            Explorar o Laboratório de IA
            <ArrowRight className="size-4" />
          </Button>
        </FadeIn>
      </div>
    </section>
  );
}
