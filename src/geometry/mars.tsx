import { SketchMesh, Rod, DraftLine } from './primitives'

/** 火星 — 红尘、极冠、峡谷、古河床与双小月 */

const greatCut: Array<[[number, number, number], [number, number, number]]> = [
  [[0.08, 0.28, 0.53], [0.28, 0.1, 0.51]],
  [[0.28, 0.1, 0.51], [0.42, -0.12, 0.44]],
  [[0.42, -0.12, 0.44], [0.48, -0.28, 0.3]],
]

const riverBeds: Array<[[number, number, number], [number, number, number]]> = [
  [[-0.44, 0.28, 0.36], [-0.2, 0.36, 0.48]],
  [[-0.32, 0.32, 0.42], [-0.26, 0.46, 0.38]],
  [[-0.2, 0.36, 0.48], [-0.05, 0.44, 0.46]],
  [[-0.2, 0.36, 0.48], [-0.15, 0.26, 0.5]],
]

const stars: Array<[number, number]> = [
  [-2.2, 1.3],
  [-2.4, -0.6],
  [-1.8, 0.9],
  [1.9, 1.4],
  [2.1, -0.8],
]

export default function MarsSketch() {
  return (
    <group>
      {/* red-dust — 红色行星本体 */}
      <SketchMesh partId="red-dust" position={[0, 0, 0]}>
        <sphereGeometry args={[0.62, 26, 20]} />
      </SketchMesh>

      {/* thin-air — 稀薄大气包层 */}
      <SketchMesh partId="thin-air" position={[0, 0, 0]}>
        <sphereGeometry args={[0.74, 24, 18]} />
      </SketchMesh>

      {/* ice-caps — 两端冰冠 */}
      <SketchMesh partId="ice-caps" position={[0, 0.56, 0]}>
        <sphereGeometry args={[0.16, 16, 12]} />
      </SketchMesh>
      <SketchMesh partId="ice-caps" position={[0, -0.56, 0]}>
        <sphereGeometry args={[0.16, 16, 12]} />
      </SketchMesh>

      {/* dead-fire-mountain — 巨大火山 */}
      <SketchMesh partId="dead-fire-mountain" position={[-0.25, 0.17, 0.52]}>
        <coneGeometry args={[0.15, 0.2, 12]} />
      </SketchMesh>

      {/* great-cut — 峡谷刻痕 */}
      {greatCut.map(([from, to], index) => (
        <Rod key={`great-cut-${index}`} from={from} to={to} radius={0.016} partId="great-cut" />
      ))}

      {/* old-river-beds — 分支河道 */}
      {riverBeds.map(([from, to], index) => (
        <Rod key={`river-bed-${index}`} from={from} to={to} radius={0.006} partId="old-river-beds" />
      ))}

      {/* two-moons — 近月与远月 */}
      <SketchMesh partId="two-moons" position={[1.05, 0.38, 0]}>
        <sphereGeometry args={[0.05, 12, 10]} />
      </SketchMesh>
      <SketchMesh partId="two-moons" position={[1.27, -0.46, 0]}>
        <sphereGeometry args={[0.038, 12, 10]} />
      </SketchMesh>

      {/* decor — 轨道、飞船、航迹与背景星 */}
      {Array.from({ length: 5 }, (_, index) => {
        const startAngle = (15 + index * 11) * (Math.PI / 180)
        const endAngle = (15 + (index + 1) * 11) * (Math.PI / 180)
        return (
          <DraftLine
            key={`near-moon-orbit-${index}`}
            points={[
              [Math.cos(startAngle) * 1.12, Math.sin(startAngle) * 1.12, 0],
              [Math.cos(endAngle) * 1.12, Math.sin(endAngle) * 1.12, 0],
            ]}
          />
        )
      })}
      <DraftLine points={[[0.383, 1.052, 0], [0.3, 0.98, 0]]} />
      <DraftLine points={[[0.383, 1.052, 0], [0.3, 1.11, 0]]} />

      {Array.from({ length: 3 }, (_, index) => {
        const startAngle = (-40 + index * 8) * (Math.PI / 180)
        const endAngle = (-40 + (index + 1) * 8) * (Math.PI / 180)
        return (
          <DraftLine
            key={`far-moon-orbit-${index}`}
            points={[
              [Math.cos(startAngle) * 1.35, Math.sin(startAngle) * 1.35, 0],
              [Math.cos(endAngle) * 1.35, Math.sin(endAngle) * 1.35, 0],
            ]}
          />
        )
      })}
      <DraftLine points={[[1.298, -0.372, 0], [1.22, -0.33, 0]]} />
      <DraftLine points={[[1.298, -0.372, 0], [1.25, -0.45, 0]]} />

      <DraftLine points={[[-2.0, -1.1, 0], [-1.6, -0.75, 0]]} />
      <DraftLine points={[[-2.0, -1.1, 0], [-2.08, -0.95, 0]]} />
      <DraftLine points={[[-1.6, -0.75, 0], [-1.72, -0.62, 0]]} />
      <DraftLine points={[[-2.1, -1.2, 0], [-2.2, -1.3, 0]]} />
      <DraftLine points={[[-2.05, -1.15, 0], [-2.16, -1.24, 0]]} />
      <DraftLine points={[[-1.45, -0.63, 0], [-1.38, -0.58, 0]]} />
      <DraftLine points={[[-1.25, -0.5, 0], [-1.18, -0.45, 0]]} />
      <DraftLine points={[[-1.05, -0.37, 0], [-0.98, -0.32, 0]]} />
      <DraftLine points={[[-0.85, -0.24, 0], [-0.78, -0.19, 0]]} />

      {stars.map(([x, y], index) => (
        <group key={`star-${index}`}>
          <DraftLine points={[[x - 0.05, y, 0], [x + 0.05, y, 0]]} />
          <DraftLine points={[[x, y - 0.05, 0], [x, y + 0.05, 0]]} />
        </group>
      ))}
    </group>
  )
}
