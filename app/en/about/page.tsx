import type { Metadata } from "next"
import { getAbout, getUi } from "@/content/i18n"
import { AboutHero } from "@/components/about/AboutHero"
import { EducationList } from "@/components/about/EducationList"
import { SkillChips } from "@/components/about/SkillChips"
import { Capabilities } from "@/components/home/Capabilities"

const locale = "en" as const
const ui = getUi(locale)
const about = getAbout(locale)

export const metadata: Metadata = {
  title: ui.about.sectionTitle,
  description: ui.meta.description,
}

export default function EnAboutPage() {
  return (
    <>
      <AboutHero locale={locale} ui={ui} about={about} />
      <Capabilities locale={locale} ui={ui} about={about} />
      <EducationList locale={locale} ui={ui} about={about} />
      <SkillChips ui={ui} about={about} />
    </>
  )
}
