"use client"

import { useEffect } from "react"
import Lenis from "lenis"
import { prefersReducedMotion } from "@/lib/motion"

export function SmoothScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    if (prefersReducedMotion()) return

    const lenis = new Lenis({
      duration: 1.1,
      smoothWheel: true,
    })

    let raf = 0
    const loop = (time: number) => {
      lenis.raf(time)
      raf = requestAnimationFrame(loop)
    }
    raf = requestAnimationFrame(loop)

    return () => {
      cancelAnimationFrame(raf)
      lenis.destroy()
    }
  }, [])

  return <>{children}</>
}
