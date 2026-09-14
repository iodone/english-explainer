import { SketchMesh, Rod, DraftLine } from './primitives'

/** 太空头盔 — space：外壳、面罩、颈环、气管、通讯器、头垫、头灯 */

export default function SpaceHelmetSketch() {
  return (
    <group>
      {/* shell — 外壳 */}
      <SketchMesh partId="hard-cover" position={[0, 0, 0]}>
        <sphereGeometry args={[0.20, 24, 16]} />
      </SketchMesh>

      {/* glass-front — 面罩 */}
      <SketchMesh partId="glass-front" position={[0, 0.04, 0.16]}>
        <boxGeometry args={[0.22, 0.14, 0.02]} />
      </SketchMesh>

      {/* neck-ring — 颈环 */}
      <SketchMesh partId="neck-ring" position={[0, -0.18, 0]}>
        <cylinderGeometry args={[0.14, 0.14, 0.04, 20]} />
      </SketchMesh>

      {/* air-pipe — 气管 */}
      <Rod from={[0.16, -0.10, 0]} to={[0.22, -0.18, 0]} radius={0.010} partId="air-pipe" />

      {/* talk-box — 通讯器 */}
      <SketchMesh partId="talk-box" position={[0, -0.08, 0.10]}>
        <boxGeometry args={[0.06, 0.04, 0.03]} />
      </SketchMesh>

      {/* head-pad — 头垫 */}
      <SketchMesh partId="head-pad" position={[0, 0.06, -0.10]}>
        <boxGeometry args={[0.14, 0.10, 0.04]} />
      </SketchMesh>

      {/* light — 头灯 */}
      <SketchMesh partId="light" position={[0, 0.16, 0.14]}>
        <boxGeometry args={[0.04, 0.04, 0.03]} />
      </SketchMesh>

      {/* decor — 悬挂线 */}
      <DraftLine points={[[0, 0.22, 0], [0, 0.32, 0]]} />
    </group>
  )
}