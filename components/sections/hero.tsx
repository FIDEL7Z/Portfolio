"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Download } from "lucide-react";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/content";
import { useTypingEffect } from "@/hooks/use-typing-effect";
import { GitHubIcon, LinkedInIcon } from "@/components/layout/social-icons";

const ROLES = [
  "Software Engineer",
  "AI / ML Engineer",
  "Full-Stack Developer",
  "Computer Vision Enthusiast",
] as const;

export function Hero() {
  const role = useTypingEffect(ROLES);

  return (
    <section className="mx-auto flex max-w-6xl flex-col-reverse items-center gap-12 px-4 pt-16 pb-20 sm:px-6 md:flex-row md:gap-16 md:pt-24 md:pb-28">
      <div className="flex-1 space-y-6 text-center md:text-left">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="border-border bg-secondary/60 text-muted-foreground inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs"
        >
          <span className="size-1.5 rounded-full bg-emerald-500" />
          Open to Software Engineering &amp; AI roles
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl"
        >
          {siteConfig.name}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-primary h-8 font-mono text-lg sm:text-xl"
          aria-live="polite"
        >
          {role}
          <span className="animate-pulse">|</span>
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="text-muted-foreground mx-auto max-w-xl text-balance md:mx-0"
        >
          {siteConfig.description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col items-center gap-3 sm:flex-row md:justify-start"
        >
          <Button
            size="lg"
            nativeButton={false}
            render={<Link href="/projects" />}
          >
            View Work
            <ArrowRight className="size-4" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            nativeButton={false}
            render={<a href={siteConfig.resumeHref} download />}
          >
            <Download className="size-4" />
            Download Resume
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex items-center justify-center gap-5 pt-2 md:justify-start"
        >
          <a
            href={siteConfig.social.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <GitHubIcon className="size-5" />
          </a>
          <a
            href={siteConfig.social.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <LinkedInIcon className="size-5" />
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.94 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="border-border relative aspect-square w-48 shrink-0 overflow-hidden rounded-3xl border shadow-2xl sm:w-64 md:w-72"
      >
        <Image
          src="/images/jefferson-fidelis.jpg"
          alt={siteConfig.name}
          fill
          sizes="(min-width: 768px) 288px, 256px"
          className="object-cover"
          priority
        />
      </motion.div>
    </section>
  );
}
