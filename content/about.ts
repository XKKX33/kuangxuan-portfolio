import type { AboutContent } from "@/lib/types"
import { enAbout } from "@/content/i18n/en"
import { zhAbout } from "@/content/i18n/zh"

/**
 * Legacy about content (zh narrative + English headline/capability titles).
 * Prefer `getAbout(locale)` from `@/content/i18n` for pure locale content.
 */
export const about: AboutContent = {
  headline: zhAbout.headline,
  headlineEn: enAbout.headline,
  photoAlt: zhAbout.photoAlt,
  education: zhAbout.education,
  capabilities: zhAbout.capabilities.map((cap, i) => ({
    index: cap.index,
    title: cap.title,
    titleEn: enAbout.capabilities[i]?.title ?? cap.title,
    body: cap.body,
  })),
  skills: zhAbout.skills,
  researchInterests: zhAbout.researchInterests,
}
