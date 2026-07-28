import type { Metadata } from "next";
import { getPrimaryProjects, getArchivedProjects } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";
import { SectionHeading } from "@/components/shared/section-heading";
import { ProjectsExplorer } from "@/components/projects/projects-explorer";
import { ArchiveList } from "@/components/projects/archive-list";
import { FadeIn } from "@/components/motion/fade-in";

export const metadata: Metadata = buildMetadata({
  title: "Projects",
  description:
    "A curated set of AI and web engineering projects, plus an archive of smaller practice builds.",
  path: "/projects",
});

export default function ProjectsPage() {
  const primary = getPrimaryProjects();
  const archived = getArchivedProjects();

  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
      <FadeIn>
        <SectionHeading
          eyebrow="Portfolio"
          title="Projects"
          description="Curated engineering and AI work, filterable by category. Smaller practice builds live in the archive below."
        />
      </FadeIn>

      <div className="mt-10">
        <ProjectsExplorer projects={primary} />
      </div>

      {archived.length > 0 ? (
        <FadeIn className="mt-20">
          <h2 className="text-lg font-medium">Other projects</h2>
          <p className="text-muted-foreground mt-1 text-sm">
            Earlier practice builds and clones — kept for the record, not the
            highlight reel.
          </p>
          <div className="mt-6">
            <ArchiveList projects={archived} />
          </div>
        </FadeIn>
      ) : null}
    </div>
  );
}
