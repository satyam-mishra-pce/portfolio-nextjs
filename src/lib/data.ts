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
      "I build web apps for regenerative finance at GainForest. The work started with blockchain based products using Hypercerts, wagmi, viem, and ethers, then shifted toward more mutable and accessible app foundations built with ATProto. I use Framer Motion for polished transitions and Zustand stores for client state.",
    highlights: [
      "Built regenerative finance web apps across blockchain and ATProto based architectures.",
      "Turned Hypercerts, wallets, signatures, records, and protocol language into flows a normal user can understand.",
      "Kept polished interfaces lightweight, even when Framer Motion and visual experiments added pressure to performance."
    ],
    stack: ["React", "TypeScript", "ATProto", "Hypercerts", "wagmi", "viem", "Framer Motion", "Zustand"],
    icon: "/icons/tree.png",
    detail: {
      tagline: "Building regenerative finance web apps that make protocol heavy systems feel normal to use.",
      context: [
        "At GainForest I work on web products for regenerative finance. During my first year the product layer was built around blockchain, including Hypercerts and wallet based flows.",
        "By the end of the year the work shifted toward more mutable and accessible foundations. ATProto became a better fit for parts of the core app experience because it is easier for normal users to understand and change over time.",
        "I am keeping product names off this page, so the story here focuses on the kind of work, the technology, and the product decisions.",
      ],
      sections: [
        {
          heading: "What I build",
          body: [
            "I build full stack product surfaces, not just isolated screens. I work across the React interface, protocol integration, state, and the small design decisions that make a complex flow feel obvious.",
          ],
          bullets: [
            "Blockchain era flows with Hypercerts, wallet connection, contract reads and writes, and transaction states.",
            "Newer ATProto based flows where records, identity, and app data can change without forcing users into blockchain mental models.",
            "Shared UI patterns that keep the product polished while still feeling consistent across apps.",
          ],
        },
        {
          heading: "The hard part",
          body: [
            "The hardest part was not only making the protocols work. It was making them disappear. Blockchain and ATProto both come with their own jargon, and a normal user should not need to understand that language just to complete a task.",
            "I kept revisiting the UI until the flow felt clear and pleasing to use. Framer Motion helped with the transitions and micro interactions, while Zustand stores kept shared client state predictable across flows. That created a second challenge. The interface had to stay visually rich without becoming heavy, so performance became part of the design work rather than an afterthought."
          ],
          bullets: [
            "Replaced protocol words with plain actions and progressive context.",
            "Designed states for loading, signing, saving, failure, and completion so users always knew what was happening.",
            "Balanced Framer Motion, shared Zustand state, and visual polish against bundle weight and runtime performance."
          ],
        },
        {
          heading: "What I learned",
          body: [
            "GainForest taught me how to use AI in serious engineering work, not just as a shortcut or a toy. I worked close to fast moving AI workflows while still building production grade apps, so the lesson was judgment.",
            "I learned when AI can speed up exploration, when every output needs to be verified, and when to slow down because real users, real data, and real product quality are involved.",
          ],
        },
        {
          heading: "How I work",
          body: [
            "I tend to own the whole path of a feature. I shape the interface, wire the data or protocol layer, test the awkward states, and keep iterating on the details until the product feels lighter than the technology behind it.",
          ],
        },
      ],
      stackNotes: [
        { name: "React", note: "The UI layer where most of the product decisions become real." },
        { name: "TypeScript", note: "Types that keep protocol data and app state safe to change." },
        { name: "ATProto", note: "A mutable social data protocol that makes parts of the app feel more familiar and editable." },
        { name: "Hypercerts", note: "The protocol layer behind some of the regenerative finance claims and attestations." },
        { name: "wagmi and viem", note: "Wallet state and typed onchain reads and writes during the blockchain focused phase." },
        { name: "Framer Motion", note: "Transitions and micro interactions that make complex flows feel smooth." },
        { name: "Zustand", note: "Small client stores for shared state across product flows." },
        { name: "ethers", note: "Contract interaction where it fit best." },
      ],
      links: [],
    },
  },
  {
    slug: "epoch-protocol",
    period: "2024",
    role: "UI Engineer",
    org: "Epoch Protocol",
    summary:
      "Epoch Protocol was my entry point into Web3. I joined for UI, built React interfaces for transaction automation dApps, and left with a real understanding of blockchain, cryptography, ethers, viem, Tailwind, and advanced TypeScript.",
    highlights: [
      "Built UI for dApps that scheduled transactions and automated actions from triggers like balance, time, and blockchain events.",
      "Worked mostly on the front end while learning the blockchain layer well enough to understand and sometimes help with it.",
      "Used Tailwind for the first time and grew from beginner TypeScript to advanced utility type heavy code.",
    ],
    stack: ["React", "TypeScript", "Tailwind", "ethers", "viem"],
    icon: "/icons/hourglass.png",
    detail: {
      tagline: "The role where Web3 stopped being abstract and became something I could build with.",
      context: [
        "Epoch Protocol was my entryway into Web3. Before joining, I had tried to understand blockchain a few times, but it never fully clicked.",
        "I joined as a UI engineer after one of the founders saw the interfaces I had built and trusted that I could bring that polish into their product. The founders were friendly and patient, and the role turned into a serious learning period for me.",
        "Most of my work was still UI, but I was not blindly painting screens. To render the right thing, I had to understand where each state came from, how the blockchain side worked, and what the user was waiting on.",
      ],
      sections: [
        {
          heading: "What I built",
          body: [
            "The first app I worked on was for scheduling transactions so they could run periodically. After that, I worked on a dApp for trigger based automation, where actions could respond to balance, time, or other blockchain events.",
            "The blockchain work was mostly handled by the founders and other engineers, but I read through it, learned from it, and helped where I could. My split was roughly 75 percent front end and 25 percent blockchain.",
          ],
          bullets: [
            "React interfaces for transaction scheduling and trigger based automation.",
            "UI states derived from wallet data, contract data, timers, balances, and event driven flows.",
            "Production oriented screens where the user needed to understand what would happen before anything touched the chain.",
          ],
        },
        {
          heading: "What I learned",
          body: [
            "This was the role where blockchain started making sense. I learned the basics deeply enough to reason about cryptography in the product, wallet flows, ethers, viem, and the general shape of onchain apps.",
            "It was also my first serious Tailwind project. I had been hesitant because I loved plain CSS and thought wrappers would take away control. Once I actually used Tailwind, it changed how fast I could build. A lot.",
          ],
        },
        {
          heading: "The hard part",
          body: [
            "The hardest part was learning blockchain while also building a production level app for the first time. Some files grew too large, and working inside them became harder than it should have been.",
            "That taught me code quality in a practical way. Not as a clean code slogan, but as the difference between a codebase that lets you keep moving and one that starts slowing every feature down.",
          ],
          bullets: [
            "Moved from beginner TypeScript to advanced patterns with utility types.",
            "Learned how quickly large UI files become painful when state and rendering logic are not separated well.",
            "Started caring more about structure, review, and maintainability because the cost was visible every day.",
          ],
        },
      ],
      stackNotes: [
        { name: "React", note: "The main layer I worked in while building the product UI." },
        { name: "TypeScript", note: "Where I grew from beginner to advanced patterns with utility types." },
        { name: "Tailwind", note: "The tool that changed my mind about styling speed and consistency." },
        { name: "ethers", note: "Part of the blockchain layer I learned while reading and helping with integrations." },
        { name: "viem", note: "Another core piece of the Web3 stack I learned through real app work." },
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
      "I designed and published more than ten custom Samsung themes. Each one started in Figma, then moved into Theme Studio, with custom lock screens, home screens, phone, contacts, messages, and settings screens.",
    highlights: [
      "Designed and published 10+ Samsung themes in mixed visual styles.",
      "Customized lock screen, home screen, phone, contacts, messages, and settings surfaces.",
      "Started designing on a computer with Figma after years of sketching only on paper.",
    ],
    stack: ["Figma", "Theme Studio", "UI Design"],
    icon: "/icons/sketchbook.png",
    detail: {
      tagline: "My first real step from paper sketches into digital product design.",
      context: [
        "Samsung themes were where I started designing seriously on a computer. Before this, most of my ideas lived in pen and paper sketches.",
        "I made mixed style themes instead of repeating one look. Each theme started in Figma, then moved into Samsung Theme Studio for building, previewing, fixing, and publishing.",
      ],
      sections: [
        {
          heading: "The work",
          body: [
            "Each theme had to feel coherent across the phone, not just look good on one wallpaper. I designed the main visual direction in Figma, then adapted it across system surfaces in Theme Studio.",
          ],
          bullets: [
            "10+ themes designed and published.",
            "Lock screen and home screen layouts with matching wallpapers and visual tone.",
            "Phone, contacts, messages, and settings screens customized to match the theme.",
          ],
        },
        {
          heading: "What I learned",
          body: [
            "This was my start with Figma and my first real experience designing directly on a computer. It changed how I thought about layout, color, icons, and consistency because every small choice had to survive across many screens.",
            "It also taught me that design trends keep moving. No design is evergreen. What feels fresh today can feel outdated tomorrow, so taste has to keep evolving too.",
          ],
        },
      ],
      stackNotes: [
        { name: "Figma", note: "Where I moved from paper sketches into digital design." },
        { name: "Theme Studio", note: "Samsung's tool for building, previewing, and publishing themes." },
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
