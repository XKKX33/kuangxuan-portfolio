import type { SiteContent } from "@/lib/types"
import { withBasePath } from "@/lib/paths"

export const site: SiteContent = {
  name: "匡璇",
  nameEn: "Kuang Xuan",
  city: "Xiamen / China",
  email: "2468857063@qq.com",
  identity: {
    cn: "匡璇——专注推荐系统、智能决策与数据产品的应用统计研究者。",
    cnSupport:
      "我将统计建模、深度学习与 AI Agent 应用于推荐排序、广告预测、智能投研和数据治理。",
    en: "Applied Statistics × AI Engineering — Building recommendation systems, intelligent agents and data-driven products.",
    heroTitle: "Applied Statistics\n& AI Engineering",
    heroSubtitle: "匡璇 — Recommendation, Agent and Data Intelligence",
  },
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
  marqueeCn: ["推荐系统", "智能决策", "数据治理", "统计建模"],
  loaderWords: [
    "Modeling",
    "Ranking",
    "Recommendation",
    "Agent",
    "Decision",
    "匡璇",
  ],
  loaderFinal: "KUANG XUAN / 2026 PORTFOLIO",
  resumePdf: withBasePath("/resume.pdf"),
  socials: {},
}
