import { SketchMesh, SeamRing, Rod, DraftLine } from './primitives'

/**
 * The Skin Taker（home-peeler）
 *
 * 布局：柄沿 Z 躺平（和数据 position 的大方向一致），带槽的刀架立在前端。
 * 密度：柄是**压扁的细握把**（三道防滑筋 + 前端一段四棱过渡）；前端是 **Y 形叉架**
 * （两侧叉壁 = blade guard，托住刀片）；刀片是薄板 + 前方一道刃口杆；
 * 叉架根部开卸眼孔（slot，一圈孔沿）；尾端盖板上一道挂孔（hang）。
 * 尺度提醒：整件跨度 ≈ 0.45，**小世界**（figure-craft craft.md §5），
 * 世界空间的标注件靠 ThingScene 归一放大，这里只按物件自身比例写坐标。
 * 别把柄画粗：真削皮刀的柄是细杆，画粗了整件读成一台小机器。
 */
export default function HomePeelerSketch() {
  const ribs = [-0.04, 0.0, 0.04]

  return (
    <group>
      {/* 柄：细握把（压扁）+ 前端四棱过渡段 */}
      <SketchMesh partId="body" position={[0, 0, -0.02]} rotation={[Math.PI / 2, 0, 0]} scale={[1.35, 1, 0.82]}>
        <cylinderGeometry args={[0.02, 0.017, 0.3, 12]} />
      </SketchMesh>
      {ribs.map(z => (
        <SketchMesh key={z} partId="body" position={[0, 0, z]}>
          <boxGeometry args={[0.044, 0.028, 0.008]} />
        </SketchMesh>
      ))}
      <SketchMesh partId="body" position={[0, 0.002, 0.118]} rotation={[Math.PI / 2, 0, 0]} scale={[1.2, 1, 0.85]}>
        <cylinderGeometry args={[0.026, 0.018, 0.05, 4]} />
      </SketchMesh>

      {/* 尾端：盖板 + 圆头 */}
      <SketchMesh partId="end" position={[0, 0, -0.183]}>
        <boxGeometry args={[0.046, 0.026, 0.026]} />
      </SketchMesh>
      <SketchMesh partId="end" position={[0, 0, -0.2]} rotation={[0, Math.PI / 2, 0]}>
        <cylinderGeometry args={[0.014, 0.014, 0.026, 14]} />
      </SketchMesh>

      {/* 挂孔：尾端盖板上打穿的孔 */}
      <SeamRing partId="hang" center={[0, 0, -0.182]} radius={0.01} tube={0.004} axis="y" />

      {/* 叉架底板：卸眼孔就开在这块板上 */}
      <SketchMesh partId="side" position={[0, 0.021, 0.126]}>
        <boxGeometry args={[0.062, 0.012, 0.068]} />
      </SketchMesh>

      {/* Y 形叉架：两侧叉壁（= 限制切入深度的护壁）*/}
      {[-1, 1].map(s => (
        <group key={s} position={[s * 0.03, 0.028, 0.128]} rotation={[0, 0, -s * 0.14]}>
          <SketchMesh partId="side" position={[0, 0.022, 0]} rotation={[Math.PI / 2, 0, 0]} scale={[0.8, 1, 1.7]}>
            <cylinderGeometry args={[0.015, 0.011, 0.07, 4]} />
          </SketchMesh>
        </group>
      ))}
      <SeamRing partId="side" center={[0, 0.024, 0.104]} radius={0.03} tube={0.005} axis="z" />

      {/* 刀片：卡在两侧叉壁之间的薄板 + 前缘一道刃口杆 */}
      <SketchMesh partId="blade" position={[0, 0.056, 0.138]}>
        <boxGeometry args={[0.066, 0.0035, 0.056]} />
      </SketchMesh>
      <Rod partId="blade" from={[-0.033, 0.057, 0.166]} to={[0.033, 0.057, 0.166]} radius={0.004} />
      <SeamRing partId="blade" center={[0, 0.056, 0.138]} radius={0.022} tube={0.003} axis="y" />

      {/* 卸眼孔：叉架底板上打穿的小孔 */}
      <SeamRing partId="slot" center={[0, 0.028, 0.104]} radius={0.011} tube={0.0035} axis="y" />
      <SketchMesh partId="slot" position={[0, 0.028, 0.104]}>
        <cylinderGeometry args={[0.011, 0.011, 0.014, 14, 1, true]} />
      </SketchMesh>

      {/* 图纸装饰：柄的中心线 */}
      <DraftLine points={[[0, 0, 0.06], [0, 0, -0.22]]} opacity={0.2} />
      <DraftLine points={[[0, 0.058, 0.108], [0, 0.058, 0.17]]} opacity={0.2} />
    </group>
  )
}
