import { SketchMesh, Rod, DraftLine } from './primitives'

/** 太空手套 — space：外层、内层、手指、腕环、加热线、胶垫、掌心 */

export default function SpaceGloveSketch() {
  return (
    <group>
      {/* outer-layer — 外层 */}
      <SketchMesh partId="outer-layer" position={[0, 0, 0.04]}>
        <boxGeometry args={[0.14, 0.28, 0.10]} />
      </SketchMesh>

      {/* inner-layer — 内层 */}
      <SketchMesh partId="inner-layer" position={[0, 0, 0]}>
        <boxGeometry args={[0.12, 0.26, 0.08]} />
      </SketchMesh>

      {/* fingers — 手指 */}
      <SketchMesh partId="fingers" position={[-0.04, 0.16, 0.04]}>
        <boxGeometry args={[0.02, 0.08, 0.04]} />
      </SketchMesh>
      <SketchMesh partId="fingers" position={[-0.01, 0.18, 0.04]}>
        <boxGeometry args={[0.02, 0.10, 0.04]} />
      </SketchMesh>
      <SketchMesh partId="fingers" position={[0.02, 0.17, 0.04]}>
        <boxGeometry args={[0.02, 0.09, 0.04]} />
      </SketchMesh>
      <SketchMesh partId="fingers" position={[0.05, 0.15, 0.04]}>
        <boxGeometry args={[0.02, 0.07, 0.04]} />
      </SketchMesh>

      {/* rubber-tips — 胶垫 */}
      <SketchMesh partId="rubber-tips" position={[-0.01, 0.22, 0.06]}>
        <boxGeometry args={[0.08, 0.02, 0.02]} />
      </SketchMesh>

      {/* palm — 掌心 */}
      <SketchMesh partId="palm" position={[0, 0.02, 0.06]}>
        <boxGeometry args={[0.10, 0.10, 0.02]} />
      </SketchMesh>

      {/* wrist-ring — 腕环 */}
      <SketchMesh partId="hand-ring" position={[0, -0.14, 0]}>
        <cylinderGeometry args={[0.06, 0.06, 0.04, 16]} />
      </SketchMesh>

      {/* heater-wire — 加热线 */}
      <Rod from={[0, -0.06, -0.04]} to={[0, 0.06, -0.04]} radius={0.004} partId="heater-wire" />

      {/* decor — 悬挂线 */}
      <DraftLine points={[[0, 0.22, 0], [0, 0.32, 0]]} />
    </group>
  )
}