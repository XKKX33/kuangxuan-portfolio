import Link from "next/link"
import type { LocalizedProject } from "@/content/i18n"
import { getProjectHref } from "@/content/i18n"
import type { Locale } from "@/lib/i18n"

type ProjectCardProps = {
  locale: Locale
  project: LocalizedProject
}

export function ProjectCard({ locale, project }: ProjectCardProps) {
  return (
    <Link
      href={getProjectHref(locale, project)}
      id={project.slug}
      data-cursor="view"
      className="group block"
    >
      <div className="relative flex aspect-[4/3] items-end overflow-hidden rounded-sm border border-line bg-surface p-6 transition-transform duration-500 group-hover:scale-[1.02]">
        <span
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(135deg, transparent 40%, #1d1d1f 40%, #1d1d1f 41.5%, transparent 41.5%), linear-gradient(45deg, transparent 60%, #1d1d1f 60%, #1d1d1f 61%, transparent 61%)",
          }}
          aria-hidden
        />
        <span className="relative rounded-full border border-line bg-bg px-2.5 py-1 font-mono text-xs tracking-[0.2em] text-muted uppercase">
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
