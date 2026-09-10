import { SketchMesh, Rod, DraftLine } from './primitives'

/** 塔式起重机 — 格构塔身、双臂、配重与吊钩系统 */

const towerLevels = [-0.75, -0.43, -0.11, 0.21, 0.53, 0.85, 1.17, 1.49]

const towerDiagonals: Array<[[number, number], [number, number]]> = [
  [[-0.15, -0.75], [0.15, -0.43]],
  [[0.15, -0.43], [-0.15, -0.11]],
  [[-0.15, -0.11], [0.15, 0.21]],
  [[0.15, 0.21], [-0.15, 0.53]],
  [[-0.15, 0.53], [0.15, 0.85]],
  [[0.15, 0.85], [-0.15, 1.17]],
  [[-0.15, 1.17], [0.15, 1.49]],
]

const longVerticals = [0.45, 0.75, 1.05, 1.35, 1.65, 1.95]

const longDiagonals: Array<[[number, number], [number, number]]> = [
  [[0.15, 1.68], [0.45, 1.88]],
  [[0.45, 1.88], [0.75, 1.68]],
  [[0.75, 1.68], [1.05, 1.88]],
  [[1.05, 1.88], [1.35, 1.68]],
  [[1.35, 1.68], [1.65, 1.88]],
  [[1.65, 1.88], [1.95, 1.68]],
]

const backVerticals = [-0.45, -0.75, -1.05]

const backDiagonals: Array<[[number, number], [number, number]]> = [
  [[-0.15, 1.68], [-0.45, 1.88]],
  [[-0.45, 1.88], [-0.75, 1.68]],
  [[-0.75, 1.68], [-1.05, 1.88]],
]

export default function CraneSketch() {
  return (
    <group>
      {/* standing-tower — 格构塔身 */}
      <Rod from={[-0.15, -0.75, 0]} to={[-0.15, 1.52, 0]} radius={0.014} partId="standing-tower" />
      <Rod from={[0.15, -0.75, 0]} to={[0.15, 1.52, 0]} radius={0.014} partId="standing-tower" />
      {towerLevels.map((y, index) => (
        <Rod
          key={`tower-horizontal-${index}`}
          from={[-0.15, y, 0]}
          to={[0.15, y, 0]}
          radius={0.008}
          partId="standing-tower"
        />
      ))}
      {towerDiagonals.map(([from, to], index) => (
        <Rod
          key={`tower-diagonal-${index}`}
          from={[...from, 0]}
          to={[...to, 0]}
          radius={0.008}
          partId="standing-tower"
        />
      ))}
      <SketchMesh partId="standing-tower" position={[0, -0.78, 0]}>
        <boxGeometry args={[0.7, 0.05, 0.5]} />
      </SketchMesh>

      {/* turn-ring — 回转平台 */}
      <SketchMesh partId="turn-ring" position={[0, 1.56, 0]}>
        <boxGeometry args={[0.55, 0.1, 0.4]} />
      </SketchMesh>
      <SketchMesh partId="turn-ring" position={[0, 1.63, 0]}>
        <cylinderGeometry args={[0.22, 0.22, 0.07, 16]} />
      </SketchMesh>

      {/* long-arm — 格构长臂 */}
      <Rod from={[0.15, 1.88, 0]} to={[1.95, 1.88, 0]} radius={0.012} partId="long-arm" />
      <Rod from={[0.15, 1.68, 0]} to={[1.95, 1.68, 0]} radius={0.012} partId="long-arm" />
      {longVerticals.map((x, index) => (
        <Rod
          key={`long-vertical-${index}`}
          from={[x, 1.68, 0]}
          to={[x, 1.88, 0]}
          radius={0.008}
          partId="long-arm"
        />
      ))}
      {longDiagonals.map(([from, to], index) => (
        <Rod
          key={`long-diagonal-${index}`}
          from={[...from, 0]}
          to={[...to, 0]}
          radius={0.008}
          partId="long-arm"
        />
      ))}
      <Rod from={[1.75, 1.88, 0]} to={[1.85, 2.02, 0]} radius={0.008} partId="long-arm" />
      <Rod from={[1.95, 1.88, 0]} to={[1.85, 2.02, 0]} radius={0.008} partId="long-arm" />

      {/* back-arm — 格构后臂 */}
      <Rod from={[-0.15, 1.88, 0]} to={[-1.05, 1.88, 0]} radius={0.012} partId="back-arm" />
      <Rod from={[-0.15, 1.68, 0]} to={[-1.05, 1.68, 0]} radius={0.012} partId="back-arm" />
      {backVerticals.map((x, index) => (
        <Rod
          key={`back-vertical-${index}`}
          from={[x, 1.68, 0]}
          to={[x, 1.88, 0]}
          radius={0.008}
          partId="back-arm"
        />
      ))}
      {backDiagonals.map(([from, to], index) => (
        <Rod
          key={`back-diagonal-${index}`}
          from={[...from, 0]}
          to={[...to, 0]}
          radius={0.008}
          partId="back-arm"
        />
      ))}

      {/* hold-stones — 配重块 */}
      {[-1.0, -1.18, -1.36].map((x, index) => (
        <SketchMesh key={`hold-stone-${index}`} partId="hold-stones" position={[x, 1.48, 0]}>
          <boxGeometry args={[0.15, 0.24, 0.2]} />
        </SketchMesh>
      ))}
      <Rod from={[-1.0, 1.68, 0]} to={[-1.0, 1.6, 0]} radius={0.006} partId="hold-stones" />
      <Rod from={[-1.27, 1.68, 0]} to={[-1.27, 1.6, 0]} radius={0.006} partId="hold-stones" />

      {/* hook-line — 小车、钢缆与吊钩 */}
      <SketchMesh partId="hook-line" position={[0.9, 1.63, 0]}>
        <boxGeometry args={[0.1, 0.08, 0.08]} />
      </SketchMesh>
      <Rod from={[0.9, 1.59, 0]} to={[0.9, 0.45, 0]} radius={0.006} partId="hook-line" />
      <SketchMesh partId="hook-line" position={[0.9, 0.4, 0]}>
        <boxGeometry args={[0.07, 0.1, 0.07]} />
      </SketchMesh>
      <SketchMesh partId="hook-line" position={[0.9, 0.32, 0]} rotation={[0, 0, -0.5]}>
        <torusGeometry args={[0.045, 0.012, 8, 16, Math.PI * 1.2]} />
      </SketchMesh>
      <SketchMesh partId="hook-line" position={[0.9, 0.18, 0]}>
        <boxGeometry args={[0.2, 0.14, 0.16]} />
      </SketchMesh>

      {/* driver-room — 司机室 */}
      <SketchMesh partId="driver-room" position={[0.32, 1.52, 0]}>
        <boxGeometry args={[0.2, 0.26, 0.24]} />
      </SketchMesh>
      <SketchMesh partId="driver-room" position={[0.32, 1.56, 0.125]}>
        <boxGeometry args={[0.14, 0.12, 0.01]} />
      </SketchMesh>

      {/* decor — 地面、在建楼层与回转扫掠弧 */}
      <DraftLine points={[[-2.0, -0.82, 0], [2.2, -0.82, 0]]} />
      {[-1.65, -1.1, -0.55, 0.0, 0.55, 1.1, 1.65].map((x, index) => (
        <DraftLine key={`ground-${index}`} points={[[x, -0.82, 0], [x - 0.08, -0.9, 0]]} />
      ))}
      <DraftLine points={[[1.2, -0.75, 0], [1.2, 0.55, 0]]} />
      <DraftLine points={[[1.9, -0.75, 0], [1.9, 0.55, 0]]} />
      {[-0.75, -0.25, 0.25, 0.55].map((y, index) => (
        <DraftLine key={`floor-${index}`} points={[[1.2, y, 0], [1.9, y, 0]]} />
      ))}
      <DraftLine points={[[1.5, 0.58, 0], [1.6, 0.68, 0]]} />
      <DraftLine points={[[1.6, 0.58, 0], [1.5, 0.68, 0]]} />
      {Array.from({ length: 4 }, (_, index) => {
        const startAngle = (25 + index * 10) * (Math.PI / 180)
        const endAngle = (25 + (index + 1) * 10) * (Math.PI / 180)
        return (
          <DraftLine
            key={`sweep-${index}`}
            points={[
              [Math.cos(startAngle) * 1.5, 1.56 + Math.sin(startAngle) * 1.5, 0],
              [Math.cos(endAngle) * 1.5, 1.56 + Math.sin(endAngle) * 1.5, 0],
            ]}
          />
        )
      })}
      <DraftLine points={[[0.634, 2.922, 0], [0.648, 2.858, 0]]} />
      <DraftLine points={[[0.634, 2.922, 0], [0.593, 2.877, 0]]} />
    </group>
  )
}
