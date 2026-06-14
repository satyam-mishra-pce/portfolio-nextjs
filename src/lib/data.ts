// ── All content lives here. Sourced from the resume repo + satyx.dev (2025). ──

export const profile = {
  name: "Satyam Mishra",
  role: "Full-Stack Developer",
  location: "Jaipur, India",
  available: true,
  email: "satyam1308mishra@gmail.com",
  tagline:
    "I build web applications end to end — accessible, carefully-crafted React interfaces and the on-chain logic that powers them.",
  intro:
    "A front-end developer who cares about the details: considered state management, accessibility, and interfaces that feel inevitable. I work across React and Next.js, and I'm increasingly at home in Web3 — building dApps with wagmi, viem, and ethers. I like keeping a few projects in flight at once.",
  stats: [
    { value: "163", label: "WPM peak typing", icon: "/icons/keyboard.png" },
    { value: "Knight", label: "LeetCode badge", icon: "/icons/shield.png" },
    { value: "2", label: "Hackathons won", icon: "/icons/trophy.png" },
    { value: "60+", label: "Public repos", icon: "/icons/star.png" },
  ],
  socials: [
    { label: "GitHub", handle: "@satyam-mishra-pce", href: "https://github.com/satyam-mishra-pce" },
    { label: "LinkedIn", handle: "in/mishra-satyam", href: "https://www.linkedin.com/in/mishra-satyam" },
    { label: "X / Twitter", handle: "@Satyam_Mis", href: "https://x.com/Satyam_Mis" },
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
  featured?: boolean;
};

export const projects: Project[] = [
  {
    index: "01",
    title: "Clockworks",
    blurb:
      "An npm package for fully customizable analog clocks in React, with a live configurator exposing 20+ options for hands, styles, and animations — built on Radix UI primitives for accessibility.",
    year: "2024",
    role: "Creator",
    tags: ["React", "TypeScript", "npm", "Radix UI"],
    href: "https://clockworks-rcc.vercel.app/",
    featured: true,
  },
  {
    index: "02",
    title: "Cryptophile",
    blurb:
      "A password and private-key manager with 256-bit client-side encryption — fully private via local storage, with intricate Zustand state and strict TypeScript across 90%+ of the codebase.",
    year: "2024",
    role: "Creator",
    tags: ["Next.js", "TypeScript", "Zustand", "Web Crypto"],
    href: "https://cryptophile.web.app/",
    featured: true,
  },
  {
    index: "03",
    title: "Cryptofund",
    blurb:
      "A crowdfunding dApp where campaigns live on-chain. Led a team of four to a top-3 finish out of 100+ teams, with Solidity contracts deployed across two chains and multi-wallet support.",
    year: "2024",
    role: "Lead · Team of 4",
    tags: ["Solidity", "Web3", "Next.js", "Multi-chain"],
    href: "https://cryptofund-next.vercel.app/",
  },
  {
    index: "04",
    title: "Sorting Visualizer",
    blurb:
      "An interactive visualizer for five sorting algorithms with fine-grained speed control up to 1000 moves/second, plus an image-slicing mode that animates the sort across a picture.",
    year: "2024",
    role: "Creator",
    tags: ["React", "Algorithms", "Canvas"],
    href: "https://sorting-visualizer-react.web.app/",
  },
];

export type SkillGroup = { title: string; note: string; icon: string; items: string[] };

export const skills: SkillGroup[] = [
  {
    title: "Frontend",
    note: "Interfaces & experience",
    icon: "/icons/magic-wand.png",
    items: ["TypeScript", "React", "Next.js", "Tailwind", "HTML", "CSS"],
  },
  {
    title: "Web3",
    note: "On-chain & dApps",
    icon: "/icons/coins.png",
    items: ["Solidity", "wagmi", "viem", "ethers", "Multi-chain"],
  },
  {
    title: "Tooling",
    note: "Build & ship",
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
};

export const experience: Job[] = [
  {
    period: "2025 — Present",
    role: "Front-End & Web3 Engineer",
    org: "GainForest",
    summary:
      "Design and build dApps with wagmi, viem, and ethers, and maintain a shared React component library that cut development time. Ship well-documented pull requests with clear changelogs, remotely.",
    stack: ["React", "wagmi", "viem", "TypeScript"],
  },
  {
    period: "2024",
    role: "Front-End Developer",
    org: "Epoch Protocol",
    summary:
      "Built 4+ decentralized applications for a Web3 automation company — wireframing dApp flows and implementing them in React, with regular code reviews to keep the codebase clean.",
    stack: ["React", "Web3", "TypeScript"],
  },
  {
    period: "2023",
    role: "Themes Freelancer",
    org: "Samsung",
    summary:
      "Created 10+ custom themes for Samsung devices with the Theme Studio app, designing 5+ screens per theme in Figma. Several themes passed 100+ downloads.",
    stack: ["Figma", "Theme Studio", "UI Design"],
  },
];

export const marquee = [
  "Front-End",
  "Web3",
  "React",
  "Next.js",
  "UI Design",
  "Open Source",
  "dApps",
  "TypeScript",
];
