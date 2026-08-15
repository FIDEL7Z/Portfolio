import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getFeaturedProjects } from "@/lib/content";
import { SectionHeading } from "@/components/shared/section-heading";
import { ProjectCard } from "@/components/projects/project-card";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/motion/fade-in";
import { StaggerItem, StaggerList } from "@/components/motion/stagger-list";

export function FeaturedWork() {
  const featured = getFeaturedProjects().slice(0, 4);

  return (
    <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <FadeIn className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <SectionHeading
          eyebrow="Trabalhos Selecionados"
          title="Projetos que vale a pena conhecer"
          description="Um conjunto selecionado de projetos de produção e pesquisa — a lista completa, incluindo builds menores de prática, fica na página de Projetos."
        />
        <Button
          variant="outline"
          nativeButton={false}
          render={<Link href="/projects" />}
          className="shrink-0"
        >
          Ver todos os projetos
          <ArrowRight className="size-4" />
        </Button>
      </FadeIn>

      <StaggerList className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {featured.map((project) => (
          <StaggerItem key={project.slug}>
            <ProjectCard project={project} />
          </StaggerItem>
        ))}
      </StaggerList>
    </section>
  );
}
