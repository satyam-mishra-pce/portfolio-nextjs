// ── All content lives here. Real data, sourced from satyx.dev + resume repo. ──

export const profile = {
  name: "Satyam Mishra",
  role: "Full Stack Developer",
  location: "Jaipur, India",
  available: true,
  email: "satyam1308mishra@gmail.com",
  tagline:
    "I have been writing code since I was 12, and it still feels like play. I build for the web, mostly the parts people touch, and I sweat the details.",
  intro:
    "I wrote my first real code at 12 and have not been able to put it down since. It is the rare thing that still feels like play. I think in interfaces: I cannot always dream one up from nothing, but show me a design and I will build it to the last pixel, and show me a bad one and I will tell you exactly what is wrong with it. Most of that happens late, when the city is quiet. These days the work is mostly React and Next.js, with a fair amount of Web3.",
  stats: [
    { value: "163", label: "WPM peak typing", icon: "/icons/keyboard.png" },
    { value: "1000", label: "Day LeetCode streak", icon: "/icons/shield.png" },
    { value: "2", label: "Hackathons won", icon: "/icons/trophy.png" },
    { value: "1.9k+", label: "Contributions a year", icon: "/icons/star.png" },
  ],
  socials: [
    { label: "GitHub", handle: "satyam-mishra-pce", href: "https://github.com/satyam-mishra-pce" },
    { label: "LinkedIn", handle: "in/mishra-satyam", href: "https://www.linkedin.com/in/mishra-satyam" },
    { label: "X / Twitter", handle: "Satyam_Mis", href: "https://x.com/Satyam_Mis" },
    { label: "LeetCode", handle: "satyam_mishra13", href: "https://leetcode.com/satyam_mishra13" },
    { label: "Email", handle: "satyam1308mishra@gmail.com", href: "mailto:satyam1308mishra@gmail.com" },
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
  icon: string;
  span: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    index: "01",
    title: "Clockworks",
    blurb:
      "An npm package for fully customizable analog clocks in React, with a live configurator for hands, styles, and animations, built on Radix UI primitives so it stays accessible.",
    year: "2024",
    role: "Creator",
    tags: ["React", "TypeScript", "npm", "Radix UI"],
    href: "https://clockworks-rcc.vercel.app/",
    icon: "/icons/clock.png",
    span: "sm:col-span-2 lg:col-span-2",
    featured: true,
  },
  {
    index: "02",
    title: "Cryptophile",
    blurb:
      "A password and private key manager with 256 bit encryption that runs entirely in your browser. Nothing ever leaves your device.",
    year: "2024",
    role: "Creator",
    tags: ["Next.js", "TypeScript", "Zustand", "Web Crypto"],
    href: "https://cryptophile.web.app/",
    icon: "/icons/padlock.png",
    span: "lg:col-span-1",
  },
  {
    index: "03",
    title: "Cryptofund",
    blurb:
      "A crowdfunding dApp where campaigns live on chain. I led a team of four to a top 3 finish out of 100+ teams, with Solidity contracts on two chains.",
    year: "2024",
    role: "Lead · Team of 4",
    tags: ["Solidity", "Web3", "Next.js", "Multichain"],
    href: "https://cryptofund-next.vercel.app/",
    icon: "/icons/money-bag.png",
    span: "lg:col-span-1",
  },
  {
    index: "04",
    title: "Sorting Visualizer",
    blurb:
      "An interactive way to watch five sorting algorithms run, with fine control over speed up to 1000 moves a second, plus a mode that sorts a sliced image.",
    year: "2024",
    role: "Creator",
    tags: ["React", "Algorithms", "Canvas"],
    href: "https://sorting-visualizer-react.web.app/",
    icon: "/icons/chart.png",
    span: "lg:col-span-1",
  },
  {
    index: "05",
    title: "Dynamic Island",
    blurb:
      "Apple's Dynamic Island, rebuilt for the web. A small, springy component that expands and collapses to show whatever you need, with motion that feels right.",
    year: "2024",
    role: "Creator",
    tags: ["React", "Framer Motion", "TypeScript"],
    href: "https://dynamic-island-react.vercel.app",
    icon: "/icons/smartphone.png",
    span: "sm:col-span-2 lg:col-span-1",
  },
];

export type SkillGroup = { title: string; note: string; icon: string; items: string[] };

export const skills: SkillGroup[] = [
  {
    title: "Frontend",
    note: "Interfaces and experience",
    icon: "/icons/magic-wand.png",
    items: ["TypeScript", "React", "Next.js", "Tailwind", "HTML", "CSS"],
  },
  {
    title: "Web3",
    note: "On chain and dApps",
    icon: "/icons/coins.png",
    items: ["Solidity", "wagmi", "viem", "ethers", "Multichain"],
  },
  {
    title: "Tooling",
    note: "Build and ship",
    icon: "/icons/wrench.png",
    items: ["Git", "Linux", "Vercel", "npm"],
  },
];

export type Job = {
  period: string;
  role: string;
  org: string;
  summary: string;
  stack: string[];
  icon: string;
};

export const experience: Job[] = [
  {
    period: "2025 — Present",
    role: "Frontend & Web3 Engineer",
    org: "GainForest",
    summary:
      "I design and build dApps with wagmi, viem, and ethers, and keep a shared React component library in good shape so the team ships faster. I write pull requests with clear descriptions and changelogs.",
    stack: ["React", "wagmi", "viem", "TypeScript"],
    icon: "/icons/tree.png",
  },
  {
    period: "2024",
    role: "Frontend Developer",
    org: "Epoch Protocol",
    summary:
      "I built more than four decentralized apps for a Web3 automation company, taking each from wireframe to working React, with regular reviews to keep the code clean.",
    stack: ["React", "Web3", "TypeScript"],
    icon: "/icons/hourglass.png",
  },
  {
    period: "2023",
    role: "Themes Freelancer",
    org: "Samsung",
    summary:
      "I made more than ten custom themes for Samsung devices in their Theme Studio app, designing five or more screens per theme in Figma. A few passed 100 downloads.",
    stack: ["Figma", "Theme Studio", "UI Design"],
    icon: "/icons/sketchbook.png",
  },
  {
    period: "2018 — 2019",
    role: "Junior Developer",
    org: "Freelance",
    summary:
      "I built websites and small apps for local businesses while I was still in school. This is where the love of shipping started.",
    stack: ["JavaScript", "PHP", "MySQL"],
    icon: "/icons/laptop.png",
  },
];

export type Education = {
  period: string;
  degree: string;
  org: string;
  location: string;
};

export const education: Education[] = [
  {
    period: "2021 — 2025",
    degree: "B.Tech, Computer Science and Engineering",
    org: "Poornima College of Engineering",
    location: "Jaipur, India",
  },
  {
    period: "2019 — 2021",
    degree: "Senior Secondary, Science and Mathematics",
    org: "My Own School",
    location: "Jaipur, India",
  },
];

export const marquee = [
  "Frontend",
  "Web3",
  "React",
  "Next.js",
  "UI Design",
  "Open Source",
  "dApps",
  "TypeScript",
];
