import {
  experienceSchema,
  educationSchema,
  type Experience,
  type Education,
} from "@/lib/content/schemas/experience.schema";

const experienceData: Experience[] = [
  {
    company: "Nefex",
    companySlug: "nefex",
    role: "Analista de Operações Jr.",
    location: "Natal, Brasil (Híbrido)",
    startDate: "2026-05",
    endDate: null,
    summary:
      "Operações de tecnologia e ferramentas internas na Nefex, construindo automações e integrações que otimizam processos e melhoram a eficiência operacional.",
    bullets: [
      "Atuação direta em operações de tecnologia e suporte a processos da organização.",
      "Desenvolvimento e manutenção de automações e integrações que otimizam fluxos operacionais e melhoram a eficiência dos serviços.",
      "Implementação de ferramentas e soluções internas com foco em estabilidade, segurança e escalabilidade.",
      "Colaboração com equipes multidisciplinares para identificar melhorias e propor soluções baseadas em tecnologia.",
    ],
    stack: ["Automação", "Integrações", "Ferramentas Internas"],
  },
  {
    company: "Sensilog",
    companySlug: "sensilog",
    role: "Engenheiro de Software (Freelance)",
    location: "Remoto",
    startDate: "2025-02",
    endDate: "2025-12",
    summary:
      "Engenharia full-stack e de IA para projetos de clientes, de front ends interativos a APIs em produção e funcionalidades com LLM.",
    bullets: [
      "Projetou e entregou funcionalidades full-stack de ponta a ponta, de UIs interativas a APIs robustas e escaláveis.",
      "Fez fine-tuning de LLMs e construiu pipelines de retrieval-augmented generation (RAG) para viabilizar aplicações de IA customizadas e específicas de domínio.",
      "Integrou pipelines de NLP em sistemas de produção, conectando a saída dos modelos diretamente a funcionalidades voltadas ao cliente.",
      "Trabalhou com React, Node.js, Flask, Python e Java conforme as restrições de cada projeto.",
    ],
    stack: ["React", "Node.js", "Flask", "Python", "Java", "LLMs", "RAG"],
  },
  {
    company: "Dataprev",
    companySlug: "dataprev",
    role: "Analista de Business Intelligence (Estágio)",
    location: "João Pessoa, Brasil",
    startDate: "2024-04",
    endDate: "2026-01",
    summary:
      "Desenvolvimento de sistemas de BI na empresa federal de processamento de dados da previdência social, com foco em análise de dados e dashboards.",
    bullets: [
      "Construiu e manteve dashboards de Business Intelligence usando WebFocus e Hyperstage para dados institucionais em larga escala.",
      "Desenvolveu painéis de visualização de dados em JavaScript e Java que tornaram conjuntos de dados complexos acionáveis para stakeholders não técnicos.",
      "Trabalhou diretamente com pipelines de dados em produção que alimentam decisões do setor público.",
    ],
    stack: ["WebFocus", "Hyperstage", "JavaScript", "Java", "SQL"],
  },
  {
    company: "Compass UOL",
    companySlug: "compass-uol",
    role: "Engenheiro Front-End (Programa de Bolsas)",
    location: "Remoto",
    startDate: "2024-08",
    endDate: "2025-01",
    summary:
      "Programa seletivo de formação em front-end (parceria com a UNIPÊ) combinando prática intensiva de Scrum com trabalho de nível de produção em React/AWS.",
    bullets: [
      "Selecionado para um programa competitivo de bolsas de tecnologia em parceria com a UNIPÊ, focado em engenharia front-end moderna.",
      "Construiu aplicações com React, Redux e AWS sob Scrum, com sprint reviews semanais e código documentado via Storybook.",
      "Aplicou princípios do AWS Well-Architected Framework e práticas de segurança web em cenários simulados de produção.",
      "Conciliou 20 horas semanais de estudo estruturado e entregas práticas sob mentoria de engenheiros sênior.",
    ],
    stack: ["React", "Redux", "AWS", "TypeScript", "Storybook", "Scrum"],
  },
  {
    company: "Fábrica de Software (UNIPÊ)",
    companySlug: "fabrica-de-software",
    role: "Desenvolvedor Full-Stack",
    location: "João Pessoa, Brasil",
    startDate: "2023-07",
    endDate: "2023-12",
    summary:
      "Entrega full-stack em uma parceria com o setor público junto à Polícia Militar de João Pessoa, construindo uma ferramenta de IA para análise de sentimento.",
    bullets: [
      "Construiu uma ferramenta de IA de análise de sentimento para dados de comentários públicos em parceria direta com a Polícia Militar de João Pessoa (PMJP).",
      "Entregou o stack completo com Python, Django, JavaScript, HTML e CSS, containerizado com Docker.",
      "Geriu entregas e planejamento de sprints do projeto usando Trello em uma equipe pequena e multidisciplinar.",
    ],
    stack: ["Python", "Django", "JavaScript", "Docker", "HTML", "CSS"],
  },
  {
    company: "São Braz",
    companySlug: "sao-braz",
    role: "Aprendiz de Suporte de TI",
    location: "João Pessoa, Brasil",
    startDate: "2022-01",
    endDate: "2023-07",
    summary:
      "Primeira posição profissional: suporte de TI e manutenção de infraestrutura para uma grande empresa da indústria alimentícia.",
    bullets: [
      "Prestou suporte de hardware e software para usuários em toda a organização.",
      "Configurou equipamentos e realizou manutenção preventiva em sistemas e dispositivos.",
      "Construiu a base de troubleshooting e conhecimento de sistemas que o levou ao caminho de engenharia de software.",
    ],
    stack: ["Suporte de Hardware", "Windows", "Redes"],
  },
];

const educationData: Education[] = [
  {
    institution: "Centro Universitário de João Pessoa (UNIPÊ)",
    degree: "Pós-graduação em Engenharia de Software com IA Generativa",
    startDate: "2026",
    endDate: null,
    note: "Em andamento — Híbrido",
  },
  {
    institution: "Centro Universitário de João Pessoa (UNIPÊ)",
    degree: "Bacharelado em Ciência da Computação",
    startDate: "2023",
    endDate: "2026",
  },
  {
    institution: "Faculdade Internacional da Paraíba (FPB)",
    degree: "Bacharelado em Ciência da Computação",
    startDate: "2022",
    endDate: "2023",
    note: "Transferido para a UNIPÊ",
  },
  {
    institution: "Colégio Intensivo",
    degree: "Ensino Médio",
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
