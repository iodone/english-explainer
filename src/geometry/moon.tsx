import * as THREE from 'three'
import { SketchMesh, Rod, DraftLine } from './primitives'

const moonCenter = new THREE.Vector3(-0.4, 0.1, 0)

function surfaceQuaternion(position: [number, number, number]) {
  const radial = new THREE.Vector3(...position).sub(moonCenter).normalize()
  const quaternion = new THREE.Quaternion().setFromUnitVectors(
    new THREE.Vector3(0, 0, 1),
    radial,
  )
  return [quaternion.x, quaternion.y, quaternion.z, quaternion.w] as [
    number,
    number,
    number,
    number,
  ]
}

const darkLands: Array<[number, number, number]> = [
  [-0.12, 0.42, 0.48],
  [-0.75, 0.35, 0.45],
  [-0.45, -0.12, 0.62],
  [-0.12, 0.02, 0.58],
]

const ringMountains: Array<{ position: [number, number, number]; radius: number }> = [
  { position: [-0.08, -0.22, 0.45], radius: 0.07 },
  { position: [-0.84, -0.09, 0.41], radius: 0.07 },
  { position: [0.04, 0.16, 0.44], radius: 0.07 },
  { position: [-0.53, -0.37, 0.38], radius: 0.07 },
  { position: [-0.31, 0.57, 0.4], radius: 0.05 },
  { position: [0.16, 0.23, 0.22], radius: 0.05 },
]

const seaPullLines: Array<[[number, number], [number, number]]> = [
  [[0.27, 0.25], [0.75, 0.22]],
  [[0.25, 0.1], [0.8, 0.05]],
  [[0.27, -0.05], [0.75, -0.12]],
]

const stars: Array<[number, number]> = [
  [-2.7, 1.1],
  [-1.9, 1.4],
  [-2.9, -0.5],
  [-2.2, -0.9],
]

export default function MoonSketch() {
  return (
    <group>
      <SketchMesh partId="rock-ball" position={[-0.4, 0.1, 0]}>
        <sphereGeometry args={[0.65, 24, 18]} />
      </SketchMesh>

      <SketchMesh partId="far-face" position={[-0.4, 0.1, 0]}>
        <sphereGeometry args={[0.665, 16, 12, Math.PI * 1.5, Math.PI]} />
      </SketchMesh>

      {darkLands.map(position => (
        <SketchMesh
          key={`dark-land-${position.join('-')}`}
          partId="dark-lands"
          position={position}
          quaternion={surfaceQuaternion(position)}
          scale={[1, 1, 0.35]}
        >
          <sphereGeometry args={[0.14, 12, 10]} />
        </SketchMesh>
      ))}

      {ringMountains.map(({ position, radius }) => (
        <SketchMesh
          key={`ring-mountain-${position.join('-')}`}
          partId="ring-mountains"
          position={position}
          quaternion={surfaceQuaternion(position)}
        >
          <torusGeometry args={[radius, 0.012, 8, 20]} />
        </SketchMesh>
      ))}

      <SketchMesh partId="moon-dust" position={[-0.4, 0.1, 0]}>
        <sphereGeometry args={[0.69, 18, 14]} />
      </SketchMesh>

      <SketchMesh partId="steps-place" position={[-0.18, -0.4, 0.3]}>
        <boxGeometry args={[0.08, 0.08, 0.08]} />
      </SketchMesh>
      <Rod from={[-0.1, -0.44, 0.36]} to={[-0.04, -0.3, 0.42]} radius={0.008} partId="steps-place" />
      <SketchMesh partId="steps-place" position={[-0.01, -0.32, 0.42]}>
        <boxGeometry args={[0.1, 0.06, 0.005]} />
      </SketchMesh>

      {seaPullLines.map(([from, to], index) => {
        const arrowTop: [number, number, number] = [to[0] - 0.06, to[1] + 0.06, 0]
        const arrowBottom: [number, number, number] = [to[0] - 0.06, to[1] - 0.06, 0]
        return (
          <group key={`sea-pull-${index}`}>
            <Rod from={[...from, 0]} to={[...to, 0]} radius={0.012} partId="sea-pull" />
            <Rod from={[...to, 0]} to={arrowTop} radius={0.012} partId="sea-pull" />
            <Rod from={[...to, 0]} to={arrowBottom} radius={0.012} partId="sea-pull" />
          </group>
        )
      })}

      {Array.from({ length: 18 }, (_, index) => {
        const angle = (173.7 + (index / 17) * 120 - 60) * (Math.PI / 180)
        const nextAngle = (173.7 + ((index + 1) / 17) * 120 - 60) * (Math.PI / 180)
        return (
          <DraftLine
            key={`earth-${index}`}
            points={[
              [2.3 + Math.cos(angle) * 1.1, -0.2 + Math.sin(angle) * 1.1, 0],
              [2.3 + Math.cos(nextAngle) * 1.1, -0.2 + Math.sin(nextAngle) * 1.1, 0],
            ]}
          />
        )
      })}
      <DraftLine points={[[1.45, -0.75, 0], [1.8, -0.62, 0]]} />
      <DraftLine points={[[1.9, -0.2, 0], [2.2, -0.08, 0]]} />

      {Array.from({ length: 20 }, (_, index) => {
        const angle = (173.7 + (index / 19) * 80 - 40) * (Math.PI / 180)
        const nextAngle = (173.7 + ((index + 1) / 19) * 80 - 40) * (Math.PI / 180)
        return (
          <DraftLine
            key={`orbit-${index}`}
            points={[
              [2.3 + Math.cos(angle) * 2.72, -0.2 + Math.sin(angle) * 2.72, 0],
              [2.3 + Math.cos(nextAngle) * 2.72, -0.2 + Math.sin(nextAngle) * 2.72, 0],
            ]}
          />
        )
      })}
      <DraftLine points={[[0.152, 1.477, 0], [0.072, 1.362, 0]]} />
      <DraftLine points={[[0.072, 1.362, 0], [0.084, 1.431, 0]]} />
      <DraftLine points={[[0.072, 1.362, 0], [0.133, 1.397, 0]]} />

      {[
        [2.8, 1.2],
        [3.0, 1.0],
        [3.2, 0.8],
        [3.4, 0.6],
      ].map(([x, y], index) => (
        <DraftLine
          key={`sunlight-${index}`}
          points={[
            [x, y, 0],
            [x - 0.3 / Math.sqrt(1.09), y - 0.09 / Math.sqrt(1.09), 0],
          ]}
        />
      ))}

      {stars.map(([x, y], index) => (
        <group key={`star-${index}`}>
          <DraftLine points={[[x - 0.05, y, 0], [x + 0.05, y, 0]]} />
          <DraftLine points={[[x, y - 0.05, 0], [x, y + 0.05, 0]]} />
        </group>
      ))}
    </group>
  )
}
