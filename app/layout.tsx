import type { Metadata } from "next"
import "./globals.css"
import { AppChrome } from "@/components/chrome/AppChrome"
import { CustomCursor } from "@/components/chrome/CustomCursor"
import { SmoothScroll } from "@/components/providers/SmoothScroll"
import { getUi } from "@/content/i18n"

const defaultUi = getUi("zh")

export const metadata: Metadata = {
  title: {
    default: defaultUi.meta.title,
    template: `%s · ${defaultUi.name}`,
  },
  description: defaultUi.meta.description,
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
          href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500&family=Noto+Sans+SC:wght@400;500;700&family=Syne:wght@500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="flex min-h-full flex-col bg-bg text-ink">
        <a className="skip-link" href="#main">
          跳到主要内容 / Skip to content
        </a>
        <SmoothScroll>
          <CustomCursor />
          <AppChrome>{children}</AppChrome>
        </SmoothScroll>
      </body>
    </html>
  )
}
