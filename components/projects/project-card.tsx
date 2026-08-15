import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { GitHubIcon } from "@/components/layout/social-icons";
import type { Project } from "@/lib/content/schemas/project.schema";

const categoryLabel: Record<Project["category"], string> = {
  ai: "Inteligência Artificial",
  web: "Desenvolvimento Web",
  application: "Aplicação",
};

export function ProjectCard({ project }: { project: Project }) {
  const githubLink = project.links.find((l) => l.kind === "github");
  const liveLink = project.links.find((l) => l.kind === "live");

  return (
    <div className="group border-border bg-card relative flex flex-col overflow-hidden rounded-2xl border shadow-sm transition-shadow hover:shadow-lg">
      <Link
        href={`/projects/${project.slug}`}
        className="absolute inset-0 z-10"
        aria-label={project.title}
      />

      <div className="relative aspect-video overflow-hidden">
        <Image
          src={project.cover.src}
          alt={project.cover.alt}
          fill
          sizes="(min-width: 1024px) 380px, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="flex flex-1 flex-col gap-3 p-5">
        <div className="flex items-center justify-between gap-2">
          <Badge variant="secondary">{categoryLabel[project.category]}</Badge>
          <div className="text-muted-foreground relative z-20 flex items-center gap-3">
            {githubLink ? (
              <a
                href={githubLink.href}
                target="_blank"
                rel="noreferrer"
                aria-label={`${project.title} no GitHub`}
                className="hover:text-foreground transition-colors"
              >
                <GitHubIcon className="size-4" />
              </a>
            ) : null}
            {liveLink ? (
              <a
                href={liveLink.href}
                target="_blank"
                rel="noreferrer"
                aria-label={`${project.title} demonstração ao vivo`}
                className="hover:text-foreground transition-colors"
              >
                <ArrowUpRight className="size-4" />
              </a>
            ) : null}
          </div>
        </div>

        <h3 className="font-medium tracking-tight">{project.title}</h3>
        <p className="text-muted-foreground line-clamp-2 text-sm">
          {project.tagline}
        </p>

        <div className="mt-auto flex flex-wrap gap-1.5 pt-2">
          {project.stack.slice(0, 4).map((tech) => (
            <Badge
              key={tech}
              variant="outline"
              className="font-mono text-[0.7rem] font-normal"
            >
              {tech}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  );
}
