import { site } from "@/content/site"

export function ContactBand() {
  return (
    <section
      id="contact-band"
      className="bg-surface-dark px-6 py-24 text-ink-inverse md:px-12 md:py-32"
      aria-labelledby="contact-heading"
    >
      <p className="font-mono text-xs tracking-[0.2em] text-muted uppercase">
        Contact
      </p>
      <h2
        id="contact-heading"
        className="mt-4 font-display text-4xl tracking-tight md:text-6xl"
      >
        一起聊聊
      </h2>
      <p className="mt-4 max-w-xl text-lg text-white/70">
        推荐系统、智能投研与数据产品相关的实习 / 协作，欢迎邮件联系。
      </p>
      <div className="mt-10 flex flex-wrap gap-4">
        <a
          className="rounded-full bg-signal px-6 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90"
          href={`mailto:${site.email}`}
          data-cursor="view"
        >
          {site.email}
        </a>
        <a
          className="rounded-full border border-white/30 px-6 py-3 text-sm transition-colors hover:border-white/60"
          href={site.resumePdf}
          download
          data-cursor="pdf"
        >
          下载简历 PDF
        </a>
      </div>
    </section>
  )
}
