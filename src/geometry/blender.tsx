import { SketchMesh, Rod, DraftLine } from './primitives'

/** 搅拌机 — home：杯体、刀片、底座、盖子、按钮、把手、电线 */

export default function BlenderSketch() {
  return (
    <group>
      {/* cup — 透明杯体 */}
      <SketchMesh partId="cup" position={[0, 0.14, 0]}>
        <cylinderGeometry args={[0.12, 0.10, 0.28, 16]} />
      </SketchMesh>

      {/* blade — 十字刀片 */}
      <SketchMesh partId="blade" position={[0, -0.02, 0]} rotation={[0, 0.4, 0]}>
        <boxGeometry args={[0.14, 0.008, 0.02]} />
      </SketchMesh>
      <SketchMesh partId="blade" position={[0, -0.02, 0]} rotation={[0, 1.1, 0]}>
        <boxGeometry args={[0.14, 0.008, 0.02]} />
      </SketchMesh>

      {/* bottom-part — 底座马达 */}
      <SketchMesh partId="bottom-part" position={[0, -0.20, 0]}>
        <cylinderGeometry args={[0.14, 0.14, 0.12, 16]} />
      </SketchMesh>

      {/* lid — 盖子 */}
      <SketchMesh partId="lid" position={[0, 0.32, 0]}>
        <cylinderGeometry args={[0.13, 0.13, 0.03, 16]} />
      </SketchMesh>

      {/* button — 按钮 */}
      <SketchMesh partId="button" position={[0, -0.14, 0.14]}>
        <boxGeometry args={[0.04, 0.04, 0.02]} />
      </SketchMesh>

      {/* handle — 把手 */}
      <SketchMesh partId="handle" position={[0.22, 0.14, 0]}>
        <boxGeometry args={[0.03, 0.18, 0.06]} />
      </SketchMesh>

      {/* power-wire — 电线 */}
      <Rod from={[0, -0.24, -0.14]} to={[0, -0.36, -0.20]} radius={0.005} partId="power-wire" />

      {/* decor — 地面线 */}
      <DraftLine points={[[-0.9, -0.34, 0], [0.9, -0.34, 0]]} />
    </group>
  )
}