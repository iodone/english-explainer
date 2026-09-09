import { SketchMesh, Rod } from './primitives'

/** Sky Boat with Turning Wings（helicopter）— 机身 / 主旋翼 / 尾梁 / 起落橇 / 风挡 */
export default function HelicopterSketch() {
  return (
    <group>
      {/* Fuselage */}
      <SketchMesh partId="body" position={[0, 0, 0]}>
        <capsuleGeometry args={[0.6, 2, 8, 12]} />
      </SketchMesh>
      {/* Main rotor */}
      <SketchMesh partId="rotor" position={[0, 1.2, 0]}>
        <boxGeometry args={[4, 0.05, 0.3]} />
      </SketchMesh>
      {/* Rotor hub */}
      <SketchMesh partId="rotor" position={[0, 1.2, 0]}>
        <cylinderGeometry args={[0.15, 0.15, 0.3, 8]} />
      </SketchMesh>
      {/* Tail boom */}
      <SketchMesh partId="tail" position={[0, 0.2, -2.5]}>
        <boxGeometry args={[0.3, 0.3, 2.5]} />
      </SketchMesh>
      {/* Tail rotor */}
      <SketchMesh partId="tail" position={[0.3, 0.2, -3.8]} rotation={[0, 0, Math.PI / 2]}>
        <boxGeometry args={[1, 0.03, 0.15]} />
      </SketchMesh>
      {/* Landing skids — two rails + struts */}
      <Rod from={[-0.5, -1.2, 0.9]} to={[-0.5, -1.2, -0.9]} partId="skids" />
      <Rod from={[0.5, -1.2, 0.9]} to={[0.5, -1.2, -0.9]} partId="skids" />
      <Rod from={[-0.5, -0.8, 0.6]} to={[-0.5, -1.2, 0.6]} partId="skids" />
      <Rod from={[-0.5, -0.8, -0.6]} to={[-0.5, -1.2, -0.6]} partId="skids" />
      <Rod from={[0.5, -0.8, 0.6]} to={[0.5, -1.2, 0.6]} partId="skids" />
      <Rod from={[0.5, -0.8, -0.6]} to={[0.5, -1.2, -0.6]} partId="skids" />
      {/* Windshield */}
      <SketchMesh partId="window" position={[0, 0.3, 1.2]}>
        <sphereGeometry args={[0.5, 8, 6, 0, Math.PI * 2, 0, Math.PI / 2]} />
      </SketchMesh>
    </group>
  )
}
