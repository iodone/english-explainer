import { SketchMesh, DraftLine } from './primitives'

/** 相机 —— 左视光路图：镜筒朝左，光门/光圈/感光板沿光轴排开，6 条淡墨光线示意汇聚与倒像 */
export default function CameraSketch() {
  return (
    <group>
      {/* 机身外壳 */}
      <SketchMesh partId="dark-box" position={[0, 0, 0]}>
        <boxGeometry args={[1.3, 0.85, 0.75]} />
      </SketchMesh>

      {/* 镜筒（三层圆柱）+ 镜片 */}
      <SketchMesh partId="light-bender" position={[-0.82, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.24, 0.24, 0.4, 16]} />
      </SketchMesh>
      <SketchMesh partId="light-bender" position={[-1.0, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.3, 0.3, 0.07, 16]} />
      </SketchMesh>
      <SketchMesh partId="light-bender" position={[-0.96, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.19, 0.19, 0.03, 16]} />
      </SketchMesh>

      {/* 光圈环 */}
      <SketchMesh partId="light-hole" position={[-0.7, 0, 0]} rotation={[0, Math.PI / 2, 0]}>
        <torusGeometry args={[0.13, 0.035, 8, 18]} />
      </SketchMesh>

      {/* 快门帘（微开） */}
      <SketchMesh partId="light-door" position={[-0.52, 0, 0]} rotation={[0, 0, 0.25]}>
        <boxGeometry args={[0.03, 0.5, 0.42]} />
      </SketchMesh>

      {/* 感光板 */}
      <SketchMesh partId="light-catcher" position={[0.42, 0, 0]}>
        <boxGeometry args={[0.03, 0.5, 0.42]} />
      </SketchMesh>

      {/* 存储卡（底面斜插） */}
      <SketchMesh partId="picture-keeper" position={[0.32, -0.34, 0.32]}>
        <boxGeometry args={[0.2, 0.16, 0.04]} />
      </SketchMesh>

      {/* 背屏 */}
      <SketchMesh partId="back-screen" position={[0.64, 0, 0]}>
        <boxGeometry args={[0.03, 0.62, 0.48]} />
      </SketchMesh>

      {/* 光线图：三线入射 → 镜心 → 交叉铺到感光板（倒像） */}
      <DraftLine points={[[-1.7, 0.5, 0], [-0.96, 0, 0]]} />
      <DraftLine points={[[-1.7, -0.5, 0], [-0.96, 0, 0]]} />
      <DraftLine points={[[-1.7, 0, 0.4], [-0.96, 0, 0]]} />
      <DraftLine points={[[-0.96, 0, 0], [0.42, -0.22, 0]]} />
      <DraftLine points={[[-0.96, 0, 0], [0.42, 0.22, 0]]} />
      <DraftLine points={[[-0.96, 0, 0], [0.42, 0, 0.18]]} />
    </group>
  )
}
