import { useEffect, useRef } from 'react'
import type { DictEntry } from '../data/types'

/**
 * WordPopup — 词条卡（DESIGN §5.3，2026-09-09 改悬停触发）
 * 悬停词 2s 后锚定词上方 8px 出现；鼠标移到卡上保持，离开 250ms 关。
 * 内容层级：词头（词 + 音标）→ 词性 → 中文释义 → 构词拆解。
 * 词条缺失 → no-entry 态。
 */
interface WordPopupProps {
  dictKey: string
  entry: DictEntry | null
  anchorRect: DOMRect
  onEnter: () => void
  onLeave: () => void
  onClose: () => void
}

export default function WordPopup({ dictKey, entry, anchorRect, onEnter, onLeave, onClose }: WordPopupProps) {
  const cardRef = useRef<HTMLDivElement>(null)

  // 点卡外关闭
  useEffect(() => {
    const onDown = (e: MouseEvent) => {
      if (cardRef.current && !cardRef.current.contains(e.target as Node)) {
        onClose()
      }
    }
    document.addEventListener('mousedown', onDown)
    return () => document.removeEventListener('mousedown', onDown)
  }, [onClose])

  // 卡底对词顶 -8px；左缘不越出视口
  const left = Math.max(
    12,
    Math.min(anchorRect.left, window.innerWidth - 340),
  )

  return (
    <div
      ref={cardRef}
      className="fixed z-50 card-pop"
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      style={{
        left,
        top: anchorRect.top,
        transform: 'translateY(-100%) translateY(-8px)',
        maxWidth: 320,
      }}
    >
      <div className="hud-panel corner-accent p-4">
        {/* 词头 */}
        <div className="flex items-baseline justify-between gap-3">
          <span className="font-display text-lg text-ink">
            {entry ? entry.word : dictKey}
          </span>
          <span className="font-mono text-xs text-ink-faint">
            {entry ? entry.phonetic : ''}
          </span>
        </div>

        {entry ? (
          <>
            <div className="micro-label mt-2">{entry.pos}</div>
            <p className="font-body text-sm text-ink-soft mt-1.5 leading-relaxed">
              {entry.meaning}
            </p>

            {/* 构词拆解（复合短语） */}
            {entry.breakdown && (
              <div className="mt-3 pt-3 border-t border-canvas-grid">
                <div className="micro-label text-hud-cyan">WORD BUILDING</div>
                <div className="mt-1.5 space-y-1">
                  {entry.breakdown.map((b, i) => (
                    <div key={i} className="flex items-baseline gap-2 font-mono text-xs">
                      <span className="text-word-part">{b.part}</span>
                      <span className="text-ink-faint">→</span>
                      <span className="text-ink-soft">{b.gloss}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </>
        ) : (
          <div className="mt-2 font-mono text-xs text-ink-faint">
            — no entry —
          </div>
        )}
      </div>
    </div>
  )
}
