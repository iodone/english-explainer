import { SketchMesh, Rod, DraftLine } from './primitives'

/** 有轨电车 — transport：车身、车轮、受电弓、座位、门、窗户、轨道 */

export default function TramSketch() {
  return (
    <group>
      {/* car-body — 长车身 */}
      <SketchMesh partId="car-body" position={[0, 0.04, 0]}>
        <boxGeometry args={[0.70, 0.20, 0.24]} />
      </SketchMesh>

      {/* wheels — 4个车轮 */}
      <SketchMesh partId="wheels" position={[-0.22, -0.16, 0.12]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.04, 0.04, 0.02, 12]} />
      </SketchMesh>
      <SketchMesh partId="wheels" position={[-0.22, -0.16, -0.12]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.04, 0.04, 0.02, 12]} />
      </SketchMesh>
      <SketchMesh partId="wheels" position={[0.22, -0.16, 0.12]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.04, 0.04, 0.02, 12]} />
      </SketchMesh>
      <SketchMesh partId="wheels" position={[0.22, -0.16, -0.12]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.04, 0.04, 0.02, 12]} />
      </SketchMesh>

      {/* power-arm — 受电弓 */}
      <Rod from={[0, 0.16, 0]} to={[-0.06, 0.28, 0]} radius={0.006} partId="power-arm" />
      <Rod from={[-0.06, 0.28, 0]} to={[0.06, 0.28, 0]} radius={0.006} partId="power-arm" />
      <Rod from={[0.06, 0.28, 0]} to={[0, 0.34, 0]} radius={0.006} partId="power-arm" />

      {/* seats — 3排座位 */}
      <SketchMesh partId="seats" position={[-0.18, 0.04, 0]}>
        <boxGeometry args={[0.08, 0.08, 0.18]} />
      </SketchMesh>
      <SketchMesh partId="seats" position={[0, 0.04, 0]}>
        <boxGeometry args={[0.08, 0.08, 0.18]} />
      </SketchMesh>
      <SketchMesh partId="seats" position={[0.18, 0.04, 0]}>
        <boxGeometry args={[0.08, 0.08, 0.18]} />
      </SketchMesh>

      {/* door — 侧门 */}
      <SketchMesh partId="door" position={[0.30, 0.04, 0]}>
        <boxGeometry args={[0.02, 0.16, 0.10]} />
      </SketchMesh>

      {/* windows — 前窗 */}
      <SketchMesh partId="windows" position={[0, 0.12, 0.12]}>
        <boxGeometry args={[0.50, 0.06, 0.008]} />
      </SketchMesh>

      {/* track — 轨道 */}
      <SketchMesh partId="track" position={[0, -0.22, 0.10]}>
        <boxGeometry args={[0.90, 0.015, 0.02]} />
      </SketchMesh>
      <SketchMesh partId="track" position={[0, -0.22, -0.10]}>
        <boxGeometry args={[0.90, 0.015, 0.02]} />
      </SketchMesh>

      {/* decor — 地面线 */}
      <DraftLine points={[[-0.9, -0.28, 0], [0.9, -0.28, 0]]} />

      {/* decor — 电线 */}
      <DraftLine points={[[-0.6, 0.34, 0], [0.6, 0.34, 0]]} />
    </group>
  )
}