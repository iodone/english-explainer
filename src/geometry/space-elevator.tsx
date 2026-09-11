import { SketchMesh, Rod, DraftLine } from './primitives'

/** 太空电梯 — 竖构图：地面站、光炮、缆绳、空间站与配重岩 */

const rockPath: Array<[number, number, number]> = [
  [0.17, 0.77, 0], [0.135, 0.831, 0], [0.065, 0.831, 0], [0.03, 0.77, 0],
  [0.065, 0.709, 0], [0.135, 0.709, 0], [0.17, 0.77, 0],
]
const beamSegs: Array<[number, number, number, number]> = [
  [-0.22, -0.47, -0.166, -0.411],
  [-0.132, -0.374, -0.078, -0.315],
  [-0.044, -0.278, 0.01, -0.219],
]
const circleAt = (radius: number, x: number, y: number): Array<[number, number, number]> =>
  Array.from({ length: 9 }, (_, k) => {
    const a = (k / 8) * Math.PI * 2
    return [x + radius * Math.cos(a), y + radius * Math.sin(a), 0] as [number, number, number]
  })
const stars = [
  circleAt(0.015, -0.35, 0.55),
  circleAt(0.015, -0.60, 0.70),
  circleAt(0.015, -0.15, 0.85),
]
const moon = circleAt(0.06, 0.75, 0.50)
const craters = [circleAt(0.015, 0.08, 0.79), circleAt(0.015, 0.13, 0.755)]

export default function SpaceElevatorSketch() {
  return (
    <group>
      <Rod from={[0.10, -0.34, 0]} to={[0.10, 0.77, 0]} radius={0.008} partId="great-rope" />

      <SketchMesh partId="turning-world" position={[-0.60, -0.58, 0]}>
        <sphereGeometry args={[0.22, 16, 12]} />
      </SketchMesh>
      <SketchMesh partId="turning-world" position={[-0.60, -0.58, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[0.22, 0.008, 6, 24]} />
      </SketchMesh>

      <SketchMesh partId="ground-house" position={[0.10, -0.53, 0]}>
        <boxGeometry args={[0.26, 0.18, 0.20]} />
      </SketchMesh>
      <DraftLine
        points={[[-0.05, -0.44, 0], [0.10, -0.34, 0], [0.25, -0.44, 0], [-0.05, -0.44, 0]]}
      />
      <SketchMesh partId="ground-house" position={[0.10, -0.57, 0.105]}>
        <boxGeometry args={[0.06, 0.10, 0.012]} />
      </SketchMesh>

      <SketchMesh partId="climbing-car" position={[0.10, -0.12, 0]}>
        <boxGeometry args={[0.12, 0.14, 0.14]} />
      </SketchMesh>
      {[
        [0.10, -0.075, -0.08], [0.10, -0.075, 0.08],
        [0.10, -0.165, -0.08], [0.10, -0.165, 0.08],
      ].map((position, index) => (
        <SketchMesh key={`wheel-${index}`} partId="climbing-car" position={position as [number, number, number]}>
          <torusGeometry args={[0.032, 0.008, 8, 14]} />
        </SketchMesh>
      ))}

      <SketchMesh partId="sky-station" position={[0.10, 0.58, 0]}>
        <torusGeometry args={[0.16, 0.018, 8, 24]} />
      </SketchMesh>
      <SketchMesh partId="sky-station" position={[-0.06, 0.58, 0]}>
        <boxGeometry args={[0.08, 0.06, 0.08]} />
      </SketchMesh>
      <SketchMesh partId="sky-station" position={[0.26, 0.58, 0]}>
        <boxGeometry args={[0.08, 0.06, 0.08]} />
      </SketchMesh>

      {rockPath.slice(0, -1).map((from, index) => (
        <Rod
          key={`rock-${index}`}
          from={from}
          to={rockPath[index + 1]}
          radius={0.01}
          partId="space-rock"
        />
      ))}
      {craters.map((points, index) => (
        <DraftLine key={`crater-${index}`} points={points} />
      ))}

      <SketchMesh partId="light-gun" position={[-0.36, -0.575, 0]}>
        <boxGeometry args={[0.12, 0.09, 0.12]} />
      </SketchMesh>
      <Rod from={[-0.32, -0.55, 0]} to={[-0.22, -0.47, 0]} radius={0.01} partId="light-gun" />

      {beamSegs.map(([x1, y1, x2, y2], index) => (
        <Rod key={`beam-${index}`} from={[x1, y1, 0]} to={[x2, y2, 0]} radius={0.006} />
      ))}
      <DraftLine points={[[-0.30, -0.62, 0], [0.55, -0.62, 0]]} />
      {stars.map((points, index) => (
        <DraftLine key={`star-${index}`} points={points} />
      ))}
      <DraftLine points={moon} />
      <Rod from={[-0.85, -0.40, 0]} to={[-0.78, -0.36, 0]} radius={0.006} />
      <Rod from={[-0.78, -0.36, 0]} to={[-0.815, -0.335, 0]} radius={0.006} />
      <Rod from={[-0.78, -0.36, 0]} to={[-0.80, -0.385, 0]} radius={0.006} />
    </group>
  )
}
