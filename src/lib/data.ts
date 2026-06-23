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

/** One section of the deep case-study page for a role. */
export type JobDetailSection = {
  heading: string;
  /** Paragraphs of prose. */
  body?: string[];
  /** Optional bullet list rendered under the prose. */
  bullets?: string[];
};

export type JobDetail = {
  /** One line under the title on the deep page. */
  tagline: string;
  /** Intro paragraphs — what the role and the org actually were. */
  context: string[];
  /** The substance: what was built, decisions made, impact. */
  sections: JobDetailSection[];
  /** Why the key tools, in your own words. */
  stackNotes?: { name: string; note: string }[];
  /** Outbound proof — live apps, repos, PRs, listings. */
  links?: { label: string; href: string }[];
};

export type Job = {
  /** URL slug for the deep page at /experience/[slug]. */
  slug: string;
  period: string;
  role: string;
  org: string;
  summary: string;
  /** Option B — quantified, punchy bullets shown on the home timeline. */
  highlights: string[];
  stack: string[];
  icon: string;
  /** Drives the "Read more" deep page. */
  detail: JobDetail;
};

export const experience: Job[] = [
  {
    slug: "gainforest",
    period: "Since 2025",
    role: "Full Stack & Web3 Engineer",
    org: "GainForest",
    summary:
      "I design and build dApps with wagmi, viem, and ethers, and keep a shared React component library in good shape so the team ships faster. I write pull requests with clear descriptions and changelogs.",
    highlights: [
      "Ship production dApps from end to end, including wallet connection, contract reads and writes, and signed transactions with wagmi, viem and ethers.",
      "Own the shared React component library the whole team builds on, so new features land in hours instead of days.",
      "Author PRs with clear descriptions and changelogs that keep review fast and the history readable.",
    ],
    stack: ["React", "wagmi", "viem", "TypeScript"],
    icon: "/icons/tree.png",
    detail: {
      tagline: "Building Web3 products for ecological finance, from first sketch to production.",
      context: [
        "GainForest builds open tools that direct funding toward forest conservation and biodiversity monitoring. I work on the web and dApp layer, the interfaces and onchain flows that people actually touch.",
        "It is full stack work with full ownership. I take features from design through the React UI, the contract integration, and the deploy, and I keep the shared tooling the rest of the team depends on healthy.",
      ],
      sections: [
        {
          heading: "What I build",
          body: [
            "Decentralized apps that read from and write to smart contracts. They connect wallets, surface onchain state, and walk users through signed transactions without making them think about the chain underneath.",
          ],
          bullets: [
            "Wallet connection and account state across providers, using wagmi and viem.",
            "Contract reads, writes and transaction signing with viem and ethers.",
            "A shared React component library that standardizes the team's UI and removes repeated work.",
          ],
        },
        {
          heading: "Technical decisions I'm proud of",
          body: [
            "[Add the hardest thing you solved. A tricky transaction flow, a state sync problem across chains, a performance win, or an abstraction in the component library that paid off. Explain why it was hard and what you chose.]",
          ],
        },
        {
          heading: "How I work",
          body: [
            "I write pull requests other people can review quickly. A clear description, a changelog, and a diff small enough to reason about. The shared library is documented so teammates adopt components instead of rebuilding them.",
          ],
        },
      ],
      stackNotes: [
        { name: "wagmi", note: "React hooks for wallet and account state." },
        { name: "viem", note: "Typed, fast contract reads, writes, and signing." },
        { name: "ethers", note: "Contract interaction where it fit best." },
        { name: "TypeScript", note: "Types that run across the UI and the chain calls." },
      ],
      links: [
        // { label: "Live dApp", href: "https://…" },
        // { label: "Component library", href: "https://…" },
      ],
    },
  },
  {
    slug: "epoch-protocol",
    period: "2024",
    role: "Frontend Developer",
    org: "Epoch Protocol",
    summary:
      "I built more than four decentralized apps for a Web3 automation company, taking each from wireframe to working React, with regular reviews to keep the code clean.",
    highlights: [
      "Built more than four decentralized apps from wireframe to shipped React.",
      "Worked inside a Web3 automation product, turning complex flows into clean, usable UI.",
      "Reviewed code regularly to keep the codebase clean and consistent.",
    ],
    stack: ["React", "Web3", "TypeScript"],
    icon: "/icons/hourglass.png",
    detail: {
      tagline: "More than four dApps taken from wireframe to production for a Web3 automation company.",
      context: [
        "Epoch Protocol was a Web3 automation company. I was on the frontend, responsible for turning product ideas and wireframes into working React applications.",
        "More than four separate dApps shipped through my hands during this time, each one taken from an early sketch to something users could actually run.",
      ],
      sections: [
        {
          heading: "What I built",
          body: [
            "Frontends for automation tooling in Web3. Interfaces that hid genuinely complex flows behind something a person could understand and trust.",
          ],
          bullets: [
            "Four or more decentralized apps, each from wireframe to shipped React.",
            "Reusable UI patterns carried across apps to stay consistent.",
            "A regular review habit that kept the code clean as the surface grew.",
          ],
        },
        {
          heading: "The hard part",
          body: [
            "[Add specifics. Which app was hardest and why, a flow that was tricky to model in UI, a performance or state problem you cracked, or how you kept four apps coherent at once.]",
          ],
        },
      ],
      stackNotes: [
        { name: "React", note: "The core of every app I shipped here." },
        { name: "Web3", note: "Wallet and contract integration in the browser." },
        { name: "TypeScript", note: "Kept large, fast moving UIs safe to change." },
      ],
      links: [],
    },
  },
  {
    slug: "samsung",
    period: "2023",
    role: "Themes Freelancer",
    org: "Samsung",
    summary:
      "I made more than ten custom themes for Samsung devices in their Theme Studio app, designing five or more screens per theme in Figma. A few passed 100 downloads.",
    highlights: [
      "Designed and published 10+ custom themes for Samsung devices via Theme Studio.",
      "5+ screens per theme, designed in Figma before build.",
      "Several themes crossed 100+ downloads on the store.",
    ],
    stack: ["Figma", "Theme Studio", "UI Design"],
    icon: "/icons/sketchbook.png",
    detail: {
      tagline: "Ten or more published device themes, from design to store.",
      context: [
        "I designed and shipped custom themes for Samsung devices through their Theme Studio, working the full path from concept in Figma to a published listing real users could install.",
      ],
      sections: [
        {
          heading: "The work",
          body: [
            "Each theme was a small design system of its own, a consistent visual language applied across every system screen, designed in Figma first and then built and submitted through Theme Studio.",
          ],
          bullets: [
            "10+ themes published.",
            "5+ screens designed per theme for a coherent look across the OS.",
            "Several themes passed 100+ downloads.",
          ],
        },
        {
          heading: "What it taught me",
          body: [
            "[Add detail. Your design process, what made the popular themes work, and anything you learned about shipping to a real store and real users.]",
          ],
        },
      ],
      stackNotes: [
        { name: "Figma", note: "Where every theme was designed first." },
        { name: "Theme Studio", note: "Samsung's build and publish toolchain." },
      ],
      links: [],
    },
  },
  {
    slug: "freelance",
    period: "2018 to 2019",
    role: "Junior Developer",
    org: "Freelance",
    summary:
      "I built websites and small apps for local businesses while I was still in school. This is where the love of shipping started.",
    highlights: [
      "Built websites and small apps for local businesses while still in school.",
      "Full stack work with JavaScript on the front and PHP and MySQL on the back.",
      "Where the habit of shipping for real users started.",
    ],
    stack: ["JavaScript", "PHP", "MySQL"],
    icon: "/icons/laptop.png",
    detail: {
      tagline: "Shipping for real clients before I had left school.",
      context: [
        "While I was still in school I built websites and small applications for local businesses. Real clients, real deadlines, real money on the line.",
        "This is where the habit started, the satisfaction of putting something live that someone else depends on.",
      ],
      sections: [
        {
          heading: "What I built",
          body: [
            "Full stack work on a small scale. JavaScript on the front end with PHP and MySQL behind it, for businesses that needed a presence or a tool and did not have a developer.",
          ],
        },
        {
          heading: "Why it mattered",
          body: [
            "[Add a story or two. A client you helped, the first thing you ever shipped, or what you taught yourself to get it done.]",
          ],
        },
      ],
      stackNotes: [
        { name: "JavaScript", note: "Front end interactivity." },
        { name: "PHP", note: "Server side logic for the small apps." },
        { name: "MySQL", note: "Where the data lived." },
      ],
      links: [],
    },
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
