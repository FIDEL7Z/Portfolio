import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import type { Event } from "@/lib/content/schemas/event.schema";

function formatDate(value: string) {
  return new Date(`${value}T00:00:00`).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

function EventCardBody({ event }: { event: Event }) {
  return (
    <>
      <div className="relative aspect-video shrink-0 overflow-hidden sm:aspect-auto sm:w-64">
        <Image
          src={event.image.src}
          alt={event.image.alt}
          fill
          sizes="(min-width: 640px) 256px, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="flex flex-1 flex-col gap-2 p-6">
        <div className="text-muted-foreground flex flex-wrap items-center gap-2 text-xs">
          {event.tag ? <Badge variant="secondary">{event.tag}</Badge> : null}
          <time dateTime={event.date} className="font-mono">
            {formatDate(event.date)}
          </time>
        </div>

        <h3 className="font-medium tracking-tight">{event.title}</h3>
        <p className="text-muted-foreground text-sm">{event.description}</p>

        {event.href ? (
          <span className="text-primary mt-auto inline-flex items-center gap-1 pt-2 text-xs font-medium opacity-0 transition-opacity group-hover:opacity-100">
            View post
            <ArrowUpRight className="size-3.5" />
          </span>
        ) : null}
      </div>
    </>
  );
}

export function EventCard({ event }: { event: Event }) {
  const className =
    "group flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-shadow sm:flex-row sm:items-stretch hover:shadow-lg";

  if (event.href) {
    return (
      <a
        href={event.href}
        target="_blank"
        rel="noreferrer"
        className={className}
      >
        <EventCardBody event={event} />
      </a>
    );
  }

  return (
    <div className={className}>
      <EventCardBody event={event} />
    </div>
  );
}
