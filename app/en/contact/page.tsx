import type { Metadata } from "next"
import { getUi } from "@/content/i18n"

const locale = "en" as const
const ui = getUi(locale)

export const metadata: Metadata = {
  title: ui.contact.headline,
  description: ui.meta.description,
}

export default function EnContactPage() {
  return (
    <div className="px-6 py-28 md:px-12 md:py-36">
      <p className="font-mono text-xs tracking-[0.2em] text-muted uppercase">
        Contact
      </p>
      <h1 className="mt-4 font-display text-4xl tracking-tight md:text-6xl">
        {ui.contact.headline}
      </h1>
      <p className="mt-6 max-w-xl text-base leading-relaxed text-muted">
        This public site shows email only. For further conversation, write first
        or download the PDF.
      </p>
      <div className="mt-12 flex flex-col gap-4 sm:flex-row">
        <a
          className="inline-flex items-center justify-center rounded-full bg-signal px-6 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90"
          href={`mailto:${ui.email}`}
          data-cursor="view"
        >
          {ui.email}
        </a>
        <a
          className="inline-flex items-center justify-center rounded-full border border-line px-6 py-3 text-sm transition-colors hover:border-ink"
          href={ui.resumePdf}
          download
          data-cursor="pdf"
        >
          {ui.contact.ctaResume}
        </a>
      </div>
      <p className="mt-10 text-sm text-muted">{ui.city}</p>
    </div>
  )
}
