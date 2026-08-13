import {
  siteConfigSchema,
  type SiteConfig,
} from "@/lib/content/schemas/site-config.schema";

const siteConfigData: SiteConfig = {
  name: "Jefferson Fidelis",
  role: "Software Engineer — AI-Focused Full-Stack",
  title: "Jefferson Fidelis — Software Engineer, AI Systems",
  description:
    "Full-stack software engineer building AI-driven products — LLM applications, RAG pipelines, and real-time computer vision — end to end from architecture to production.",
  keywords: [
    "Jefferson Fidelis",
    "Software Engineer",
    "Full Stack Developer",
    "Artificial Intelligence",
    "LLM",
    "RAG",
    "Computer Vision",
    "Machine Learning",
    "Next.js",
    "TypeScript",
  ],
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://jeffersonfidelis.dev",
  location: "Natal, RN, Brazil",
  email: "junior.fidelis.3386@gmail.com",
  phone: "+55 (83) 99418-6006",
  bio: [
    "Full-stack software engineer with four years of experience building scalable systems, APIs, and end-to-end web applications. Hands-on with Python, Node.js, Java, React, and Angular, with a growing focus on data-oriented architecture and service integration.",
    "Consistent track record delivering AI-driven products — from LLM-powered applications and retrieval-augmented generation (RAG) pipelines to real-time computer vision systems — always tying the technology back to a concrete business or user problem rather than treating it as a demo.",
    "Final-year Computer Science student with a solid foundation in data structures, algorithms, and software engineering practice. Analytical, delivery-oriented, and comfortable owning a problem from architecture through production.",
  ],
  social: {
    github: "https://github.com/FIDEL7Z",
    linkedin: "https://www.linkedin.com/in/fidel7zs",
  },
  resumeHref: "/resume/jefferson-fidelis-resume.png",
  stats: [
    { label: "Years of experience", value: "4+" },
    { label: "Projects shipped", value: "20+" },
    { label: "Companies collaborated with", value: "6" },
    { label: "AI / Computer Vision projects", value: "3" },
  ],
};

export const siteConfig = siteConfigSchema.parse(siteConfigData);
