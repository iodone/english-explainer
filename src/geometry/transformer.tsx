import { SketchMesh, DraftLine } from './primitives'

/** 变压器 — power：油箱铁芯、绕组线圈、散热片、玻璃瓷瓶、警示牌 */

const coilYs = [-0.26, -0.20, -0.14]
const towerXs = [-0.12, 0, 0.12]
const finXs = [0.36, 0.40, 0.44, 0.48]

export default function TransformerSketch() {
  return (
    <group>
      {/* oil-box */}
      <SketchMesh partId="oil-box" position={[0, -0.20, 0]}>
        <boxGeometry args={[0.64, 0.36, 0.38]} />
      </SketchMesh>

      {/* iron-loop — 方环铁芯4盒 */}
      <SketchMesh partId="iron-loop" position={[-0.14, -0.20, 0]}>
        <boxGeometry args={[0.05, 0.24, 0.05]} />
      </SketchMesh>
      <SketchMesh partId="iron-loop" position={[0.14, -0.20, 0]}>
        <boxGeometry args={[0.05, 0.24, 0.05]} />
      </SketchMesh>
      <SketchMesh partId="iron-loop" position={[0, -0.08, 0]}>
        <boxGeometry args={[0.33, 0.05, 0.05]} />
      </SketchMesh>
      <SketchMesh partId="iron-loop" position={[0, -0.32, 0]}>
        <boxGeometry args={[0.33, 0.05, 0.05]} />
      </SketchMesh>

      {/* thin-wire-ring — 左绕组3 torus */}
      {coilYs.map((y) => (
        <SketchMesh key={`thin-${y}`} partId="thin-wire-ring" position={[-0.14, y, 0]} rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[0.06, 0.012, 8, 24]} />
        </SketchMesh>
      ))}

      {/* thick-wire-ring — 右绕组3 torus */}
      {coilYs.map((y) => (
        <SketchMesh key={`thick-${y}`} partId="thick-wire-ring" position={[0.14, y, 0]} rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[0.075, 0.018, 8, 24]} />
        </SketchMesh>
      ))}

      {/* glass-towers — 3塔 */}
      {towerXs.map((x) => (
        <SketchMesh key={`tower-${x}`} partId="glass-towers" position={[x, 0.05, 0]}>
          <boxGeometry args={[0.035, 0.14, 0.035]} />
        </SketchMesh>
      ))}

      {/* cooling-walls — 4散热片 */}
      {finXs.map((x) => (
        <SketchMesh key={`fin-${x}`} partId="cooling-walls" position={[x, -0.22, 0]}>
          <boxGeometry args={[0.018, 0.24, 0.28]} />
        </SketchMesh>
      ))}

      {/* red-sign */}
      <SketchMesh partId="red-sign" position={[-0.10, -0.20, 0.20]}>
        <boxGeometry args={[0.10, 0.10, 0.015]} />
      </SketchMesh>

      {/* decor — 地面线 */}
      <DraftLine points={[[-0.9, -0.38, 0], [0.9, -0.38, 0]]} />

      {/* decor — 左右输电杆 */}
      <SketchMesh position={[-0.55, -0.13, 0]}>
        <boxGeometry args={[0.025, 0.50, 0.025]} />
      </SketchMesh>
      <SketchMesh position={[-0.55, 0.10, 0]}>
        <boxGeometry args={[0.10, 0.02, 0.02]} />
      </SketchMesh>
      <SketchMesh position={[0.55, -0.13, 0]}>
        <boxGeometry args={[0.025, 0.50, 0.025]} />
      </SketchMesh>
      <SketchMesh position={[0.55, 0.10, 0]}>
        <boxGeometry args={[0.10, 0.02, 0.02]} />
      </SketchMesh>

      {/* decor — 左右电线 */}
      <DraftLine points={[[-0.55, 0.12, 0], [-0.12, 0.12, 0]]} />
      <DraftLine points={[[0.12, 0.12, 0], [0.55, 0.12, 0]]} />

      {/* decor — 红牌闪电折线 */}
      <DraftLine points={[[-0.115, -0.155, 0.21], [-0.095, -0.185, 0.21], [-0.108, -0.185, 0.21], [-0.088, -0.215, 0.21]]} />
    </group>
  )
}
