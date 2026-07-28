# Jefferson Fidelis — Portfolio

Personal portfolio and case-study site, built as a production-grade Next.js application rather than a static template.

**Stack:** Next.js (App Router) · React · TypeScript (strict) · Tailwind CSS v4 · shadcn/ui · Framer Motion · Zod · React Hook Form · Resend

## Getting started

```bash
npm install
npm run dev       # http://localhost:3000
```

Other scripts:

```bash
npm run build      # production build
npm run start      # serve the production build
npm run lint       # ESLint
npm run format     # Prettier (writes)
```

A pre-commit hook (Husky + lint-staged) runs ESLint, Prettier, and a full `tsc --noEmit` on every commit.

## Environment variables

| Variable               | Required | Purpose                                                                                                                                                                                                                             |
| ---------------------- | -------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `RESEND_API_KEY`       | No       | Enables the `/contact` form to actually send email via [Resend](https://resend.com). Without it, the API route logs submissions to the console in development and returns a clear 503 in production — it never pretends to succeed. |
| `NEXT_PUBLIC_SITE_URL` | No       | Canonical site URL used for metadata, Open Graph tags, and the sitemap. Defaults to a placeholder — set this to the real production domain once deployed.                                                                           |

## Architecture

There is no database and no admin panel by design — content is versioned, typed TypeScript data validated by Zod, not a CMS. See `lib/content/`.

```
app/                  Routes (App Router): /, /projects, /projects/[slug], /resume, /ai, /contact, /api/contact
components/
  ui/                 shadcn/ui primitives (generated, safe to customize in place)
  layout/             Header, Footer, theme toggle, nav config
  sections/           Home page sections (one file each — page.tsx just composes them)
  projects/           Project card / grid / filter / archive list
  shared/             Reusable pieces used across pages (section heading, timelines)
  motion/             Thin Framer Motion wrappers (FadeIn, StaggerList)
lib/
  content/
    schemas/          Zod schema per content type — the source of truth for shape
    data/              *.data.ts — the actual content, validated at import time
    index.ts           The only import surface pages use (getProjects(), getExperience(), ...)
  email/              Resend client wrapper
  seo.ts              Shared generateMetadata helper
hooks/                 Client-only hooks (typing effect, etc.)
```

## Updating content

All content lives in `lib/content/data/*.data.ts` as plain TypeScript arrays, validated against a Zod schema in the matching `lib/content/schemas/*.schema.ts` file. To add or edit something:

1. Open the relevant `*.data.ts` file (e.g. `projects.data.ts` for a new project, `experience.data.ts` for a new role).
2. Add or edit an entry. TypeScript and Zod will both flag anything malformed — `npm run build` fails loudly on bad content instead of silently rendering nothing.
3. Commit. There is no separate publish step.

Adding a project with a full case study means filling in the optional `caseStudy` object (`problem` / `solution` / `architecture` / `challenges` / `learnings` / `gallery`); omitting it puts the project in the compact "Other projects" archive instead of the main grid — set via the `featured` / `archived` booleans.

## Known follow-ups (Phase 2+, intentionally out of scope here)

- Blog (MDX) at `/blog`
- Live GitHub / LeetCode / Kaggle integrations
- Cloudflare Turnstile on the contact form
- Deeper Core Web Vitals tuning and structured data (JSON-LD)

## Contact

- Email: junior.fidelis.3386@gmail.com
- LinkedIn: https://www.linkedin.com/in/jefferson-fidelis-16bb091b1/
