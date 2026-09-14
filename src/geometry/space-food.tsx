import { SketchMesh, DraftLine } from './primitives'

/** 太空食物系统 — space：食物搁架、密封袋、注水口、加热盒、屏幕、吸屑口、废物箱 */

const bagXs = [-0.18, -0.06, 0.06, 0.18]

export default function SpaceFoodSketch() {
  return (
    <group>
      {/* 外壳 decor */}
      <SketchMesh position={[0, 0.02, 0]}>
        <boxGeometry args={[0.64, 0.44, 0.32]} />
      </SketchMesh>

      {/* food-shelf */}
      <SketchMesh partId="food-shelf" position={[0, 0.10, 0]}>
        <boxGeometry args={[0.60, 0.04, 0.30]} />
      </SketchMesh>

      {/* sealed-food — 4袋 */}
      {bagXs.map((x) => (
        <SketchMesh key={`bag-${x}`} partId="sealed-food" position={[x, 0.18, 0]}>
          <boxGeometry args={[0.08, 0.12, 0.06]} />
        </SketchMesh>
      ))}

      {/* water-port */}
      <SketchMesh partId="water-port" position={[-0.30, 0.10, 0]} rotation={[0, Math.PI / 2, 0]}>
        <torusGeometry args={[0.03, 0.008, 8, 16]} />
      </SketchMesh>

      {/* heat-box */}
      <SketchMesh partId="heat-box" position={[0, -0.14, 0]}>
        <boxGeometry args={[0.30, 0.10, 0.22]} />
      </SketchMesh>

      {/* small-screen */}
      <SketchMesh partId="small-screen" position={[0.24, 0.16, 0.16]}>
        <boxGeometry args={[0.12, 0.08, 0.012]} />
      </SketchMesh>

      {/* crumb-fan */}
      <SketchMesh partId="crumb-fan" position={[-0.14, 0.20, 0]}>
        <torusGeometry args={[0.04, 0.01, 8, 16]} />
      </SketchMesh>

      {/* trash-box */}
      <SketchMesh partId="trash-box" position={[0.18, -0.28, 0]}>
        <boxGeometry args={[0.20, 0.12, 0.18]} />
      </SketchMesh>

      {/* decor — 地面线 */}
      <DraftLine points={[[-0.9, -0.40, 0], [0.9, -0.40, 0]]} />

      {/* decor — 注水滴3短划 */}
      <DraftLine points={[[-0.30, 0.06, 0], [-0.30, 0.03, 0]]} />
      <DraftLine points={[[-0.30, 0.00, 0], [-0.30, -0.03, 0]]} />
      <DraftLine points={[[-0.30, -0.06, 0], [-0.30, -0.09, 0]]} />

      {/* decor — 屏幕亮线 */}
      <DraftLine points={[[0.20, 0.18, 0.17], [0.28, 0.18, 0.17]]} />
    </group>
  )
}