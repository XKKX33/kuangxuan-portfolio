import type { Metadata } from "next"
import { getAllProjects } from "@/lib/projects"
import { WorkView } from "@/components/work/WorkView"

export const metadata: Metadata = {
  title: "Work",
  description: "精选项目：推荐系统、AI Agent、数据工程",
}

export default function WorkPage() {
  const projects = getAllProjects()

  return (
    <div className="px-6 py-28 md:px-12 md:py-36">
      <header className="mb-4">
        <p className="font-mono text-xs tracking-[0.2em] text-muted uppercase">
          Work
        </p>
        <h1 className="mt-2 font-display text-4xl tracking-tight md:text-6xl">
          项目
        </h1>
        <p className="mt-4 max-w-xl text-base text-muted">
          List 视图便于快速扫描；Grid 视图强调视觉节奏。详情页采用 Challenge /
          Contribution / System / Reflection 叙事。
        </p>
      </header>
      <WorkView projects={projects} />
    </div>
  )
}
