import { SketchMesh, Rod, DraftLine } from './primitives'

/** 风机 —— 转子面向观察者偏转：三桨、齿轮舱、发电机与高塔 */
export default function WindmillSketch() {
  return (
    <group>
      {[0, 1, 2].map(index => {
        const angle = (index / 3) * Math.PI * 2
        return (
          <SketchMesh
            key={`blade-${index}`}
            partId="three-blades"
            position={[Math.sin(angle) * 0.95, 0.9 + Math.cos(angle) * 0.95, 0.35]}
            rotation={[0, 0, angle]}
          >
            <boxGeometry args={[0.16, 1.3, 0.05]} />
          </SketchMesh>
        )
      })}

      <SketchMesh partId="spin-heart" position={[0, 0.9, 0.35]}>
        <sphereGeometry args={[0.16, 12, 10]} />
      </SketchMesh>
      <Rod from={[0, 0.9, 0.35]} to={[0.45, 0.9, 0.15]} radius={0.035} partId="spin-heart" />

      <SketchMesh partId="nose-box" position={[0.85, 0.9, 0]}>
        <boxGeometry args={[0.85, 0.45, 0.4]} />
      </SketchMesh>

      <SketchMesh partId="gear-room" position={[0.8, 0.9, 0.22]}>
        <torusGeometry args={[0.14, 0.035, 8, 22]} />
      </SketchMesh>
      <SketchMesh partId="gear-room" position={[0.95, 0.78, 0.22]}>
        <torusGeometry args={[0.08, 0.03, 8, 18]} />
      </SketchMesh>
      <DraftLine points={[[0.68, 0.82, 0.22], [0.75, 0.78, 0.22]]} />
      <DraftLine points={[[0.88, 0.7, 0.22], [0.95, 0.67, 0.22]]} />

      <SketchMesh partId="power-maker" position={[1.25, 0.9, 0]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.16, 0.16, 0.4, 16]} />
      </SketchMesh>

      <SketchMesh partId="tall-leg" position={[0.45, -0.05, 0]}>
        <cylinderGeometry args={[0.1, 0.22, 1.9, 16]} />
      </SketchMesh>
      <DraftLine points={[[0.3, -0.8, 0.1], [0.6, -0.2, 0.1]]} />
      <DraftLine points={[[0.3, -0.2, 0.1], [0.6, -0.8, 0.1]]} />

      <DraftLine points={[[-1.3, 1.3, 0], [-0.75, 1.25, 0]]} />
      <DraftLine points={[[-1.25, 1.05, 0], [-0.72, 1.05, 0]]} />
      <DraftLine points={[[-1.3, 0.8, 0], [-0.78, 0.87, 0]]} />
      <DraftLine points={[[-1.2, -1.15, 0], [2.5, -1.15, 0]]} />

      <DraftLine
        points={[
          [2.0, -0.95, 0],
          [2.4, -0.95, 0],
          [2.4, -0.72, 0],
          [2.0, -0.72, 0],
          [2.0, -0.95, 0],
        ]}
      />
      <DraftLine points={[[1.95, -0.72, 0], [2.2, -0.55, 0], [2.45, -0.72, 0]]} />
      <DraftLine
        points={[
          [1.25, 0.9, 0],
          [0.75, 0.5, 0],
          [0.45, -0.2, 0],
          [0.45, -1.0, 0],
          [2.0, -0.85, 0],
        ]}
      />
    </group>
  )
}
