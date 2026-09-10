import { SketchMesh, Rod, DraftLine } from './primitives'

/** 潜水艇 —— 水下侧影：压载舱、气瓶、推进器、潜浮翼与声呐弧 */
export default function SubmarineSketch() {
  return (
    <group>
      <SketchMesh partId="hard-skin" position={[0, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.3, 0.3, 2.4, 20]} />
      </SketchMesh>
      <SketchMesh partId="hard-skin" position={[-1.2, 0, 0]}>
        <sphereGeometry args={[0.3, 14, 10]} />
      </SketchMesh>
      <SketchMesh partId="hard-skin" position={[1.2, 0, 0]}>
        <sphereGeometry args={[0.3, 14, 10]} />
      </SketchMesh>
      <SketchMesh partId="hard-skin" position={[-0.45, 0.48, 0]}>
        <boxGeometry args={[0.35, 0.35, 0.25]} />
      </SketchMesh>

      {[-0.65, 0.45].map((x, roomIndex) => (
        <group key={`water-room-${roomIndex}`}>
          <SketchMesh partId="water-rooms" position={[x, -0.12, 0]} rotation={[0, 0, Math.PI / 2]}>
            <cylinderGeometry args={[0.34, 0.34, 0.4, 20]} />
          </SketchMesh>
          <Rod from={[x - 0.12, -0.44, 0]} to={[x - 0.12, -0.58, 0]} radius={0.025} partId="water-rooms" />
          <Rod from={[x + 0.12, -0.44, 0]} to={[x + 0.12, -0.58, 0]} radius={0.025} partId="water-rooms" />
        </group>
      ))}

      {[-0.06, 0.15, 0.36].map((x, bottleIndex) => (
        <SketchMesh
          key={`air-box-${bottleIndex}`}
          partId="air-boxes"
          position={[x, 0.32, 0.25]}
          rotation={[0, 0, Math.PI / 2]}
        >
          <cylinderGeometry args={[0.07, 0.07, 0.2, 12]} />
        </SketchMesh>
      ))}

      <Rod from={[-1.35, 0, 0]} to={[-1.55, 0, 0]} radius={0.035} partId="water-pusher" />
      {[0, 1, 2].map(index => (
        <SketchMesh
          key={`pusher-blade-${index}`}
          partId="water-pusher"
          position={[-1.5, 0, 0]}
          rotation={[0.44 + (index * Math.PI * 2) / 3, 0, 0]}
        >
          <boxGeometry args={[0.3, 0.06, 0.12]} />
        </SketchMesh>
      ))}

      <SketchMesh partId="tip-wings" position={[0.85, -0.05, 0.3]} rotation={[0, 0.087, 0]}>
        <boxGeometry args={[0.35, 0.02, 0.5]} />
      </SketchMesh>
      <SketchMesh partId="tip-wings" position={[0.85, -0.05, -0.3]} rotation={[0, -0.087, 0]}>
        <boxGeometry args={[0.35, 0.02, 0.5]} />
      </SketchMesh>

      <Rod from={[-0.45, 0.65, 0]} to={[-0.45, 1.0, 0]} radius={0.025} partId="long-eye" />
      <SketchMesh partId="long-eye" position={[-0.45, 1.05, 0]}>
        <cylinderGeometry args={[0.04, 0.04, 0.1, 10]} />
      </SketchMesh>

      <SketchMesh partId="sound-ears" position={[1.35, 0, 0]}>
        <sphereGeometry args={[0.12, 12, 10]} />
      </SketchMesh>
      {[0.5, 0.65, 0.8].map((radius, index) => (
        <DraftLine
          key={`sound-arc-${index}`}
          points={[
            [1.2 + Math.cos(-0.4) * radius, Math.sin(-0.4) * radius, 0],
            [1.2 + Math.cos(0) * radius, 0, 0],
            [1.2 + Math.cos(0.4) * radius, Math.sin(0.4) * radius, 0],
          ]}
        />
      ))}

      {Array.from({ length: 6 }, (_, index) => (
        <DraftLine
          key={`water-surface-${index}`}
          points={[[-1.8 + index * 0.22, 0.85, 0], [-1.68 + index * 0.22, 0.85, 0]]}
        />
      ))}
      <DraftLine points={[[1.2, -0.24, 0], [1.42, -0.48, 0]]} />
      <DraftLine points={[[1.33, -0.4, 0], [1.42, -0.48, 0], [1.45, -0.36, 0]]} />
    </group>
  )
}
