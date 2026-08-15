import {
  siteConfigSchema,
  type SiteConfig,
} from "@/lib/content/schemas/site-config.schema";

const siteConfigData: SiteConfig = {
  name: "Jefferson Fidelis",
  role: "Engenheiro de Software — Full-Stack com foco em IA",
  title: "Jefferson Fidelis — Engenheiro de Software, Sistemas de IA",
  description:
    "Engenheiro de software full-stack construindo produtos orientados a IA — aplicações com LLM, pipelines de RAG e visão computacional em tempo real — de ponta a ponta, da arquitetura à produção.",
  keywords: [
    "Jefferson Fidelis",
    "Engenheiro de Software",
    "Desenvolvedor Full Stack",
    "Inteligência Artificial",
    "LLM",
    "RAG",
    "Visão Computacional",
    "Aprendizado de Máquina",
    "Next.js",
    "TypeScript",
  ],
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://jeffersonfidelis.dev",
  location: "Natal, RN, Brasil",
  email: "junior.fidelis.3386@gmail.com",
  phone: "+55 (83) 99418-6006",
  bio: [
    "Engenheiro de software full-stack com quatro anos de experiência construindo sistemas escaláveis, APIs e aplicações web de ponta a ponta. Atuo com Python, Node.js, Java, React e Angular, com foco crescente em arquitetura orientada a dados e integração de serviços.",
    "Histórico consistente entregando produtos orientados a IA — de aplicações com LLM e pipelines de retrieval-augmented generation (RAG) a sistemas de visão computacional em tempo real — sempre conectando a tecnologia a um problema real de negócio ou de usuário, e não tratando como demonstração.",
    "Estudante do último ano de Ciência da Computação, com base sólida em estruturas de dados, algoritmos e prática de engenharia de software. Analítico, orientado a entregas e confortável em assumir um problema da arquitetura até a produção.",
  ],
  social: {
    github: "https://github.com/FIDEL7Z",
    linkedin: "https://www.linkedin.com/in/fidel7zs",
  },
  resumeHref: "/resume/jefferson-fidelis-resume.png",
  stats: [
    { label: "Anos de experiência", value: "4+" },
    { label: "Projetos entregues", value: "20+" },
    { label: "Empresas em que atuei", value: "6" },
    { label: "Projetos de IA / Visão Computacional", value: "3" },
  ],
};

export const siteConfig = siteConfigSchema.parse(siteConfigData);
