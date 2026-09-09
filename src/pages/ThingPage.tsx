import { useParams, Link } from 'react-router-dom'
import { getThingBySlug } from '../data/things'
import ThingScene from '../components/ThingScene'
import LeftPanel from '../components/LeftPanel'
import RightPanel from '../components/RightPanel'
import ThingDescription from '../components/ThingDescription'

/**
 * ThingPage — immersive HUD dashboard for a single thing
 *
 * Layout:
 * ┌──────────────────────────────────────────────┐
 * │                  STATUS BAR                   │
 * ├──────────┬───────────────────┬───────────────┤
 * │          │                   │               │
 * │  LEFT    │    CENTRAL 3D     │    RIGHT      │
 * │  PANEL   │    WIREFRAME      │    PANEL      │
 * │  (data)  │    (interactive)  │    (registry) │
 * │          │                   │               │
 * ├──────────┴───────────────────┴───────────────┤
 * │              DESCRIPTION AREA                 │
 * └──────────────────────────────────────────────┘
 */
export default function ThingPage() {
  const { slug } = useParams<{ slug: string }>()
  const thing = getThingBySlug(slug || '')

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

  return (
    <div className="flex-1 flex flex-col">
      {/* Thing header */}
      <div className="px-6 py-4 flex items-center justify-between border-b border-canvas-grid">
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
          <span className="micro-label" style={{ color: thing.color }}>ACTIVE</span>
        </div>
      </div>

      {/* Main dashboard layout */}
      <div className="flex-1 flex overflow-hidden">
        {/* Left panel — data visualizations */}
        <aside className="w-72 border-r border-canvas-grid overflow-y-auto">
          <LeftPanel thing={thing} />
        </aside>

        {/* Central 3D scene */}
        <div className="flex-1 relative">
          <ThingScene thing={thing} />
        </div>

        {/* Right panel — subsystem registry */}
        <aside className="w-72 border-l border-canvas-grid overflow-y-auto">
          <RightPanel thing={thing} />
        </aside>
      </div>

      {/* Bottom description */}
      <ThingDescription thing={thing} />
    </div>
  )
}