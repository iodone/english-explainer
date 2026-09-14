import { SketchMesh, Rod, DraftLine } from './primitives'

/** 热水器 — power：水箱、冷水入口、热水出口、加热部件、温度把手、电线、安全阀 */

export default function WaterHeaterSketch() {
  return (
    <group>
      {/* tank — 水箱 */}
      <SketchMesh partId="tank" position={[0, 0, 0]}>
        <cylinderGeometry args={[0.16, 0.16, 0.44, 16]} />
      </SketchMesh>

      {/* water-in — 冷水入口 */}
      <SketchMesh partId="water-in" position={[-0.20, 0.18, 0]}>
        <boxGeometry args={[0.06, 0.04, 0.04]} />
      </SketchMesh>
      <Rod from={[-0.20, 0.18, 0]} to={[-0.16, 0.18, 0]} radius={0.006} partId="water-in" />

      {/* water-out — 热水出口 */}
      <SketchMesh partId="water-out" position={[0.20, 0.18, 0]}>
        <boxGeometry args={[0.06, 0.04, 0.04]} />
      </SketchMesh>
      <Rod from={[0.20, 0.18, 0]} to={[0.16, 0.18, 0]} radius={0.006} partId="water-out" />

      {/* heat-part — 加热部件 */}
      <SketchMesh partId="heat-part" position={[0, -0.16, 0]}>
        <boxGeometry args={[0.20, 0.04, 0.10]} />
      </SketchMesh>

      {/* temperature-handle — 温度把手 */}
      <SketchMesh partId="temperature-handle" position={[0, -0.06, 0.14]}>
        <boxGeometry args={[0.08, 0.04, 0.02]} />
      </SketchMesh>

      {/* power-wire — 电线 */}
      <Rod from={[0, -0.24, -0.10]} to={[0, -0.34, -0.16]} radius={0.005} partId="power-wire" />

      {/* safety-valve — 安全阀 */}
      <SketchMesh partId="safety-valve" position={[0.14, 0.22, 0]}>
        <boxGeometry args={[0.04, 0.06, 0.04]} />
      </SketchMesh>

      {/* decor — 地面线 */}
      <DraftLine points={[[-0.9, -0.34, 0], [0.9, -0.34, 0]]} />

      {/* decor — 热气 */}
      <DraftLine points={[[0, 0.26, 0], [0, 0.32, 0]]} />
      <DraftLine points={[[-0.04, 0.28, 0], [-0.04, 0.34, 0]]} />
      <DraftLine points={[[0.04, 0.28, 0], [0.04, 0.34, 0]]} />
    </group>
  )
}