import Link from "next/link";
import { Mail } from "lucide-react";
import { siteConfig } from "@/lib/content";
import { navItems } from "@/components/layout/nav-items";
import { GitHubIcon, LinkedInIcon } from "@/components/layout/social-icons";

export function Footer() {
  return (
    <footer className="border-border/60 border-t">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-12 sm:px-6 md:flex-row md:items-start md:justify-between">
        <div className="space-y-2">
          <p className="font-mono text-sm font-semibold">{siteConfig.name}</p>
          <p className="text-muted-foreground max-w-xs text-sm">
            {siteConfig.role}
          </p>
          <p className="text-muted-foreground text-sm">{siteConfig.location}</p>
        </div>

        <nav className="text-muted-foreground flex flex-wrap gap-x-6 gap-y-2 text-sm">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
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
          <a
            href={`mailto:${siteConfig.email}`}
            aria-label="E-mail"
            className="text-muted-foreground hover:text-foreground"
          >
            <Mail className="size-5" />
          </a>
        </div>
      </div>

      <div className="border-border/60 text-muted-foreground border-t py-6 text-center text-xs">
        © {new Date().getFullYear()} {siteConfig.name}. Construído com Next.js,
        TypeScript & Tailwind CSS.
      </div>
    </footer>
  );
}
