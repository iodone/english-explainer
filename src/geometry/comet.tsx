import { SketchMesh, Rod, DraftLine } from './primitives'

const gasDoorLines: Array<[[number, number, number], [number, number, number]]> = [
  [[-0.75, -0.1, 0], [-1.1, -0.22, 0]],
  [[-0.45, 0.26, 0], [-0.65, 0.5, 0]],
  [[-0.62, -0.2, 0], [-0.95, -0.5, 0]],
]

const dustTailLines: Array<[[number, number], [number, number], [number, number]]> = [
  [[-1.0, 0.22], [-1.6, 0.35], [-2.15, 0.5]],
  [[-1.05, 0.08], [-1.75, 0.18], [-2.4, 0.28]],
  [[-1.05, -0.05], [-1.8, 0.0], [-2.5, 0.05]],
  [[-1.0, -0.15], [-1.6, -0.18], [-2.1, -0.2]],
]

const straightTailLines: Array<[[number, number], [number, number]]> = [
  [[-1.0, -0.22], [-2.2, -0.62]],
  [[-1.0, -0.35], [-2.2, -0.75]],
  [[-0.95, -0.48], [-2.1, -0.88]],
]

const longPathLines: Array<[[number, number], [number, number]]> = [
  [[1.5, -0.15], [1.1, -0.45]],
  [[1.1, -0.45], [0.7, -0.55]],
  [[0.7, -0.55], [0.3, -0.5]],
  [[0.3, -0.5], [0.1, -0.38]],
  [[-1.1, 0.15], [-1.6, 0.4]],
  [[-1.6, 0.4], [-2.2, 0.65]],
]

export default function CometSketch() {
  return (
    <group>
      <SketchMesh partId="ice-heart" position={[-0.5, 0.05, 0]}>
        <sphereGeometry args={[0.28, 14, 12]} />
      </SketchMesh>
      <SketchMesh partId="ice-heart" position={[-0.32, -0.08, 0.06]}>
        <sphereGeometry args={[0.18, 12, 10]} />
      </SketchMesh>

      <SketchMesh partId="dark-skin" position={[-0.5, 0.02, 0]}>
        <sphereGeometry args={[0.33, 8, 6]} />
      </SketchMesh>

      <SketchMesh partId="warm-coat" position={[-0.5, 0, 0]}>
        <sphereGeometry args={[0.55, 10, 8]} />
      </SketchMesh>

      {gasDoorLines.map(([from, to], index) => (
        <Rod key={`gas-door-${index}`} from={from} to={to} radius={0.015} partId="gas-doors" />
      ))}

      {dustTailLines.map(([first, middle, last], index) => (
        <group key={`dust-tail-${index}`}>
          <Rod from={[...first, 0]} to={[...middle, 0]} radius={0.015} partId="dust-tail" />
          <Rod from={[...middle, 0]} to={[...last, 0]} radius={0.015} partId="dust-tail" />
        </group>
      ))}

      {straightTailLines.map(([from, to], index) => (
        <Rod key={`light-tail-${index}`} from={[...from, 0]} to={[...to, 0]} radius={0.012} partId="light-tail" />
      ))}

      {longPathLines.map(([from, to], index) => (
        <Rod key={`long-path-${index}`} from={[...from, 0]} to={[...to, 0]} radius={0.012} partId="long-path" />
      ))}

      {Array.from({ length: 8 }, (_, index) => {
        const startAngle = (index / 8) * Math.PI * 2
        const endAngle = ((index + 1) / 8) * Math.PI * 2
        return (
          <DraftLine
            key={`sun-${index}`}
            points={[
              [1.6 + Math.cos(startAngle) * 0.3, 0.7 + Math.sin(startAngle) * 0.3, 0],
              [1.6 + Math.cos(endAngle) * 0.3, 0.7 + Math.sin(endAngle) * 0.3, 0],
            ]}
          />
        )
      })}
      {Array.from({ length: 6 }, (_, index) => {
        const angle = (index / 6) * Math.PI * 2
        return (
          <DraftLine
            key={`sun-ray-${index}`}
            points={[
              [1.6 + Math.cos(angle) * 0.38, 0.7 + Math.sin(angle) * 0.38, 0],
              [1.6 + Math.cos(angle) * 0.5, 0.7 + Math.sin(angle) * 0.5, 0],
            ]}
          />
        )
      })}

      <DraftLine points={[[-0.1, -0.35, 0], [-0.35, 0.0, 0]]} />
      <DraftLine points={[[-0.35, 0.0, 0], [-0.28, 0.05, 0]]} />
      <DraftLine points={[[-0.35, 0.0, 0], [-0.29, -0.07, 0]]} />

      {[
        [2.2, -0.8],
        [-2.6, -1.0],
        [0.5, 1.3],
        [-1.8, 1.2],
      ].map(([x, y], index) => (
        <group key={`star-${index}`}>
          <DraftLine points={[[x - 0.05, y, 0], [x + 0.05, y, 0]]} />
          <DraftLine points={[[x, y - 0.05, 0], [x, y + 0.05, 0]]} />
        </group>
      ))}
    </group>
  )
}
