import { SketchMesh, Rod, DraftLine } from './primitives'

/** 望远镜 —— 侧视折射镜：物镜聚光、目镜放大，赤道仪与三脚架保持稳定 */
export default function TelescopeSketch() {
  return (
    <group>
      <SketchMesh partId="long-tube" position={[0, 0.6, 0]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.26, 0.26, 2.5, 20]} />
      </SketchMesh>

      <SketchMesh partId="far-glass" position={[-1.28, 0.6, 0]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.3, 0.3, 0.07, 24]} />
      </SketchMesh>
      <SketchMesh partId="far-glass" position={[-1.3, 0.6, 0]} rotation={[0, Math.PI / 2, 0]}>
        <torusGeometry args={[0.31, 0.025, 8, 24]} />
      </SketchMesh>

      <SketchMesh partId="eye-glass" position={[1.45, 0.6, 0]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.12, 0.12, 0.35, 16]} />
      </SketchMesh>
      <SketchMesh partId="eye-glass" position={[1.62, 0.6, 0]} rotation={[0, Math.PI / 2, 0]}>
        <torusGeometry args={[0.14, 0.02, 8, 20]} />
      </SketchMesh>

      <SketchMesh partId="sky-finder" position={[-0.2, 1.02, 0]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.06, 0.06, 0.75, 14]} />
      </SketchMesh>
      <Rod from={[-0.4, 0.86, 0]} to={[-0.4, 0.98, 0]} radius={0.018} partId="sky-finder" />
      <Rod from={[0, 0.86, 0]} to={[0, 0.98, 0]} radius={0.018} partId="sky-finder" />

      <SketchMesh partId="turn-bed" position={[0.15, 0.08, 0]}>
        <boxGeometry args={[0.55, 0.4, 0.45]} />
      </SketchMesh>
      <SketchMesh partId="turn-bed" position={[0.15, 0.1, 0.28]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.05, 0.05, 0.15, 12]} />
      </SketchMesh>

      <Rod from={[0.15, -0.1, 0]} to={[-0.75, -1.15, 0]} radius={0.028} partId="three-legs" />
      <Rod from={[0.15, -0.1, 0]} to={[1.05, -1.15, 0]} radius={0.028} partId="three-legs" />
      <Rod from={[0.15, -0.1, 0]} to={[0.15, -1.1, 0.55]} radius={0.028} partId="three-legs" />

      <DraftLine points={[[-2.3, 0.95, 0], [-1.75, 0.8, 0]]} />
      <DraftLine points={[[-2.3, 0.6, 0], [-1.75, 0.62, 0]]} />
      <DraftLine points={[[-2.3, 0.25, 0], [-1.75, 0.45, 0]]} />

      {[
        [-1.6, 1.5],
        [-0.6, 1.75],
        [0.6, 1.6],
      ].map(([x, y], index) => (
        <group key={`star-${index}`}>
          <DraftLine points={[[x - 0.05, y, 0], [x + 0.05, y, 0]]} />
          <DraftLine points={[[x, y - 0.05, 0], [x, y + 0.05, 0]]} />
        </group>
      ))}
      <DraftLine points={[[-1.0, -1.2, 0], [1.6, -1.2, 0]]} />
    </group>
  )
}
