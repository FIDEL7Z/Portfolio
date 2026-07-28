"use client";

import { getTestimonials } from "@/lib/content";
import { SectionHeading } from "@/components/shared/section-heading";
import { FadeIn } from "@/components/motion/fade-in";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { GitHubIcon, LinkedInIcon } from "@/components/layout/social-icons";

export function Testimonials() {
  const testimonials = getTestimonials();

  return (
    <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <FadeIn>
        <SectionHeading
          eyebrow="Testimonials"
          title="What colleagues say"
          align="center"
        />
      </FadeIn>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((testimonial, index) => (
          <FadeIn key={testimonial.name} delay={index * 0.04}>
            <Dialog>
              <button className="group border-border bg-card flex h-full w-full flex-col gap-4 rounded-2xl border p-6 text-left transition-shadow hover:shadow-lg">
                <div className="flex items-center gap-3">
                  <Avatar size="lg">
                    <AvatarImage
                      src={testimonial.avatar.src}
                      alt={testimonial.avatar.alt}
                    />
                    <AvatarFallback>
                      {testimonial.name.slice(0, 2)}
                    </AvatarFallback>
                  </Avatar>
                  <p className="font-medium">{testimonial.name}</p>
                </div>
                <p className="text-muted-foreground line-clamp-4 text-sm">
                  {testimonial.quote}
                </p>
                <span className="text-primary mt-auto text-xs font-medium opacity-0 transition-opacity group-hover:opacity-100">
                  Read full testimonial →
                </span>
              </button>

              <DialogContent className="sm:max-w-md">
                <DialogHeader>
                  <div className="flex items-center gap-3">
                    <Avatar size="lg">
                      <AvatarImage
                        src={testimonial.avatar.src}
                        alt={testimonial.avatar.alt}
                      />
                      <AvatarFallback>
                        {testimonial.name.slice(0, 2)}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <DialogTitle>{testimonial.name}</DialogTitle>
                      <div className="text-muted-foreground mt-1 flex items-center gap-3">
                        {testimonial.linkedin ? (
                          <a
                            href={testimonial.linkedin}
                            target="_blank"
                            rel="noreferrer"
                            aria-label="LinkedIn"
                          >
                            <LinkedInIcon className="hover:text-foreground size-4" />
                          </a>
                        ) : null}
                        {testimonial.github ? (
                          <a
                            href={testimonial.github}
                            target="_blank"
                            rel="noreferrer"
                            aria-label="GitHub"
                          >
                            <GitHubIcon className="hover:text-foreground size-4" />
                          </a>
                        ) : null}
                      </div>
                    </div>
                  </div>
                </DialogHeader>
                <DialogDescription className="text-foreground/80 text-sm leading-relaxed">
                  {testimonial.quote}
                </DialogDescription>
              </DialogContent>
            </Dialog>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
