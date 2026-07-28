import {
  experienceSchema,
  educationSchema,
  type Experience,
  type Education,
} from "@/lib/content/schemas/experience.schema";

const experienceData: Experience[] = [
  {
    company: "Sensilog",
    companySlug: "sensilog",
    role: "Software Engineer (Freelance)",
    location: "Remote",
    startDate: "2025-02",
    endDate: "2025-12",
    summary:
      "Full-stack and AI engineering for client projects, from interactive front ends to production APIs and LLM-powered features.",
    bullets: [
      "Designed and shipped full-stack features end to end, from interactive UIs to robust, scalable APIs.",
      "Fine-tuned LLMs and built retrieval-augmented generation (RAG) pipelines to power custom, domain-specific AI applications.",
      "Integrated NLP pipelines into production systems, connecting model output directly to client-facing features.",
      "Worked across React, Node.js, Flask, Python, and Java depending on the project's constraints.",
    ],
    stack: ["React", "Node.js", "Flask", "Python", "Java", "LLMs", "RAG"],
  },
  {
    company: "Dataprev",
    companySlug: "dataprev",
    role: "Business Intelligence Analyst",
    location: "João Pessoa, Brazil",
    startDate: "2024-02",
    endDate: "2026-02",
    summary:
      "BI systems development at Brazil's federal social-security data-processing company, focused on data analysis and dashboarding.",
    bullets: [
      "Built and maintained Business Intelligence dashboards using WebFocus and Hyperstage for large-scale institutional data.",
      "Developed data-visualization panels in JavaScript and Java that made complex datasets actionable for non-technical stakeholders.",
      "Worked directly with production data pipelines feeding public-sector decision-making.",
    ],
    stack: ["WebFocus", "Hyperstage", "JavaScript", "Java", "SQL"],
  },
  {
    company: "Compass UOL",
    companySlug: "compass-uol",
    role: "Front-End Engineer (Scholarship Program)",
    location: "Remote",
    startDate: "2024-08",
    endDate: "2025-01",
    summary:
      "Selective front-end training program (partnership with UNIPÊ) combining intensive Scrum practice with production-grade React/AWS work.",
    bullets: [
      "Selected for a competitive technology scholarship program in partnership with UNIPÊ, focused on modern front-end engineering.",
      "Built applications with React, Redux, and AWS under Scrum, with weekly sprint reviews and code documented via Storybook.",
      "Applied AWS Well-Architected Framework principles and web-security practices across simulated production scenarios.",
      "Balanced 20 hours/week of structured study and hands-on delivery under mentorship from senior engineers.",
    ],
    stack: ["React", "Redux", "AWS", "TypeScript", "Storybook", "Scrum"],
  },
  {
    company: "Fábrica de Software (UNIPÊ)",
    companySlug: "fabrica-de-software",
    role: "Full-Stack Developer",
    location: "João Pessoa, Brazil",
    startDate: "2023-08",
    endDate: "2023-12",
    summary:
      "Full-stack delivery on a public-sector partnership with the João Pessoa Military Police, building an AI tool for sentiment analysis.",
    bullets: [
      "Built a sentiment-analysis AI tool for public comment data in direct partnership with the João Pessoa Military Police (PMJP).",
      "Delivered the full stack with Python, Django, JavaScript, HTML, and CSS, containerized with Docker.",
      "Managed delivery and sprint planning for the project using Trello in a small cross-functional team.",
    ],
    stack: ["Python", "Django", "JavaScript", "Docker", "HTML", "CSS"],
  },
  {
    company: "São Braz",
    companySlug: "sao-braz",
    role: "IT Support Apprentice",
    location: "João Pessoa, Brazil",
    startDate: "2022-04",
    endDate: "2023-07",
    summary:
      "First professional role: hands-on IT support and infrastructure maintenance for a large food-industry company.",
    bullets: [
      "Provided hardware and software support for end users across the organization.",
      "Configured equipment and performed preventive maintenance on systems and devices.",
      "Built the foundational troubleshooting and systems literacy that led into a full software-engineering path.",
    ],
    stack: ["Hardware Support", "Windows", "Networking"],
  },
];

const educationData: Education[] = [
  {
    institution: "Centro Universitário de João Pessoa (UNIPÊ)",
    degree: "B.Sc. in Computer Science",
    startDate: "2023",
    endDate: "2026",
  },
  {
    institution: "Faculdade Internacional da Paraíba (FPB)",
    degree: "B.Sc. in Computer Science",
    startDate: "2022",
    endDate: "2023",
    note: "Transferred to UNIPÊ",
  },
  {
    institution: "Colégio Intensivo",
    degree: "High School Diploma",
    startDate: "2019",
    endDate: "2021",
  },
];

export const experience = experienceData.map((entry) =>
  experienceSchema.parse(entry),
);
export const education = educationData.map((entry) =>
  educationSchema.parse(entry),
);
