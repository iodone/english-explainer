import { SketchMesh, Rod, DraftLine } from './primitives'

/** 自行车 —— 双轮 + 菱形车架 + 传动链 + 刹车线，侧视线框 */
export default function BicycleSketch() {
  const spoke = (cx: number, cy: number, a: number): [number, number, number][] => [
    [cx, cy, 0],
    [cx + Math.cos(a) * 0.45, cy + Math.sin(a) * 0.45, 0],
  ]

  return (
    <group>
      {/* 车轮：轮圈 + 轮毂 + 草稿辐条 */}
      <SketchMesh partId="back-wheel" position={[-1.1, -0.4, 0]}>
        <torusGeometry args={[0.5, 0.05, 8, 28]} />
      </SketchMesh>
      <SketchMesh partId="back-wheel" position={[-1.1, -0.4, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.07, 0.07, 0.12, 10]} />
      </SketchMesh>
      {[0.5, 2.6, 4.7].map(a => (
        <DraftLine key={`bs${a}`} points={spoke(-1.1, -0.4, a)} />
      ))}
      <SketchMesh partId="front-wheel" position={[1.1, -0.4, 0]}>
        <torusGeometry args={[0.5, 0.05, 8, 28]} />
      </SketchMesh>
      <SketchMesh partId="front-wheel" position={[1.1, -0.4, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.07, 0.07, 0.12, 10]} />
      </SketchMesh>
      {[1.6, 3.7, 5.8].map(a => (
        <DraftLine key={`fs${a}`} points={spoke(1.1, -0.4, a)} />
      ))}

      {/* 车架（菱形）：后轴→座管顶 / 座管顶→头管 / 头管→曲柄 / 后轴→曲柄 */}
      <Rod from={[-1.1, -0.4, 0]} to={[-0.25, 0.75, 0]} radius={0.045} partId="metal-bones" />
      <Rod from={[-0.25, 0.75, 0]} to={[0.65, 0.85, 0]} radius={0.045} partId="metal-bones" />
      <Rod from={[0.65, 0.85, 0]} to={[0, -0.35, 0]} radius={0.045} partId="metal-bones" />
      <Rod from={[-1.1, -0.4, 0]} to={[0, -0.35, 0]} radius={0.045} partId="metal-bones" />
      {/* 车座 */}
      <SketchMesh partId="metal-bones" position={[-0.27, 0.8, 0]}>
        <boxGeometry args={[0.3, 0.05, 0.14]} />
      </SketchMesh>

      {/* 转向杆：前叉 + 立管 + 车把 */}
      <Rod from={[0.65, 0.85, 0]} to={[1.1, -0.4, 0]} radius={0.04} partId="turning-stick" />
      <Rod from={[0.65, 0.85, 0]} to={[0.68, 1.02, 0]} radius={0.03} partId="turning-stick" />
      <Rod from={[0.46, 1.02, 0]} to={[0.9, 1.02, 0]} radius={0.035} partId="turning-stick" />

      {/* 脚踏：曲柄中轴 + 牙盘 + 两根曲柄 + 两块踏板 */}
      <SketchMesh partId="foot-holders" position={[0, -0.35, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.08, 0.08, 0.2, 10]} />
      </SketchMesh>
      <Rod from={[0, -0.35, 0.1]} to={[0.42, -0.48, 0.1]} radius={0.025} partId="foot-holders" />
      <Rod from={[0, -0.35, -0.1]} to={[-0.42, -0.22, -0.1]} radius={0.025} partId="foot-holders" />
      <SketchMesh partId="foot-holders" position={[0.45, -0.5, 0]}>
        <boxGeometry args={[0.26, 0.05, 0.12]} />
      </SketchMesh>
      <SketchMesh partId="foot-holders" position={[-0.45, -0.2, 0]}>
        <boxGeometry args={[0.26, 0.05, 0.12]} />
      </SketchMesh>

      {/* 拉链：牙盘 + 飞轮 + 上下两股链条 */}
      <SketchMesh partId="pull-chain" position={[0, -0.35, 0.14]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.11, 0.11, 0.02, 12]} />
      </SketchMesh>
      <SketchMesh partId="pull-chain" position={[-1.1, -0.4, 0.14]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.06, 0.06, 0.02, 10]} />
      </SketchMesh>
      <Rod from={[0, -0.24, 0.14]} to={[-1.1, -0.34, 0.14]} radius={0.015} partId="pull-chain" />
      <Rod from={[0, -0.46, 0.14]} to={[-1.1, -0.46, 0.14]} radius={0.015} partId="pull-chain" />

      {/* 手刹：刹车线 + 前轮上缘卡钳 */}
      <Rod from={[0.62, 0.98, 0]} to={[1.06, 0.18, 0]} radius={0.013} partId="hand-stoppers" />
      <SketchMesh partId="hand-stoppers" position={[1.08, 0.1, 0]}>
        <boxGeometry args={[0.16, 0.2, 0.14]} />
      </SketchMesh>
    </group>
  )
}
