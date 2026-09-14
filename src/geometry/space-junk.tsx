import { SketchMesh, DraftLine } from './primitives'

export default function SpaceJunkSketch() {
  return (
    <group>
      <SketchMesh partId="old-part" position={[0, 0, 0]}>
        <boxGeometry args={[0.12, 0.08, 0.08]} />
      </SketchMesh>
      <SketchMesh partId="broken-piece" position={[0.08, 0.04, 0]}>
        <boxGeometry args={[0.04, 0.03, 0.03]} />
      </SketchMesh>
      <SketchMesh partId="big-piece" position={[0, 0, -0.08]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.04, 0.05, 0.10, 12]} />
      </SketchMesh>
      <SketchMesh partId="small-piece" position={[-0.06, 0.06, 0.04]}>
        <boxGeometry args={[0.02, 0.01, 0.01]} />
      </SketchMesh>
      <SketchMesh partId="round-part" position={[0.04, -0.04, 0.06]}>
        <sphereGeometry args={[0.01, 8, 6]} />
      </SketchMesh>
      <SketchMesh partId="flat-piece" position={[0.10, 0, -0.04]}>
        <boxGeometry args={[0.06, 0.004, 0.04]} />
      </SketchMesh>
      <SketchMesh partId="wire-piece" position={[-0.04, -0.06, 0]}>
        <boxGeometry args={[0.02, 0.02, 0.01]} />
      </SketchMesh>
      <DraftLine points={[[-0.6, -0.10, 0], [0.6, -0.10, 0]]} />
    </group>
  )
}