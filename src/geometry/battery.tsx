import { SketchMesh, DraftLine } from './primitives'

/** 电池 —— 同轴分层沿 x 炸开（碳棒→隔膜→电解膏→锌层→钢壳），顶帽+按钮在钢壳顶，淡墨线画外电路 */
export default function BatterySketch() {
  return (
    <group>
      {/* 同轴分层，从内到外沿 x 依次排开 */}
      <SketchMesh partId="second-metal" position={[-1.2, 0, 0]}>
        <cylinderGeometry args={[0.13, 0.13, 1.5, 12]} />
      </SketchMesh>
      <SketchMesh partId="trade-wall" position={[-0.6, 0, 0]}>
        <cylinderGeometry args={[0.19, 0.19, 1.45, 12]} />
      </SketchMesh>
      <SketchMesh partId="middle-stuff" position={[0, 0, 0]}>
        <cylinderGeometry args={[0.28, 0.28, 1.5, 14]} />
      </SketchMesh>
      <SketchMesh partId="first-metal" position={[0.6, 0, 0]}>
        <cylinderGeometry args={[0.38, 0.38, 1.55, 16]} />
      </SketchMesh>
      <SketchMesh partId="steel-skin" position={[1.2, 0, 0]}>
        <cylinderGeometry args={[0.46, 0.46, 1.7, 18]} />
      </SketchMesh>

      {/* 正极帽 + 按钮 */}
      <SketchMesh partId="top-cap" position={[1.2, 0.94, 0]}>
        <cylinderGeometry args={[0.09, 0.09, 0.18, 10]} />
      </SketchMesh>
      <SketchMesh partId="top-cap" position={[1.2, 1.06, 0]}>
        <cylinderGeometry args={[0.055, 0.055, 0.1, 10]} />
      </SketchMesh>

      {/* 外电路：正极 → 上行 → 右侧小机器（方框）→ 下行绕回钢壳底 */}
      <DraftLine
        points={[
          [1.2, 1.11, 0],
          [1.2, 1.5, 0],
          [1.7, 1.5, 0],
        ]}
      />
      <DraftLine
        points={[
          [1.7, 1.65, 0],
          [2.05, 1.65, 0],
          [2.05, 1.35, 0],
          [1.7, 1.35, 0],
          [1.7, 1.65, 0],
        ]}
      />
      <DraftLine
        points={[
          [2.05, 1.5, 0],
          [2.4, 1.5, 0],
          [2.4, -0.95, 0],
          [1.2, -0.95, 0],
          [1.2, -0.85, 0],
        ]}
      />
    </group>
  )
}
