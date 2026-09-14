import { SketchMesh, Rod, DraftLine } from './primitives'

/** 电风扇 — power：叶片、护罩、电机、底座、电源线、按钮、后盖 */

export default function ElectricFanSketch() {
  return (
    <group>
      {/* cover — 前护罩 */}
      <SketchMesh partId="cover" position={[0, 0.08, 0.14]}>
        <circleGeometry args={[0.16, 24]} />
      </SketchMesh>

      {/* blades — 叶片 */}
      <SketchMesh partId="blades" position={[0, 0.08, 0.10]} rotation={[0, 0, 0.3]}>
        <boxGeometry args={[0.26, 0.04, 0.01]} />
      </SketchMesh>
      <SketchMesh partId="blades" position={[0, 0.08, 0.10]} rotation={[0, 0, 1.87]}>
        <boxGeometry args={[0.26, 0.04, 0.01]} />
      </SketchMesh>
      <SketchMesh partId="blades" position={[0, 0.08, 0.10]} rotation={[0, 0, 3.44]}>
        <boxGeometry args={[0.26, 0.04, 0.01]} />
      </SketchMesh>

      {/* back-cover — 后盖 */}
      <SketchMesh partId="back-cover" position={[0, 0.08, -0.06]}>
        <circleGeometry args={[0.16, 24]} />
      </SketchMesh>

      {/* motor — 电机 */}
      <SketchMesh partId="motor" position={[0, 0.08, 0]}>
        <cylinderGeometry args={[0.04, 0.04, 0.12, 12]} />
      </SketchMesh>

      {/* stand — 底座杆 */}
      <Rod from={[0, 0.02, 0]} to={[0, -0.14, 0]} radius={0.012} partId="stand" />
      {/* stand — 底座 */}
      <SketchMesh partId="stand" position={[0, -0.16, 0]}>
        <cylinderGeometry args={[0.12, 0.14, 0.04, 16]} />
      </SketchMesh>

      {/* button — 按钮 */}
      <SketchMesh partId="button" position={[0, 0.02, 0.08]}>
        <boxGeometry args={[0.04, 0.04, 0.02]} />
      </SketchMesh>

      {/* power-wire — 电源线 */}
      <Rod from={[0, -0.18, -0.08]} to={[0.10, -0.24, -0.08]} radius={0.006} partId="power-wire" />

      {/* decor — 地面线 */}
      <DraftLine points={[[-0.4, -0.18, 0], [0.4, -0.18, 0]]} />
    </group>
  )
}