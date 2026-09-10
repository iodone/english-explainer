import { SketchMesh, Rod, DraftLine } from './primitives'

/** 灯泡 —— 竖直剖视：灯丝、支撑线、惰性气体与螺纹底座，放射短线补足发光感 */
export default function LightBulbSketch() {
  return (
    <group>
      <SketchMesh partId="glass-ball" position={[0, 0.55, 0]}>
        <sphereGeometry args={[0.55, 12, 8]} />
      </SketchMesh>

      {[0, 1, 2].map(index => (
        <SketchMesh key={`light-wire-${index}`} partId="light-wire" position={[0, 0.43 + index * 0.12, 0]}>
          <torusGeometry args={[0.07, 0.014, 6, 14]} />
        </SketchMesh>
      ))}

      <Rod from={[-0.12, 0.12, 0]} to={[-0.16, 0.42, 0]} radius={0.018} partId="hold-wires" />
      <Rod from={[0.12, 0.12, 0]} to={[0.16, 0.42, 0]} radius={0.018} partId="hold-wires" />

      <Rod from={[-0.045, -0.2, 0]} to={[-0.045, 0.4, 0]} radius={0.012} partId="power-lines" />
      <Rod from={[0.045, -0.2, 0]} to={[0.045, 0.4, 0]} radius={0.012} partId="power-lines" />

      {[
        [-0.24, 0.72],
        [0.22, 0.68],
        [-0.08, 0.88],
        [0.3, 0.85],
        [0.05, 0.62],
      ].map(([x, y], index) => (
        <SketchMesh key={`calm-gas-${index}`} partId="calm-gas" position={[x, y, 0]}>
          <torusGeometry args={[0.055, 0.012, 5, 12]} />
        </SketchMesh>
      ))}

      <SketchMesh partId="screw-base" position={[0, -0.45, 0]}>
        <cylinderGeometry args={[0.26, 0.26, 0.4, 16]} />
      </SketchMesh>
      {Array.from({ length: 4 }, (_, index) => (
        <SketchMesh key={`screw-ring-${index}`} partId="screw-base" position={[0, -0.32 - index * 0.09, 0]}>
          <torusGeometry args={[0.27, 0.018, 6, 18]} />
        </SketchMesh>
      ))}

      <SketchMesh partId="touch-point" position={[0, -0.78, 0]}>
        <sphereGeometry args={[0.11, 10, 8]} />
      </SketchMesh>

      {Array.from({ length: 8 }, (_, index) => {
        const angle = (index / 8) * Math.PI * 2
        return (
          <DraftLine
            key={`light-ray-${index}`}
            points={[
              [Math.cos(angle) * 0.62, 0.55 + Math.sin(angle) * 0.62, 0],
              [Math.cos(angle) * 0.95, 0.55 + Math.sin(angle) * 0.95, 0],
            ]}
          />
        )
      })}
    </group>
  )
}
