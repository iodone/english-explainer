import { useEffect, useRef, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { getThingBySlug, things } from '../data/things'
import { lookupWord } from '../data/dictionary'
import { findSentenceIndexByPart } from '../data/utils'
import type { MarkedSeg } from '../data/types'
import ThingScene from '../components/ThingScene'
import ArticleView, { type ArticleViewHandle } from '../components/ArticleView'
import WordPopup from '../components/WordPopup'
import FlowPlayer, { type FlowStepInfo } from '../components/FlowPlayer'
import PracticePanel from '../components/PracticePanel'
import PageActions, { type PageMode } from '../components/PageActions'

/**
 * ThingPage — 三态阅读页（阅读 / 过程动画 / 复述练习）
 *
 * ┌──────────────────────────────────────────────┐
 * │                  THING HEADER                 │
 * ├───────────────────────────┬──────────────────┤
 * │  文章主列（min 560px，滚动） │  图辅列（sticky） │
 * │  ArticleView / Practice    │  ThingScene      │
 * │                           │  (+FlowPlayer)   │
 * ├───────────────────────────┴──────────────────┤
 * │              PAGE ACTIONS（sticky）           │
 * └──────────────────────────────────────────────┘
 *
 * 交互枢纽：activePartId 同时驱动 文中词底色 与 图上部件点亮。
 */
export default function ThingPage() {
  const { slug } = useParams<{ slug: string }>()
  const navigate = useNavigate()
  const thing = getThingBySlug(slug || '')

  const [mode, setMode] = useState<PageMode>('read')
  const [activePartId, setActivePartId] = useState<string | null>(null)
  const [wordPopup, setWordPopup] = useState<{ key: string; rect: DOMRect } | null>(null)
  const [flowStep, setFlowStep] = useState<FlowStepInfo | null>(null)

  const articleRef = useRef<ArticleViewHandle>(null)
  const articleScrollRef = useRef<HTMLDivElement>(null)

  /* ─── 分栏拖动（默认居中 50%，localStorage 持久化） ─── */
  const [splitPct, setSplitPct] = useState(() => {
    const saved = Number(localStorage.getItem('thing-split'))
    return saved >= 30 && saved <= 70 ? saved : 50
  })
  const splitPaneRef = useRef<HTMLDivElement>(null)
  const draggingRef = useRef(false)
  const splitPctRef = useRef(splitPct)
  splitPctRef.current = splitPct

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      if (!draggingRef.current || !splitPaneRef.current) return
      const rect = splitPaneRef.current.getBoundingClientRect()
      // 文章列 min 420px，图列 min 360px
      const minL = (420 / rect.width) * 100
      const maxL = 100 - (360 / rect.width) * 100
      setSplitPct(Math.min(maxL, Math.max(minL, ((e.clientX - rect.left) / rect.width) * 100)))
    }
    const onUp = () => {
      if (!draggingRef.current) return
      draggingRef.current = false
      document.body.style.cursor = ''
      document.body.style.userSelect = ''
      localStorage.setItem('thing-split', String(splitPctRef.current))
    }
    window.addEventListener('mousemove', onMove)
    window.addEventListener('mouseup', onUp)
    return () => {
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mouseup', onUp)
    }
  }, [])

  const startDrag = (e: React.MouseEvent) => {
    e.preventDefault()
    draggingRef.current = true
    document.body.style.cursor = 'col-resize'
    document.body.style.userSelect = 'none'
  }

  // 切 thing 重置全部状态
  useEffect(() => {
    setMode('read')
    setActivePartId(null)
    setWordPopup(null)
    setFlowStep(null)
  }, [slug])

  // WordPopup 开时锁文章列滚动（防锚定漂移，DESIGN §5.3）
  useEffect(() => {
    const el = articleScrollRef.current
    if (!el) return
    el.style.overflow = wordPopup ? 'hidden' : 'auto'
  }, [wordPopup])

  if (!thing) {
    return (
      <div className="flex-1 flex items-center justify-center">
        <div className="text-center">
          <p className="thing-title text-2xl text-ink mb-4">Thing Not Found</p>
          <Link to="/" className="micro-label text-hud-cyan hover:underline">
            ← BACK TO ALL THINGS
          </Link>
        </div>
      </div>
    )
  }

  /* ─── 交互接线 ─── */

  // 词条卡 hover 关闭延迟（词→卡之间移动 / 卡上悬停时不关）
  const closeTimerRef = useRef<number | null>(null)
  const clearCloseTimer = () => {
    if (closeTimerRef.current !== null) {
      window.clearTimeout(closeTimerRef.current)
      closeTimerRef.current = null
    }
  }

  // 点击 segment → 只做词→图部件关联（词条卡改悬停触发）
  const handleSegmentClick = (seg: MarkedSeg) => {
    if (seg.part) setActivePartId(seg.part)
  }

  // 悬停 2s → 词条卡（ArticleView 内计时）
  const handleWordHover = (seg: MarkedSeg, rect: DOMRect) => {
    if (!seg.dict) return
    clearCloseTimer()
    setWordPopup({ key: seg.dict, rect })
  }

  // 离开词/卡 250ms 后关
  const handleWordLeave = () => {
    clearCloseTimer()
    closeTimerRef.current = window.setTimeout(() => setWordPopup(null), 250)
  }

  // 图→词：点击图上部件标注点 → 文章滚动到该部件句
  const handlePartClick = (partId: string) => {
    setActivePartId(partId)
    const idx = findSentenceIndexByPart(thing, partId)
    if (idx !== null) articleRef.current?.scrollToSentence(idx)
  }

  // flow 步进：驱动图点亮 + 解说句滚动
  const handleFlowStep = (info: FlowStepInfo) => {
    setFlowStep(info)
    setActivePartId(null)
    articleRef.current?.scrollToSentence(info.step.sentenceRef)
  }

  // Practice hover：部件微亮（复用高亮通道）
  const handlePracticeHover = (partId: string | null) => {
    if (mode === 'practice') setActivePartId(partId)
  }

  const goNextThing = () => {
    const idx = things.findIndex(t => t.slug === thing.slug)
    const next = things[(idx + 1) % things.length]
    navigate(`/thing/${next.slug}`)
  }

  /* ─── Scene 驱动状态 ─── */
  const inFlow = mode === 'flow' && flowStep
  const sceneActiveParts = inFlow ? flowStep.step.partIds : []
  const scenePastParts = inFlow ? flowStep.pastPartIds : []
  const sceneDim = !!inFlow
  const sceneHighlight = inFlow ? null : activePartId

  return (
    <div className="flex-1 flex flex-col overflow-hidden">
      {/* Thing header */}
      <div className="px-6 py-4 flex items-center justify-between border-b border-canvas-grid flex-shrink-0">
        <div className="flex items-center gap-4">
          <Link to="/" className="micro-label text-hud-cyan hover:underline no-underline">
            ← ALL
          </Link>
          <div>
            <h1 className="thing-title text-2xl text-ink">{thing.simpleName}</h1>
            <p className="micro-label">{thing.realName.toUpperCase()}</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <span
            className="w-3 h-3 rounded-full status-blink"
            style={{ backgroundColor: thing.color }}
          />
          <span className="micro-label" style={{ color: thing.color }}>
            {mode === 'read' ? 'READING' : mode === 'flow' ? 'RUNNING' : 'PRACTICE'}
          </span>
        </div>
      </div>

      {/* 主体：文章列 + 拖动分界 + 图列 */}
      <div ref={splitPaneRef} className="flex-1 flex overflow-hidden min-h-0">
        {/* 文章主列 — 实色纸面，遮蔽背景网格（阅读面干净） */}
        <div
          ref={articleScrollRef}
          className="overflow-y-auto px-8 py-8 bg-canvas min-w-[420px]"
          style={{ width: `${splitPct}%` }}
          onClick={() => setWordPopup(null)}
        >
          {mode === 'practice' ? (
            <PracticePanel
              thing={thing}
              onPartHover={handlePracticeHover}
            />
          ) : (
            <>
              <ArticleView
                ref={articleRef}
                thing={thing}
                activePartId={activePartId}
                activeSentenceIndex={inFlow ? flowStep.step.sentenceRef : null}
                onSegmentClick={handleSegmentClick}
                onWordHover={handleWordHover}
                onWordLeave={handleWordLeave}
              />

              {/* Did you know — 静态小节（原 FunFacts 降级） */}
              {mode === 'read' && thing.funFacts.length > 0 && (
                <div className="hud-panel corner-accent mt-10 p-5" style={{ maxWidth: '68ch' }}>
                  <div className="micro-label text-hud-cyan mb-3">DID YOU KNOW</div>
                  <ul className="space-y-2">
                    {thing.funFacts.map((fact, i) => (
                      <li key={i} className="font-display text-base text-ink-soft leading-relaxed flex gap-2">
                        <span className="text-hud-cyan">—</span>
                        {fact}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </>
          )}
        </div>

        {/* 拖动分界线 — 制图分隔，可拖调两栏宽 */}
        <div
          onMouseDown={startDrag}
          onDoubleClick={() => setSplitPct(50)}
          className="relative w-1.5 flex-shrink-0 cursor-col-resize bg-ink-soft/50 transition-colors hover:bg-hud-cyan z-10 group"
          title="拖动调整 · 双击复位"
        >
          {/* 中央把手 */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col gap-[3px] py-2 px-1.5 rounded">
            <span className="block w-3 h-[2px] rounded bg-ink-soft group-hover:bg-canvas" />
            <span className="block w-3 h-[2px] rounded bg-ink-soft group-hover:bg-canvas" />
            <span className="block w-3 h-[2px] rounded bg-ink-soft group-hover:bg-canvas" />
          </div>
        </div>

        {/* 图辅列 — 方格纸（透出背景网格） */}
        <div className="flex-1 relative min-w-[360px]">
          <ThingScene
            thing={thing}
            highlightPartId={sceneHighlight}
            activePartIds={sceneActiveParts}
            pastPartIds={scenePastParts}
            dimOthers={sceneDim}
            onPartClick={handlePartClick}
          />
          {mode === 'flow' && (
            <FlowPlayer
              thing={thing}
              onStep={handleFlowStep}
              onFinish={() => setMode('read')}
            />
          )}
        </div>
      </div>

      {/* 底部动作条 */}
      <PageActions
        mode={mode}
        thing={thing}
        flowStep={flowStep ? { index: flowStep.index, total: thing.flow.length } : undefined}
        onModeChange={setMode}
        onNext={goNextThing}
      />

      {/* 词条卡（悬停触发；卡上悬停不关） */}
      {wordPopup && (
        <WordPopup
          dictKey={wordPopup.key}
          entry={lookupWord(wordPopup.key)}
          anchorRect={wordPopup.rect}
          onEnter={clearCloseTimer}
          onLeave={handleWordLeave}
          onClose={() => setWordPopup(null)}
        />
      )}
    </div>
  )
}
