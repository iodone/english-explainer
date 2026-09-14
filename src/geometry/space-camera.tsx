import { SketchMesh, DraftLine } from './primitives'

export default function SpaceCameraSketch() {
  return (
    <group>
      {/* Body - housing */}
      <SketchMesh partId="body" position={[0, 0, 0]}>
        <cylinderGeometry args={[0.12, 0.12, 0.28, 16]} />
      </SketchMesh>

      {/* Glass front - lens assembly */}
      <SketchMesh partId="glass-front" position={[0, 0, 0.14]}>
        <cylinderGeometry args={[0.10, 0.10, 0.04, 16]} />
      </SketchMesh>

      {/* Big glass - primary mirror */}
      <SketchMesh partId="big-glass" position={[0, 0, 0.06]}>
        <cylinderGeometry args={[0.08, 0.08, 0.02, 16]} />
      </SketchMesh>

      {/* Small glass - secondary mirror */}
      <SketchMesh partId="small-glass" position={[0, 0, 0.10]}>
        <cylinderGeometry args={[0.04, 0.04, 0.02, 8]} />
      </SketchMesh>

      {/* Eye piece - detector */}
      <SketchMesh partId="eye-piece" position={[0, 0, -0.08]}>
        <boxGeometry args={[0.08, 0.08, 0.06]} />
      </SketchMesh>

      {/* Power box */}
      <SketchMesh partId="power-box" position={[0, -0.12, -0.06]}>
        <boxGeometry args={[0.14, 0.08, 0.10]} />
      </SketchMesh>

      {/* Send box - transmitter */}
      <SketchMesh partId="send-box" position={[0, 0.12, -0.06]}>
        <boxGeometry args={[0.10, 0.06, 0.08]} />
      </SketchMesh>

      {/* Outline */}
      <DraftLine points={[[-0.12, -0.14, 0.14], [-0.12, 0.14, 0.14], [0.12, 0.14, 0.14], [0.12, -0.14, 0.14], [-0.12, -0.14, 0.14]]} />
    </group>
  )
}