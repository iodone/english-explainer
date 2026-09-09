import { SketchMesh, Rod } from './primitives'

/** Car for Far-away Worlds（curiosity-rover）— 车身 / 相机桅杆 / 六轮 / 机械臂 / 核电源 */
export default function CuriosityRoverSketch() {
  return (
    <group>
      {/* Body box */}
      <SketchMesh partId="body" position={[0, 0.5, 0]}>
        <boxGeometry args={[1.5, 0.8, 2]} />
      </SketchMesh>
      {/* Camera mast */}
      <SketchMesh partId="mast" position={[0, 1.8, 0.5]}>
        <cylinderGeometry args={[0.08, 0.08, 1.5, 6]} />
      </SketchMesh>
      {/* Camera head */}
      <SketchMesh partId="mast" position={[0, 2.5, 0.5]}>
        <boxGeometry args={[0.4, 0.3, 0.3]} />
      </SketchMesh>
      {/* Wheels — 6 of them */}
      {[[-0.9, 0, 0.7], [-0.9, 0, -0.7], [0.9, 0, 0.7], [0.9, 0, -0.7], [-0.9, 0, 0], [0.9, 0, 0]].map(([x, y, z], i) => (
        <SketchMesh key={i} partId="wheels" position={[x, y, z]} rotation={[0, 0, Math.PI / 2]}>
          <cylinderGeometry args={[0.35, 0.35, 0.15, 12]} />
        </SketchMesh>
      ))}
      {/* Robotic arm — two segments */}
      <Rod from={[0, 0.5, 1]} to={[0, 0.35, 1.7]} partId="arm" radius={0.04} />
      <Rod from={[0, 0.35, 1.7]} to={[0, 0.1, 2.3]} partId="arm" radius={0.04} />
      {/* RTG power */}
      <SketchMesh partId="power" position={[-1, 0.8, 0]}>
        <boxGeometry args={[0.4, 0.6, 0.4]} />
      </SketchMesh>
    </group>
  )
}
