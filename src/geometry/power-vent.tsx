import { SketchMesh, DraftLine } from './primitives'

export default function PowerVentSketch() {
  return (
    <group>
      <SketchMesh partId="body" position={[0, 0, 0]}>
        <boxGeometry args={[0.14, 0.14, 0.06]} />
      </SketchMesh>
      <SketchMesh partId="spinning-part" position={[0, 0, 0.04]}>
        <cylinderGeometry args={[0.05, 0.05, 0.02, 6]} />
      </SketchMesh>
      <SketchMesh partId="cover" position={[0, 0, 0.06]}>
        <boxGeometry args={[0.14, 0.14, 0.01]} />
      </SketchMesh>
      <SketchMesh partId="wire" position={[0, -0.06, 0]}>
        <cylinderGeometry args={[0.005, 0.005, 0.04, 8]} />
      </SketchMesh>
      <SketchMesh partId="feel-part" position={[0, 0.04, 0.04]}>
        <sphereGeometry args={[0.012, 12, 12]} />
      </SketchMesh>
      <SketchMesh partId="open-part" position={[0, 0.02, 0.06]}>
        <boxGeometry args={[0.12, 0.04, 0.005]} />
      </SketchMesh>
      <DraftLine points={[[-0.07, -0.07, 0.06], [0.07, -0.07, 0.06]]} />
    </group>
  )
}