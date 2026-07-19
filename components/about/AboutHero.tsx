import type { LocalizedAbout, UiCopy } from "@/content/i18n"
import type { Locale } from "@/lib/i18n"

type AboutHeroProps = {
  locale: Locale
  ui: UiCopy
  about: LocalizedAbout
}

export function AboutHero({ locale, ui, about }: AboutHeroProps) {
  return (
    <section className="grid gap-12 px-6 py-28 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] md:items-end md:px-12 md:py-36">
      <div
        className="relative aspect-[4/5] overflow-hidden rounded-sm border border-line/70 shadow-[0_12px_40px_rgba(37,99,235,0.08)]"
        aria-label={about.photoAlt}
      >
        {/* Pastel Tech cool paper gradient */}
        <div className="gradient-paper absolute inset-0" aria-hidden />
        <div className="absolute inset-6 border border-ink/10" aria-hidden />
        <p className="absolute bottom-6 left-6 font-mono text-xs tracking-[0.2em] text-ink/50 uppercase">
          {locale === "zh" ? "照片占位" : "Portrait placeholder"}
        </p>
      </div>
      <div>
        <p className="font-mono text-xs tracking-[0.2em] text-muted uppercase">
          {ui.about.sectionTitle}
        </p>
        <h1 className="mt-4 whitespace-pre-line font-display text-4xl leading-[1.05] tracking-tight md:text-6xl">
          {about.headline}
        </h1>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-muted">
          {ui.identity.support}
        </p>
        <p className="mt-4 font-mono text-sm text-ink/70">{ui.name}</p>
      </div>
    </section>
  )
}
