import type { Metadata } from "next";
import { getEvents } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";
import { SectionHeading } from "@/components/shared/section-heading";
import { EventCard } from "@/components/events/event-card";
import { StaggerItem, StaggerList } from "@/components/motion/stagger-list";

export const metadata: Metadata = buildMetadata({
  title: "Eventos",
  description:
    "Marcos de carreira — estágios, entregas e momentos de equipe ao longo do caminho.",
  path: "/events",
});

export default function EventsPage() {
  const events = getEvents();

  return (
    <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-20">
      <SectionHeading
        eyebrow="Eventos"
        title="Marcos de carreira"
        description="Estágios encerrados, projetos entregues, equipes celebradas — os momentos por trás do currículo."
      />

      <StaggerList className="mt-10 grid gap-6 sm:grid-cols-2">
        {events.map((event) => (
          <StaggerItem key={event.slug}>
            <EventCard event={event} />
          </StaggerItem>
        ))}
      </StaggerList>
    </div>
  );
}
