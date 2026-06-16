// ── All content lives here. Real data, sourced from satyx.dev + resume repo. ──

export const profile = {
  name: "Satyam Mishra",
  role: "Full Stack Developer",
  location: "Jaipur, India",
  available: true,
  email: "satyam1308mishra@gmail.com",
  tagline:
    "Full stack developer at GainForest. I build production web apps end to end with polished React interfaces, API integrations, data flows, tooling, and deployment details.",
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
};

export const projects: Project[] = [
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
  },
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
  },
  {
    index: "02",
    title: "Flick",
    blurb:
      "Rapid prediction markets on Monad. Bet on crypto price moves in seconds from a mobile-first dApp, with on-chain Solidity contracts and a Farcaster frame.",
    year: "2026",
    role: "Creator",
    tags: ["Next.js", "Solidity", "wagmi", "Monad"],
    href: "https://flick-monad.vercel.app",
    icon: "/icons/magic-8-ball.png",
  },
  {
    index: "03",
    title: "PhotoScape",
    blurb:
      "An immersive 3D game where you race toward the speed of light, watching Einstein's relativity play out live: Doppler shift, length contraction, and time dilation.",
    year: "2025",
    role: "Creator",
    tags: ["Three.js", "WebGL", "React", "TypeScript"],
    href: "https://photo-scape.vercel.app",
    icon: "/icons/warp-drive.png",
  },
  {
    index: "06",
    title: "Modals",
    blurb:
      "A copy-paste registry of responsive modal stack components, installable shadcn-style. Built on Radix and Vaul, they adapt from dialogs on desktop to drawers on mobile.",
    year: "2026",
    role: "Creator",
    tags: ["React", "shadcn", "Radix UI", "Framer Motion"],
    href: "https://modals.satyx.dev",
    icon: "/icons/window.png",
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
  },
];

export type Tech = {
  /** Display name + registry key in ToolkitGrid's icon map. */
  name: string;
  /** Second heading line shown on hover, e.g. "with TypeScript". */
  line2: string;
  /** Message swapped in while this tech is hovered. */
  message: string;
};

export type SkillGroup = {
  title: string;
  note: string;
  icon: string;
  /** Default message, shown when nothing in the tile is hovered. */
  blurb: string;
  techs: Tech[];
};

export const skills: SkillGroup[] = [
  {
    title: "Frontend",
    note: "Interfaces and experience",
    icon: "/icons/magic-wand.png",
    blurb:
      "I build interfaces that feel fast and considered, typed all the way through and animated with intent.",
    techs: [
      {
        name: "TypeScript",
        line2: "with TypeScript",
        message:
          "I reach for TypeScript on everything so the compiler catches my mistakes before users ever do.",
      },
      {
        name: "React",
        line2: "with React",
        message:
          "I compose React UIs from small pieces and keep state exactly where it belongs.",
      },
      {
        name: "Next.js",
        line2: "with Next.js",
        message:
          "I default to the Next.js App Router and lean on server components to ship pages that load instantly.",
      },
      {
        name: "Tailwind",
        line2: "with Tailwind",
        message:
          "I style straight in the markup with Tailwind so the design stays consistent and the CSS never rots.",
      },
      {
        name: "HTML",
        line2: "with HTML",
        message:
          "I write semantic HTML first so the page stays accessible and search engines actually understand it.",
      },
      {
        name: "CSS",
        line2: "with CSS",
        message:
          "I lean on modern CSS like grid and custom properties for most of the polish you see here.",
      },
    ],
  },
  {
    title: "Web3",
    note: "On chain and dApps",
    icon: "/icons/coins.png",
    blurb:
      "I ship onchain, writing the contracts and the dapp glue that make wallets and chains feel ordinary.",
    techs: [
      {
        name: "Solidity",
        line2: "with Solidity",
        message:
          "I write Solidity with gas and safety in mind and test it hard before anything touches mainnet.",
      },
      {
        name: "Ethereum",
        line2: "on Ethereum",
        message:
          "I build on Ethereum and its L2s and think in accounts, calldata, and finality.",
      },
      {
        name: "wagmi",
        line2: "with wagmi",
        message:
          "I wire React to the chain with wagmi so reads, writes, and wallet state all stay typed.",
      },
      {
        name: "ethers",
        line2: "with ethers",
        message:
          "I reach for ethers when I want full control over providers, signers, and encoding.",
      },
      {
        name: "Chainlink",
        line2: "with Chainlink",
        message:
          "I pull in Chainlink feeds and VRF when a contract needs data it cannot generate itself.",
      },
    ],
  },
  {
    title: "AI",
    note: "Models and agents",
    icon: "/icons/brain.png",
    blurb:
      "I build with frontier models, turning prompts, tool use, and agent loops into features people can rely on.",
    techs: [
      {
        name: "Claude",
        line2: "with Claude",
        message:
          "I drive most of my coding and agent work with Claude and tune the prompts until the output ships.",
      },
      {
        name: "GPT",
        line2: "with GPT",
        message:
          "I bring in GPT for structured output and as a second model to check the first.",
      },
      {
        name: "Pi",
        line2: "with Pi",
        message:
          "I use Pi when a flow needs to feel conversational and human rather than transactional.",
      },
    ],
  },
  {
    title: "Tooling",
    note: "Build and ship",
    icon: "/icons/wrench.png",
    blurb:
      "I keep the unglamorous layer fast, with version control, a Linux workflow, and a deploy pipeline I trust.",
    techs: [
      {
        name: "Git",
        line2: "with Git",
        message:
          "I keep a clean Git history with small commits and rebases that stay readable.",
      },
      {
        name: "Linux",
        line2: "on Linux",
        message:
          "I live in the terminal on Linux and script away anything I find myself doing twice.",
      },
      {
        name: "Vercel",
        line2: "with Vercel",
        message:
          "I ship on Vercel and let preview deploys catch problems before production ever does.",
      },
      {
        name: "npm",
        line2: "with npm",
        message:
          "I keep the npm dependency graph lean and current so builds stay fast.",
      },
    ],
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
    period: "Since 2025",
    role: "Full Stack & Web3 Engineer",
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
    period: "2018 to 2019",
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
    period: "2021 to 2025",
    degree: "B.Tech, Computer Science and Engineering",
    org: "Poornima College of Engineering",
    location: "Jaipur, India",
  },
  {
    period: "2019 to 2021",
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
