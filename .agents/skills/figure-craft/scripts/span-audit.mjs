#!/usr/bin/env node
/**
 * span-audit —— 静态盘点：每件几何的"部件跨度"与"装饰跨度"。
 *
 *   node .agents/skills/figure-craft/scripts/span-audit.mjs
 *   node .agents/skills/figure-craft/scripts/span-audit.mjs --min-ratio 2
 *
 * 为什么要它：图版的两个老大难都能从这两个数字上看出来 ——
 *  ① 部件 `position` 跨度 < 2（`MODEL_SPAN`）就是"小世界"：世界单位的绝对尺寸
 *     （标注点半径 0.07、引线外推档 0.95→6.6、`Rod` 0.03）会立刻露馅（黑球、标签出画布）。
 *     `ThingScene` 会自动归一放大，不必改坐标，但**新写几何时要知道自己在小世界里**。
 *  ② 装饰（DraftLine / DraftSegments / PanelLines / TickRing）跨度远大于部件跨度时，
 *     装饰线是"作者拍脑袋写的长度"（power-socket 的墙线是插座本体的 10×）。
 *     取景已经按部件盒算（`partsBounds`），所以它不再挤小物件；但装饰线本身该多长
 *     是回填密度时该顺手修的东西。
 *
 * 零依赖，直接读 `src/geometry/*.tsx` 的源码文本（不跑浏览器）。数值是近似值
 * （只看 `SketchMesh position` 与各装饰件的 `points`），拿来排序找可疑件足够。
 */
import { readFileSync, readdirSync } from 'node:fs'
import { join } from 'node:path'

const argv = process.argv.slice(2)
const opt = {}
for (let i = 0; i < argv.length; i++) {
  if (argv[i].startsWith('--')) opt[argv[i].slice(2)] = argv[i + 1]?.startsWith('--') ? true : argv[++i]
}
const MIN_RATIO = Number(opt['min-ratio'] ?? 2)
const SMALL_SPAN = Number(opt['small-span'] ?? 2)
const DIR = 'src/geometry'

/** 抠出 src 片段里所有 `points={[...]}` 的坐标（方括号配平，跨多行也行） */
function extractPoints(src) {
  const pts = []
  const key = 'points={['
  for (let i = src.indexOf(key); i >= 0; i = src.indexOf(key, i + 1)) {
    let depth = 0
    let j = i + key.length - 1
    for (; j < src.length; j++) {
      if (src[j] === '[') depth++
      else if (src[j] === ']' && --depth === 0) break
    }
    const body = src.slice(i + key.length - 1, j + 1)
    for (const m of body.matchAll(/\[([-\d.,\s]+?)\]/g)) {
      const nums = m[1].split(',').map(Number)
      if (nums.length === 3 && nums.every(Number.isFinite)) pts.push(nums)
    }
  }
  return pts
}

const span = pts => {
  if (!pts.length) return 0
  const mn = [Infinity, Infinity, Infinity]
  const mx = [-Infinity, -Infinity, -Infinity]
  for (const p of pts) for (let k = 0; k < 3; k++) {
    mn[k] = Math.min(mn[k], p[k])
    mx[k] = Math.max(mx[k], p[k])
  }
  return Math.max(mx[0] - mn[0], mx[1] - mn[1], mx[2] - mn[2])
}

const DECOR = ['DraftLine', 'DraftSegments', 'PanelLines', 'TickRing']
const files = readdirSync(DIR).filter(f => f.endsWith('.tsx') && f !== 'primitives.tsx')
const rows = []
for (const f of files) {
  const src = readFileSync(join(DIR, f), 'utf8')
  const partPts = [...src.matchAll(/<SketchMesh[^>]*position=\{\[([-\d.,\s]+?)\]\}/g)].map(m =>
    m[1].split(',').map(Number),
  )
  const decorPts = []
  for (const seg of src.split(/<(?=DraftLine|DraftSegments|PanelLines|TickRing)/).slice(1)) {
    if (DECOR.includes(/^(\w+)/.exec(seg)?.[1])) decorPts.push(...extractPoints(seg))
  }
  const part = span(partPts)
  const decor = span(decorPts)
  if (part > 0) rows.push({ slug: f.replace(/\.tsx$/, ''), part, decor, ratio: decor / part })
}

const small = rows.filter(r => r.part < SMALL_SPAN).sort((a, b) => a.part - b.part)
const fat = rows.filter(r => r.ratio > MIN_RATIO).sort((a, b) => b.ratio - a.ratio)
console.log(`几何 ${rows.length} 件（带 SketchMesh position 的）`)
console.log(`\n小世界（部件跨度 < ${SMALL_SPAN}，靠 ThingScene 归一放大）：${small.length} 件`)
for (const r of small.slice(0, 15)) console.log(`  跨度 ${r.part.toFixed(3).padStart(6)}  ${r.slug}`)
console.log(`\n装饰跨度 > ${MIN_RATIO}× 部件跨度：${fat.length} 件（回填密度时顺手把它们收小）`)
for (const r of fat.slice(0, 20)) {
  console.log(`  ×${r.ratio.toFixed(1).padStart(6)}  部件 ${r.part.toFixed(3).padStart(6)}  装饰 ${r.decor.toFixed(2).padStart(6)}  ${r.slug}`)
}
