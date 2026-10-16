import { useFrame } from '@react-three/fiber'
import { Line, Edges } from '@react-three/drei'
import {
  createContext,
  useContext,
  useMemo,
} from 'react'
import * as THREE from 'three'
import type { PartFinish, ThingData } from '../data/types'
import { accentInkOf, makeHullMaterial, makePaperMaterial } from './paperSurface'

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

/** 反向外壳描边的目标屏幕线宽（CSS 像素）——屏幕恒定，不随缩放变化 */
const HULL_WIDTH_PX = 1.1

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
  // 透明壳：纸面极淡 + 墨线仍在（剪影照旧清楚）
  shell: {
    face: new THREE.Color(TITANIUM),
    faceOpacity: 0.06,
    line: new THREE.Color(INK),
    lineOpacity: 0.7,
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
 * 激活/已过/压暗覆盖透明度与线宽，激活色 = thing accent 的**墨色**（accentInkOf）。
 *
 * 2026-10-15 修：**纸底上的强调只能加墨，不能加亮**。
 * 旧实现让被点中的部件切到"更亮"的 lit 档 + accent 原色（浅粉彩）画线，
 * 结果是"点谁谁褪色"：面变近白、墨线变浅青，对比度掉到 1.4:1，
 * 读起来是"整个部件变灰了"。同时"其余部件"只降面不降线，留下一圈硬墨边的鬼影。
 * 现在两条都反过来：被点中 = 面加深 + 排线加密 + accent 墨线加粗；其余 = 面与线一起退开。
 */
export function usePartHighlight(
  root: React.RefObject<THREE.Group | null>,
  thing: ThingData,
  state: HighlightState,
) {
  const accent = useMemo(() => new THREE.Color(thing.color), [thing.color])
  const accentHex = useMemo(() => thing.color, [thing.color])
  // 画线用的 accent 墨色（浅粉彩原色在纸面上不可读，见 accentInkOf）
  const accentInk = useMemo(() => accentInkOf(accent), [accent])

  const finishMap = useMemo(() => {
    const m = new Map<string, PartFinish>()
    for (const p of thing.parts) m.set(p.id, p.finish ?? 'hull')
    return m
  }, [thing])

  const scratchScale = useMemo(() => new THREE.Vector3(), [])
  const scratchPos = useMemo(() => new THREE.Vector3(), [])

  useFrame(({ camera, size }) => {
    const group = root.current
    if (!group) return

    // 屏幕恒定线宽（anatomy 的 vector-effect: non-scaling-stroke）：
    // 世界单位/像素 = 视锥在该深度的高度 ÷ 画布高度；正交按 zoom 换算。
    const worldPerPx = (depth: number) =>
      camera instanceof THREE.PerspectiveCamera
        ? (2 * Math.tan((camera.fov * Math.PI) / 360) * depth) / Math.max(size.height, 1)
        : 1 / Math.max(camera.zoom, 0.0001)

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
      const finish = finishMap.get(partId) ?? 'hull'
      const base = FINISH_POOL[finish]
      // 被点亮的"记号色"：**红件保持自己的红**——红是语义色（功能/警示位，每件 ≤2），
      // 被 thing 的身份色覆盖会让"这个部件是热的/带电的"这层意思凭空消失
      // （2026-10-15 用户反馈：点测电表的红线圈，红变成 accent 的土黄）。
      // 其余三档是纸面灰阶（无彩），拿 accent 墨色上色不冲突——那是给灰阶件显色相的。
      const markInk = finish === 'warning' ? base.line : accentInk
      let lineOpacity = base.lineOpacity
      let lineColor: THREE.Color = base.line
      let lineWidth = 1
      let emphasis = 0
      let dim = 0

      if (state.activePartIds.includes(partId)) {
        lineOpacity = 1; lineColor = markInk; lineWidth = 2.5; emphasis = 1
      } else if (state.pastPartIds.includes(partId)) {
        lineOpacity = 0.45; lineWidth = 0.9; dim = 0.6
      } else if (state.dimOthers) {
        lineOpacity = 0.12; dim = 1
      } else if (state.highlightPartId === partId) {
        lineOpacity = 1; lineColor = markInk; lineWidth = 2.5; emphasis = 1
      } else if (state.highlightPartId) {
        // 阅读态点选：其余部件向纸面退开。**面和线一起退** ——
        // 只降面不降线会留下"淡面 + 硬墨边"的鬼影，比不退还乱。
        lineOpacity = base.lineOpacity * 0.4; lineWidth = 0.9; dim = 0.55
      }

      // 反向外壳描边（子 mesh，同几何体）：每帧重算世界单位线宽
      const hull = node.children.find(
        c =>
          c instanceof THREE.Mesh &&
          (c.material as THREE.Material | undefined)?.type === 'ShaderMaterial',
      ) as THREE.Mesh | undefined

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

      if (hull && hull.material instanceof THREE.ShaderMaterial) {
        const hu = hull.material.uniforms
        hu.uEmphasis.value = emphasis
        hu.uDim.value = dim
        const scale = node.getWorldScale(scratchScale).x || 1
        node.getWorldPosition(scratchPos)
        const depth = camera.position.distanceTo(scratchPos)
        const target = (hu.uWidthPx.value as number) * worldPerPx(depth) / scale
        // 下限放到 1e-5：uWidth 是**物体空间**偏移，模型跨度归一后（小世界最多放大 ~50×）
        // 物体空间的偏移量会小到 1e-4 量级，旧下限 0.002 会把它顶上去，
        // 于是缩放越大墨线越粗（放 50× 能粗到几十像素）。上限不动，防止退化值炸开。
        hu.uWidth.value = THREE.MathUtils.clamp(target, 1e-5, 0.05)
      }
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
    // 面染色用的也是**纸面可用色**（不是 thing.color 原色）：金 accent 原色往面上刷
    // 就是一层黄，而它在纸上本来就没法当墨 —— 与线/点阵/标注保持同一支色
    const surface = makePaperMaterial(finish, accentInkOf(accent ?? FALLBACK_ACCENT), dpr)
    const hull = makeHullMaterial(
      HULL_WIDTH_PX,
      new THREE.Color(INK),
      accentInkOf(accent ?? FALLBACK_ACCENT),
    )
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
      {/* 反向外壳描边：外壳/钛白/透明壳给剪影边，结构件靠 Edges 纵线（JX-7b 双层表达） */}
      {(finish === 'hull' || finish === 'titanium' || finish === 'shell') && (
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

/** 淡墨线段集合 —— 多条独立线段合成一次绘制（刻度圈/分缝批量走这条，省 draw call） */
export function DraftSegments({
  points,
  opacity = 0.4,
}: {
  points: [number, number, number][]
  opacity?: number
}) {
  return (
    <Line
      points={points}
      segments
      color={INK}
      lineWidth={1}
      transparent
      opacity={opacity}
    />
  )
}

/** 淡墨辅助线（面板格线等，不参与高亮） */
export function DraftLine({
  points,
  opacity = 0.4,
}: {
  points: [number, number, number][]
  opacity?: number
}) {
  return (
    <Line
      points={points}
      color={INK}
      lineWidth={1}
      transparent
      opacity={opacity}
    />
  )
}

/* ─── Detail primitives（anatomy-figures 技法移植，2026-10-13） ───
 *
 * anatomy 的"精细"不是更多多边形，而是**零件多、细节密**：每个面都有分缝、
 * 螺栓、刻度、圆角倒边。这一组原语专门用来补这层密度。
 * 全部走 SketchMesh，因此照样能带 name={partId} 参与图↔词高亮。
 */

type Vec3 = [number, number, number]

/**
 * 螺栓圈 —— 沿圆周均布的小圆柱（法兰/盖板/轮毂的紧固件）。
 * axis='z' 时圈在 XY 平面，axis='y' 时在 XZ 平面。
 */
export function BoltCircle({
  partId,
  center = [0, 0, 0],
  radius,
  count = 8,
  boltRadius = 0.022,
  height = 0.04,
  axis = 'z',
}: {
  partId?: string
  center?: Vec3
  radius: number
  count?: number
  boltRadius?: number
  height?: number
  axis?: 'x' | 'y' | 'z'
}) {
  return (
    <group>
      {Array.from({ length: count }, (_, i) => {
        const a = (i / count) * Math.PI * 2
        const c = Math.cos(a) * radius
        const sn = Math.sin(a) * radius
        const position: Vec3 =
          axis === 'z'
            ? [center[0] + c, center[1] + sn, center[2]]
            : axis === 'y'
              ? [center[0] + c, center[1], center[2] + sn]
              : [center[0], center[1] + c, center[2] + sn]
        const rotation: Vec3 = axis === 'z' ? [Math.PI / 2, 0, 0] : axis === 'x' ? [0, 0, Math.PI / 2] : [0, 0, 0]
        return (
          <SketchMesh key={i} partId={partId} position={position} rotation={rotation}>
            <cylinderGeometry args={[boltRadius, boltRadius, height, 6]} />
          </SketchMesh>
        )
      })}
    </group>
  )
}

/**
 * 环缝 —— 筒体对接缝 / 加强环 / 箍带（细圆环）。
 * axis 是环面法线方向：'y' = 水平箍带，'z' = 立面上的圆环。
 */
export function SeamRing({
  partId,
  center = [0, 0, 0],
  radius,
  tube = 0.018,
  axis = 'y',
}: {
  partId?: string
  center?: Vec3
  radius: number
  tube?: number
  axis?: 'x' | 'y' | 'z'
}) {
  const rotation: Vec3 =
    axis === 'y' ? [Math.PI / 2, 0, 0] : axis === 'x' ? [0, Math.PI / 2, 0] : [0, 0, 0]
  return (
    <SketchMesh partId={partId} position={center} rotation={rotation}>
      <torusGeometry args={[radius, tube, 6, 44]} />
    </SketchMesh>
  )
}

/**
 * 面板分缝线 —— 一组淡墨直线（钣金分块、检修口、舱段分隔）。
 * 纯草稿线，不参与高亮（与 DESIGN 的 DraftLine 同族）。
 */
export function PanelLines({
  lines,
  opacity = 0.32,
}: {
  lines: [Vec3, Vec3][]
  opacity?: number
}) {
  return (
    <group>
      {lines.map((points, i) => (
        <DraftLine key={i} points={points} opacity={opacity} />
      ))}
    </group>
  )
}

/**
 * 刻度圈 —— 表盘/量程/旋钮的一圈细刻度（长短刻度交替，anatomy 的 tick 密度）。
 */
export function TickRing({
  partId,
  center = [0, 0, 0],
  radius,
  count = 12,
  longEvery = 3,
  long = 0.11,
  short = 0.06,
  axis = 'z',
  asPart = false,
}: {
  partId?: string
  center?: Vec3
  radius: number
  count?: number
  longEvery?: number
  long?: number
  short?: number
  axis?: 'x' | 'y' | 'z'
  /** true = 走 SketchMesh（刻度随部件高亮）；false = 淡墨草稿线 */
  asPart?: boolean
}) {
  const items = Array.from({ length: count }, (_, i) => {
    const a = (i / count) * Math.PI * 2
    const isLong = i % longEvery === 0
    const len = isLong ? long : short
    const inner = radius - len
    const outer = radius + len * 0.35
    const p = (r: number): Vec3 =>
      axis === 'z'
        ? [center[0] + Math.cos(a) * r, center[1] + Math.sin(a) * r, center[2]]
        : axis === 'y'
          ? [center[0] + Math.cos(a) * r, center[1], center[2] + Math.sin(a) * r]
          : [center[0], center[1] + Math.cos(a) * r, center[2] + Math.sin(a) * r]
    return { key: i, points: [p(inner), p(outer)] as [Vec3, Vec3], isLong }
  })

  if (!asPart) {
    // 长刻度与短刻度各合成一次绘制（60 分刻度也只有两条 Line2）
    const longPts = items.filter(it => it.isLong).flatMap(it => it.points)
    const shortPts = items.filter(it => !it.isLong).flatMap(it => it.points)
    return (
      <group>
        {shortPts.length > 0 && <DraftSegments points={shortPts} opacity={0.3} />}
        {longPts.length > 0 && <DraftSegments points={longPts} opacity={0.5} />}
      </group>
    )
  }

  return (
    <group>
      {items.map(it => (
        <Rod
          key={it.key}
          partId={partId}
          from={it.points[0]}
          to={it.points[1]}
          radius={it.isLong ? 0.012 : 0.008}
        />
      ))}
    </group>
  )
}

/**
 * 齿轮几何 —— 真齿形（渐开线的直线近似：齿根→齿顶→齿顶→齿根），带倒边。
 * anatomy 的 ft() 齿轮发生器思路；本仓用 ExtrudeGeometry 拿到倒角厚度。
 */
function makeGearGeometry(
  teeth: number,
  radius: number,
  toothDepth: number,
  depth: number,
): THREE.ExtrudeGeometry {
  const shape = new THREE.Shape()
  const step = (Math.PI * 2) / teeth
  const rTip = radius + toothDepth
  const rRoot = radius
  const pts: [number, number][] = []
  for (let i = 0; i < teeth; i++) {
    const a0 = i * step
    const at = (f: number, r: number) => {
      const a = a0 + step * f
      return [Math.cos(a) * r, Math.sin(a) * r] as [number, number]
    }
    pts.push(
      at(0.0, rRoot),
      at(0.14, rRoot),
      at(0.22, rTip),
      at(0.44, rTip),
      at(0.52, rRoot),
      at(0.94, rRoot),
    )
  }
  shape.moveTo(pts[0][0], pts[0][1])
  for (const [x, y] of pts.slice(1)) shape.lineTo(x, y)
  shape.closePath()
  const hole = new THREE.Path()
  hole.absarc(0, 0, Math.max(radius * 0.16, 0.01), 0, Math.PI * 2, true)
  shape.holes.push(hole)

  return new THREE.ExtrudeGeometry(shape, {
    depth,
    bevelEnabled: true,
    bevelThickness: Math.min(depth * 0.25, 0.012),
    bevelSize: Math.max(radius * 0.02, 0.004),
    bevelSegments: 1,
    curveSegments: 4,
  })
}

/** 齿轮 —— teeth 个真齿、中心带轴孔、带倒边 */
export function Gear({
  partId,
  teeth = 14,
  radius = 0.4,
  toothDepth = 0.08,
  depth = 0.06,
  position,
  rotation,
}: {
  partId?: string
  teeth?: number
  radius?: number
  toothDepth?: number
  depth?: number
  position?: Vec3
  rotation?: Vec3
}) {
  const geometry = useMemo(
    () => makeGearGeometry(teeth, radius, toothDepth, depth),
    [teeth, radius, toothDepth, depth],
  )
  return (
    <SketchMesh partId={partId} position={position} rotation={rotation}>
      <primitive object={geometry} attach="geometry" />
    </SketchMesh>
  )
}
