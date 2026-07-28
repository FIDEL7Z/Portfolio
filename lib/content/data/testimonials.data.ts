import {
  testimonialSchema,
  companySchema,
  type Testimonial,
  type Company,
} from "@/lib/content/schemas/testimonial.schema";

const testimonialsData: Testimonial[] = [
  {
    name: "Caio Henrique",
    avatar: {
      src: "/images/testimonials/caio-henrique.png",
      alt: "Caio Henrique",
    },
    language: "pt",
    quote:
      "Jefferson é um profissional que não se encontra em qualquer lugar! Esforçado e responsável, ele não descansa até atingir o resultado esperado. Além disso, Jefferson sempre torna o clima da equipe mais leve com seu jeito descontraído de ser. Embora eu conheça muitos desenvolvedores front-end, Jefferson foi quem mudou minha forma de ver a programação! É um prazer trabalhar com este colega.",
    linkedin: "https://www.linkedin.com/in/caiiohenryk/",
    github: "https://github.com/caiiohenryk",
  },
  {
    name: "Lucas Freire",
    avatar: {
      src: "/images/testimonials/lucas-freire.png",
      alt: "Lucas Freire",
    },
    language: "pt",
    quote:
      "Jefferson Fidelis é um profissional muito dedicado e trabalhador, estava presente na minha equipe de desenvolvimento e posso atestar que ele é alguém que nunca desiste de suas tarefas, ou as deixa de lado, sempre pede feedback dos seus colegas, como também trabalha em prol do coletivo, passa horas auxiliando a equipe, mesmo em situações fora do âmbito de trabalho, caso seja preciso, e pensando em formas de melhorar o produto que precisa ser entregue ao cliente!",
    linkedin: "https://www.linkedin.com/in/lucas-freire-b3b09a236/",
    github: "https://github.com/LuccasFreire",
  },
  {
    name: "Pedro Henrique",
    avatar: {
      src: "/images/testimonials/pedro-henrique.png",
      alt: "Pedro Henrique",
    },
    language: "pt",
    quote:
      "Jefferson, foi um prazer ter a oportunidade de participar de um projeto ao lado desse profissional, uma pessoa incrível e um profissional sem igual, dedicado e muito esforçado!",
    linkedin: "https://www.linkedin.com/in/pedrohaugusto/",
    github: "https://github.com/PedroHaugusto",
  },
  {
    name: "Ian Pedro",
    avatar: { src: "/images/testimonials/ian-pedro.png", alt: "Ian Pedro" },
    language: "pt",
    quote:
      "Trabalhar com você é sempre uma experiência incrível. Seu compromisso com a excelência é inspirador, eu sempre aprendo muito com você, seu esforço e dedicação são admiráveis, você é um profissional excepcional. Seu trabalho é sempre exemplar, é um prazer trabalhar com alguém tão talentoso e dedicado como você.",
    linkedin: "https://www.linkedin.com/in/ian-pedro-1a2426250/",
    github: "https://github.com/IanPedr",
  },
  {
    name: "Kleison Madruga",
    avatar: {
      src: "/images/testimonials/kleison-madruga.png",
      alt: "Kleison Madruga",
    },
    language: "pt",
    quote:
      'Jefferson é o tipo de programador que, na minha opinião, tem muito potencial de crescimento por possuir três características: curiosidade, vontade de aprender e capacidade de "se virar" quando necessário. Já o auxiliei em alguns projetos e, quando algum problema ocorria e eu não podia ajudar, ele mesmo corria atrás e resolvia sozinho. Além disso, ele também é uma pessoa que tem uma energia muito positiva.',
    linkedin: "https://www.linkedin.com/in/kleyson-madruga/",
    github: "https://github.com/kleysonfmadruga",
  },
  {
    name: "Andre Gustavo",
    avatar: {
      src: "/images/testimonials/andre-gustavo.png",
      alt: "Andre Gustavo",
    },
    language: "pt",
    quote:
      "Em 2022-2023 tive o prazer e honra de cumprir meu contrato como aprendiz na São Braz Indústria e Comércio de Alimentos junto a Jefferson. De todos que passaram por aquele setor, creio que Jefferson teve a maior curva de aprendizado e evolução como pessoa e profissional.",
    linkedin: "https://www.linkedin.com/in/andre-gustavo-a07809204/",
    github: "https://github.com/AndreGugaz",
  },
  {
    name: "João Bosco",
    avatar: { src: "/images/testimonials/joao-bosco.png", alt: "João Bosco" },
    language: "pt",
    quote:
      "Gostaria de expressar o quanto foi enriquecedor e gratificante ter tido a oportunidade de trabalhar ao seu lado. Sua capacidade de criar um ambiente de trabalho acolhedor e amigável não passou despercebida. Os dias tornavam-se mais leves e agradáveis com a sua presença, e a colaboração fluía de maneira natural.",
    linkedin: "https://www.linkedin.com/in/jo%C3%A3o-bosco-8205811b7/",
  },
];

const companiesData: Company[] = [
  {
    name: "Dataprev",
    href: "https://www.dataprev.gov.br/",
    logo: { src: "/images/companies/dataprev.png", alt: "Dataprev logo" },
  },
  {
    name: "Sensilog",
    href: "https://www.linkedin.com/company/sensilog/",
    logo: { src: "/images/companies/sensilog.png", alt: "Sensilog logo" },
  },
  {
    name: "Compass UOL",
    href: "https://compass.uol/pt/home/",
    logo: { src: "/images/companies/compass-uol.png", alt: "Compass UOL logo" },
  },
  {
    name: "Fábrica de Software (UNIPÊ)",
    href: "https://www.linkedin.com/company/f%C3%A1brica-de-software-unipe/",
    logo: {
      src: "/images/companies/fabrica-de-software.png",
      alt: "Fábrica de Software UNIPÊ logo",
    },
  },
  {
    name: "São Braz",
    href: "https://www.saobraz.com.br/",
    logo: { src: "/images/companies/sao-braz.png", alt: "São Braz logo" },
  },
  {
    name: "Polícia Militar da Paraíba",
    href: "https://www.pm.pb.gov.br/portal/",
    logo: {
      src: "/images/companies/pmpb.png",
      alt: "Polícia Militar da Paraíba logo",
    },
  },
];

export const testimonials = testimonialsData.map((entry) =>
  testimonialSchema.parse(entry),
);
export const companies = companiesData.map((entry) =>
  companySchema.parse(entry),
);
