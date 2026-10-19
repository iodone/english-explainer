import * as THREE from 'three'
import type { PartFinish } from '../data/types'

/**
 * 纸面材质（blueprint + anatomy-figures 双源技法移植，2026-09-29 / 2026-10-13）
 *
 * 蓝本一 haskaomni/blueprint src/shaders.js：
 *   固定 half-lambert 主光 + 4 档量化明暗 + 屏幕空间交叉排线。
 * 蓝本二 wheresryan anatomy-figures（等距制图引擎）：
 *   - 「顶面」是独立档（--anatomy-top），不参与侧面色阶 —— 等距图能读成实体的关键；
 *   - 部件被点亮时整套调色板切到 lit 档（--anatomy-lit-top / lit-shade），
 *     而不是往面上混一层颜色 —— 身份不变，只是"被照亮了"；
 *   - 所有线宽屏幕恒定（CSS 里 vector-effect: non-scaling-stroke）—— 见 uWidthPx。
 *
 * 本仓保留自己的语言：羊皮纸底 + 墨，暗部走墨色排线；唯一强调色是 thing accent。
 */

/** 固定主光方向（与相机无关，明暗像"画上去的"，不随转动变化） */
export const PAPER_LIGHT = new THREE.Vector3(0.45, 0.75, 0.55).normalize()

/** 顶面判定：法线朝上超过此值走 uTop 档（anatomy 的 --anatomy-top 分层） */
const TOP_FACE_MIN = 0.62

export interface PaperTone {
  /** 侧面亮档纸色 */
  base: THREE.Color
  /** 侧面暗档纸色 */
  dark: THREE.Color
  /** 顶面纸色（朝上的面单独一档，比亮档更亮） */
  top: THREE.Color
  /** 排线墨色 */
  hatch: THREE.Color
  /**
   * 激活档调色板——**不是"提亮"，是"加重上墨"**：base/dark/top 都比常态更深一档。
   * 纸底本身是亮的（#F4F1EA），往亮走 = 对比度下降 = 读成"褪色/变灰"；
   * 制图语境里"聚焦"只有一种表达：墨更实、线更粗。
   */
  lit: { base: THREE.Color; dark: THREE.Color; top: THREE.Color }
  /** 面透明度 */
  alpha: number
  /** 激活时的面透明度（透明壳被点亮 = 壳本身也上墨，默认与 alpha 相同） */
  litAlpha: number
  /** 排线起始阈值偏移（越大排线越早出现、越密） */
  hatchBias: number
}

const tone = (
  base: string,
  dark: string,
  top: string,
  hatch: string,
  lit: [string, string, string],
  hatchBias = 0,
  alpha = 1,
  litAlpha = alpha,
): PaperTone => ({
  base: new THREE.Color(base),
  dark: new THREE.Color(dark),
  top: new THREE.Color(top),
  hatch: new THREE.Color(hatch),
  lit: {
    base: new THREE.Color(lit[0]),
    dark: new THREE.Color(lit[1]),
    top: new THREE.Color(lit[2]),
  },
  alpha,
  litAlpha,
  hatchBias,
})

/**
 * finish 角色 → 纸面明度档（JX-7b §色彩 的三灰阶 + 警示红，落到纸面语境）。
 * 每档四色：顶面 / 侧面亮 / 侧面暗 / 排线墨，外加激活档。
 */
export const PAPER_TONES: Record<PartFinish, PaperTone> = {
  hull: tone('#EDE7D8', '#B9AE93', '#F7F3E8', '#7E7565', ['#E0D5BB', '#97896E', '#EDE5D1']),
  cold: tone('#F4EFE3', '#C7BDA5', '#FBF8F0', '#8A8070', ['#E9DFC8', '#A79A7F', '#F1E9D6']),
  titanium: tone('#FCFAF4', '#D8D0BD', '#FFFFFF', '#948A7A', ['#F3ECDC', '#BCB096', '#F8F3E6'], -0.04),
  // 红件的 lit 档**与常态同值**：红是语义色（working part），被点中时只该
  // "上墨更重"（线加粗、排线加密），不该换成一档更深的红——同一个部件在
  // 选中前后变红，读者会把它当成两种状态色（2026-10-19 用户反馈）。
  warning: tone('#E9A79E', '#C0605A', '#F2BDB5', '#7E3A34', ['#E9A79E', '#C0605A', '#F2BDB5'], 0.12),
  // 透明壳：纸面留 22% 不透明度，内部结构透出来（DESIGN §1.5 双层表达）；
  // 激活时壳加重到 48% —— "被点亮"的壳应当更实，而不是更淡
  shell: tone('#F2EDE1', '#C3B9A2', '#FAF7EF', '#877E6E', ['#E7DCC4', '#9C9077', '#F0E8D5'], 0, 0.22, 0.48),
}

/** DOM 侧色板（图例 swatch 与 3D 用同一套值，单一真源） */
export const PAPER_SWATCH: Record<PartFinish, { top: string; face: string; side: string; ink: string }> = {
  hull: { top: '#F7F3E8', face: '#EDE7D8', side: '#B9AE93', ink: '#7E7565' },
  cold: { top: '#FBF8F0', face: '#F4EFE3', side: '#C7BDA5', ink: '#8A8070' },
  titanium: { top: '#FFFFFF', face: '#FCFAF4', side: '#D8D0BD', ink: '#948A7A' },
  warning: { top: '#F2BDB5', face: '#E9A79E', side: '#C0605A', ink: '#7E3A34' },
  shell: { top: '#FAF7EF', face: '#F2EDE1', side: '#C3B9A2', ink: '#877E6E' },
}

/**
 * 目标**相对亮度**（Y）而不是明度 L：青 / 黄这类色相在同一个 L 上天生更亮
 * （#E0FFFF 压到 L.4 仍是 #00cccc，对比度只有 1.8:1）。按 Y 压到底，
 * 所有 accent 的墨色在纸面上就一样重 —— 制图要的是这个"一样重"。
 * 0.2 → 对纸（Y≈0.88）约 3.7:1。
 */
const ACCENT_INK_Y = 0.2
/**
 * 黄色相（40°–70°）**在纸面上无解，直接回落到"激活红"（红笔）**。
 *
 * 金 accent（#FFD700）压深是 `#8f7800` 橄榄土黄、压到 Y 0.28 是 `#a88e00` 深黄，
 * 换青墨又变成另一种身份（用户三次否决："黄""还是黄的""蓝绿色的"）。
 * sRGB 里低明度的黄只能往橄榄/棕走，色相身份注定保不住——那就别保了：
 * 金色件不走 accent 上色，改用 DESIGN §1 里那支**激活红 `#E8453C`**，
 * 也就是"红笔把这块圈出来"的读法（对纸 ≈3.5:1，线宽 2.5 撑得住）。
 * 与 `warning` 的语义红同值但语义不同：一个是"被点中"的记号，一个是部件本身的功能色。
 * 只影响 25 件金/浅黄 accent，其余件照旧吃自己的 accent 墨色。
 */
const ACCENT_FALLBACK_INK = '#E8453C'
const YELLOW_HUE_MIN = 40 / 360
const YELLOW_HUE_MAX = 70 / 360
/** 明度下限：再压就纯黑了，accent 会失去身份 */
const ACCENT_INK_L_MIN = 0.14

/**
 * sRGB ↔ HSL 手算 —— 不用 `THREE.Color.getHSL/setHSL`。
 * 三 r185 这两个方法的默认 `colorSpace` 是 `workingColorSpace`（**线性** sRGB），
 * 于是 `l = 0.42` 被当成线性值，出来是 0.68 的浅蓝：改了等于没改（实渲染像素 (140,195,210)）。
 * 调色的事一律在 sRGB 里算，算完交给 `new THREE.Color(hex)` 自己转工作空间。
 */
function hexToHsl(hex: string): [number, number, number] {
  const int = parseInt(normalizeHex(hex), 16)
  const r = ((int >> 16) & 255) / 255
  const g = ((int >> 8) & 255) / 255
  const b = (int & 255) / 255
  const max = Math.max(r, g, b)
  const min = Math.min(r, g, b)
  const l = (max + min) / 2
  if (max === min) return [0, 0, l]
  const d = max - min
  const s = l > 0.5 ? d / (2 - max - min) : d / (max + min)
  const h =
    max === r
      ? ((g - b) / d + (g < b ? 6 : 0)) / 6
      : max === g
        ? ((b - r) / d + 2) / 6
        : ((r - g) / d + 4) / 6
  return [h, s, l]
}

function hslToHex(h: number, s: number, l: number): string {
  const f = (n: number) => {
    const k = (n + h * 12) % 12
    const a = s * Math.min(l, 1 - l)
    const v = l - a * Math.max(-1, Math.min(k - 3, 9 - k, 1))
    return Math.round(v * 255)
  }
  return `#${[f(0), f(8), f(4)].map(v => v.toString(16).padStart(2, '0')).join('')}`
}

/**
 * accent → **纸面墨色**（本仓的"图上 accent"只有这一个写法）。
 *
 * 每件 thing 的 `color` 是给纸卡片当身份色的**浅粉彩色**（#87CEEB / #E0FFFF / #FFFACD…），
 * 直接拿来画线等于没有线：浅青/近白在 #F4F1EA 上对比度 ~1.4:1。
 * 文中部件词的 `--color-word-part` 早就踩过同一个坑（hud 青加深 60% → #0E7C7B），
 * 3D 侧照抄：保色相、压明度、并把彩度托到 0.45 —— 得到"同一支 accent 蘸了墨"。
 * 灰阶 accent（彩度 ≈0）不动彩度，免得凭空长出一个色相。
 */
export function accentInkOf(color: THREE.Color | string): THREE.Color {
  const hex = normalizeHex(color instanceof THREE.Color ? color.getHexString() : color)
  const [h, rawS, rawL] = hexToHsl(hex)
  const s = rawS > 0.05 ? Math.min(1, Math.max(rawS, 0.45)) : rawS
  // 黄色相没法在纸面上当墨（见 ACCENT_FALLBACK_INK），换青墨
  if (h >= YELLOW_HUE_MIN && h <= YELLOW_HUE_MAX) {
    return new THREE.Color(ACCENT_FALLBACK_INK)
  }
  let l = Math.min(rawL, 0.42)
  let ink = hslToHex(h, s, l)
  while (l > ACCENT_INK_L_MIN && relativeLuminance(ink) > ACCENT_INK_Y) {
    l -= 0.01
    ink = hslToHex(h, s, l)
  }
  return new THREE.Color(ink)
}

/**
 * 收成 6 位十六进制：`#abc` 这种三位写法 parseInt 出来是 0x000abc（几乎纯蓝），
 * 换算之前先展开，免得悄悄换错色。
 */
function normalizeHex(hex: string): string {
  const h = hex.replace('#', '').trim()
  return h.length === 3
    ? h.split('').map(c => c + c).join('')
    : h.padStart(6, '0').slice(-6)
}

/** sRGB 十六进制 → 相对亮度 Y（WCAG 定义，线性空间） */
function relativeLuminance(hex: string): number {
  const int = parseInt(normalizeHex(hex), 16)
  const lin = (v: number) => {
    const c = v / 255
    return c <= 0.04045 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4)
  }
  return (
    0.2126 * lin((int >> 16) & 255) +
    0.7152 * lin((int >> 8) & 255) +
    0.0722 * lin(int & 255)
  )
}

/** accentInkOf 的十六进制形态（DOM 标注层用；与 3D 侧同源） */
export function accentInkHex(color: string): string {
  return `#${accentInkOf(color).getHexString()}`
}

/**
 * 三层堆叠的「表面」材质：纸面明暗 + 顶面独立档 + 屏幕空间交叉排线。
 *
 * 表面**不吃 accent**：身份色只走墨线/点阵/标注（像纸上的彩铅），
 * 面色只在激活时加深一档。这样灰阶件被选中不会洗上一层淡红，
 * 红件的浅红纸面也不会在选中后变成另一种红。
 */
export function makePaperMaterial(finish: PartFinish, dpr: number) {
  const t = PAPER_TONES[finish]
  return new THREE.ShaderMaterial({
    transparent: true,
    depthWrite: true,
    // 双面：盆/锅/桶/管这类**空腔件**的内表面是背面，单面渲染会被剔掉 ——
    // 往里看是一个"黑洞"（其实是透到地面影子上去了）。背面在片元里翻法线照样受光。
    side: THREE.DoubleSide,
    uniforms: {
      uLight: { value: PAPER_LIGHT.clone() },
      uPx: { value: dpr },
      uBase: { value: t.base.clone() },
      uDark: { value: t.dark.clone() },
      uTop: { value: t.top.clone() },
      uHatch: { value: t.hatch.clone() },
      uLitBase: { value: t.lit.base.clone() },
      uLitDark: { value: t.lit.dark.clone() },
      uLitTop: { value: t.lit.top.clone() },
      uAlpha: { value: t.alpha },
      uLitAlpha: { value: t.litAlpha },
      uHatchBias: { value: t.hatchBias },
      uEmphasis: { value: 0 },
      uDim: { value: 0 },
    },
    vertexShader: /* glsl */ `
      varying vec3 vNormal;
      void main() {
        vNormal = normalize(normalMatrix * normal);
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,
    fragmentShader: /* glsl */ `
      uniform vec3 uBase, uDark, uTop, uHatch, uLight;
      uniform vec3 uLitBase, uLitDark, uLitTop;
      uniform float uAlpha, uLitAlpha, uHatchBias, uEmphasis, uDim, uPx;
      varying vec3 vNormal;

      void main() {
        vec3 n = normalize(vNormal);
        // 背面（壳体内壁）：法线翻过来，明暗与顶面档才对得上
        if (!gl_FrontFacing) n = -n;

        // 被点亮 = 换调色板（anatomy 的 data-lit），不是叠色
        vec3 cBase = mix(uBase, uLitBase, uEmphasis);
        vec3 cDark = mix(uDark, uLitDark, uEmphasis);
        vec3 cTop  = mix(uTop,  uLitTop,  uEmphasis);

        // half-lambert 主光 + 4 档量化（留 25% 连续，避免死板）
        float d = dot(n, uLight) * 0.5 + 0.5;
        d = floor(d * 4.0 + 0.5) / 4.0 * 0.75 + d * 0.25;
        vec3 col = mix(cDark, cBase, d);

        // 顶面独立档：朝上的面盖一层更亮的纸色（等距图的"台面")
        float up = smoothstep(${TOP_FACE_MIN.toFixed(2)}, 0.72, n.y);
        col = mix(col, cTop, up);

        // 屏幕空间交叉排线：密度跟随明暗，线宽恒定（像钢笔）；顶面不排线
        // 激活 = 排线提前出现 + 更重（"上墨加重"里最要紧的一半：
        // 纸面图上"更实"读的是排线密度，不是面色的明暗）
        float inkBoost = uEmphasis * 0.05;
        float dark = (1.0 - d) * (1.0 - up * 0.85);
        vec2 fc = gl_FragCoord.xy / uPx;
        float period = 6.0;
        float lw = 0.05;
        float d1 = abs(fract((fc.x + fc.y) / period) - 0.5);
        float d2 = abs(fract((fc.x - fc.y) / period) - 0.5);
        float hatch = 0.0;
        if (dark > 0.30 - uHatchBias - inkBoost) hatch += 1.0 - smoothstep(lw, lw + 0.07, d1);
        if (dark > 0.54 - uHatchBias - inkBoost) hatch += 1.0 - smoothstep(lw, lw + 0.07, d2);
        col = mix(col, uHatch, clamp(hatch, 0.0, 1.0) * (0.34 + uEmphasis * 0.08));

        // 压暗 = 向纸面退开（降不透明度）；激活 = 换档（透明壳变实），不再乘提亮系数
        float a = mix(uAlpha, uLitAlpha, uEmphasis) * (1.0 - uDim * 0.82);
        gl_FragColor = vec4(col, clamp(a, 0.0, 1.0));
        #include <colorspace_fragment>
      }
    `,
  })
}

/**
 * 反向外壳描边：沿法线外扩 + BackSide，给出连续剪影边（优于纯 Edges）。
 * 线宽屏幕恒定（anatomy 的 vector-effect: non-scaling-stroke）：
 * 由 usePartHighlight 每帧按「世界单位/像素」换算写入 uWidth，配合 uWidthPx 兜底。
 */
export function makeHullMaterial(widthPx: number, ink: THREE.Color, accent?: THREE.Color) {
  return new THREE.ShaderMaterial({
    side: THREE.BackSide,
    transparent: true,
    depthWrite: true,
    uniforms: {
      /** 当前世界单位线宽（每帧按相机距离刷新） */
      uWidth: { value: 0 },
      /** 目标屏幕线宽（CSS 像素），换算基准 */
      uWidthPx: { value: widthPx },
      uColor: { value: ink.clone() },
      uOpacity: { value: 0.8 },
      uEmphasis: { value: 0 },
      uAccent: { value: accent ? accent.clone() : new THREE.Color('#0E7C7B') },
      uDim: { value: 0 },
    },
    vertexShader: /* glsl */ `
      uniform float uWidth;
      void main() {
        vec3 p = position + normalize(normal) * uWidth;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);
      }
    `,
    fragmentShader: /* glsl */ `
      uniform vec3 uColor, uAccent;
      uniform float uOpacity, uEmphasis, uDim;
      void main() {
        vec3 col = mix(uColor, uAccent, uEmphasis);
        float a = uOpacity * (1.0 - uDim * 0.8) * (1.0 + uEmphasis * 0.6);
        gl_FragColor = vec4(col, clamp(a, 0.0, 1.0));
        #include <colorspace_fragment>
      }
    `,
  })
}
