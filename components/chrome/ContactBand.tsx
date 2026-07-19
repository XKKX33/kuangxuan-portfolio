import type { UiCopy } from "@/content/i18n"
import type { Locale } from "@/lib/i18n"

type ContactBandProps = {
  locale: Locale
  ui: UiCopy
}

export function ContactBand({ locale, ui }: ContactBandProps) {
  const support =
    locale === "zh"
      ? "推荐系统、智能投研与数据产品相关的实习 / 协作，欢迎邮件联系。"
      : "Internships and collaborations in recommendation, research agents, and data products — email welcome."

  return (
    <section
      id="contact-band"
      className="border-t border-line bg-surface-dark px-6 py-16 text-ink-inverse md:px-12 md:py-24"
      aria-labelledby="contact-heading"
    >
      <p className="font-mono text-xs tracking-[0.18em] text-white/45 uppercase">
        Contact
      </p>
      <h2
        id="contact-heading"
        className="mt-4 font-display text-4xl font-normal tracking-tight md:text-5xl"
      >
        {ui.contact.headline}
      </h2>
      <p className="mt-4 max-w-xl text-base leading-relaxed text-white/65 md:text-lg">
        {support}
      </p>
      <div className="mt-10 flex flex-wrap gap-3">
        <a
          className="rounded-full bg-signal px-6 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90"
          href={`mailto:${ui.email}`}
          data-cursor="view"
        >
          {ui.email}
        </a>
        <a
          className="rounded-full border border-white/25 bg-white px-6 py-3 text-sm font-medium text-ink transition-opacity hover:opacity-90"
          href={ui.resumePdf}
          download
          data-cursor="pdf"
        >
          {ui.contact.ctaResume}
        </a>
      </div>
    </section>
  )
}
