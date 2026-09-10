import { SketchMesh, Rod, DraftLine } from './primitives'

/** 无人机 — 四旋翼俯视，臂端旋翼与摄影云台 */

const armRoots: Array<[number, number]> = [
  [0.15, 0.15],
  [-0.15, 0.15],
  [-0.15, -0.15],
  [0.15, -0.15],
]
const armEnds: Array<[number, number]> = [
  [0.8, 0.8],
  [-0.8, 0.8],
  [-0.8, -0.8],
  [0.8, -0.8],
]
const legRoots: Array<[number, number]> = [
  [0.25, 0.25],
  [-0.25, 0.25],
  [-0.25, -0.25],
  [0.25, -0.25],
]
const rotorRing = (x: number, z: number): Array<[number, number, number]> =>
  Array.from({ length: 13 }, (_, k) => {
    const a = (k / 12) * Math.PI * 2
    return [x + 0.28 * Math.cos(a), 0.08, z + 0.28 * Math.sin(a)] as [number, number, number]
  })

export default function DroneSketch() {
  return (
    <group>
      {/* fly-box — 机身与顶包 */}
      <SketchMesh partId="fly-box" position={[0, 0, 0]}>
        <boxGeometry args={[0.34, 0.14, 0.34]} />
      </SketchMesh>
      <SketchMesh partId="fly-box" position={[0, 0.095, 0]}>
        <boxGeometry args={[0.18, 0.05, 0.18]} />
      </SketchMesh>

      {/* cross-arms — 四根对角臂 */}
      {armRoots.map((root, index) => (
        <Rod
          key={`arm-${index}`}
          from={[root[0], 0, root[1]]}
          to={[armEnds[index][0], 0, armEnds[index][1]]}
          radius={0.02}
          partId="cross-arms"
        />
      ))}

      {/* spin-blades — 桅杆、轮毂与交叉桨叶 */}
      {armEnds.map(([x, z], index) => (
        <group key={`rotor-${index}`}>
          <Rod from={[x, 0, z]} to={[x, 0.05, z]} radius={0.012} partId="spin-blades" />
          <SketchMesh partId="spin-blades" position={[x, 0.08, z]}>
            <cylinderGeometry args={[0.05, 0.05, 0.07, 12]} />
          </SketchMesh>
          <Rod from={[x - 0.28, 0.08, z]} to={[x + 0.28, 0.08, z]} radius={0.007} partId="spin-blades" />
          <Rod from={[x, 0.08, z - 0.28]} to={[x, 0.08, z + 0.28]} radius={0.007} partId="spin-blades" />
          <DraftLine points={rotorRing(x, z)} />
        </group>
      ))}

      {/* power-pocket — 底部电池 */}
      <SketchMesh partId="power-pocket" position={[0, -0.11, 0]}>
        <boxGeometry args={[0.2, 0.08, 0.2]} />
      </SketchMesh>

      {/* sky-eye — 摄影云台 */}
      <Rod from={[0, -0.07, 0.22]} to={[0, -0.16, 0.22]} radius={0.012} partId="sky-eye" />
      <SketchMesh partId="sky-eye" position={[0, -0.21, 0.22]}>
        <sphereGeometry args={[0.06, 16, 12]} />
      </SketchMesh>

      {/* far-talk — 无线电天线 */}
      <Rod from={[0, 0.07, 0]} to={[0, 0.32, 0]} radius={0.008} partId="far-talk" />
      <SketchMesh partId="far-talk" position={[0, 0.34, 0]}>
        <sphereGeometry args={[0.02, 12, 8]} />
      </SketchMesh>

      {/* landing-legs — 四根外撇起落腿 */}
      {legRoots.map(([x, z], index) => (
        <Rod
          key={`landing-leg-${index}`}
          from={[x, -0.07, z]}
          to={[x * 1.2, -0.32, z * 1.2]}
          radius={0.012}
          partId="landing-legs"
        />
      ))}

      {/* decor — 无线电波、下洗、飞鸟与云 */}
      <DraftLine
        points={[
          [0.071, 0.303, 0], [0.097, 0.329, 0], [0.114, 0.363, 0], [0.12, 0.4, 0],
          [0.114, 0.437, 0], [0.097, 0.471, 0], [0.071, 0.497, 0],
        ]}
      />
      <DraftLine
        points={[
          [0.118, 0.238, 0], [0.162, 0.282, 0], [0.19, 0.338, 0], [0.2, 0.4, 0],
          [0.19, 0.462, 0], [0.162, 0.518, 0], [0.118, 0.562, 0],
        ]}
      />
      <DraftLine points={[[0.8, -0.02, 0.8], [0.8, -0.2, 0.8]]} />
      <DraftLine points={[[0.77, -0.16, 0.8], [0.8, -0.2, 0.8], [0.83, -0.16, 0.8]]} />
      <DraftLine points={[[1.08, 0.75, 0], [1.15, 0.79, 0], [1.22, 0.75, 0]]} />
      <DraftLine points={[[-1.18, 0.82, 0], [-1.12, 0.88, 0], [-1.06, 0.82, 0]]} />
      <DraftLine points={[[-1.06, 0.82, 0], [-1.0, 0.88, 0], [-0.94, 0.82, 0]]} />
      <DraftLine points={[[-0.94, 0.82, 0], [-0.88, 0.88, 0], [-0.82, 0.82, 0]]} />
      <DraftLine points={[[-1.18, 0.82, 0], [-0.82, 0.82, 0]]} />
    </group>
  )
}
