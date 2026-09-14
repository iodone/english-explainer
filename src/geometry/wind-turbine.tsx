import { SketchMesh, DraftLine } from './primitives'

/** 风力发电机 — power：高塔、三叶片、机舱、轮毂、发电机、尾翼、基座 */
const towerYs = [-0.28, -0.10, 0.08]
const bladeAngles = [0.8, 2.9, 5.0]

export default function WindTurbineSketch() {
  return (
    <group>
      {/* ground-part */}
      <SketchMesh partId="ground-part" position={[0, -0.40, 0]}>
        <boxGeometry args={[0.30, 0.04, 0.30]} />
      </SketchMesh>

      {/* tower — 3段 */}
      {towerYs.map((y) => (
        <SketchMesh key={`tower-${y}`} partId="tower" position={[0, y, 0]}>
          <boxGeometry args={[0.06, 0.20, 0.06]} />
        </SketchMesh>
      ))}

      {/* engine-box */}
      <SketchMesh partId="engine-box" position={[0, 0.30, 0]}>
        <boxGeometry args={[0.14, 0.08, 0.10]} />
      </SketchMesh>

      {/* middle-part */}
      <SketchMesh partId="middle-part" position={[0, 0.30, 0.06]}>
        <sphereGeometry args={[0.03, 12, 10]} />
      </SketchMesh>

      {/* blades — 3片 */}
      {bladeAngles.map((angle) => (
        <SketchMesh
          key={`blade-${angle}`}
          partId="blades"
          position={[0, 0.30, 0.06]}
          rotation={[0, 0, angle]}
        >
          <boxGeometry args={[0.015, 0.22, 0.012]} />
        </SketchMesh>
      ))}

      {/* power-box */}
      <SketchMesh partId="power-box" position={[0, 0.28, -0.04]}>
        <boxGeometry args={[0.06, 0.05, 0.06]} />
      </SketchMesh>

      {/* tail-fin */}
      <SketchMesh partId="tail-fin" position={[-0.18, 0.32, 0]}>
        <boxGeometry args={[0.12, 0.04, 0.008]} />
      </SketchMesh>

      {/* decor — 地面线 */}
      <DraftLine points={[[-0.9, -0.42, 0], [0.9, -0.42, 0]]} />

      {/* decor — 风线3短划 */}
      <DraftLine points={[[-0.50, 0.35, 0], [-0.40, 0.35, 0]]} />
      <DraftLine points={[[-0.55, 0.28, 0], [-0.42, 0.28, 0]]} />
      <DraftLine points={[[-0.48, 0.21, 0], [-0.38, 0.21, 0]]} />
    </group>
  )
}