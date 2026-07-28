import { z } from "zod";

export const testimonialSchema = z.object({
  name: z.string(),
  avatar: z.object({ src: z.string(), alt: z.string() }),
  quote: z.string(),
  language: z.enum(["en", "pt"]).default("pt"),
  linkedin: z.string().url().optional(),
  github: z.string().url().optional(),
});

export type Testimonial = z.infer<typeof testimonialSchema>;

export const companySchema = z.object({
  name: z.string(),
  href: z.string().url(),
  logo: z.object({ src: z.string(), alt: z.string() }),
});

export type Company = z.infer<typeof companySchema>;
