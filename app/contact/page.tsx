import type { Metadata } from "next"
import { site } from "@/content/site"

export const metadata: Metadata = {
  title: "Contact",
  description: "联系匡璇",
}

export default function ContactPage() {
  return (
    <div className="px-6 py-28 md:px-12 md:py-36">
      <p className="font-mono text-xs tracking-[0.2em] text-muted uppercase">
        Contact
      </p>
      <h1 className="mt-4 font-display text-4xl tracking-tight md:text-6xl">
        取得联系
      </h1>
      <p className="mt-6 max-w-xl text-base leading-relaxed text-muted">
        公开站点仅展示邮箱。如需电话，请通过邮件沟通后另行提供，或查看下载版
        PDF。
      </p>
      <div className="mt-12 flex flex-col gap-4 sm:flex-row">
        <a
          className="inline-flex items-center justify-center rounded-full bg-signal px-6 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90"
          href={`mailto:${site.email}`}
          data-cursor="view"
        >
          {site.email}
        </a>
        <a
          className="inline-flex items-center justify-center rounded-full border border-line px-6 py-3 text-sm transition-colors hover:border-ink"
          href={site.resumePdf}
          download
          data-cursor="pdf"
        >
          下载简历 PDF
        </a>
      </div>
      <p className="mt-10 text-sm text-muted">{site.city}</p>
    </div>
  )
}
