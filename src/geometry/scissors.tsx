import { SketchMesh, DraftLine } from './primitives'

/** 剪刀 —— 前视 X：长臂放大手力，交点右侧只有移动的切点真正工作 */
export default function ScissorsSketch() {
  return (
    <group>
      <SketchMesh partId="long-arms" position={[-0.44, 0.24, 0]} rotation={[0, 0, -0.52]}>
        <boxGeometry args={[0.78, 0.1, 0.04]} />
      </SketchMesh>
      <SketchMesh partId="long-arms" position={[-0.44, -0.24, 0]} rotation={[0, 0, 0.52]}>
        <boxGeometry args={[0.78, 0.1, 0.04]} />
      </SketchMesh>

      <SketchMesh partId="handle-loops" position={[-1.08, 0.53, 0]}>
        <torusGeometry args={[0.19, 0.05, 8, 20]} />
      </SketchMesh>
      <SketchMesh partId="handle-loops" position={[-1.08, -0.53, 0]}>
        <torusGeometry args={[0.19, 0.05, 8, 20]} />
      </SketchMesh>

      <SketchMesh partId="blade-pair" position={[0.63, 0.1, 0]} rotation={[0, 0, 0.12]}>
        <boxGeometry args={[1.1, 0.11, 0.035]} />
      </SketchMesh>
      <SketchMesh partId="blade-pair" position={[0.63, -0.1, 0]} rotation={[0, 0, -0.12]}>
        <boxGeometry args={[1.1, 0.11, 0.035]} />
      </SketchMesh>

      <SketchMesh partId="edge-faces" position={[0.72, 0.055, 0.045]} rotation={[0, 0, 0.12]}>
        <boxGeometry args={[0.95, 0.025, 0.015]} />
      </SketchMesh>
      <SketchMesh partId="edge-faces" position={[0.72, -0.055, 0.045]} rotation={[0, 0, -0.12]}>
        <boxGeometry args={[0.95, 0.025, 0.015]} />
      </SketchMesh>

      <SketchMesh partId="middle-screw" position={[0, 0, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.1, 0.1, 0.12, 14]} />
      </SketchMesh>

      <SketchMesh partId="cross-point" position={[0.36, 0, 0.08]}>
        <boxGeometry args={[0.09, 0.09, 0.04]} />
      </SketchMesh>

      <SketchMesh partId="cross-point" position={[1.46, 0.09, -0.03]} rotation={[0, 0, 0.1]}>
        <boxGeometry args={[0.5, 0.01, 0.22]} />
      </SketchMesh>
      <SketchMesh partId="cross-point" position={[1.46, -0.09, -0.03]} rotation={[0, 0, -0.1]}>
        <boxGeometry args={[0.5, 0.01, 0.22]} />
      </SketchMesh>

      <DraftLine points={[[1.25, -0.5, 0.06], [1.25, 0.5, 0.06]]} />
      <DraftLine points={[[0.42, 0, 0.06], [1.25, 0, 0.06]]} />
    </group>
  )
}
