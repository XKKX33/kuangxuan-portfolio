import type { Locale } from "@/lib/i18n"
import { localePath } from "@/lib/i18n"
import { enAbout, enProjects, enUi } from "./en"
import type { LocalizedAbout, LocalizedProject, UiCopy } from "./types"
import { zhAbout, zhProjects, zhUi } from "./zh"

export type { LocalizedAbout, LocalizedProject, UiCopy } from "./types"
export { enAbout, enProjects, enUi } from "./en"
export { zhAbout, zhProjects, zhUi } from "./zh"

export function getUi(locale: Locale): UiCopy {
  return locale === "en" ? enUi : zhUi
}

export function getProjects(locale: Locale): LocalizedProject[] {
  return locale === "en" ? enProjects : zhProjects
}

export function getAbout(locale: Locale): LocalizedAbout {
  return locale === "en" ? enAbout : zhAbout
}

export function getProjectBySlug(
  locale: Locale,
  slug: string,
): LocalizedProject | undefined {
  return getProjects(locale).find((p) => p.slug === slug)
}

export function getFeaturedProjects(locale: Locale): LocalizedProject[] {
  return getProjects(locale).filter((p) => p.featured)
}

export function getDetailProjects(locale: Locale): LocalizedProject[] {
  return getProjects(locale).filter((p) => p.hasDetail)
}

export function getNextProject(
  locale: Locale,
  slug: string,
): LocalizedProject | undefined {
  const details = getDetailProjects(locale)
  const i = details.findIndex((p) => p.slug === slug)
  if (i < 0) return undefined
  return details[(i + 1) % details.length]
}

/**
 * Locale-prefixed project href.
 * Detail projects → `/work/:slug` (or `/en/work/:slug`);
 * list-only → `/work#slug` (or `/en/work#slug`).
 */
export function getProjectHref(
  locale: Locale,
  project: LocalizedProject,
): string {
  if (project.hasDetail) {
    return localePath(locale, `/work/${project.slug}`)
  }
  const base = localePath(locale, "/work")
  return `${base}#${project.slug}`
}
