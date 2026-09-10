import { SketchMesh, Rod, DraftLine } from './primitives'

export default function AirplaneSketch() {
  return (
    <group>
      <SketchMesh partId="body-room" position={[0, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.26, 0.26, 2.5, 14]} />
      </SketchMesh>
      <SketchMesh partId="body-room" position={[-1.45, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.1, 0.26, 0.5, 14]} />
      </SketchMesh>

      <SketchMesh partId="nose-room" position={[1.45, 0, 0]} rotation={[0, 0, -Math.PI / 2]}>
        <cylinderGeometry args={[0.02, 0.26, 0.5, 14]} />
      </SketchMesh>

      <SketchMesh
        partId="wings"
        position={[0.2, 0.06, 0.55]}
        rotation={[0, -0.3, 0]}
      >
        <boxGeometry args={[1.15, 0.05, 0.8]} />
      </SketchMesh>
      <SketchMesh
        partId="wings"
        position={[0.2, 0.06, -0.55]}
        rotation={[0, 0.3, 0]}
      >
        <boxGeometry args={[1.15, 0.05, 0.8]} />
      </SketchMesh>

      {[-1, 1].map(zSign => (
        <group key={`jet-${zSign}`}>
          <SketchMesh
            partId="jets"
            position={[-0.15, -0.25, zSign * 0.62]}
            rotation={[0, 0, Math.PI / 2]}
          >
            <cylinderGeometry args={[0.11, 0.11, 0.45, 10]} />
          </SketchMesh>
          <Rod
            from={[0.05, 0.03, zSign * 0.58]}
            to={[-0.15, -0.14, zSign * 0.62]}
            radius={0.02}
            partId="jets"
          />
        </group>
      ))}

      <SketchMesh partId="tail-wing" position={[-1.3, 0.12, 0]}>
        <boxGeometry args={[0.55, 0.04, 0.7]} />
      </SketchMesh>
      <SketchMesh partId="tail-fin" position={[-1.35, 0.45, 0]}>
        <boxGeometry args={[0.5, 0.55, 0.04]} />
      </SketchMesh>

      <SketchMesh partId="land-wheels" position={[0.95, -0.48, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.09, 0.09, 0.06, 10]} />
      </SketchMesh>
      <Rod from={[0.95, -0.48, 0]} to={[0.95, -0.26, 0]} radius={0.02} partId="land-wheels" />
      {[-1, 1].map(zSign => (
        <group key={`land-wheel-${zSign}`}>
          <SketchMesh
            partId="land-wheels"
            position={[-0.1, -0.5, zSign * 0.22]}
            rotation={[Math.PI / 2, 0, 0]}
          >
            <cylinderGeometry args={[0.13, 0.13, 0.07, 10]} />
          </SketchMesh>
          <Rod
            from={[-0.1, -0.5, zSign * 0.22]}
            to={[-0.1, -0.26, zSign * 0.2]}
            radius={0.02}
            partId="land-wheels"
          />
        </group>
      ))}

      {[
        [0.95, 1.1],
        [1.1, 1.25],
      ].map(([left, right], index) => (
        <DraftLine
          key={`cockpit-window-${index}`}
          points={[
            [left, 0.12, 0.262],
            [right, 0.12, 0.262],
            [right, 0.24, 0.262],
            [left, 0.24, 0.262],
            [left, 0.12, 0.262],
          ]}
        />
      ))}
      {[-0.86, -0.54, -0.22, 0.1, 0.42, 0.66].map((x, index) => (
        <DraftLine
          key={`cabin-window-${index}`}
          points={[
            [x - 0.05, 0.04, 0.262],
            [x + 0.05, 0.04, 0.262],
            [x + 0.05, 0.12, 0.262],
            [x - 0.05, 0.12, 0.262],
            [x - 0.05, 0.04, 0.262],
          ]}
        />
      ))}
      {[
        [1.2, -1.1],
        [-0.5, -1.3],
        [0.3, -0.95],
      ].map(([x, y], index) => (
        <DraftLine
          key={`cloud-${index}`}
          points={[
            [x - 0.18, y, 0],
            [x - 0.06, y + 0.1, 0],
            [x + 0.08, y + 0.05, 0],
            [x + 0.2, y, 0],
          ]}
        />
      ))}
      {[0, -0.2, 0.2].map((y, index) => (
        <DraftLine key={`speed-${index}`} points={[[-1.9, y, 0], [-2.2, y, 0]]} />
      ))}
    </group>
  )
}
