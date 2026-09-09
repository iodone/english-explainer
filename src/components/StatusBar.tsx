import { useLocation, Link } from 'react-router-dom'

/**
 * StatusBar — top HUD bar with navigation and system info
 */
export default function StatusBar() {
  const location = useLocation()

  return (
    <header className="hud-panel flex items-center justify-between px-6 py-3 z-10">
      {/* Left: logo / home link */}
      <Link to="/" className="flex items-center gap-3 no-underline">
        <span className="micro-label text-hud-cyan">SYS</span>
        <span className="thing-title text-lg text-ink">
          Thing Explainer
        </span>
      </Link>

      {/* Center: primary navigation */}
      <nav className="flex items-center gap-2">
        <span className="micro-label">NAV</span>
        <Link
          to="/"
          className={`font-mono text-[10px] uppercase tracking-[0.08em] no-underline transition-colors ${
            location.pathname === '/' ? 'text-hud-cyan' : 'text-ink-faint hover:text-ink-soft'
          }`}
        >
          HOME
        </Link>
        <Link
          to="/words"
          className={`font-mono text-[10px] uppercase tracking-[0.08em] no-underline transition-colors ${
            location.pathname === '/words' ? 'text-hud-cyan' : 'text-ink-faint hover:text-ink-soft'
          }`}
        >
          WORDS
        </Link>
      </nav>

      {/* Right: status indicators */}
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-hud-green status-blink" />
          <span className="micro-label">ONLINE</span>
        </div>
        <span className="font-mono text-xs text-ink-faint">
          {new Date().toISOString().slice(0, 10)}
        </span>
      </div>
    </header>
  )
}
