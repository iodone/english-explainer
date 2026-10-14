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
  /** 激活（被点亮）时的调色板——不混色，换档 */
  lit: { base: THREE.Color; dark: THREE.Color; top: THREE.Color }
  /** 面透明度 */
  alpha: number
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
  hatchBias,
})

/**
 * finish 角色 → 纸面明度档（JX-7b §色彩 的三灰阶 + 警示红，落到纸面语境）。
 * 每档四色：顶面 / 侧面亮 / 侧面暗 / 排线墨，外加激活档。
 */
export const PAPER_TONES: Record<PartFinish, PaperTone> = {
  hull: tone('#EDE7D8', '#B9AE93', '#F7F3E8', '#7E7565', ['#FBF7EC', '#D6CBB2', '#FFFDF6']),
  cold: tone('#F4EFE3', '#C7BDA5', '#FBF8F0', '#8A8070', ['#FDFBF5', '#DFD6C2', '#FFFFFF']),
  titanium: tone('#FCFAF4', '#D8D0BD', '#FFFFFF', '#948A7A', ['#FFFDF8', '#EAE3D3', '#FFFFFF'], -0.04),
  warning: tone('#E9A79E', '#C0605A', '#F2BDB5', '#7E3A34', ['#F6C3BB', '#D07C75', '#FFD8D2'], 0.12),
  // 透明壳：纸面留 22% 不透明度，内部结构透出来（DESIGN §1.5 双层表达）
  shell: tone('#F2EDE1', '#C3B9A2', '#FAF7EF', '#877E6E', ['#FDFAF3', '#DED5C1', '#FFFFFF'], 0, 0.22),
}

/** DOM 侧色板（图例 swatch 与 3D 用同一套值，单一真源） */
export const PAPER_SWATCH: Record<PartFinish, { top: string; face: string; side: string; ink: string }> = {
  hull: { top: '#F7F3E8', face: '#EDE7D8', side: '#B9AE93', ink: '#7E7565' },
  cold: { top: '#FBF8F0', face: '#F4EFE3', side: '#C7BDA5', ink: '#8A8070' },
  titanium: { top: '#FFFFFF', face: '#FCFAF4', side: '#D8D0BD', ink: '#948A7A' },
  warning: { top: '#F2BDB5', face: '#E9A79E', side: '#C0605A', ink: '#7E3A34' },
  shell: { top: '#FAF7EF', face: '#F2EDE1', side: '#C3B9A2', ink: '#877E6E' },
}

/** 三层堆叠的「表面」材质：纸面明暗 + 顶面独立档 + 屏幕空间交叉排线 */
export function makePaperMaterial(
  finish: PartFinish,
  accent: THREE.Color,
  dpr: number,
) {
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
      uAccent: { value: accent.clone() },
      uAlpha: { value: t.alpha },
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
      uniform vec3 uBase, uDark, uTop, uHatch, uAccent, uLight;
      uniform vec3 uLitBase, uLitDark, uLitTop;
      uniform float uAlpha, uHatchBias, uEmphasis, uDim, uPx;
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
        float dark = (1.0 - d) * (1.0 - up * 0.85);
        vec2 fc = gl_FragCoord.xy / uPx;
        float period = 6.0;
        float lw = 0.05;
        float d1 = abs(fract((fc.x + fc.y) / period) - 0.5);
        float d2 = abs(fract((fc.x - fc.y) / period) - 0.5);
        float hatch = 0.0;
        if (dark > 0.30 - uHatchBias) hatch += 1.0 - smoothstep(lw, lw + 0.07, d1);
        if (dark > 0.54 - uHatchBias) hatch += 1.0 - smoothstep(lw, lw + 0.07, d2);
        col = mix(col, uHatch, clamp(hatch, 0.0, 1.0) * 0.34);

        // accent 只做微量染色（身份由调色板给，颜色由墨线给）
        col = mix(col, uAccent, uEmphasis * 0.16);

        float a = uAlpha * (1.0 - uDim * 0.82) * (1.0 + uEmphasis * 0.3);
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
export function makeHullMaterial(widthPx: number, ink: THREE.Color) {
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
      uAccent: { value: new THREE.Color('#3ECFCF') },
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
