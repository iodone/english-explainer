import type { ThingData } from '../data/types'

/**
 * PageActions — 底部 sticky 动作条（DESIGN §3.2）
 * 随三态变化：阅读（How it works / Practice）→ 动画（Stop + 计数）→ 复述（Read again / Next）
 */
export type PageMode = 'read' | 'flow' | 'practice'

interface PageActionsProps {
  mode: PageMode
  thing: ThingData
  flowStep?: { index: number; total: number }
  onModeChange: (mode: PageMode) => void
  onNext: () => void
}

export default function PageActions({ mode, thing, flowStep, onModeChange, onNext }: PageActionsProps) {
  return (
    <div className="sticky bottom-0 z-30 px-8 py-4 border-t border-canvas-grid bg-canvas/85 backdrop-blur-sm">
      <div className="flex items-center gap-4">
        {mode === 'read' && (
          <>
            {thing.flow.length > 0 && (
              <button
                onClick={() => onModeChange('flow')}
                className="hud-panel px-5 py-2.5 micro-label text-hud-cyan hover:text-ink transition-colors"
              >
                ▶ HOW IT WORKS
              </button>
            )}
            {thing.keyExpressions.length > 0 && (
              <button
                onClick={() => onModeChange('practice')}
                className="hud-panel px-5 py-2.5 micro-label text-ink-soft hover:text-hud-cyan transition-colors"
              >
                ✎ PRACTICE
              </button>
            )}
            <span className="micro-label ml-auto">READ · CLICK A WORD TO FIND ITS PART</span>
          </>
        )}

        {mode === 'flow' && flowStep && (
          <>
            <button
              onClick={() => onModeChange('read')}
              className="hud-panel px-5 py-2.5 micro-label text-hud-red hover:text-ink transition-colors"
            >
              ■ STOP
            </button>
            <span className="micro-label text-hud-cyan">
              STEP {flowStep.index + 1}/{flowStep.total}
            </span>
            <span className="micro-label ml-auto">WATCH THE PARTS LIGHT UP IN ORDER</span>
          </>
        )}

        {mode === 'practice' && (
          <>
            <button
              onClick={() => onModeChange('read')}
              className="hud-panel px-5 py-2.5 micro-label text-ink-soft hover:text-hud-cyan transition-colors"
            >
              ↺ READ AGAIN
            </button>
            <button
              onClick={onNext}
              className="hud-panel px-5 py-2.5 micro-label text-hud-cyan hover:text-ink transition-colors"
            >
              NEXT THING →
            </button>
            <span className="micro-label ml-auto">SAY IT · THEN CHECK YOURSELF</span>
          </>
        )}
      </div>
    </div>
  )
}
