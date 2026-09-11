import { SketchMesh, Rod, DraftLine } from './primitives'

/** 帆船 — 侧视：船体轮廓、双帆三角、龙骨压载球与舵 */

const hullPoints: Array<[number, number]> = [
  [-0.72, 0.10], [-0.60, 0.12], [0.30, 0.13], [0.78, 0.17],
  [0.50, 0.00], [0.10, -0.07], [-0.35, -0.07], [-0.72, -0.05], [-0.72, 0.10],
]

export default function SailboatSketch() {
  return (
    <group>
      {hullPoints.slice(0, -1).map(([x, y], index) => (
        <Rod
          key={`hull-${index}`}
          from={[x, y, 0]}
          to={[hullPoints[index + 1][0], hullPoints[index + 1][1], 0]}
          radius={0.018}
          partId="boat-body"
        />
      ))}

      <Rod from={[0.08, 0.12, 0]} to={[0.08, 1.10, 0]} radius={0.02} partId="sky-stick" />
      <Rod from={[-0.10, 0.55, 0]} to={[0.26, 0.55, 0]} radius={0.008} partId="sky-stick" />
      <SketchMesh partId="sky-stick" position={[0.08, 1.12, 0]}>
        <sphereGeometry args={[0.025, 10, 8]} />
      </SketchMesh>

      <Rod from={[0.08, 0.18, 0]} to={[0.08, 0.98, 0]} radius={0.014} partId="main-sail" />
      <Rod from={[0.08, 0.98, 0]} to={[-0.55, 0.22, 0]} radius={0.014} partId="main-sail" />
      <Rod from={[-0.55, 0.22, 0]} to={[0.08, 0.18, 0]} radius={0.014} partId="main-sail" />

      <Rod from={[0.12, 0.88, 0]} to={[0.74, 0.18, 0]} radius={0.014} partId="front-sail" />
      <Rod from={[0.12, 0.88, 0]} to={[0.30, 0.20, 0]} radius={0.014} partId="front-sail" />
      <Rod from={[0.30, 0.20, 0]} to={[0.74, 0.18, 0]} radius={0.014} partId="front-sail" />

      <Rod from={[0.08, 0.16, 0]} to={[-0.58, 0.18, 0]} radius={0.018} partId="swing-arm" />
      <SketchMesh partId="swing-arm" position={[-0.60, 0.18, 0]}>
        <sphereGeometry args={[0.025, 10, 8]} />
      </SketchMesh>

      <Rod from={[0.15, -0.06, 0]} to={[0.01, -0.50, 0]} radius={0.02} partId="deep-fin" />
      <Rod from={[-0.08, -0.06, 0]} to={[0.01, -0.50, 0]} radius={0.02} partId="deep-fin" />
      <SketchMesh partId="deep-fin" position={[0.01, -0.56, 0]}>
        <sphereGeometry args={[0.085, 14, 10]} />
      </SketchMesh>

      <Rod from={[-0.72, 0.08, 0]} to={[-0.72, -0.10, 0]} radius={0.012} partId="tail-blade" />
      <SketchMesh partId="tail-blade" position={[-0.73, -0.17, 0]}>
        <boxGeometry args={[0.06, 0.18, 0.04]} />
      </SketchMesh>

      <DraftLine
        points={[[-1.10, -0.12, 0], [-0.95, -0.08, 0], [-0.80, -0.12, 0], [-0.65, -0.08, 0], [-0.50, -0.12, 0]]}
      />
      <DraftLine
        points={[[-0.30, -0.12, 0], [-0.15, -0.08, 0], [0, -0.12, 0], [0.15, -0.08, 0], [0.30, -0.12, 0]]}
      />
      <DraftLine
        points={[[0.50, -0.12, 0], [0.65, -0.08, 0], [0.80, -0.12, 0], [0.95, -0.08, 0], [1.10, -0.12, 0]]}
      />
      <DraftLine
        points={[[-0.60, 0.50, 0], [-0.50, 0.58, 0], [-0.38, 0.61, 0], [-0.26, 0.58, 0], [-0.16, 0.50, 0]]}
      />
      <DraftLine
        points={[[-0.72, 0.42, 0], [-0.58, 0.53, 0], [-0.40, 0.58, 0], [-0.22, 0.53, 0], [-0.06, 0.42, 0]]}
      />
      <DraftLine
        points={[[1.14, 0.95, 0], [1.095, 1.028, 0], [1.005, 1.028, 0], [0.96, 0.95, 0], [1.005, 0.872, 0], [1.095, 0.872, 0], [1.14, 0.95, 0]]}
      />
      <DraftLine points={[[-1.12, 0.90, 0], [-1.05, 0.945, 0], [-0.98, 0.90, 0]]} />
    </group>
  )
}
