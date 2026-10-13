import type { PartFinish } from '../data/types'
import { PAPER_SWATCH } from '../geometry/paperSurface'

/**
 * PartGlyph —— 图例符号（anatomy-figures 的 iso-swatch 思路，2026-10-13）
 *
 * 图例符号不是抽象的色块，而是**同一套绘制语言的缩略图**：
 * 一个等距小立方体，三面用该部件实际使用的纸面色（顶面/亮面/暗面）+ 墨线。
 * 于是"词 ↔ 图"的对应关系在纸面上是自明的——看到图例就知道图上那个块长什么样。
 */
export default function PartGlyph({
  finish = 'hull',
  size = 18,
}: {
  finish?: PartFinish
  size?: number
}) {
  const c = PAPER_SWATCH[finish] ?? PAPER_SWATCH.hull
  const isWarning = finish === 'warning'
  return (
    <svg
      width={size}
      height={size * 0.78}
      viewBox="0 0 20 16"
      aria-hidden="true"
      className="shrink-0"
      style={{ overflow: 'visible' }}
    >
      {/* 顶面 */}
      <path d="M10 0.6 L19.2 5.3 L10 10 L0.8 5.3 Z" fill={c.top} stroke={c.ink} strokeWidth="0.7" strokeLinejoin="round" />
      {/* 左侧面（暗） */}
      <path d="M0.8 5.3 L10 10 L10 15.4 L0.8 10.7 Z" fill={c.side} stroke={c.ink} strokeWidth="0.7" strokeLinejoin="round" />
      {/* 右侧面（亮） */}
      <path d="M19.2 5.3 L19.2 10.7 L10 15.4 L10 10 Z" fill={c.face} stroke={c.ink} strokeWidth="0.7" strokeLinejoin="round" />
      {isWarning && <circle cx="10" cy="5.3" r="1.5" fill="#E8453C" stroke="#6E1F19" strokeWidth="0.5" />}
    </svg>
  )
}
