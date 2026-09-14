import { SketchMesh, DraftLine } from './primitives'

export default function HomeAlarmSketch() {
  return (
    <group>
      <SketchMesh partId="body" position={[0, 0, 0]}>
        <boxGeometry args={[0.18, 0.14, 0.06]} />
      </SketchMesh>
      <SketchMesh partId="sound-part" position={[0, 0.08, 0]}>
        <cylinderGeometry args={[0.04, 0.04, 0.04, 12]} />
      </SketchMesh>
      <SketchMesh partId="watch-part" position={[0, -0.04, 0.04]}>
        <sphereGeometry args={[0.025, 12, 12]} />
      </SketchMesh>
      <SketchMesh partId="buttons" position={[0, 0.02, 0.035]}>
        <boxGeometry args={[0.1, 0.04, 0.01]} />
      </SketchMesh>
      <SketchMesh partId="light" position={[0.06, 0.05, 0.035]}>
        <sphereGeometry args={[0.012, 12, 12]} />
      </SketchMesh>
      <SketchMesh partId="talk-part" position={[0, -0.02, -0.035]}>
        <boxGeometry args={[0.08, 0.04, 0.01]} />
      </SketchMesh>
      <DraftLine points={[[-0.09, -0.07, 0.035], [0.09, -0.07, 0.035]]} />
    </group>
  )
}