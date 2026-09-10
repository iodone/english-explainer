import { SketchMesh, Rod, DraftLine } from './primitives'

const bubblePositions: Array<[number, number, number]> = [
  [-0.28, 0.44, 0.32],
  [0.24, 0.46, 0.26],
  [-0.5, 0.18, 0.24],
  [0.05, -0.54, 0.28],
]

const windBreath: Array<[[number, number], [number, number]]> = [
  [[-0.65, 0.2], [-1.1, 0.35]],
  [[-0.55, 0.35], [-0.95, 0.55]],
  [[-0.4, 0.48], [-0.75, 0.72]],
]

const windArrows: Array<[[number, number], [number, number]]> = [
  [[-1.037, 0.287], [-1.1, 0.35]],
  [[-1.011, 0.363], [-1.1, 0.35]],
  [[-0.896, 0.478], [-0.95, 0.55]],
  [[-0.86, 0.55], [-0.95, 0.55]],
  [[-0.707, 0.642], [-0.75, 0.72]],
  [[-0.661, 0.708], [-0.75, 0.72]],
]

const backgroundStars: Array<[number, number]> = [
  [-2.5, 1.2],
  [-2.8, -0.4],
  [1.6, 1.3],
  [1.2, -1.2],
]

export default function SunSketch() {
  return (
    <group>
      <SketchMesh partId="fire-heart" position={[0, 0, 0]}>
        <sphereGeometry args={[0.18, 14, 12]} />
      </SketchMesh>

      <SketchMesh partId="slow-roads" position={[0, 0, 0]}>
        <sphereGeometry args={[0.34, 18, 14]} />
      </SketchMesh>
      <SketchMesh partId="slow-roads" position={[0, 0, 0]}>
        <sphereGeometry args={[0.5, 20, 16]} />
      </SketchMesh>

      <SketchMesh partId="hot-face" position={[0, 0, 0]}>
        <sphereGeometry args={[0.62, 24, 18]} />
      </SketchMesh>
      {bubblePositions.map((position, index) => (
        <SketchMesh key={`bubble-${index}`} partId="hot-face" position={position}>
          <sphereGeometry args={[0.09, 12, 10]} />
        </SketchMesh>
      ))}

      <SketchMesh partId="fire-arms" position={[0.53, 0.32, 0]} rotation={[0, 0, -1.03]}>
        <torusGeometry args={[0.16, 0.015, 8, 20, Math.PI]} />
      </SketchMesh>
      <SketchMesh partId="fire-arms" position={[-0.42, -0.42, 0]} rotation={[0, 0, 2.36]}>
        <torusGeometry args={[0.14, 0.015, 8, 20, Math.PI]} />
      </SketchMesh>

      {windBreath.map(([from, to], index) => (
        <Rod key={`wind-${index}`} from={[...from, 0]} to={[...to, 0]} radius={0.008} partId="wind-breath" />
      ))}
      {windArrows.map(([from, to], index) => (
        <Rod key={`wind-arrow-${index}`} from={[...from, 0]} to={[...to, 0]} radius={0.008} partId="wind-breath" />
      ))}

      <Rod from={[0.63, 0.02, 0]} to={[2.41, -0.17, 0]} radius={0.01} partId="light-road" />
      <Rod from={[2.315, -0.11, 0]} to={[2.41, -0.17, 0]} radius={0.008} partId="light-road" />
      <Rod from={[2.305, -0.208, 0]} to={[2.41, -0.17, 0]} radius={0.008} partId="light-road" />

      <SketchMesh partId="light-catchers" position={[2.35, 0.28, 0]}>
        <boxGeometry args={[0.12, 0.025, 0.05]} />
      </SketchMesh>
      <SketchMesh partId="light-catchers" position={[2.52, 0.44, 0]}>
        <boxGeometry args={[0.12, 0.025, 0.05]} />
      </SketchMesh>
      <Rod from={[2.35, 0.17, 0]} to={[2.35, 0.27, 0]} radius={0.006} partId="light-catchers" />
      <Rod from={[2.52, 0.33, 0]} to={[2.52, 0.43, 0]} radius={0.006} partId="light-catchers" />

      {Array.from({ length: 16 }, (_, index) => {
        const angle = (index / 16) * Math.PI * 2
        const nextAngle = ((index + 1) / 16) * Math.PI * 2
        return (
          <DraftLine
            key={`earth-${index}`}
            points={[
              [2.75 + Math.cos(angle) * 0.35, -0.2 + Math.sin(angle) * 0.35, 0],
              [2.75 + Math.cos(nextAngle) * 0.35, -0.2 + Math.sin(nextAngle) * 0.35, 0],
            ]}
          />
        )
      })}
      <DraftLine points={[[2.55, -0.05, 0], [2.72, 0.02, 0]]} />
      <DraftLine points={[[2.62, -0.3, 0], [2.85, -0.24, 0]]} />

      {Array.from({ length: 8 }, (_, index) => {
        const startAngle = (-34.2 + (index / 8) * 60) * (Math.PI / 180)
        const endAngle = (-34.2 + ((index + 1) / 8) * 60) * (Math.PI / 180)
        return (
          <DraftLine
            key={`earth-orbit-${index}`}
            points={[
              [Math.cos(startAngle) * 2.76, Math.sin(startAngle) * 2.76, 0],
              [Math.cos(endAngle) * 2.76, Math.sin(endAngle) * 2.76, 0],
            ]}
          />
        )
      })}
      <DraftLine points={[[2.42, -0.55, 0], [2.35, -0.62, 0]]} />
      <DraftLine points={[[2.42, -0.55, 0], [2.33, -0.5, 0]]} />

      {backgroundStars.map(([x, y], index) => (
        <group key={`background-star-${index}`}>
          <DraftLine points={[[x - 0.05, y, 0], [x + 0.05, y, 0]]} />
          <DraftLine points={[[x, y - 0.05, 0], [x, y + 0.05, 0]]} />
        </group>
      ))}
    </group>
  )
}
