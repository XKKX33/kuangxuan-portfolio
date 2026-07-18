"use client"

import Link from "next/link"
import { useEffect, useRef } from "react"
import type { UiCopy } from "@/content/i18n"
import type { Locale } from "@/lib/i18n"
import { localePath } from "@/lib/i18n"
import { LanguageSwitch } from "@/components/chrome/LanguageSwitch"

type MenuDrawerProps = {
  open: boolean
  onClose: () => void
  locale: Locale
  ui: UiCopy
}

export function MenuDrawer({ open, onClose, locale, ui }: MenuDrawerProps) {
  const firstLinkRef = useRef<HTMLAnchorElement>(null)
  const navLabel = locale === "zh" ? "导航" : "Navigation"
  const closeLabel = locale === "zh" ? "关闭" : "Close"
  const menuAria = locale === "zh" ? "站点菜单" : "Site menu"
  const drawerAria = locale === "zh" ? "抽屉导航" : "Drawer navigation"

  useEffect(() => {
    if (!open) return
    firstLinkRef.current?.focus()

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [open, onClose])

  return (
    <>
      <div
        className={`fixed inset-0 z-50 bg-ink/40 transition-opacity duration-300 ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        aria-hidden={!open}
        onClick={onClose}
      />
      <aside
        id="site-menu"
        role="dialog"
        aria-modal="true"
        aria-label={menuAria}
        className={`fixed inset-y-0 right-0 z-50 flex w-full max-w-md flex-col bg-surface-dark px-8 py-10 text-ink-inverse transition-transform duration-500 ease-out ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="mb-12 flex items-center justify-between">
          <p className="font-mono text-xs tracking-[0.2em] text-muted uppercase">
            {navLabel}
          </p>
          <button
            type="button"
            onClick={onClose}
            className="rounded-full border border-white/20 px-4 py-2 text-sm"
          >
            {closeLabel}
          </button>
        </div>

        <nav aria-label={drawerAria}>
          <ul className="space-y-6">
            {ui.nav.map((item, i) => (
              <li key={item.href}>
                <Link
                  ref={i === 0 ? firstLinkRef : undefined}
                  href={localePath(locale, item.href)}
                  onClick={onClose}
                  className="group flex items-baseline gap-4"
                >
                  <span className="font-mono text-sm text-muted">
                    {item.index}
                  </span>
                  <span className="font-display text-4xl tracking-tight transition-colors group-hover:text-signal md:text-5xl">
                    {item.label}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="mt-10">
          <LanguageSwitch locale={locale} tone="inverse" />
        </div>

        <div className="mt-auto space-y-3 pt-12">
          <a
            href={ui.resumePdf}
            download
            className="block text-sm text-white/70 underline-offset-4 hover:text-white hover:underline"
            data-cursor="pdf"
          >
            {ui.hero.ctaResume}
          </a>
          <a
            href={`mailto:${ui.email}`}
            className="block text-sm text-white/70 hover:text-white"
          >
            {ui.email}
          </a>
        </div>
      </aside>
    </>
  )
}
