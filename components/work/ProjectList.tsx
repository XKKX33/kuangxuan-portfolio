"use client"

import { useState } from "react"
import type { LocalizedProject, UiCopy } from "@/content/i18n"
import type { Locale } from "@/lib/i18n"
import { ProjectRow } from "@/components/work/ProjectRow"

type ProjectListProps = {
  locale: Locale
  ui: UiCopy
  projects: LocalizedProject[]
}

export function ProjectList({ locale, ui, projects }: ProjectListProps) {
  const [hover, setHover] = useState<string | null>(null)
  const cols = ui.work.columns

  return (
    <div>
      <div className="mb-2 hidden grid-cols-[1.4fr_1.2fr_0.8fr_4rem] gap-6 border-b border-line pb-3 font-mono text-[11px] tracking-wide text-muted uppercase md:grid">
        <span>{cols.project}</span>
        <span>{cols.field}</span>
        <span>{cols.role}</span>
        <span className="text-right">{cols.year}</span>
      </div>
      <div className="border-t border-line md:border-t-0">
        {projects.map((project) => (
          <ProjectRow
            key={project.slug}
            locale={locale}
            project={project}
            dimmed={hover !== null && hover !== project.slug}
            active={hover === project.slug}
            onEnter={() => setHover(project.slug)}
            onLeave={() => setHover(null)}
          />
        ))}
      </div>
    </div>
  )
}
