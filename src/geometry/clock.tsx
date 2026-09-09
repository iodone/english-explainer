import { SketchMesh, Rod, DraftLine } from './primitives'

/** 挂钟 —— 表盘 + 双针（10:10 姿态）+ 拉出下方的机芯（轮系/发条/擒纵/摆轮） */
export default function ClockSketch() {
  const face: [number, number] = [0.1, 0.25]
  const tick = (i: number): [number, number, number][] => {
    const a = (i * Math.PI) / 6
    return [
      [face[0] + Math.sin(a) * 0.64, face[1] + Math.cos(a) * 0.64, 0.15],
      [face[0] + Math.sin(a) * 0.76, face[1] + Math.cos(a) * 0.76, 0.15],
    ]
  }

  return (
    <group>
      {/* 表盘：盘面 + 外圈 + 中心轴帽 + 12 个刻度线 */}
      <SketchMesh partId="time-face" position={[face[0], face[1], 0.1]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.8, 0.8, 0.06, 36]} />
      </SketchMesh>
      <SketchMesh partId="time-face" position={[face[0], face[1], 0.13]}>
        <torusGeometry args={[0.8, 0.06, 8, 40]} />
      </SketchMesh>
      <SketchMesh partId="time-face" position={[face[0], face[1], 0.16]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.05, 0.05, 0.05, 8]} />
      </SketchMesh>
      {Array.from({ length: 12 }, (_, i) => (
        <DraftLine key={i} points={tick(i)} />
      ))}

      {/* 短针（时针，指向 10 点）与长针（分针，指向 2 点） */}
      <SketchMesh partId="short-pointer" position={[-0.07, 0.35, 0.18]} rotation={[0, 0, Math.PI / 3]}>
        <boxGeometry args={[0.06, 0.4, 0.02]} />
      </SketchMesh>
      <SketchMesh partId="long-pointer" position={[0.37, 0.41, 0.2]} rotation={[0, 0, -Math.PI / 3]}>
        <boxGeometry args={[0.045, 0.62, 0.02]} />
      </SketchMesh>

      {/* 转动心脏：三枚拉出下方的齿轮 */}
      <SketchMesh partId="turning-heart" position={[0.15, -0.85, -0.06]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.2, 0.2, 0.05, 12]} />
      </SketchMesh>
      <SketchMesh partId="turning-heart" position={[-0.1, -0.68, -0.06]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.14, 0.14, 0.05, 12]} />
      </SketchMesh>
      <SketchMesh partId="turning-heart" position={[0.45, -0.72, -0.06]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.11, 0.11, 0.05, 12]} />
      </SketchMesh>

      {/* 上发条金属：两圈同心盘簧 */}
      <SketchMesh partId="push-back-metal" position={[1.0, -0.45, -0.06]}>
        <torusGeometry args={[0.22, 0.045, 8, 26]} />
      </SketchMesh>
      <SketchMesh partId="push-back-metal" position={[1.0, -0.45, -0.06]}>
        <torusGeometry args={[0.13, 0.04, 8, 20]} />
      </SketchMesh>

      {/* 滴答止动器：擒纵叉 + 擒纵轮 */}
      <SketchMesh partId="tick-stopper" position={[-0.75, -0.55, -0.06]}>
        <boxGeometry args={[0.14, 0.2, 0.07]} />
      </SketchMesh>
      <SketchMesh partId="tick-stopper" position={[-0.55, -0.62, -0.06]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.13, 0.13, 0.05, 12]} />
      </SketchMesh>

      {/* 快摆轮：摆轮环 + 游丝连杆 */}
      <SketchMesh partId="swing-wheel" position={[-1.0, -0.95, -0.06]}>
        <torusGeometry args={[0.18, 0.045, 8, 22]} />
      </SketchMesh>
      <Rod from={[-0.85, -0.9, -0.06]} to={[-0.68, -0.66, -0.06]} radius={0.015} partId="swing-wheel" />
    </group>
  )
}
