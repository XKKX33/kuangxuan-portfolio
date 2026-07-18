import type { Metadata } from "next"
import { notFound } from "next/navigation"
import {
  getDetailProjects,
  getNextProject,
  getProjectBySlug,
} from "@/lib/projects"
import { ProjectDetail } from "@/components/work/ProjectDetail"

type PageProps = {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return getDetailProjects().map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params
  const project = getProjectBySlug(slug)
  if (!project || !project.hasDetail) {
    return { title: "Project" }
  }
  return {
    title: project.title,
    description: project.summary,
  }
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params
  const project = getProjectBySlug(slug)

  if (!project || !project.hasDetail) {
    notFound()
  }

  const next = getNextProject(project.slug)

  return <ProjectDetail project={project} next={next} />
}
