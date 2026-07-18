import { getAllProjects } from "@/lib/projects"

export function ExperienceTimeline() {
  const projects = getAllProjects()

  return (
    <section className="px-6 py-20 md:px-12 md:py-28" aria-labelledby="experience">
      <p className="font-mono text-xs tracking-[0.2em] text-muted uppercase">
        Experience
      </p>
      <h2
        id="experience"
        className="mt-2 font-display text-3xl tracking-tight md:text-5xl"
      >
        经历时间轴
      </h2>
      <ol className="mt-12 border-t border-line">
        {projects.map((p) => (
          <li
            key={p.slug}
            className="grid grid-cols-1 gap-2 border-b border-line py-6 md:grid-cols-[10rem_1fr_8rem] md:items-baseline md:gap-8"
          >
            <span className="font-mono text-xs text-muted">{p.period}</span>
            <div>
              <p className="font-display text-xl tracking-tight">{p.title}</p>
              <p className="mt-1 text-sm text-muted">{p.field}</p>
            </div>
            <span className="font-mono text-xs text-muted md:text-right">
              {p.role}
            </span>
          </li>
        ))}
      </ol>
    </section>
  )
}
