import { useEffect, useRef, useState } from 'react'
import type { ThingData } from '../data/things'

/**
 * LeftPanel — HUD data visualizations
 * Waveform, radar chart, bar stats, power gauge
 */
export default function LeftPanel({ thing }: { thing: ThingData }) {
  return (
    <div className="p-4 space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <span className="micro-label text-hud-cyan">DATA PANEL</span>
        <span className="font-mono text-[10px] text-ink-faint">L-01</span>
      </div>

      {/* Waveform — neural activity style */}
      <WaveformPanel thing={thing} />

      {/* Power gauge */}
      <PowerGauge value={thing.hudMetrics.power} color={thing.color} />

      {/* Complexity radar */}
      <ComplexityPanel value={thing.hudMetrics.complexity} />

      {/* Year timeline */}
      <TimelinePanel year={thing.hudMetrics.yearInvented} />

      {/* Word count */}
      <WordCountPanel count={thing.hudMetrics.wordCount} />

      {/* Fun facts */}
      <FunFactsPanel facts={thing.funFacts} />
    </div>
  )
}

/* ─── Waveform ─── */

function WaveformPanel({ thing }: { thing: ThingData }) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animRef = useRef<number>(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')!
    const W = canvas.width
    const H = canvas.height
    let phase = 0

    const draw = () => {
      ctx.clearRect(0, 0, W, H)
      ctx.strokeStyle = thing.color + '80'
      ctx.lineWidth = 1.5
      ctx.beginPath()

      for (let x = 0; x < W; x++) {
        const y = H / 2 + Math.sin(x * 0.03 + phase) * 15 * Math.sin(x * 0.01 + phase * 0.5)
          + Math.sin(x * 0.07 + phase * 1.3) * 8
        if (x === 0) ctx.moveTo(x, y)
        else ctx.lineTo(x, y)
      }
      ctx.stroke()

      // Second layer
      ctx.strokeStyle = '#3ECFCF40'
      ctx.beginPath()
      for (let x = 0; x < W; x++) {
        const y = H / 2 + Math.cos(x * 0.04 + phase * 0.7) * 12
          + Math.sin(x * 0.02 + phase) * 6
        if (x === 0) ctx.moveTo(x, y)
        else ctx.lineTo(x, y)
      }
      ctx.stroke()

      phase += 0.02
      animRef.current = requestAnimationFrame(draw)
    }

    draw()
    return () => cancelAnimationFrame(animRef.current)
  }, [thing.color])

  return (
    <div className="hud-panel p-3">
      <div className="flex items-center justify-between mb-2">
        <span className="micro-label">NEURAL ACTIVITY</span>
        <span className="w-1.5 h-1.5 rounded-full bg-hud-cyan status-blink" />
      </div>
      <canvas ref={canvasRef} width={240} height={60} className="w-full" />
    </div>
  )
}

/* ─── Power Gauge ─── */

function PowerGauge({ value, color }: { value: number; color: string }) {
  const [animated, setAnimated] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => setAnimated(value), 100)
    return () => clearTimeout(timer)
  }, [value])

  return (
    <div className="hud-panel p-3">
      <div className="flex items-center justify-between mb-2">
        <span className="micro-label">POWER OUTPUT</span>
        <span className="font-mono text-xs" style={{ color }}>{animated}%</span>
      </div>
      <div className="w-full h-2 bg-canvas-dark rounded-full overflow-hidden">
        <div
          className="h-full rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${animated}%`, backgroundColor: color }}
        />
      </div>
      {/* Segmented bar */}
      <div className="flex gap-0.5 mt-2">
        {Array.from({ length: 10 }).map((_, i) => (
          <div
            key={i}
            className="flex-1 h-1 rounded-sm transition-all duration-500"
            style={{
              backgroundColor: i < Math.ceil(animated / 10) ? color : 'rgba(180,170,155,0.15)',
              transitionDelay: `${i * 50}ms`,
            }}
          />
        ))}
      </div>
    </div>
  )
}

/* ─── Complexity Panel ─── */

function ComplexityPanel({ value }: { value: number }) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')!
    const W = canvas.width
    const H = canvas.height
    const cx = W / 2
    const cy = H / 2
    const r = Math.min(W, H) / 2 - 10

    ctx.clearRect(0, 0, W, H)

    // Background circles
    for (let i = 1; i <= 4; i++) {
      ctx.beginPath()
      ctx.arc(cx, cy, (r / 4) * i, 0, Math.PI * 2)
      ctx.strokeStyle = 'rgba(180,170,155,0.15)'
      ctx.lineWidth = 0.5
      ctx.stroke()
    }

    // Axes
    const axes = ['STRUCTURE', 'MATERIALS', 'ENERGY', 'MOVEMENT', 'CONTROL']
    const values = [
      value / 100,
      (value * 0.8) / 100,
      (value * 0.9) / 100,
      (value * 0.6) / 100,
      (value * 0.85) / 100,
    ]

    ctx.beginPath()
    axes.forEach((_, i) => {
      const angle = (Math.PI * 2 * i) / axes.length - Math.PI / 2
      const x = cx + Math.cos(angle) * r * values[i]
      const y = cy + Math.sin(angle) * r * values[i]
      if (i === 0) ctx.moveTo(x, y)
      else ctx.lineTo(x, y)
    })
    ctx.closePath()
    ctx.fillStyle = 'rgba(62, 207, 207, 0.1)'
    ctx.fill()
    ctx.strokeStyle = '#3ECFCF'
    ctx.lineWidth = 1.5
    ctx.stroke()

    // Axis labels
    ctx.font = '8px JetBrains Mono, monospace'
    ctx.fillStyle = '#8E8678'
    ctx.textAlign = 'center'
    axes.forEach((label, i) => {
      const angle = (Math.PI * 2 * i) / axes.length - Math.PI / 2
      const x = cx + Math.cos(angle) * (r + 8)
      const y = cy + Math.sin(angle) * (r + 8)
      ctx.fillText(label, x, y)
    })
  }, [value])

  return (
    <div className="hud-panel p-3">
      <div className="flex items-center justify-between mb-2">
        <span className="micro-label">COMPLEXITY MAP</span>
        <span className="font-mono text-xs text-ink-faint">{value}/100</span>
      </div>
      <canvas ref={canvasRef} width={240} height={180} className="w-full" />
    </div>
  )
}

/* ─── Timeline ─── */

function TimelinePanel({ year }: { year: number }) {
  const currentYear = new Date().getFullYear()
  const progress = ((year - 1800) / (currentYear - 1800)) * 100

  return (
    <div className="hud-panel p-3">
      <div className="flex items-center justify-between mb-2">
        <span className="micro-label">YEAR INVENTED</span>
        <span className="font-mono text-xs text-hud-cyan">{year}</span>
      </div>
      <div className="relative h-4">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full h-px bg-ink-faint" />
        </div>
        <div
          className="absolute top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-hud-cyan"
          style={{ left: `${progress}%` }}
        />
      </div>
      <div className="flex justify-between mt-1">
        <span className="font-mono text-[9px] text-ink-faint">1800</span>
        <span className="font-mono text-[9px] text-ink-faint">{currentYear}</span>
      </div>
    </div>
  )
}

/* ─── Word Count ─── */

function WordCountPanel({ count }: { count: number }) {
  return (
    <div className="hud-panel p-3">
      <div className="flex items-center justify-between mb-2">
        <span className="micro-label">SIMPLE WORDS USED</span>
        <span className="font-mono text-xs text-hud-green">{count}</span>
      </div>
      <div className="flex gap-0.5">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="flex-1 h-3 rounded-sm"
            style={{
              backgroundColor: i < Math.ceil(count / 5) ? '#4ADE8060' : 'rgba(180,170,155,0.1)',
            }}
          />
        ))}
      </div>
      <p className="font-mono text-[9px] text-ink-faint mt-1">
        OF 1000 MOST COMMON WORDS
      </p>
    </div>
  )
}

/* ─── Fun Facts ─── */

function FunFactsPanel({ facts }: { facts: string[] }) {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setActive(prev => (prev + 1) % facts.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [facts.length])

  return (
    <div className="hud-panel p-3">
      <div className="flex items-center justify-between mb-2">
        <span className="micro-label">DID YOU KNOW</span>
        <span className="font-mono text-[10px] text-ink-faint">
          {active + 1}/{facts.length}
        </span>
      </div>
      <p className="text-sm text-ink-soft leading-relaxed">
        {facts[active]}
      </p>
      {/* Dots */}
      <div className="flex gap-1 mt-2">
        {facts.map((_, i) => (
          <div
            key={i}
            className="w-1 h-1 rounded-full transition-all"
            style={{
              backgroundColor: i === active ? '#3ECFCF' : 'rgba(180,170,155,0.3)',
            }}
          />
        ))}
      </div>
    </div>
  )
}