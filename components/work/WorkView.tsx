"use client"

import { useState } from "react"
import type { LocalizedProject, UiCopy } from "@/content/i18n"
import type { Locale } from "@/lib/i18n"
import { ViewToggle } from "@/components/work/ViewToggle"
import { ProjectList } from "@/components/work/ProjectList"
import { ProjectGrid } from "@/components/work/ProjectGrid"

type WorkViewProps = {
  locale: Locale
  ui: UiCopy
  projects: LocalizedProject[]
}

export function WorkView({ locale, ui, projects }: WorkViewProps) {
  const [mode, setMode] = useState<"list" | "grid">("list")

  return (
    <div>
      <div className="mb-10 flex justify-end">
        <ViewToggle mode={mode} onChange={setMode} locale={locale} />
      </div>
      {mode === "list" ? (
        <ProjectList locale={locale} ui={ui} projects={projects} />
      ) : (
        <ProjectGrid locale={locale} projects={projects} />
      )}
    </div>
  )
}
