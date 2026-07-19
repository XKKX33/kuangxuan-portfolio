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
