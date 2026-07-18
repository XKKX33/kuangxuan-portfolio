"use client"

import { useState } from "react"
import type { Project } from "@/lib/types"
import { ProjectRow } from "@/components/work/ProjectRow"

type ProjectListProps = {
  projects: Project[]
}

export function ProjectList({ projects }: ProjectListProps) {
  const [hover, setHover] = useState<string | null>(null)

  return (
    <div>
      <div className="mb-2 hidden grid-cols-[1.4fr_1.2fr_0.8fr_4rem] gap-6 border-b border-line pb-3 font-mono text-[11px] tracking-wide text-muted uppercase md:grid">
        <span>Project</span>
        <span>Field</span>
        <span>Role</span>
        <span className="text-right">Year</span>
      </div>
      <div className="border-t border-line md:border-t-0">
        {projects.map((project) => (
          <ProjectRow
            key={project.slug}
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
