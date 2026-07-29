import { eventSchema, type Event } from "@/lib/content/schemas/event.schema";

const eventsData: Event[] = [
  {
    slug: "dataprev-farewell",
    title: "Wrapping up my internship at Dataprev",
    date: "2025-02-19",
    tag: "Dataprev",
    description:
      "Closed out an important chapter today. My time at Dataprev pushed me forward technically and professionally, and gave me a much broader view of technology, data, and social impact through work on public-sector systems.",
    image: {
      src: "/images/events/dataprev-encerramento.jpeg",
      alt: "Farewell moment at the end of the Dataprev internship",
    },
    href: "https://www.linkedin.com/posts/jefferson-fidelis-16bb091b1_hoje-eu-encerro-um-ciclo-muito-importante-activity-7431130833350070273-SuZG",
  },
  {
    slug: "compass-uol-journey",
    title: "Wrapping up the Compass UOL scholarship program",
    date: "2025-01-08",
    tag: "Compass UOL",
    description:
      "Closed out my time in the Compass UOL training program with gratitude. Since August 2024 I learned and grew across agile methodologies, React, AWS, and web security — a genuinely transformative experience.",
    image: {
      src: "/images/events/compass-uol-jornada.jpg",
      alt: "Compass UOL scholarship program graduation moment",
    },
    href: "https://www.linkedin.com/feed/update/urn:li:activity:7282848832428650496/",
  },
  {
    slug: "dataprev-anniversary",
    title: "Celebrating with the Dataprev team",
    date: "2024-04-17",
    tag: "Dataprev",
    description:
      "Grateful to be part of such a great team — celebrating another year, and the friendships that made every day at Dataprev better.",
    image: {
      src: "/images/events/dataprev-aniversario.jpg",
      alt: "Birthday celebration with the Dataprev team",
    },
    href: "https://www.linkedin.com/feed/update/urn:li:activity:7186685115157147648/",
  },
  {
    slug: "academic-cv-project",
    title: "Academic project: real-time computer vision",
    date: "2024-06-03",
    tag: "Academic",
    description:
      "Wrapped up an academic project in image processing and computer vision — a real-time object and person detection system built with YOLOv4 on the Darknet framework. (See the full write-up under AI Lab → Real-Time Object Detection.)",
    image: {
      src: "/images/events/projeto-academico.png",
      alt: "Presentation of the real-time object detection academic project",
    },
    href: "https://www.linkedin.com/feed/update/urn:li:activity:7203547060195725312/",
  },
  {
    slug: "dataprev-interns",
    title: "Proud of the Dataprev interns team",
    date: "2024-06-11",
    tag: "Dataprev",
    description:
      "Proud to work with a team that's always ready to learn and make a difference.",
    image: {
      src: "/images/events/dataprev-estagiarios.png",
      alt: "Group photo of the Dataprev interns team",
    },
  },
  {
    slug: "pm-delivery-2023",
    title: "Delivering the sentiment-analysis project for the Military Police",
    date: "2023-12-04",
    tag: "Fábrica de Software",
    description:
      "Final delivery day for the sentiment-analysis project built in partnership with the João Pessoa Military Police — three months of work from the Fábrica de Software × UNIPÊ 2023.2 team.",
    image: {
      src: "/images/events/entrega-pm.jpeg",
      alt: "Delivery of the sentiment-analysis project to the Military Police",
    },
    href: "https://www.linkedin.com/posts/jefferson-fidelis-16bb091b1_inovaaexaeto-tecnologia-impactosocial-activity-7137609327263002624-xzfP",
  },
  {
    slug: "team-sensilog-2023",
    title: "Team Sensilog — project delivery day",
    date: "2023-12-04",
    tag: "Sensilog",
    description:
      "The Sensilog team from Fábrica de Software after finishing the PMJP partnership project.",
    image: {
      src: "/images/events/team-sensilog.jpeg",
      alt: "The Sensilog team on project delivery day",
    },
    href: "https://www.linkedin.com/posts/caiiohenryk_essa-semana-n%C3%B3s-da-equipe-sensilog-da-f%C3%A1brica-ugcPost-7138307848148627456-Dn_h",
  },
  {
    slug: "sao-braz-farewell",
    title: "Last day at São Braz",
    date: "2022-07-04",
    tag: "São Braz",
    description:
      "Last day at São Braz alongside an incredible IT team — unforgettable teamwork and mutual learning. Different paths ahead, but a lasting friendship.",
    image: {
      src: "/images/events/sao-braz-despedida.jpeg",
      alt: "Farewell moment with the São Braz IT team",
    },
    href: "https://www.linkedin.com/posts/jefferson-fidelis-16bb091b1_gratidaeto-aprendizado-experiaeanciaincraedvel-activity-7080604581944057857-5332",
  },
];

export const events = eventsData
  .map((event) => eventSchema.parse(event))
  .sort((a, b) => b.date.localeCompare(a.date));
