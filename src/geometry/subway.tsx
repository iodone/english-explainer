import { SketchMesh, Rod, DraftLine } from './primitives'

/** 地铁 — 剖面：隧道环、列车、轨道、扶梯与第三轨 */

const tunnelXs = [-1.2, -0.6, 0, 0.6, 1.2]
const trainCarXs = [-0.62, 0, 0.62]
const windowPositions: Array<[number, number, number]> = [
  [-0.76, -0.20, 0.128], [-0.48, -0.20, 0.128],
  [0.48, -0.20, 0.128], [0.76, -0.20, 0.128],
]
const wheelPositions: Array<[number, number, number]> = [
  [-0.80, -0.42, 0.12], [-0.44, -0.42, 0.12], [-0.18, -0.42, 0.12],
  [0.18, -0.42, 0.12], [0.44, -0.42, 0.12], [0.80, -0.42, 0.12],
]
const sleeperXs = [-1.05, -0.70, -0.35, 0, 0.35, 0.70, 1.05]
const stepCenters: Array<[number, number]> = [
  [1.30, 0.53], [1.27, 0.40], [1.24, 0.24],
  [1.21, 0.08], [1.18, -0.08], [1.15, -0.24],
]
const powerSupportXs = [-0.85, 0, 0.85]
const dirtXs = [-0.9, -0.3, 0.3, 0.9]
const buildingOutlines: Array<[number, number, number][]> = [
  [[-1.10, 0.55, 0], [-1.10, 0.82, 0], [-0.80, 0.82, 0], [-0.80, 0.55, 0], [-1.10, 0.55, 0]],
  [[-0.55, 0.55, 0], [-0.55, 0.95, 0], [-0.15, 0.95, 0], [-0.15, 0.55, 0], [-0.55, 0.55, 0]],
  [[0.30, 0.55, 0], [0.30, 0.78, 0], [0.62, 0.78, 0], [0.62, 0.55, 0], [0.30, 0.55, 0]],
]

export default function SubwaySketch() {
  return (
    <group>
      {tunnelXs.map(x => (
        <SketchMesh key={`tunnel-${x}`} partId="deep-hole" position={[x, -0.25, 0]} rotation={[0, Math.PI / 2, 0]}>
          <torusGeometry args={[0.42, 0.012, 6, 20]} />
        </SketchMesh>
      ))}

      <Rod from={[-1.28, 0.17, 0]} to={[1.28, 0.17, 0]} radius={0.02} partId="stone-sides" />
      <Rod from={[-1.28, -0.67, 0]} to={[1.28, -0.67, 0]} radius={0.02} partId="stone-sides" />
      <SketchMesh partId="stone-sides" position={[1.10, -0.33, 0]}>
        <boxGeometry args={[0.46, 0.06, 0.34]} />
      </SketchMesh>

      {trainCarXs.map(x => (
        <SketchMesh key={`car-${x}`} partId="long-train" position={[x, -0.25, 0]}>
          <boxGeometry args={[0.54, 0.26, 0.24]} />
        </SketchMesh>
      ))}
      <Rod from={[-0.35, -0.25, 0]} to={[-0.27, -0.25, 0]} radius={0.014} partId="long-train" />
      <Rod from={[0.27, -0.25, 0]} to={[0.35, -0.25, 0]} radius={0.014} partId="long-train" />
      {windowPositions.map((position, index) => (
        <SketchMesh key={`window-${index}`} partId="long-train" position={position}>
          <boxGeometry args={[0.11, 0.09, 0.015]} />
        </SketchMesh>
      ))}
      {wheelPositions.map((position, index) => (
        <SketchMesh key={`wheel-${index}`} partId="long-train" position={position}>
          <torusGeometry args={[0.055, 0.013, 6, 12]} />
        </SketchMesh>
      ))}

      <Rod from={[-1.28, -0.49, -0.10]} to={[1.28, -0.49, -0.10]} radius={0.012} partId="steel-rails" />
      <Rod from={[-1.28, -0.49, 0.10]} to={[1.28, -0.49, 0.10]} radius={0.012} partId="steel-rails" />
      {sleeperXs.map(x => (
        <Rod
          key={`sleeper-${x}`}
          from={[x, -0.51, -0.10]}
          to={[x, -0.51, 0.10]}
          radius={0.008}
          partId="steel-rails"
        />
      ))}

      <SketchMesh partId="side-doors" position={[-0.05, -0.25, 0.129]}>
        <boxGeometry args={[0.09, 0.20, 0.015]} />
      </SketchMesh>
      <SketchMesh partId="side-doors" position={[0.11, -0.25, 0.129]}>
        <boxGeometry args={[0.09, 0.20, 0.015]} />
      </SketchMesh>

      {stepCenters.map(([x, y], index) => (
        <Rod
          key={`step-${index}`}
          from={[x - 0.08, y, 0]}
          to={[x + 0.08, y, 0]}
          radius={0.010}
          partId="moving-steps"
        />
      ))}
      <Rod from={[1.37, 0.58, 0]} to={[1.10, -0.30, 0]} radius={0.008} partId="moving-steps" />

      <Rod from={[-1.28, -0.50, 0.17]} to={[1.28, -0.50, 0.17]} radius={0.014} partId="power-rail" />
      {powerSupportXs.map(x => (
        <Rod
          key={`power-support-${x}`}
          from={[x, -0.67, 0.17]}
          to={[x, -0.505, 0.17]}
          radius={0.008}
          partId="power-rail"
        />
      ))}
      {powerSupportXs.map(x => (
        <SketchMesh key={`insulator-${x}`} partId="power-rail" position={[x, -0.475, 0.17]}>
          <sphereGeometry args={[0.02, 8, 6]} />
        </SketchMesh>
      ))}

      <DraftLine points={[[-1.35, 0.55, 0], [1.35, 0.55, 0]]} />
      {buildingOutlines.map((points, index) => (
        <DraftLine key={`building-${index}`} points={points} />
      ))}
      {dirtXs.map((x, index) => (
        <DraftLine key={`dirt-${index}`} points={[[x - 0.06, 0.20, 0], [x + 0.06, 0.50, 0]]} />
      ))}
      <DraftLine points={[[1.40, 0.40, 0], [1.50, 0.30, 0], [1.40, 0.30, 0]]} />
      <DraftLine points={[[1.37, 0.20, 0], [1.47, 0.10, 0], [1.37, 0.10, 0]]} />
      <DraftLine points={[[-1.05, -0.30, 0], [-0.92, -0.30, 0]]} />
      <DraftLine points={[[-1.05, -0.25, 0], [-0.92, -0.25, 0]]} />
      <DraftLine points={[[-1.05, -0.20, 0], [-0.92, -0.20, 0]]} />
    </group>
  )
}
