import { SketchMesh, Rod, DraftLine } from './primitives'

/** 手推车 — transport：车身、轮子、把手、搁板、侧壁、前缘、刹车 */

export default function TrolleySketch() {
  return (
    <group>
      {/* cart-body — 车身 */}
      <SketchMesh partId="cart-body" position={[0, 0.04, 0]}>
        <boxGeometry args={[0.40, 0.04, 0.30]} />
      </SketchMesh>

      {/* side-walls — 侧壁 */}
      <SketchMesh partId="side-walls" position={[0, 0.08, 0.14]}>
        <boxGeometry args={[0.40, 0.08, 0.02]} />
      </SketchMesh>
      <SketchMesh partId="side-walls" position={[0, 0.08, -0.14]}>
        <boxGeometry args={[0.40, 0.08, 0.02]} />
      </SketchMesh>

      {/* front-edge — 前缘 */}
      <SketchMesh partId="front-edge" position={[0, 0.02, 0.18]}>
        <boxGeometry args={[0.40, 0.04, 0.02]} />
      </SketchMesh>

      {/* shelf — 搁板 */}
      <SketchMesh partId="lower-part" position={[0, -0.04, 0]}>
        <boxGeometry args={[0.36, 0.02, 0.26]} />
      </SketchMesh>

      {/* wheels — 轮子 */}
      <SketchMesh partId="wheels" position={[-0.16, -0.10, 0.10]}>
        <cylinderGeometry args={[0.04, 0.04, 0.02, 12]} />
      </SketchMesh>
      <SketchMesh partId="wheels" position={[0.16, -0.10, 0.10]}>
        <cylinderGeometry args={[0.04, 0.04, 0.02, 12]} />
      </SketchMesh>
      <SketchMesh partId="wheels" position={[-0.16, -0.10, -0.10]}>
        <cylinderGeometry args={[0.04, 0.04, 0.02, 12]} />
      </SketchMesh>
      <SketchMesh partId="wheels" position={[0.16, -0.10, -0.10]}>
        <cylinderGeometry args={[0.04, 0.04, 0.02, 12]} />
      </SketchMesh>

      {/* handle-bar — 把手 */}
      <Rod from={[-0.14, 0.10, -0.18]} to={[-0.14, 0.18, -0.18]} radius={0.010} partId="handle-bar" />
      <Rod from={[0.14, 0.10, -0.18]} to={[0.14, 0.18, -0.18]} radius={0.010} partId="handle-bar" />
      <Rod from={[-0.14, 0.18, -0.18]} to={[0.14, 0.18, -0.18]} radius={0.010} partId="handle-bar" />

      {/* brake — 刹车 */}
      <SketchMesh partId="brake" position={[0, -0.10, -0.14]}>
        <boxGeometry args={[0.06, 0.02, 0.04]} />
      </SketchMesh>

      {/* decor — 地面线 */}
      <DraftLine points={[[-0.6, -0.14, 0], [0.6, -0.14, 0]]} />
    </group>
  )
}