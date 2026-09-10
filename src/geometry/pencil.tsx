import { SketchMesh, DraftLine } from './primitives'

/** 铅笔 —— 沿 x 装配分解：主轴杆件、下侧芯/漆层/六边截面，左端纸面承接尘点 */
export default function PencilSketch() {
  return (
    <group>
      <SketchMesh partId="write-tip" position={[-0.96, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0, 0.08, 0.34, 6]} />
      </SketchMesh>

      <SketchMesh partId="wood-case" position={[-0.24, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.1, 0.1, 1.1, 6]} />
      </SketchMesh>

      <SketchMesh partId="metal-ring" position={[0.39, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.12, 0.12, 0.22, 6]} />
      </SketchMesh>

      <SketchMesh partId="rub-end" position={[0.62, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.09, 0.09, 0.24, 14]} />
      </SketchMesh>

      <SketchMesh partId="black-heart" position={[-0.24, -0.66, 0]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.035, 0.035, 1.22, 6]} />
      </SketchMesh>

      <SketchMesh partId="paint-skin" position={[-0.3, -1.06, 0]}>
        <boxGeometry args={[1.12, 0.02, 0.18]} />
      </SketchMesh>

      <SketchMesh partId="six-sides" position={[-1.02, -0.66, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.16, 0.16, 0.02, 6]} />
      </SketchMesh>

      <DraftLine
        points={[
          [-1.78, -0.34, 0],
          [-1.66, -0.34, 0],
          [-1.66, 0.34, 0],
          [-1.78, 0.34, 0],
          [-1.78, -0.34, 0],
        ]}
      />
      <DraftLine points={[[-1.62, -0.07, -0.04], [-1.3, -0.07, -0.04]]} />
      <DraftLine points={[[-1.12, -0.02, 0.05], [-1.38, -0.08, -0.03]]} />
      <DraftLine points={[[-1.06, -0.12, 0.05], [-1.42, -0.13, -0.03]]} />
      <DraftLine points={[[-1.46, -0.18, -0.04], [-1.34, -0.24, -0.04]]} />

      <DraftLine points={[[-0.72, -0.66, 0], [-0.72, -0.12, 0]]} />
      <DraftLine points={[[-0.3, -1.06, 0], [-0.3, -0.13, 0]]} />
      <DraftLine points={[[-1.02, -0.54, 0], [-0.84, -0.12, 0]]} />
    </group>
  )
}
