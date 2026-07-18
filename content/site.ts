import type { SiteContent } from "@/lib/types"
import { zhUi } from "@/content/i18n/zh"

/**
 * Legacy single-locale site content (zh defaults).
 * Prefer `getUi(locale)` from `@/content/i18n` for bilingual pages.
 */
export const site: SiteContent = {
  name: zhUi.name,
  nameEn: "Kuang Xuan",
  city: zhUi.city,
  email: zhUi.email,
  identity: {
    cn: `${zhUi.name}——${zhUi.identity.tagline}。`,
    cnSupport: zhUi.identity.support,
    en: "Applied Statistics × AI Engineering — Building recommendation systems, intelligent agents and data-driven products.",
    heroTitle: "Applied Statistics\n& AI Engineering",
    heroSubtitle: `${zhUi.name} — Recommendation, Agent and Data Intelligence`,
  },
  nav: zhUi.nav.map((item) => ({
    href: item.href,
    label: item.label,
    index: item.index,
  })),
  marquee: [
    "RECOMMENDATION SYSTEMS",
    "AI AGENTS",
    "DATA INTELLIGENCE",
    "STATISTICAL MODELING",
  ],
  marqueeCn: zhUi.marquee,
  loaderWords: zhUi.loaderWords,
  loaderFinal: zhUi.loaderFinal,
  resumePdf: zhUi.resumePdf,
  socials: { ...zhUi.socials },
}
