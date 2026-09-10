import { SketchMesh, Rod, DraftLine } from './primitives'

/** 悬索桥 — 主缆悬链、吊杆、格构塔与锚碇 */

const mainCablePoints: Array<[number, number, number]> = [
  [-1.45, -0.18, 0],
  [-1.15, 0.15, 0],
  [-0.85, 0.45, 0],
  [-0.55, 0.72, 0],
  [-0.44, 0.56, 0],
  [-0.33, 0.44, 0],
  [-0.22, 0.34, 0],
  [-0.11, 0.27, 0],
  [0, 0.24, 0],
  [0.11, 0.27, 0],
  [0.22, 0.34, 0],
  [0.33, 0.44, 0],
  [0.44, 0.56, 0],
  [0.55, 0.72, 0],
  [0.85, 0.45, 0],
  [1.15, 0.15, 0],
  [1.45, -0.18, 0],
]

const hangLineXs = [-0.44, -0.33, -0.22, -0.11, 0, 0.11, 0.22, 0.33, 0.44]
const hangLineYs = [0.56, 0.44, 0.34, 0.27, 0.24, 0.27, 0.34, 0.44, 0.56]

const towerLevels = [-0.33, -0.11, 0.11, 0.33, 0.55, 0.75]

const towerDiagonals: Array<[number, number]> = [
  [-0.07, -0.55],
  [0.07, -0.33],
  [-0.07, -0.11],
  [0.07, 0.11],
  [-0.07, 0.33],
  [0.07, 0.55],
  [-0.07, 0.75],
]

const underVerticalXs = [-0.55, -0.33, -0.11, 0.11, 0.33, 0.55]

const underDiagonalPoints: Array<[number, number, number]> = [
  [-0.55, -0.26, 0],
  [-0.33, -0.04, 0],
  [-0.11, -0.26, 0],
  [0.11, -0.04, 0],
  [0.33, -0.26, 0],
  [0.55, -0.04, 0],
]

export default function BridgeSketch() {
  return (
    <group>
      {/* great-lines — 主缆悬链 */}
      {mainCablePoints.slice(0, -1).map((from, index) => (
        <Rod
          key={`main-cable-${index}`}
          from={from}
          to={mainCablePoints[index + 1]}
          radius={0.014}
          partId="great-lines"
        />
      ))}

      {/* hang-lines — 逐节点吊杆 */}
      {hangLineXs.map((x, index) => (
        <Rod
          key={`hang-line-${index}`}
          from={[x, hangLineYs[index], 0]}
          to={[x, 0.04, 0]}
          radius={0.006}
          partId="hang-lines"
        />
      ))}

      {/* hold-towers — 格构塔 */}
      {[-0.55, 0.55].map(x => (
        <group key={`tower-${x}`}>
          <Rod from={[x - 0.07, -0.55, 0]} to={[x - 0.07, 0.75, 0]} radius={0.014} partId="hold-towers" />
          <Rod from={[x + 0.07, -0.55, 0]} to={[x + 0.07, 0.75, 0]} radius={0.014} partId="hold-towers" />
          {towerLevels.map((y, index) => (
            <Rod
              key={`tower-horizontal-${index}`}
              from={[x - 0.07, y, 0]}
              to={[x + 0.07, y, 0]}
              radius={0.008}
              partId="hold-towers"
            />
          ))}
          {towerDiagonals.slice(0, -1).map(([dx, y], index) => (
            <Rod
              key={`tower-diagonal-${index}`}
              from={[x + dx, y, 0]}
              to={[x + towerDiagonals[index + 1][0], towerDiagonals[index + 1][1], 0]}
              radius={0.008}
              partId="hold-towers"
            />
          ))}
          <SketchMesh partId="hold-towers" position={[x, 0.74, 0]}>
            <boxGeometry args={[0.2, 0.06, 0.2]} />
          </SketchMesh>
        </group>
      ))}

      {/* end-holds — 两端锚碇 */}
      <SketchMesh partId="end-holds" position={[-1.45, -0.32, 0]}>
        <boxGeometry args={[0.26, 0.34, 0.26]} />
      </SketchMesh>
      <SketchMesh partId="end-holds" position={[1.45, -0.32, 0]}>
        <boxGeometry args={[0.26, 0.34, 0.26]} />
      </SketchMesh>

      {/* road-way — 桥面 */}
      <SketchMesh partId="road-way" position={[0, 0, 0]}>
        <boxGeometry args={[2.7, 0.08, 0.3]} />
      </SketchMesh>

      {/* under-bones — 加劲桁架 */}
      <Rod from={[-0.55, -0.26, 0]} to={[0.55, -0.26, 0]} radius={0.01} partId="under-bones" />
      {underVerticalXs.map((x, index) => (
        <Rod
          key={`under-vertical-${index}`}
          from={[x, -0.04, 0]}
          to={[x, -0.26, 0]}
          radius={0.008}
          partId="under-bones"
        />
      ))}
      {underDiagonalPoints.slice(0, -1).map((from, index) => (
        <Rod
          key={`under-diagonal-${index}`}
          from={from}
          to={underDiagonalPoints[index + 1]}
          radius={0.008}
          partId="under-bones"
        />
      ))}

      {/* water-legs — 水中桥墩 */}
      <SketchMesh partId="water-legs" position={[-0.55, -0.72, 0]}>
        <boxGeometry args={[0.24, 0.36, 0.26]} />
      </SketchMesh>
      <SketchMesh partId="water-legs" position={[0.55, -0.72, 0]}>
        <boxGeometry args={[0.24, 0.36, 0.26]} />
      </SketchMesh>

      {/* decor — 水面、海床、车辆与飞鸟 */}
      <DraftLine points={[[-1.7, -0.55, 0], [1.7, -0.55, 0]]} />
      {[-1.1, -0.35, 0.55, 1.25].map((x, index) => (
        <group key={`wave-${index}`}>
          <DraftLine points={[[x - 0.07, -0.55, 0], [x, -0.49, 0]]} />
          <DraftLine points={[[x, -0.49, 0], [x + 0.07, -0.55, 0]]} />
        </group>
      ))}
      <DraftLine points={[[-1.7, -0.9, 0], [1.7, -0.9, 0]]} />
      {[-1.3, -0.65, 0, 0.65, 1.3].map((x, index) => (
        <DraftLine key={`sea-bed-${index}`} points={[[x, -0.9, 0], [x - 0.08, -0.98, 0]]} />
      ))}

      <DraftLine points={[[-0.9, 0.04, 0], [-0.8, 0.04, 0], [-0.8, 0.09, 0], [-0.9, 0.09, 0], [-0.9, 0.04, 0]]} />
      <DraftLine points={[[0.05, 0.04, 0], [0.15, 0.04, 0], [0.15, 0.09, 0], [0.05, 0.09, 0], [0.05, 0.04, 0]]} />
      <DraftLine points={[[0.55, 0.04, 0], [0.65, 0.04, 0], [0.65, 0.09, 0], [0.55, 0.09, 0], [0.55, 0.04, 0]]} />

      <DraftLine points={[[0.62, 0.14, 0], [0.86, 0.14, 0]]} />
      <DraftLine points={[[0.86, 0.14, 0], [0.79, 0.18, 0]]} />
      <DraftLine points={[[0.86, 0.14, 0], [0.79, 0.1, 0]]} />

      <DraftLine points={[[-0.85, 1, 0], [-0.79, 1.04, 0], [-0.73, 1, 0]]} />
      <DraftLine points={[[0.95, 1.05, 0], [1.01, 1.09, 0], [1.07, 1.05, 0]]} />
    </group>
  )
}
