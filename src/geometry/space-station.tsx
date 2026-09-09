import { SketchMesh, Rod, DraftLine } from './primitives'

/** Shared Space House（space-station）— 桁架 / 舱段 / 太阳能板 / 散热器 / 穹顶 / 机械臂 */
export default function SpaceStationSketch() {
  return (
    <group>
      {/* Central truss */}
      <SketchMesh partId="truss" position={[0, 0, 0]}>
        <boxGeometry args={[5, 0.3, 0.3]} />
      </SketchMesh>
      {/* Modules */}
      {[-1.5, 0, 1.5].map((x, i) => (
        <SketchMesh key={i} partId="modules" position={[x, 0, 0.8]}>
          <cylinderGeometry args={[0.4, 0.4, 1.2, 8]} />
        </SketchMesh>
      ))}
      {/* Solar arrays */}
      {[-3, 3].map((x, i) => (
        <group key={i} position={[x, 0, 0]}>
          <SketchMesh partId="solar">
            <boxGeometry args={[2.5, 1.8, 0.05]} />
          </SketchMesh>
          {/* Panel grid lines */}
          <DraftLine points={[[-1.25, -0.9, 0.01], [-1.25, 0.9, 0.01]]} />
          <DraftLine points={[[-0.625, -0.9, 0.01], [-0.625, 0.9, 0.01]]} />
          <DraftLine points={[[0, -0.9, 0.01], [0, 0.9, 0.01]]} />
          <DraftLine points={[[0.625, -0.9, 0.01], [0.625, 0.9, 0.01]]} />
        </group>
      ))}
      {/* Radiators */}
      <SketchMesh partId="radiators" position={[2, 1, 0]}>
        <boxGeometry args={[1.5, 1, 0.05]} />
      </SketchMesh>
      {/* Cupola */}
      <SketchMesh partId="dome" position={[0, -0.5, 1.2]}>
        <sphereGeometry args={[0.3, 8, 6, 0, Math.PI * 2, Math.PI / 2, Math.PI / 2]} />
      </SketchMesh>
      {/* Long grabber (Canadarm) — two segments */}
      <Rod from={[-0.5, 0.9, 0.8]} to={[0.2, 1.4, 0.4]} partId="arm" />
      <Rod from={[0.2, 1.4, 0.4]} to={[0.9, 1.7, 0]} partId="arm" />
    </group>
  )
}
