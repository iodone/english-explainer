import { SketchMesh, DraftSegments } from './primitives'

/**
 * The Mouth Cleaner（tooth-brush）
 *
 * 部件沿用数据里的四件（handle / head / hairs / grip），只是把"四块光板"补成真东西：
 * 手柄走一段收窄的颈到刷头、握位有一圈防滑筋、刷毛是一列列毛簇而不是一块板。
 * 尺度提醒：整支跨度 ≈ 0.31，是**小世界**（见 figure-craft craft.md §5），
 * 世界空间的标注件靠 ThingScene 归一放大，这里只按物件自身比例写坐标。
 */
export default function ToothBrushSketch() {
  // 毛簇阵列（手柄朝上时，刷毛朝 +Z 立起来）
  const tuftX = [-0.027, -0.009, 0.009, 0.027]
  const tuftY = [0.138, 0.162, 0.186]
  const ribY = [-0.088, -0.058, -0.028]

  return (
    <group>
      {/* 手柄：主体 + 颈段 + 圆头底端（三块同名，整支都能点亮） */}
      <SketchMesh partId="handle" position={[0, 0, 0]}>
        <boxGeometry args={[0.058, 0.2, 0.036]} />
      </SketchMesh>
      <SketchMesh partId="handle" position={[0, 0.088, 0]}>
        <boxGeometry args={[0.03, 0.09, 0.022]} />
      </SketchMesh>
      <SketchMesh partId="handle" position={[0, -0.104, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.019, 0.019, 0.034, 16]} />
      </SketchMesh>

      {/* 刷头：颈到头的肩部 + 头本体 */}
      <SketchMesh partId="head" position={[0, 0.129, 0]}>
        <boxGeometry args={[0.05, 0.014, 0.026]} />
      </SketchMesh>
      <SketchMesh partId="head" position={[0, 0.163, 0]}>
        <boxGeometry args={[0.072, 0.062, 0.034]} />
      </SketchMesh>

      {/* 刷毛：4 列 × 3 行毛簇（细一点、立起来，像真的毛而不是一块板） */}
      {tuftY.map(y =>
        tuftX.map(x => (
          <SketchMesh key={`${x}:${y}`} partId="hairs" position={[x, y, 0.029]}>
            <cylinderGeometry args={[0.0042, 0.0058, 0.024, 6]} />
          </SketchMesh>
        )),
      )}

      {/* 握位：比手柄略粗的一圈 + 3 道防滑筋 */}
      <SketchMesh partId="grip" position={[0, -0.058, 0]}>
        <boxGeometry args={[0.062, 0.096, 0.04]} />
      </SketchMesh>
      {ribY.map(y => (
        <SketchMesh key={y} partId="grip" position={[0, y, 0]}>
          <boxGeometry args={[0.066, 0.007, 0.044]} />
        </SketchMesh>
      ))}

      {/* 图纸装饰：沿颈部的中心线（细画法，别写成实体） */}
      <DraftSegments points={[[0, 0.042, 0], [0, 0.124, 0]]} opacity={0.35} />
    </group>
  )
}
