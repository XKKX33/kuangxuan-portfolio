import { about } from "@/content/about"

export function EducationList() {
  return (
    <section className="px-6 py-20 md:px-12 md:py-28" aria-labelledby="education">
      <p className="font-mono text-xs tracking-[0.2em] text-muted uppercase">
        Education
      </p>
      <h2
        id="education"
        className="mt-2 font-display text-3xl tracking-tight md:text-5xl"
      >
        教育经历
      </h2>
      <ol className="mt-12 space-y-10 border-t border-line pt-10">
        {about.education.map((ed) => (
          <li
            key={`${ed.school}-${ed.period}`}
            className="grid gap-4 md:grid-cols-[10rem_1fr]"
          >
            <p className="font-mono text-xs text-muted">{ed.period}</p>
            <div>
              <p className="font-display text-2xl tracking-tight">
                {ed.school}
              </p>
              <p className="mt-1 text-sm text-ink/80">
                {ed.college} · {ed.degree} · {ed.major}
              </p>
              {ed.courses.length > 0 ? (
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  课程：{ed.courses.join("、")}
                </p>
              ) : null}
              {ed.honors.length > 0 ? (
                <ul className="mt-3 space-y-1 text-sm text-ink/75">
                  {ed.honors.map((h) => (
                    <li key={h}>· {h}</li>
                  ))}
                </ul>
              ) : null}
            </div>
          </li>
        ))}
      </ol>
    </section>
  )
}
