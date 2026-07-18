import { withBasePath } from "@/lib/paths"
import type { LocalizedAbout, LocalizedProject, UiCopy } from "./types"

export const enUi: UiCopy = {
  name: "Kuang Xuan",
  city: "Xiamen / China",
  email: "2468857063@qq.com",
  identity: {
    tagline: "Applied Statistics × AI Engineering",
    support:
      "Building recommendation systems, intelligent agents, and data-driven products.",
    roleLine: "Recommendation · Agents · Data Products",
    schools: [
      "Xiamen University · M.S. Applied Statistics",
      "Sichuan University · B.S. Management Science",
    ],
  },
  hero: {
    ctaResume: "Download CV",
    ctaEmail: "Email me",
    ctaMore: "Learn more",
  },
  navBrand: "© Portfolio · Kuang Xuan",
  nav: [
    { href: "/", label: "Home", index: "01" },
    { href: "/work", label: "Work", index: "02" },
    { href: "/about", label: "About", index: "03" },
    { href: "/contact", label: "Contact", index: "04" },
  ],
  marquee: [
    "RECOMMENDATION SYSTEMS",
    "AI AGENTS",
    "DATA INTELLIGENCE",
    "STATISTICAL MODELING",
  ],
  loaderWords: [
    "Hello",
    "Modeling",
    "Ranking",
    "Recommendation",
    "Agent",
    "Decision",
    "Kuang Xuan",
  ],
  loaderFinal: "KUANG XUAN / 2026 PORTFOLIO",
  resumePdf: withBasePath("/resume.pdf"),
  language: {
    zhLabel: "中文",
    enLabel: "EN",
    switchAria: "Switch language",
  },
  work: {
    sectionTitle: "Recent Work",
    viewAll: "View all",
    nextProject: "Next project",
    columns: {
      project: "Project",
      field: "Field",
      role: "Role",
      year: "Year",
    },
  },
  about: {
    sectionTitle: "About",
    educationTitle: "Education",
    skillsTitle: "Skills",
    researchTitle: "Research interests",
  },
  contact: {
    headline: "Let's talk",
    ctaEmail: "Email me",
    ctaResume: "Download CV",
  },
  detail: {
    challenge: "Challenge",
    contribution: "What I did",
    system: "System",
    reflection: "Reflection",
  },
  meta: {
    title: "Kuang Xuan · Portfolio",
    description:
      "Kuang Xuan — Applied Statistics × AI Engineering. Building recommendation systems, intelligent agents, and data-driven products.",
  },
  socials: {},
}

export const enProjects: LocalizedProject[] = [
  {
    slug: "taac-2026",
    title: "TAAC 2026",
    field: "Advertising Ranking",
    role: "Core Member",
    year: "2026",
    period: "2026.04–2026.05",
    summary:
      "Ad ranking with HyFormer + RankMixer: training acceleration, feature engineering, and target-aware fusion.",
    tags: ["Recommendation", "Ranking", "Model Optimization"],
    featured: true,
    hasDetail: true,
    meta: {
      role: "Core Member",
      focus: "Training & Feature Engineering",
      model: "HyFormer + RankMixer",
      year: "2026",
    },
    challenge:
      "Ad ranking models must jointly handle user, ad, and multi-domain behavior sequences, while training speed and feature expressiveness limit iteration cycles.",
    contribution: [
      "Accelerated training and data processing with torch.compile, BF16 AMP, TF32, and Numba.",
      "Built hash stats, cyclic time, and holiday features to strengthen user, ad, and history representations.",
      "Introduced target-aware fusion to dynamically weight multi-domain history sequences by ad context.",
    ],
    system: {
      nodes: [
        "User Profile",
        "Ad Context",
        "Search History",
        "Click History",
        "Purchase History",
        "Time Features",
      ],
      result: "Target-aware Fusion → RankMixer → Prediction",
    },
    reflection: [
      "Compile and mixed precision usually cut iteration time more than blindly deeper nets.",
      "Time and holiday signals are stable gains in ads; validate them with sequence modeling.",
      "Profile data loading and model compute separately — optimize both sides.",
    ],
    visuals: { accent: "#315CFF", label: "Ranking" },
  },
  {
    slug: "a-share-agent",
    title: "A-Share Intelligence Agent",
    field: "AI Agent / Financial Analysis",
    role: "Independent",
    year: "2026",
    period: "2026.03–present",
    summary:
      "Emotion cycle, wave structure, MACD, volume, and capital flow as a constrained research-agent workflow.",
    tags: ["AI Agent", "Financial Analysis", "Workflow"],
    featured: true,
    hasDetail: true,
    meta: {
      role: "Independent",
      focus: "Skill Design & Constraint Rules",
      model: "LLM + Domain Rules",
      year: "2026",
    },
    challenge:
      "Free-form stock prompts are unstable and hard to review; domain structure must become a reusable decision workflow.",
    contribution: [
      "Built an A-share research skill integrating emotion cycles, wave structure, MACD, volume, and capital flow.",
      "Supports trend judgment, watchlist screening, key-level detection, and post-trade attribution.",
      "Constrained outputs with data date, quote source, conflict signals, and capital-layer rules for interpretability.",
    ],
    system: {
      nodes: [
        "Market Data",
        "Structure Signals",
        "Constraint Rules",
        "Agent Nodes",
        "Decision Report",
      ],
      result: "Structured analysis workflow with conflict handling",
    },
    reflection: [
      "Rule constraints reduce financial hallucination better than longer prompts alone.",
      "Conflict signals should be exposed, not silently averaged away.",
      "Next: wire backtest hooks so judgments meet verifiable outcomes.",
    ],
    visuals: { accent: "#1C1C1C", label: "Agent" },
  },
  {
    slug: "news-recommendation",
    title: "News Recommendation",
    field: "Recall / Ranking",
    role: "Core Member",
    year: "2026",
    period: "2026.03–2026.04",
    summary:
      "Multi-path recall + feature engineering + model fusion for a user Top5 news list.",
    tags: ["Recall", "Ranking", "Feature Engineering"],
    featured: true,
    hasDetail: true,
    meta: {
      role: "Core Member",
      focus: "Recall & Ranking Fusion",
      model: "Multi-path + Rank/Classify/Seq",
      year: "2026",
    },
    challenge:
      "Predict the five articles a user is most likely to click last, covering short-term interest, cold users, hot items, new articles, and the long tail.",
    contribution: [
      "Combined recent clicks, similar users, popular articles, content similarity, and publish-time rules in recall.",
      "Built ranking features around why a user would click a candidate vs recent history (content, topic, time, length).",
      "Fused ranking, classification, and sequence models into a Top5 list.",
    ],
    system: {
      nodes: [
        "User History",
        "Multi-path Recall",
        "Feature Build",
        "Fusion Ranking",
        "Top 5",
      ],
      result: "Top5 click prediction list",
    },
    reflection: [
      "Evaluate recall coverage and ranking precision in stages — not only final Top5.",
      "Cold users need similar-user and popularity paths, not recent clicks alone.",
      "Difference features are often more interpretable than absolute attributes.",
    ],
    visuals: { accent: "#315CFF", label: "Recall" },
  },
  {
    slug: "cnki-pipeline",
    title: "CNKI Data Pipeline",
    field: "Data Engineering",
    role: "Core Member",
    year: "2026",
    period: "2026.01–2026.04",
    summary:
      "Cleaning, crawling, and gap-refill pipeline for 175 management journals at million-row scale.",
    tags: ["Automation", "Data Engineering", "Web Crawling"],
    featured: true,
    hasDetail: false,
    meta: {
      role: "Core Member",
      focus: "Pipeline & Data Quality",
      model: "Python + Selenium + OpenCV",
      year: "2026",
    },
    challenge:
      "Fund-outcome fields in management journals are noisy; need a closed loop from table cleaning to search crawl to gap refill.",
    contribution: [
      "Automated raw paper tables → fund-field cleaning → ID extraction → CNKI search crawl.",
      "Built cleaning and crawl scripts with Python, Pandas, Selenium, and OpenCV.",
      "Covered 175 journals, million-plus rows, with gap stats and refill support.",
    ],
    system: {
      nodes: [
        "Raw Tables",
        "Field Cleaning",
        "ID Extract",
        "CNKI Crawl",
        "Gap Refill",
      ],
      result: "Million-scale structured fund outcomes",
    },
    reflection: [
      "A refill loop keeps data assets maintainable better than one-shot crawls.",
      "Use OCR/OpenCV only where needed; control retry cost on failures.",
    ],
    visuals: { accent: "#9A9A96", label: "Data" },
  },
]

export const enAbout: LocalizedAbout = {
  headline: "I turn data into\nmodels, systems\nand decisions.",
  photoAlt: "Kuang Xuan photo placeholder",
  education: [
    {
      school: "Xiamen University",
      college: "School of Economics",
      degree: "M.S.",
      major: "Applied Statistics / AI & Data Science",
      period: "2025.09–present",
      courses: [
        "Advanced Econometrics",
        "Deep Learning & AI",
        "Advanced Statistical Learning",
        "Advanced Macro/Microeconomics",
        "Advanced Finance",
      ],
      honors: [],
    },
    {
      school: "Sichuan University",
      college: "Business School",
      degree: "B.S.",
      major: "Management Science",
      period: "2021.09–2025.06",
      courses: [
        "Machine Learning",
        "Python Programming",
        "Stochastic OR",
        "Multivariate Statistics",
        "Time Series Analysis",
        "Game Theory",
        "Data Marketing Analytics",
      ],
      honors: [
        "Provincial First Prize, National College Math Competition",
        "University Third Prize, XUECHUANG Cup Entrepreneurship Simulation",
        "Provincial Second Prize, Statistical Modeling",
      ],
    },
  ],
  capabilities: [
    {
      index: "01",
      title: "Recommendation",
      body: "Recall, ranking, sequence modeling, user behavior features, and multi-domain interest fusion.",
    },
    {
      index: "02",
      title: "AI Agent",
      body: "Compose domain knowledge, data tools, and LLMs into structured decision workflows.",
    },
    {
      index: "03",
      title: "Data Intelligence",
      body: "Data cleaning, automated collection, statistical modeling, and interpretable analysis.",
    },
  ],
  skills: [
    "Python",
    "PyTorch",
    "SQL",
    "Pandas",
    "Recommendation",
    "Ranking",
    "Statistics",
    "Codex",
    "Claude",
    "Gemini",
    "DeepSeek",
    "Tableau",
    "Selenium",
    "OpenCV",
  ],
  researchInterests: [
    "Ranking & multi-domain sequence modeling",
    "Constrained finance / research agents",
    "Data governance & interpretable decisions",
  ],
}
