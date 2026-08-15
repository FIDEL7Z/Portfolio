import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";
import { siteConfig } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";
import { SectionHeading } from "@/components/shared/section-heading";
import { ContactForm } from "@/components/contact/contact-form";
import { GitHubIcon, LinkedInIcon } from "@/components/layout/social-icons";
import { FadeIn } from "@/components/motion/fade-in";

export const metadata: Metadata = buildMetadata({
  title: "Contato",
  description: `Entre em contato com ${siteConfig.name} sobre oportunidades em Engenharia de Software e IA, colaborações ou trabalhos freelance.`,
  path: "/contact",
});

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-20">
      <FadeIn>
        <SectionHeading
          eyebrow="Contato"
          title="Vamos conversar"
          description="Seja uma vaga, uma colaboração em pesquisa ou um projeto — eu leio toda mensagem."
        />
      </FadeIn>

      <div className="mt-12 grid gap-12 lg:grid-cols-[1fr_1.4fr]">
        <FadeIn delay={0.05} className="space-y-6">
          <a
            href={`mailto:${siteConfig.email}`}
            className="text-muted-foreground hover:text-foreground flex items-center gap-3 text-sm"
          >
            <Mail className="size-4 shrink-0" />
            {siteConfig.email}
          </a>
          <a
            href={`tel:${siteConfig.phone.replace(/[^+\d]/g, "")}`}
            className="text-muted-foreground hover:text-foreground flex items-center gap-3 text-sm"
          >
            <Phone className="size-4 shrink-0" />
            {siteConfig.phone}
          </a>
          <p className="text-muted-foreground flex items-center gap-3 text-sm">
            <MapPin className="size-4 shrink-0" />
            {siteConfig.location}
          </p>

          <div className="flex items-center gap-4 pt-2">
            <a
              href={siteConfig.social.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="text-muted-foreground hover:text-foreground"
            >
              <GitHubIcon className="size-5" />
            </a>
            <a
              href={siteConfig.social.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="text-muted-foreground hover:text-foreground"
            >
              <LinkedInIcon className="size-5" />
            </a>
          </div>
        </FadeIn>

        <FadeIn
          delay={0.1}
          className="border-border bg-card rounded-2xl border p-6 sm:p-8"
        >
          <ContactForm />
        </FadeIn>
      </div>
    </div>
  );
}
