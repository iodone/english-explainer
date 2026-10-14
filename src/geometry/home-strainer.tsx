import { SketchMesh, SeamRing, DraftLine } from './primitives'

/**
 * The Water Keeper（home-strainer）
 *
 * 布局：盆在原点、开口朝上，柄沿 -Z 伸出去（和数据 position 的大方向一致）。
 * 密度：盆身是双层壳；口沿是一圈**卷边**（外箍 + 内卷）；
 * 筛面不是一块板——按半球面排下 6 圈纬线（finish: warning），读成"网眼筛面"；
 * 盆底 3 只支脚 + 一根底箍，柄根有接板与铆钉、尾端打挂孔。
 * 尺度提醒：整件跨度 ≈ 0.45，**小世界**（figure-craft craft.md §5），
 * 世界空间的标注件靠 ThingScene 归一放大，这里只按物件自身比例写坐标。
 */
export default function HomeStrainerSketch() {
  const R = 0.13 // 口沿半径
  const CY = 0.06 // 口沿高度（下半球壳的赤道面）
  const footAngles = [0, (Math.PI * 2) / 3, (Math.PI * 4) / 3]

  // 筛面纬线：贴着下半球的内表面（半径越小、圈越靠底）
  const screenRings = [0.117, 0.1, 0.078, 0.052, 0.028].map(radius => ({
    radius,
    y: CY - Math.sqrt(R * R - radius * radius) + 0.004,
  }))

  return (
    <group>
      {/* 盆身：双层下半球壳 + 底部小平足 */}
      <SketchMesh partId="body" position={[0, CY, 0]}>
        <sphereGeometry args={[R, 24, 12, 0, Math.PI * 2, Math.PI / 2, Math.PI / 2]} />
      </SketchMesh>
      <SketchMesh partId="body" position={[0, CY - R * 0.95, 0]}>
        <cylinderGeometry args={[R * 0.3, R * 0.26, 0.012, 18]} />
      </SketchMesh>

      {/* 筛面：一圈圈纬线贴在盆壁上（一眼看出"有孔"的那一层） */}
      {screenRings.map(ring => (
        <SeamRing key={ring.radius} partId="inside" center={[0, ring.y, 0]} radius={ring.radius} tube={0.0035} axis="y" />
      ))}

      {/* 口沿：外箍 + 内卷边 */}
      <SeamRing partId="top" center={[0, CY, 0]} radius={R} tube={0.008} axis="y" />
      <SeamRing partId="top" center={[0, CY - 0.009, 0]} radius={R * 0.955} tube={0.005} axis="y" />

      {/* 支脚：三只，从盆底外表面往下撑（起点落在壳面上，别穿进盆里）；外加一圈底箍 */}
      {footAngles.map(a => {
        const r = 0.048
        const yTop = CY - Math.sqrt(R * R - r * r) + 0.004
        const x = Math.cos(a) * r
        const z = Math.sin(a) * r
        return (
          <group key={a} position={[x, yTop, z]} rotation={[-Math.sin(a) * 0.26, 0, Math.cos(a) * 0.26]}>
            <SketchMesh partId="rest" position={[0, -0.023, 0]}>
              <cylinderGeometry args={[0.009, 0.012, 0.046, 10]} />
            </SketchMesh>
            <SketchMesh partId="rest" position={[0, -0.046, 0]}>
              <cylinderGeometry args={[0.016, 0.014, 0.01, 10]} />
            </SketchMesh>
          </group>
        )
      })}
      <SeamRing partId="rest" center={[0, CY - 0.098, 0]} radius={0.056} tube={0.004} axis="y" />

      {/* 柄：接板 + 两颗铆钉 + 微微下垂的扁杆 + 尾端挂孔 */}
      <SketchMesh partId="end" position={[0, CY - 0.014, -0.118]} rotation={[-0.12, 0, 0]}>
        <boxGeometry args={[0.05, 0.019, 0.07]} />
      </SketchMesh>
      <SketchMesh partId="end" position={[0, CY - 0.012, -0.104]} rotation={[-0.12, 0, 0]}>
        <cylinderGeometry args={[0.006, 0.006, 0.028, 8]} />
      </SketchMesh>
      <SketchMesh partId="end" position={[0, CY - 0.02, -0.132]} rotation={[-0.12, 0, 0]}>
        <cylinderGeometry args={[0.006, 0.006, 0.028, 8]} />
      </SketchMesh>
      <SketchMesh partId="end" position={[0, CY - 0.028, -0.216]} rotation={[Math.PI / 2 - 0.12, 0, 0]} scale={[1.35, 1, 0.5]}>
        <cylinderGeometry args={[0.016, 0.019, 0.19, 10]} />
      </SketchMesh>
      <SketchMesh partId="end" position={[0, CY - 0.044, -0.328]}>
        <boxGeometry args={[0.04, 0.023, 0.04]} />
      </SketchMesh>

      {/* 挂孔：尾端板上打穿的圆孔 */}
      <SeamRing partId="hook" center={[0, CY - 0.044, -0.333]} radius={0.011} tube={0.005} axis="y" />

      {/* 图纸装饰：柄的中心线 + 盆口十字中心线 */}
      <DraftLine points={[[0, CY - 0.02, 0.02], [0, CY - 0.05, -0.35]]} opacity={0.2} />
      <DraftLine points={[[-R * 0.75, CY, 0], [R * 0.75, CY, 0]]} opacity={0.16} />
      <DraftLine points={[[0, CY, -R * 0.75], [0, CY, R * 0.75]]} opacity={0.16} />
    </group>
  )
}
