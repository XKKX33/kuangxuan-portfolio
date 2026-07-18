"use client"

import { useEffect, useState } from "react"
import { site } from "@/content/site"
import { prefersReducedMotion } from "@/lib/motion"

export function Loader() {
  const [visible, setVisible] = useState(true)
  const [exiting, setExiting] = useState(false)
  const [word, setWord] = useState(site.loaderWords[0] ?? "")
  const [phase, setPhase] = useState<"words" | "final">("words")

  useEffect(() => {
    if (prefersReducedMotion()) {
      setVisible(false)
      return
    }

    if (typeof sessionStorage !== "undefined" && sessionStorage.getItem("loaderSeen") === "1") {
      setVisible(false)
      return
    }

    let index = 0
    const wordTimer = window.setInterval(() => {
      index += 1
      if (index >= site.loaderWords.length) {
        window.clearInterval(wordTimer)
        setPhase("final")
        setWord(site.loaderFinal)
        window.setTimeout(() => {
          setExiting(true)
          window.setTimeout(() => {
            setVisible(false)
            sessionStorage.setItem("loaderSeen", "1")
          }, 700)
        }, 600)
        return
      }
      setWord(site.loaderWords[index] ?? "")
    }, 180)

    return () => window.clearInterval(wordTimer)
  }, [])

  if (!visible) return null

  return (
    <div
      className={`fixed inset-0 z-[60] flex items-center justify-center bg-bg transition-transform duration-700 ease-in-out ${
        exiting ? "-translate-y-full" : "translate-y-0"
      }`}
      aria-hidden="true"
    >
      <p
        className={`font-display tracking-tight text-ink ${
          phase === "final"
            ? "text-sm md:text-base tracking-[0.15em]"
            : "text-3xl md:text-5xl"
        }`}
      >
        {word}
      </p>
    </div>
  )
}
