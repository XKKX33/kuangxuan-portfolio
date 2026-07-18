"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"
import { getUi } from "@/content/i18n"
import { localeFromPathname } from "@/lib/i18n"
import { SiteHeader } from "@/components/chrome/SiteHeader"
import { ContactBand } from "@/components/chrome/ContactBand"

type AppChromeProps = {
  children: React.ReactNode
}

/**
 * Client chrome shell: derives locale from pathname so root layout
 * stays locale-agnostic under static export.
 */
export function AppChrome({ children }: AppChromeProps) {
  const pathname = usePathname() ?? "/"
  const locale = localeFromPathname(pathname)
  const ui = getUi(locale)

  useEffect(() => {
    document.documentElement.lang = locale === "en" ? "en" : "zh-CN"
  }, [locale])

  return (
    <>
      <SiteHeader locale={locale} ui={ui} />
      <main id="main" className="flex-1">
        {children}
      </main>
      <ContactBand locale={locale} ui={ui} />
    </>
  )
}
