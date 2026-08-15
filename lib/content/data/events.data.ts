import { eventSchema, type Event } from "@/lib/content/schemas/event.schema";

const eventsData: Event[] = [
  {
    slug: "dataprev-farewell",
    title: "Encerrando meu estágio na Dataprev",
    date: "2025-02-19",
    tag: "Dataprev",
    description:
      "Fechei hoje um capítulo importante. Minha passagem pela Dataprev me impulsionou técnica e profissionalmente, e me deu uma visão muito mais ampla sobre tecnologia, dados e impacto social através do trabalho em sistemas do setor público.",
    image: {
      src: "/images/events/dataprev-encerramento.jpeg",
      alt: "Momento de despedida ao final do estágio na Dataprev",
    },
    href: "https://www.linkedin.com/posts/jefferson-fidelis-16bb091b1_hoje-eu-encerro-um-ciclo-muito-importante-activity-7431130833350070273-SuZG",
  },
  {
    slug: "compass-uol-journey",
    title: "Encerrando o programa de bolsas da Compass UOL",
    date: "2025-01-08",
    tag: "Compass UOL",
    description:
      "Encerrei com gratidão minha passagem pelo programa de formação da Compass UOL. Desde agosto de 2024, aprendi e evoluí em metodologias ágeis, React, AWS e segurança web — uma experiência genuinamente transformadora.",
    image: {
      src: "/images/events/compass-uol-jornada.jpg",
      alt: "Momento de formatura do programa de bolsas da Compass UOL",
    },
    href: "https://www.linkedin.com/feed/update/urn:li:activity:7282848832428650496/",
  },
  {
    slug: "dataprev-anniversary",
    title: "Comemorando com o time da Dataprev",
    date: "2024-04-17",
    tag: "Dataprev",
    description:
      "Grato por fazer parte de um time tão bom — comemorando mais um ano, e as amizades que tornaram cada dia na Dataprev melhor.",
    image: {
      src: "/images/events/dataprev-aniversario.jpg",
      alt: "Comemoração de aniversário com o time da Dataprev",
    },
    href: "https://www.linkedin.com/feed/update/urn:li:activity:7186685115157147648/",
  },
  {
    slug: "academic-cv-project",
    title: "Projeto acadêmico: visão computacional em tempo real",
    date: "2024-06-03",
    tag: "Acadêmico",
    description:
      "Concluí um projeto acadêmico de processamento de imagens e visão computacional — um sistema de detecção de objetos e pessoas em tempo real construído com YOLOv4 no framework Darknet. (Veja o case completo em AI Lab → Detecção de Objetos em Tempo Real.)",
    image: {
      src: "/images/events/projeto-academico.png",
      alt: "Apresentação do projeto acadêmico de detecção de objetos em tempo real",
    },
    href: "https://www.linkedin.com/feed/update/urn:li:activity:7203547060195725312/",
  },
  {
    slug: "dataprev-interns",
    title: "Orgulho do time de estagiários da Dataprev",
    date: "2024-06-11",
    tag: "Dataprev",
    description:
      "Orgulho de trabalhar com um time sempre pronto para aprender e fazer a diferença.",
    image: {
      src: "/images/events/dataprev-estagiarios.png",
      alt: "Foto em grupo do time de estagiários da Dataprev",
    },
  },
  {
    slug: "pm-delivery-2023",
    title: "Entrega do projeto de análise de sentimento para a Polícia Militar",
    date: "2023-12-04",
    tag: "Fábrica de Software",
    description:
      "Dia da entrega final do projeto de análise de sentimento construído em parceria com a Polícia Militar de João Pessoa — três meses de trabalho da equipe Fábrica de Software × UNIPÊ 2023.2.",
    image: {
      src: "/images/events/entrega-pm.jpeg",
      alt: "Entrega do projeto de análise de sentimento para a Polícia Militar",
    },
    href: "https://www.linkedin.com/posts/jefferson-fidelis-16bb091b1_inovaaexaeto-tecnologia-impactosocial-activity-7137609327263002624-xzfP",
  },
  {
    slug: "team-sensilog-2023",
    title: "Equipe Sensilog — dia de entrega do projeto",
    date: "2023-12-04",
    tag: "Sensilog",
    description:
      "A equipe Sensilog da Fábrica de Software após concluir o projeto em parceria com a PMJP.",
    image: {
      src: "/images/events/team-sensilog.jpeg",
      alt: "A equipe Sensilog no dia de entrega do projeto",
    },
    href: "https://www.linkedin.com/posts/caiiohenryk_essa-semana-n%C3%B3s-da-equipe-sensilog-da-f%C3%A1brica-ugcPost-7138307848148627456-Dn_h",
  },
  {
    slug: "sao-braz-farewell",
    title: "Último dia na São Braz",
    date: "2022-07-04",
    tag: "São Braz",
    description:
      "Último dia na São Braz ao lado de um time de TI incrível — trabalho em equipe e aprendizado mútuo inesquecíveis. Caminhos diferentes pela frente, mas uma amizade duradoura.",
    image: {
      src: "/images/events/sao-braz-despedida.jpeg",
      alt: "Momento de despedida com o time de TI da São Braz",
    },
    href: "https://www.linkedin.com/posts/jefferson-fidelis-16bb091b1_gratidaeto-aprendizado-experiaeanciaincraedvel-activity-7080604581944057857-5332",
  },
];

export const events = eventsData
  .map((event) => eventSchema.parse(event))
  .sort((a, b) => b.date.localeCompare(a.date));
