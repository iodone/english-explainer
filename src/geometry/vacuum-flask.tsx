import { SketchMesh, Rod, DraftLine } from './primitives'

/** 保温瓶 — home：外壁、内壁、真空层、顶盖、杯、底座、把手 */

export default function VacuumFlaskSketch() {
  return (
    <group>
      {/* outer-wall — 外壁 */}
      <SketchMesh partId="outer-wall" position={[0, 0, 0]}>
        <cylinderGeometry args={[0.12, 0.12, 0.40, 20]} />
      </SketchMesh>

      {/* inner-wall — 内壁 */}
      <SketchMesh partId="inner-wall" position={[0, 0, 0]}>
        <cylinderGeometry args={[0.09, 0.09, 0.36, 20]} />
      </SketchMesh>

      {/* space-between — 真空层（装饰环） */}
      <SketchMesh partId="space-between" position={[0, 0, 0]}>
        <torusGeometry args={[0.105, 0.008, 8, 24]} />
      </SketchMesh>

      {/* top-cover — 顶盖 */}
      <SketchMesh partId="top-cover" position={[0, 0.22, 0]}>
        <cylinderGeometry args={[0.10, 0.12, 0.06, 16]} />
      </SketchMesh>

      {/* cup — 杯 */}
      <SketchMesh partId="cup" position={[0, 0.28, 0]}>
        <cylinderGeometry args={[0.08, 0.10, 0.06, 16]} />
      </SketchMesh>

      {/* bottom-part — 底座 */}
      <SketchMesh partId="bottom-part" position={[0, -0.22, 0]}>
        <cylinderGeometry args={[0.13, 0.13, 0.04, 16]} />
      </SketchMesh>

      {/* handle — 把手 */}
      <Rod from={[0.14, 0.10, 0]} to={[0.14, -0.10, 0]} radius={0.010} partId="handle" />
      <Rod from={[0.14, 0.10, 0]} to={[0.18, 0.10, 0]} radius={0.010} partId="handle" />
      <Rod from={[0.14, -0.10, 0]} to={[0.18, -0.10, 0]} radius={0.010} partId="handle" />

      {/* decor — 桌面线 */}
      <DraftLine points={[[-0.4, -0.24, 0], [0.4, -0.24, 0]]} />
    </group>
  )
}