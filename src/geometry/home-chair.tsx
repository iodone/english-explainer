import { SketchMesh, DraftLine } from './primitives'

export default function HomeChairSketch() {
  return (
    <group>
      <SketchMesh partId="seat" position={[0, 0, 0]}>
        <boxGeometry args={[0.14, 0.03, 0.14]} />
      </SketchMesh>
      <SketchMesh partId="back" position={[0, 0.1, -0.06]}>
        <boxGeometry args={[0.14, 0.14, 0.02]} />
      </SketchMesh>
      <SketchMesh partId="legs" position={[-0.06, -0.08, 0.06]}>
        <boxGeometry args={[0.02, 0.14, 0.02]} />
      </SketchMesh>
      <SketchMesh position={[0.06, -0.08, 0.06]}>
        <boxGeometry args={[0.02, 0.14, 0.02]} />
      </SketchMesh>
      <SketchMesh position={[-0.06, -0.08, -0.06]}>
        <boxGeometry args={[0.02, 0.14, 0.02]} />
      </SketchMesh>
      <SketchMesh position={[0.06, -0.08, -0.06]}>
        <boxGeometry args={[0.02, 0.14, 0.02]} />
      </SketchMesh>
      <SketchMesh partId="arm-parts" position={[-0.08, 0.04, 0]}>
        <boxGeometry args={[0.02, 0.06, 0.12]} />
      </SketchMesh>
      <SketchMesh position={[0.08, 0.04, 0]}>
        <boxGeometry args={[0.02, 0.06, 0.12]} />
      </SketchMesh>
      <SketchMesh partId="foot-parts" position={[-0.06, -0.15, 0.06]}>
        <boxGeometry args={[0.03, 0.01, 0.03]} />
      </SketchMesh>
      <SketchMesh position={[0.06, -0.15, 0.06]}>
        <boxGeometry args={[0.03, 0.01, 0.03]} />
      </SketchMesh>
      <SketchMesh position={[-0.06, -0.15, -0.06]}>
        <boxGeometry args={[0.03, 0.01, 0.03]} />
      </SketchMesh>
      <SketchMesh position={[0.06, -0.15, -0.06]}>
        <boxGeometry args={[0.03, 0.01, 0.03]} />
      </SketchMesh>
      <DraftLine points={[[-0.07, -0.15, 0.07], [0.07, -0.15, 0.07]]} />
    </group>
  )
}