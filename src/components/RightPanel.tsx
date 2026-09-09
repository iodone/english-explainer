import { useState } from 'react'
import type { ThingData } from '../data/things'

/**
 * RightPanel — subsystem registry with hierarchical tree view
 */
export default function RightPanel({ thing }: { thing: ThingData }) {
  const [expanded, setExpanded] = useState<string | null>(thing.parts[0]?.id || null)
  const [hoveredPart, setHoveredPart] = useState<string | null>(null)

  return (
    <div className="p-4 space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <span className="micro-label text-hud-cyan">SUBSYSTEM REGISTRY</span>
        <span className="font-mono text-[10px] text-ink-faint">R-01</span>
      </div>

      {/* Thing info block */}
      <div className="hud-panel p-3">
        <div className="micro-label mb-1">SPECIMEN ID</div>
        <div className="font-mono text-sm text-ink">{thing.id.toUpperCase()}</div>
        <div className="micro-label mt-2 mb-1">CLASSIFICATION</div>
        <div className="font-mono text-sm text-ink">{thing.category.toUpperCase()}</div>
        <div className="micro-label mt-2 mb-1">DESIGNATION</div>
        <div className="font-mono text-sm" style={{ color: thing.color }}>
          {thing.realName}
        </div>
      </div>

      {/* Parts tree */}
      <div className="hud-panel p-3">
        <div className="flex items-center justify-between mb-3">
          <span className="micro-label">COMPONENT TREE</span>
          <span className="font-mono text-[10px] text-ink-faint">
            {thing.parts.length} NODES
          </span>
        </div>

        <div className="space-y-1">
          {thing.parts.map((part, i) => {
            const isExpanded = expanded === part.id
            const isHovered = hoveredPart === part.id

            return (
              <div key={part.id}>
                {/* Tree node */}
                <button
                  onClick={() => setExpanded(isExpanded ? null : part.id)}
                  onMouseEnter={() => setHoveredPart(part.id)}
                  onMouseLeave={() => setHoveredPart(null)}
                  className={`w-full text-left px-2 py-1.5 rounded-sm flex items-center gap-2 transition-all ${
                    isExpanded
                      ? 'bg-canvas-dark border-l-2 border-hud-cyan'
                      : isHovered
                      ? 'bg-canvas-dark/50'
                      : ''
                  }`}
                >
                  {/* Tree connector */}
                  <span className="font-mono text-[10px] text-ink-faint w-4">
                    {i === thing.parts.length - 1 ? '└' : '├'}
                  </span>

                  {/* Status dot */}
                  <span
                    className="w-1.5 h-1.5 rounded-full"
                    style={{ backgroundColor: thing.color + (isExpanded ? '' : '60') }}
                  />

                  {/* Label */}
                  <div className="flex-1 min-w-0">
                    <div className="font-mono text-xs text-ink truncate">
                      {part.label}
                    </div>
                  </div>

                  {/* Index */}
                  <span className="font-mono text-[9px] text-ink-faint">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </button>

                {/* Expanded detail */}
                {isExpanded && (
                  <div className="ml-6 pl-3 border-l border-canvas-grid mt-1 mb-2 space-y-1">
                    <div>
                      <span className="micro-label">REAL NAME</span>
                      <p className="font-mono text-xs text-ink-soft">{part.realName}</p>
                    </div>
                    <div>
                      <span className="micro-label">POSITION</span>
                      <p className="font-mono text-[10px] text-ink-faint">
                        [{part.position.map(p => p.toFixed(1)).join(', ')}]
                      </p>
                    </div>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>

      {/* Legend */}
      <div className="hud-panel p-3">
        <div className="micro-label mb-2">LEGEND</div>
        <div className="space-y-1.5">
          <div className="flex items-center gap-2">
            <span className="w-3 h-px" style={{ backgroundColor: '#3ECFCF' }} />
            <span className="font-mono text-[10px] text-ink-faint">Wireframe edge</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full" style={{ backgroundColor: thing.color }} />
            <span className="font-mono text-[10px] text-ink-faint">Active component</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-hud-green status-blink" />
            <span className="font-mono text-[10px] text-ink-faint">System online</span>
          </div>
        </div>
      </div>

      {/* Navigation hint */}
      <div className="text-center">
        <span className="font-mono text-[9px] text-ink-faint">
          CLICK COMPONENT TO INSPECT
        </span>
      </div>
    </div>
  )
}