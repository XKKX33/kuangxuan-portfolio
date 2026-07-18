"use client"

type ViewMode = "list" | "grid"

type ViewToggleProps = {
  mode: ViewMode
  onChange: (mode: ViewMode) => void
}

export function ViewToggle({ mode, onChange }: ViewToggleProps) {
  return (
    <div
      className="inline-flex rounded-full border border-line p-1"
      role="group"
      aria-label="视图切换"
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
        List
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
        Grid
      </button>
    </div>
  )
}
