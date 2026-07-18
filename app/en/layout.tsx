import type { Metadata } from "next"
import { getUi } from "@/content/i18n"

const ui = getUi("en")

export const metadata: Metadata = {
  title: {
    default: ui.meta.title,
    template: `%s · ${ui.name}`,
  },
  description: ui.meta.description,
}

export default function EnLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return children
}
