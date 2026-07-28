import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import {
  getPrimaryProjects,
  getProjectBySlug,
  getAdjacentProjects,
} from "@/lib/content";
import { buildMetadata } from "@/lib/seo";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { GitHubIcon } from "@/components/layout/social-icons";
import { FadeIn } from "@/components/motion/fade-in";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return getPrimaryProjects().map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};

  return buildMetadata({
    title: project.title,
    description: project.summary,
    path: `/projects/${project.slug}`,
  });
}

const categoryLabel = {
  ai: "Artificial Intelligence",
  web: "Web Development",
  application: "Application",
} as const;

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const { caseStudy } = project;
  const { previous, next } = getAdjacentProjects(slug);
  const githubLink = project.links.find((l) => l.kind === "github");
  const liveLink = project.links.find((l) => l.kind === "live");

  return (
    <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20">
      <Link
        href="/projects"
        className="text-muted-foreground hover:text-foreground inline-flex items-center gap-1.5 text-sm"
      >
        <ArrowLeft className="size-4" />
        All projects
      </Link>

      <FadeIn className="mt-6">
        <Badge variant="secondary">{categoryLabel[project.category]}</Badge>
        <h1 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
          {project.title}
        </h1>
        <p className="text-muted-foreground mt-3 text-lg">{project.tagline}</p>

        <div className="mt-6 flex flex-wrap gap-3">
          {githubLink ? (
            <Button
              variant="outline"
              nativeButton={false}
              render={
                <a href={githubLink.href} target="_blank" rel="noreferrer" />
              }
            >
              <GitHubIcon className="size-4" />
              View code
            </Button>
          ) : null}
          {liveLink ? (
            <Button
              nativeButton={false}
              render={
                <a href={liveLink.href} target="_blank" rel="noreferrer" />
              }
            >
              Live demo
              <ArrowUpRight className="size-4" />
            </Button>
          ) : null}
        </div>
      </FadeIn>

      <FadeIn
        delay={0.05}
        className="border-border relative mt-10 aspect-video overflow-hidden rounded-2xl border"
      >
        <Image
          src={project.cover.src}
          alt={project.cover.alt}
          fill
          sizes="(min-width: 768px) 768px, 100vw"
          className="object-cover"
          priority
        />
      </FadeIn>

      <FadeIn delay={0.1} className="mt-10 flex flex-wrap gap-1.5">
        {project.stack.map((tech) => (
          <Badge key={tech} variant="outline" className="font-mono font-normal">
            {tech}
          </Badge>
        ))}
      </FadeIn>

      {caseStudy ? (
        <div className="mt-12 space-y-10">
          <FadeIn>
            <h2 className="text-xl font-medium">Problem</h2>
            <p className="text-muted-foreground mt-3 leading-relaxed">
              {caseStudy.problem}
            </p>
          </FadeIn>

          <FadeIn>
            <h2 className="text-xl font-medium">Solution</h2>
            <p className="text-muted-foreground mt-3 leading-relaxed">
              {caseStudy.solution}
            </p>
          </FadeIn>

          <FadeIn>
            <h2 className="text-xl font-medium">Architecture</h2>
            <p className="text-muted-foreground mt-3 leading-relaxed">
              {caseStudy.architecture}
            </p>
          </FadeIn>

          {caseStudy.challenges.length > 0 ? (
            <FadeIn>
              <h2 className="text-xl font-medium">Challenges</h2>
              <ul className="mt-3 space-y-2">
                {caseStudy.challenges.map((item) => (
                  <li
                    key={item}
                    className="text-muted-foreground flex gap-2 leading-relaxed"
                  >
                    <span className="text-primary">—</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </FadeIn>
          ) : null}

          {caseStudy.learnings.length > 0 ? (
            <FadeIn>
              <h2 className="text-xl font-medium">Learnings</h2>
              <ul className="mt-3 space-y-2">
                {caseStudy.learnings.map((item) => (
                  <li
                    key={item}
                    className="text-muted-foreground flex gap-2 leading-relaxed"
                  >
                    <span className="text-primary">—</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </FadeIn>
          ) : null}

          {caseStudy.gallery.length > 0 ? (
            <FadeIn className="grid gap-4 sm:grid-cols-2">
              {caseStudy.gallery.map((image) => (
                <div
                  key={image.src}
                  className="border-border relative aspect-video overflow-hidden rounded-xl border"
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="384px"
                    className="object-cover"
                  />
                </div>
              ))}
            </FadeIn>
          ) : null}
        </div>
      ) : null}

      <nav className="border-border mt-16 grid grid-cols-2 gap-4 border-t pt-8">
        {previous ? (
          <Link
            href={`/projects/${previous.slug}`}
            className="group border-border hover:border-primary/40 flex flex-col gap-1 rounded-xl border p-4 transition-colors"
          >
            <span className="text-muted-foreground inline-flex items-center gap-1 text-xs">
              <ArrowLeft className="size-3.5" /> Previous
            </span>
            <span className="group-hover:text-primary font-medium">
              {previous.title}
            </span>
          </Link>
        ) : (
          <div />
        )}
        {next ? (
          <Link
            href={`/projects/${next.slug}`}
            className="group border-border hover:border-primary/40 flex flex-col items-end gap-1 rounded-xl border p-4 text-right transition-colors"
          >
            <span className="text-muted-foreground inline-flex items-center gap-1 text-xs">
              Next <ArrowRight className="size-3.5" />
            </span>
            <span className="group-hover:text-primary font-medium">
              {next.title}
            </span>
          </Link>
        ) : (
          <div />
        )}
      </nav>
    </article>
  );
}
