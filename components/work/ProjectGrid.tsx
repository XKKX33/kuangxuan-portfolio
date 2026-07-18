import type { Project } from "@/lib/types"
import { ProjectCard } from "@/components/work/ProjectCard"

type ProjectGridProps = {
  projects: Project[]
}

export function ProjectGrid({ projects }: ProjectGridProps) {
  return (
    <div className="grid gap-8 sm:grid-cols-2">
      {projects.map((project) => (
        <ProjectCard key={project.slug} project={project} />
      ))}
    </div>
  )
}
