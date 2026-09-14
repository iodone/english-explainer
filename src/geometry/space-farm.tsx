import { SketchMesh, Rod, DraftLine } from './primitives'

/** 太空农场 — space：水培箱体、LED 灯板、水管、透明围护、营养液箱 */

const trayXs = [-0.14, 0, 0.14]
const holeYs = [0.08, 0.18]

export default function SpaceFarmSketch() {
  return (
    <group>
      {/* food-tank */}
      <SketchMesh partId="food-tank" position={[0, -0.26, 0]}>
        <boxGeometry args={[0.56, 0.14, 0.34]} />
      </SketchMesh>

      {/* plant-tray — 3条 */}
      {trayXs.map((x) => (
        <SketchMesh key={`tray-${x}`} partId="plant-tray" position={[x, 0.02, 0]}>
          <boxGeometry args={[0.10, 0.02, 0.28]} />
        </SketchMesh>
      ))}

      {/* see-cover — 4面围合 */}
      <SketchMesh partId="see-cover" position={[-0.29, 0.14, 0]}>
        <boxGeometry args={[0.012, 0.28, 0.34]} />
      </SketchMesh>
      <SketchMesh partId="see-cover" position={[0.29, 0.14, 0]}>
        <boxGeometry args={[0.012, 0.28, 0.34]} />
      </SketchMesh>
      <SketchMesh partId="see-cover" position={[0, 0.14, 0.17]}>
        <boxGeometry args={[0.58, 0.28, 0.012]} />
      </SketchMesh>
      <SketchMesh partId="see-cover" position={[0, 0.28, 0]}>
        <boxGeometry args={[0.58, 0.012, 0.34]} />
      </SketchMesh>

      {/* grow-light */}
      <SketchMesh partId="grow-light" position={[0, 0.28, 0]}>
        <boxGeometry args={[0.52, 0.02, 0.30]} />
      </SketchMesh>

      {/* water-pipe — 2 Rod */}
      <Rod from={[0.36, -0.19, 0]} to={[0.36, 0.25, 0]} radius={0.006} partId="water-pipe" />
      <Rod from={[0.36, 0.25, 0]} to={[0, 0.25, 0]} radius={0.006} partId="water-pipe" />

      {/* air-hole — 2 torus */}
      {holeYs.map((y) => (
        <SketchMesh key={`hole-${y}`} partId="air-hole" position={[-0.29, y, 0]} rotation={[0, Math.PI / 2, 0]}>
          <torusGeometry args={[0.025, 0.006, 8, 16]} />
        </SketchMesh>
      ))}

      {/* control-box */}
      <SketchMesh partId="control-box" position={[0.38, -0.16, 0]}>
        <boxGeometry args={[0.12, 0.16, 0.14]} />
      </SketchMesh>

      {/* decor — 地面线 */}
      <DraftLine points={[[-0.9, -0.40, 0], [0.9, -0.40, 0]]} />

      {/* decor — 水滴3短划 */}
      <DraftLine points={[[0.36, 0.20, 0], [0.36, 0.17, 0]]} />
      <DraftLine points={[[0.36, 0.14, 0], [0.36, 0.11, 0]]} />
      <DraftLine points={[[0.36, 0.08, 0], [0.36, 0.05, 0]]} />

      {/* decor — 箱体底座 */}
      <SketchMesh position={[0, -0.345, 0]}>
        <boxGeometry args={[0.60, 0.03, 0.38]} />
      </SketchMesh>
    </group>
  )
}