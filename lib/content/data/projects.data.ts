import {
  projectSchema,
  type ProjectInput,
} from "@/lib/content/schemas/project.schema";

/**
 * featured -> full case study, shown in the primary /projects grid and eligible for Home's Featured Work.
 * archived -> compact "Other projects" list only (name, tag, links) — no case study required.
 *
 * Curation note: of the ~22 projects on the old site, "Data Leveling" and "Chalé Hotel" were
 * dropped entirely — their old links are dead / point at a private Vercel dashboard rather than
 * a public deploy, and every link below was re-verified live before inclusion (see Phase 1 build notes).
 */
const projectsData: ProjectInput[] = [
  // ---------------------------------------------------------------------
  // Featured — full case studies
  // ---------------------------------------------------------------------
  {
    slug: "vision-based-drawing-system",
    title: "Sistema de Desenho por Visão Computacional",
    tagline:
      "Desenho sem contato por gestos, usando rastreamento de mãos em tempo real.",
    category: "ai",
    featured: true,
    year: 2025,
    cover: {
      src: "/images/projects/vision-based-drawing-system.gif",
      alt: "Sistema de desenho por rastreamento de mãos desenhando uma linha na tela conforme o dedo se move na frente da câmera",
    },
    stack: ["Python", "OpenCV", "MediaPipe", "NumPy"],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/FIDEL7Z/VisionBased_DrawingSystem",
        kind: "github",
      },
    ],
    summary:
      "Uma aplicação de desenho em tempo real e sem contato: o rastreamento de gestos das mãos via MediaPipe controla o desenho, a seleção de cores e o apagador sobre um feed de vídeo ao vivo.",
    caseStudy: {
      problem:
        "Ferramentas de desenho tradicionais exigem hardware de entrada dedicado. O objetivo era testar se apenas uma webcam poderia suportar uma interface de desenho natural e sem contato — útil tanto como experimento de IHC (Interação Humano-Computador) quanto como modelo de interação voltado à acessibilidade.",
      solution:
        "Um pipeline de rastreamento de mãos em tempo real que mapeia a contagem de dedos e a posição da ponta dos dedos para ações de desenho: um dedo desenha, de dois a quatro dedos trocam a cor, e a mão aberta aciona o apagador — tudo composto ao vivo sobre o feed da câmera.",
      architecture:
        "O MediaPipe Hands detecta 21 pontos de referência da mão por quadro; um classificador de gestos leve, derivado das posições desses pontos, determina a ferramenta ativa (desenhar / selecionar cor / apagar); o OpenCV compõe a camada de desenho sobre o feed de vídeo ao vivo por meio de operações com arrays do NumPy, quadro a quadro.",
      challenges: [
        "Manter a classificação de gestos estável sob condições de iluminação variáveis",
        "Reduzir a trepidação na linha desenhada causada por ruído no rastreamento das mãos entre quadros",
        "Mapear a posição contínua da mão para uma experiência de desenho responsiva e de baixa latência",
      ],
      learnings: [
        "Experiência prática com pipelines de visão computacional em tempo real, além da inferência em imagens estáticas",
        "O quanto o pré e pós-processamento clássico de visão computacional (suavização, limiares) ainda importa junto a modelos de ML",
        "Os trade-offs de IHC ao projetar um vocabulário de gestos que pareça intuitivo sem um tutorial na tela",
      ],
      gallery: [],
    },
  },
  {
    slug: "realtime-object-detection",
    title: "Detecção de Objetos em Tempo Real",
    tagline:
      "Detecção de objetos e pessoas em tempo real com YOLOv4-Tiny sobre o Darknet.",
    category: "ai",
    featured: true,
    year: 2024,
    cover: {
      src: "/images/projects/realtime-object-detection.gif",
      alt: "Feed de vídeo ao vivo com caixas delimitadoras, rótulos de classe e pontuações de confiança desenhados ao redor de objetos e pessoas detectados",
    },
    stack: ["Python", "Darknet", "YOLOv4-Tiny", "OpenCV"],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/FIDEL7Z/Projeto_Detec-o_de_Objetos",
        kind: "github",
      },
    ],
    summary:
      "Um projeto acadêmico de visão computacional: detecção de objetos e pessoas em tempo real usando YOLOv4-Tiny sobre o Darknet, treinado com as classes do COCO.",
    caseStudy: {
      problem:
        "Exploração acadêmica de visão computacional em tempo real: um modelo de detecção leve conseguiria identificar objetos e pessoas em um stream de vídeo ao vivo com rapidez suficiente para ser útil na prática, sem exigir um pipeline de produção dependente de GPU?",
      solution:
        "Um pipeline de detecção em tempo real usando YOLOv4-Tiny sobre o framework Darknet, configurado com o dataset COCO, desenhando caixas delimitadoras com rótulos de classe e pontuações de confiança sobre um feed de vídeo ao vivo via OpenCV.",
      architecture:
        "O Darknet carrega a configuração do YOLOv4-Tiny e os pesos pré-treinados; o OpenCV cuida da captura de vídeo, do pré-processamento dos quadros e da renderização das sobreposições de detecção (caixas delimitadoras, nomes de classe, pontuações de confiança) de volta em cada quadro.",
      challenges: [
        "Equilibrar velocidade de inferência e precisão de detecção ao escolher a variante -Tiny do modelo",
        "Ajustar os limiares de confiança para reduzir falsos positivos em um feed de câmera ao vivo",
        "Trabalhar dentro do fluxo orientado a configuração do Darknet, em vez de um loop de treinamento nativo em Python",
      ],
      learnings: [
        "Entendimento prático dos trade-offs de detectores de estágio único (velocidade vs. precisão)",
        "Como a escolha do tamanho do modelo (Tiny vs. YOLOv4 completo) impacta diretamente a viabilidade em tempo real",
        "Experiência prática com o stack clássico de visão computacional Darknet/OpenCV",
      ],
      gallery: [],
    },
  },
  {
    slug: "travel-planner-crewai",
    title: "Planejador de Viagens — CrewAI",
    tagline:
      "Orquestração multiagente de LLMs que planeja um itinerário de viagem e orçamento de ponta a ponta.",
    category: "ai",
    featured: true,
    year: 2025,
    cover: {
      src: "/images/projects/travel-planner-crewai.gif",
      alt: "Saída de terminal mostrando uma execução multiagente do CrewAI gerando um itinerário de viagem e a divisão do orçamento",
    },
    stack: ["Python", "CrewAI", "LLMs", "python-dotenv"],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/FIDEL7Z/crewai-travel-assistant",
        kind: "github",
      },
    ],
    summary:
      "Um sistema multiagente com CrewAI em que um agente monta um itinerário de viagem detalhado e um segundo consolida o orçamento a partir dele — um fluxo de trabalho coordenado, não um prompt único.",
    caseStudy: {
      problem:
        "Planejar uma viagem de ponta a ponta (itinerário e orçamento juntos) é uma tarefa de raciocínio em várias etapas que não se encaixa bem em um único prompt de LLM — era necessário um fluxo de trabalho, não apenas um chatbot.",
      solution:
        "Um sistema baseado em CrewAI em que um agente Travel Planner produz um itinerário detalhado (destinos, atividades, transporte) e um agente Budget consome esse itinerário para consolidar estimativas de custo por categoria, entregando um plano de viagem coerente e organizado.",
      architecture:
        "O CrewAI orquestra um processo sequencial: o agente Travel Planner é executado primeiro, e sua saída estruturada se torna a entrada do agente Budget — assim, os cálculos de orçamento sempre se baseiam no itinerário efetivamente gerado, em vez de serem estimados de forma independente.",
      challenges: [
        "Projetar papéis de agente e limites de tarefa para que as saídas se combinem de forma limpa, sem duplicar trabalho",
        "Obter uma saída consistente e estruturada de um agente LLM que outro agente, mais adiante no fluxo, consiga interpretar com confiabilidade",
        "Manter o sistema suficientemente agnóstico de provedor para permitir trocar o backend de LLM subjacente",
      ],
      learnings: [
        "Experiência prática com padrões de orquestração multiagente, além do uso de LLM em prompt único",
        "Como dependências sequenciais entre agentes simplificam o raciocínio sobre a corretude de um pipeline",
        "Projetar visando extensibilidade — o repositório é estruturado como um modelo reutilizável para futuras integrações",
      ],
      gallery: [],
    },
  },
  {
    slug: "gitperfil",
    title: "GitPerfil",
    tagline: "Um explorador de perfis do GitHub rápido e focado.",
    category: "web",
    featured: true,
    year: 2023,
    cover: {
      src: "/images/projects/gitperfil.png",
      alt: "Interface de busca do GitPerfil para consultar o perfil público de um usuário do GitHub",
    },
    stack: ["React", "GitHub REST API"],
    links: [
      {
        label: "Demonstração ao vivo",
        href: "https://gitperfil-fidel7zs-projects.vercel.app/",
        kind: "live",
      },
    ],
    summary:
      "Uma interface única, orientada por busca, que consulta a API pública do GitHub por um nome de usuário e exibe os dados de perfil e repositórios em uma visão limpa e única.",
    caseStudy: {
      problem:
        "Consultar o perfil público, os repositórios e as estatísticas de um usuário do GitHub geralmente exige vários cliques manuais pela interface web do GitHub.",
      solution:
        "Um app React focado em busca que chama a API REST do GitHub diretamente do navegador para um nome de usuário informado e renderiza as informações de perfil e repositórios em uma única visão.",
      architecture:
        "Um app React no lado do cliente que chama diretamente a API REST do GitHub — sem necessidade de backend próprio para dados públicos somente leitura.",
      challenges: [
        "Lidar de forma elegante com os limites de taxa da API pública do GitHub para requisições não autenticadas",
        "Projetar estados claros de carregamento/vazio/erro para uma interface focada em busca",
      ],
      learnings: [
        "Trabalhar diretamente com uma API REST pública real, em vez de um conjunto de dados simulado",
        "Padrões de interface para uma ferramenta de busca rápida e de propósito único",
      ],
      gallery: [],
    },
  },
  {
    slug: "steroid-manager",
    title: "Steroid Manager",
    tagline:
      "Sistema full-stack de controle de estoque, vendas e lucro para uma loja de varejo.",
    category: "web",
    featured: true,
    year: 2023,
    cover: {
      src: "/images/projects/steroid-manager.png",
      alt: "Painel do Steroid Manager mostrando as telas de cadastro de produtos e acompanhamento de vendas",
    },
    stack: ["Node.js", "Express", "MongoDB", "Bootstrap"],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/FIDEL7Z/Steroid_Manager",
        kind: "github",
      },
    ],
    summary:
      "Uma aplicação web MVC que cobre todo o ciclo de vendas de uma loja de varejo: cadastro de produtos, carrinho e checkout com descontos, cancelamento de pedidos e relatórios de lucro/despesas.",
    caseStudy: {
      problem:
        "Operações de pequenas lojas de varejo costumam rodar em planilhas, o que torna o controle de estoque, vendas e lucro propenso a erros e desconectado.",
      solution:
        "Uma aplicação web MVC que cobre todo o ciclo do varejo: cadastro de produtos, um fluxo de carrinho e checkout com suporte a descontos, confirmação/cancelamento de pedidos e relatórios financeiros de vendas e lucro.",
      architecture:
        "Backend em Node.js + Express seguindo o padrão MVC, MongoDB para persistência e um frontend baseado em Bootstrap — desenvolvido como trabalho da disciplina de Paradigmas de Linguagens de Programação.",
      challenges: [
        "Modelar todo o ciclo de vendas (carrinho → desconto → checkout → cancelamento) de forma consistente como documentos MongoDB",
        "Manter os controllers enxutos, com os cálculos de lucro/despesa isolados e testáveis dentro da estrutura MVC",
      ],
      learnings: [
        "Design MVC de ponta a ponta para um domínio transacional real, não apenas CRUD",
        "Modelagem prática de esquemas MongoDB para relações entre pedidos e estoque",
      ],
      gallery: [],
    },
  },
  {
    slug: "barbearia-dignissimo",
    title: "Barbearia Dignissimo",
    tagline: "Site de agendamento online para uma marca premium de barbearia.",
    category: "web",
    featured: true,
    year: 2024,
    cover: {
      src: "/images/projects/barbearia-dignissimo.png",
      alt: "Página inicial da Barbearia Dignissimo com uma chamada para ação de agendamento online",
    },
    stack: ["React", "CSS"],
    links: [
      {
        label: "Demonstração ao vivo",
        href: "https://dignified-cut.vercel.app/",
        kind: "live",
      },
    ],
    summary:
      "Um site de marketing com identidade própria, listagem de serviços e um fluxo de agendamento online para os serviços de corte e cuidados de uma barbearia premium.",
    caseStudy: {
      problem:
        "Uma barbearia precisava de uma vitrine digital para que os clientes pudessem conhecer os serviços e agendar horários sem precisar ligar.",
      solution:
        'Um site de marketing com identidade própria, listagem clara de serviços e uma chamada para ação "Agende Online" para os serviços premium de corte e cuidados.',
      architecture:
        "Um site de agendamento front-end focado na apresentação da marca, em um layout responsivo e em uma chamada para ação de agendamento clara.",
      challenges: [
        "Traduzir uma identidade de marca premium em um fluxo de agendamento limpo e adaptado para dispositivos móveis",
      ],
      learnings: [
        "Construir um produto real e utilizável para um pequeno negócio, em vez de um site de template genérico",
      ],
      gallery: [],
    },
  },
  {
    slug: "student-registration-system",
    title: "Sistema de Cadastro de Alunos",
    tagline: "Cadastro de alunos com cálculo automático da média de notas.",
    category: "web",
    featured: true,
    year: 2023,
    cover: {
      src: "/images/projects/student-registration-system.png",
      alt: "Formulário de cadastro de alunos com número de matrícula, nome, duas notas e a média calculada",
    },
    stack: ["JavaScript", "HTML", "CSS"],
    links: [
      {
        label: "Demonstração ao vivo",
        href: "https://cadastro-de-alunos-blush.vercel.app/",
        kind: "live",
      },
    ],
    summary:
      "Um formulário de cadastro que registra a matrícula do aluno, o nome e duas notas, com a média geral calculada e exibida automaticamente ao enviar.",
    caseStudy: {
      problem:
        "Controlar manualmente matrículas, nomes e notas de alunos — e calcular médias à mão — não escala nem mesmo para uma única turma.",
      solution:
        "Um formulário de cadastro que registra a matrícula do aluno, o nome e duas notas, com a média geral calculada e exibida automaticamente ao enviar.",
      architecture:
        "Uma aplicação web CRUD orientada a formulários: manipulação e validação de formulário no lado do cliente, com cálculo de média e registros de alunos persistidos.",
      challenges: [
        "Manter a lógica de cálculo de notas correta e consistente com o formulário de cadastro",
      ],
      learnings: [
        "Fundamentos sólidos: validação de formulário, fluxos CRUD e cálculos simples de dados derivados de ponta a ponta",
      ],
      gallery: [],
    },
  },

  // ---------------------------------------------------------------------
  // Archive — compact list, no case study
  // ---------------------------------------------------------------------
  {
    slug: "pomo",
    title: "Pomo",
    tagline:
      "Aplicação web de timer pomodoro construída durante um desafio de bolsa AWS/React.",
    category: "application",
    archived: true,
    year: 2024,
    cover: {
      src: "/images/projects/pomo.png",
      alt: "Interface da aplicação de timer pomodoro Pomo",
    },
    stack: ["React", "AWS"],
    links: [
      {
        label: "Demonstração ao vivo",
        href: "https://desafio-01-aws-react-one.vercel.app/",
        kind: "live",
      },
    ],
    summary:
      "Uma aplicação de timer pomodoro construída como projeto de desafio durante o programa de bolsas da Compass UOL.",
  },
  {
    slug: "gitwiki",
    title: "GitWiki",
    tagline: "Uma wiki de referência sobre Git/GitHub.",
    category: "web",
    archived: true,
    year: 2023,
    cover: {
      src: "/images/projects/gitwiki.png",
      alt: "Interface do site de referência GitWiki",
    },
    stack: ["JavaScript", "HTML", "CSS"],
    links: [
      {
        label: "Demonstração ao vivo",
        href: "https://git-wiki-beta.vercel.app/",
        kind: "live",
      },
    ],
    summary:
      "Um site de referência/documentação para conceitos de Git e GitHub.",
  },
  {
    slug: "first-portfolio",
    title: "Primeiro Portfólio",
    tagline: "Meu primeiro site de portfólio como desenvolvedor.",
    category: "web",
    archived: true,
    year: 2022,
    cover: {
      src: "/images/projects/first-portfolio.png",
      alt: "Captura de tela de um dos primeiros sites de portfólio pessoal",
    },
    stack: ["JavaScript", "HTML", "CSS"],
    links: [
      {
        label: "Demonstração ao vivo",
        href: "https://fidel7z.github.io/js-developer-portfolio/",
        kind: "live",
      },
    ],
    summary:
      "O site de portfólio pessoal original — mantido como um marco de onde tudo começou.",
  },
  {
    slug: "pokedex",
    title: "Pokedex",
    tagline: 'Navegador de Pokémon com busca paginada via "Load More".',
    category: "web",
    archived: true,
    year: 2023,
    cover: {
      src: "/images/projects/pokedex.png",
      alt: "Aplicação web Pokedex listando Pokémon com um botão Load More",
    },
    stack: ["JavaScript", "PokeAPI"],
    links: [
      {
        label: "Demonstração ao vivo",
        href: "https://poke-generator-beta.vercel.app/",
        kind: "live",
      },
    ],
    summary:
      "Um navegador de Pokémon que consome a PokeAPI pública com paginação incremental.",
  },
  {
    slug: "spider-man-multiverse",
    title: "Spider-Man Multiverse",
    tagline:
      "Site de fã explorando o Homem-Aranha através de três atores do cinema.",
    category: "web",
    archived: true,
    year: 2023,
    cover: {
      src: "/images/projects/spider-man-multiverse.png",
      alt: "Site de fã Spider-Man Multiverse com cards para três atores",
    },
    stack: ["JavaScript", "HTML", "CSS"],
    links: [
      {
        label: "Demonstração ao vivo",
        href: "https://multiverso-spider-man-eight.vercel.app/",
        kind: "live",
      },
    ],
    summary:
      "Um projeto de prática front-end: um site de fã do Homem-Aranha cobrindo Maguire, Holland e Garfield.",
  },
  {
    slug: "star-wars-workshop",
    title: "Site Star Wars",
    tagline:
      "Site de fã de Star Wars construído durante um workshop de front-end.",
    category: "web",
    archived: true,
    year: 2023,
    cover: {
      src: "/images/projects/star-wars-workshop.png",
      alt: "Site de fã de Star Wars com banco de dados de personagens",
    },
    stack: ["JavaScript", "HTML", "CSS"],
    links: [
      {
        label: "Demonstração ao vivo",
        href: "https://workshop-frontend-2023-2-xi.vercel.app/",
        kind: "live",
      },
    ],
    summary:
      "Um projeto de workshop de front-end com um banco de dados de personagens de Star Wars.",
  },
  {
    slug: "noticia-cidade",
    title: "Notícia Cidade",
    tagline: "Projeto de prática de interface para portal de notícias.",
    category: "web",
    archived: true,
    year: 2023,
    cover: {
      src: "/images/projects/noticia-cidade.png",
      alt: "Página inicial do portal de notícias Notícia Cidade",
    },
    stack: ["JavaScript", "HTML", "CSS"],
    links: [
      {
        label: "Demonstração ao vivo",
        href: "https://noticias-cidade-three.vercel.app/",
        kind: "live",
      },
    ],
    summary:
      "Um clone de interface de portal de notícias em português, construído para prática de front-end.",
  },
  {
    slug: "spotify-clone",
    title: "Clone do Spotify",
    tagline: "Clone da landing page de marketing do Spotify.",
    category: "web",
    archived: true,
    year: 2022,
    cover: {
      src: "/images/projects/spotify-clone.png",
      alt: "Clone da landing page do Spotify",
    },
    stack: ["HTML", "CSS", "JavaScript"],
    links: [
      {
        label: "Demonstração ao vivo",
        href: "https://spotify-clone-steel-nine.vercel.app/",
        kind: "live",
      },
    ],
    summary:
      "Um clone pixel a pixel da landing page de marketing do Spotify, feito para prática.",
  },
  {
    slug: "yu-gi-oh-site",
    title: "Site Yu-Gi-Oh!",
    tagline: "Site de fã com um catálogo de cartas de Yu-Gi-Oh!.",
    category: "web",
    archived: true,
    year: 2022,
    cover: {
      src: "/images/projects/yu-gi-oh-site.png",
      alt: "Catálogo de cartas do site de fã de Yu-Gi-Oh!",
    },
    stack: ["HTML", "CSS", "JavaScript"],
    links: [
      {
        label: "Demonstração ao vivo",
        href: "https://yu-gi-oh-site.vercel.app/#cartas",
        kind: "live",
      },
    ],
    summary:
      "Um site de fã de Yu-Gi-Oh! combinando informações da franquia com um catálogo de cartas colecionáveis.",
  },
  {
    slug: "finans",
    title: "Finans",
    tagline: "Clone de interface de landing page de finanças pessoais.",
    category: "web",
    archived: true,
    year: 2022,
    cover: {
      src: "/images/projects/finans.png",
      alt: "Landing page de finanças pessoais Finans",
    },
    stack: ["HTML", "CSS", "JavaScript"],
    links: [
      {
        label: "Demonstração ao vivo",
        href: "https://finan-as-gamma.vercel.app/",
        kind: "live",
      },
    ],
    summary:
      "Uma landing page de produto de finanças pessoais, construída para prática de interface/layout.",
  },
  {
    slug: "calculadora",
    title: "Calculadora",
    tagline: "Aplicativo de calculadora aritmética básica.",
    category: "application",
    archived: true,
    year: 2022,
    cover: {
      src: "/images/projects/calculadora.png",
      alt: "Aplicativo de calculadora com teclado numérico",
    },
    stack: ["JavaScript", "HTML", "CSS"],
    links: [
      {
        label: "Demonstração ao vivo",
        href: "https://app-calculadora-blond.vercel.app/",
        kind: "live",
      },
    ],
    summary:
      "Uma calculadora aritmética simples — um exercício de fundamentos de JavaScript.",
  },
  {
    slug: "mata-mosquito",
    title: "Mata Mosquito",
    tagline: "Minigame de navegador com níveis de dificuldade.",
    category: "application",
    archived: true,
    year: 2022,
    cover: {
      src: "/images/projects/mata-mosquito.png",
      alt: "Tela de seleção de dificuldade do jogo de navegador Mata Mosquito",
    },
    stack: ["JavaScript", "HTML", "CSS"],
    links: [
      {
        label: "Demonstração ao vivo",
        href: "https://app-mata-mosquito-eight.vercel.app/",
        kind: "live",
      },
    ],
    summary:
      "Um pequeno jogo de navegador com níveis de dificuldade selecionáveis, construído para prática de lógica de jogos.",
  },
  {
    slug: "museu-nacional",
    title: "Museu Nacional",
    tagline: "Site de museu com exposições, galeria e agendamento de visitas.",
    category: "web",
    archived: true,
    year: 2023,
    cover: {
      src: "/images/projects/museu-nacional.png",
      alt: "Site do Museu Nacional com exposições e agendamento de visitas",
    },
    stack: ["JavaScript", "HTML", "CSS"],
    links: [
      {
        label: "Demonstração ao vivo",
        href: "https://museu-nacional-i6wn.vercel.app/",
        kind: "live",
      },
    ],
    summary:
      "Um site de museu que reúne exposições, uma galeria de fotos e um fluxo de agendamento de visitas.",
  },
];

export const projects = projectsData.map((project) =>
  projectSchema.parse(project),
);
