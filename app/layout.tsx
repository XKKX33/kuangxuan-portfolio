import type { Metadata } from "next"
import "./globals.css"
import { SiteHeader } from "@/components/chrome/SiteHeader"
import { ContactBand } from "@/components/chrome/ContactBand"
import { CustomCursor } from "@/components/chrome/CustomCursor"
import { SmoothScroll } from "@/components/providers/SmoothScroll"
import { site } from "@/content/site"

export const metadata: Metadata = {
  title: {
    default: `${site.nameEn} · Portfolio`,
    template: `%s · ${site.nameEn}`,
  },
  description: site.identity.cn,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="zh-CN" className="h-full antialiased">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&family=Manrope:wght@500;600;700&family=Noto+Sans+SC:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col bg-bg text-ink">
        <a className="skip-link" href="#main">
          跳到主要内容
        </a>
        <SmoothScroll>
          <CustomCursor />
          <SiteHeader />
          <main id="main" className="flex-1">
            {children}
          </main>
          <ContactBand />
        </SmoothScroll>
      </body>
    </html>
  )
}
