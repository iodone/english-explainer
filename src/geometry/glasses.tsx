import { SketchMesh, DraftLine } from './primitives'

/** 眼镜 —— 正视结构加下方光路：厚薄不同的镜片把平行光送回后壁焦点 */
export default function GlassesSketch() {
  return (
    <group>
      <SketchMesh partId="glass-rings" position={[-0.55, 0.25, 0]}>
        <torusGeometry args={[0.42, 0.035, 10, 40]} />
      </SketchMesh>
      <SketchMesh partId="glass-rings" position={[0.55, 0.25, 0]}>
        <torusGeometry args={[0.42, 0.035, 10, 40]} />
      </SketchMesh>

      <SketchMesh partId="bender-pair" position={[-0.55, 0.25, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.4, 0.4, 0.006, 40]} />
      </SketchMesh>
      <SketchMesh partId="bender-pair" position={[0.55, 0.25, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.4, 0.4, 0.006, 40]} />
      </SketchMesh>

      <SketchMesh partId="nose-bridge" position={[0, 0.28, 0]}>
        <boxGeometry args={[0.28, 0.05, 0.05]} />
      </SketchMesh>

      <SketchMesh partId="side-arms" position={[-1.1, 0.3, -0.15]} rotation={[0, -0.6, 0]}>
        <boxGeometry args={[0.75, 0.045, 0.04]} />
      </SketchMesh>
      <SketchMesh partId="side-arms" position={[1.1, 0.3, -0.15]} rotation={[0, 0.6, 0]}>
        <boxGeometry args={[0.75, 0.045, 0.04]} />
      </SketchMesh>

      <SketchMesh partId="ear-bends" position={[-1.42, 0.2, -0.28]} rotation={[0, 0, -0.3]}>
        <boxGeometry args={[0.06, 0.18, 0.04]} />
      </SketchMesh>
      <SketchMesh partId="ear-bends" position={[1.42, 0.2, -0.28]} rotation={[0, 0, 0.3]}>
        <boxGeometry args={[0.06, 0.18, 0.04]} />
      </SketchMesh>

      <SketchMesh partId="turn-screws" position={[-0.88, 0.3, 0.05]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.025, 0.025, 0.05, 10]} />
      </SketchMesh>
      <SketchMesh partId="turn-screws" position={[0.88, 0.3, 0.05]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.025, 0.025, 0.05, 10]} />
      </SketchMesh>

      <SketchMesh partId="bender-pair" position={[-0.25, -0.7, 0]} rotation={[0, 0, 0.35]}>
        <boxGeometry args={[0.5, 0.04, 0.03]} />
      </SketchMesh>
      <SketchMesh partId="bender-pair" position={[0.25, -0.7, 0]} rotation={[0, 0, -0.35]}>
        <boxGeometry args={[0.5, 0.04, 0.03]} />
      </SketchMesh>

      {[-0.6, -0.7, -0.8].map((y, index) => (
        <group key={`light-${index}`}>
          <DraftLine points={[[-1.3, y, 0], [-0.5, y, 0]]} />
          <DraftLine points={[[-0.5, y, 0], [0.95, -0.7, 0]]} />
          <DraftLine points={[[0.95, -0.7, 0], [1.2, y === -0.7 ? -0.7 : -0.7 + (y - -0.7) * -0.2, 0]]} />
        </group>
      ))}

      <DraftLine points={[[0.95, -0.45, 0], [0.95, -0.95, 0]]} />
    </group>
  )
}
