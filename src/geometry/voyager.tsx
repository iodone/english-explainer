import { SketchMesh, Rod, DraftLine } from './primitives'

/** 旅行者号 — 侧视：大耳碟、十边舱、金唱片、长臂与推进器 */

const thrustClusters: Array<[number, number, number]> = [
  [0.05, -0.18, 0.12],
  [0.30, -0.12, -0.10],
]
const thrustRays: Array<[number, number, number]> = [
  [0.07, -0.05, 0],
  [0.08, 0.01, 0.02],
  [0.03, -0.08, 0.02],
]
const circleAt = (radius: number, x: number, y: number): Array<[number, number, number]> =>
  Array.from({ length: 9 }, (_, k) => {
    const a = (k / 8) * Math.PI * 2
    return [x + radius * Math.cos(a), y + radius * Math.sin(a), 0] as [number, number, number]
  })
const stars = [
  circleAt(0.012, -0.75, 0.55),
  circleAt(0.012, 0.05, 0.72),
  circleAt(0.012, 0.75, 0.45),
  circleAt(0.010, -0.45, 0.68),
  circleAt(0.010, 0.45, 0.62),
]

export default function VoyagerSketch() {
  return (
    <group>
      <SketchMesh partId="big-ear-dish" position={[-0.52, 0.12, 0]} rotation={[0, 0, 1.27]}>
        <cylinderGeometry args={[0.045, 0.34, 0.10, 20]} />
      </SketchMesh>
      <Rod from={[-0.08, 0.06, 0]} to={[-0.44, 0.12, 0]} radius={0.008} partId="big-ear-dish" />
      <Rod from={[-0.52, 0.12, 0]} to={[-0.84, 0.30, 0]} radius={0.006} partId="big-ear-dish" />
      <SketchMesh partId="big-ear-dish" position={[-0.84, 0.30, 0]}>
        <sphereGeometry args={[0.03, 8, 6]} />
      </SketchMesh>

      <SketchMesh partId="ten-side-box" position={[0.10, 0, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.26, 0.26, 0.09, 10]} />
      </SketchMesh>

      <Rod from={[0.30, -0.09, 0]} to={[0.78, -0.30, 0]} radius={0.008} partId="long-arm" />
      <Rod from={[0.42, -0.09, 0]} to={[0.66, -0.30, 0]} radius={0.004} partId="long-arm" />
      <Rod from={[0.42, -0.30, 0]} to={[0.66, -0.09, 0]} radius={0.004} partId="long-arm" />

      <SketchMesh partId="warm-heart" position={[0.82, -0.32, 0]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.055, 0.055, 0.17, 10]} />
      </SketchMesh>
      <Rod from={[0.78, -0.32, 0]} to={[0.78, -0.32, 0.07]} radius={0.005} partId="warm-heart" />
      <Rod from={[0.78, -0.32, 0]} to={[0.78, -0.32, -0.07]} radius={0.005} partId="warm-heart" />
      <Rod from={[0.86, -0.32, 0]} to={[0.86, -0.32, 0.07]} radius={0.005} partId="warm-heart" />
      <Rod from={[0.86, -0.32, 0]} to={[0.86, -0.32, -0.07]} radius={0.005} partId="warm-heart" />

      <SketchMesh partId="gold-record" position={[0.05, 0.13, 0.055]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.10, 0.10, 0.014, 24]} />
      </SketchMesh>
      <SketchMesh partId="gold-record" position={[0.05, 0.13, 0.068]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[0.018, 0.006, 6, 14]} />
      </SketchMesh>

      <Rod from={[0.34, 0.13, 0]} to={[0.34, 0.30, 0]} radius={0.007} partId="camera-eyes" />
      <SketchMesh partId="camera-eyes" position={[0.28, 0.34, -0.05]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.035, 0.035, 0.07, 10]} />
      </SketchMesh>
      <SketchMesh partId="camera-eyes" position={[0.40, 0.34, 0.05]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.035, 0.035, 0.07, 10]} />
      </SketchMesh>

      {thrustClusters.map(([x, y, z], cluster) =>
        thrustRays.map(([dx, dy, dz], ray) => (
          <Rod
            key={`thrust-${cluster}-${ray}`}
            from={[x, y, z]}
            to={[x + dx, y + dy, z + dz]}
            radius={0.004}
            partId="little-fire-pushers"
          />
        )),
      )}

      {stars.map((points, index) => (
        <DraftLine key={`star-${index}`} points={points} />
      ))}
      <SketchMesh position={[0.88, -0.60, 0]}>
        <sphereGeometry args={[0.055, 12, 10]} />
      </SketchMesh>
      <SketchMesh position={[0.88, -0.60, 0]} rotation={[1.25, 0, 0]}>
        <torusGeometry args={[0.095, 0.005, 8, 22]} />
      </SketchMesh>
      <DraftLine points={circleAt(0.06, -0.90, 0.35)} />
      <Rod from={[-1.00, 0.35, 0]} to={[-1.06, 0.35, 0]} radius={0.004} />
      <Rod from={[-0.90, 0.45, 0]} to={[-0.90, 0.51, 0]} radius={0.004} />
      <Rod from={[-0.82, 0.41, 0]} to={[-0.76, 0.46, 0]} radius={0.004} />
      <Rod from={[-0.98, 0.26, 0]} to={[-1.03, 0.21, 0]} radius={0.004} />
    </group>
  )
}
