import type { UiCopy } from "@/content/i18n"

type MarqueeProps = {
  ui: UiCopy
}

export function Marquee({ ui }: MarqueeProps) {
  const items = [...ui.marquee, ...ui.marquee]
  const line = items.join("  —  ")

  return (
    <section
      className="overflow-hidden border-y border-line py-5"
      aria-label="keywords"
    >
      <div className="marquee-track flex w-max gap-0 whitespace-nowrap">
        <p className="px-4 font-display text-2xl tracking-tight text-ink md:text-4xl">
          {line}
        </p>
        <p
          className="px-4 font-display text-2xl tracking-tight text-ink md:text-4xl"
          aria-hidden
        >
          {line}
        </p>
      </div>
    </section>
  )
}
