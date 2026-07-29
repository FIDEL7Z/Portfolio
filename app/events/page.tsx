import type { Metadata } from "next";
import { getEvents } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";
import { SectionHeading } from "@/components/shared/section-heading";
import { EventCard } from "@/components/events/event-card";
import { StaggerItem, StaggerList } from "@/components/motion/stagger-list";

export const metadata: Metadata = buildMetadata({
  title: "Events",
  description:
    "Career milestones — internships, deliveries, and team moments along the way.",
  path: "/events",
});

export default function EventsPage() {
  const events = getEvents();

  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20">
      <SectionHeading
        eyebrow="Events"
        title="Career milestones"
        description="Internships wrapping up, projects shipped, teams celebrated — the moments behind the résumé."
      />

      <StaggerList className="mt-10 space-y-6">
        {events.map((event) => (
          <StaggerItem key={event.slug}>
            <EventCard event={event} />
          </StaggerItem>
        ))}
      </StaggerList>
    </div>
  );
}
