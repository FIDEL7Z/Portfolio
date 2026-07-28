import { z } from "zod";

export const projectCategorySchema = z.enum(["ai", "web", "application"]);
export type ProjectCategory = z.infer<typeof projectCategorySchema>;

export const projectImageSchema = z.object({
  src: z.string(),
  alt: z
    .string()
    .min(
      1,
      "Every image needs real alt text — no leftover template placeholders.",
    ),
});

export const projectLinkSchema = z.object({
  label: z.string(),
  href: z.string().url(),
  kind: z.enum(["github", "live", "docs"]),
});

export const caseStudySchema = z.object({
  problem: z.string(),
  solution: z.string(),
  architecture: z.string(),
  challenges: z.array(z.string()).default([]),
  learnings: z.array(z.string()).default([]),
  gallery: z.array(projectImageSchema).default([]),
});

export const projectSchema = z.object({
  slug: z.string().regex(/^[a-z0-9-]+$/, "slug must be kebab-case"),
  title: z.string(),
  tagline: z.string().max(140),
  category: projectCategorySchema,
  featured: z.boolean().default(false),
  archived: z.boolean().default(false),
  year: z.number().int().min(2018).max(2030),
  cover: projectImageSchema,
  stack: z.array(z.string()).min(1),
  links: z.array(projectLinkSchema).min(1),
  summary: z.string(),
  caseStudy: caseStudySchema.optional(),
});

export type Project = z.infer<typeof projectSchema>;
/** Input shape for authoring data files — fields with schema defaults (featured, archived) are optional here. */
export type ProjectInput = z.input<typeof projectSchema>;
