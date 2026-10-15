import { SketchMesh, SeamRing, DraftLine } from './primitives'

/**
 * The Smash Bowl（home-mortar）
 *
 * 布局：石臼在原点、口沿朝上，杵斜靠在臼里（头落在臼底、柄搭在口沿上）——
 * 杵是"靠着"的，不是插在中间悬空的。
 * 密度：臼是**厚壁双层壳**（inner=装食物的深腔，side=不裂的厚壁），口沿一圈实心箍、
 * 外壁两道车削槽；底下一圈实心足；口沿一侧带外翻倒口。杵有大头、渐细的杆、握位箍、顶端球头。
 * 尺度提醒：整件跨度 ≈ 0.65，**小世界**（figure-craft craft.md §5），
 * 世界空间的标注件靠 ThingScene 归一放大，这里只按物件自身比例写坐标。
 */
export default function HomeMortarSketch() {
  const R = 0.3 // 臼口外半径
  const CY = 0.1 // 臼口高度
  const lean = -0.7 // 杵的倾角（rad，绕 Z 向 +X 倾，约 40°）
  const N = Math.PI * 2

  return (
    <group>
      {/* 臼：厚壁（side = 外壁）+ 深腔（inner = 装食物的那层），底厚一截 */}
      <SketchMesh partId="side" position={[0, CY, 0]}>
        <sphereGeometry args={[R, 26, 14, 0, N, Math.PI / 2, Math.PI * 0.425]} />
      </SketchMesh>
      <SeamRing partId="side" center={[0, CY, 0]} radius={R * 0.93} tube={0.021} axis="y" />
      <SeamRing partId="side" center={[0, CY - 0.11, 0]} radius={R * 0.965} tube={0.005} axis="y" />
      <SeamRing partId="side" center={[0, CY - 0.2, 0]} radius={R * 0.8} tube={0.005} axis="y" />

      <SketchMesh partId="bowl" position={[0, CY, 0]}>
        <sphereGeometry args={[R * 0.85, 24, 14, 0, N, Math.PI / 2, Math.PI * 0.4]} />
      </SketchMesh>

      {/* 倒口：口沿 +Z 一侧的外翻唇（贴着口沿往外翻，不是竖在口上）*/}
      <group position={[0, CY, R * 0.96]} rotation={[1.15, 0, 0]}>
        <SketchMesh partId="lip" position={[0, 0.042, 0]} scale={[1.6, 1, 0.4]}>
          <cylinderGeometry args={[0.05, 0.026, 0.084, 4]} />
        </SketchMesh>
        <SketchMesh partId="lip" position={[0, 0.008, 0]} scale={[1.5, 1, 0.55]}>
          <cylinderGeometry args={[0.032, 0.026, 0.026, 4]} />
        </SketchMesh>
      </group>

      {/* 足：宽底箍 + 一块平底 */}
      <SeamRing partId="foot" center={[0, CY - 0.255, 0]} radius={0.115} tube={0.017} axis="y" />
      <SketchMesh partId="foot" position={[0, CY - 0.29, 0]}>
        <cylinderGeometry args={[0.12, 0.105, 0.03, 22]} />
      </SketchMesh>

      {/* 杵：整支斜靠（大头在臼里、杆搭在口沿上）*/}
      <group position={[0.105, CY - 0.17, 0]} rotation={[0, 0, lean]}>
        <SketchMesh partId="head" position={[0, 0.02, 0]} scale={[1, 0.92, 1]}>
          <sphereGeometry args={[0.082, 18, 14]} />
        </SketchMesh>
        <SketchMesh partId="head" position={[0, -0.045, 0]}>
          <cylinderGeometry args={[0.05, 0.038, 0.03, 16]} />
        </SketchMesh>
        <SketchMesh partId="handle" position={[0, 0.235, 0]}>
          <cylinderGeometry args={[0.026, 0.036, 0.42, 14]} />
        </SketchMesh>
        <SeamRing partId="handle" center={[0, 0.12, 0]} radius={0.034} tube={0.005} axis="y" />
        <SeamRing partId="handle" center={[0, 0.19, 0]} radius={0.031} tube={0.005} axis="y" />
        <SketchMesh partId="handle" position={[0, 0.465, 0]}>
          <sphereGeometry args={[0.04, 14, 12]} />
        </SketchMesh>
      </group>

      {/* 图纸装饰：臼的中心轴 */}
      <DraftLine points={[[0, CY + 0.12, 0], [0, CY - 0.36, 0]]} opacity={0.2} />
    </group>
  )
}
