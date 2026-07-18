/**
 * Bilingual content types for UI chrome, projects, and about pages.
 * One fully-localized object per locale — no mixed title/titleCn fields.
 */

export type UiNavItem = {
  /** Locale-neutral path, e.g. `/work` (prefix via localePath). */
  href: string
  label: string
  index: string
}

export type UiCopy = {
  name: string
  city: string
  email: string
  identity: {
    /** One-line positioning statement. */
    tagline: string
    /** Supporting line under tagline. */
    support: string
    /** Short role chips line, e.g. 推荐系统 · 智能决策 · 数据产品 */
    roleLine: string
    /** School / city chips shown in hero. */
    schools: string[]
  }
  hero: {
    ctaResume: string
    ctaEmail: string
    ctaMore: string
  }
  /** Left brand mark in header, e.g. `© 作品集 · 匡璇` */
  navBrand: string
  nav: UiNavItem[]
  marquee: string[]
  loaderWords: string[]
  loaderFinal: string
  /** Already passed through withBasePath("/resume.pdf"). */
  resumePdf: string
  language: {
    zhLabel: string
    enLabel: string
    switchAria: string
  }
  work: {
    sectionTitle: string
    viewAll: string
    nextProject: string
    columns: {
      project: string
      field: string
      role: string
      year: string
    }
  }
  about: {
    sectionTitle: string
    educationTitle: string
    skillsTitle: string
    researchTitle: string
  }
  contact: {
    headline: string
    ctaEmail: string
    ctaResume: string
  }
  detail: {
    challenge: string
    contribution: string
    system: string
    reflection: string
  }
  meta: {
    title: string
    description: string
  }
  socials: {
    github?: string
    linkedin?: string
  }
}

export type LocalizedProjectMeta = {
  role: string
  focus: string
  model: string
  year: string
}

export type LocalizedProject = {
  slug: string
  title: string
  field: string
  role: string
  year: string
  period: string
  summary: string
  tags: string[]
  featured: boolean
  hasDetail: boolean
  meta: LocalizedProjectMeta
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

export type LocalizedEducation = {
  school: string
  college: string
  degree: string
  major: string
  period: string
  courses: string[]
  honors: string[]
}

export type LocalizedCapability = {
  index: string
  title: string
  body: string
}

export type LocalizedAbout = {
  headline: string
  photoAlt: string
  education: LocalizedEducation[]
  capabilities: LocalizedCapability[]
  skills: string[]
  researchInterests: string[]
}
