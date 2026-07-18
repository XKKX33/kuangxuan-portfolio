import { site } from "@/content/site"

export function Marquee() {
  const items = [
    ...site.marquee,
    ...site.marqueeCn,
    ...site.marquee,
    ...site.marqueeCn,
  ]
  const line = items.join("  —  ")

  return (
    <section
      className="border-y border-line py-6 overflow-hidden"
      aria-label="领域关键词"
    >
      <div className="marquee-track flex w-max gap-0 whitespace-nowrap">
        <p className="px-4 font-display text-3xl tracking-tight text-ink md:text-5xl">
          {line}
        </p>
        <p
          className="px-4 font-display text-3xl tracking-tight text-ink md:text-5xl"
          aria-hidden
        >
          {line}
        </p>
      </div>
    </section>
  )
}
