import { SketchMesh, Rod, DraftLine } from './primitives'

const starPositions: Array<[number, number, number]> = [
  [1.08, 0.16, 0.36],
  [0, 0.47, 1.05],
  [-1.08, 0.16, 0.36],
  [-0.74, -0.36, -0.8],
  [0.58, -0.41, -0.91],
]

const spaceBendRods: Array<[[number, number, number], [number, number, number]]> = [
  [[0.9, -0.18, 0], [1.3, -0.42, 0]],
  [[0, -0.18, 0.9], [0, -0.42, 1.3]],
  [[-0.9, -0.18, 0], [-1.3, -0.42, 0]],
  [[0, -0.18, -0.9], [0, -0.42, -1.3]],
  [[1.3, -0.42, 0], [1.7, -0.72, 0]],
  [[0, -0.42, 1.3], [0, -0.72, 1.7]],
  [[-1.3, -0.42, 0], [-1.7, -0.72, 0]],
  [[0, -0.42, -1.3], [0, -0.72, -1.7]],
]

const jetArrows: Array<[[number, number, number], [number, number, number]]> = [
  [[-0.05, 1.38, 0], [0, 1.5, 0]],
  [[0.05, 1.38, 0], [0, 1.5, 0]],
  [[-0.05, -1.38, 0], [0, -1.5, 0]],
  [[0.05, -1.38, 0], [0, -1.5, 0]],
]

const starCrosses: Array<[number, number]> = [
  [-2.6, 1.3],
  [-2.8, -0.7],
  [2.6, 1.2],
  [2.7, -0.8],
  [2.2, 1.8],
]

export default function BlackHoleSketch() {
  return (
    <group>
      <SketchMesh partId="dark-heart" position={[0, 0, 0]}>
        <sphereGeometry args={[0.42, 18, 14]} />
      </SketchMesh>

      <SketchMesh partId="no-return-line" position={[0, 0, 0]}>
        <torusGeometry args={[0.5, 0.012, 8, 32]} />
      </SketchMesh>

      <SketchMesh partId="light-ring" position={[0, 0, 0]}>
        <torusGeometry args={[0.58, 0.012, 8, 36]} />
      </SketchMesh>

      <SketchMesh partId="hot-ring" position={[0, 0, 0]} rotation={[1.15, 0, 0]}>
        <torusGeometry args={[0.88, 0.028, 8, 48]} />
      </SketchMesh>

      <Rod from={[0, 0.5, 0]} to={[0, 1.5, 0]} radius={0.012} partId="jet-lines" />
      <Rod from={[0, -0.5, 0]} to={[0, -1.5, 0]} radius={0.012} partId="jet-lines" />
      {jetArrows.map(([from, to], index) => (
        <Rod key={`jet-arrow-${index}`} from={from} to={to} radius={0.008} partId="jet-lines" />
      ))}

      <SketchMesh partId="space-bend" position={[0, -0.18, 0]}>
        <torusGeometry args={[0.9, 0.008, 8, 32]} />
      </SketchMesh>
      <SketchMesh partId="space-bend" position={[0, -0.42, 0]}>
        <torusGeometry args={[1.3, 0.008, 8, 40]} />
      </SketchMesh>
      <SketchMesh partId="space-bend" position={[0, -0.72, 0]}>
        <torusGeometry args={[1.7, 0.008, 8, 48]} />
      </SketchMesh>
      {spaceBendRods.map(([from, to], index) => (
        <Rod key={`space-bend-rod-${index}`} from={from} to={to} radius={0.008} partId="space-bend" />
      ))}

      {starPositions.map((position, index) => (
        <SketchMesh key={`star-${index}`} partId="star-dance" position={position}>
          <sphereGeometry args={[0.035, 10, 8]} />
        </SketchMesh>
      ))}

      {Array.from({ length: 20 }, (_, index) => {
        const angle = (index / 20) * Math.PI * 2
        const nextAngle = ((index + 1) / 20) * Math.PI * 2
        return (
          <DraftLine
            key={`star-orbit-${index}`}
            points={[
              [Math.cos(angle) * 1.15, Math.sin(angle) * 0.47, Math.sin(angle) * 1.05],
              [Math.cos(nextAngle) * 1.15, Math.sin(nextAngle) * 0.47, Math.sin(nextAngle) * 1.05],
            ]}
          />
        )
      })}

      <DraftLine
        points={[
          [-2.3, 0.55, 0],
          [-1.5, 0.68, 0],
          [-0.7, 0.86, 0],
          [0, 0.95, 0],
          [0.7, 0.86, 0],
          [1.5, 0.68, 0],
          [2.3, 0.55, 0],
        ]}
      />
      <DraftLine
        points={[
          [-2.3, -0.3, 0],
          [-1.4, -0.12, 0],
          [-0.7, 0.3, 0],
          [0, 0.62, 0],
          [0.7, 0.3, 0],
          [1.4, -0.12, 0],
          [2.3, -0.3, 0],
        ]}
      />

      {starCrosses.map(([x, y], index) => (
        <group key={`background-star-${index}`}>
          <DraftLine points={[[x - 0.05, y, 0], [x + 0.05, y, 0]]} />
          <DraftLine points={[[x, y - 0.05, 0], [x, y + 0.05, 0]]} />
        </group>
      ))}
    </group>
  )
}
