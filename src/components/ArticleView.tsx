import { useEffect, useImperativeHandle, useRef } from 'react'
import type { MarkedSeg, ThingData } from '../data/types'

/**
 * ArticleView — 结构化文章渲染（阅读主体）
 *
 * - 逐句渲染，句 = (string | MarkedSeg)[] 混排
 * - 部件词 .word-part（#0E7C7B 虚线下划线）；生词 .word-new（点状下划线）
 * - activePartId：文中所有该部件的词加 word-active 底色（图→词反查）
 * - activeSentenceIndex：flow 播放同步高亮当前句
 * - 点击 segment → 词→图部件关联；悬停 2s → 词条卡（onWordHover）
 */
export interface ArticleViewHandle {
  scrollToSentence: (index: number) => void
}

interface ArticleViewProps {
  thing: ThingData
  activePartId?: string | null
  activeSentenceIndex?: number | null
  onSegmentClick: (seg: MarkedSeg) => void
  onWordHover: (seg: MarkedSeg, rect: DOMRect) => void
  onWordLeave: () => void
  ref?: React.Ref<ArticleViewHandle>
}

/** 词条卡悬停延迟：停 2s 才弹（避免扫读时乱弹） */
const HOVER_DICT_MS = 2000

export default function ArticleView({
  thing,
  activePartId = null,
  activeSentenceIndex = null,
  onSegmentClick,
  onWordHover,
  onWordLeave,
  ref,
}: ArticleViewProps) {
  const sentenceRefs = useRef<(HTMLSpanElement | null)[]>([])

  useImperativeHandle(ref, () => ({
    scrollToSentence: (index: number) => {
      sentenceRefs.current[index]?.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      })
    },
  }))

  // 铺平全局句索引
  let globalIndex = -1

  return (
    <article className="font-display text-ink">
      {thing.article.map((paragraph, pi) => (
        <p
          key={pi}
          className={
            pi === 0
              ? 'text-xl leading-[1.6] mb-4'
              : 'text-lg leading-[1.6] mb-4'
          }
          style={{ maxWidth: '68ch' }}
        >
          {paragraph.sentences.map((sentence, si) => {
            globalIndex += 1
            const idx = globalIndex
            return (
              <span
                key={si}
                ref={el => { sentenceRefs.current[idx] = el }}
                className={
                  activeSentenceIndex === idx ? 'sentence-active' : undefined
                }
              >
                {sentence.map((seg, i) =>
                  typeof seg === 'string' ? (
                    <span key={i}>{seg}</span>
                  ) : (
                    <MarkedWord
                      key={i}
                      seg={seg}
                      active={!!seg.part && seg.part === activePartId}
                      onClick={onSegmentClick}
                      onHover={onWordHover}
                      onLeave={onWordLeave}
                    />
                  ),
                )}{' '}
              </span>
            )
          })}
        </p>
      ))}
    </article>
  )
}

function MarkedWord({
  seg,
  active,
  onClick,
  onHover,
  onLeave,
}: {
  seg: MarkedSeg
  active: boolean
  onClick: (seg: MarkedSeg) => void
  onHover: (seg: MarkedSeg, rect: DOMRect) => void
  onLeave: () => void
}) {
  const hoverTimer = useRef<number | null>(null)

  // 卸载时清计时（防词已卸载还弹卡）
  useEffect(
    () => () => {
      if (hoverTimer.current !== null) window.clearTimeout(hoverTimer.current)
    },
    [],
  )

  const cls = [
    seg.part ? 'word-part' : 'word-new',
    active ? 'word-active' : '',
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <span
      className={cls}
      onMouseEnter={e => {
        if (hoverTimer.current !== null) window.clearTimeout(hoverTimer.current)
        const rect = e.currentTarget.getBoundingClientRect()
        hoverTimer.current = window.setTimeout(() => {
          onHover(seg, rect)
        }, HOVER_DICT_MS)
      }}
      onMouseLeave={() => {
        if (hoverTimer.current !== null) {
          window.clearTimeout(hoverTimer.current)
          hoverTimer.current = null
        }
        onLeave()
      }}
      onClick={e => {
        e.stopPropagation()
        onClick(seg)
      }}
    >
      {seg.text}
    </span>
  )
}
