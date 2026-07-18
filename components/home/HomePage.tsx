import {
  getAbout,
  getFeaturedProjects,
  getProjects,
  getUi,
} from "@/content/i18n"
import type { Locale } from "@/lib/i18n"
import { Loader } from "@/components/chrome/Loader"
import { Hero } from "@/components/home/Hero"
import { Marquee } from "@/components/home/Marquee"
import { SelectedWork } from "@/components/home/SelectedWork"
import { ProfileSnapshot } from "@/components/home/ProfileSnapshot"
import { ExperienceTimeline } from "@/components/home/ExperienceTimeline"
import { Capabilities } from "@/components/home/Capabilities"

type HomePageProps = {
  locale: Locale
}

export function HomePage({ locale }: HomePageProps) {
  const ui = getUi(locale)
  const featured = getFeaturedProjects(locale)
  const projects = getProjects(locale)
  const about = getAbout(locale)

  return (
    <>
      <Loader ui={ui} />
      <Hero locale={locale} ui={ui} />
      <Marquee ui={ui} />
      <SelectedWork locale={locale} ui={ui} projects={featured} />
      <ProfileSnapshot locale={locale} ui={ui} />
      <ExperienceTimeline locale={locale} ui={ui} projects={projects} />
      <Capabilities locale={locale} ui={ui} about={about} />
    </>
  )
}
