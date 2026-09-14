import { SketchMesh, Rod, DraftLine } from './primitives'

/** 逆变器 — power：箱体、散热缝、输入线、输出线、内部元件、显示屏、地线 */
const slotXs = [-0.12, -0.04, 0.04, 0.12]
const partXs = [-0.10, 0, 0.10]

export default function PowerInverterSketch() {
  return (
    <group>
      {/* inverter-box */}
      <SketchMesh partId="inverter-box" position={[0, 0, 0]}>
        <boxGeometry args={[0.48, 0.30, 0.24]} />
      </SketchMesh>

      {/* cooling-lines — 4条 */}
      {slotXs.map((x) => (
        <SketchMesh key={`slot-${x}`} partId="cooling-lines" position={[x, -0.16, 0]}>
          <boxGeometry args={[0.04, 0.008, 0.20]} />
        </SketchMesh>
      ))}

      {/* big-wire */}
      <SketchMesh partId="big-wire" position={[-0.30, 0.06, 0]}>
        <boxGeometry args={[0.04, 0.04, 0.04]} />
      </SketchMesh>
      <Rod from={[-0.30, 0.06, 0]} to={[-0.24, 0.06, 0]} radius={0.006} partId="big-wire" />

      {/* small-wire */}
      <SketchMesh partId="small-wire" position={[0.30, 0.06, 0]}>
        <boxGeometry args={[0.04, 0.04, 0.04]} />
      </SketchMesh>
      <Rod from={[0.30, 0.06, 0]} to={[0.24, 0.06, 0]} radius={0.006} partId="small-wire" />

      {/* inside-parts — 3件 */}
      {partXs.map((x) => (
        <SketchMesh key={`part-${x}`} partId="inside-parts" position={[x, 0.02, 0]}>
          <boxGeometry args={[0.06, 0.08, 0.06]} />
        </SketchMesh>
      ))}

      {/* small-screen */}
      <SketchMesh partId="small-screen" position={[0, 0.16, 0.13]}>
        <boxGeometry args={[0.10, 0.06, 0.012]} />
      </SketchMesh>

      {/* ground-wire */}
      <Rod from={[0, -0.18, 0]} to={[0, -0.36, 0]} radius={0.005} partId="ground-wire" />

      {/* decor — 地面线 */}
      <DraftLine points={[[-0.9, -0.42, 0], [0.9, -0.42, 0]]} />

      {/* decor — 输入箭头 */}
      <DraftLine points={[[-0.38, 0.06, 0], [-0.30, 0.06, 0]]} />

      {/* decor — 输出箭头 */}
      <DraftLine points={[[0.30, 0.06, 0], [0.38, 0.06, 0]]} />

      {/* decor — 屏幕亮线 */}
      <DraftLine points={[[-0.04, 0.18, 0.14], [0.04, 0.18, 0.14]]} />
    </group>
  )
}