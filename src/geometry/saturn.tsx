import { SketchMesh, Rod, DraftLine } from './primitives'

/** 土星 — 全球体 + 赤道面环系 + 北极六边风暴 + 卫星家族 */

const ringAt = (r: number, y: number): Array<[number, number, number]> =>
  Array.from({ length: 17 }, (_, k) => {
    const a = (k / 16) * Math.PI * 2
    return [r * Math.cos(a), y, r * Math.sin(a)] as [number, number, number]
  })
const hexPoints: Array<[number, number, number]> = [
  [0.17, 0.53, 0], [0.085, 0.677, 0], [-0.085, 0.677, 0], [-0.17, 0.53, 0],
  [-0.085, 0.383, 0], [0.085, 0.383, 0], [0.17, 0.53, 0],
]
const moonPositions: Array<[number, number, number]> = [
  [1.30, -0.50, 0.40], [-1.15, -0.50, 0.40], [-0.90, 0.60, -0.90],
  [0.50, 0.90, 1.10], [1.50, 0.20, 0.50], [-1.40, 0.10, -0.60],
]
const moonSizes = [0.03, 0.035, 0.025, 0.03, 0.02, 0.03]
const windRings = [ringAt(0.55, 0), ringAt(0.531, 0.142), ringAt(0.531, -0.142)]
const plateRings = [ringAt(0.72, 0), ringAt(0.82, 0), ringAt(1.05, 0), ringAt(1.15, 0)]
const streetRings = [ringAt(0.90, 0), ringAt(0.95, 0)]

export default function SaturnSketch() {
  return (
    <group>
      <SketchMesh partId="round-body" position={[0, 0, 0]}>
        <sphereGeometry args={[0.55, 24, 18]} />
      </SketchMesh>

      {windRings.map((pts, ring) =>
        pts.slice(0, -1).map((from, seg) => (
          <Rod
            key={`wind-${ring}-${seg}`}
            from={from}
            to={pts[seg + 1]}
            radius={0.008}
            partId="wind-lines"
          />
        )),
      )}

      {plateRings.map((pts, ring) =>
        pts.slice(0, -1).map((from, seg) => (
          <Rod
            key={`plate-${ring}-${seg}`}
            from={from}
            to={pts[seg + 1]}
            radius={0.01}
            partId="ring-plate"
          />
        )),
      )}
      {Array.from({ length: 8 }, (_, k) => (k / 8) * Math.PI * 2).map((a, k) => (
        <Rod
          key={`tick-${k}`}
          from={[0.72 * Math.cos(a), 0, 0.72 * Math.sin(a)]}
          to={[1.15 * Math.cos(a), 0, 1.15 * Math.sin(a)]}
          radius={0.006}
          partId="ring-plate"
        />
      ))}

      {streetRings.map((pts, ring) =>
        pts.slice(0, -1).map((from, seg) => (
          <Rod
            key={`street-${ring}-${seg}`}
            from={from}
            to={pts[seg + 1]}
            radius={0.007}
            partId="dark-street"
          />
        )),
      )}

      {hexPoints.slice(0, -1).map((from, index) => (
        <Rod
          key={`hex-${index}`}
          from={from}
          to={hexPoints[index + 1]}
          radius={0.01}
          partId="top-storm"
        />
      ))}

      <SketchMesh partId="big-moon" position={[1.05, 0.75, -0.35]}>
        <sphereGeometry args={[0.10, 14, 10]} />
      </SketchMesh>

      {moonPositions.map((p, index) => (
        <SketchMesh key={`moon-${index}`} partId="moon-family" position={p}>
          <sphereGeometry args={[moonSizes[index], 10, 8]} />
        </SketchMesh>
      ))}

      <DraftLine points={[[-1.90, 1.10, -0.60], [-1.86, 1.10, -0.60]]} />
      <DraftLine points={[[-1.30, 1.45, -0.30], [-1.26, 1.45, -0.30]]} />
      <DraftLine points={[[-0.60, 1.55, -0.80], [-0.56, 1.55, -0.80]]} />
      <DraftLine points={[[0.30, 1.50, -1.00], [0.34, 1.50, -1.00]]} />
      <DraftLine points={[[1.10, 1.25, -0.70], [1.14, 1.25, -0.70]]} />
      <DraftLine points={[[1.80, 0.80, -0.20], [1.84, 0.80, -0.20]]} />
      <DraftLine points={[[-2.00, 0.30, 0.40], [-1.96, 0.30, 0.40]]} />
      <DraftLine points={[[1.60, -0.90, 0.60], [1.64, -0.90, 0.60]]} />
      <DraftLine
        points={[[1.88, 1.30, 0], [1.84, 1.369, 0], [1.76, 1.369, 0], [1.72, 1.30, 0], [1.76, 1.231, 0], [1.84, 1.231, 0], [1.88, 1.30, 0]]}
      />
    </group>
  )
}
