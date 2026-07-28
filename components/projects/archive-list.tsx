import { ArrowUpRight } from "lucide-react";
import { GitHubIcon } from "@/components/layout/social-icons";
import type { Project } from "@/lib/content/schemas/project.schema";

export function ArchiveList({ projects }: { projects: Project[] }) {
  return (
    <ul className="divide-border border-border divide-y rounded-2xl border">
      {projects.map((project) => {
        const link = project.links[0];
        const Icon = link?.kind === "github" ? GitHubIcon : ArrowUpRight;

        return (
          <li
            key={project.slug}
            className="flex items-center justify-between gap-4 px-5 py-3.5"
          >
            <div className="min-w-0">
              <p className="truncate font-medium">{project.title}</p>
              <p className="text-muted-foreground truncate text-sm">
                {project.tagline}
              </p>
            </div>
            {link ? (
              <a
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="text-muted-foreground hover:text-foreground flex shrink-0 items-center gap-1.5 text-sm transition-colors"
              >
                {link.label}
                <Icon className="size-3.5" />
              </a>
            ) : null}
          </li>
        );
      })}
    </ul>
  );
}
