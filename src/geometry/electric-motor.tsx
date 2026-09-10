import { SketchMesh, Rod, DraftLine } from './primitives'

/** 电动机 — 剖切定子、转子、换向器、电刷与输出轴 */

const wireArms: Array<[[number, number, number], [number, number, number]]> = [
  [[0.44, 0.2, 0], [0.0, 0.44, 0]],
  [[0.44, -0.2, 0], [0.0, -0.44, 0]],
  [[-0.78, 0.18, 0], [-1.08, 0.3, 0]],
  [[-0.78, -0.18, 0], [-1.08, -0.3, 0]],
]

export default function ElectricMotorSketch() {
  return (
    <group>
      {/* box-body — 电机外壳 */}
      <SketchMesh partId="box-body" position={[0, 0, 0]}>
        <boxGeometry args={[1.55, 0.95, 0.7]} />
      </SketchMesh>
      <SketchMesh partId="box-body" position={[0.78, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.34, 0.34, 0.06, 16]} />
      </SketchMesh>
      <SketchMesh partId="box-body" position={[-0.78, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.34, 0.34, 0.06, 16]} />
      </SketchMesh>

      {/* still-ring — 定子磁环 */}
      <SketchMesh partId="still-ring" position={[0, 0, 0]} rotation={[0, Math.PI / 2, 0]}>
        <torusGeometry args={[0.36, 0.045, 8, 40]} />
      </SketchMesh>
      <SketchMesh partId="still-ring" position={[0, 0.31, 0]}>
        <boxGeometry args={[0.42, 0.09, 0.28]} />
      </SketchMesh>
      <SketchMesh partId="still-ring" position={[0, -0.31, 0]}>
        <boxGeometry args={[0.42, 0.09, 0.28]} />
      </SketchMesh>

      {/* spin-heart — 转子铁芯与绕线 */}
      <SketchMesh partId="spin-heart" position={[0, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.17, 0.17, 0.66, 16]} />
      </SketchMesh>
      {[-0.21, 0, 0.21].map((x, index) => (
        <SketchMesh key={`wire-ring-${index}`} partId="spin-heart" position={[x, 0, 0]} rotation={[0, Math.PI / 2, 0]}>
          <torusGeometry args={[0.2, 0.014, 8, 24]} />
        </SketchMesh>
      ))}

      {/* turn-changer — 换向器 */}
      <SketchMesh partId="turn-changer" position={[0.48, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.1, 0.1, 0.2, 14]} />
      </SketchMesh>
      <Rod from={[0.38, 0.095, 0]} to={[0.58, 0.095, 0]} radius={0.005} partId="turn-changer" />
      <Rod from={[0.38, -0.095, 0]} to={[0.58, -0.095, 0]} radius={0.005} partId="turn-changer" />

      {/* rubbing-bridges — 上下碳刷 */}
      <SketchMesh partId="rubbing-bridges" position={[0.48, 0.15, 0]}>
        <boxGeometry args={[0.1, 0.12, 0.09]} />
      </SketchMesh>
      <SketchMesh partId="rubbing-bridges" position={[0.48, -0.15, 0]}>
        <boxGeometry args={[0.1, 0.12, 0.09]} />
      </SketchMesh>

      {/* spin-stick — 输出轴 */}
      <Rod from={[0.58, 0, 0]} to={[1.1, 0, 0]} radius={0.035} partId="spin-stick" />
      <SketchMesh partId="spin-stick" position={[1.0, 0, 0]}>
        <boxGeometry args={[0.05, 0.05, 0.05]} />
      </SketchMesh>

      {/* wire-arms — 箱内外导线 */}
      {wireArms.map(([from, to], index) => (
        <Rod key={`wire-arm-${index}`} from={from} to={to} radius={0.012} partId="wire-arms" />
      ))}

      {/* decor — 转向箭头、磁感线、插座与地面 */}
      {Array.from({ length: 4 }, (_, index) => {
        const startAngle = (30 + index * 30) * (Math.PI / 180)
        const endAngle = (30 + (index + 1) * 30) * (Math.PI / 180)
        return (
          <DraftLine
            key={`upper-turn-${index}`}
            points={[
              [0.85 + Math.cos(startAngle) * 0.12, Math.sin(startAngle) * 0.12, 0],
              [0.85 + Math.cos(endAngle) * 0.12, Math.sin(endAngle) * 0.12, 0],
            ]}
          />
        )
      })}
      <DraftLine points={[[0.746, 0.166, 0], [0.8, 0.14, 0]]} />
      <DraftLine points={[[0.746, 0.166, 0], [0.77, 0.22, 0]]} />

      {Array.from({ length: 4 }, (_, index) => {
        const startAngle = (210 + index * 30) * (Math.PI / 180)
        const endAngle = (210 + (index + 1) * 30) * (Math.PI / 180)
        return (
          <DraftLine
            key={`lower-turn-${index}`}
            points={[
              [0.85 + Math.cos(startAngle) * 0.12, Math.sin(startAngle) * 0.12, 0],
              [0.85 + Math.cos(endAngle) * 0.12, Math.sin(endAngle) * 0.12, 0],
            ]}
          />
        )
      })}
      <DraftLine points={[[0.954, -0.166, 0], [0.9, -0.14, 0]]} />
      <DraftLine points={[[0.954, -0.166, 0], [0.93, -0.22, 0]]} />

      <DraftLine points={[[0, 0.28, 0], [0, 0.21, 0]]} />
      <DraftLine points={[[0, -0.21, 0], [0, -0.28, 0]]} />
      <DraftLine points={[[-0.26, 0.28, 0], [-0.38, 0.18, 0]]} />
      <DraftLine points={[[-0.38, 0.18, 0], [-0.38, -0.18, 0]]} />
      <DraftLine points={[[-0.38, -0.18, 0], [-0.26, -0.28, 0]]} />
      <DraftLine points={[[0.26, 0.28, 0], [0.36, 0.18, 0]]} />
      <DraftLine points={[[0.36, 0.18, 0], [0.36, -0.18, 0]]} />
      <DraftLine points={[[0.36, -0.18, 0], [0.26, -0.28, 0]]} />

      <DraftLine points={[[-1.21, 0.24, 0], [-1.09, 0.24, 0]]} />
      <DraftLine points={[[-1.09, 0.24, 0], [-1.09, 0.36, 0]]} />
      <DraftLine points={[[-1.09, 0.36, 0], [-1.21, 0.36, 0]]} />
      <DraftLine points={[[-1.21, 0.36, 0], [-1.21, 0.24, 0]]} />

      <DraftLine points={[[-1.4, -0.62, 0], [1.3, -0.62, 0]]} />
      {[-1.2, -0.7, -0.2, 0.3, 0.8, 1.2].map((x, index) => (
        <DraftLine key={`ground-${index}`} points={[[x, -0.62, 0], [x - 0.08, -0.7, 0]]} />
      ))}
    </group>
  )
}
