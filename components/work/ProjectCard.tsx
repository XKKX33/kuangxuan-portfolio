import Link from "next/link"
import type { Project } from "@/lib/types"
import { getProjectHref } from "@/lib/projects"

type ProjectCardProps = {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link
      href={getProjectHref(project)}
      id={project.slug}
      data-cursor="view"
      className="group block"
    >
      <div
        className="relative flex aspect-[4/3] items-end overflow-hidden rounded-sm p-6 transition-transform duration-500 group-hover:scale-[1.02]"
        style={{ backgroundColor: project.visuals.accent }}
      >
        <span
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "linear-gradient(135deg, transparent 40%, #fff 40%, #fff 42%, transparent 42%), linear-gradient(45deg, transparent 60%, #fff 60%, #fff 61%, transparent 61%)",
          }}
          aria-hidden
        />
        <span className="relative font-mono text-xs tracking-[0.2em] text-white/80 uppercase">
          {project.visuals.label}
        </span>
      </div>
      <div className="mt-4 flex items-baseline justify-between gap-4">
        <div>
          <p className="font-display text-xl tracking-tight">{project.title}</p>
          <p className="mt-1 text-sm text-muted">{project.field}</p>
        </div>
        <span className="font-mono text-xs text-muted">{project.year}</span>
      </div>
    </Link>
  )
}
