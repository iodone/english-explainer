import { SketchMesh, SeamRing, Rod, DraftLine } from './primitives'

/**
 * The Slow Cloth（space-parachute）
 *
 * 布局：伞衣在上、吊索往下收拢、载荷挂在最下（和数据 position 的大方向一致）。
 * 密度：伞衣不是一片光穹顶——12 条**经线接缝**把伞衣分成 12 幅（gore），
 * 顶心是气孔（top）+ 通气小孔（hole）两道环，裙边一圈实心箍；
 * 吊索是 12 根真杆（Rod，能参与高亮），从裙边收拢到挂点；挂点下面 4 条吊带（strap）
 * 合成一个环扣住载荷（inside）。
 * 尺度提醒：整件跨度 ≈ 0.9，**小世界**（figure-craft craft.md §5），
 * 世界空间的标注件靠 ThingScene 归一放大，这里只按物件自身比例写坐标。
 */
export default function SpaceParachuteSketch() {
  const R = 0.3 // 伞衣半径
  const CY = 0.1 // 裙边（伞衣赤道面）高度
  const APEX = CY + R // 顶心
  const GORES = 12
  const RISER_Y = -0.06 // 吊索收拢点
  const angles = Array.from({ length: GORES }, (_, i) => (i / GORES) * Math.PI * 2)

  return (
    <group>
      {/* 伞衣：上半球壳（开口朝下），12 条经线接缝贴在壳面上 */}
      <SketchMesh partId="body" position={[0, CY, 0]}>
        <sphereGeometry args={[R, 36, 16, 0, Math.PI * 2, 0, Math.PI / 2]} />
      </SketchMesh>
      {angles.map(a => (
        <SketchMesh key={`g${a}`} partId="body" position={[0, CY, 0]} rotation={[0, a, 0]} scale={[1, 1.002, 1]}>
          <torusGeometry args={[R, 0.0045, 5, 30, Math.PI]} />
        </SketchMesh>
      ))}
      {/* 裙边：一圈实心箍 + 一道折边 */}
      <SeamRing partId="body" center={[0, CY, 0]} radius={R} tube={0.007} axis="y" />
      <SeamRing partId="body" center={[0, CY + 0.022, 0]} radius={R * 0.996} tube={0.004} axis="y" />

      {/* 顶心：气孔环（top）+ 通气小孔（hole）—— 一外一内两道同心环 */}
      <SeamRing partId="top" center={[0, APEX - 0.008, 0]} radius={0.052} tube={0.008} axis="y" />
      <SketchMesh partId="top" position={[0, APEX + 0.004, 0]}>
        <cylinderGeometry args={[0.055, 0.05, 0.022, 24, 1, true]} />
      </SketchMesh>
      <SeamRing partId="hole" center={[0, APEX - 0.006, 0]} radius={0.022} tube={0.006} axis="y" />

      {/* 吊索：12 根，从裙边收到挂点（真杆，能点亮）*/}
      {angles.map(a => (
        <Rod
          key={`l${a}`}
          partId="end"
          radius={0.0045}
          from={[Math.cos(a) * R, CY - 0.002, Math.sin(a) * R]}
          to={[Math.cos(a) * 0.03, RISER_Y, Math.sin(a) * 0.03]}
        />
      ))}

      {/* 吊带：4 条短带 + 一个挂环，把载荷吊在下面 */}
      {[0, 1, 2, 3].map(i => {
        const a = (i / 4) * Math.PI * 2 + Math.PI / 4
        return (
          <Rod
            key={`s${i}`}
            partId="strap"
            radius={0.006}
            from={[Math.cos(a) * 0.03, RISER_Y, Math.sin(a) * 0.03]}
            to={[Math.cos(a) * 0.058, -0.115, Math.sin(a) * 0.058]}
          />
        )
      })}
      <SeamRing partId="strap" center={[0, -0.116, 0]} radius={0.06} tube={0.007} axis="y" />

      {/* 载荷：一只带加强箍的圆桶 */}
      <SketchMesh partId="inside" position={[0, -0.185, 0]}>
        <cylinderGeometry args={[0.055, 0.055, 0.13, 18]} />
      </SketchMesh>
      <SeamRing partId="inside" center={[0, -0.14, 0]} radius={0.057} tube={0.005} axis="y" />
      <SeamRing partId="inside" center={[0, -0.23, 0]} radius={0.057} tube={0.005} axis="y" />
      <SketchMesh partId="inside" position={[0, -0.255, 0]}>
        <cylinderGeometry args={[0.045, 0.04, 0.02, 18]} />
      </SketchMesh>

      {/* 图纸装饰：中心轴 */}
      <DraftLine points={[[0, APEX + 0.06, 0], [0, -0.3, 0]]} opacity={0.18} />
    </group>
  )
}
