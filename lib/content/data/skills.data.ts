import { skillSchema, type Skill } from "@/lib/content/schemas/skill.schema";

const skillsData: Skill[] = [
  // Frontend
  { name: "React", category: "frontend" },
  { name: "Next.js", category: "frontend" },
  { name: "TypeScript", category: "frontend" },
  { name: "Tailwind CSS", category: "frontend" },
  { name: "Framer Motion", category: "frontend" },
  { name: "shadcn/ui", category: "frontend" },
  { name: "Angular", category: "frontend" },
  { name: "HTML & CSS", category: "frontend" },

  // Backend
  { name: "Node.js", category: "backend" },
  { name: "NestJS", category: "backend" },
  { name: "FastAPI", category: "backend" },
  { name: "Python", category: "backend" },
  { name: "Java", category: "backend" },
  { name: "Django", category: "backend" },

  // Data
  { name: "PostgreSQL", category: "data" },
  { name: "MongoDB", category: "data" },
  { name: "Redis", category: "data" },
  { name: "Prisma", category: "data" },
  { name: "SQL", category: "data" },

  // AI
  { name: "OpenAI API", category: "ai" },
  { name: "Gemini", category: "ai" },
  { name: "CrewAI", category: "ai" },
  { name: "LangChain", category: "ai" },
  { name: "RAG", category: "ai" },
  { name: "LLMs", category: "ai" },
  { name: "Machine Learning", category: "ai" },
  { name: "Computer Vision", category: "ai" },

  // DevOps
  { name: "Docker", category: "devops" },
  { name: "AWS", category: "devops" },
  { name: "GitHub Actions", category: "devops" },
];

export const skills = skillsData.map((skill) => skillSchema.parse(skill));
