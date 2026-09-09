import { useEffect, useRef, useState } from 'react'
import type { FlowStep, ThingData } from '../data/types'

/**
 * FlowPlayer — 过程动画编排（DESIGN §5.4）
 *
 * 自包含状态机：每步 2.8s + 400ms 间隔自动推进。
 * 图列底部浮出步骤指示器（点可跳步）+ 暂停/重播。
 * onStep 上抛：ThingPage 据此同步 ThingScene 点亮与文章句高亮。
 *
 * 回调走 ref（effect 只依赖 stepIndex）——否则内联回调引用变化
 * 会让 effect 互相同步重置，触发 update-depth 循环。
 */

const STEP_MS = 3200 // 2.8s 阅读时间 + 400ms 步间隔

export interface FlowStepInfo {
  step: FlowStep
  index: number
  /** 已过步骤累计部件（保持 55% 亮度） */
  pastPartIds: string[]
}

interface FlowPlayerProps {
  thing: ThingData
  onStep: (info: FlowStepInfo) => void
  onFinish: () => void
}

export default function FlowPlayer({ thing, onStep, onFinish }: FlowPlayerProps) {
  const [stepIndex, setStepIndex] = useState(0)
  const [playing, setPlaying] = useState(true)
  const total = thing.flow.length

  // 回调 ref 化：effect 不依赖回调引用
  const onStepRef = useRef(onStep)
  onStepRef.current = onStep
  const onFinishRef = useRef(onFinish)
  onFinishRef.current = onFinish

  // 步进计时
  useEffect(() => {
    if (!playing) return
    const isLast = stepIndex >= total - 1
    const delay = isLast ? STEP_MS + 800 : STEP_MS
    const timer = setTimeout(() => {
      if (isLast) {
        onFinishRef.current()
      } else {
        setStepIndex(i => i + 1)
      }
    }, delay)
    return () => clearTimeout(timer)
  }, [playing, stepIndex, total])

  // 上抛当前步（仅步进/跳步触发）
  useEffect(() => {
    const past = thing.flow.slice(0, stepIndex).flatMap(s => s.partIds)
    onStepRef.current({
      step: thing.flow[stepIndex],
      index: stepIndex,
      pastPartIds: past,
    })
  }, [stepIndex, thing])

  const jumpTo = (i: number) => {
    setStepIndex(i)
    setPlaying(true)
  }

  return (
    <div className="absolute bottom-4 right-4 left-4 z-20 pointer-events-none">
      <div className="hud-panel corner-accent px-4 py-3 pointer-events-auto">
        <div className="flex items-center justify-between gap-4">
          {/* 步骤指示器（点可跳步） */}
          <div className="flex items-center gap-2">
            {thing.flow.map((_, i) => (
              <button
                key={i}
                onClick={() => jumpTo(i)}
                aria-label={`Step ${i + 1}`}
                className="transition-transform hover:scale-125"
              >
                <span
                  className="block w-2.5 h-2.5 rounded-full border"
                  style={{
                    borderColor: 'var(--color-hud-cyan)',
                    backgroundColor:
                      i < stepIndex
                        ? 'var(--color-ink-faint)'
                        : i === stepIndex
                          ? 'var(--color-hud-cyan)'
                          : 'transparent',
                  }}
                />
              </button>
            ))}
          </div>

          {/* 解说句 */}
          <p className="font-display text-sm text-ink-soft flex-1 min-w-0 truncate">
            {thing.flow[stepIndex].caption}
          </p>

          <div className="flex items-center gap-3">
            <span className="micro-label text-hud-cyan whitespace-nowrap">
              STEP {stepIndex + 1}/{total}
            </span>
            {/* 暂停/播放 */}
            <button
              onClick={() => setPlaying(p => !p)}
              className="micro-label text-ink-soft hover:text-hud-cyan transition-colors"
            >
              {playing ? '❚❚ PAUSE' : '▶ PLAY'}
            </button>
            {/* 重播 */}
            <button
              onClick={() => jumpTo(0)}
              className="micro-label text-ink-soft hover:text-hud-cyan transition-colors"
            >
              ↺ REPLAY
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
