import Image from "next/image";
import { getCompanies } from "@/lib/content";
import { FadeIn } from "@/components/motion/fade-in";

export function Companies() {
  const companies = getCompanies();

  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <FadeIn>
        <p className="text-muted-foreground text-center font-mono text-sm">
          Já trabalhei com times da
        </p>
      </FadeIn>

      <FadeIn
        delay={0.05}
        className="mt-10 grid grid-cols-2 items-center gap-10 sm:grid-cols-3 lg:grid-cols-6"
      >
        {companies.map((company) => (
          <a
            key={company.name}
            href={company.href}
            target="_blank"
            rel="noreferrer"
            className="relative mx-auto flex h-16 w-full max-w-36 grayscale transition-all hover:grayscale-0"
          >
            <Image
              src={company.logo.src}
              alt={company.logo.alt}
              fill
              sizes="180px"
              className="object-contain"
            />
          </a>
        ))}
      </FadeIn>
    </section>
  );
}
