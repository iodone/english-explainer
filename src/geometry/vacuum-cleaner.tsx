import { SketchMesh, Rod } from './primitives'

/** 吸尘器 —— 罐体（集尘袋）+ 左端拉出的风机 + 排气滤墙 + 软管 + 地刷 + 脚轮 + 电源线 */
export default function VacuumCleanerSketch() {
  return (
    <group>
      {/* 机身（内含集尘袋） */}
      <SketchMesh partId="dust-bag" position={[0.05, -0.05, 0]}>
        <boxGeometry args={[1.3, 0.72, 0.8]} />
      </SketchMesh>

      {/* 抽气机：电机筒 + 风扇盘（拉出在机身左端） */}
      <SketchMesh partId="air-puller" position={[-0.88, -0.05, 0]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.22, 0.22, 0.46, 14]} />
      </SketchMesh>
      <SketchMesh partId="air-puller" position={[-1.14, -0.05, 0]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.15, 0.15, 0.07, 12]} />
      </SketchMesh>

      {/* 净气墙：排气口的薄片滤网 */}
      <SketchMesh partId="clean-air-wall" position={[-1.28, -0.05, 0]}>
        <boxGeometry args={[0.06, 0.5, 0.55]} />
      </SketchMesh>

      {/* 长鼻子：三段软管，从机顶绕到地面 */}
      <Rod from={[0.55, 0.35, 0]} to={[0.9, 0.68, 0]} radius={0.055} partId="long-nose" />
      <Rod from={[0.9, 0.68, 0]} to={[1.25, 0.55, 0]} radius={0.055} partId="long-nose" />
      <Rod from={[1.25, 0.55, 0]} to={[1.25, -0.4, 0]} radius={0.055} partId="long-nose" />

      {/* 地面嘴：宽刷头 + 贴地唇边 */}
      <SketchMesh partId="floor-mouth" position={[1.25, -0.5, 0]}>
        <boxGeometry args={[0.55, 0.14, 0.32]} />
      </SketchMesh>
      <SketchMesh partId="floor-mouth" position={[1.25, -0.6, 0]}>
        <boxGeometry args={[0.62, 0.06, 0.36]} />
      </SketchMesh>

      {/* 小脚轮 ×4 */}
      {[0.4, -0.4].map(x =>
        [0.38, -0.38].map(z => (
          <SketchMesh
            key={`${x}:${z}`}
            partId="little-wheels"
            position={[x, -0.47, z]}
            rotation={[Math.PI / 2, 0, 0]}
          >
            <cylinderGeometry args={[0.09, 0.09, 0.06, 10]} />
          </SketchMesh>
        )),
      )}

      {/* 电源线 + 插头 */}
      <Rod from={[-0.55, -0.3, 0]} to={[-1.0, -0.58, 0]} radius={0.02} partId="power-line" />
      <SketchMesh partId="power-line" position={[-1.08, -0.63, 0]}>
        <boxGeometry args={[0.12, 0.12, 0.1]} />
      </SketchMesh>
    </group>
  )
}
