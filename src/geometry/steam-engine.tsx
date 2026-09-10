import { SketchMesh, Rod, DraftLine } from './primitives'

export default function SteamEngineSketch() {
  return (
    <group>
      <SketchMesh partId="fire-box" position={[-0.85, -0.45, 0]}>
        <boxGeometry args={[0.55, 0.6, 0.45]} />
      </SketchMesh>

      <SketchMesh partId="water-room" position={[0.05, 0.15, 0]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.28, 0.28, 1.5, 14]} />
      </SketchMesh>

      <SketchMesh partId="smoke-pipe" position={[-0.85, 0.15, 0]}>
        <cylinderGeometry args={[0.12, 0.09, 0.6, 10]} />
      </SketchMesh>

      <SketchMesh partId="steam-door" position={[0.78, 0.3, 0]}>
        <boxGeometry args={[0.18, 0.16, 0.18]} />
      </SketchMesh>
      <Rod from={[0.4, 0.43, 0]} to={[0.78, 0.3, 0]} radius={0.035} partId="steam-door" />

      <SketchMesh partId="push-stick" position={[1.05, 0.1, 0]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.13, 0.13, 0.55, 12]} />
      </SketchMesh>
      <Rod from={[1.33, 0.1, 0]} to={[1.44, 0.1, 0]} radius={0.04} partId="push-stick" />
      <SketchMesh partId="push-stick" position={[1.5, 0.1, 0]}>
        <boxGeometry args={[0.12, 0.16, 0.12]} />
      </SketchMesh>

      <Rod from={[1.56, 0.1, 0]} to={[1.75, 0.05, 0]} radius={0.03} partId="turn-arm" />
      <SketchMesh partId="turn-arm" position={[1.75, 0.05, 0.1]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.04, 0.04, 0.08, 8]} />
      </SketchMesh>

      <SketchMesh partId="spin-wheel" position={[1.95, -0.15, 0]}>
        <torusGeometry args={[0.45, 0.05, 8, 24]} />
      </SketchMesh>
      {[0, 72, 144, 216, 288].map(degrees => {
        const angle = (degrees * Math.PI) / 180
        return (
          <Rod
            key={`wheel-spoke-${degrees}`}
            from={[1.95, -0.15, 0]}
            to={[1.95 + Math.cos(angle) * 0.42, -0.15 + Math.sin(angle) * 0.42, 0]}
            radius={0.02}
            partId="spin-wheel"
          />
        )
      })}
      <SketchMesh partId="spin-wheel" position={[1.95, -0.15, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.08, 0.08, 0.14, 10]} />
      </SketchMesh>

      <DraftLine
        points={[
          [-0.97, -0.6, 0.225],
          [-0.73, -0.6, 0.225],
          [-0.73, -0.3, 0.225],
          [-0.97, -0.3, 0.225],
          [-0.97, -0.6, 0.225],
        ]}
      />
      <DraftLine points={[[-0.91, -0.54, 0.225], [-0.84, -0.38, 0.225]]} />
      <DraftLine points={[[-0.81, -0.53, 0.225], [-0.88, -0.38, 0.225]]} />

      {[
        [-0.95, 0.6],
        [-1.05, 0.8],
        [-1.2, 0.95],
      ].map(([x, y], index) => (
        <DraftLine
          key={`smoke-${index}`}
          points={[
            [x - 0.08, y, 0],
            [x - 0.02, y + 0.08, 0],
            [x + 0.06, y + 0.02, 0],
            [x + 0.1, y + 0.09, 0],
          ]}
        />
      ))}

      <DraftLine points={[[1.8, -0.75, 0], [1.93, -0.18, 0]]} />
      <DraftLine points={[[2.1, -0.75, 0], [1.97, -0.18, 0]]} />
      <DraftLine points={[[0.55, -0.13, 0], [0.55, -0.75, 0]]} />
      <DraftLine points={[[1.2, 0.02, 0], [1.55, 0.02, 0]]} />
      <DraftLine points={[[1.2, 0.18, 0], [1.55, 0.18, 0]]} />

      {[
        [0.85, 0.42],
        [0.8, 0.48],
      ].map(([x, y], index) => (
        <DraftLine
          key={`steam-puff-${index}`}
          points={[
            [x - 0.05, y, 0],
            [x, y + 0.06, 0],
            [x + 0.05, y + 0.01, 0],
          ]}
        />
      ))}

      <DraftLine points={[[-1.4, -0.75, 0], [2.5, -0.75, 0]]} />
      {[-1.0, -0.2, 0.8, 1.8].map((x, index) => (
        <DraftLine key={`ground-${index}`} points={[[x, -0.75, 0], [x + 0.1, -0.83, 0]]} />
      ))}
    </group>
  )
}
