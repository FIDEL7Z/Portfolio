import type { Metadata } from "next";
import { Download } from "lucide-react";
import {
  getEducation,
  getExperience,
  getSkillsByCategory,
  siteConfig,
} from "@/lib/content";
import { buildMetadata } from "@/lib/seo";
import { SectionHeading } from "@/components/shared/section-heading";
import { ExperienceTimeline } from "@/components/shared/experience-timeline";
import { EducationList } from "@/components/shared/education-list";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/motion/fade-in";
import type { SkillCategory } from "@/lib/content/schemas/skill.schema";

export const metadata: Metadata = buildMetadata({
  title: "Resume",
  description: `${siteConfig.name}'s experience, education, and technical skills.`,
  path: "/resume",
});

const categoryLabel: Record<SkillCategory, string> = {
  frontend: "Frontend",
  backend: "Backend",
  data: "Data & Storage",
  ai: "AI & Machine Learning",
  devops: "DevOps & Cloud",
};

export default function ResumePage() {
  const experience = getExperience();
  const education = getEducation();
  const skillGroups = getSkillsByCategory();

  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20">
      <FadeIn className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <SectionHeading eyebrow="Resume" title="Experience & education" />
        <Button
          nativeButton={false}
          render={<a href={siteConfig.resumeHref} download />}
          className="shrink-0"
        >
          <Download className="size-4" />
          Download PDF
        </Button>
      </FadeIn>

      <section className="mt-14">
        <h2 className="text-muted-foreground mb-8 font-mono text-sm font-medium">
          Experience
        </h2>
        <ExperienceTimeline items={experience} />
      </section>

      <section className="mt-16">
        <h2 className="text-muted-foreground mb-8 font-mono text-sm font-medium">
          Education
        </h2>
        <EducationList items={education} />
      </section>

      <section className="mt-16">
        <h2 className="text-muted-foreground mb-8 font-mono text-sm font-medium">
          Skills
        </h2>
        <div className="grid gap-6 sm:grid-cols-2">
          {skillGroups.map(({ category, skills }) => (
            <div key={category}>
              <h3 className="text-sm font-medium">{categoryLabel[category]}</h3>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {skills.map((skill) => (
                  <Badge key={skill.name} variant="secondary">
                    {skill.name}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
