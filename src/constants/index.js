import rs3Hero from "../assets/projects/rs3-hero.png";
import rs3DailyTasks from "../assets/projects/rs3-daily-tasks.png";
import rs3Goals from "../assets/projects/rs3-goals.png";
import rs3Skills from "../assets/projects/rs3-skills.png";
import magpieHero from "../assets/projects/magpie-hero.png";
import magpieProfit from "../assets/projects/magpie-profit.png";
import magpieRefinery from "../assets/projects/magpie-refinery.png";
import magpieShips from "../assets/projects/magpie-ships.png";
import magpieTrade from "../assets/projects/magpie-trade.png";

export const HERO_CONTENT = `Full stack developer based in Orlando, FL. I build production-grade web applications end to end — most recently engineering portal infrastructure for a major hospitality company as an intern at Integris Group.`;

export const ABOUT_TEXT = `I started coding with a UCF bootcamp in 2017, then spent years building real skills while working in real estate and sales. That combination gave me something I see missing in a lot of devs — I can talk to stakeholders, understand business problems, and build software that actually solves them.

Over four years as Instructional Staff at EdX, I mentored hundreds of students through full-stack development and conducted in-depth code reviews across both the MERN and PERN stacks. Most recently I completed an engineering internship at Integris Group, where I shipped production Next.js / TypeScript / Azure SQL systems for a major hospitality company — including a capability matrix that replaced scattered conditional logic across six pages with a single domain function backed by 19 unit tests.

Currently pursuing an AS/BS in Computer Programming and Analysis at Valencia College while building side projects and looking for my next full-time role.`;

export const EXPERIENCES = [
  {
    year: "Feb 2026 - May 2026",
    role: "Agentic Engineer Intern",
    company: "Integris Group",
    description: "Rebuilt a customer self-service portal for a major hospitality company. Architected a single-source-of-truth owner-capability matrix (Next.js 16 / TypeScript / Prisma / Azure SQL) that drives booking, payment, and profile access — replacing scattered conditional logic across 6+ pages with a pure domain function backed by 19 unit tests. Also delivered admin observability tooling, session-bound impersonation cookies, and PII lockdown across all data-edit paths.",
    technologies: ["Next.js 16", "TypeScript", "Prisma", "Azure SQL", "React"],
  },
  {
    year: "Mar 2021 - Mar 2025",
    role: "Instructional Staff",
    company: "EdX",
    description: "Facilitated student learning in full-stack web development with a focus on industry best practices. Provided technical instruction and mentorship in HTML, CSS, JavaScript, and the full MERN stack. Conducted detailed code reviews to identify bugs, enforce coding standards, and improve code quality.",
    technologies: ["JavaScript", "React.js", "MongoDB", "Node.js", "Express.js", "PostgreSQL"],
  },
  {
    year: "Dec 2022 - Sep 2023",
    role: "Central Grading Staff",
    company: "EdX",
    description: "Evaluated complex technical assignments across the full-stack bootcamp curriculum. Delivered high-precision feedback and debugged student submissions to provide specific, actionable instructions for improvement.",
    technologies: ["JavaScript", "React.js", "MongoDB", "Node.js", "Express.js"],
  },
  {
    year: "Mar 2019 - Sep 2024",
    role: "Realtor",
    company: "Kelly Price & Company",
    description: "Managed the full client lifecycle — lead generation, market analysis, and transaction management. Executed marketing strategies to list and sell residential properties, and built marketing sites to promote high-end listings.",
    technologies: [],
  },
];

export const PROJECTS = [
  {
    id: "rs3-hub",
    title: "RS3 Efficiency Hub",
    image: rs3Hero,
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
    gallery: [
      { image: rs3Skills, caption: "XP Tracker — live skill levels and XP gains pulled from the Jagex Hiscores API" },
      { image: rs3Goals, caption: "Endgame Goal Calculator — bottleneck analysis and estimated time to Max Cape" },
      { image: rs3DailyTasks, caption: "Daily Tasks Tracker — star activities to pin them to your dashboard" },
    ],
    links: [],
    videoUrl: null,
    status: "active",
  },
  {
    id: "magpie-sc",
    title: "Magpie Industries SC",
    image: magpieHero,
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
    gallery: [
      { image: magpieTrade, caption: "Trade Route Planner — most profitable routes across Stanton by commodity and cargo size" },
      { image: magpieRefinery, caption: "Refinery Optimizer — every refining method compared by yield, time, and net profit" },
      { image: magpieProfit, caption: "Profit Simulator — activity comparison with break-even and 30-day projections" },
      { image: magpieShips, caption: "Ship Database — side-by-side comparison of up to four ships with full specs" },
    ],
    links: [],
    videoUrl: null,
    status: "active",
  },
  {
    id: "coming-soon",
    title: "In Development",
    image: null,
    description:
      "Next project currently in progress. Details coming soon.",
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

export const EDUCATION = [
  {
    year: "Jan 2025 - Present",
    degree: "AS/BS: Computer Programming and Analysis",
    school: "Valencia College",
    location: "Orlando, FL",
    note: "AS expected Summer 2026 · BS expected Spring 2028",
  },
  {
    year: "Apr 2017 - Oct 2017",
    degree: "Certificate in Full Stack Web Development",
    school: "UCF Coding Bootcamp",
    location: "Orlando, FL",
    note: null,
  },
];

export const CONTACT = {
  address: "Orlando, Florida",
  phoneNo: "+1 407.414.9770",
  email: "cchase1991@gmail.com",
};
