import { SketchMesh, Rod, DraftLine } from './primitives'

/** 航天飞机 — 发射塔立姿：外贮箱、助推器、轨道器与机械臂 */

const finPoints: Array<[number, number, number]> = [
  [-0.24, 0.265, 0.32], [-0.30, 0.50, 0.32], [-0.16, 0.265, 0.32], [-0.24, 0.265, 0.32],
]
const nearWing: Array<[number, number, number]> = [
  [0.34, 0.11, 0.42], [-0.30, 0.11, 0.42], [-0.30, 0.11, 0.62], [0.34, 0.11, 0.42],
]
const farWing: Array<[number, number, number]> = [
  [0.34, 0.11, 0.22], [-0.30, 0.11, 0.22], [-0.30, 0.11, 0.02], [0.34, 0.11, 0.22],
]
const wings = [nearWing, farWing]
const engineZs = [0.26, 0.32, 0.38]
const heatShieldXs = [0.32, 0.10, -0.12]
const landWheels: Array<[number, number, number]> = [
  [-0.14, 0.02, 0.32], [0.30, 0.02, 0.26], [0.30, 0.02, 0.38],
]
const starPositions: Array<[number, number, number]> = [
  [-1.00, 0.55, 0], [1.00, 0.62, 0], [-1.10, 0.80, 0],
  [1.12, 0.85, 0], [-1.20, 0.95, 0],
]

export default function SpaceShuttleSketch() {
  return (
    <group>
      <SketchMesh partId="food-tank" position={[0, 0.25, 0]}>
        <cylinderGeometry args={[0.16, 0.16, 0.55, 12]} />
      </SketchMesh>
      <SketchMesh partId="food-tank" position={[0, 0.525, 0]}>
        <sphereGeometry args={[0.16, 14, 10]} />
      </SketchMesh>
      <SketchMesh partId="food-tank" position={[0, -0.025, 0]}>
        <sphereGeometry args={[0.16, 14, 10]} />
      </SketchMesh>

      {[-0.21, 0.21].map(z => (
        <group key={`booster-${z}`}>
          <SketchMesh partId="fire-sticks" position={[0.05, 0, z]}>
            <cylinderGeometry args={[0.085, 0.085, 0.62, 10]} />
          </SketchMesh>
          <SketchMesh partId="fire-sticks" position={[0.05, 0.32, z]}>
            <sphereGeometry args={[0.085, 10, 8]} />
          </SketchMesh>
          <SketchMesh partId="fire-sticks" position={[0.05, -0.33, z]}>
            <sphereGeometry args={[0.05, 8, 6]} />
          </SketchMesh>
        </group>
      ))}

      <SketchMesh partId="white-body" position={[0.08, 0.18, 0.32]}>
        <boxGeometry args={[0.64, 0.17, 0.20]} />
      </SketchMesh>
      <SketchMesh partId="white-body" position={[0.50, 0.20, 0.32]}>
        <boxGeometry args={[0.20, 0.13, 0.13]} />
      </SketchMesh>
      <SketchMesh partId="white-body" position={[0.61, 0.20, 0.32]}>
        <sphereGeometry args={[0.065, 10, 8]} />
      </SketchMesh>
      <SketchMesh partId="white-body" position={[0.36, 0.30, 0.32]}>
        <boxGeometry args={[0.17, 0.09, 0.12]} />
      </SketchMesh>
      {finPoints.slice(0, -1).map((from, index) => (
        <Rod
          key={`fin-${index}`}
          from={from}
          to={finPoints[index + 1]}
          radius={0.012}
          partId="white-body"
        />
      ))}
      {engineZs.map(z => (
        <SketchMesh key={`engine-${z}`} partId="white-body" position={[-0.28, 0.15, z]}>
          <sphereGeometry args={[0.028, 8, 6]} />
        </SketchMesh>
      ))}

      {wings.map((points, wing) =>
        points.slice(0, -1).map((from, index) => (
          <Rod
            key={`wing-${wing}-${index}`}
            from={from}
            to={points[index + 1]}
            radius={0.016}
            partId="both-wings"
          />
        )),
      )}

      {heatShieldXs.map(x => (
        <SketchMesh key={`shield-${x}`} partId="heat-shield" position={[x, 0.075, 0.32]}>
          <boxGeometry args={[0.19, 0.025, 0.17]} />
        </SketchMesh>
      ))}

      <Rod from={[0.10, 0.27, 0.32]} to={[0.32, 0.42, 0.44]} radius={0.012} partId="grab-arm" />
      <Rod from={[0.32, 0.42, 0.44]} to={[0.55, 0.32, 0.55]} radius={0.012} partId="grab-arm" />
      <SketchMesh partId="grab-arm" position={[0.32, 0.42, 0.44]}>
        <sphereGeometry args={[0.03, 10, 8]} />
      </SketchMesh>
      <Rod from={[0.55, 0.32, 0.55]} to={[0.62, 0.28, 0.62]} radius={0.008} partId="grab-arm" />
      <Rod from={[0.55, 0.32, 0.55]} to={[0.60, 0.36, 0.58]} radius={0.008} partId="grab-arm" />

      {landWheels.map(([x, y, z], index) => (
        <group key={`gear-${index}`}>
          <SketchMesh partId="land-wheels" position={[x, y, z]}>
            <torusGeometry args={[0.05, 0.012, 6, 12]} />
          </SketchMesh>
          <Rod from={[x, 0.095, z]} to={[x, 0.02, z]} radius={0.008} partId="land-wheels" />
        </group>
      ))}

      <DraftLine points={[[-0.9, -0.50, 0], [0.9, -0.50, 0]]} />
      <DraftLine
        points={[[0.10, -0.42, 0], [0.20, -0.50, 0], [0.32, -0.44, 0], [0.44, -0.52, 0]]}
      />
      <DraftLine
        points={[[-0.10, -0.42, 0], [-0.20, -0.50, 0], [-0.32, -0.44, 0], [-0.44, -0.52, 0]]}
      />
      {starPositions.map(([x, y, z], index) => (
        <group key={`star-${index}`}>
          <DraftLine points={[[x - 0.03, y, z], [x + 0.03, y, z]]} />
          <DraftLine points={[[x, y - 0.03, z], [x, y + 0.03, z]]} />
        </group>
      ))}
    </group>
  )
}
