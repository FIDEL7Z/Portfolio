import type { Experience } from "@/lib/content/schemas/experience.schema";
import { FadeIn } from "@/components/motion/fade-in";

function formatDate(value: string | null) {
  if (!value) return "Atual";
  const [year, month] = value.split("-");
  const date = new Date(Number(year), Number(month) - 1);
  return date.toLocaleDateString("pt-BR", { month: "short", year: "numeric" });
}

export function ExperienceTimeline({
  items,
  compact = false,
}: {
  items: Experience[];
  compact?: boolean;
}) {
  return (
    <ol className="border-border space-y-10 border-l pl-6 sm:pl-8">
      {items.map((item, index) => (
        <FadeIn
          key={item.companySlug}
          delay={index * 0.05}
          className="relative"
        >
          <span className="bg-primary ring-background absolute top-1.5 -left-[29px] size-2.5 rounded-full ring-4 sm:-left-[37px]" />

          <p className="text-muted-foreground font-mono text-xs">
            {formatDate(item.startDate)} — {formatDate(item.endDate)}
          </p>
          <h3 className="mt-1 font-medium">
            {item.role} ·{" "}
            <span className="text-muted-foreground">{item.company}</span>
          </h3>

          {compact ? (
            <p className="text-muted-foreground mt-2 text-sm">{item.summary}</p>
          ) : (
            <>
              <p className="text-muted-foreground mt-2 text-sm">
                {item.summary}
              </p>
              <ul className="text-muted-foreground mt-3 space-y-1.5 text-sm">
                {item.bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-2">
                    <span className="text-primary">—</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {item.stack.map((tech) => (
                  <span
                    key={tech}
                    className="border-border text-muted-foreground rounded-full border px-2 py-0.5 font-mono text-xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </>
          )}
        </FadeIn>
      ))}
    </ol>
  );
}
