import { useState } from 'react'
import type { ThingData } from '../data/things'

/**
 * ThingDescription — bottom panel with the simple English explanation
 * The core learning content: Munroe-style simple words
 */
export default function ThingDescription({ thing }: { thing: ThingData }) {
  const [showGlossary, setShowGlossary] = useState(false)

  return (
    <div className="hud-panel border-t border-canvas-grid">
      <div className="max-w-4xl mx-auto px-8 py-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <span className="micro-label text-hud-cyan">EXPLANATION</span>
            <span className="font-mono text-[10px] text-ink-faint">
              USING ONLY {thing.hudMetrics.wordCount} SIMPLE WORDS
            </span>
          </div>
          <button
            onClick={() => setShowGlossary(!showGlossary)}
            className="micro-label px-3 py-1 border border-canvas-grid rounded-sm hover:border-hud-cyan transition-colors"
          >
            {showGlossary ? 'HIDE' : 'SHOW'} WORD LIST
          </button>
        </div>

        {/* Main description */}
        <div className="relative">
          <p className="text-lg leading-relaxed text-ink font-serif">
            {thing.description}
          </p>

          {/* Annotation markers */}
          <div className="absolute -left-6 top-0 bottom-0 w-px bg-hud-cyan opacity-30" />
        </div>

        {/* Parts glossary */}
        {showGlossary && (
          <div className="mt-6 pt-4 border-t border-canvas-grid">
            <div className="micro-label mb-3">PART NAME TRANSLATION</div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {thing.parts.map(part => (
                <div
                  key={part.id}
                  className="hud-panel p-3 corner-accent"
                >
                  <div className="font-mono text-xs text-ink">
                    {part.label}
                  </div>
                  <div className="micro-label mt-1">
                    → {part.realName}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Learning prompt */}
        <div className="mt-6 flex items-center gap-3 p-3 bg-canvas-dark rounded-sm">
          <span className="text-hud-cyan text-lg">💡</span>
          <div>
            <p className="text-sm text-ink-soft">
              <strong className="text-ink">Learning tip:</strong> Try to describe this thing
              to a friend using only simple words. If you can explain it simply,
              you understand it well.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}