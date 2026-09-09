import { SketchMesh, Rod, DraftLine } from './primitives'

/** 坐便器 —— 左水箱 + 右盆体，底部拉出上翻式虹吸管；淡墨线标注水箱/盆内水位 */
export default function ToiletSketch() {
  return (
    <group>
      {/* 水箱 + 内部件：浮球 / 上水管 / 底部水门 */}
      <SketchMesh partId="water-tank" position={[-0.55, 0.35, 0]}>
        <boxGeometry args={[0.55, 0.7, 0.45]} />
      </SketchMesh>
      <SketchMesh partId="float-ball" position={[-0.38, 0.5, 0.18]}>
        <sphereGeometry args={[0.12, 10, 8]} />
      </SketchMesh>
      <Rod from={[-0.68, 0.15, 0]} to={[-0.68, 0.55, 0]} radius={0.035} partId="fill-pipe" />
      <SketchMesh partId="water-door" position={[-0.55, 0.02, 0]}>
        <boxGeometry args={[0.2, 0.08, 0.2]} />
      </SketchMesh>

      {/* 压杆臂：从水箱前面伸出的把手 */}
      <Rod from={[-0.5, 0.32, 0.24]} to={[-0.2, 0.3, 0.3]} radius={0.02} partId="handle-arm" />
      <SketchMesh partId="handle-arm" position={[-0.12, 0.3, 0.31]}>
        <boxGeometry args={[0.14, 0.06, 0.06]} />
      </SketchMesh>

      {/* 盆体：上宽下窄的碗 + 口沿 */}
      <SketchMesh partId="water-bowl" position={[0.45, 0.05, 0]}>
        <cylinderGeometry args={[0.42, 0.28, 0.5, 16]} />
      </SketchMesh>
      <SketchMesh partId="water-bowl" position={[0.45, 0.3, 0]}>
        <torusGeometry args={[0.42, 0.055, 8, 24]} />
      </SketchMesh>

      {/* 上翻式虹吸管：盆底下行 → 向后 → 翻过小墙 → 出地 */}
      <Rod from={[0.45, -0.18, 0]} to={[0.45, -0.45, 0]} radius={0.09} partId="up-over-pipe" />
      <Rod from={[0.45, -0.45, 0]} to={[-0.2, -0.45, 0]} radius={0.09} partId="up-over-pipe" />
      <Rod from={[-0.2, -0.45, 0]} to={[-0.2, -0.18, 0]} radius={0.09} partId="up-over-pipe" />
      <Rod from={[-0.2, -0.18, 0]} to={[-0.75, -0.18, 0]} radius={0.09} partId="up-over-pipe" />

      {/* 水位线（淡墨）：盆内存水 + 水箱存水 */}
      <DraftLine points={[[0.15, 0.18, 0.215], [0.75, 0.18, 0.215]]} />
      <DraftLine points={[[-0.79, 0.55, 0.228], [-0.31, 0.55, 0.228]]} />
    </group>
  )
}
