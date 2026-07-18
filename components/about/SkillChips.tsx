import type { LocalizedAbout, UiCopy } from "@/content/i18n"

type SkillChipsProps = {
  ui: UiCopy
  about: LocalizedAbout
}

export function SkillChips({ ui, about }: SkillChipsProps) {
  return (
    <section className="px-6 py-14 md:px-12 md:py-16" aria-labelledby="skills">
      <p className="font-mono text-xs tracking-[0.2em] text-muted uppercase">
        Skills
      </p>
      <h2
        id="skills"
        className="mt-2 font-display text-3xl tracking-tight md:text-5xl"
      >
        {ui.about.skillsTitle}
      </h2>

      <div className="mt-10 flex flex-wrap gap-2">
        {about.skills.map((skill) => (
          <span
            key={skill}
            className="rounded-full border border-line px-4 py-2 font-mono text-xs text-ink/80"
          >
            {skill}
          </span>
        ))}
      </div>

      <h3 className="mt-12 font-display text-xl tracking-tight">
        {ui.about.researchTitle}
      </h3>
      <ul className="mt-6 space-y-3 border-t border-line pt-8">
        {about.researchInterests.map((item) => (
          <li key={item} className="text-base text-ink/80">
            · {item}
          </li>
        ))}
      </ul>
    </section>
  )
}
