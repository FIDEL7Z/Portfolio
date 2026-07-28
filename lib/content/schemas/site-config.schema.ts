import { z } from "zod";

export const siteConfigSchema = z.object({
  name: z.string(),
  role: z.string(),
  title: z.string(), // <title> tag, e.g. "Jefferson Fidelis — Software Engineer, AI Systems"
  description: z.string(), // meta description
  keywords: z.array(z.string()),
  url: z.string().url(),
  location: z.string(),
  email: z.string().email(),
  phone: z.string(),
  bio: z.array(z.string()).min(1), // one string per paragraph
  social: z.object({
    github: z.string().url(),
    linkedin: z.string().url(),
  }),
  resumeHref: z.string(),
  stats: z.array(
    z.object({
      label: z.string(),
      value: z.string(),
    }),
  ),
});

export type SiteConfig = z.infer<typeof siteConfigSchema>;
