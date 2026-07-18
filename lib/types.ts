export type NavItem = {
  href: string
  label: string
  index: string
}

export type SiteContent = {
  name: string
  nameEn: string
  city: string
  email: string
  identity: {
    cn: string
    cnSupport: string
    en: string
    heroTitle: string
    heroSubtitle: string
  }
  nav: NavItem[]
  marquee: string[]
  marqueeCn: string[]
  loaderWords: string[]
  loaderFinal: string
  resumePdf: string
  socials: {
    github?: string
    linkedin?: string
  }
}

export type ProjectMeta = {
  role: string
  focus: string
  model: string
  year: string
}

export type Project = {
  slug: string
  title: string
  titleCn: string
  field: string
  role: string
  year: string
  period: string
  summary: string
  tags: string[]
  featured: boolean
  hasDetail: boolean
  meta: ProjectMeta
  challenge: string
  contribution: string[]
  system: {
    nodes: string[]
    result: string
  }
  reflection: string[]
  visuals: {
    accent: string
    label: string
  }
}

export type Education = {
  school: string
  college: string
  degree: string
  major: string
  period: string
  courses: string[]
  honors: string[]
}

export type Capability = {
  index: string
  title: string
  titleEn: string
  body: string
}

export type AboutContent = {
  headline: string
  headlineEn: string
  photoAlt: string
  education: Education[]
  capabilities: Capability[]
  skills: string[]
  researchInterests: string[]
}
