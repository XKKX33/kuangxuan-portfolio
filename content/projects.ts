import type { Project } from "@/lib/types"
import { enProjects } from "@/content/i18n/en"
import { zhProjects } from "@/content/i18n/zh"

/**
 * Legacy bilingual-mixed project list (zh narrative + English title field).
 * Prefer `getProjects(locale)` from `@/content/i18n` for pure locale content.
 */
export const projects: Project[] = zhProjects.map((zh, i) => {
  const en = enProjects[i]
  return {
    slug: zh.slug,
    title: en?.title ?? zh.title,
    titleCn: zh.title,
    field: en?.field ?? zh.field,
    role: en?.role ?? zh.role,
    year: zh.year,
    period: zh.period,
    summary: zh.summary,
    tags: zh.tags,
    featured: zh.featured,
    hasDetail: zh.hasDetail,
    meta: {
      role: en?.meta.role ?? zh.meta.role,
      focus: en?.meta.focus ?? zh.meta.focus,
      model: en?.meta.model ?? zh.meta.model,
      year: zh.meta.year,
    },
    challenge: zh.challenge,
    contribution: zh.contribution,
    system: en?.system ?? zh.system,
    reflection: zh.reflection,
    visuals: zh.visuals,
  }
})
