import { SketchMesh, Rod, DraftLine } from './primitives'

const towerPositions = [-0.6, 0.3, 1.2]

const wireSegments: Array<[[number, number], [number, number]]> = [
  [[-1.44, -0.15], [-1.2, 0.1]],
  [[-1.2, 0.1], [-0.9, 0.32]],
  [[-0.9, 0.32], [-0.3, 0.32]],
  [[-0.3, 0.32], [-0.15, 0.22]],
  [[-0.15, 0.22], [0.0, 0.32]],
  [[0.0, 0.32], [0.6, 0.32]],
  [[0.6, 0.32], [0.75, 0.22]],
  [[0.75, 0.22], [0.9, 0.32]],
  [[0.9, 0.32], [1.5, 0.32]],
  [[1.5, 0.32], [2.05, -0.4]],
]

export default function PowerGridSketch() {
  return (
    <group>
      <SketchMesh partId="push-maker" position={[-2.3, -0.475, 0]}>
        <boxGeometry args={[0.7, 0.55, 0.5]} />
      </SketchMesh>
      <SketchMesh partId="push-maker" position={[-2.3, -0.3, 0]}>
        <torusGeometry args={[0.16, 0.03, 8, 24]} />
      </SketchMesh>

      <SketchMesh partId="tall-changer" position={[-1.5, -0.5, 0]}>
        <boxGeometry args={[0.28, 0.5, 0.28]} />
      </SketchMesh>
      {[-0.35, -0.5, -0.65].map(y => (
        <SketchMesh key={`tall-ring-${y}`} partId="tall-changer" position={[-1.5, y, 0]}>
          <torusGeometry args={[0.09, 0.02, 8, 20]} />
        </SketchMesh>
      ))}

      {towerPositions.map(x => (
        <group key={`tower-${x}`}>
          <Rod from={[x - 0.12, -0.75, 0]} to={[x, 0.1, 0]} radius={0.018} partId="iron-men" />
          <Rod from={[x + 0.12, -0.75, 0]} to={[x, 0.1, 0]} radius={0.018} partId="iron-men" />
          <Rod from={[x - 0.3, 0.32, 0]} to={[x + 0.3, 0.32, 0]} radius={0.018} partId="iron-men" />
          <Rod from={[x - 0.2, 0.15, 0]} to={[x + 0.2, 0.15, 0]} radius={0.018} partId="iron-men" />
          <Rod from={[x - 0.09, -0.55, 0]} to={[x + 0.09, -0.35, 0]} radius={0.014} partId="iron-men" />
          <Rod from={[x + 0.09, -0.55, 0]} to={[x - 0.09, -0.35, 0]} radius={0.014} partId="iron-men" />
        </group>
      ))}

      {wireSegments.map(([from, to], index) => (
        <Rod
          key={`wire-${index}`}
          from={[...from, 0]}
          to={[...to, 0]}
          radius={0.012}
          partId="long-wires"
        />
      ))}

      <SketchMesh partId="small-changer" position={[2.1, -0.6, 0]}>
        <boxGeometry args={[0.24, 0.3, 0.24]} />
      </SketchMesh>
      <SketchMesh partId="small-changer" position={[2.1, -0.6, 0]}>
        <torusGeometry args={[0.07, 0.02, 8, 18]} />
      </SketchMesh>

      <SketchMesh partId="wall-doors" position={[2.72, -0.55, 0.26]}>
        <boxGeometry args={[0.07, 0.07, 0.02]} />
      </SketchMesh>
      <SketchMesh partId="wall-doors" position={[2.72, -0.55, -0.26]}>
        <boxGeometry args={[0.07, 0.07, 0.02]} />
      </SketchMesh>

      <SketchMesh partId="night-windows" position={[2.9, -0.5, 0]}>
        <boxGeometry args={[0.55, 0.5, 0.5]} />
      </SketchMesh>
      <Rod from={[2.58, -0.25, 0]} to={[2.9, 0, 0]} radius={0.018} partId="night-windows" />
      <Rod from={[3.22, -0.25, 0]} to={[2.9, 0, 0]} radius={0.018} partId="night-windows" />
      <SketchMesh partId="night-windows" position={[2.82, -0.42, 0.26]}>
        <boxGeometry args={[0.1, 0.1, 0.02]} />
      </SketchMesh>
      <SketchMesh partId="night-windows" position={[2.98, -0.42, 0.26]}>
        <boxGeometry args={[0.1, 0.1, 0.02]} />
      </SketchMesh>

      <DraftLine points={[[-2.8, -0.75, 0], [3.4, -0.75, 0]]} />
      {[-2.3, -1.5, -0.7, 0.1, 0.9, 1.7].map((x, index) => (
        <DraftLine key={`ground-mark-${index}`} points={[[x, -0.75, 0], [x + 0.1, -0.81, 0]]} />
      ))}

      <DraftLine
        points={[
          [-1.25, -0.75, 0],
          [-1.15, -0.68, 0],
          [-1.0, -0.65, 0],
          [-0.85, -0.68, 0],
          [-0.75, -0.75, 0],
        ]}
      />
      <DraftLine
        points={[
          [1.4, -0.75, 0],
          [1.5, -0.68, 0],
          [1.65, -0.65, 0],
          [1.8, -0.68, 0],
          [1.9, -0.75, 0],
        ]}
      />

      <DraftLine points={[[-2.6, -0.2, 0], [-2.5, -0.3, 0]]} />
      <DraftLine points={[[-2.5, -0.3, 0], [-2.45, -0.35, 0]]} />
      <DraftLine points={[[-2.56, -0.24, 0], [-2.5, -0.31, 0]]} />

      {[
        { center: [-2.3, -0.12], radius: 0.04 },
        { center: [-2.24, 0.05], radius: 0.05 },
        { center: [-2.15, 0.22], radius: 0.06 },
      ].map(({ center, radius }, circleIndex) =>
        Array.from({ length: 10 }, (_, index) => {
          const startAngle = (index / 10) * Math.PI * 2
          const endAngle = ((index + 1) / 10) * Math.PI * 2
          return (
            <DraftLine
              key={`smoke-${circleIndex}-${index}`}
              points={[
                [center[0] + Math.cos(startAngle) * radius, center[1] + Math.sin(startAngle) * radius, 0],
                [center[0] + Math.cos(endAngle) * radius, center[1] + Math.sin(endAngle) * radius, 0],
              ]}
            />
          )
        }),
      )}

      {[
        [-0.15, 0.26],
        [0.75, 0.26],
      ].map(([x, y], index) => (
        <group key={`bird-${index}`}>
          <DraftLine points={[[x - 0.05, y, 0], [x, y + 0.04, 0]]} />
          <DraftLine points={[[x, y + 0.04, 0], [x + 0.05, y, 0]]} />
        </group>
      ))}

      {[
        [-2.5, 0.9],
        [2.6, 0.8],
      ].map(([x, y], index) => (
        <group key={`star-${index}`}>
          <DraftLine points={[[x - 0.05, y, 0], [x + 0.05, y, 0]]} />
          <DraftLine points={[[x, y - 0.05, 0], [x, y + 0.05, 0]]} />
        </group>
      ))}
    </group>
  )
}
