import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/content";
import { FadeIn } from "@/components/motion/fade-in";

export function ContactCTA() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <FadeIn className="border-border from-primary/10 via-card to-card flex flex-col items-center gap-6 rounded-3xl border bg-gradient-to-br p-10 text-center sm:p-16">
        <h2 className="text-2xl font-semibold tracking-tight text-balance sm:text-4xl">
          Vamos construir algo que vale a pena entregar.
        </h2>
        <p className="text-muted-foreground max-w-lg">
          Aberto a oportunidades em Engenharia de Software e IA, colaborações em
          pesquisa e trabalhos freelance interessantes.
        </p>
        <div className="flex flex-col items-center gap-3 sm:flex-row">
          <Button
            size="lg"
            nativeButton={false}
            render={<Link href="/contact" />}
          >
            <Mail className="size-4" />
            Entrar em contato
            <ArrowRight className="size-4" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            nativeButton={false}
            render={<a href={`mailto:${siteConfig.email}`} />}
          >
            {siteConfig.email}
          </Button>
        </div>
      </FadeIn>
    </section>
  );
}
