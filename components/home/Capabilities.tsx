import type { LocalizedAbout, UiCopy } from "@/content/i18n"
import type { Locale } from "@/lib/i18n"
import { Reveal } from "@/components/providers/Reveal"

type CapabilitiesProps = {
  locale: Locale
  ui: UiCopy
  about: LocalizedAbout
}

export function Capabilities({ locale, ui: _ui, about }: CapabilitiesProps) {
  void _ui
  const title = locale === "zh" ? "能力方向" : "Capabilities"
  const label = locale === "zh" ? "能力" : "Capabilities"

  return (
    <section
      className="px-6 py-14 md:px-12 md:py-16"
      aria-labelledby="capabilities"
    >
      <Reveal>
        <p className="font-mono text-xs tracking-[0.2em] text-muted uppercase">
          {label}
        </p>
        <h2
          id="capabilities"
          className="mt-2 font-display text-3xl tracking-tight md:text-5xl"
        >
          {title}
        </h2>
      </Reveal>
      <div className="mt-10 grid gap-8 md:grid-cols-3">
        {about.capabilities.map((cap, i) => (
          <Reveal key={cap.index} delay={i * 0.08}>
            <article className="border-t border-line pt-5">
              <p className="font-mono text-xs text-signal">{cap.index}</p>
              <h3 className="mt-3 font-display text-2xl tracking-tight">
                {cap.title}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-ink/75">
                {cap.body}
              </p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
