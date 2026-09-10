import { SketchMesh, DraftLine } from './primitives'

/** 轮船 —— 侧视水线：船体、机舱、螺旋桨、舵、驾驶楼、货舱与压载龙骨 */
export default function ShipSketch() {
  return (
    <group>
      <SketchMesh partId="float-body" position={[-0.3, -0.15, 0]}>
        <boxGeometry args={[3.0, 0.55, 0.7]} />
      </SketchMesh>
      <SketchMesh partId="float-body" position={[-1.95, -0.18, 0]} rotation={[0, 0, 0.22]}>
        <boxGeometry args={[0.7, 0.45, 0.58]} />
      </SketchMesh>
      <SketchMesh partId="float-body" position={[-2.25, -0.28, 0]} rotation={[0, 0, 0.5]}>
        <boxGeometry args={[0.45, 0.3, 0.42]} />
      </SketchMesh>
      <SketchMesh partId="float-body" position={[1.22, -0.15, 0]}>
        <boxGeometry args={[0.12, 0.55, 0.7]} />
      </SketchMesh>

      <SketchMesh partId="push-room" position={[0.95, -0.325, 0]}>
        <boxGeometry args={[0.7, 0.2, 0.5]} />
      </SketchMesh>

      <SketchMesh partId="push-foot" position={[1.6, -0.5, 0]}>
        <sphereGeometry args={[0.06, 10, 8]} />
      </SketchMesh>
      {[0, 1, 2].map(index => (
        <SketchMesh
          key={`push-blade-${index}`}
          partId="push-foot"
          position={[1.6, -0.5, 0]}
          rotation={[(index / 3) * Math.PI * 2, 0, 0]}
        >
          <boxGeometry args={[0.05, 0.22, 0.02]} />
        </SketchMesh>
      ))}

      <SketchMesh partId="back-fin" position={[1.85, -0.3, 0]}>
        <boxGeometry args={[0.08, 0.4, 0.32]} />
      </SketchMesh>

      <SketchMesh partId="watch-room" position={[0.75, 0.4, 0]}>
        <boxGeometry args={[0.55, 0.35, 0.55]} />
      </SketchMesh>
      <SketchMesh partId="watch-room" position={[0.75, 0.72, 0]}>
        <boxGeometry args={[0.42, 0.24, 0.42]} />
      </SketchMesh>
      <DraftLine points={[[0.55, 0.42, 0.28], [0.95, 0.42, 0.28]]} />
      <DraftLine points={[[0.55, 0.56, 0.28], [0.95, 0.56, 0.28]]} />

      {[-0.5, -1.1, -1.7].map((x, index) => (
        <SketchMesh key={`carry-room-${index}`} partId="carry-room" position={[x, 0.2, 0]}>
          <boxGeometry args={[0.5, 0.1, 0.55]} />
        </SketchMesh>
      ))}

      <SketchMesh partId="heavy-bottom" position={[-0.3, -0.48, 0]}>
        <boxGeometry args={[2.6, 0.1, 0.42]} />
      </SketchMesh>

      {Array.from({ length: 7 }, (_, index) => (
        <DraftLine
          key={`water-line-${index}`}
          points={[[-2.5 + index * 0.7, -0.3, 0], [-2.1 + index * 0.7, -0.3, 0]]}
        />
      ))}
      <DraftLine points={[[-2.3, -0.2, 0], [-1.95, -0.36, 0], [-1.55, -0.5, 0]]} />
      <DraftLine points={[[-2.15, -0.15, 0], [-1.85, -0.32, 0], [-1.5, -0.46, 0]]} />
      <DraftLine points={[[1.72, -0.42, 0], [2.15, -0.32, 0]]} />
      <DraftLine points={[[1.72, -0.5, 0], [2.2, -0.5, 0]]} />
      <DraftLine points={[[1.72, -0.58, 0], [2.15, -0.68, 0]]} />
      <DraftLine points={[[-1.75, 0.14, 0], [-1.75, 0.52, 0]]} />
      <DraftLine points={[[-1.9, 0.52, 0], [-1.6, 0.52, 0]]} />
    </group>
  )
}
