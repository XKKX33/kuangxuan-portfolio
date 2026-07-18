import Link from "next/link"
import type { Project } from "@/lib/types"
import { SystemDiagram } from "@/components/work/SystemDiagram"
import { getProjectHref } from "@/lib/projects"

type ProjectDetailProps = {
  project: Project
  next?: Project
}

export function ProjectDetail({ project, next }: ProjectDetailProps) {
  const metaItems = [
    { label: "Role", value: project.meta.role },
    { label: "Focus", value: project.meta.focus },
    { label: "Model", value: project.meta.model },
    { label: "Year", value: project.meta.year },
  ]

  return (
    <article className="px-6 py-28 md:px-12 md:py-36">
      <p className="font-mono text-xs tracking-[0.2em] text-muted uppercase">
        {project.field}
      </p>
      <h1 className="mt-4 font-display text-4xl tracking-tight md:text-6xl">
        {project.title}
      </h1>
      <p className="mt-3 text-lg text-muted">{project.titleCn}</p>

      <dl className="mt-12 grid grid-cols-2 gap-6 border-y border-line py-8 md:grid-cols-4">
        {metaItems.map((item) => (
          <div key={item.label}>
            <dt className="font-mono text-[11px] tracking-wide text-muted uppercase">
              {item.label}
            </dt>
            <dd className="mt-2 text-sm text-ink md:text-base">{item.value}</dd>
          </div>
        ))}
      </dl>

      <section className="mt-16 max-w-3xl">
        <p className="font-mono text-xs text-signal">01</p>
        <h2 className="mt-2 font-display text-2xl tracking-tight md:text-3xl">
          Challenge
        </h2>
        <p className="mt-4 text-base leading-relaxed text-ink/80">
          {project.challenge}
        </p>
      </section>

      <section className="mt-16 max-w-3xl">
        <p className="font-mono text-xs text-signal">02</p>
        <h2 className="mt-2 font-display text-2xl tracking-tight md:text-3xl">
          My Contribution
        </h2>
        <ul className="mt-4 list-disc space-y-3 pl-5 text-base leading-relaxed text-ink/80">
          {project.contribution.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="mt-16">
        <p className="font-mono text-xs text-signal">03</p>
        <h2 className="mt-2 font-display text-2xl tracking-tight md:text-3xl">
          System
        </h2>
        <div className="mt-6">
          <SystemDiagram
            nodes={project.system.nodes}
            result={project.system.result}
          />
        </div>
      </section>

      <section className="mt-16 max-w-3xl">
        <p className="font-mono text-xs text-signal">04</p>
        <h2 className="mt-2 font-display text-2xl tracking-tight md:text-3xl">
          Reflection
        </h2>
        <ul className="mt-4 list-disc space-y-3 pl-5 text-base leading-relaxed text-ink/80">
          {project.reflection.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      {next ? (
        <div className="mt-24 border-t border-line pt-10">
          <p className="font-mono text-xs tracking-[0.2em] text-muted uppercase">
            Next Project
          </p>
          <Link
            href={getProjectHref(next)}
            className="mt-3 inline-flex items-baseline gap-3 font-display text-3xl tracking-tight transition-colors hover:text-signal md:text-4xl"
            data-cursor="view"
          >
            {next.title}
            <span aria-hidden>→</span>
          </Link>
        </div>
      ) : null}
    </article>
  )
}
