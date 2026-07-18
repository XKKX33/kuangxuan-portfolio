import type { UiCopy } from "@/content/i18n"

type MarqueeProps = {
  ui: UiCopy
}

const MARQUEE_SEQUENCE = [
  "推荐系统",
  "智能决策",
  "数据治理",
  "统计建模",
  "RECOMMENDATION SYSTEMS",
  "AI AGENTS",
  "DATA INTELLIGENCE",
  "STATISTICAL MODELING",
] as const

export function Marquee({ ui: _ui }: MarqueeProps) {
  const line = MARQUEE_SEQUENCE.join("  —  ")

  return (
    <section
      className="overflow-hidden border-y border-line py-6 md:py-8"
      aria-label="keywords"
    >
      <div className="marquee-track flex w-max gap-0 whitespace-nowrap">
        <p className="px-6 font-display text-3xl tracking-tight text-ink md:text-5xl md:tracking-tighter">
          {line}
          <span className="px-6" aria-hidden>
            —
          </span>
        </p>
        <p
          className="px-6 font-display text-3xl tracking-tight text-ink md:text-5xl md:tracking-tighter"
          aria-hidden
        >
          {line}
          <span className="px-6" aria-hidden>
            —
          </span>
        </p>
      </div>
    </section>
  )
}
