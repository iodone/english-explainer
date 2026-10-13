import { useFrame } from '@react-three/fiber'
import { Line, Edges } from '@react-three/drei'
import {
  createContext,
  useContext,
  useMemo,
} from 'react'
import * as THREE from 'three'
import type { PartFinish, ThingData } from '../data/types'
import { makeHullMaterial, makePaperMaterial } from './paperSurface'

/**
 * Sketch primitives —— 几何绘制原语层（从 ThingScene.tsx 抽出，2026-09-09）
 *
 * 每个 thing 的几何体放 src/geometry/<slug>.tsx，只 import 本文件的原语；
 * ThingScene 经 src/geometry/index.ts 的 GEOMETRY map 分发。
 * 原语职责：部件配色角色（FINISH_POOL）、点击/hover（PartMetaContext）、
 * 草稿线状态机（usePartHighlight）与绘制元件。
 *
 * 2026-09-29 材质升级（blueprint 技法移植）：
 * - 表面从 meshBasicMaterial 换成纸面排线 shader（paperSurface.ts）：
 *   固定 half-lambert 明暗分层 + 屏幕空间交叉排线，体量感来自明暗而非轮廓线
 * - 外壳类（hull）额外加反向外壳描边，给出连续剪影边
 */

const INK = '#2C2A25'
const INK_SOFT = '#5A554C'
/** JX-7b 军工灰：外壳半透明实体面 */
const HULL_GREY = '#6E6C64'
/** JX-7b 冷灰（结构件/舱段） */
const COLD_GREY = '#96999D'
/** JX-7b 钛白（微暖，配泛黄纸调） */
const TITANIUM = '#D9D5C9'
/** JX-7b 工业警示红：仅核心舱/传感器/推进器类功能点缀位 */
const WARNING_RED = '#E8453C'

export { INK, INK_SOFT, WARNING_RED }

/**
 * 部件配色池（JX-7b §1.5 色彩规范）：
 * 三灰阶层次（军工灰/冷灰/钛白）+ 警示红点缀。
 * 数据层 ThingPart.finish 决定角色；常态 Edges 线色与透明度共用此表，
 * 面材质则由 paperSurface.PAPER_TONES 给同一角色的纸面明度档。
 */
const FINISH_POOL: Record<
  PartFinish,
  { face: THREE.Color; faceOpacity: number; line: THREE.Color; lineOpacity: number }
> = {
  hull: {
    face: new THREE.Color(HULL_GREY),
    faceOpacity: 0.1,
    line: new THREE.Color(INK),
    lineOpacity: 0.85,
  },
  cold: {
    face: new THREE.Color(COLD_GREY),
    faceOpacity: 0.12,
    line: new THREE.Color(INK),
    lineOpacity: 0.8,
  },
  titanium: {
    face: new THREE.Color(TITANIUM),
    faceOpacity: 0.16,
    line: new THREE.Color(INK),
    lineOpacity: 0.85,
  },
  warning: {
    face: new THREE.Color(WARNING_RED),
    faceOpacity: 0.3,
    line: new THREE.Color(WARNING_RED),
    lineOpacity: 0.95,
  },
}

/** 图→词点击 + 部件配色查询：SketchMesh（几何深处）经 context 触达，不逐层传 prop */
export interface PartMeta {
  onPartClick: ((partId: string) => void) | null
  finishOf: (partId: string) => PartFinish
}
export const PartMetaContext = createContext<PartMeta>({
  onPartClick: null,
  finishOf: () => 'hull',
})

/* ─── Part highlight engine ─── */

export interface HighlightState {
  highlightPartId: string | null
  activePartIds: string[]
  pastPartIds: string[]
  dimOthers: boolean
}

/**
 * 部件草稿线状态机：每帧 lerp 到目标（点亮有渐变，仪器感）。
 * 材质三件套：纸面排线面（体量/明暗）+ 反向外壳描边（剪影）+ 子级 drei <Edges> 轮廓线。
 * 常态目标 = 部件配色角色（FINISH_POOL / PAPER_TONES）；
 * 激活/已过/压暗覆盖透明度与线宽，激活色 = thing accent（学习聚焦语义）。
 */
export function usePartHighlight(
  root: React.RefObject<THREE.Group | null>,
  thing: ThingData,
  state: HighlightState,
) {
  const accent = useMemo(() => new THREE.Color(thing.color), [thing.color])
  const accentHex = useMemo(() => thing.color, [thing.color])

  const finishMap = useMemo(() => {
    const m = new Map<string, PartFinish>()
    for (const p of thing.parts) m.set(p.id, p.finish ?? 'hull')
    return m
  }, [thing])

  useFrame(() => {
    const group = root.current
    if (!group) return
    group.traverse(node => {
      if (!(node instanceof THREE.Mesh)) return
      const partId = node.name
      if (!partId) return

      const faceMat = node.material as THREE.Material
      const isPaper = (faceMat as THREE.Material).type === 'ShaderMaterial'

      // drei Edges 渲染为子 Mesh，材质 LineMaterial
      const edges = node.children.find(
        c =>
          c instanceof THREE.Mesh &&
          (c.material as THREE.Material | undefined)?.type === 'LineMaterial',
      ) as THREE.Mesh | undefined
      if (!edges) return
      const lineMat = edges.material as THREE.MeshBasicMaterial & { linewidth: number }

      // 常态 = 配色角色
      const base = FINISH_POOL[finishMap.get(partId) ?? 'hull']
      let lineOpacity = base.lineOpacity
      let lineColor: THREE.Color = base.line
      let lineWidth = 1
      let emphasis = 0
      let dim = 0

      if (state.activePartIds.includes(partId)) {
        lineOpacity = 1; lineColor = accent; lineWidth = 2.5; emphasis = 1
      } else if (state.pastPartIds.includes(partId)) {
        lineOpacity = 0.5; dim = 0.55
      } else if (state.dimOthers) {
        lineOpacity = 0.12; dim = 1
      } else if (state.highlightPartId === partId) {
        lineOpacity = 1; lineColor = accent; lineWidth = 2.5; emphasis = 1
      } else if (state.highlightPartId) {
        dim = 0.5
      }

      if (isPaper) {
        const u = (faceMat as THREE.ShaderMaterial).uniforms
        u.uEmphasis.value = THREE.MathUtils.lerp(u.uEmphasis.value, emphasis, 0.15)
        u.uDim.value = THREE.MathUtils.lerp(u.uDim.value, dim, 0.15)
      } else {
        const basic = faceMat as THREE.MeshBasicMaterial
        basic.opacity = THREE.MathUtils.lerp(basic.opacity, base.faceOpacity, 0.15)
        basic.color.lerp(base.face, 0.15)
      }

      lineMat.opacity = THREE.MathUtils.lerp(lineMat.opacity, lineOpacity, 0.15)
      lineMat.color.lerp(lineColor, 0.15)
      lineMat.linewidth = THREE.MathUtils.lerp(lineMat.linewidth, lineWidth, 0.15)
    })
  })

  return { accentHex }
}

/* ─── Sketch primitives ─── */

const FALLBACK_ACCENT = new THREE.Color('#3ECFCF')

/**
 * 草稿网格体（JX-7b §材质分层 + §色彩）：
 * 纸面排线面（体量/遮蔽感）+ 反向外壳描边（外壳类）+ Edges 轮廓线，色按 finish 角色。
 * 点击本体 = 点部件（图→词）。
 */
export function SketchMesh({
  partId,
  children,
  ...props
}: React.ComponentProps<'mesh'> & { partId?: string }) {
  const { onPartClick, finishOf } = useContext(PartMetaContext)
  const clickable = !!partId && !!onPartClick
  const finish = partId ? finishOf(partId) : 'hull'
  const base = FINISH_POOL[finish]
  const accent = useContext(AccentContext)

  const dpr = Math.min(
    typeof window === 'undefined' ? 2 : window.devicePixelRatio,
    2,
  )
  const materials = useMemo(() => {
    const surface = makePaperMaterial(finish, accent ?? FALLBACK_ACCENT, dpr)
    const hull = makeHullMaterial(0.022, new THREE.Color(INK))
    return { surface, hull }
  }, [finish, accent, dpr])

  return (
    <mesh
      name={partId}
      {...props}
      onClick={
        clickable
          ? e => {
              e.stopPropagation()
              onPartClick!(partId!)
            }
          : undefined
      }
      onPointerOver={
        clickable
          ? e => {
              e.stopPropagation()
              document.body.style.cursor = 'pointer'
            }
          : undefined
      }
      onPointerOut={
        clickable
          ? () => {
              document.body.style.cursor = ''
            }
          : undefined
      }
    >
      {children}
      <primitive object={materials.surface} attach="material" />
      {/* 反向外壳描边：只外壳/钛白类给剪影边，结构件靠 Edges 纵线（JX-7b 双层表达） */}
      {(finish === 'hull' || finish === 'titanium') && (
        <mesh renderOrder={1}>
          {children}
          <primitive object={materials.hull} attach="material" />
        </mesh>
      )}
      <Edges
        color={base.line}
        lineWidth={1}
        threshold={10}
        transparent
        opacity={base.lineOpacity}
      />
    </mesh>
  )
}

/** 每个 thing 的 accent（用于激活高亮 + 纸面材质的 uAccent），由 ThingScene 提供 */
export const AccentContext = createContext<THREE.Color | null>(null)

/** 细杆 —— 可被部件高亮命中的"线"（4 面方杆，手绘粗线感） */
export function Rod({
  from,
  to,
  radius = 0.03,
  partId,
}: {
  from: [number, number, number]
  to: [number, number, number]
  radius?: number
  partId?: string
}) {
  const start = new THREE.Vector3(...from)
  const end = new THREE.Vector3(...to)
  const mid = start.clone().add(end).multiplyScalar(0.5)
  const dir = end.clone().sub(start)
  const quat = new THREE.Quaternion().setFromUnitVectors(
    new THREE.Vector3(0, 1, 0),
    dir.clone().normalize(),
  )
  const { x, y, z, w } = quat
  return (
    <SketchMesh
      partId={partId}
      position={mid.toArray()}
      quaternion={[x, y, z, w]}
    >
      <cylinderGeometry args={[radius, radius, dir.length(), 4]} />
    </SketchMesh>
  )
}

/** 淡墨辅助线（面板格线等，不参与高亮） */
export function DraftLine({ points }: { points: [number, number, number][] }) {
  return (
    <Line
      points={points}
      color={INK}
      lineWidth={1}
      transparent
      opacity={0.4}
    />
  )
}
