import { SketchMesh, DraftLine } from './primitives'

/** 气垫船 — transport：平底船体、软裙边、升力风扇、推进风扇、气垫、驾驶舱、转向舵 */

const bladeAngles = [0.3, 2.4, 4.5]
const propAngles = [0, 2.1, 4.2]

export default function HovercraftSketch() {
  return (
    <group>
      {/* flat-hull */}
      <SketchMesh partId="flat-hull" position={[0, 0.02, 0]}>
        <boxGeometry args={[0.72, 0.10, 0.40]} />
      </SketchMesh>

      {/* soft-skirt — 艉艉2斜盒 */}
      <SketchMesh partId="soft-skirt" position={[-0.37, -0.09, 0]} rotation={[0, 0, 0.35]}>
        <boxGeometry args={[0.12, 0.12, 0.38]} />
      </SketchMesh>
      <SketchMesh partId="soft-skirt" position={[0.37, -0.09, 0]} rotation={[0, 0, -0.35]}>
        <boxGeometry args={[0.12, 0.12, 0.38]} />
      </SketchMesh>

      {/* lift-fan — 导流环 + 3叶片 */}
      <SketchMesh partId="lift-fan" position={[0.02, 0.075, 0]}>
        <torusGeometry args={[0.10, 0.02, 8, 24]} />
      </SketchMesh>
      {bladeAngles.map((angle) => (
        <SketchMesh key={`blade-${angle}`} partId="lift-fan" position={[0.02, 0.075, 0]} rotation={[0, 0, angle]}>
          <boxGeometry args={[0.015, 0.15, 0.012]} />
        </SketchMesh>
      ))}

      {/* push-fan — 导流环侧向 + 3叶片 */}
      <SketchMesh partId="push-fan" position={[0.46, 0.02, 0]} rotation={[0, Math.PI / 2, 0]}>
        <torusGeometry args={[0.075, 0.018, 8, 24]} />
      </SketchMesh>
      {propAngles.map((angle) => (
        <SketchMesh key={`prop-${angle}`} partId="push-fan" position={[0.46, 0.02, 0]} rotation={[angle, 0, 0]}>
          <boxGeometry args={[0.012, 0.12, 0.02]} />
        </SketchMesh>
      ))}

      {/* air-bed */}
      <SketchMesh partId="air-bed" position={[0, -0.06, 0]}>
        <boxGeometry args={[0.60, 0.06, 0.38]} />
      </SketchMesh>

      {/* small-cabin — 舱体 + 窗带 */}
      <SketchMesh partId="small-cabin" position={[-0.22, 0.12, 0]}>
        <boxGeometry args={[0.16, 0.10, 0.30]} />
      </SketchMesh>
      <SketchMesh partId="small-cabin" position={[-0.22, 0.135, 0]}>
        <boxGeometry args={[0.165, 0.035, 0.28]} />
      </SketchMesh>

      {/* turn-fin */}
      <SketchMesh partId="turn-fin" position={[0.56, -0.02, 0]}>
        <boxGeometry args={[0.025, 0.12, 0.09]} />
      </SketchMesh>

      {/* decor — 水面波线 */}
      <DraftLine points={[[-0.9, -0.30, 0], [-0.6, -0.315, 0], [-0.3, -0.30, 0], [0, -0.315, 0], [0.3, -0.30, 0], [0.6, -0.315, 0], [0.9, -0.30, 0]]} />

      {/* decor — 裙边漏气4短划 */}
      <DraftLine points={[[-0.44, -0.19, 0], [-0.47, -0.16, 0]]} />
      <DraftLine points={[[0.44, -0.19, 0], [0.47, -0.16, 0]]} />
      <DraftLine points={[[-0.38, -0.17, 0], [-0.40, -0.14, 0]]} />
      <DraftLine points={[[0.38, -0.17, 0], [0.40, -0.14, 0]]} />
    </group>
  )
}
