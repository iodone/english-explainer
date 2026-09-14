import { SketchMesh, Rod, DraftLine } from './primitives'

/** 单轨列车 — transport：车厢、轨道、轮子、窗户、门、受电弓、座椅 */

export default function MonorailSketch() {
  return (
    <group>
      {/* rail — 轨道 */}
      <SketchMesh partId="rail" position={[0, -0.08, 0]}>
        <boxGeometry args={[0.70, 0.06, 0.08]} />
      </SketchMesh>

      {/* car-body — 车厢 */}
      <SketchMesh partId="car-body" position={[0, 0.08, 0]}>
        <boxGeometry args={[0.60, 0.22, 0.24]} />
      </SketchMesh>

      {/* wheels — 轮子 */}
      <SketchMesh partId="wheels" position={[-0.18, -0.02, 0]}>
        <cylinderGeometry args={[0.04, 0.04, 0.20, 12]} />
      </SketchMesh>
      <SketchMesh partId="wheels" position={[0.18, -0.02, 0]}>
        <cylinderGeometry args={[0.04, 0.04, 0.20, 12]} />
      </SketchMesh>

      {/* windows — 窗户 */}
      <SketchMesh partId="windows" position={[-0.20, 0.12, 0.12]}>
        <boxGeometry args={[0.10, 0.08, 0.01]} />
      </SketchMesh>
      <SketchMesh partId="windows" position={[0, 0.12, 0.12]}>
        <boxGeometry args={[0.10, 0.08, 0.01]} />
      </SketchMesh>
      <SketchMesh partId="windows" position={[0.20, 0.12, 0.12]}>
        <boxGeometry args={[0.10, 0.08, 0.01]} />
      </SketchMesh>

      {/* door — 门 */}
      <SketchMesh partId="door" position={[0.18, 0.04, 0.12]}>
        <boxGeometry args={[0.08, 0.14, 0.01]} />
      </SketchMesh>

      {/* seats — 座椅 */}
      <SketchMesh partId="seats" position={[-0.15, 0.02, 0]}>
        <boxGeometry args={[0.08, 0.06, 0.16]} />
      </SketchMesh>
      <SketchMesh partId="seats" position={[0.15, 0.02, 0]}>
        <boxGeometry args={[0.08, 0.06, 0.16]} />
      </SketchMesh>

      {/* power-arm — 受电弓 */}
      <Rod from={[0, 0.20, 0]} to={[0, 0.32, 0]} radius={0.008} partId="power-arm" />
      <Rod from={[-0.08, 0.32, 0]} to={[0.08, 0.32, 0]} radius={0.006} partId="power-arm" />

      {/* decor — 地面线 */}
      <DraftLine points={[[-0.6, -0.28, 0], [0.6, -0.28, 0]]} />
    </group>
  )
}