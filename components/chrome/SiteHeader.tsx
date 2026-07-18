"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import { site } from "@/content/site"
import { MenuDrawer } from "@/components/chrome/MenuDrawer"

export function SiteHeader() {
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

  return (
    <>
      <header className="pointer-events-none fixed inset-x-0 top-0 z-40">
        <div className="pointer-events-auto mx-auto flex max-w-[1440px] items-center justify-between px-6 py-5 md:px-12">
          <Link
            href="/"
            className="font-mono text-xs tracking-wide text-ink md:text-sm"
          >
            © Portfolio by {site.nameEn}
          </Link>

          <nav
            className={`hidden items-center gap-8 transition-opacity duration-300 md:flex ${
              scrolled ? "pointer-events-none opacity-0" : "opacity-100"
            }`}
            aria-label="主导航"
          >
            <Link
              href="/work"
              className="text-sm text-ink/80 transition-colors hover:text-ink"
            >
              Work
            </Link>
            <Link
              href="/about"
              className="text-sm text-ink/80 transition-colors hover:text-ink"
            >
              About
            </Link>
            <a
              href={site.resumePdf}
              download
              className="text-sm text-ink/80 transition-colors hover:text-ink"
              data-cursor="pdf"
            >
              Resume
            </a>
            <Link
              href="/contact"
              className="text-sm text-ink/80 transition-colors hover:text-ink"
            >
              Contact
            </Link>
          </nav>

          <button
            type="button"
            aria-label={menuOpen ? "关闭菜单" : "打开菜单"}
            aria-expanded={menuOpen}
            aria-controls="site-menu"
            onClick={() => setMenuOpen(true)}
            className={`flex size-12 items-center justify-center rounded-full bg-ink text-xs font-medium tracking-wide text-ink-inverse transition-all duration-300 md:size-14 ${
              scrolled || menuOpen
                ? "opacity-100"
                : "opacity-100 md:opacity-0 md:pointer-events-none"
            }`}
          >
            Menu
          </button>
        </div>
      </header>

      <MenuDrawer open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  )
}
