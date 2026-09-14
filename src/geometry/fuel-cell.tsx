import { SketchMesh, Rod, DraftLine } from './primitives'

/** 燃料电池 — power：电池壳、薄膜层、气体入口、空气入口、水出口、电极、电线 */
const wallXs = [-0.10, 0, 0.10]
const wireXs = [-0.06, 0.06]

export default function FuelCellSketch() {
  return (
    <group>
      {/* box-body */}
      <SketchMesh partId="box-body" position={[0, 0, 0]}>
        <boxGeometry args={[0.48, 0.30, 0.24]} />
      </SketchMesh>

      {/* thin-wall — 3层 */}
      {wallXs.map((x) => (
        <SketchMesh key={`wall-${x}`} partId="thin-wall" position={[x, 0, 0]}>
          <boxGeometry args={[0.008, 0.22, 0.18]} />
        </SketchMesh>
      ))}

      {/* gas-in */}
      <SketchMesh partId="gas-in" position={[-0.30, 0.06, 0]}>
        <boxGeometry args={[0.08, 0.04, 0.04]} />
      </SketchMesh>
      <Rod from={[-0.30, 0.06, 0]} to={[-0.24, 0.06, 0]} radius={0.006} partId="gas-in" />

      {/* air-in */}
      <SketchMesh partId="air-in" position={[0.30, 0.06, 0]}>
        <boxGeometry args={[0.08, 0.04, 0.04]} />
      </SketchMesh>
      <Rod from={[0.30, 0.06, 0]} to={[0.24, 0.06, 0]} radius={0.006} partId="air-in" />

      {/* water-out */}
      <SketchMesh partId="water-out" position={[0.20, -0.20, 0]}>
        <boxGeometry args={[0.04, 0.06, 0.04]} />
      </SketchMesh>
      <Rod from={[0.20, -0.20, 0]} to={[0.20, -0.30, 0]} radius={0.005} partId="water-out" />

      {/* wire-ends — 2件 */}
      {wireXs.map((x) => (
        <SketchMesh key={`wire-${x}`} partId="wire-ends" position={[x, 0.20, 0]}>
          <boxGeometry args={[0.03, 0.03, 0.03]} />
        </SketchMesh>
      ))}

      {/* power-wire — 双股出线 */}
      <Rod from={[-0.06, 0.22, 0]} to={[-0.06, 0.36, 0]} radius={0.005} partId="power-wire" />
      <Rod from={[0.06, 0.22, 0]} to={[0.06, 0.36, 0]} radius={0.005} partId="power-wire" />

      {/* decor — 地面线 */}
      <DraftLine points={[[-0.9, -0.42, 0], [0.9, -0.42, 0]]} />

      {/* decor — 水滴 */}
      <DraftLine points={[[0.20, -0.30, 0], [0.20, -0.35, 0]]} />

      {/* decor — 气体小箭头 */}
      <DraftLine points={[[-0.38, 0.06, 0], [-0.30, 0.06, 0]]} />
      <DraftLine points={[[0.38, 0.06, 0], [0.30, 0.06, 0]]} />
    </group>
  )
}