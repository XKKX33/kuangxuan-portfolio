/**
 * @deprecated Prefer locale-aware helpers from `@/content/i18n`.
 * Kept as thin re-exports for any residual callers (defaults to zh).
 */
import {
  getDetailProjects as getDetailProjectsI18n,
  getFeaturedProjects as getFeaturedProjectsI18n,
  getNextProject as getNextProjectI18n,
  getProjectBySlug as getProjectBySlugI18n,
  getProjectHref as getProjectHrefI18n,
  getProjects,
  type LocalizedProject,
} from "@/content/i18n"

export type Project = LocalizedProject

export function getAllProjects(): LocalizedProject[] {
  return getProjects("zh")
}

export function getFeaturedProjects(): LocalizedProject[] {
  return getFeaturedProjectsI18n("zh")
}

export function getProjectBySlug(slug: string): LocalizedProject | undefined {
  return getProjectBySlugI18n("zh", slug)
}

export function getDetailProjects(): LocalizedProject[] {
  return getDetailProjectsI18n("zh")
}

export function getNextProject(slug: string): LocalizedProject | undefined {
  return getNextProjectI18n("zh", slug)
}

export function getProjectHref(project: LocalizedProject): string {
  return getProjectHrefI18n("zh", project)
}
