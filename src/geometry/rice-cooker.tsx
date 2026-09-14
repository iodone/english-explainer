import { SketchMesh, Rod, DraftLine } from './primitives'

/** 电饭煲 — home：锅、外壳、盖、按钮、蒸汽孔、电源线、把手 */

export default function RiceCookerSketch() {
  return (
    <group>
      {/* body — 外壳 */}
      <SketchMesh partId="body" position={[0, 0, 0]}>
        <cylinderGeometry args={[0.16, 0.14, 0.24, 20]} />
      </SketchMesh>

      {/* pot — 锅 */}
      <SketchMesh partId="pot" position={[0, -0.04, 0]}>
        <cylinderGeometry args={[0.13, 0.13, 0.18, 20]} />
      </SketchMesh>

      {/* lid — 盖 */}
      <SketchMesh partId="lid" position={[0, 0.18, 0]}>
        <cylinderGeometry args={[0.15, 0.16, 0.06, 20]} />
      </SketchMesh>

      {/* button — 按钮 */}
      <SketchMesh partId="button" position={[0, 0.10, 0.14]}>
        <boxGeometry args={[0.04, 0.04, 0.02]} />
      </SketchMesh>

      {/* steam-hole — 蒸汽孔 */}
      <SketchMesh partId="steam-hole" position={[0, 0.22, 0.08]}>
        <boxGeometry args={[0.04, 0.02, 0.02]} />
      </SketchMesh>

      {/* handle — 把手 */}
      <Rod from={[-0.10, 0.18, 0]} to={[-0.10, 0.24, 0]} radius={0.008} partId="handle" />
      <Rod from={[0.10, 0.18, 0]} to={[0.10, 0.24, 0]} radius={0.008} partId="handle" />
      <Rod from={[-0.10, 0.24, 0]} to={[0.10, 0.24, 0]} radius={0.008} partId="handle" />

      {/* power-wire — 电源线 */}
      <Rod from={[0, -0.14, -0.10]} to={[0.10, -0.20, -0.10]} radius={0.006} partId="power-wire" />

      {/* decor — 桌面线 */}
      <DraftLine points={[[-0.4, -0.24, 0], [0.4, -0.24, 0]]} />
    </group>
  )
}