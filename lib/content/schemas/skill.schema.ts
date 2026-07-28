import { z } from "zod";

/**
 * Deliberately no percentage/proficiency-score field. Arbitrary "80%" skill
 * bars are a well-known portfolio anti-pattern (unverifiable, and the old
 * site's bars didn't even match their own labels) — grouped tags read as
 * more credible to a technical reviewer.
 */
export const skillCategorySchema = z.enum([
  "frontend",
  "backend",
  "data",
  "ai",
  "devops",
]);
export type SkillCategory = z.infer<typeof skillCategorySchema>;

export const skillSchema = z.object({
  name: z.string(),
  category: skillCategorySchema,
});

export type Skill = z.infer<typeof skillSchema>;
