import type { Education } from "@/lib/content/schemas/experience.schema";
import { FadeIn } from "@/components/motion/fade-in";

export function EducationList({ items }: { items: Education[] }) {
  return (
    <ol className="border-border space-y-6 border-l pl-6 sm:pl-8">
      {items.map((item, index) => (
        <FadeIn
          key={item.institution}
          delay={index * 0.05}
          className="relative"
        >
          <span className="bg-primary ring-background absolute top-1.5 -left-[29px] size-2.5 rounded-full ring-4 sm:-left-[37px]" />
          <p className="text-muted-foreground font-mono text-xs">
            {item.startDate} — {item.endDate ?? "Present"}
          </p>
          <h3 className="mt-1 font-medium">{item.institution}</h3>
          <p className="text-muted-foreground mt-1 text-sm">
            {item.degree}
            {item.note ? ` · ${item.note}` : ""}
          </p>
        </FadeIn>
      ))}
    </ol>
  );
}
