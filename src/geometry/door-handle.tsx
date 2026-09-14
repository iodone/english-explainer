import { SketchMesh, DraftLine } from './primitives'

export default function DoorHandleSketch() {
  return (
    <group>
      <SketchMesh partId="handle" position={[0, 0, 0.04]}>
        <boxGeometry args={[0.12, 0.02, 0.02]} />
      </SketchMesh>
      <SketchMesh partId="body" position={[0, 0, 0]}>
        <cylinderGeometry args={[0.04, 0.04, 0.02, 16]} />
      </SketchMesh>
      <SketchMesh partId="turn-part" position={[0, 0, -0.02]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.008, 0.008, 0.04, 8]} />
      </SketchMesh>
      <SketchMesh partId="move-part" position={[0.06, 0, 0]}>
        <boxGeometry args={[0.04, 0.02, 0.02]} />
      </SketchMesh>
      <SketchMesh partId="keep-part" position={[0.10, 0, 0]}>
        <boxGeometry args={[0.02, 0.04, 0.04]} />
      </SketchMesh>
      <SketchMesh partId="spring" position={[0, 0, -0.01]}>
        <cylinderGeometry args={[0.006, 0.006, 0.02, 6]} />
      </SketchMesh>
      <SketchMesh partId="hold-part" position={[0, 0.04, 0]}>
        <cylinderGeometry args={[0.006, 0.006, 0.02, 6]} />
      </SketchMesh>
      <DraftLine points={[[-0.4, -0.06, 0], [0.4, -0.06, 0]]} />
    </group>
  )
}