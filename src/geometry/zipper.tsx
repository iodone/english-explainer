import { SketchMesh, Rod, DraftLine } from './primitives'

/** 拉链 —— 正视图：右侧上下两排齿开口，左侧互扣成单排，滑块居中，Y 形通道淡墨示意 */
export default function ZipperSketch() {
  // 右段开口双排齿
  const openRow = (side: number) =>
    Array.from({ length: 13 }, (_, i) => {
      const x = -0.28 + i * 0.13
      return (
        <SketchMesh key={`open-${side}-${i}`} partId="teeth-rows" position={[x, 0.16 * side, 0]}>
          <boxGeometry args={[0.09, 0.09, 0.14]} />
        </SketchMesh>
      )
    })

  return (
    <group>
      {/* 左段互扣齿（加厚表示咬合对） */}
      {Array.from({ length: 5 }, (_, i) => (
        <SketchMesh key={`joined-${i}`} partId="teeth-rows" position={[-1.14 + i * 0.13, 0, 0]}>
          <boxGeometry args={[0.1, 0.15, 0.14]} />
        </SketchMesh>
      ))}

      {/* 右段开口双排齿 */}
      {openRow(1)}
      {openRow(-1)}

      {/* 滑块 + 内部劈齿墙（前探） */}
      <SketchMesh partId="walker-box" position={[-0.45, 0, 0]}>
        <boxGeometry args={[0.26, 0.34, 0.26]} />
      </SketchMesh>
      <SketchMesh partId="inside-wall" position={[-0.45, 0, 0.16]}>
        <boxGeometry args={[0.05, 0.26, 0.1]} />
      </SketchMesh>

      {/* 拉片：短杆 + 挂环 */}
      <Rod from={[-0.45, -0.17, 0.14]} to={[-0.45, -0.28, 0.14]} radius={0.02} partId="pull-ring" />
      <SketchMesh partId="pull-ring" position={[-0.45, -0.36, 0.14]}>
        <torusGeometry args={[0.085, 0.022, 8, 16]} />
      </SketchMesh>

      {/* 上下止位块 */}
      <SketchMesh partId="top-stopper" position={[-1.24, 0, 0]}>
        <boxGeometry args={[0.1, 0.32, 0.16]} />
      </SketchMesh>
      <SketchMesh partId="bottom-stopper" position={[1.26, 0, 0]}>
        <boxGeometry args={[0.1, 0.32, 0.16]} />
      </SketchMesh>

      {/* 布带双条（齿后方） */}
      <SketchMesh partId="cloth-sides" position={[0.1, 0.38, -0.08]}>
        <boxGeometry args={[2.5, 0.15, 0.03]} />
      </SketchMesh>
      <SketchMesh partId="cloth-sides" position={[0.1, -0.38, -0.08]}>
        <boxGeometry args={[2.5, 0.15, 0.03]} />
      </SketchMesh>

      {/* Y 形通道（淡墨，滑块后方）：双排进 → 单排出 */}
      <DraftLine points={[[-0.29, 0.32, -0.14], [-0.45, 0, -0.14], [-1.2, 0, -0.14]]} />
      <DraftLine points={[[-0.61, 0.32, -0.14], [-0.45, 0, -0.14]]} />
    </group>
  )
}
