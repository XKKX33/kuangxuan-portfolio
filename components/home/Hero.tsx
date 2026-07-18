import { site } from "@/content/site"
import { SignalCurve } from "@/components/home/SignalCurve"

export function Hero() {
  return (
    <section className="relative min-h-[100svh] px-6 pt-28 pb-16 md:px-12 md:pt-36">
      <p className="mb-6 font-mono text-xs tracking-[0.2em] text-muted uppercase">
        2026 Portfolio
      </p>
      <h1 className="max-w-5xl whitespace-pre-line font-display text-[clamp(2.75rem,9vw,7rem)] font-semibold leading-[0.95] tracking-tight text-ink">
        {site.identity.heroTitle}
      </h1>
      <p className="mt-6 max-w-2xl text-lg text-ink/80 md:text-xl">
        {site.identity.heroSubtitle}
      </p>
      <p className="mt-10 max-w-md text-base leading-relaxed text-muted md:absolute md:right-12 md:bottom-28 md:mt-0 md:text-right">
        用统计建模、推荐算法和 AI Agent，
        <br />
        将复杂数据转化为可以执行的决策。
      </p>
      <SignalCurve />
      <p className="mt-20 font-mono text-xs tracking-[0.2em] text-muted uppercase md:mt-28">
        Scroll to explore
      </p>
    </section>
  )
}
