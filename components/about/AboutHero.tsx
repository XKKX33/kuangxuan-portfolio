import { about } from "@/content/about"
import { site } from "@/content/site"

export function AboutHero() {
  return (
    <section className="grid gap-12 px-6 py-28 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] md:items-end md:px-12 md:py-36">
      <div
        className="relative aspect-[4/5] overflow-hidden rounded-sm bg-line"
        aria-label={about.photoAlt}
      >
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(160deg, #d9d6cf 0%, #f2f0ec 45%, #315cff22 100%)",
          }}
        />
        <div className="absolute inset-6 border border-ink/10" aria-hidden />
        <p className="absolute bottom-6 left-6 font-mono text-xs tracking-[0.2em] text-ink/50 uppercase">
          Portrait placeholder
        </p>
      </div>
      <div>
        <p className="font-mono text-xs tracking-[0.2em] text-muted uppercase">
          About
        </p>
        <h1 className="mt-4 whitespace-pre-line font-display text-4xl leading-[1.05] tracking-tight md:text-6xl">
          {about.headlineEn}
        </h1>
        <p className="mt-6 text-lg text-ink/80">{about.headline}</p>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-muted">
          {site.identity.cnSupport}
        </p>
      </div>
    </section>
  )
}
