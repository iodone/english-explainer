import { SketchMesh, SeamRing, DraftLine, PanelLines } from './primitives'

/**
 * The Soup Spoon（home-ladle）
 *
 * 布局：勺盆在原点、开口朝上，长柄沿 -Z 伸出去（和数据 position 的大方向一致）。
 * 密度：盆是**双层壳**（外皮 + 内胆，内胆是"深的那一层"），口沿一圈实心箍加内卷边；
 * 柄不是一根光杆——根部接板 + 两颗铆钉、中段压扁成扁杆、握位三道防滑筋、尾端打挂孔。
 * 比例：柄长 ≈ 1.7 × 盆径（真勺子的样子），别把盆画成一口锅。
 * 尺度提醒：整件跨度 ≈ 0.45，**小世界**（figure-craft craft.md §5），
 * 世界空间的标注件靠 ThingScene 归一放大，这里只按物件自身比例写坐标。
 */
export default function HomeLadleSketch() {
  const R = 0.082 // 盆口半径
  const CY = 0.045 // 盆口高度
  const ribs = [-0.235, -0.263, -0.291]

  return (
    <group>
      {/* 盆：下半球壳（开口朝上）+ 底下一颗小平足 */}
      <SketchMesh partId="body" position={[0, CY, 0]}>
        <sphereGeometry args={[R, 22, 12, 0, Math.PI * 2, Math.PI / 2, Math.PI / 2]} />
      </SketchMesh>
      <SketchMesh partId="body" position={[0, CY - R * 0.78, 0]}>
        <cylinderGeometry args={[R * 0.34, R * 0.3, 0.014, 18]} />
      </SketchMesh>

      {/* 内胆：比外皮小一圈的下半球 —— 从口沿看进去是它 */}
      <SketchMesh partId="inside" position={[0, CY + 0.003, 0]}>
        <sphereGeometry args={[R * 0.9, 22, 12, 0, Math.PI * 2, Math.PI / 2, Math.PI / 2]} />
      </SketchMesh>
      <SketchMesh partId="inside" position={[0, CY - R * 0.52, 0]}>
        <cylinderGeometry args={[R * 0.52, R * 0.46, 0.01, 18]} />
      </SketchMesh>

      {/* 口沿：实心箍 + 内圈卷边 */}
      <SeamRing partId="top" center={[0, CY, 0]} radius={R} tube={0.007} axis="y" />
      <SeamRing partId="top" center={[0, CY - 0.005, 0]} radius={R * 0.94} tube={0.0045} axis="y" />

      {/* 倒口：45° 方向一片外翻唇，从口沿斜着甩出去 */}
      <group position={[R * Math.SQRT1_2, CY, R * Math.SQRT1_2]} rotation={[0, Math.PI / 4, 0]}>
        {/* 外翻唇：四棱台压扁成一片向外张开的薄板（外缘宽、根部窄）+ 根部垫板 */}
        <SketchMesh partId="pour" position={[0, 0.014, 0.028]} rotation={[1.2, 0, 0]} scale={[1.6, 1, 0.42]}>
          <cylinderGeometry args={[0.027, 0.014, 0.056, 4]} />
        </SketchMesh>
        <SketchMesh partId="pour" position={[0, 0.002, 0.005]} rotation={[1.2, 0, 0]} scale={[1.5, 1, 0.4]}>
          <cylinderGeometry args={[0.021, 0.017, 0.03, 4]} />
        </SketchMesh>
      </group>

      {/* 柄：根部接板 + 两颗铆钉 + 压扁长杆 + 握位防滑筋 + 尾端挂孔 */}
      <SketchMesh partId="end" position={[0, CY, -0.098]}>
        <boxGeometry args={[0.04, 0.016, 0.062]} />
      </SketchMesh>
      <SketchMesh partId="end" position={[0, CY, -0.088]}>
        <cylinderGeometry args={[0.006, 0.006, 0.028, 8]} />
      </SketchMesh>
      <SketchMesh partId="end" position={[0, CY, -0.112]}>
        <cylinderGeometry args={[0.006, 0.006, 0.028, 8]} />
      </SketchMesh>
      <SketchMesh partId="end" position={[0, CY, -0.22]} rotation={[Math.PI / 2, 0, 0]} scale={[1.3, 1, 0.5]}>
        <cylinderGeometry args={[0.018, 0.021, 0.24, 10]} />
      </SketchMesh>
      {ribs.map(z => (
        <SketchMesh key={z} partId="end" position={[0, CY, z]}>
          <boxGeometry args={[0.054, 0.027, 0.01]} />
        </SketchMesh>
      ))}
      <SketchMesh partId="end" position={[0, CY, -0.352]}>
        <boxGeometry args={[0.044, 0.025, 0.042]} />
      </SketchMesh>

      {/* 挂孔：尾端板上打穿的圆孔 */}
      <SeamRing partId="hook" center={[0, CY, -0.357]} radius={0.012} tube={0.0055} axis="y" />

      {/* 图纸装饰：柄的中心线 + 盆口的十字中心线 */}
      <DraftLine points={[[0, CY, 0.02], [0, CY, -0.375]]} opacity={0.22} />
      <PanelLines
        lines={[
          [[-R * 0.7, CY + 0.001, 0], [R * 0.7, CY + 0.001, 0]],
          [[0, CY + 0.001, -R * 0.7], [0, CY + 0.001, R * 0.7]],
        ]}
        opacity={0.16}
      />
    </group>
  )
}
