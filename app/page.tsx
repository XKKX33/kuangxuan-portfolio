import { Loader } from "@/components/chrome/Loader"
import { Hero } from "@/components/home/Hero"
import { Marquee } from "@/components/home/Marquee"
import { SelectedWork } from "@/components/home/SelectedWork"
import { ProfileSnapshot } from "@/components/home/ProfileSnapshot"
import { ExperienceTimeline } from "@/components/home/ExperienceTimeline"
import { Capabilities } from "@/components/home/Capabilities"

export default function HomePage() {
  return (
    <>
      <Loader />
      <Hero />
      <Marquee />
      <SelectedWork />
      <ProfileSnapshot />
      <ExperienceTimeline />
      <Capabilities />
    </>
  )
}
