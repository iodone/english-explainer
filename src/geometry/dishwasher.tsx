import { SketchMesh, Rod, DraftLine } from './primitives'

/** 洗碗机 — home：箱体、喷水臂、碗架、门、皂盒、按钮、排水管 */

export default function DishwasherSketch() {
  return (
    <group>
      {/* box-body — 箱体 */}
      <SketchMesh partId="box-body" position={[0, 0, 0]}>
        <boxGeometry args={[0.48, 0.36, 0.30]} />
      </SketchMesh>

      {/* water-shooter — 喷水臂 */}
      <SketchMesh partId="water-shooter" position={[0, -0.10, 0]} rotation={[0, 0.6, 0]}>
        <boxGeometry args={[0.28, 0.015, 0.015]} />
      </SketchMesh>
      <SketchMesh partId="water-shooter" position={[0, -0.10, 0]} rotation={[0, 1.2, 0]}>
        <boxGeometry args={[0.28, 0.015, 0.015]} />
      </SketchMesh>

      {/* dish-rack — 碗架 */}
      <SketchMesh partId="dish-rack" position={[0, 0.06, 0]}>
        <boxGeometry args={[0.36, 0.02, 0.22]} />
      </SketchMesh>
      <SketchMesh partId="dish-rack" position={[0, 0.14, 0]}>
        <boxGeometry args={[0.36, 0.02, 0.22]} />
      </SketchMesh>

      {/* door — 门 */}
      <SketchMesh partId="door" position={[0, -0.20, 0.14]}>
        <boxGeometry args={[0.46, 0.14, 0.02]} />
      </SketchMesh>

      {/* soap-box — 皂盒 */}
      <SketchMesh partId="soap-box" position={[0.20, 0.10, 0.13]}>
        <boxGeometry args={[0.06, 0.06, 0.02]} />
      </SketchMesh>

      {/* control-button — 按钮 */}
      <SketchMesh partId="control-button" position={[0, 0.18, 0.14]}>
        <boxGeometry args={[0.08, 0.03, 0.02]} />
      </SketchMesh>

      {/* drain-pipe — 排水管 */}
      <Rod from={[0, -0.24, -0.10]} to={[0, -0.34, -0.16]} radius={0.008} partId="drain-pipe" />

      {/* decor — 地面线 */}
      <DraftLine points={[[-0.9, -0.34, 0], [0.9, -0.34, 0]]} />
    </group>
  )
}