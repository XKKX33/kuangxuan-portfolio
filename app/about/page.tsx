import type { Metadata } from "next"
import { AboutHero } from "@/components/about/AboutHero"
import { EducationList } from "@/components/about/EducationList"
import { SkillChips } from "@/components/about/SkillChips"
import { Capabilities } from "@/components/home/Capabilities"

export const metadata: Metadata = {
  title: "About",
  description: "关于匡璇：推荐系统、智能决策与数据产品",
}

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <Capabilities />
      <EducationList />
      <SkillChips />
    </>
  )
}
