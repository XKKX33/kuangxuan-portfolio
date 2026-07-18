"use client"

import { useEffect, useState } from "react"
import { prefersReducedMotion } from "@/lib/motion"

export function CustomCursor() {
  const [enabled, setEnabled] = useState(false)
  const [pos, setPos] = useState({ x: 0, y: 0 })
  const [label, setLabel] = useState<string | null>(null)

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches
    if (!fine || prefersReducedMotion()) return
    setEnabled(true)

    const onMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY })
      const target = (e.target as HTMLElement | null)?.closest(
        "[data-cursor]",
      ) as HTMLElement | null
      const kind = target?.dataset.cursor
      if (kind === "view") setLabel("VIEW")
      else if (kind === "pdf") setLabel("PDF")
      else setLabel(null)
    }

    window.addEventListener("mousemove", onMove, { passive: true })
    return () => window.removeEventListener("mousemove", onMove)
  }, [])

  if (!enabled) return null

  return (
    <div
      className="pointer-events-none fixed z-[70] mix-blend-difference"
      style={{
        left: pos.x,
        top: pos.y,
        transform: "translate(-50%, -50%)",
      }}
      aria-hidden
    >
      {label ? (
        <span className="flex size-14 items-center justify-center rounded-full bg-white text-[10px] font-medium tracking-widest text-black">
          {label}
        </span>
      ) : (
        <span className="block size-2 rounded-full bg-white" />
      )}
    </div>
  )
}
