"use client"

import { useEffect, useState } from "react"
import type { UiCopy } from "@/content/i18n"
import { prefersReducedMotion } from "@/lib/motion"

type LoaderProps = {
  ui: UiCopy
}

export function Loader({ ui }: LoaderProps) {
  const [visible, setVisible] = useState(true)
  const [exiting, setExiting] = useState(false)
  const [word, setWord] = useState(ui.loaderWords[0] ?? "")
  const [phase, setPhase] = useState<"words" | "final">("words")

  useEffect(() => {
    if (prefersReducedMotion()) {
      setVisible(false)
      return
    }

    if (
      typeof sessionStorage !== "undefined" &&
      sessionStorage.getItem("loaderSeen") === "1"
    ) {
      setVisible(false)
      return
    }

    const words = ui.loaderWords
    let index = 0
    const wordTimer = window.setInterval(() => {
      index += 1
      if (index >= words.length) {
        window.clearInterval(wordTimer)
        setPhase("final")
        setWord(ui.loaderFinal)
        window.setTimeout(() => {
          setExiting(true)
          window.setTimeout(() => {
            setVisible(false)
            sessionStorage.setItem("loaderSeen", "1")
          }, 700)
        }, 600)
        return
      }
      setWord(words[index] ?? "")
    }, 180)

    return () => window.clearInterval(wordTimer)
  }, [ui.loaderFinal, ui.loaderWords])

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
            ? "text-sm tracking-[0.15em] md:text-base"
            : "text-3xl md:text-5xl"
        }`}
      >
        {word}
      </p>
    </div>
  )
}
