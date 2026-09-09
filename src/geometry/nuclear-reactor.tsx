import { SketchMesh, Rod } from './primitives'

/** Heavy Metal Power Building（nuclear-reactor）— 安全壳穹顶 / 堆芯 / 控制棒 / 冷却塔 / 汽轮机 */
export default function NuclearReactorSketch() {
  return (
    <group>
      {/* Containment dome — hemisphere */}
      <SketchMesh partId="building" position={[0, 2, 0]}>
        <sphereGeometry args={[2, 16, 12, 0, Math.PI * 2, 0, Math.PI / 2]} />
      </SketchMesh>
      {/* Reactor vessel — cylinder */}
      <SketchMesh partId="core" position={[0, 0.5, 0]}>
        <cylinderGeometry args={[1.2, 1.2, 3, 12]} />
      </SketchMesh>
      {/* Control rods */}
      {[-0.4, 0, 0.4].map((x, i) => (
        <SketchMesh key={i} partId="rods" position={[x, 2.2, 0]}>
          <boxGeometry args={[0.15, 1.5, 0.15]} />
        </SketchMesh>
      ))}
      {/* Cooling towers */}
      {[-2.5, 2.5].map((x, i) => (
        <SketchMesh key={i} partId="water" position={[x, 1, 0]}>
          <cylinderGeometry args={[0.6, 0.8, 3, 8]} />
        </SketchMesh>
      ))}
      {/* Steam pipes → turbine */}
      <Rod from={[1.2, 1, 0]} to={[2.6, 1, 0]} partId="steam" />
      <Rod from={[-1.2, 1, 0]} to={[-2.6, 1, 0]} partId="steam" />
      {/* Power wheel (turbine) */}
      <SketchMesh partId="wheel" position={[3.2, 1, 0]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.5, 0.5, 0.35, 10]} />
      </SketchMesh>
      {/* Turbine blades */}
      {[0, 1, 2, 3, 4, 5].map(i => {
        const angle = (i / 6) * Math.PI * 2
        return (
          <SketchMesh
            key={i}
            partId="wheel"
            position={[3.2 + Math.cos(angle) * 0.7, 1 + Math.sin(angle) * 0.7, 0]}
            rotation={[0, 0, angle + Math.PI / 2]}
          >
            <boxGeometry args={[0.35, 0.06, 0.06]} />
          </SketchMesh>
        )
      })}
    </group>
  )
}
