import { z } from "zod";

export const experienceSchema = z.object({
  company: z.string(),
  companySlug: z.string().regex(/^[a-z0-9-]+$/),
  role: z.string(),
  location: z.string(),
  startDate: z.string(), // "2024-02"
  endDate: z.string().nullable(), // null = present
  summary: z.string(),
  bullets: z.array(z.string()).min(1),
  stack: z.array(z.string()).min(1),
});

export type Experience = z.infer<typeof experienceSchema>;

export const educationSchema = z.object({
  institution: z.string(),
  degree: z.string(),
  startDate: z.string(),
  endDate: z.string().nullable(),
  note: z.string().optional(),
});

export type Education = z.infer<typeof educationSchema>;
