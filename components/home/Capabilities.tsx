import { about } from "@/content/about"
import { Reveal } from "@/components/providers/Reveal"

export function Capabilities() {
  return (
    <section className="px-6 py-20 md:px-12 md:py-28" aria-labelledby="capabilities">
      <Reveal>
        <p className="font-mono text-xs tracking-[0.2em] text-muted uppercase">
          Capabilities
        </p>
        <h2
          id="capabilities"
          className="mt-2 font-display text-3xl tracking-tight md:text-5xl"
        >
          能力方向
        </h2>
      </Reveal>
      <div className="mt-12 grid gap-8 md:grid-cols-3">
        {about.capabilities.map((cap, i) => (
          <Reveal key={cap.index} delay={i * 0.08}>
            <article className="border-t border-line pt-6">
              <p className="font-mono text-xs text-signal">{cap.index}</p>
              <h3 className="mt-3 font-display text-2xl tracking-tight">
                {cap.title}
              </h3>
              <p className="mt-1 font-mono text-xs tracking-wide text-muted uppercase">
                {cap.titleEn}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-ink/75">{cap.body}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
