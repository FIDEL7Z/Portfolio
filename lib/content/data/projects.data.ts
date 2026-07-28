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
    title: "Vision-Based Drawing System",
    tagline: "Touchless, gesture-based drawing using real-time hand tracking.",
    category: "ai",
    featured: true,
    year: 2025,
    cover: {
      src: "/images/projects/vision-based-drawing-system.gif",
      alt: "Hand-tracking drawing system rendering a line on screen as a finger moves in front of the camera",
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
      "A real-time, contactless drawing application: hand-gesture tracking via MediaPipe drives drawing, color selection, and erasing on a live video feed.",
    caseStudy: {
      problem:
        "Traditional drawing tools require dedicated input hardware. The goal was to test whether a webcam alone could support a natural, contactless drawing interface — useful both as an HCI experiment and as an accessibility-oriented interaction model.",
      solution:
        "A real-time hand-tracking pipeline that maps finger count and fingertip position to drawing actions: one finger draws, two-to-four fingers switch color, and an open hand triggers the eraser — all composited live over the camera feed.",
      architecture:
        "MediaPipe Hands detects 21 hand landmarks per frame; a lightweight gesture classifier derived from landmark positions determines the active tool (draw / select color / erase); OpenCV composites the drawing layer onto the live video feed via NumPy array operations, frame by frame.",
      challenges: [
        "Keeping gesture classification stable under variable lighting conditions",
        "Reducing jitter in the drawn line caused by frame-to-frame hand-tracking noise",
        "Mapping continuous hand position to a responsive, low-latency drawing experience",
      ],
      learnings: [
        "Hands-on experience with real-time computer-vision pipelines, beyond static image inference",
        "How much classic CV pre/post-processing (smoothing, thresholds) still matters alongside ML models",
        "HCI trade-offs in designing a gesture vocabulary that feels intuitive without an on-screen tutorial",
      ],
      gallery: [],
    },
  },
  {
    slug: "realtime-object-detection",
    title: "Real-Time Object Detection",
    tagline:
      "Real-time object and person detection with YOLOv4-Tiny on Darknet.",
    category: "ai",
    featured: true,
    year: 2024,
    cover: {
      src: "/images/projects/realtime-object-detection.gif",
      alt: "Live video feed with bounding boxes, class labels, and confidence scores drawn around detected objects and people",
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
      "An academic computer-vision project: real-time object and person detection using YOLOv4-Tiny on Darknet, trained against COCO classes.",
    caseStudy: {
      problem:
        "Academic exploration of real-time computer vision: could a lightweight detection model identify objects and people in a live video stream fast enough to be practically useful, without requiring a GPU-only production pipeline?",
      solution:
        "A real-time detection pipeline using YOLOv4-Tiny on the Darknet framework, configured against the COCO dataset, drawing bounding boxes with class labels and confidence scores over a live video feed via OpenCV.",
      architecture:
        "Darknet loads the YOLOv4-Tiny configuration and pre-trained weights; OpenCV handles video capture, frame preprocessing, and rendering of detection overlays (bounding boxes, class names, confidence scores) back onto each frame.",
      challenges: [
        "Balancing inference speed against detection accuracy by choosing the -Tiny model variant",
        "Tuning confidence thresholds to reduce false positives on a live camera feed",
        "Working within Darknet's configuration-driven workflow rather than a Python-native training loop",
      ],
      learnings: [
        "Hands-on understanding of one-stage detector trade-offs (speed vs. accuracy)",
        "How model-size choice (Tiny vs. full YOLOv4) directly impacts real-time feasibility",
        "Practical experience with the classic Darknet/OpenCV computer-vision stack",
      ],
      gallery: [],
    },
  },
  {
    slug: "travel-planner-crewai",
    title: "Travel Planner — CrewAI",
    tagline:
      "Multi-agent LLM orchestration that plans a trip itinerary and budget end to end.",
    category: "ai",
    featured: true,
    year: 2025,
    cover: {
      src: "/images/projects/travel-planner-crewai.gif",
      alt: "Terminal output showing a CrewAI multi-agent run generating a travel itinerary and budget breakdown",
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
      "A CrewAI multi-agent system where one agent builds a detailed trip itinerary and a second consolidates the budget from it — a coordinated workflow, not a single-shot prompt.",
    caseStudy: {
      problem:
        "Planning a trip end to end (itinerary and budget together) is a multi-step reasoning task that doesn't fit neatly into a single LLM prompt — it needed a workflow, not just a chatbot.",
      solution:
        "A CrewAI-based system where a Travel Planner agent produces a detailed itinerary (destinations, activities, transportation) and a Budget agent consumes that itinerary to consolidate cost estimates across categories, delivering one coherent, organized trip plan.",
      architecture:
        "CrewAI orchestrates a sequential process: the Travel Planner agent runs first, and its structured output becomes the input for the Budget agent — so budget calculations are always grounded in the actual generated itinerary rather than estimated independently.",
      challenges: [
        "Designing agent roles and task boundaries so outputs compose cleanly instead of duplicating work",
        "Getting consistent, structured output from an LLM agent that a downstream agent can reliably parse",
        "Keeping the system provider-agnostic enough to swap the underlying LLM backend",
      ],
      learnings: [
        "Practical experience with multi-agent orchestration patterns beyond single-prompt LLM usage",
        "How sequential agent dependencies simplify reasoning about a pipeline's correctness",
        "Designing for extensibility — the repo is structured as a reusable blueprint for further integrations",
      ],
      gallery: [],
    },
  },
  {
    slug: "gitperfil",
    title: "GitPerfil",
    tagline: "A fast, focused GitHub profile explorer.",
    category: "web",
    featured: true,
    year: 2023,
    cover: {
      src: "/images/projects/gitperfil.png",
      alt: "GitPerfil search interface for looking up a GitHub user's public profile",
    },
    stack: ["React", "GitHub REST API"],
    links: [
      {
        label: "Live demo",
        href: "https://gitperfil-fidel7zs-projects.vercel.app/",
        kind: "live",
      },
    ],
    summary:
      "A single search-driven interface that queries the public GitHub API for a username and surfaces the profile and repository data in one clean view.",
    caseStudy: {
      problem:
        "Looking up a GitHub user's public profile, repositories, and stats usually means several manual clicks through the GitHub web UI.",
      solution:
        "A search-first React app that calls the GitHub REST API directly from the browser for a given username and renders profile and repository information in a single view.",
      architecture:
        "A client-side React app calling the GitHub REST API directly — no custom backend needed for read-only public data.",
      challenges: [
        "Handling GitHub's public API rate limits gracefully for unauthenticated requests",
        "Designing clear loading/empty/error states for a search-first UI",
      ],
      learnings: [
        "Working directly against a real public REST API rather than a mocked dataset",
        "UI patterns for a fast, single-purpose search tool",
      ],
      gallery: [],
    },
  },
  {
    slug: "steroid-manager",
    title: "Steroid Manager",
    tagline:
      "Full-stack inventory, sales, and profit-tracking system for a retail shop.",
    category: "web",
    featured: true,
    year: 2023,
    cover: {
      src: "/images/projects/steroid-manager.png",
      alt: "Steroid Manager dashboard showing product registration and sales tracking screens",
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
      "An MVC web app covering a retail shop's full sales lifecycle: product registration, cart and checkout with discounts, order cancellation, and profit/expense reporting.",
    caseStudy: {
      problem:
        "Small retail-shop operations often run on spreadsheets, making inventory, sales, and profit tracking error-prone and disconnected.",
      solution:
        "An MVC web application covering the full retail loop: product registration, a shopping cart and checkout flow with discount support, order confirmation/cancellation, and financial reporting on sales and profit.",
      architecture:
        "Node.js + Express backend following an MVC pattern, MongoDB for persistence, and a Bootstrap-based frontend — built as coursework for a Programming Language Paradigms course.",
      challenges: [
        "Modeling the full sales lifecycle (cart → discount → checkout → cancellation) consistently as MongoDB documents",
        "Keeping controllers thin, with profit/expense calculations isolated and testable within the MVC structure",
      ],
      learnings: [
        "End-to-end MVC design for a real transactional domain, not just CRUD",
        "Practical MongoDB schema design for order/inventory relationships",
      ],
      gallery: [],
    },
  },
  {
    slug: "barbearia-dignissimo",
    title: "Barbearia Dignissimo",
    tagline: "Online booking site for a premium barbershop brand.",
    category: "web",
    featured: true,
    year: 2024,
    cover: {
      src: "/images/projects/barbearia-dignissimo.png",
      alt: "Barbearia Dignissimo landing page with an online appointment booking call-to-action",
    },
    stack: ["React", "CSS"],
    links: [
      {
        label: "Live demo",
        href: "https://dignified-cut.vercel.app/",
        kind: "live",
      },
    ],
    summary:
      "A branded marketing site with service listings and an online scheduling flow for a premium barbershop's haircut and grooming services.",
    caseStudy: {
      problem:
        "A barbershop needed a digital storefront so clients could discover services and book appointments without a phone call.",
      solution:
        'A branded marketing site with clear service listings and an "Agende Online" scheduling call-to-action for premium haircut and grooming services.',
      architecture:
        "A front-end booking site focused on brand presentation, responsive layout, and a clear scheduling call-to-action.",
      challenges: [
        "Translating a premium brand identity into a clean, mobile-friendly booking flow",
      ],
      learnings: [
        "Building a real, usable product for a small business rather than a generic template site",
      ],
      gallery: [],
    },
  },
  {
    slug: "student-registration-system",
    title: "Student Registration System",
    tagline: "Student registration with automatic grade-average calculation.",
    category: "web",
    featured: true,
    year: 2023,
    cover: {
      src: "/images/projects/student-registration-system.png",
      alt: "Student registration form with enrollment number, name, two grades, and calculated average",
    },
    stack: ["JavaScript", "HTML", "CSS"],
    links: [
      {
        label: "Live demo",
        href: "https://cadastro-de-alunos-blush.vercel.app/",
        kind: "live",
      },
    ],
    summary:
      "A registration form capturing student ID, name, and two grades, with the overall average calculated and displayed automatically on submission.",
    caseStudy: {
      problem:
        "Manually tracking student enrollment numbers, names, and grades — and computing averages by hand — doesn't scale even for a single classroom.",
      solution:
        "A registration form capturing student ID, name, and two grades, with the overall average calculated and displayed automatically on submission.",
      architecture:
        "A form-driven CRUD web app: client-side form handling and validation, with average calculation and persisted student records.",
      challenges: [
        "Keeping the grade-calculation logic correct and consistent with the registration form",
      ],
      learnings: [
        "Solid fundamentals: form validation, CRUD flows, and simple derived-data calculations end to end",
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
      "Pomodoro-timer web app built during an AWS/React scholarship challenge.",
    category: "application",
    archived: true,
    year: 2024,
    cover: {
      src: "/images/projects/pomo.png",
      alt: "Pomo pomodoro timer application interface",
    },
    stack: ["React", "AWS"],
    links: [
      {
        label: "Live demo",
        href: "https://desafio-01-aws-react-one.vercel.app/",
        kind: "live",
      },
    ],
    summary:
      "A pomodoro-timer app built as a challenge project during the Compass UOL scholarship program.",
  },
  {
    slug: "gitwiki",
    title: "GitWiki",
    tagline: "A Git/GitHub reference wiki.",
    category: "web",
    archived: true,
    year: 2023,
    cover: {
      src: "/images/projects/gitwiki.png",
      alt: "GitWiki reference site interface",
    },
    stack: ["JavaScript", "HTML", "CSS"],
    links: [
      {
        label: "Live demo",
        href: "https://git-wiki-beta.vercel.app/",
        kind: "live",
      },
    ],
    summary:
      "A reference/documentation-style site for Git and GitHub concepts.",
  },
  {
    slug: "first-portfolio",
    title: "First Portfolio",
    tagline: "My first developer portfolio site.",
    category: "web",
    archived: true,
    year: 2022,
    cover: {
      src: "/images/projects/first-portfolio.png",
      alt: "Screenshot of an early personal portfolio website",
    },
    stack: ["JavaScript", "HTML", "CSS"],
    links: [
      {
        label: "Live demo",
        href: "https://fidel7z.github.io/js-developer-portfolio/",
        kind: "live",
      },
    ],
    summary:
      "The original personal portfolio site — kept as a marker of where this all started.",
  },
  {
    slug: "pokedex",
    title: "Pokedex",
    tagline: 'Pokémon browser with paginated "Load More" fetching.',
    category: "web",
    archived: true,
    year: 2023,
    cover: {
      src: "/images/projects/pokedex.png",
      alt: "Pokedex web app listing Pokémon with a Load More button",
    },
    stack: ["JavaScript", "PokeAPI"],
    links: [
      {
        label: "Live demo",
        href: "https://poke-generator-beta.vercel.app/",
        kind: "live",
      },
    ],
    summary:
      "A Pokémon browser consuming the public PokeAPI with incremental pagination.",
  },
  {
    slug: "spider-man-multiverse",
    title: "Spider-Man Multiverse",
    tagline: "Fan site exploring Spider-Man across three film actors.",
    category: "web",
    archived: true,
    year: 2023,
    cover: {
      src: "/images/projects/spider-man-multiverse.png",
      alt: "Spider-Man Multiverse fan site with cards for three actors",
    },
    stack: ["JavaScript", "HTML", "CSS"],
    links: [
      {
        label: "Live demo",
        href: "https://multiverso-spider-man-eight.vercel.app/",
        kind: "live",
      },
    ],
    summary:
      "A front-end practice project: a Spider-Man fan site covering Maguire, Holland, and Garfield.",
  },
  {
    slug: "star-wars-workshop",
    title: "Star Wars Site",
    tagline: "Star Wars fan site built during a front-end workshop.",
    category: "web",
    archived: true,
    year: 2023,
    cover: {
      src: "/images/projects/star-wars-workshop.png",
      alt: "Star Wars fan site with character database",
    },
    stack: ["JavaScript", "HTML", "CSS"],
    links: [
      {
        label: "Live demo",
        href: "https://workshop-frontend-2023-2-xi.vercel.app/",
        kind: "live",
      },
    ],
    summary:
      "A front-end workshop project featuring a Star Wars characters database.",
  },
  {
    slug: "noticia-cidade",
    title: "Notícia Cidade",
    tagline: "News-portal UI practice project.",
    category: "web",
    archived: true,
    year: 2023,
    cover: {
      src: "/images/projects/noticia-cidade.png",
      alt: "Notícia Cidade news portal homepage",
    },
    stack: ["JavaScript", "HTML", "CSS"],
    links: [
      {
        label: "Live demo",
        href: "https://noticias-cidade-three.vercel.app/",
        kind: "live",
      },
    ],
    summary:
      "A Portuguese-language news-portal UI clone, built for front-end practice.",
  },
  {
    slug: "spotify-clone",
    title: "Spotify Clone",
    tagline: "Spotify marketing landing-page clone.",
    category: "web",
    archived: true,
    year: 2022,
    cover: {
      src: "/images/projects/spotify-clone.png",
      alt: "Spotify landing page clone",
    },
    stack: ["HTML", "CSS", "JavaScript"],
    links: [
      {
        label: "Live demo",
        href: "https://spotify-clone-steel-nine.vercel.app/",
        kind: "live",
      },
    ],
    summary: "A pixel-practice clone of Spotify's marketing landing page.",
  },
  {
    slug: "yu-gi-oh-site",
    title: "Yu-Gi-Oh! Site",
    tagline: "Fan site with a Yu-Gi-Oh! card catalog.",
    category: "web",
    archived: true,
    year: 2022,
    cover: {
      src: "/images/projects/yu-gi-oh-site.png",
      alt: "Yu-Gi-Oh! fan site card catalog",
    },
    stack: ["HTML", "CSS", "JavaScript"],
    links: [
      {
        label: "Live demo",
        href: "https://yu-gi-oh-site.vercel.app/#cartas",
        kind: "live",
      },
    ],
    summary:
      "A Yu-Gi-Oh! fan site combining franchise information with a trading-card catalog.",
  },
  {
    slug: "finans",
    title: "Finans",
    tagline: "Personal-finance landing-page UI clone.",
    category: "web",
    archived: true,
    year: 2022,
    cover: {
      src: "/images/projects/finans.png",
      alt: "Finans personal finance landing page",
    },
    stack: ["HTML", "CSS", "JavaScript"],
    links: [
      {
        label: "Live demo",
        href: "https://finan-as-gamma.vercel.app/",
        kind: "live",
      },
    ],
    summary:
      "A personal-finance product landing page, built for UI/layout practice.",
  },
  {
    slug: "calculadora",
    title: "Calculadora",
    tagline: "Basic arithmetic calculator app.",
    category: "application",
    archived: true,
    year: 2022,
    cover: {
      src: "/images/projects/calculadora.png",
      alt: "Calculator app with a numeric keypad",
    },
    stack: ["JavaScript", "HTML", "CSS"],
    links: [
      {
        label: "Live demo",
        href: "https://app-calculadora-blond.vercel.app/",
        kind: "live",
      },
    ],
    summary:
      "A straightforward arithmetic calculator — a JavaScript fundamentals exercise.",
  },
  {
    slug: "mata-mosquito",
    title: "Mata Mosquito",
    tagline: "Browser mini-game with difficulty tiers.",
    category: "application",
    archived: true,
    year: 2022,
    cover: {
      src: "/images/projects/mata-mosquito.png",
      alt: "Mata Mosquito browser game difficulty selection screen",
    },
    stack: ["JavaScript", "HTML", "CSS"],
    links: [
      {
        label: "Live demo",
        href: "https://app-mata-mosquito-eight.vercel.app/",
        kind: "live",
      },
    ],
    summary:
      "A small browser game with selectable difficulty tiers, built for game-logic practice.",
  },
  {
    slug: "museu-nacional",
    title: "Museu Nacional",
    tagline: "Museum website with exhibits, gallery, and visit booking.",
    category: "web",
    archived: true,
    year: 2023,
    cover: {
      src: "/images/projects/museu-nacional.png",
      alt: "Museu Nacional website with exhibitions and visit booking",
    },
    stack: ["JavaScript", "HTML", "CSS"],
    links: [
      {
        label: "Live demo",
        href: "https://museu-nacional-i6wn.vercel.app/",
        kind: "live",
      },
    ],
    summary:
      "A museum website covering exhibitions, a photo gallery, and a visit-booking flow.",
  },
];

export const projects = projectsData.map((project) =>
  projectSchema.parse(project),
);
