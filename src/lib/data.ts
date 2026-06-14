// ── All content lives here. Replace the dummy data with real details later. ──

export const profile = {
  name: "Satyam Mishra",
  role: "Full Stack Developer",
  location: "Bengaluru, India",
  available: true,
  email: "satyam@example.com",
  tagline:
    "I design and build resilient web applications end to end — from typed APIs and data models to interfaces that feel inevitable.",
  intro:
    "Full stack developer with a soft spot for the seams between systems: the API contract, the cache boundary, the moment a click becomes a database write. I care about shipping software that stays simple as it scales, and about interfaces people don't have to think about.",
  stats: [
    { value: "6+", label: "Years building" },
    { value: "40+", label: "Projects shipped" },
    { value: "12", label: "Open-source repos" },
    { value: "∞", label: "Cups of chai" },
  ],
  socials: [
    { label: "GitHub", handle: "@satyam", href: "https://github.com" },
    { label: "LinkedIn", handle: "in/satyam", href: "https://linkedin.com" },
    { label: "X / Twitter", handle: "@satyam", href: "https://x.com" },
    { label: "Email", handle: "satyam@example.com", href: "mailto:satyam@example.com" },
  ],
};

export type Project = {
  index: string;
  title: string;
  blurb: string;
  year: string;
  role: string;
  tags: string[];
  href: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    index: "01",
    title: "Helios Analytics",
    blurb:
      "A real-time analytics platform processing 2M events/day. Built a streaming ingestion pipeline and a sub-second query layer with materialized rollups.",
    year: "2025",
    role: "Lead Full Stack",
    tags: ["Next.js", "ClickHouse", "Kafka", "tRPC"],
    href: "#",
    featured: true,
  },
  {
    index: "02",
    title: "Orbit Commerce",
    blurb:
      "Headless storefront and admin for a D2C brand. Edge-rendered product pages, Stripe checkout, and an inventory sync engine across three warehouses.",
    year: "2024",
    role: "Full Stack",
    tags: ["React", "Node", "PostgreSQL", "Stripe"],
    href: "#",
    featured: true,
  },
  {
    index: "03",
    title: "Quill",
    blurb:
      "Collaborative markdown editor with CRDT-based real-time sync, offline support, and a plugin API. Open source, 1.4k stars.",
    year: "2024",
    role: "Creator",
    tags: ["TypeScript", "Yjs", "WebSocket", "Tauri"],
    href: "#",
  },
  {
    index: "04",
    title: "Atlas DevOps",
    blurb:
      "Internal platform that turned a 40-minute manual deploy into a one-click pipeline with preview environments and automatic rollbacks.",
    year: "2023",
    role: "Platform Engineer",
    tags: ["Go", "Kubernetes", "Terraform", "gRPC"],
    href: "#",
  },
];

export type SkillGroup = { title: string; note: string; items: string[] };

export const skills: SkillGroup[] = [
  {
    title: "Frontend",
    note: "Interfaces & experience",
    items: ["TypeScript", "React", "Next.js", "Tailwind", "Motion", "Vue"],
  },
  {
    title: "Backend",
    note: "APIs & business logic",
    items: ["Node.js", "Go", "Python", "tRPC", "GraphQL", "REST"],
  },
  {
    title: "Data",
    note: "Storage & streams",
    items: ["PostgreSQL", "Redis", "ClickHouse", "Kafka", "Prisma", "Drizzle"],
  },
  {
    title: "Infra",
    note: "Ship & operate",
    items: ["Docker", "Kubernetes", "AWS", "Terraform", "Vercel", "GitHub Actions"],
  },
];

export type Job = {
  period: string;
  role: string;
  org: string;
  summary: string;
  stack: string[];
};

export const experience: Job[] = [
  {
    period: "2023 — Present",
    role: "Senior Full Stack Developer",
    org: "Nimbus Labs",
    summary:
      "Lead a squad of four building the core analytics product. Owned architecture decisions from the streaming layer to the dashboard, and cut p95 query latency by 70%.",
    stack: ["Next.js", "Go", "ClickHouse", "Kubernetes"],
  },
  {
    period: "2021 — 2023",
    role: "Full Stack Developer",
    org: "Meridian Studio",
    summary:
      "Shipped client products across e-commerce, fintech, and media. Introduced a typed end-to-end stack that became the studio's default and halved onboarding time.",
    stack: ["React", "Node.js", "PostgreSQL", "AWS"],
  },
  {
    period: "2019 — 2021",
    role: "Software Engineer",
    org: "Bytewave",
    summary:
      "First engineering hire at a seed-stage startup. Built the MVP, the billing system, and the deploy pipeline — and learned to make tradeoffs under real constraints.",
    stack: ["Vue", "Python", "Redis", "Docker"],
  },
  {
    period: "2018 — 2019",
    role: "Junior Developer",
    org: "Freelance",
    summary:
      "Built websites and small apps for local businesses while finishing my degree. Where the obsession with shipping started.",
    stack: ["JavaScript", "PHP", "MySQL"],
  },
];

export const marquee = [
  "Full Stack",
  "Distributed Systems",
  "Type-Safe APIs",
  "Real-Time",
  "Design Engineering",
  "Open Source",
];
