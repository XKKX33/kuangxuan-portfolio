"use client"

import Link from "next/link"
import { useState } from "react"
import { getFeaturedProjects, getProjectHref } from "@/lib/projects"
import { Reveal } from "@/components/providers/Reveal"

export function SelectedWork() {
  const projects = getFeaturedProjects()
  const [hover, setHover] = useState<string | null>(null)

  return (
    <section className="px-6 py-24 md:px-12 md:py-32" aria-labelledby="selected-work">
      <Reveal className="mb-12 flex items-end justify-between gap-4">
        <div>
          <p className="font-mono text-xs tracking-[0.2em] text-muted uppercase">
            Selected Work
          </p>
          <h2
            id="selected-work"
            className="mt-2 font-display text-3xl tracking-tight md:text-5xl"
          >
            精选项目
          </h2>
        </div>
        <Link
          href="/work"
          className="text-sm text-ink/70 underline-offset-4 hover:text-ink hover:underline"
          data-cursor="view"
        >
          全部项目 →
        </Link>
      </Reveal>

      <ul className="border-t border-line">
        {projects.map((project, i) => {
          const href = getProjectHref(project)
          const dimmed = hover !== null && hover !== project.slug
          return (
            <li key={project.slug} id={project.slug}>
              <Link
                href={href}
                data-cursor="view"
                onMouseEnter={() => setHover(project.slug)}
                onMouseLeave={() => setHover(null)}
                className={`group grid grid-cols-1 gap-3 border-b border-line py-8 transition-all duration-300 md:grid-cols-[auto_1fr_1.2fr_auto] md:items-center md:gap-8 ${
                  dimmed ? "opacity-35" : "opacity-100"
                } ${hover === project.slug ? "translate-x-3" : "translate-x-0"}`}
              >
                <span className="font-mono text-xs text-muted">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <p className="font-display text-2xl tracking-tight md:text-3xl">
                    {project.title}
                    <span className="ml-2 inline-block transition-transform duration-300 group-hover:rotate-45">
                      →
                    </span>
                  </p>
                  <p className="mt-1 text-sm text-muted">{project.titleCn}</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-line px-3 py-1 font-mono text-[11px] text-muted"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <span className="font-mono text-sm text-muted md:text-right">
                  {project.year}
                </span>
              </Link>
            </li>
          )
        })}
      </ul>
    </section>
  )
}
