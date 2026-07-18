"use client"

import type { Locale } from "@/lib/i18n"

type ViewMode = "list" | "grid"

type ViewToggleProps = {
  mode: ViewMode
  onChange: (mode: ViewMode) => void
  locale?: Locale
}

export function ViewToggle({ mode, onChange, locale = "zh" }: ViewToggleProps) {
  const aria = locale === "zh" ? "视图切换" : "View mode"
  const listLabel = locale === "zh" ? "列表" : "List"
  const gridLabel = locale === "zh" ? "网格" : "Grid"

  return (
    <div
      className="inline-flex rounded-full border border-line p-1"
      role="group"
      aria-label={aria}
    >
      <button
        type="button"
        aria-pressed={mode === "list"}
        onClick={() => onChange("list")}
        className={`rounded-full px-4 py-2 text-sm transition-colors ${
          mode === "list"
            ? "bg-ink text-ink-inverse"
            : "text-ink/70 hover:text-ink"
        }`}
      >
        {listLabel}
      </button>
      <button
        type="button"
        aria-pressed={mode === "grid"}
        onClick={() => onChange("grid")}
        className={`rounded-full px-4 py-2 text-sm transition-colors ${
          mode === "grid"
            ? "bg-ink text-ink-inverse"
            : "text-ink/70 hover:text-ink"
        }`}
      >
        {gridLabel}
      </button>
    </div>
  )
}
