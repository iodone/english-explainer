import { SketchMesh, Rod, DraftLine } from './primitives'

/** 木星 — 正视：全球体、五道云带、大红斑、薄环、双卫、极光双环 */

const ringAt = (r: number, y: number): Array<[number, number, number]> =>
  Array.from({ length: 17 }, (_, k) => {
    const a = (k / 16) * Math.PI * 2
    return [r * Math.cos(a), y, r * Math.sin(a)] as [number, number, number]
  })

const bandRings: Array<[number, number]> = [
  [-0.36, 0.482], [-0.18, 0.572], [0, 0.60], [0.18, 0.572], [0.36, 0.482],
]
const cloudRings = bandRings.map(([y, radius]) => ringAt(radius, y))
const smallRing = ringAt(0.95, 0)

const redEyeOuter: Array<[number, number, number]> = Array.from(
  { length: 13 },
  (_, k) => {
    const a = (k / 12) * Math.PI * 2
    return [
      0.30 + 0.16 * Math.cos(a),
      -0.28 + 0.09 * Math.sin(a),
      0.50,
    ] as [number, number, number]
  },
)
const redEyeInner: Array<[number, number, number]> = Array.from(
  { length: 9 },
  (_, k) => {
    const a = (k / 8) * Math.PI * 2
    return [
      0.30 + 0.10 * Math.cos(a),
      -0.28 + 0.055 * Math.sin(a),
      0.50,
    ] as [number, number, number]
  },
)

const starPositions: Array<[number, number, number]> = [
  [-1.70, 1.05, -0.50], [-1.30, 1.35, 0.20], [-0.70, 1.50, -0.70],
  [0.10, 1.60, 0.40], [0.90, 1.35, -0.30], [1.45, 1.00, 0.50],
  [-1.85, 0.35, 0.70], [1.60, -0.70, -0.50],
]

export default function JupiterSketch() {
  return (
    <group>
      <SketchMesh partId="big-ball" position={[0, 0, 0]}>
        <sphereGeometry args={[0.60, 20, 14]} />
      </SketchMesh>

      {cloudRings.map((pts, ring) =>
        pts.slice(0, -1).map((from, segment) => (
          <Rod
            key={`cloud-${ring}-${segment}`}
            from={from}
            to={pts[segment + 1]}
            radius={0.007}
            partId="cloud-lines"
          />
        )),
      )}

      {redEyeOuter.slice(0, -1).map((from, index) => (
        <Rod
          key={`red-outer-${index}`}
          from={from}
          to={redEyeOuter[index + 1]}
          radius={0.008}
          partId="red-eye"
        />
      ))}
      {redEyeInner.slice(0, -1).map((from, index) => (
        <Rod
          key={`red-inner-${index}`}
          from={from}
          to={redEyeInner[index + 1]}
          radius={0.006}
          partId="red-eye"
        />
      ))}
      <SketchMesh partId="red-eye" position={[0.30, -0.28, 0.51]}>
        <sphereGeometry args={[0.018, 10, 8]} />
      </SketchMesh>

      {smallRing.slice(0, -1).map((from, index) => (
        <Rod
          key={`small-ring-${index}`}
          from={from}
          to={smallRing[index + 1]}
          radius={0.005}
          partId="small-ring"
        />
      ))}

      <SketchMesh partId="fire-moon" position={[1.18, 0.42, -0.25]}>
        <sphereGeometry args={[0.085, 12, 10]} />
      </SketchMesh>
      <SketchMesh partId="fire-moon" position={[1.26, 0.50, -0.25]}>
        <sphereGeometry args={[0.018, 10, 8]} />
      </SketchMesh>
      <SketchMesh partId="fire-moon" position={[1.10, 0.34, -0.22]}>
        <sphereGeometry args={[0.018, 10, 8]} />
      </SketchMesh>

      <SketchMesh partId="ice-moon" position={[1.05, 0.05, -0.45]}>
        <sphereGeometry args={[0.075, 12, 10]} />
      </SketchMesh>

      <SketchMesh partId="glow-ring" position={[0, 0.50, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[0.33, 0.012, 6, 20]} />
      </SketchMesh>
      <SketchMesh partId="glow-ring" position={[0, -0.50, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[0.33, 0.012, 6, 20]} />
      </SketchMesh>

      {starPositions.map((position, index) => (
        <DraftLine
          key={`star-${index}`}
          points={[
            [position[0] - 0.03, position[1] - 0.03, position[2]],
            [position[0] + 0.03, position[1] + 0.03, position[2]],
            [position[0] - 0.03, position[1] + 0.03, position[2]],
            [position[0] + 0.03, position[1] - 0.03, position[2]],
          ]}
        />
      ))}
      <DraftLine
        points={[
          [-1.15, 1.00, 0], [-1.20, 1.087, 0], [-1.30, 1.087, 0],
          [-1.35, 1.00, 0], [-1.30, 0.913, 0], [-1.20, 0.913, 0], [-1.15, 1.00, 0],
        ]}
      />
    </group>
  )
}
