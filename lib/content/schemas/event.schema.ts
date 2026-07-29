import { z } from "zod";

export const eventSchema = z.object({
  slug: z.string().regex(/^[a-z0-9-]+$/),
  title: z.string(),
  date: z.string(), // "YYYY-MM-DD"
  tag: z.string().optional(),
  description: z.string(),
  image: z.object({ src: z.string(), alt: z.string() }),
  href: z.string().url().optional(),
});

export type Event = z.infer<typeof eventSchema>;
