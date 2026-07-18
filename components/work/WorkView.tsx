"use client"

import { useState } from "react"
import type { Project } from "@/lib/types"
import { ViewToggle } from "@/components/work/ViewToggle"
import { ProjectList } from "@/components/work/ProjectList"
import { ProjectGrid } from "@/components/work/ProjectGrid"

type WorkViewProps = {
  projects: Project[]
}

export function WorkView({ projects }: WorkViewProps) {
  const [mode, setMode] = useState<"list" | "grid">("list")

  return (
    <div>
      <div className="mb-10 flex justify-end">
        <ViewToggle mode={mode} onChange={setMode} />
      </div>
      {mode === "list" ? (
        <ProjectList projects={projects} />
      ) : (
        <ProjectGrid projects={projects} />
      )}
    </div>
  )
}
