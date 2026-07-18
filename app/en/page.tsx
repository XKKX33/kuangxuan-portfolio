import type { Metadata } from "next"
import { getUi } from "@/content/i18n"
import { HomePage } from "@/components/home/HomePage"

const locale = "en" as const
const ui = getUi(locale)

export const metadata: Metadata = {
  title: ui.meta.title,
  description: ui.meta.description,
}

export default function EnHomePage() {
  return <HomePage locale={locale} />
}
