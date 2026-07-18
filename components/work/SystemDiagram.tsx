type SystemDiagramProps = {
  nodes: string[]
  result: string
}

export function SystemDiagram({ nodes, result }: SystemDiagramProps) {
  return (
    <div className="rounded-sm border border-line bg-white/40 p-6 md:p-8">
      <ul className="flex flex-wrap items-center gap-2 md:gap-3">
        {nodes.map((node, i) => (
          <li key={node} className="flex items-center gap-2 md:gap-3">
            <span className="rounded-full border border-line bg-bg px-3 py-1.5 font-mono text-xs text-ink">
              {node}
            </span>
            {i < nodes.length - 1 ? (
              <span className="text-muted" aria-hidden>
                →
              </span>
            ) : null}
          </li>
        ))}
      </ul>
      <p className="mt-6 border-t border-line pt-4 font-mono text-sm text-signal">
        {result}
      </p>
    </div>
  )
}
