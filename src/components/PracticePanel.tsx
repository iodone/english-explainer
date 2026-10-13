import { useState } from 'react'
import type { ThingData } from '../data/types'
import PartGlyph from './PartGlyph'

/**
 * PracticePanel — 复述练习态主体（DESIGN §5.5）
 *
 * 文章淡出后的替代内容：
 * - 练习说明 + Show key expressions 展开
 * - 关键表达清单：checkbox 自评 + 覆盖度计数（全达成变 hud-green）
 * - Show part names：simple ↔ real 部件对照表（原 RightPanel 部件树去向）
 * - 短语 hover → 图上对应部件微亮（onPartHover）
 */
interface PracticePanelProps {
  thing: ThingData
  onPartHover: (partId: string | null) => void
}

export default function PracticePanel({ thing, onPartHover }: PracticePanelProps) {
  const [checked, setChecked] = useState<Set<number>>(new Set())
  const [revealed, setRevealed] = useState(false)
  const [showParts, setShowParts] = useState(false)

  const total = thing.keyExpressions.length
  const allDone = checked.size === total

  const toggle = (i: number) => {
    setChecked(prev => {
      const next = new Set(prev)
      if (next.has(i)) {
        next.delete(i)
      } else {
        next.add(i)
      }
      return next
    })
  }

  return (
    <div className="max-w-[68ch]">
      {/* 练习说明 */}
      <div className="micro-label text-hud-cyan">RETELL PRACTICE</div>
      <p className="font-display text-xl text-ink leading-[1.5] mt-3">
        Look at the picture. Say how it works in your own words.
      </p>
      <p className="font-body text-sm text-ink-soft mt-3">
        对着图用自己的话复述它如何工作，然后展开关键表达清单，勾选你说到的部分。
      </p>

      {/* 部件名开关（图上对照提示） */}
      <button
        onClick={() => setShowParts(s => !s)}
        className="micro-label text-ink-soft hover:text-hud-cyan transition-colors mt-6"
      >
        {showParts ? '▾ HIDE PART NAMES' : '▸ SHOW PART NAMES'}
      </button>
      {showParts && (
        <div className="hud-panel mt-3 p-4 space-y-2">
          {thing.parts.map(part => (
            <div
              key={part.id}
              className="flex items-center gap-3 cursor-pointer"
              onMouseEnter={() => onPartHover(part.id)}
              onMouseLeave={() => onPartHover(null)}
            >
              {/* 图例符号 = 该部件在图上那块实体的缩略（同一套纸面色 + 墨线） */}
              <PartGlyph finish={part.finish} />
              <span className="font-display text-base text-word-part">
                {part.label}
              </span>
              <span className="text-ink-faint">↔</span>
              <span className="font-mono text-xs text-ink-faint uppercase">
                {part.realName}
              </span>
            </div>
          ))}
        </div>
      )}

      {/* 关键表达清单 */}
      <button
        onClick={() => setRevealed(r => !r)}
        className="micro-label text-hud-cyan hover:underline mt-8 block"
      >
        {revealed ? '▾ HIDE KEY EXPRESSIONS' : '▸ SHOW KEY EXPRESSIONS'}
      </button>

      {revealed && (
        <div className="mt-4 space-y-1">
          {thing.keyExpressions.map((expr, i) => {
            const isChecked = checked.has(i)
            return (
              <label
                key={i}
                className="flex items-center gap-3 py-1.5 cursor-pointer group"
                onMouseEnter={() => expr.partId && onPartHover(expr.partId)}
                onMouseLeave={() => onPartHover(null)}
              >
                {/* checkbox */}
                <span
                  className="w-4 h-4 border flex-shrink-0 flex items-center justify-center transition-colors"
                  style={{
                    borderColor: isChecked ? 'var(--color-hud-cyan)' : 'var(--color-ink-faint)',
                    backgroundColor: isChecked ? 'var(--color-hud-cyan)' : 'transparent',
                  }}
                >
                  {isChecked && (
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                      <path
                        d="M1.5 5.5L4 8L8.5 2"
                        stroke="#F4F1EA"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                      />
                    </svg>
                  )}
                </span>
                <input
                  type="checkbox"
                  checked={isChecked}
                  onChange={() => toggle(i)}
                  className="sr-only"
                />
                <span
                  className={`font-display text-lg transition-all ${
                    isChecked
                      ? 'text-ink-faint line-through'
                      : 'text-ink group-hover:text-word-part'
                  }`}
                >
                  {expr.text}
                </span>
              </label>
            )
          })}

          {/* 覆盖度 */}
          <div className="mt-6 pt-4 border-t border-canvas-grid flex items-center gap-3">
            <span
              className="micro-label"
              style={{ color: allDone ? 'var(--color-hud-green)' : 'var(--color-ink-faint)' }}
            >
              COVERAGE
            </span>
            <span
              className="font-mono text-lg"
              style={{ color: allDone ? 'var(--color-hud-green)' : 'var(--color-ink)' }}
            >
              {checked.size}/{total}
            </span>
            {allDone && (
              <span className="micro-label text-hud-green">ALL COVERED — WELL SAID</span>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
