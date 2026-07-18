"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { prefersReducedMotion } from "@/lib/motion"

type RevealProps = {
  children: React.ReactNode
  className?: string
  delay?: number
}

export function Reveal({ children, className, delay = 0 }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el || prefersReducedMotion()) return

    gsap.registerPlugin(ScrollTrigger)

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { y: 28, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          delay,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 88%",
            once: true,
          },
        },
      )
    }, el)

    return () => ctx.revert()
  }, [delay])

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  )
}
