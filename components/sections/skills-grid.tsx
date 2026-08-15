import { getSkillsByCategory } from "@/lib/content";
import { SectionHeading } from "@/components/shared/section-heading";
import { Badge } from "@/components/ui/badge";
import { FadeIn } from "@/components/motion/fade-in";
import type { SkillCategory } from "@/lib/content/schemas/skill.schema";

const categoryLabel: Record<SkillCategory, string> = {
  frontend: "Frontend",
  backend: "Backend",
  data: "Dados & Armazenamento",
  ai: "IA & Aprendizado de Máquina",
  devops: "DevOps & Nuvem",
};

export function SkillsGrid() {
  const grouped = getSkillsByCategory();

  return (
    <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <FadeIn>
        <SectionHeading
          eyebrow="Stack"
          title="Ferramentas que eu uso"
          description="Agrupadas por área em vez de pontuadas com percentuais arbitrários — proficiência se avalia melhor pelos próprios projetos."
        />
      </FadeIn>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {grouped.map(({ category, skills }, index) => (
          <FadeIn key={category} delay={index * 0.05}>
            <div className="border-border bg-card h-full rounded-2xl border p-6">
              <h3 className="text-muted-foreground font-mono text-sm font-medium">
                {categoryLabel[category]}
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <Badge key={skill.name} variant="secondary">
                    {skill.name}
                  </Badge>
                ))}
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
