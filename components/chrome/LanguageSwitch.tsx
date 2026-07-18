"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { getUi } from "@/content/i18n"
import {
  localeFromPathname,
  switchLocalePath,
  type Locale,
} from "@/lib/i18n"

type LanguageSwitchProps = {
  /** When set, skips pathname detection (still uses pathname for target href). */
  locale?: Locale
  className?: string
  /** Light text on dark surfaces (menu drawer). */
  tone?: "ink" | "inverse"
}

export function LanguageSwitch({
  locale: localeProp,
  className = "",
  tone = "ink",
}: LanguageSwitchProps) {
  const pathname = usePathname() ?? "/"
  const locale = localeProp ?? localeFromPathname(pathname)
  const ui = getUi(locale)
  const zhHref = switchLocalePath(pathname, "zh")
  const enHref = switchLocalePath(pathname, "en")

  const base =
    tone === "inverse"
      ? "text-white/55 hover:text-white"
      : "text-ink/45 hover:text-ink"
  const active =
    tone === "inverse" ? "text-white" : "text-ink"

  return (
    <nav
      className={`inline-flex items-center gap-1.5 font-mono text-xs tracking-wide ${className}`}
      aria-label={ui.language.switchAria}
    >
      <Link
        href={zhHref}
        className={locale === "zh" ? active : base}
        aria-current={locale === "zh" ? "true" : undefined}
      >
        {ui.language.zhLabel}
      </Link>
      <span className={tone === "inverse" ? "text-white/30" : "text-ink/25"} aria-hidden>
        |
      </span>
      <Link
        href={enHref}
        className={locale === "en" ? active : base}
        aria-current={locale === "en" ? "true" : undefined}
      >
        {ui.language.enLabel}
      </Link>
    </nav>
  )
}
