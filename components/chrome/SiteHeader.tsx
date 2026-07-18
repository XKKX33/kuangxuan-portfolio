"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import type { UiCopy } from "@/content/i18n"
import type { Locale } from "@/lib/i18n"
import { localePath } from "@/lib/i18n"
import { LanguageSwitch } from "@/components/chrome/LanguageSwitch"
import { MenuDrawer } from "@/components/chrome/MenuDrawer"

type SiteHeaderProps = {
  locale: Locale
  ui: UiCopy
}

export function SiteHeader({ locale, ui }: SiteHeaderProps) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [menuOpen])

  const navItems = ui.nav.filter((item) => item.href !== "/")
  const resumeLabel = locale === "zh" ? "简历" : "Resume"
  const menuLabel = locale === "zh" ? "菜单" : "Menu"
  const openLabel = locale === "zh" ? "打开菜单" : "Open menu"
  const closeLabel = locale === "zh" ? "关闭菜单" : "Close menu"
  const navAria = locale === "zh" ? "主导航" : "Primary navigation"

  return (
    <>
      <header className="pointer-events-none fixed inset-x-0 top-0 z-40">
        <div className="pointer-events-auto mx-auto flex max-w-[1440px] items-center justify-between px-6 py-5 md:px-12">
          <Link
            href={localePath(locale, "/")}
            className="font-mono text-xs tracking-wide text-ink md:text-sm"
          >
            {ui.navBrand}
          </Link>

          <div
            className={`hidden items-center gap-8 transition-opacity duration-300 md:flex ${
              scrolled ? "pointer-events-none opacity-0" : "opacity-100"
            }`}
          >
            <nav className="flex items-center gap-7" aria-label={navAria}>
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={localePath(locale, item.href)}
                  className="text-sm text-ink/80 transition-colors hover:text-ink"
                >
                  {item.label}
                </Link>
              ))}
              <a
                href={ui.resumePdf}
                download
                className="text-sm text-ink/80 transition-colors hover:text-ink"
                data-cursor="pdf"
              >
                {resumeLabel}
              </a>
            </nav>
            <LanguageSwitch locale={locale} />
          </div>

          <button
            type="button"
            aria-label={menuOpen ? closeLabel : openLabel}
            aria-expanded={menuOpen}
            aria-controls="site-menu"
            onClick={() => setMenuOpen(true)}
            className={`flex size-12 items-center justify-center rounded-full bg-ink text-xs font-medium tracking-wide text-ink-inverse transition-all duration-300 md:size-14 ${
              scrolled || menuOpen
                ? "opacity-100"
                : "opacity-100 md:pointer-events-none md:opacity-0"
            }`}
          >
            {menuLabel}
          </button>
        </div>
      </header>

      <MenuDrawer
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
        locale={locale}
        ui={ui}
      />
    </>
  )
}
