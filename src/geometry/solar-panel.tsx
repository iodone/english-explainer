import { SketchMesh, Rod, DraftLine } from './primitives'

/** 太阳能板 — 斜视：玻璃面、电池网格、背板、支腿、接线盒与输出线 */

const rowYs = [-0.14, 0, 0.14]
const colXs = [-0.30, -0.18, -0.06, 0.06, 0.18, 0.30]
const barYs = [-0.20, 0, 0.20]
const wirePoints: Array<[number, number, number]> = [
  [-0.28, -0.03, -0.055],
  [-0.28, -0.31, 0],
  [0.52, -0.31, 0],
]

export default function SolarPanelSketch() {
  return (
    <group>
      <SketchMesh partId="glass-face" position={[0, 0.02, 0.04]} rotation={[-0.32, 0, 0]}>
        <boxGeometry args={[0.80, 0.52, 0.012]} />
      </SketchMesh>

      {rowYs.map((y, index) => (
        <SketchMesh
          key={`checker-row-${index}`}
          partId="sun-checkers"
          position={[0, 0.02 + y, 0.028]}
          rotation={[-0.32, 0, 0]}
        >
          <boxGeometry args={[0.76, 0.016, 0.012]} />
        </SketchMesh>
      ))}
      {colXs.map((x, index) => (
        <SketchMesh
          key={`checker-column-${index}`}
          partId="sun-checkers"
          position={[x, 0.02, 0.028]}
          rotation={[-0.32, 0, 0]}
        >
          <boxGeometry args={[0.016, 0.50, 0.012]} />
        </SketchMesh>
      ))}

      <SketchMesh partId="back-sheet" position={[0, 0.02, 0.015]} rotation={[-0.32, 0, 0]}>
        <boxGeometry args={[0.76, 0.48, 0.010]} />
      </SketchMesh>

      {barYs.map((y, index) => (
        <SketchMesh
          key={`bar-${index}`}
          partId="metal-bars"
          position={[0, 0.02 + y, 0]}
          rotation={[-0.32, 0, 0]}
        >
          <boxGeometry args={[0.74, 0.018, 0.016]} />
        </SketchMesh>
      ))}

      <Rod from={[0.22, -0.22, 0.12]} to={[0.22, -0.38, 0.12]} radius={0.008} partId="stand-legs" />
      <Rod from={[-0.22, -0.22, 0.12]} to={[-0.22, -0.38, 0.12]} radius={0.008} partId="stand-legs" />
      <Rod from={[0.30, -0.16, -0.05]} to={[0.30, -0.38, -0.05]} radius={0.008} partId="stand-legs" />
      <Rod from={[-0.30, -0.16, -0.05]} to={[-0.30, -0.38, -0.05]} radius={0.008} partId="stand-legs" />

      <SketchMesh partId="power-box" position={[-0.28, 0.02, -0.055]}>
        <boxGeometry args={[0.12, 0.09, 0.05]} />
      </SketchMesh>

      {wirePoints.slice(0, -1).map((from, index) => (
        <Rod
          key={`wire-${index}`}
          from={from}
          to={wirePoints[index + 1]}
          radius={0.004}
          partId="wire-line"
        />
      ))}

      <DraftLine points={[[-1.0, -0.38, 0], [1.0, -0.38, 0]]} />
      <SketchMesh position={[-0.60, 0.40, 0]}>
        <sphereGeometry args={[0.045, 10, 8]} />
      </SketchMesh>
      <DraftLine points={[[-0.67, 0.33, 0], [-0.74, 0.26, 0]]} />
      <DraftLine points={[[-0.53, 0.33, 0], [-0.46, 0.26, 0]]} />
      <DraftLine points={[[-0.67, 0.47, 0], [-0.74, 0.54, 0]]} />
      <DraftLine points={[[-0.53, 0.47, 0], [-0.46, 0.54, 0]]} />
      <SketchMesh position={[0.62, -0.315, 0]}>
        <boxGeometry args={[0.18, 0.13, 0.12]} />
      </SketchMesh>
      <DraftLine points={[[0.50, -0.25, 0], [0.62, -0.16, 0], [0.74, -0.25, 0]]} />
      <SketchMesh position={[0.62, -0.345, 0.062]}>
        <boxGeometry args={[0.035, 0.07, 0.008]} />
      </SketchMesh>
    </group>
  )
}
