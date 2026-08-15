import type { Metadata } from "next";
import { getPrimaryProjects, getArchivedProjects } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";
import { SectionHeading } from "@/components/shared/section-heading";
import { ProjectsExplorer } from "@/components/projects/projects-explorer";
import { ArchiveList } from "@/components/projects/archive-list";
import { FadeIn } from "@/components/motion/fade-in";

export const metadata: Metadata = buildMetadata({
  title: "Projetos",
  description:
    "Um conjunto selecionado de projetos de IA e engenharia web, além de um arquivo de builds menores de prática.",
  path: "/projects",
});

export default function ProjectsPage() {
  const primary = getPrimaryProjects();
  const archived = getArchivedProjects();

  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
      <FadeIn>
        <SectionHeading
          eyebrow="Portfólio"
          title="Projetos"
          description="Trabalhos selecionados de engenharia e IA, filtráveis por categoria. Builds menores de prática ficam no arquivo abaixo."
        />
      </FadeIn>

      <div className="mt-10">
        <ProjectsExplorer projects={primary} />
      </div>

      {archived.length > 0 ? (
        <FadeIn className="mt-20">
          <h2 className="text-lg font-medium">Outros projetos</h2>
          <p className="text-muted-foreground mt-1 text-sm">
            Builds de prática e clones mais antigos — mantidos como registro,
            não como destaque.
          </p>
          <div className="mt-6">
            <ArchiveList projects={archived} />
          </div>
        </FadeIn>
      ) : null}
    </div>
  );
}
