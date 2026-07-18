import Link from "next/link"
import type { Project } from "@/lib/types"
import { getProjectHref } from "@/lib/projects"

type ProjectRowProps = {
  project: Project
  dimmed?: boolean
  active?: boolean
  onEnter?: () => void
  onLeave?: () => void
}

export function ProjectRow({
  project,
  dimmed = false,
  active = false,
  onEnter,
  onLeave,
}: ProjectRowProps) {
  return (
    <Link
      href={getProjectHref(project)}
      id={project.slug}
      data-cursor="view"
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      className={`group grid grid-cols-1 gap-2 border-b border-line py-6 transition-all duration-300 md:grid-cols-[1.4fr_1.2fr_0.8fr_4rem] md:items-center md:gap-6 ${
        dimmed ? "opacity-35" : "opacity-100"
      } ${active ? "translate-x-3" : "translate-x-0"}`}
    >
      <div>
        <p className="font-display text-xl tracking-tight md:text-2xl">
          {project.title}
          <span className="ml-2 inline-block transition-transform duration-300 group-hover:rotate-45">
            →
          </span>
        </p>
        <p className="mt-1 text-sm text-muted">{project.titleCn}</p>
      </div>
      <p className="text-sm text-ink/70">{project.field}</p>
      <p className="font-mono text-xs text-muted">{project.role}</p>
      <p className="font-mono text-xs text-muted md:text-right">{project.year}</p>
    </Link>
  )
}
