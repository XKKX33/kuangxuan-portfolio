import Link from "next/link"
import type { LocalizedProject, UiCopy } from "@/content/i18n"
import { getProjectHref } from "@/content/i18n"
import type { Locale } from "@/lib/i18n"
import { SystemDiagram } from "@/components/work/SystemDiagram"

type ProjectDetailProps = {
  locale: Locale
  ui: UiCopy
  project: LocalizedProject
  next?: LocalizedProject
}

export function ProjectDetail({
  locale,
  ui,
  project,
  next,
}: ProjectDetailProps) {
  const metaLabels =
    locale === "zh"
      ? { role: "角色", focus: "重点", model: "模型", year: "年份" }
      : { role: "Role", focus: "Focus", model: "Model", year: "Year" }

  const metaItems = [
    { label: metaLabels.role, value: project.meta.role },
    { label: metaLabels.focus, value: project.meta.focus },
    { label: metaLabels.model, value: project.meta.model },
    { label: metaLabels.year, value: project.meta.year },
  ]

  return (
    <article className="px-6 py-28 md:px-12 md:py-36">
      <p className="font-mono text-xs tracking-[0.2em] text-muted uppercase">
        {project.field}
      </p>
      <h1 className="mt-4 font-display text-4xl tracking-tight md:text-6xl">
        {project.title}
      </h1>
      <p className="mt-3 max-w-2xl text-lg text-muted">{project.summary}</p>

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
          {ui.detail.challenge}
        </h2>
        <p className="mt-4 text-base leading-relaxed text-ink/80">
          {project.challenge}
        </p>
      </section>

      <section className="mt-16 max-w-3xl">
        <p className="font-mono text-xs text-signal">02</p>
        <h2 className="mt-2 font-display text-2xl tracking-tight md:text-3xl">
          {ui.detail.contribution}
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
          {ui.detail.system}
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
          {ui.detail.reflection}
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
            {ui.work.nextProject}
          </p>
          <Link
            href={getProjectHref(locale, next)}
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
