import { projects } from "@/content/projects"
import type { Project } from "@/lib/types"

export function getAllProjects(): Project[] {
  return projects
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured)
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug)
}

export function getDetailProjects(): Project[] {
  return projects.filter((p) => p.hasDetail)
}

export function getNextProject(slug: string): Project | undefined {
  const details = getDetailProjects()
  const i = details.findIndex((p) => p.slug === slug)
  if (i < 0) return undefined
  return details[(i + 1) % details.length]
}

export function getProjectHref(project: Project): string {
  if (project.hasDetail) return `/work/${project.slug}`
  return `/work#${project.slug}`
}
