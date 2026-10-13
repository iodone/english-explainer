import * as THREE from 'three'
import type { PartFinish } from '../data/types'

/**
 * 纸面排线材质（blueprint 技法移植，2026-09-29）
 *
 * 把 blueprint 的工程蓝图 shader（haskaomni/blueprint src/shaders.js）
 * 改写成本仓纸面配色：固定 half-lambert 主光 + 4 档量化明暗 +
 * 屏幕空间交叉排线（暗部自动长出淡墨斜线）。激活走统一 uEmphasis 通道。
 *
 * 与 blueprint 的差异：
 * - 底色是纸面（羊皮纸 → 淡墨），不是深蓝；排线是墨色不是亮青
 * - 面保持半透明（depthWrite:false），保留 DESIGN §1.5 的「外壳半透明 + 内部结构」双层表达
 */

/** 固定主光方向（与相机无关，明暗像"画上去的"，不随转动变化） */
export const PAPER_LIGHT = new THREE.Vector3(0.45, 0.75, 0.55).normalize()

export interface PaperTone {
  /** 亮面纸色 */
  base: THREE.Color
  /** 暗面纸色 */
  dark: THREE.Color
  /** 排线墨色 */
  hatch: THREE.Color
  /** 面透明度（外壳低 → 内部结构透出来） */
  alpha: number
  /** 排线起始阈值偏移（越大排线越早出现、越密） */
  hatchBias: number
}

/**
 * finish 角色 → 纸面明度档（JX-7b §色彩 的三灰阶 + 警示红，落到纸面语境）：
 * hull 外壳最暗最实 / cold 结构件居中 / titanium 钛白最亮 / warning 警示红降饱和
 */
export const PAPER_TONES: Record<PartFinish, PaperTone> = {
  hull: {
    base: new THREE.Color('#EDE7D8'),
    dark: new THREE.Color('#B9AE93'),
    hatch: new THREE.Color('#7E7565'),
    // 外壳：保持半透明，内部结构可透出（DESIGN §1.5 双层表达）
    alpha: 1,
    hatchBias: 0,
  },
  cold: {
    base: new THREE.Color('#F4EFE3'),
    dark: new THREE.Color('#C7BDA5'),
    hatch: new THREE.Color('#8A8070'),
    alpha: 1,
    hatchBias: 0,
  },
  titanium: {
    base: new THREE.Color('#FCFAF4'),
    dark: new THREE.Color('#D8D0BD'),
    hatch: new THREE.Color('#948A7A'),
    alpha: 1,
    hatchBias: -0.04,
  },
  warning: {
    base: new THREE.Color('#E4978D'),
    dark: new THREE.Color('#B03A30'),
    hatch: new THREE.Color('#6E1F19'),
    alpha: 1,
    hatchBias: 0.12,
  },
}

/** 三层堆叠的「表面」材质：纸面明暗 + 屏幕空间交叉排线 */
export function makePaperMaterial(
  finish: PartFinish,
  accent: THREE.Color,
  dpr: number,
) {
  const tone = PAPER_TONES[finish]
  return new THREE.ShaderMaterial({
    transparent: true,
    depthWrite: true,
    uniforms: {
      uLight: { value: PAPER_LIGHT.clone() },
      uPx: { value: dpr },
      uBase: { value: tone.base.clone() },
      uDark: { value: tone.dark.clone() },
      uHatch: { value: tone.hatch.clone() },
      uAccent: { value: accent.clone() },
      uAlpha: { value: tone.alpha },
      uHatchBias: { value: tone.hatchBias },
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
      uniform vec3 uBase, uDark, uHatch, uAccent, uLight;
      uniform float uAlpha, uHatchBias, uEmphasis, uDim, uPx;
      varying vec3 vNormal;
      void main() {
        vec3 n = normalize(vNormal);
        // half-lambert 主光 + 4 档量化（留 25% 连续，避免死板）
        float d = dot(n, uLight) * 0.5 + 0.5;
        d = floor(d * 4.0 + 0.5) / 4.0 * 0.75 + d * 0.25;
        vec3 col = mix(uDark, uBase, d);

        // 屏幕空间交叉排线：密度跟随明暗，线宽恒定（像钢笔）
        float dark = 1.0 - d;
        vec2 fc = gl_FragCoord.xy / uPx;
        float period = 6.0;
        float lw = 0.05;
        float d1 = abs(fract((fc.x + fc.y) / period) - 0.5);
        float d2 = abs(fract((fc.x - fc.y) / period) - 0.5);
        float hatch = 0.0;
        if (dark > 0.24 - uHatchBias) hatch += 1.0 - smoothstep(lw, lw + 0.07, d1);
        if (dark > 0.46 - uHatchBias) hatch += 1.0 - smoothstep(lw, lw + 0.07, d2);
        col = mix(col, uHatch, clamp(hatch, 0.0, 1.0) * 0.5);

        // 统一高亮通道：激活混向 thing accent；压暗走 alpha
        col = mix(col, uAccent, uEmphasis * 0.45);
        float a = uAlpha * (1.0 - uDim * 0.82) * (1.0 + uEmphasis * 0.3);
        gl_FragColor = vec4(col, clamp(a, 0.0, 1.0));
        #include <colorspace_fragment>
      }
    `,
  })
}

/** 反向外壳描边：沿法线外扩 + BackSide，给出连续剪影边（优于纯 Edges） */
export function makeHullMaterial(width: number, ink: THREE.Color) {
  return new THREE.ShaderMaterial({
    side: THREE.BackSide,
    transparent: true,
    depthWrite: true,
    uniforms: {
      uWidth: { value: width },
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
