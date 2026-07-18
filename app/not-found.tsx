import Link from "next/link"

export default function NotFound() {
  return (
    <div className="px-6 py-36 md:px-12">
      <p className="font-mono text-xs tracking-[0.2em] text-muted uppercase">
        404
      </p>
      <h1 className="mt-4 font-display text-4xl tracking-tight md:text-6xl">
        页面不存在
      </h1>
      <p className="mt-4 text-muted">该项目详情尚未发布，或链接已失效。</p>
      <Link
        href="/work"
        className="mt-10 inline-flex text-signal underline-offset-4 hover:underline"
      >
        返回项目列表 →
      </Link>
    </div>
  )
}
