import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";

export const HERO_CONTENT = `Full stack developer based in Orlando, FL. I build web apps, help others learn to code, and spend way too much time in Runescape 3.`;

export const ABOUT_TEXT = `My path to software wasn't the typical CS-degree route. I spent years in real estate and sales before deciding I'd rather build things than sell them. Enrolled in a bootcamp, fell in love with it, and never looked back.

Now I build full stack apps and help others learn to do the same — I've been a Teaching Assistant at EdX since 2021, which keeps me honest about what's actually hard to learn and why it matters.

Outside the editor I'm deep in Runescape 3, knee-deep in a Warhammer 40k build, planning the next PC, or out in the workshop. A few of those hobbies have turned into actual projects.`;

export const EXPERIENCES = [
  {
    year: "2021 - Present",
    role: "Teaching Assistant",
    company: "EdX",
    description: "Help students learn full stack web development — from HTML basics to full React/Node apps. Give feedback on projects, debug alongside students, and work with instructors to build course content.",
    technologies: ["JavaScript", "React.js", "PostgreSQL", "MongoDB", "Node.js", "Express.js"],
  },
  {
    year: "2022 - 2023",
    role: "Central Grader",
    company: "EdX",
    description: "Evaluated student projects across web development courses. Gave detailed, actionable feedback to help students improve — not just correct code, but understand why.",
    technologies: ["JavaScript", "React.js", "PostgreSQL", "MongoDB", "Node.js", "Express.js"],
  },
  {
    year: "2020 - 2022",
    role: "Cruise Sales Manager",
    company: "Expedia Cruises Lake Nona",
    description: "Managed a sales team, built out sales strategy, and ran product launches. This is where I learned that systems, communication, and iteration matter just as much in code as in sales.",
    technologies: [],
  },
  {
    year: "2019 - 2024",
    role: "Real Estate Agent",
    company: "Kelly Price & Company",
    description: "Helped clients buy, sell, and rent properties across Orlando. Built marketing sites to promote listings and attract buyers — first taste of building something real with code.",
    technologies: ["React.js", "MongoDB", "Node.js", "Express.js"],
  },
];

export const PROJECTS = [
  {
    id: "rs3-hub",
    title: "RS3 Efficiency Hub",
    image: project1,
    description:
      "A full-stack tool for RuneScape 3 players who want to play smarter. Pulls live data from Jagex Hiscores, visualizes progress toward goals like the Max Cape, and ranks daily activities by efficiency.",
    technologies: ["React", "Vite", "Node.js", "Express", "Jagex API"],
    github: "https://github.com/jazztazz1991/RS3-Hub",
    demo: null,
    // Detail page
    fullDescription: "RS3 Efficiency Hub started as a personal tool to stop wasting time in RuneScape. I wanted a dashboard that would look at my actual stats and tell me exactly what to train and in what order to hit my goals as fast as possible. It grew from a weekend script into a full-stack app with a React frontend, an Express backend that proxies and caches the Jagex Hiscores API, and a proper data layer for goal tracking.",
    features: [
      { title: "Efficiency Dashboard", description: "Visualizes your current stats and calculates the most efficient path toward goals like the Max Cape." },
      { title: "Daily Task Optimizer", description: "Ranks daily and weekly activities by efficiency so you always know what to grind next and never waste a daily reset." },
      { title: "Hiscores Proxy", description: "Express backend fetches and caches live player data from the Jagex Hiscores API, keeping requests fast and within rate limits." },
    ],
    techStack: [
      { category: "Frontend", items: ["React", "Vite", "CSS"] },
      { category: "Backend", items: ["Node.js", "Express"] },
      { category: "APIs", items: ["Jagex Hiscores API"] },
    ],
    links: [],
    videoUrl: null,
    status: "active",
  },
  {
    id: "magpie-sc",
    title: "Magpie Industries SC",
    image: project2,
    description:
      "A Star Citizen companion app for orgs, friend groups, and solo players. Full toolset: mining calculator, refinery optimizer, trade route planner, ship database, profit simulator, and more.",
    technologies: ["Next.js 15", "TypeScript", "PostgreSQL", "Prisma", "Express"],
    github: "https://github.com/jazztazz1991/MagpieIndustriesSC",
    demo: null,
    // Detail page
    fullDescription: "Magpie Industries SC grew out of frustration with spreadsheets. Star Citizen has a lot of depth — mining, trading, salvage, ship fitting — but no good tools to make sense of the numbers. I built a full companion app as a Next.js 15 + Express monorepo with a PostgreSQL backend, covering 11 pages of tools that the community actually uses to make decisions in-game.",
    features: [
      { title: "Mining Calculator", description: "4-tab tool: rock scanner, profit calculator, laser comparison, and ore reference. Includes FleetBuilder and LoadoutBuilder for multi-ship setups." },
      { title: "Refinery Optimizer", description: "Compares all refining methods side by side — yield, time, and profit for any ore batch you've collected." },
      { title: "Trade Route Planner", description: "Filter by commodity or location, see profit per SCU, and plan routes before you fly them." },
      { title: "Ship Database", description: "All flyable ships with filters by manufacturer, size, and role. Expandable cards with full specs and side-by-side comparison for up to 4 ships." },
      { title: "Profit Simulator", description: "Configure activity parameters and run comparisons across mining, trading, salvage, and other activities. Includes ROI break-even analysis." },
      { title: "Salvage Calculator", description: "Select a ship wreck and see exact RMC and material yields with current price references." },
    ],
    techStack: [
      { category: "Frontend", items: ["Next.js 15", "React 19", "TypeScript", "TailwindCSS 4"] },
      { category: "Backend", items: ["Express", "Node.js", "TypeScript"] },
      { category: "Database", items: ["PostgreSQL", "Prisma ORM"] },
      { category: "Auth", items: ["NextAuth v5"] },
      { category: "Testing", items: ["Vitest", "Playwright"] },
      { category: "Infra", items: ["npm workspaces (monorepo)", "Render"] },
    ],
    links: [],
    videoUrl: null,
    status: "active",
  },
  {
    id: "coming-soon",
    title: "Coming Soon",
    image: project3,
    description:
      "The next project is in the works. Check back soon.",
    technologies: [],
    github: null,
    demo: null,
    fullDescription: "This project is currently in development. Details coming soon.",
    features: [],
    techStack: [],
    links: [],
    videoUrl: null,
    status: "wip",
  },
];

export const CONTACT = {
  address: "Orlando, Florida",
  phoneNo: "+1 407.414.9770",
  email: "cchase1991@gmail.com",
};
