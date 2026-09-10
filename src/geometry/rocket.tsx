import { SketchMesh, Rod, DraftLine } from './primitives'

/** 火箭 —— 竖直堆叠：主发动机、喷管、贮箱、助推器、逃逸塔与尾翼 */
export default function RocketSketch() {
  return (
    <group>
      <SketchMesh partId="fuel-rooms" position={[0, 0.5, 0]}>
        <cylinderGeometry args={[0.3, 0.3, 0.75, 16]} />
      </SketchMesh>
      <SketchMesh partId="fuel-rooms" position={[0, 1.28, 0]}>
        <cylinderGeometry args={[0.3, 0.3, 0.75, 16]} />
      </SketchMesh>
      <SketchMesh partId="fuel-rooms" position={[0, 0.89, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[0.3, 0.02, 8, 20]} />
      </SketchMesh>

      <SketchMesh partId="fire-heart" position={[0, -0.4, 0]}>
        <sphereGeometry args={[0.2, 14, 10]} />
      </SketchMesh>
      <SketchMesh partId="fire-heart" position={[0, -0.28, 0]}>
        <boxGeometry args={[0.34, 0.18, 0.34]} />
      </SketchMesh>

      <SketchMesh partId="fire-door" position={[0, -0.68, 0]}>
        <cylinderGeometry args={[0.09, 0.24, 0.34, 16]} />
      </SketchMesh>

      {[-0.52, 0.52].map(x => (
        <group key={`drop-tank-${x}`}>
          <SketchMesh partId="drop-tanks" position={[x, 0.12, 0]}>
            <cylinderGeometry args={[0.2, 0.2, 1.05, 14]} />
          </SketchMesh>
          <SketchMesh partId="drop-tanks" position={[x, 0.8, 0]}>
            <cylinderGeometry args={[0.03, 0.2, 0.3, 14]} />
          </SketchMesh>
          <SketchMesh partId="drop-tanks" position={[x, -0.5, 0]}>
            <cylinderGeometry args={[0.05, 0.12, 0.15, 10]} />
          </SketchMesh>
        </group>
      ))}

      <SketchMesh partId="people-room" position={[0, 1.98, 0]}>
        <cylinderGeometry args={[0.16, 0.16, 0.3, 14]} />
      </SketchMesh>
      <SketchMesh partId="people-room" position={[0, 2.26, 0]}>
        <cylinderGeometry args={[0.02, 0.16, 0.26, 14]} />
      </SketchMesh>

      <Rod from={[0, 2.42, 0]} to={[0, 2.75, 0]} radius={0.022} partId="top-rod" />
      <SketchMesh partId="top-rod" position={[0, 2.75, 0]}>
        <boxGeometry args={[0.18, 0.05, 0.05]} />
      </SketchMesh>

      {[0, 1, 2].map(index => {
        const angle = (index / 3) * Math.PI * 2
        return (
          <SketchMesh
            key={`end-wing-${index}`}
            partId="end-wings"
            position={[Math.sin(angle) * 0.45, -0.3, Math.cos(angle) * 0.45]}
            rotation={[0, angle, 0]}
          >
            <boxGeometry args={[0.28, 0.4, 0.05]} />
          </SketchMesh>
        )
      })}

      <DraftLine points={[[0, -0.85, 0], [0.07, -1.0, 0], [-0.05, -1.15, 0], [0.03, -1.28, 0]]} />
      <DraftLine points={[[0.52, -0.66, 0], [0.56, -0.8, 0], [0.48, -0.9, 0]]} />
      <DraftLine points={[[-0.52, -0.66, 0], [-0.56, -0.8, 0], [-0.48, -0.9, 0]]} />
      <DraftLine points={[[0.33, 0.45, 0], [0.71, 0.45, 0]]} />
      <DraftLine points={[[-0.71, 0.45, 0], [-0.33, 0.45, 0]]} />

      {[
        [-1.3, 2.0],
        [1.4, 1.6],
        [-0.9, 2.6],
      ].map(([x, y], index) => (
        <group key={`star-${index}`}>
          <DraftLine points={[[x - 0.05, y, 0], [x + 0.05, y, 0]]} />
          <DraftLine points={[[x, y - 0.05, 0], [x, y + 0.05, 0]]} />
        </group>
      ))}

      {Array.from({ length: 8 }, (_, index) => {
        const startAngle = (index / 8) * Math.PI * 2
        const endAngle = ((index + 1) / 8) * Math.PI * 2
        return (
          <DraftLine
            key={`moon-${index}`}
            points={[
              [1.5 + Math.cos(startAngle) * 0.16, 2.5 + Math.sin(startAngle) * 0.16, 0],
              [1.5 + Math.cos(endAngle) * 0.16, 2.5 + Math.sin(endAngle) * 0.16, 0],
            ]}
          />
        )
      })}
    </group>
  )
}
