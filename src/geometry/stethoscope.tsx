import { SketchMesh, Rod, DraftLine } from './primitives'

/** 听诊器 — home：耳件、管子、头、圆端、小端、环、Y形件 */

export default function StethoscopeSketch() {
  return (
    <group>
      {/* ear-pieces — 耳件 */}
      <SketchMesh partId="ear-pieces" position={[-0.06, 0.28, 0]}>
        <boxGeometry args={[0.04, 0.04, 0.04]} />
      </SketchMesh>
      <SketchMesh partId="ear-pieces" position={[0.06, 0.28, 0]}>
        <boxGeometry args={[0.04, 0.04, 0.04]} />
      </SketchMesh>

      {/* y-piece — Y形件 */}
      <SketchMesh partId="y-piece" position={[0, 0.22, 0]}>
        <boxGeometry args={[0.08, 0.04, 0.04]} />
      </SketchMesh>

      {/* tubes — 管子（左） */}
      <Rod from={[-0.06, 0.26, 0]} to={[-0.04, 0.14, 0]} radius={0.006} partId="tubes" />
      {/* tubes — 管子（右） */}
      <Rod from={[0.06, 0.26, 0]} to={[0.04, 0.14, 0]} radius={0.006} partId="tubes" />
      {/* tubes — 管子（主） */}
      <Rod from={[0, 0.20, 0]} to={[0, -0.08, 0]} radius={0.006} partId="tubes" />

      {/* ring — 环 */}
      <SketchMesh partId="ring" position={[0, -0.10, 0]}>
        <cylinderGeometry args={[0.04, 0.04, 0.02, 16]} />
      </SketchMesh>

      {/* head — 头 */}
      <SketchMesh partId="head" position={[0, -0.14, 0]}>
        <cylinderGeometry args={[0.05, 0.05, 0.04, 16]} />
      </SketchMesh>

      {/* round-end — 圆端 */}
      <SketchMesh partId="round-end" position={[0, -0.20, 0]}>
        <cylinderGeometry args={[0.06, 0.06, 0.02, 16]} />
      </SketchMesh>

      {/* small-end — 小端 */}
      <SketchMesh partId="small-end" position={[0.08, -0.18, 0]}>
        <cylinderGeometry args={[0.03, 0.03, 0.03, 12]} />
      </SketchMesh>

      {/* decor — 悬挂线 */}
      <DraftLine points={[[0, 0.30, 0], [0, 0.38, 0]]} />
    </group>
  )
}