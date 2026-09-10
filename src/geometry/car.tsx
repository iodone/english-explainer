import { SketchMesh, Rod, DraftLine } from './primitives'

const cylinders: Array<[number, number, number]> = [
  [0.72, 0.18, -0.19],
  [0.72, 0.18, 0],
  [0.72, 0.18, 0.19],
]

const crankshaft: Array<[[number, number], [number, number]]> = [
  [[0.4, 0.05], [0.55, 0.05]],
  [[0.55, 0.05], [0.62, 0.18]],
  [[0.62, 0.18], [0.72, 0.18]],
  [[0.72, 0.18], [0.79, 0.05]],
  [[0.79, 0.05], [1.0, 0.05]],
]

const wheels: Array<[number, number, number]> = [
  [0.75, -0.32, 0.5],
  [0.75, -0.32, -0.5],
  [-0.85, -0.32, 0.5],
  [-0.85, -0.32, -0.5],
]

export default function CarSketch() {
  return (
    <group>
      <SketchMesh partId="body-box" position={[0.1, -0.02, 0]}>
        <boxGeometry args={[2.5, 0.42, 0.92]} />
      </SketchMesh>
      <SketchMesh partId="body-box" position={[-0.4, 0.37, 0]}>
        <boxGeometry args={[1.05, 0.35, 0.8]} />
      </SketchMesh>

      {cylinders.map(position => (
        <SketchMesh key={`cylinder-${position[2]}`} partId="fire-rooms" position={position}>
          <cylinderGeometry args={[0.075, 0.075, 0.32, 12]} />
        </SketchMesh>
      ))}
      {cylinders.map(position => (
        <Rod
          key={`push-stick-${position[2]}`}
          from={[position[0], 0.34, position[2]]}
          to={[position[0], 0.55, position[2]]}
          radius={0.025}
          partId="push-sticks"
        />
      ))}

      {crankshaft.map(([from, to], index) => (
        <Rod
          key={`crank-${index}`}
          from={[...from, 0]}
          to={[...to, 0]}
          radius={0.025}
          partId="spin-stick"
        />
      ))}

      <SketchMesh partId="gear-room" position={[0.15, 0, 0]}>
        <boxGeometry args={[0.3, 0.3, 0.3]} />
      </SketchMesh>
      <SketchMesh partId="gear-room" position={[0.15, 0, 0.16]}>
        <torusGeometry args={[0.1, 0.02, 8, 20]} />
      </SketchMesh>

      {wheels.map(([x, y, z]) => (
        <group key={`wheel-${x}-${z}`}>
          <SketchMesh partId="road-feet" position={[x, y, z]}>
            <torusGeometry args={[0.28, 0.075, 10, 28]} />
          </SketchMesh>
          <SketchMesh
            partId="road-feet"
            position={[x, y, z + (z > 0 ? 0.01 : -0.01)]}
          >
            <circleGeometry args={[0.09, 16]} />
          </SketchMesh>
        </group>
      ))}

      {wheels.map(([x, , z]) => (
        <SketchMesh
          key={`stop-shoe-${x}-${z}`}
          partId="stop-shoes"
          position={[x, -0.32, z > 0 ? z - 0.08 : z + 0.08]}
        >
          <boxGeometry args={[0.14, 0.18, 0.06]} />
        </SketchMesh>
      ))}

      <DraftLine points={[[-1.55, -0.675, 0], [1.7, -0.675, 0]]} />
      {[-1.2, -0.7, -0.2, 0.3, 0.8].map((x, index) => (
        <DraftLine key={`road-mark-${index}`} points={[[x, -0.675, 0], [x + 0.12, -0.73, 0]]} />
      ))}
      <DraftLine points={[[1.37, 0.05, 0.2], [1.6, 0.08, 0.22]]} />
      <DraftLine points={[[1.37, 0.05, -0.2], [1.6, 0.08, -0.22]]} />
      <DraftLine points={[[-1.3, 0.2, 0], [-1.75, 0.2, 0]]} />
      <DraftLine points={[[-1.4, 0, 0], [-1.95, 0, 0]]} />
      <DraftLine points={[[-1.3, -0.2, 0], [-1.7, -0.2, 0]]} />
    </group>
  )
}
