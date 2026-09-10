import { SketchMesh, Rod, DraftLine } from './primitives'

/** 航天服 —— 正面立姿：头盔、气背、水冷内衬与四肢分层展示 */
export default function SpaceSuitSketch() {
  return (
    <group>
      <SketchMesh partId="soft-suit" position={[0, 0.55, 0]}>
        <boxGeometry args={[0.72, 0.8, 0.5]} />
      </SketchMesh>
      <SketchMesh partId="soft-suit" position={[-0.58, 0.3, 0]} rotation={[0, 0, 0.35]}>
        <boxGeometry args={[0.16, 0.75, 0.16]} />
      </SketchMesh>
      <SketchMesh partId="soft-suit" position={[0.58, 0.3, 0]} rotation={[0, 0, -0.35]}>
        <boxGeometry args={[0.16, 0.75, 0.16]} />
      </SketchMesh>
      <SketchMesh partId="soft-suit" position={[-0.19, -0.55, 0]}>
        <boxGeometry args={[0.2, 0.75, 0.2]} />
      </SketchMesh>
      <SketchMesh partId="soft-suit" position={[0.19, -0.55, 0]}>
        <boxGeometry args={[0.2, 0.75, 0.2]} />
      </SketchMesh>
      <SketchMesh partId="soft-suit" position={[0, 1.05, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[0.18, 0.035, 8, 20]} />
      </SketchMesh>

      <SketchMesh partId="glass-head" position={[0, 1.38, 0]}>
        <sphereGeometry args={[0.3, 12, 8]} />
      </SketchMesh>
      <SketchMesh partId="glass-head" position={[0, 1.36, 0.28]}>
        <torusGeometry args={[0.19, 0.025, 8, 24]} />
      </SketchMesh>

      <SketchMesh partId="water-shirt" position={[0, 0.55, 0]}>
        <boxGeometry args={[0.58, 0.62, 0.36]} />
      </SketchMesh>
      {[-0.1, 0, 0.1].map(y => (
        <DraftLine key={`water-line-${y}`} points={[[-0.2, 0.55 + y, 0.19], [0.2, 0.55 + y, 0.19]]} />
      ))}

      <SketchMesh partId="air-back" position={[0, 0.62, -0.48]}>
        <boxGeometry args={[0.5, 0.62, 0.28]} />
      </SketchMesh>

      <Rod from={[0.3, 0.75, -0.4]} to={[0.62, 0.45, -0.12]} radius={0.035} partId="air-tube" />
      <Rod from={[0.62, 0.45, -0.12]} to={[0.28, 0.62, 0.26]} radius={0.035} partId="air-tube" />
      <SketchMesh partId="air-tube" position={[0.28, 0.62, 0.26]}>
        <sphereGeometry args={[0.05, 10, 8]} />
      </SketchMesh>

      <SketchMesh partId="hand-covers" position={[-0.78, -0.12, 0]}>
        <sphereGeometry args={[0.15, 12, 10]} />
      </SketchMesh>
      <SketchMesh partId="hand-covers" position={[0.78, -0.12, 0]}>
        <sphereGeometry args={[0.15, 12, 10]} />
      </SketchMesh>

      <SketchMesh partId="moon-boots" position={[-0.19, -1.08, 0.1]}>
        <boxGeometry args={[0.3, 0.22, 0.42]} />
      </SketchMesh>
      <SketchMesh partId="moon-boots" position={[0.19, -1.08, 0.1]}>
        <boxGeometry args={[0.3, 0.22, 0.42]} />
      </SketchMesh>

      {Array.from({ length: 4 }, (_, index) => {
        const angle = (index / 4) * Math.PI * 2
        return (
          <DraftLine
            key={`sun-ray-${index}`}
            points={[
              [1.6 + Math.cos(angle) * 0.14, 1.7 + Math.sin(angle) * 0.14, 0],
              [1.6 + Math.cos(angle) * 0.3, 1.7 + Math.sin(angle) * 0.3, 0],
            ]}
          />
        )
      })}
      <DraftLine points={[[0.82, -0.06, 0.05], [1.02, -0.1, 0.05]]} />
      <DraftLine points={[[0.84, -0.14, 0.05], [1.04, -0.18, 0.05]]} />

      {[
        [-1.25, 1.65],
        [-1.0, 1.4],
        [-0.75, 1.7],
      ].map(([x, y], index) => (
        <group key={`star-${index}`}>
          <DraftLine points={[[x - 0.045, y, 0], [x + 0.045, y, 0]]} />
          <DraftLine points={[[x, y - 0.045, 0], [x, y + 0.045, 0]]} />
        </group>
      ))}
    </group>
  )
}
