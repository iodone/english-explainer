import { Canvas, useFrame, useThree } from '@react-three/fiber'
import {
  OrbitControls,
  Line,
  Html,
  Bounds,
  GizmoHelper,
  ContactShadows,
  useGizmoContext,
} from '@react-three/drei'
import { useMemo, useRef, useState } from 'react'
import type { ComponentRef } from 'react'
import * as THREE from 'three'
import type { ThingData } from '../data/types'
import {
  GEOMETRY,
  AccentContext,
  PartMetaContext,
  usePartHighlight,
  INK,
  WARNING_RED,
} from '../geometry'
import type { HighlightState, PartMeta } from '../geometry'

/** CAD viewport 纸色（Canvas 实底，与文章列纸面同源） */
const PAPER = '#F4F1EA'
/** 标签落点候选：沿部件包围盒"朝外方向"的试探距离（世界单位，逐级外推找空位） */
const LABEL_REACH_CANDIDATES = [0.95, 1.3, 1.7, 2.15, 2.65, 3.2, 3.9, 4.7, 5.6, 6.6]
/** 包围盒朝外点的试探比例（0=中心，1=盒边缘） */
const ANCHOR_EDGE_T = [0.72, 1.0]
/** 引线水平尾巴长度（世界单位） */
const LABEL_TAIL = 0.5
/** 标签多行文本的样式（DOM 渲染，可直接读设计字体令牌） */
const LABEL_STYLE = {
  fontFamily: "var(--font-mono)",
  fontSize: '10px',
  letterSpacing: '0.06em',
  lineHeight: '1.25',
  // 淡排↔实排之间走渐变，避免逐帧切换时视觉上"闪"
  transition: 'opacity 0.25s linear',
} as const
/** 标签之间的最小留白（屏幕像素）：太小会被读成一行连续的英文 */
const LABEL_GUTTER = 12
/** 标签被判定重叠后，要连续几帧才真的隐藏（去抖，防闪） */
const LABEL_HIDE_FRAMES = 4
/** 选位决策的最小间隔（ms）：决策是节流的，引线几何仍逐帧跟随 */
const LABEL_SOLVE_MS = 220
/**
 * 引线候选方向（屏幕平面内的单位向量，逐部件算）：
 * 0 朝外（部件法线的屏幕投影）· 1 反向 · 2/3 屏幕左右 · 4/5 屏幕上下
 * 只给"朝外"一个方向时，贴边的部件（如最右侧的涡轮）会无位可落、标签直接消失。
 */
const DIR_COST = [0, 4, 2, 2, 3, 3]
/** 文字横向延伸方向的判据死区：|dir·right| 小于它时不算"明确朝右/朝左" */
const TEXT_SIDE_DEADBAND = 0.15
/** 标签文本宽高的粗略估算（DOM 测量前的碰撞预判，屏幕像素） */
const LABEL_ROW_PX = 13
const LABEL_CHAR_PX = 6.6
/** 每帧缓存的部件网格包围盒上限（超过就丢弃，只影响占用精度） */
const MESH_BOUND_CAP = 512
/** 硬占用：标签压到形体上就算失败（在形体外留 4px 呼吸） */
const MESH_PAD = 4
/** 软占用（整个模型包围盒）的权重：能落在形体之外就优先落外面 */
const COST_OUTSIDE_BODY = 40

type LineElement = ComponentRef<typeof Line>

function setMaterialOpacity(object: unknown, opacity: number) {
  const material = (object as { material?: THREE.Material | THREE.Material[] }).material
  if (!material) return

  const materials = Array.isArray(material) ? material : [material]
  for (const item of materials) {
    item.transparent = true
    item.opacity = opacity
  }
}

/**
 * ThingScene — 3D 草稿图纸 viewer（word-part linking）
 *
 * 绘制风格按 DESIGN.md §1.5 JX-7b 规范：
 * - 外壳/结构件 = 半透明灰实体面（体量感）+ 墨 Edges 轮廓（四边形拓扑感）
 * - 地面 = 3D 透视网格（CAD 虚空工作区）+ 虚线中心轴
 * - 右上角坐标轴 gizmo；标注走工程图 leader line（包围盒边缘出线 + 折角 + 两行中英）
 * - 取景 = Bounds 自适应（fit + observe，分栏拖动后自动重取景）
 *
 * 几何体按 thing.id 从 GEOMETRY map 分发（src/geometry/<slug>.tsx，一 thing 一文件）；
 * 本文件只保留场景编排：Canvas、标注层（AnnotationLabels）、环境（轴/网格）、相机控制。
 *
 * 受控高亮（DESIGN.md §4.1）：
 * - highlightPartId：阅读态，文中部件词点击 → 该部件墨线变 accent + 加粗
 * - activePartIds / pastPartIds / dimOthers：flow 播放态，
 *   当前步 accent 加粗、已过步 50%、未到步 12%
 * - onPartClick：点击部件本体/标注点 → 文章列滚动到对应句（图→词）
 */

export interface ThingSceneProps {
  thing: ThingData
  highlightPartId?: string | null
  activePartIds?: string[]
  pastPartIds?: string[]
  dimOthers?: boolean
  onPartClick?: (partId: string) => void
}

export default function ThingScene({
  thing,
  highlightPartId = null,
  activePartIds = [],
  pastPartIds = [],
  dimOthers = false,
  onPartClick,
}: ThingSceneProps) {
  // partId → 配色角色（数据驱动，几何层不重复配色知识）
  const partMeta = useMemo<PartMeta>(
    () => ({
      onPartClick: onPartClick ?? null,
      finishOf: partId => thing.parts.find(p => p.id === partId)?.finish ?? 'hull',
    }),
    [thing, onPartClick],
  )

  // 正交 = 工程图观看方式（blueprint 技法移植），默认透视保留 3D 辅证的亲和力
  const [ortho, setOrtho] = useState(false)
  const accentColor = useMemo(() => new THREE.Color(thing.color), [thing.color])
  // 几何根组：标注层读它的包围盒来算部件边缘锚点
  const partsRef = useRef<THREE.Group>(null)
  // 右下角读数（每帧写 DOM，不触发 React 重渲染）
  const readoutRef = useRef<HTMLDivElement>(null)

  return (
    <div className="w-full h-full reticle">
      {/* 图版四角（anatomy-figures 的 plate-corner 体系）：
          左上 = 标本号+真名 · 右上 = 图号 · 左下 = 操作提示 · 右下 = 实时读数 */}
      <div className="absolute top-4 left-4 z-10 pointer-events-none">
        <div className="micro-label text-hud-cyan">SPECIMEN</div>
        <div className="plate-corner text-ink-soft mt-1">
          {thing.realName.toUpperCase()}
        </div>
      </div>
      <div className="absolute top-4 right-4 z-10 pointer-events-none text-right">
        <div className="micro-label">MODEL</div>
        <div className="plate-corner text-ink-faint mt-1">
          SKETCH-{thing.id.slice(0, 8).toUpperCase()}
        </div>
      </div>
      <div className="absolute bottom-4 left-4 z-10 pointer-events-none">
        <div className="micro-label">DRAG TO ROTATE · SCROLL TO ZOOM · CLICK A PART</div>
      </div>

      {/* 右下读数：实时方位角/仰角 + 部件数（等宽数字，制图室读数板） */}
      <div className="absolute bottom-4 right-4 z-10 flex flex-col items-end gap-2">
        <div className="pointer-events-none plate-corner text-ink-faint text-right leading-relaxed">
          <div>PARTS {String(thing.parts.length).padStart(2, '0')}</div>
          <div ref={readoutRef}>AZ ---° · EL --°</div>
        </div>
        {/* 正交 / 透视切换（工程图观看方式） */}
        <button
          className="micro-label px-3 py-1.5 border border-ink-faint text-ink-soft hover:border-hud-cyan hover:text-hud-cyan pointer-events-auto"
          onClick={() => setOrtho(o => !o)}
        >
          VIEW: {ortho ? 'ORTHO' : 'PERSPECTIVE'}
        </button>
      </div>

      {/* 3D Canvas — 纸色实底（CAD viewport），3D 地面网格提供透视参考 */}
      <Canvas
        key={ortho ? 'ortho' : 'persp'}
        orthographic={ortho}
        camera={
          ortho
            ? { position: [5, 3.6, 5], zoom: 110 }
            : { position: [5, 3, 5], fov: 50 }
        }
        style={{ background: PAPER }}
      >
        <AccentContext.Provider value={accentColor}>
          <PartMetaContext.Provider value={partMeta}>
            {/* key=thing.id：切模型时 Bounds 重新 fit；margin 略松给标注留空间 */}
            <Bounds key={thing.id} fit clip observe margin={1.28}>
              <SketchModel
                thing={thing}
                partsRef={partsRef}
                highlightPartId={highlightPartId}
                activePartIds={activePartIds}
                pastPartIds={pastPartIds}
                dimOthers={dimOthers}
              />
            </Bounds>
          </PartMetaContext.Provider>
          <AnnotationLabels
            thing={thing}
            partsRef={partsRef}
            highlightPartId={highlightPartId}
            activePartIds={activePartIds}
            dimOthers={dimOthers}
            onPartClick={onPartClick}
          />
        </AccentContext.Provider>
        <GroundShadow partsRef={partsRef} />
        <ViewReadout readoutRef={readoutRef} />
        <CenterAxes />
        <GroundGrid />
        <OrbitControls
          makeDefault
          enableDamping
          dampingFactor={0.05}
          minDistance={2.5}
          maxDistance={18}
          autoRotate
          autoRotateSpeed={0.4}
        />
        {/* 右上角数字化指南针（JX-7b §HUD） */}
        <AxisGizmo />
      </Canvas>
    </div>
  )
}

/**
 * 草稿线框模型 — 按 thing.id 从 GEOMETRY map 取几何体分发。
 * 几何文件内部 SketchMesh 带 name={partId}，供 usePartHighlight 驱动。
 */
function SketchModel({
  thing,
  partsRef,
  ...state
}: { thing: ThingData; partsRef: React.RefObject<THREE.Group | null> } & HighlightState) {
  usePartHighlight(partsRef, thing, state)
  const Sketch = GEOMETRY[thing.id]

  return (
    <group ref={partsRef}>
      {Sketch && <Sketch />}
    </group>
  )
}

/* ─── Annotation Labels ─── */

/** 标签选位：哪个锚点档 × 哪个方向 × 外推几档 × 文字往哪边排 */
interface LabelSlot {
  anchor: number
  dir: number
  reach: number
  /** 文字从引线折角向右(true)/向左(false)延伸。定槽位时算一次，随槽位粘滞，不逐帧重算 */
  textRight: boolean
}

/** 一个候选位的几何：引线三个点 + 标签占位矩形 */
interface Placement {
  edge: THREE.Vector3
  shoulder: THREE.Vector3
  label: THREE.Vector3
  rect: Rect
}

interface Rect {
  left: number
  right: number
  top: number
  bottom: number
}

/**
 * 工程图标注层（2026-09-29 重做 · A/D 方案）
 *
 * 与旧版的区别：
 * - 锚点从"部件中心 + 固定偏移"改为"部件包围盒朝外点"——引线从几何边缘出发
 * - 引线走真图纸的 leader line 语法：部件点 → 出形 → 斜段 → 水平尾巴 → 文字
 * - 标签用 DOM 渲染（drei Html）：读得到设计字体令牌、可放中英两行、横排不随相机转
 * - 避让：沿朝外方向逐级外推，用屏幕矩形占用检测挑空位；都不行就淡出（不叠字）
 *
 * 坐标说明：AnnotationLabels 的 group 在场景根（无变换），因此引线/标签可以直接
 * 用世界坐标；部件点（part.position 在模型局部空间）经 root.localToWorld 换算。
 */
function AnnotationLabels({
  thing,
  partsRef,
  highlightPartId,
  activePartIds,
  dimOthers,
  onPartClick,
}: {
  thing: ThingData
  partsRef: React.RefObject<THREE.Group | null>
  highlightPartId: string | null
  activePartIds: string[]
  dimOthers: boolean
  onPartClick?: (partId: string) => void
}) {
  const [hovered, setHovered] = useState<string | null>(null)
  const accent = thing.color
  // 选位决策（节流）：slots = 每个部件选中的槽位，fades = 是否淡排
  const decisionRef = useRef<{
    at: number
    key: string
    count: number
    slots: Map<string, LabelSlot | null>
    fades: Map<string, boolean>
  }>({ at: 0, key: '', count: -1, slots: new Map(), fades: new Map() })
  // 隐藏去抖计数
  const missRef = useRef<Map<HTMLDivElement, number>>(new Map())
  const lineRefs = useRef<(LineElement | null)[]>([])
  const htmlRefs = useRef<(THREE.Group | null)[]>([])
  const labelRefs = useRef<(HTMLDivElement | null)[]>([])

  const tmp = useMemo(
    () => ({
      right: new THREE.Vector3(),
      up: new THREE.Vector3(),
      box: new THREE.Box3(),
      size: new THREE.Vector3(),
      nodeCenter: new THREE.Vector3(),
      rootWorld: new THREE.Vector3(),
      normal: new THREE.Vector3(),
      scratch: new THREE.Vector3(),
      projected: new THREE.Vector3(),
      vis: new THREE.Vector3(),
      dot: new THREE.Vector3(),
      meshBounds: new Float32Array(MESH_BOUND_CAP * 6),
      edge: new THREE.Vector3(),
      shoulder: new THREE.Vector3(),
      label: new THREE.Vector3(),
      localPart: new THREE.Vector3(),
    }),
    [],
  )

  interface BoxEntry {
    center: THREE.Vector3
    normal: THREE.Vector3
    radius: number
  }

  // display 只在变化时写，避免每帧无谓的样式/布局抖动
  const showLabel = (el: HTMLDivElement) => {
    if (el.style.display === 'none') el.style.display = ''
  }
  const hideLabel = (el: HTMLDivElement) => {
    if (el.style.display !== 'none') el.style.display = 'none'
  }

  const overlaps = (rect: Rect, list: Rect[]) =>
    list.some(
      r =>
        rect.left < r.right &&
        rect.right > r.left &&
        rect.top < r.bottom &&
        rect.bottom > r.top,
    )

  const labelPriority = (partId: string) =>
    highlightPartId === partId || activePartIds.includes(partId)
      ? 0
      : hovered === partId
        ? 1
        : 2

  useFrame(({ camera, size, gl }) => {
    const root = partsRef.current
    if (!root) return

    // root 的世界矩阵（Bounds 每帧改它的 scale，必须显式刷新）
    root.updateWorldMatrix(true, false)
    root.getWorldPosition(tmp.rootWorld)

    // ① 部件包围盒（世界）→ 中心 / 朝外法线 / 半径
    const boxes = new Map<string, BoxEntry>()
    const counts = new Map<string, number>()
    // 每块网格的世界 AABB：投影后就是"形体占用"，标签的硬约束
    const meshBounds = tmp.meshBounds
    let meshCount = 0
    root.traverse(node => {
      if (!(node instanceof THREE.Mesh) || !node.name) return
      tmp.box.setFromObject(node)
      if (tmp.box.isEmpty()) return
      if (meshCount < MESH_BOUND_CAP) {
        const o = meshCount * 6
        meshBounds[o] = tmp.box.min.x
        meshBounds[o + 1] = tmp.box.min.y
        meshBounds[o + 2] = tmp.box.min.z
        meshBounds[o + 3] = tmp.box.max.x
        meshBounds[o + 4] = tmp.box.max.y
        meshBounds[o + 5] = tmp.box.max.z
        meshCount++
      }
      tmp.box.getCenter(tmp.nodeCenter)
      tmp.box.getSize(tmp.size)
      const entry =
        boxes.get(node.name) ??
        { center: new THREE.Vector3(), normal: new THREE.Vector3(), radius: 0 }
      entry.center.add(tmp.nodeCenter)
      entry.radius = Math.max(entry.radius, tmp.size.length() / 2)
      tmp.scratch.copy(tmp.nodeCenter).sub(tmp.rootWorld)
      if (tmp.scratch.lengthSq() > 1e-8) entry.normal.add(tmp.scratch.normalize())
      boxes.set(node.name, entry)
      counts.set(node.name, (counts.get(node.name) ?? 0) + 1)
    })
    // 同名多 mesh（面 + 外壳描边）取平均
    for (const [id, entry] of boxes) {
      const n = counts.get(id) ?? 1
      if (n > 1) entry.center.divideScalar(n)
    }

    tmp.right.set(1, 0, 0).applyQuaternion(camera.quaternion)
    tmp.up.set(0, 1, 0).applyQuaternion(camera.quaternion)

    const toScreen = (world: THREE.Vector3) => {
      tmp.projected.copy(world).project(camera)
      return {
        x: (tmp.projected.x * 0.5 + 0.5) * size.width,
        y: (-tmp.projected.y * 0.5 + 0.5) * size.height,
        visible: tmp.projected.z < 1,
      }
    }

    // 本帧已放置的标签（循环结束后用 DOM 实测矩形复核一遍，杜绝视觉叠字）
    const settled: { el: HTMLDivElement; group: THREE.Group }[] = []

    /** 从 8 个角投影出屏幕矩形 */
    const projectRect = (minX: number, minY: number, minZ: number, maxX: number, maxY: number, maxZ: number, pad: number): Rect => {
      let l = Infinity
      let r = -Infinity
      let t = Infinity
      let b = -Infinity
      for (let i = 0; i < 8; i++) {
        const sc = toScreen(
          tmp.scratch.set(i & 1 ? maxX : minX, i & 2 ? maxY : minY, i & 4 ? maxZ : minZ),
        )
        l = Math.min(l, sc.x)
        r = Math.max(r, sc.x)
        t = Math.min(t, sc.y)
        b = Math.max(b, sc.y)
      }
      return { left: l - pad, right: r + pad, top: t - pad, bottom: b + pad }
    }

    /**
     * 硬占用：每块网格自己的屏幕矩形（并集 ≈ 模型剪影）。
     * 早先用"整个模型的包围盒"当占用，结果那一个矩形吃掉了画布 x103–647 / 694 —— 
     * 28 个候选位全部判定失败，所有标注都退化成"压在图上 + 淡排"。
     * 逐网格判定才有解：穹顶上方、塔体左右这些真空区都能落字。
     */
    const meshRects: Rect[] = []
    for (let i = 0; i < meshCount; i++) {
      const o = i * 6
      meshRects.push(
        projectRect(meshBounds[o], meshBounds[o + 1], meshBounds[o + 2], meshBounds[o + 3], meshBounds[o + 4], meshBounds[o + 5], MESH_PAD),
      )
    }

    /** 软占用：整个模型的屏幕包围盒。只用来"优先落在形体之外"，不做失败判定。 */
    let modelRect: Rect | null = null
    tmp.box.setFromObject(root)
    if (!tmp.box.isEmpty()) {
      const min = tmp.box.min
      const max = tmp.box.max
      modelRect = projectRect(min.x, min.y, min.z, max.x, max.y, max.z, 8)
    }
    // 顺序必须**稳定**：只按优先级（激活 > 悬停 > 常态）分档，档内按固定的部件序号。
    // 早先档内按"近相机优先"排，相机动一点顺序就换人，同一个坑位换来换去 —— 视觉上就是标签在闪。
    const order = thing.parts
      .map((part, i) => ({ i, p: labelPriority(part.id) }))
      .sort((a, b) => (a.p !== b.p ? a.p - b.p : a.i - b.i))
      .map(x => x.i)

    /** 由「槽位」算出引线三点与标签矩形；判定与绘制共用同一套几何，保证一致 */
    const pointsFor = (
      ctx: Ctx,
      slot: LabelSlot,
      into: { edge: THREE.Vector3; shoulder: THREE.Vector3; label: THREE.Vector3 },
    ): Placement => {
      // 注意：法线/朝向必须逐部件取（ctx.normal / ctx.vis）。
      // 早先直接读 tmp.normal / tmp.vis —— 那是构建 ctxList 时留下的"最后一个部件"的值，
      // 于是除末位以外所有标注的锚点都按错误的朝外方向外推，落点漂移。
      const { entry } = ctx
      into.edge
        .copy(entry.center)
        .addScaledVector(ctx.normal, ctx.radius * ANCHOR_EDGE_T[slot.anchor])
      into.shoulder
        .copy(into.edge)
        .addScaledVector(ctx.dirs[slot.dir], LABEL_REACH_CANDIDATES[slot.reach])
      // 文字朝向取"槽位里已定的 textRight"，不能用现场算的符号位：
      // 当方向几乎垂直于相机右轴时点积 ≈ ±1e-9，符号逐帧翻转，
      // 标签就在 translateY(-50%) 与 translate(-100%,-50%) 之间横跳一整个标签宽度 —— 看着就是"字在闪"。
      into.label
        .copy(into.shoulder)
        .addScaledVector(tmp.right, (slot.textRight ? 1 : -1) * LABEL_TAIL)
      const s = toScreen(into.label)
      const { estWidth, estHeight } = ctx
      const left = slot.textRight ? s.x : s.x - estWidth
      // 四周留 LABEL_GUTTER：相邻标签首尾相接会被读成一行字
      const rect: Rect = {
        left: left - LABEL_GUTTER,
        right: left + estWidth + LABEL_GUTTER,
        top: s.y - estHeight / 2 - 3,
        bottom: s.y + estHeight / 2 + 3,
      }
      // 不再 clone：调用方要么只读 rect（每次新建对象），要么读完 label 立刻用掉。
      // 一次决策最多 6 部件 × 84 候选，clone 会白白产生上千个 Vector3。
      return { edge: into.edge, shoulder: into.shoulder, label: into.label, rect }
    }

    // 每帧都要准备的公共量（两遍共用）
    type Ctx = {
      part: (typeof thing.parts)[number]
      index: number
      line: LineElement
      htmlGroup: THREE.Group
      labelEl: HTMLDivElement
      entry: BoxEntry
      normal: THREE.Vector3
      vis: THREE.Vector3
      /** 屏幕平面内的候选引线方向（下标见 DIR_COST） */
      dirs: THREE.Vector3[]
      radius: number
      estWidth: number
      estHeight: number
      dotWorld: THREE.Vector3
      scratch: { edge: THREE.Vector3; shoulder: THREE.Vector3; label: THREE.Vector3 }
    }
    const ctxList: Ctx[] = []

    for (const index of order) {
      const part = thing.parts[index]
      const line = lineRefs.current[index]
      const htmlGroup = htmlRefs.current[index]
      const labelEl = labelRefs.current[index]
      if (!line || !htmlGroup || !labelEl) continue

      // 无几何的部件退化：用数据里的 position 当锚点
      const entry =
        boxes.get(part.id) ??
        {
          center: new THREE.Vector3(...part.position),
          normal: new THREE.Vector3(0, 1, 0),
          radius: 0.2,
        }

      // ② 朝外方向：部件几何法线，退化用"相对图纸中心"
      tmp.normal.copy(entry.normal)
      if (tmp.normal.lengthSq() < 1e-8) tmp.normal.copy(entry.center).sub(tmp.rootWorld)
      if (tmp.normal.lengthSq() < 1e-8) tmp.normal.set(0, 1, 0)
      tmp.normal.normalize()
      const radius = Math.max(entry.radius, 0.14)

      // 屏幕朝向（相机右/上基分解）；折角因此横平竖直，读起来像图纸
      const sx = tmp.normal.dot(tmp.right)
      const sy = tmp.normal.dot(tmp.up)
      tmp.vis.copy(tmp.right).multiplyScalar(sx).addScaledVector(tmp.up, sy)
      if (tmp.vis.lengthSq() < 1e-6) tmp.vis.copy(tmp.up)
      tmp.vis.normalize()

      const normal = tmp.normal.clone()
      const vis = tmp.vis.clone()
      // 屏幕平面内的候选方向：朝外 / 反向 / 左右 / 上下
      const dirs = [
        vis.clone(),
        vis.clone().negate(),
        tmp.right.clone(),
        tmp.right.clone().negate(),
        tmp.up.clone(),
        tmp.up.clone().negate(),
      ]

      const rows = part.realName ? 2 : 1
      const longest = Math.max(part.label.length, part.realName?.length ?? 0)
      // 实测优先：标签是 DOM，直接量真实尺寸（首帧量不到时退回估算）
      const estWidth = labelEl.offsetWidth || longest * LABEL_CHAR_PX + 8
      const estHeight = labelEl.offsetHeight || rows * LABEL_ROW_PX

      // 部件点（模型局部 → 世界）：引线从这里出发
      tmp.localPart.set(part.position[0], part.position[1], part.position[2])
      const dotWorld = root.localToWorld(tmp.localPart.clone())

      ctxList.push({
        part,
        index,
        line,
        htmlGroup,
        labelEl,
        entry,
        normal,
        vis,
        dirs,
        radius,
        estWidth,
        estHeight,
        dotWorld,
        // 每帧复用的三个向量（pointsFor 往里写）
        scratch: {
          edge: new THREE.Vector3(),
          shoulder: new THREE.Vector3(),
          label: new THREE.Vector3(),
        },
      })
    }

    // ── 第一遍：选位（节流）─────────────────────────────────────────────
    // 选位是"决策"，只有相机明显动了 / 优先级变了 / 隔一段时间才重算。
    // 逐帧重算会让两个标签为同一个坑位互相顶，形成周期性的位置横跳。
    const priorityKey =
      `${highlightPartId ?? ''}|${activePartIds.join(',')}|${hovered ?? ''}`
    const now = performance.now()
    const decision = decisionRef.current
    if (
      now - decision.at > LABEL_SOLVE_MS ||
      decision.key !== priorityKey ||
      decision.count !== ctxList.length
    ) {
      const occupied: Rect[] = []
      const slots = new Map<string, LabelSlot | null>()
      const fades = new Map<string, boolean>()
      for (const ctx of ctxList) {
        const all: { slot: LabelSlot; placement: Placement; inView: boolean; cost: number }[] = []
        // 文字横向延伸方向：按方向的水平分量定；落在死区里就退回"朝外方向"的水平分量
        const textRightFor = (dir: number) => {
          const h = ctx.dirs[dir].dot(tmp.right)
          if (Math.abs(h) > TEXT_SIDE_DEADBAND) return h > 0
          const hv = ctx.vis.dot(tmp.right)
          if (Math.abs(hv) > TEXT_SIDE_DEADBAND) return hv > 0
          // 两个判据都落在死区（方向几乎与屏幕垂直）：按固定约定朝右排。
          // 这里若写成 `hv >= 0`，hv ≈ ±1e-9 就会逐轮翻符号，等于把闪动换个地方复现。
          return true
        }
        for (let ai = 0; ai < ANCHOR_EDGE_T.length; ai++) {
          for (let di = 0; di < DIR_COST.length; di++) {
            const textRight = textRightFor(di)
            for (let ri = 0; ri < LABEL_REACH_CANDIDATES.length; ri++) {
              const slot: LabelSlot = { anchor: ai, dir: di, reach: ri, textRight }
              const placement = pointsFor(ctx, slot, ctx.scratch)
              const r = placement.rect
              all.push({
                slot,
                placement,
                inView:
                  r.left >= 6 &&
                  r.right <= size.width - 6 &&
                  r.top >= 6 &&
                  r.bottom <= size.height - 6,
                // 成本：先求"整体落在形体之外"，再求引线短、朝外、靠边缘出线。
                // 用打分而不是"枚举序里第一个合格" —— 后者会让标签被拉得很远，
                // 只因为远的那档恰好排在前面。
                cost:
                  (modelRect && overlaps(r, [modelRect]) ? COST_OUTSIDE_BODY : 0) +
                  DIR_COST[di] +
                  ri * 2 +
                  (ai === 1 ? 0.5 : 0),
              })
            }
          }
        }

        // 硬约束：不压形体、不压已放置的标签
        const clear = (c: (typeof all)[number]) =>
          c.inView &&
          !overlaps(c.placement.rect, meshRects) &&
          !overlaps(c.placement.rect, occupied)
        // 退让：形体实在无可落之处时，允许压形体，但仍不许叠字（淡排）
        const clearOfLabels = (c: (typeof all)[number]) =>
          c.inView && !overlaps(c.placement.rect, occupied)

        const pickBest = (ok: (c: (typeof all)[number]) => boolean) => {
          let best: (typeof all)[number] | null = null
          for (const c of all) if (ok(c) && (!best || c.cost < best.cost)) best = c
          return best
        }

        // 粘滞优先：上一轮的坑还站得住就继续用（读 '上一轮' 的 slots，不是本轮正在建的）
        const prev = decision.slots.get(ctx.part.id) ?? null
        let pick: (typeof all)[number] | null = null
        if (prev) {
          const same = all.find(
            c =>
              c.slot.anchor === prev.anchor &&
              c.slot.dir === prev.dir &&
              c.slot.reach === prev.reach,
          )
          if (same) {
            // 文字朝向沿用上一轮：死区内的方向本就没有明确左右，跟着重算只会引入抖动。
            // 改完必须用新槽位重算 rect —— 否则"校验的矩形"和"实际落笔的矩形"差一个标签宽度，
            // 会和上一个已占位的标签叠字（改前就是这个表现）。
            same.slot.textRight = prev.textRight
            same.placement = pointsFor(ctx, same.slot, ctx.scratch)
            if (clearOfLabels(same)) pick = same
          }
        }
        if (!pick) pick = pickBest(clear)
        const faded = !!pick && !clear(pick)
        if (!pick) pick = pickBest(clearOfLabels)

        slots.set(ctx.part.id, pick ? pick.slot : null)
        fades.set(ctx.part.id, faded)
        if (pick) occupied.push(pick.placement.rect)
      }
      decision.at = now
      decision.key = priorityKey
      decision.count = ctxList.length
      decision.slots = slots
      decision.fades = fades
    }

    // ── 第二遍：每帧按已定槽位重建几何并落笔 ────────────────────────────
    for (const ctx of ctxList) {
      const slot = decision.slots.get(ctx.part.id) ?? null
      const faded = decision.fades.get(ctx.part.id) ?? false
      const isActive = highlightPartId === ctx.part.id || activePartIds.includes(ctx.part.id)
      const isHovered = hovered === ctx.part.id
      const show = isActive || isHovered

      // 注意：drei 的 <Html> 渲染进 DOM portal，不受父 group.visible 影响，
      // 必须直接切 labelEl.style.display，否则"隐藏"的标签照样画在屏幕上。
      if (slot) {
        const pl = pointsFor(ctx, slot, ctx.scratch)
        showLabel(ctx.labelEl)
        // 引线：部件点 → 出形点 → 斜段肩点 → 水平尾巴终点（4 点 3 段）
        ctx.line.geometry.setPositions([
          ctx.dotWorld.x, ctx.dotWorld.y, ctx.dotWorld.z,
          pl.edge.x, pl.edge.y, pl.edge.z,
          pl.shoulder.x, pl.shoulder.y, pl.shoulder.z,
          pl.label.x, pl.label.y, pl.label.z,
        ])
        ctx.line.computeLineDistances?.()
        ctx.htmlGroup.position.copy(pl.label)
        ctx.htmlGroup.visible = true
        settled.push({ el: ctx.labelEl, group: ctx.htmlGroup })
      } else {
        ctx.htmlGroup.visible = false
        hideLabel(ctx.labelEl)
      }

      ctx.labelEl.style.opacity = String(faded ? 0.35 : show ? 1 : 0.78)
      const textRight = slot ? slot.textRight : true
      ctx.labelEl.style.transform =
        textRight ? 'translateY(-50%)' : 'translate(-100%, -50%)'
      ctx.labelEl.style.textAlign = textRight ? 'left' : 'right'
      ctx.labelEl.style.color = isActive ? accent : isHovered ? '#3ECFCF' : '#5A554C'
      // 没有落点就整条引线也不画（否则会留一截浮线在空中）
      setMaterialOpacity(
        ctx.line,
        !slot ? 0 : dimOthers && !isActive ? 0.15 : show ? 0.9 : 0.5,
      )
    }

    // 复核（ground truth）：拿标签的真实 DOM 矩形再查一次交叠，
    // 前面的估算有偏差时在这里兜住 —— 宁可少一个标签，不留叠字。
    if (settled.length > 1) {
      const canvasRect = gl.domElement.getBoundingClientRect()
      const taken: Rect[] = []
      for (const item of settled) {
        const r = item.el.getBoundingClientRect()
        const rect: Rect = {
          left: r.left - canvasRect.left,
          right: r.right - canvasRect.left,
          top: r.top - canvasRect.top,
          bottom: r.bottom - canvasRect.top,
        }
        if (overlaps(rect, taken)) {
          // 去抖：连续 LABEL_HIDE_FRAMES 帧都撞才真的隐藏，
          // 单帧的判定抖动（DOM 位置滞后一帧）不该让标签闪
          const n = (missRef.current.get(item.el) ?? 0) + 1
          missRef.current.set(item.el, n)
          if (n >= LABEL_HIDE_FRAMES) {
            item.group.visible = false
            hideLabel(item.el)
          }
        } else {
          missRef.current.set(item.el, 0)
          taken.push(rect)
        }
      }
    }
  })

  return (
    <group>
      {thing.parts.map((part, index) => {
        const hoveredNow = hovered === part.id
        const isActive = highlightPartId === part.id || activePartIds.includes(part.id)
        const show = hoveredNow || isActive
        const idleColor = part.finish === 'warning' ? WARNING_RED : INK
        const dotColor = isActive ? accent : hoveredNow ? '#3ECFCF' : idleColor
        const dotOpacity = dimOthers && !isActive ? 0.2 : show ? 1 : 0.85
        return (
          <group key={part.id}>
            {/* 部件点 — 可点击（图→词），留在模型坐标系内 */}
            <mesh
              position={part.position}
              scale={show ? 1.5 : 1}
              onPointerOver={e => {
                e.stopPropagation()
                setHovered(part.id)
                document.body.style.cursor = 'pointer'
              }}
              onPointerOut={() => {
                setHovered(null)
                document.body.style.cursor = ''
              }}
              onClick={e => {
                e.stopPropagation()
                onPartClick?.(part.id)
              }}
            >
              <sphereGeometry args={[0.07, 8, 8]} />
              <meshBasicMaterial color={dotColor} transparent opacity={dotOpacity} />
            </mesh>

            {/* 折角引线：点 → 出形 → 斜段 → 平段，每帧按包围盒重排 */}
            <Line
              ref={node => {
                lineRefs.current[index] = node
              }}
              points={[
                [0, 0, 0],
                [0.2, 0.2, 0],
                [0.35, 0.35, 0],
                [0.55, 0.35, 0],
              ]}
              color={show ? dotColor : INK}
              lineWidth={show ? 1.5 : 1}
              transparent
              opacity={0.5}
            />

            {/* 标签：DOM 渲染，横排两行（简单名 / 真名），不随相机旋转 */}
            <group
              ref={node => {
                htmlRefs.current[index] = node
              }}
            >
              <Html position={[0, 0, 0]} zIndexRange={[8, 0]} style={{ pointerEvents: 'none' }}>
                <div
                  ref={node => {
                    labelRefs.current[index] = node
                  }}
                  // data-label：走查工具的稳定钩子（标注有效性只有跑起来才验得了，
                  // 见 .agents/skills/figure-craft/scripts/figure.mjs labels）
                  data-label={part.id}
                  style={{ ...LABEL_STYLE, whiteSpace: 'nowrap', opacity: 0.9 }}
                >
                  <span style={{ display: 'block' }}>{part.label.toUpperCase()}</span>
                  {part.realName && (
                    <span style={{ display: 'block', color: '#8E8678', fontSize: '9px' }}>
                      {part.realName}
                    </span>
                  )}
                </div>
              </Html>
            </group>
          </group>
        )
      })}
    </group>
  )
}

/* ─── 图纸环境件（anatomy-figures 技法移植） ─── */

/**
 * 落地阴影（anatomy 的 iso-halo：模糊的软影，把物件"按"在纸面上）。
 * 每帧读模型世界包围盒，把阴影面贴在模型底部，尺寸跟随足印。
 */
function GroundShadow({ partsRef }: { partsRef: React.RefObject<THREE.Group | null> }) {
  const groupRef = useRef<THREE.Group>(null)
  const box = useMemo(() => new THREE.Box3(), [])
  const size = useMemo(() => new THREE.Vector3(), [])
  const center = useMemo(() => new THREE.Vector3(), [])
  // ContactShadows 的 scale/far 必须用世界尺寸传入（缩放外层 group 会把
  // 它的正交视锥一起放大，导致整块阴影面糊成一片灰板）。
  const [extent, setExtent] = useState({ scale: 8, far: 4 })

  useFrame(() => {
    const root = partsRef.current
    const group = groupRef.current
    if (!root || !group) return
    box.setFromObject(root)
    if (box.isEmpty()) return
    box.getSize(size)
    box.getCenter(center)
    group.position.set(center.x, box.min.y + 0.004, center.z)
    const footprint = Math.max(size.x, size.z)
    const nextScale = Math.max(footprint * 1.3, 1.2)
    const nextFar = Math.max(size.y * 1.15, 0.8)
    if (Math.abs(extent.scale - nextScale) > 0.02 || Math.abs(extent.far - nextFar) > 0.02) {
      setExtent({ scale: nextScale, far: nextFar })
    }
  })

  return (
    <group ref={groupRef}>
      <ContactShadows
        opacity={0.13}
        scale={extent.scale}
        blur={3.2}
        far={extent.far}
        resolution={512}
        color="#6B6252"
      />
    </group>
  )
}

/**
 * 右下读数：方位角 / 仰角（等宽数字）。
 * 直接写 textContent —— 60fps 的数值不进 React 状态。
 */
function ViewReadout({ readoutRef }: { readoutRef: React.RefObject<HTMLDivElement | null> }) {
  const controls = useThree(state => state.controls) as unknown as
    | { getAzimuthalAngle?: () => number; getPolarAngle?: () => number }
    | null
  const last = useRef('')

  useFrame(() => {
    const el = readoutRef.current
    if (!el || !controls?.getAzimuthalAngle || !controls.getPolarAngle) return
    const toDeg = (r: number) => ((((r * 180) / Math.PI) % 360) + 360) % 360
    const az = Math.round(toDeg(controls.getAzimuthalAngle()))
    const el2 = Math.round(90 - toDeg(controls.getPolarAngle()))
    const text = `AZ ${String(az).padStart(3, '0')}° · EL ${el2 >= 0 ? '+' : '-'}${String(Math.abs(el2)).padStart(2, '0')}°`
    if (text !== last.current) {
      last.current = text
      el.textContent = text
    }
  })

  return null
}

/* ─── AxisGizmo（制图室版三向轴标） ─── */

/** 轴头标签贴图：纸色圆底 + 墨色描边 + 等宽大写字母（全墨色，唯一强调留给原点 HUD 青点） */
function makeAxisLabel(text: string, color: string) {
  const canvas = document.createElement('canvas')
  canvas.width = 96
  canvas.height = 96
  const ctx = canvas.getContext('2d')!
  ctx.clearRect(0, 0, 96, 96)
  ctx.beginPath()
  ctx.arc(48, 48, 30, 0, Math.PI * 2)
  ctx.fillStyle = PAPER
  ctx.fill()
  ctx.lineWidth = 3
  ctx.strokeStyle = color
  ctx.stroke()
  ctx.font = 'bold 38px ui-monospace, SFMono-Regular, Menlo, monospace'
  ctx.textAlign = 'center'
  ctx.textBaseline = 'middle'
  ctx.fillStyle = '#2C2A25'
  ctx.fillText(text, 48, 51)
  const texture = new THREE.CanvasTexture(canvas)
  texture.anisotropy = 4
  return texture
}

/** 单条轴：墨色细杆 + 纸色轴头标签 */
function Axis({
  dir,
  letter,
  color,
  onPick,
}: {
  dir: [number, number, number]
  letter: string
  color: string
  onPick?: (e: { stopPropagation: () => void; object: THREE.Object3D }) => void
}) {
  const texture = useMemo(() => makeAxisLabel(letter, color), [letter, color])
  const rotation = useMemo(() => {
    const q = new THREE.Quaternion().setFromUnitVectors(
      new THREE.Vector3(0, 1, 0),
      new THREE.Vector3(...dir).normalize(),
    )
    return new THREE.Euler().setFromQuaternion(q)
  }, [dir])

  return (
    <>
      {/* 轴杆：细墨线（制图线条，不用实心块） */}
      <mesh position={[dir[0] * 0.42, dir[1] * 0.42, dir[2] * 0.42]} rotation={rotation}>
        <cylinderGeometry args={[0.012, 0.012, 0.84, 6]} />
        <meshBasicMaterial color={INK} toneMapped={false} transparent opacity={0.75} />
      </mesh>
      {/* 轴头：贴图 sprite，可点（点一下相机对齐该轴） */}
      <sprite
        position={dir}
        scale={[0.9, 0.9, 0.9]}
        onPointerDown={
          onPick
            ? e => {
                e.stopPropagation()
                onPick(e as never)
              }
            : undefined
        }
      >
        <spriteMaterial map={texture} alphaTest={0.25} toneMapped={false} />
      </sprite>
    </>
  )
}

/**
 * 三向轴标：替代默认 R/G/B GizmoViewport。
 * 纸面 + 墨线语言，读作"坐标轴指示符"而不是彩色控件。
 */
function AxisGizmo() {
  const { tweenCamera } = useGizmoContext()
  return (
    <GizmoHelper alignment="top-right" margin={[72, 112]}>
      <group scale={40}>
        <Axis dir={[1, 0, 0]} letter="X" color={INK} onPick={e => tweenCamera(e.object.position)} />
        <Axis dir={[0, 1, 0]} letter="Y" color={INK} onPick={e => tweenCamera(e.object.position)} />
        <Axis dir={[0, 0, 1]} letter="Z" color={INK} onPick={e => tweenCamera(e.object.position)} />
        {/* 原点识别点：全轴唯一强调色（HUD 青） */}
        <mesh>
          <sphereGeometry args={[0.05, 10, 10]} />
          <meshBasicMaterial color="#3ECFCF" toneMapped={false} />
        </mesh>
      </group>
    </GizmoHelper>
  )
}

/* ─── Environment（CAD viewport） ─── */

/** 图纸中心轴线（经典制图符号，虚线淡墨） */
function CenterAxes() {
  return (
    <group position={[0, -1.6, 0]}>
      <Line
        points={[[-6, 0, 0], [6, 0, 0]]}
        color={INK}
        lineWidth={1}
        transparent
        opacity={0.25}
        dashed
        dashSize={0.15}
        gapSize={0.1}
      />
      <Line
        points={[[0, 0, -6], [0, 0, 6]]}
        color={INK}
        lineWidth={1}
        transparent
        opacity={0.25}
        dashed
        dashSize={0.15}
        gapSize={0.1}
      />
    </group>
  )
}

/** 3D 透视地面网格（JX-7b §环境：CAD 虚空工作区的无限延伸淡灰细线） */
function GroundGrid() {
  return (
    <gridHelper
      args={[40, 40, '#C9C2B4', '#C9C2B4']}
      position={[0, -1.6, 0]}
      material-transparent
      material-opacity={0.22}
    />
  )
}
