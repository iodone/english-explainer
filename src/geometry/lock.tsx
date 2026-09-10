import { SketchMesh, Rod, DraftLine } from './primitives'

/** 锁 —— 正对锁芯剖面：外圈壳、可转中盘、五组销与弹簧，钥匙台阶对准切割线 */
export default function LockSketch() {
  const pinXs = [-0.42, -0.21, 0, 0.21, 0.42]

  return (
    <group>
      <SketchMesh partId="outer-body" position={[0, 0, 0]}>
        <torusGeometry args={[0.8, 0.1, 10, 32]} />
      </SketchMesh>

      <SketchMesh partId="turning-middle" position={[0, 0, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.58, 0.58, 0.08, 28]} />
      </SketchMesh>

      <SketchMesh partId="key-hole" position={[-0.19, -0.28, 0.07]}>
        <boxGeometry args={[0.15, 0.34, 0.08]} />
      </SketchMesh>

      {pinXs.map((x, index) => (
        <group key={`pin-${index}`}>
          <SketchMesh partId="pin-stacks" position={[x, 0.11, 0.04]}>
            <boxGeometry args={[0.09, 0.2, 0.08]} />
          </SketchMesh>
          <SketchMesh partId="pin-stacks" position={[x, -0.11 + (index - 2) * 0.026, 0.04]}>
            <boxGeometry args={[0.09, 0.2, 0.08]} />
          </SketchMesh>
          <Rod from={[x, 0.45, 0.04]} to={[x, 0.23, 0.04]} radius={0.018} partId="push-springs" />
        </group>
      ))}

      <SketchMesh partId="the-key" position={[-1.05, -0.28, 0.06]}>
        <boxGeometry args={[0.65, 0.06, 0.06]} />
      </SketchMesh>
      {pinXs.map((x, index) => (
        <SketchMesh
          key={`key-step-${index}`}
          partId="the-key"
          position={[x - 0.8, -0.21 + index * 0.035, 0.06]}
        >
          <boxGeometry args={[0.07, 0.09 + index * 0.02, 0.05]} />
        </SketchMesh>
      ))}
      <SketchMesh partId="the-key" position={[-1.43, -0.28, 0.06]}>
        <boxGeometry args={[0.12, 0.16, 0.08]} />
      </SketchMesh>

      <SketchMesh partId="door-bolt" position={[1.15, 0, 0]}>
        <boxGeometry args={[0.72, 0.17, 0.17]} />
      </SketchMesh>

      <DraftLine points={[[-0.9, 0, 0.08], [0.9, 0, 0.08]]} />
      <DraftLine
        points={[
          [1.57, -0.32, 0.08],
          [1.57, 0.32, 0.08],
          [1.7, 0.32, 0.08],
          [1.7, -0.32, 0.08],
          [1.57, -0.32, 0.08],
        ]}
      />
      <DraftLine points={[[-1.52, -0.28, 0.08], [-0.3, -0.28, 0.08]]} />
    </group>
  )
}
