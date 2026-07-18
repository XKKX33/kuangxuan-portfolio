import type { Metadata } from "next"
import { notFound } from "next/navigation"
import {
  getDetailProjects,
  getNextProject,
  getProjectBySlug,
  getUi,
} from "@/content/i18n"
import { ProjectDetail } from "@/components/work/ProjectDetail"

const locale = "en" as const

type PageProps = {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return getDetailProjects(locale).map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params
  const project = getProjectBySlug(locale, slug)
  if (!project || !project.hasDetail) {
    return { title: getUi(locale).work.sectionTitle }
  }
  return {
    title: project.title,
    description: project.summary,
  }
}

export default async function EnProjectPage({ params }: PageProps) {
  const { slug } = await params
  const project = getProjectBySlug(locale, slug)

  if (!project || !project.hasDetail) {
    notFound()
  }

  const next = getNextProject(locale, project.slug)
  const ui = getUi(locale)

  return (
    <ProjectDetail locale={locale} ui={ui} project={project} next={next} />
  )
}
