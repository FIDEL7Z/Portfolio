import { projects } from "@/lib/content/data/projects.data";
import { experience, education } from "@/lib/content/data/experience.data";
import { skills } from "@/lib/content/data/skills.data";
import { testimonials, companies } from "@/lib/content/data/testimonials.data";
import { events } from "@/lib/content/data/events.data";
import { siteConfig } from "@/lib/content/data/site-config.data";
import type { ProjectCategory } from "@/lib/content/schemas/project.schema";
import type { SkillCategory } from "@/lib/content/schemas/skill.schema";

export { siteConfig };

export function getProjects() {
  return projects;
}

export function getFeaturedProjects() {
  return projects.filter((p) => p.featured && !p.archived);
}

export function getPrimaryProjects() {
  return projects.filter((p) => !p.archived);
}

export function getArchivedProjects() {
  return projects.filter((p) => p.archived);
}

export function getProjectsByCategory(category: ProjectCategory | "all") {
  const primary = getPrimaryProjects();
  return category === "all"
    ? primary
    : primary.filter((p) => p.category === category);
}

export function getProjectBySlug(slug: string) {
  return projects.find((p) => p.slug === slug);
}

export function getAdjacentProjects(slug: string) {
  const primary = getPrimaryProjects();
  const index = primary.findIndex((p) => p.slug === slug);
  if (index === -1) return { previous: undefined, next: undefined };
  return {
    previous: primary[index - 1],
    next: primary[(index + 1) % primary.length],
  };
}

export function getExperience() {
  return experience;
}

export function getEducation() {
  return education;
}

export function getSkills() {
  return skills;
}

export function getSkillsByCategory() {
  const categories: SkillCategory[] = [
    "frontend",
    "backend",
    "data",
    "ai",
    "devops",
  ];
  return categories.map((category) => ({
    category,
    skills: skills.filter((s) => s.category === category),
  }));
}

export function getTestimonials() {
  return testimonials;
}

export function getCompanies() {
  return companies;
}

export function getEvents() {
  return events;
}
