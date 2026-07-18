"use client"

import { useEffect, useRef } from "react"
import { prefersReducedMotion } from "@/lib/motion"

type SignalCurveProps = {
  className?: string
}

export function SignalCurve({ className = "" }: SignalCurveProps) {
  const pathRef = useRef<SVGPathElement>(null)
  const phaseRef = useRef(0)
  const pointerRef = useRef({ x: 0.5, y: 0.5 })

  useEffect(() => {
    if (prefersReducedMotion()) return

    const path = pathRef.current
    if (!path) return

    const onMove = (e: PointerEvent) => {
      pointerRef.current = {
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      }
    }
    window.addEventListener("pointermove", onMove, { passive: true })

    let raf = 0
    const tick = () => {
      phaseRef.current += 0.008
      const p = phaseRef.current
      const px = pointerRef.current.x
      const py = pointerRef.current.y
      const n1 = Math.sin(p) * 18 + (px - 0.5) * 24
      const n2 = Math.cos(p * 0.9) * 22 + (py - 0.5) * 20
      const n3 = Math.sin(p * 1.3 + 1) * 16
      const d = `M 0 80 C 200 ${80 + n1}, 400 ${80 - n2}, 600 ${80 + n3} S 1000 ${80 - n1}, 1200 80`
      path.setAttribute("d", d)
      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener("pointermove", onMove)
    }
  }, [])

  return (
    <svg
      className={`pointer-events-none absolute inset-x-0 bottom-[14%] h-36 w-full opacity-20 md:h-44 ${className}`}
      viewBox="0 0 1200 160"
      fill="none"
      aria-hidden
    >
      <path
        ref={pathRef}
        d="M 0 80 C 200 60, 400 100, 600 80 S 1000 60, 1200 80"
        stroke="var(--signal)"
        strokeWidth="1.5"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  )
}
