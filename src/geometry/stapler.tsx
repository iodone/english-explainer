import { SketchMesh, Rod, DraftLine } from './primitives'

/** 订书机 —— 一次击发瞬间：长臂、驱动头、钉仓、弹簧与弯钉板分层展开 */
export default function StaplerSketch() {
  return (
    <group>
      <SketchMesh partId="long-arm" position={[-0.15, 0.42, 0]} rotation={[0, 0, -0.105]}>
        <boxGeometry args={[1.7, 0.12, 0.35]} />
      </SketchMesh>

      <SketchMesh partId="turn-point" position={[0.55, 0.25, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.14, 0.14, 0.3, 16]} />
      </SketchMesh>

      <SketchMesh partId="push-head" position={[-0.75, 0.18, 0]}>
        <boxGeometry args={[0.18, 0.22, 0.3]} />
      </SketchMesh>

      <SketchMesh partId="pin-room" position={[-0.3, -0.08, 0]}>
        <boxGeometry args={[1.0, 0.14, 0.3]} />
      </SketchMesh>
      {[-0.65, -0.47, -0.29].map((x, index) => (
        <group key={`stored-pin-${index}`}>
          <Rod from={[x - 0.035, -0.08, 0.08]} to={[x - 0.035, -0.02, 0.08]} radius={0.012} />
          <Rod from={[x + 0.035, -0.08, 0.08]} to={[x + 0.035, -0.02, 0.08]} radius={0.012} />
          <Rod from={[x - 0.035, -0.02, 0.08]} to={[x + 0.035, -0.02, 0.08]} radius={0.012} />
        </group>
      ))}

      {Array.from({ length: 4 }, (_, index) => (
        <SketchMesh key={`push-spring-${index}`} partId="push-spring" position={[0.36 + index * 0.09, -0.08, 0]}>
          <torusGeometry args={[0.06, 0.015, 5, 14]} />
        </SketchMesh>
      ))}

      <SketchMesh partId="bend-plate" position={[-0.95, -0.28, 0]}>
        <boxGeometry args={[0.5, 0.05, 0.4]} />
      </SketchMesh>
      <SketchMesh partId="bend-plate" position={[-1.03, -0.25, 0]} rotation={[0, 0, -0.55]}>
        <boxGeometry args={[0.07, 0.025, 0.18]} />
      </SketchMesh>
      <SketchMesh partId="bend-plate" position={[-0.96, -0.25, 0]} rotation={[0, 0, 0.55]}>
        <boxGeometry args={[0.07, 0.025, 0.18]} />
      </SketchMesh>
      <SketchMesh partId="bend-plate" position={[-0.94, -0.25, 0]} rotation={[0, 0, -0.55]}>
        <boxGeometry args={[0.07, 0.025, 0.18]} />
      </SketchMesh>
      <SketchMesh partId="bend-plate" position={[-0.87, -0.25, 0]} rotation={[0, 0, 0.55]}>
        <boxGeometry args={[0.07, 0.025, 0.18]} />
      </SketchMesh>

      {[-0.2, -0.02].map((z, index) => (
        <SketchMesh key={`paper-${index}`} position={[-0.95, -0.22, z]}>
          <boxGeometry args={[0.9, 0.015, 0.32]} />
        </SketchMesh>
      ))}

      <group>
        <Rod from={[-0.835, -0.02, 0.08]} to={[-0.835, 0.06, 0.08]} radius={0.014} />
        <Rod from={[-0.765, -0.02, 0.08]} to={[-0.765, 0.06, 0.08]} radius={0.014} />
        <Rod from={[-0.835, 0.06, 0.08]} to={[-0.765, 0.06, 0.08]} radius={0.014} />
      </group>

      <DraftLine points={[[-0.15, 0.58, 0], [-0.15, 0.42, 0]]} />
      <DraftLine points={[[-0.22, 0.51, 0], [-0.15, 0.42, 0], [-0.08, 0.51, 0]]} />
    </group>
  )
}
