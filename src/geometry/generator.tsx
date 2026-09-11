import { SketchMesh, Rod, DraftLine } from './primitives'

/** 发电机 — 侧视：手摇飞轮、双磁铁、线圈三环、输出线与灯泡 */

const ringAt = (r: number, y: number): Array<[number, number, number]> =>
  Array.from({ length: 17 }, (_, k) => {
    const a = (k / 16) * Math.PI * 2
    return [r * Math.cos(a), y, r * Math.sin(a)] as [number, number, number]
  })

const baseFrame: Array<[number, number, number]> = [
  [-0.80, -0.66, 0],
  [-0.80, -0.54, 0],
  [0.80, -0.54, 0],
  [0.80, -0.66, 0],
  [-0.80, -0.66, 0],
]
const wireRings = [ringAt(0.52, 0.15), ringAt(0.58, 0.15), ringAt(0.64, 0.15)]
const upperPowerLine: Array<[number, number, number]> = [
  [-0.39, 0.54, 0], [-0.72, 0.72, 0], [-1.04, 0.50, 0],
]
const lowerPowerLine: Array<[number, number, number]> = [
  [-0.39, -0.24, 0], [-0.80, -0.30, 0], [-1.04, 0.36, 0],
]

export default function GeneratorSketch() {
  return (
    <group>
      {baseFrame.slice(0, -1).map((from, index) => (
        <Rod
          key={`frame-${index}`}
          from={from}
          to={baseFrame[index + 1]}
          radius={0.016}
          partId="hold-shape"
        />
      ))}
      <Rod from={[-0.72, -0.54, 0]} to={[-0.72, 0.02, 0]} radius={0.016} partId="hold-shape" />
      <Rod from={[0.72, -0.54, 0]} to={[0.72, 0.02, 0]} radius={0.016} partId="hold-shape" />
      <SketchMesh partId="hold-shape" position={[0, 0.15, 0.42]}>
        <boxGeometry args={[0.10, 0.10, 0.12]} />
      </SketchMesh>
      <SketchMesh partId="hold-shape" position={[0, 0.15, -0.42]}>
        <boxGeometry args={[0.10, 0.10, 0.12]} />
      </SketchMesh>

      <SketchMesh partId="turn-wheel" position={[0, 0.15, 0]}>
        <torusGeometry args={[0.42, 0.025, 8, 24]} />
      </SketchMesh>
      <Rod from={[-0.38, 0.15, 0]} to={[0.38, 0.15, 0]} radius={0.010} partId="turn-wheel" />
      <Rod from={[-0.19, -0.18, 0]} to={[0.19, 0.48, 0]} radius={0.010} partId="turn-wheel" />
      <Rod from={[-0.19, 0.48, 0]} to={[0.19, -0.18, 0]} radius={0.010} partId="turn-wheel" />
      <Rod from={[0, 0.15, -0.35]} to={[0, 0.15, 0.35]} radius={0.028} partId="turn-wheel" />
      <Rod from={[0, 0.15, 0]} to={[0.58, 0.50, 0]} radius={0.018} partId="turn-wheel" />

      <SketchMesh partId="strong-magnet" position={[0, 0.39, 0]}>
        <boxGeometry args={[0.18, 0.08, 0.08]} />
      </SketchMesh>
      <SketchMesh partId="strong-magnet" position={[0, -0.09, 0]}>
        <boxGeometry args={[0.18, 0.08, 0.08]} />
      </SketchMesh>
      <SketchMesh partId="strong-magnet" position={[0.11, 0.39, 0]}>
        <sphereGeometry args={[0.02, 10, 8]} />
      </SketchMesh>
      <SketchMesh partId="strong-magnet" position={[-0.11, -0.09, 0]}>
        <sphereGeometry args={[0.02, 10, 8]} />
      </SketchMesh>

      {wireRings.map((pts, ring) =>
        pts.slice(0, -1).map((from, segment) => (
          <Rod
            key={`wire-${ring}-${segment}`}
            from={from}
            to={pts[segment + 1]}
            radius={0.007}
            partId="wire-rings"
          />
        )),
      )}

      <Rod from={[0.58, 0.50, -0.13]} to={[0.58, 0.50, 0.13]} radius={0.014} partId="hand-bar" />
      <SketchMesh partId="hand-bar" position={[0.58, 0.50, -0.14]}>
        <sphereGeometry args={[0.028, 10, 8]} />
      </SketchMesh>
      <SketchMesh partId="hand-bar" position={[0.58, 0.50, 0.14]}>
        <sphereGeometry args={[0.028, 10, 8]} />
      </SketchMesh>

      {upperPowerLine.slice(0, -1).map((from, index) => (
        <Rod
          key={`power-upper-${index}`}
          from={from}
          to={upperPowerLine[index + 1]}
          radius={0.012}
          partId="power-line"
        />
      ))}
      {lowerPowerLine.slice(0, -1).map((from, index) => (
        <Rod
          key={`power-lower-${index}`}
          from={from}
          to={lowerPowerLine[index + 1]}
          radius={0.012}
          partId="power-line"
        />
      ))}

      <SketchMesh partId="light-ball" position={[-1.12, 0.43, 0]}>
        <sphereGeometry args={[0.095, 14, 10]} />
      </SketchMesh>
      <SketchMesh partId="light-ball" position={[-1.12, 0.30, 0]}>
        <boxGeometry args={[0.07, 0.12, 0.07]} />
      </SketchMesh>
      {Array.from({ length: 6 }, (_, index) => {
        const a = (index / 6) * Math.PI * 2
        return (
          <Rod
            key={`light-ray-${index}`}
            from={[-1.12 + 0.13 * Math.cos(a), 0.43 + 0.13 * Math.sin(a), 0]}
            to={[-1.12 + 0.22 * Math.cos(a), 0.43 + 0.22 * Math.sin(a), 0]}
            radius={0.006}
            partId="light-ball"
          />
        )
      })}

      <DraftLine points={[[-1.20, -0.78, 0], [1.20, -0.78, 0]]} />
      <DraftLine
        points={[[0.60, -0.20, 0], [0.80, -0.05, 0], [0.95, -0.20, 0], [1.10, -0.35, 0]]}
      />
      <DraftLine
        points={[[0.70, -0.25, 0], [0.90, -0.10, 0], [1.05, -0.25, 0], [1.20, -0.40, 0]]}
      />
      <DraftLine
        points={[[-1.35, 0.55, 0], [-1.28, 0.48, 0], [-1.34, 0.42, 0]]}
      />
    </group>
  )
}
