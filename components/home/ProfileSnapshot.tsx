import Link from "next/link"
import { site } from "@/content/site"

export function ProfileSnapshot() {
  return (
    <section className="px-6 py-20 md:px-12 md:py-28" aria-labelledby="snapshot">
      <p className="font-mono text-xs tracking-[0.2em] text-muted uppercase">
        Profile
      </p>
      <h2
        id="snapshot"
        className="mt-4 max-w-3xl font-display text-2xl leading-snug tracking-tight md:text-4xl"
      >
        {site.identity.cn}
      </h2>
      <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted">
        {site.identity.cnSupport}
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        {["厦门大学", "应用统计", site.city].map((chip) => (
          <span
            key={chip}
            className="rounded-full border border-line px-4 py-2 text-sm text-ink/80"
          >
            {chip}
          </span>
        ))}
      </div>
      <Link
        href="/about"
        className="mt-10 inline-flex text-sm text-signal underline-offset-4 hover:underline"
        data-cursor="view"
      >
        关于我 →
      </Link>
    </section>
  )
}
