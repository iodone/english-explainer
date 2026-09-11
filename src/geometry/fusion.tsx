import { SketchMesh, Rod, DraftLine } from './primitives'

/** 托卡马克 — 双环体 + 8 组 D 形线圈 + 中心柱 + 底部偏滤器环 + 低温箱 */

const ringAt = (r: number, y: number): Array<[number, number, number]> =>
  Array.from({ length: 17 }, (_, k) => {
    const a = (k / 16) * Math.PI * 2
    return [r * Math.cos(a), y, r * Math.sin(a)] as [number, number, number]
  })
const coilPoints: Array<[number, number]> = [
  [0.36, -0.60], [0.36, 0.60], [0.42, 0.74], [0.58, 0.82], [0.78, 0.84],
  [0.98, 0.76], [1.10, 0.58], [1.14, 0.30], [1.14, 0.0], [1.14, -0.30],
  [1.10, -0.58], [0.98, -0.76], [0.78, -0.84], [0.58, -0.82], [0.42, -0.74], [0.36, -0.60],
]
const coilWorlds = Array.from({ length: 8 }, (_, k) => {
  const theta = (k / 8) * Math.PI * 2
  return coilPoints.map(([r, y]) => [r * Math.cos(theta), y, r * Math.sin(theta)] as [number, number, number])
})
const fireRing = ringAt(0.70, -0.28)

export default function FusionSketch() {
  return (
    <group>
      <SketchMesh partId="ring-room" position={[0, 0, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[0.75, 0.17, 10, 28]} />
      </SketchMesh>
      <SketchMesh partId="star-ring" position={[0, 0, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[0.75, 0.045, 8, 24]} />
      </SketchMesh>

      {coilWorlds.map((pts, i) =>
        pts.slice(0, -1).map((from, j) => (
          <Rod
            key={`coil-${i}-${j}`}
            from={from}
            to={pts[j + 1]}
            radius={0.016}
            partId="hold-hands"
          />
        )),
      )}

      <SketchMesh partId="push-heart" position={[0, 0, 0]}>
        <cylinderGeometry args={[0.24, 0.24, 1.10, 20]} />
      </SketchMesh>
      <SketchMesh partId="push-heart" position={[0, 0.55, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[0.28, 0.03, 6, 20]} />
      </SketchMesh>
      <SketchMesh partId="push-heart" position={[0, -0.55, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[0.28, 0.03, 6, 20]} />
      </SketchMesh>

      <Rod from={[1.50, 0.55, 0.35]} to={[0.80, 0.10, 0.20]} radius={0.025} partId="heat-guns" />
      <Rod from={[0.35, 0.55, 1.50]} to={[0.20, 0.10, 0.80]} radius={0.025} partId="heat-guns" />
      <SketchMesh partId="heat-guns" position={[1.55, 0.58, 0.37]}>
        <boxGeometry args={[0.10, 0.10, 0.10]} />
      </SketchMesh>
      <SketchMesh partId="heat-guns" position={[0.37, 0.58, 1.55]}>
        <boxGeometry args={[0.10, 0.10, 0.10]} />
      </SketchMesh>

      {fireRing.slice(0, -1).map((from, index) => (
        <Rod
          key={`fire-${index}`}
          from={from}
          to={fireRing[index + 1]}
          radius={0.012}
          partId="fire-catcher"
        />
      ))}

      <SketchMesh partId="cold-box" position={[0, 0, 0]}>
        <cylinderGeometry args={[1.32, 1.32, 1.75, 28]} />
      </SketchMesh>
      <SketchMesh partId="cold-box" position={[0, 0.875, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[1.32, 0.015, 6, 28]} />
      </SketchMesh>
      <SketchMesh partId="cold-box" position={[0, -0.875, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[1.32, 0.015, 6, 28]} />
      </SketchMesh>

      <DraftLine points={[[-2.20, -0.90, 0], [2.20, -0.90, 0]]} />
      <DraftLine points={ringAt(1.45, -0.90)} />
      <DraftLine points={[[-1.60, -0.60, 0], [-1.60, -0.20, 0]]} />
      <DraftLine points={[[-1.65, -0.30, 0], [-1.60, -0.20, 0], [-1.55, -0.30, 0]]} />
      <DraftLine points={[[1.60, -0.60, 0], [1.60, -0.20, 0]]} />
      <DraftLine points={[[1.55, -0.30, 0], [1.60, -0.20, 0], [1.65, -0.30, 0]]} />
      <DraftLine
        points={[[-1.95, -0.90, 0], [-1.95, -0.78, 0], [-1.75, -0.78, 0], [-1.75, -0.90, 0], [-1.95, -0.90, 0]]}
      />
      <DraftLine points={[[-1.98, -0.78, 0], [-1.85, -0.66, 0], [-1.72, -0.78, 0]]} />
      <DraftLine
        points={[[-1.90, -0.86, 0], [-1.90, -0.81, 0], [-1.83, -0.81, 0], [-1.83, -0.86, 0], [-1.90, -0.86, 0]]}
      />
      <DraftLine points={[[1.75, -0.90, 0], [1.75, -0.78, 0]]} />
      <DraftLine points={[[1.66, -0.78, 0], [1.75, -0.62, 0], [1.84, -0.78, 0], [1.66, -0.78, 0]]} />
    </group>
  )
}
