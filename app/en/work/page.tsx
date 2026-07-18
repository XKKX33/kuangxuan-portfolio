import type { Metadata } from "next"
import { getProjects, getUi } from "@/content/i18n"
import { WorkView } from "@/components/work/WorkView"

const locale = "en" as const
const ui = getUi(locale)

export const metadata: Metadata = {
  title: ui.work.sectionTitle,
  description: ui.meta.description,
}

export default function EnWorkPage() {
  const projects = getProjects(locale)

  return (
    <div className="px-6 py-28 md:px-12 md:py-36">
      <header className="mb-4">
        <p className="font-mono text-xs tracking-[0.2em] text-muted uppercase">
          Work
        </p>
        <h1 className="mt-2 font-display text-4xl tracking-tight md:text-6xl">
          {ui.work.sectionTitle}
        </h1>
        <p className="mt-4 max-w-xl text-base text-muted">
          List view for scanning; grid for visual rhythm. Detail pages use
          Challenge / What I did / System / Reflection.
        </p>
      </header>
      <WorkView locale={locale} ui={ui} projects={projects} />
    </div>
  )
}
