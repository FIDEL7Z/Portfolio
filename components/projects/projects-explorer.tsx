"use client";

import { useMemo, useState } from "react";
import { ProjectCard } from "@/components/projects/project-card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import type {
  Project,
  ProjectCategory,
} from "@/lib/content/schemas/project.schema";

const filters: { value: ProjectCategory | "all"; label: string }[] = [
  { value: "all", label: "Todos" },
  { value: "ai", label: "Inteligência Artificial" },
  { value: "web", label: "Desenvolvimento Web" },
  { value: "application", label: "Aplicações" },
];

export function ProjectsExplorer({ projects }: { projects: Project[] }) {
  const [category, setCategory] = useState<ProjectCategory | "all">("all");

  const filtered = useMemo(
    () =>
      category === "all"
        ? projects
        : projects.filter((p) => p.category === category),
    [projects, category],
  );

  return (
    <div>
      <Tabs
        value={category}
        onValueChange={(value) => setCategory(value as ProjectCategory | "all")}
      >
        <div className="overflow-x-auto pb-1">
          <TabsList className="h-9 w-max">
            {filters.map((filter) => (
              <TabsTrigger
                key={filter.value}
                value={filter.value}
                className="whitespace-nowrap"
              >
                {filter.label}
              </TabsTrigger>
            ))}
          </TabsList>
        </div>
      </Tabs>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </div>
  );
}
