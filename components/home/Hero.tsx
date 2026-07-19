import Link from "next/link"
import type { UiCopy } from "@/content/i18n"
import type { Locale } from "@/lib/i18n"
import { localePath } from "@/lib/i18n"
import { SignalCurve } from "@/components/home/SignalCurve"

type HeroProps = {
  locale: Locale
  ui: UiCopy
}

export function Hero({ locale, ui }: HeroProps) {
  const scrollHint = locale === "zh" ? "向下浏览" : "Scroll to explore"

  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-bg px-6 pt-28 pb-14 md:px-12 md:pt-32 md:pb-16">
      <div
        className="gradient-paper-soft pointer-events-none absolute inset-0 opacity-100"
        aria-hidden
      />

      <div className="relative z-10">
        <p className="mb-5 font-mono text-xs tracking-[0.2em] text-muted uppercase">
          2026 Portfolio
        </p>

        <h1 className="font-display text-[clamp(3.5rem,12vw,8.5rem)] font-normal leading-[0.92] tracking-tight text-ink">
          {ui.name}
        </h1>

        <p className="mt-5 font-display text-lg tracking-tight text-ink/85 md:text-2xl">
          {ui.identity.roleLine}
        </p>

        <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink/80 md:text-lg">
          {ui.identity.tagline}
        </p>
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted md:text-base">
          {ui.identity.support}
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {[...ui.identity.schools, ui.city].map((chip) => (
            <span
              key={chip}
              className="rounded-full border border-line bg-surface px-3.5 py-1.5 text-xs text-ink/80 md:text-sm"
            >
              {chip}
            </span>
          ))}
        </div>

        <div className="relative z-10 mt-10 flex flex-wrap gap-3">
          <a
            href={ui.resumePdf}
            download
            className="inline-flex items-center rounded-full bg-signal px-5 py-2.5 text-sm font-medium text-white transition-opacity hover:opacity-90"
            data-cursor="pdf"
          >
            {ui.hero.ctaResume}
          </a>
          <a
            href={`mailto:${ui.email}`}
            className="inline-flex items-center rounded-full border border-line bg-bg px-5 py-2.5 text-sm text-ink transition-colors hover:border-ink"
            data-cursor="view"
          >
            {ui.hero.ctaEmail}
          </a>
          <Link
            href={localePath(locale, "/about")}
            className="inline-flex items-center rounded-full border border-transparent px-5 py-2.5 text-sm text-signal underline-offset-4 hover:underline"
            data-cursor="view"
          >
            {ui.hero.ctaMore}
          </Link>
        </div>
      </div>

      <SignalCurve />

      <p className="relative z-10 mt-16 font-mono text-xs tracking-[0.2em] text-muted uppercase md:mt-20">
        {scrollHint}
      </p>
    </section>
  )
}
