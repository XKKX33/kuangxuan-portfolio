import Link from "next/link"
import type { UiCopy } from "@/content/i18n"
import type { Locale } from "@/lib/i18n"
import { localePath } from "@/lib/i18n"

type ProfileSnapshotProps = {
  locale: Locale
  ui: UiCopy
}

export function ProfileSnapshot({ locale, ui }: ProfileSnapshotProps) {
  const aboutCta = locale === "zh" ? "关于我 →" : "About me →"
  const label = locale === "zh" ? "简介" : "Profile"

  return (
    <section
      className="px-6 py-14 md:px-12 md:py-16"
      aria-labelledby="snapshot"
    >
      <p className="font-mono text-xs tracking-[0.2em] text-muted uppercase">
        {label}
      </p>
      <h2
        id="snapshot"
        className="mt-3 max-w-3xl font-display text-2xl leading-snug tracking-tight md:text-4xl"
      >
        {ui.identity.tagline}
      </h2>
      <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted">
        {ui.identity.support}
      </p>
      <div className="mt-6 flex flex-wrap gap-2">
        {[...ui.identity.schools, ui.city].map((chip) => (
          <span
            key={chip}
            className="rounded-full border border-line px-4 py-2 text-sm text-ink/80"
          >
            {chip}
          </span>
        ))}
      </div>
      <Link
        href={localePath(locale, "/about")}
        className="mt-8 inline-flex text-sm text-signal underline-offset-4 hover:underline"
        data-cursor="view"
      >
        {aboutCta}
      </Link>
    </section>
  )
}
