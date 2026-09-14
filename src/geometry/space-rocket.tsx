import { SketchMesh, DraftLine } from './primitives'

export default function SpaceRocketSketch() {
  return (
    <group>
      <SketchMesh partId="body" position={[0, 0, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.06, 0.06, 0.30, 16]} />
      </SketchMesh>
      <SketchMesh partId="front-part" position={[0, 0.16, 0]}>
        <coneGeometry args={[0.06, 0.08, 16]} />
      </SketchMesh>
      <SketchMesh partId="fire-part" position={[0, -0.18, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.04, 0.07, 0.04, 12]} />
      </SketchMesh>
      <SketchMesh partId="side-body" position={[0.08, -0.04, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.03, 0.03, 0.20, 12]} />
      </SketchMesh>
      <SketchMesh partId="wing" position={[0.06, -0.14, 0]}>
        <boxGeometry args={[0.06, 0.04, 0.006]} />
      </SketchMesh>
      <SketchMesh partId="point-part" position={[0, 0.10, 0]}>
        <boxGeometry args={[0.04, 0.04, 0.04]} />
      </SketchMesh>
      <SketchMesh partId="power-part" position={[0, -0.04, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.05, 0.05, 0.12, 12]} />
      </SketchMesh>
      <DraftLine points={[[-0.5, -0.22, 0], [0.5, -0.22, 0]]} />
    </group>
  )
}