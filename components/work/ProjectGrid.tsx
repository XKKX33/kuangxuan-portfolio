import type { LocalizedProject } from "@/content/i18n"
import type { Locale } from "@/lib/i18n"
import { ProjectCard } from "@/components/work/ProjectCard"

type ProjectGridProps = {
  locale: Locale
  projects: LocalizedProject[]
}

export function ProjectGrid({ locale, projects }: ProjectGridProps) {
  return (
    <div className="grid gap-8 sm:grid-cols-2">
      {projects.map((project) => (
        <ProjectCard key={project.slug} locale={locale} project={project} />
      ))}
    </div>
  )
}
