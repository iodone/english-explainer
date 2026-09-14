import { SketchMesh, Rod, DraftLine } from './primitives'

export default function DoorLockSketch() {
  return (
    <group>
      <SketchMesh partId="body" position={[0, 0, 0]}>
        <boxGeometry args={[0.08, 0.10, 0.04]} />
      </SketchMesh>
      <SketchMesh partId="key-hole" position={[0, 0, 0.04]}>
        <cylinderGeometry args={[0.01, 0.01, 0.01, 8]} />
      </SketchMesh>
      <SketchMesh partId="turn-part" position={[0, 0, 0.02]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.02, 0.02, 0.02, 12]} />
      </SketchMesh>
      <SketchMesh partId="move-part" position={[0.06, 0, 0]}>
        <boxGeometry args={[0.04, 0.02, 0.02]} />
      </SketchMesh>
      <Rod from={[0, -0.06, 0.04]} to={[0, -0.06, 0.08]} radius={0.005} partId="handle" />
      <SketchMesh partId="keep-part" position={[0.10, 0, 0]}>
        <boxGeometry args={[0.02, 0.04, 0.04]} />
      </SketchMesh>
      <SketchMesh partId="inside-part" position={[0, 0, 0.01]}>
        <boxGeometry args={[0.04, 0.04, 0.01]} />
      </SketchMesh>
      <DraftLine points={[[-0.4, -0.10, 0], [0.4, -0.10, 0]]} />
    </group>
  )
}