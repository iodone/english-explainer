#!/usr/bin/env node
/**
 * figure-craft 走查工具 —— 零依赖（Node ≥ 22 自带 fetch / WebSocket）。
 *
 * 为什么需要它：图版和标注的毛病**静态看不出来**。
 * 标签是不是在闪、是不是压在形体上、旋转一圈有没有人没地方落——
 * 只有把页面跑起来、逐帧采样才能回答。upstream 的规矩是"放大到 4× 逐个接头看"，
 * 本项目对应的就是这套工具。
 *
 *   node figure.mjs shot    <thing|url>   截图（可 --scale 2 --clip 看局部；
 *                                          --click-at x,y 点画布 / --click <css> 点 DOM 按钮先造出激活态）
 *   node figure.mjs labels  <thing|url>   标注层逐帧采样：跳变 / 显隐 / 透明度翻转（可先 --click-at 点中一个部件）
 *   node figure.mjs eval    <thing|url> "<js>"   在页面里跑任意 JS（临时探针用）
 *
 * 通用选项：
 *   --base <url>    dev server（默认 http://127.0.0.1:5173）
 *   --wait <ms>     导航后等页面稳定（默认 5000；标注采样建议 ≥ 6000）
 *   --width/--height/--scale   视口（默认 1400×950 @1x）
 *   --port <n>      CDP 端口（默认 9333；已有 Chrome 占着就复用）
 *   --keep          跑完不关 Chrome（连续跑几条命令时省启动时间）
 *
 * 用法前提：`npm run dev` 已经开着。工具自己负责起 headless Chrome。
 */
import { spawn } from 'node:child_process'
import { existsSync, mkdtempSync, rmSync, writeFileSync } from 'node:fs'
import { createServer } from 'node:net'
import { tmpdir } from 'node:os'
import { join } from 'node:path'

/* ─── 参数 ─── */
const argv = process.argv.slice(2)
const cmd = argv.shift()
const positional = []
const opt = {}
for (let i = 0; i < argv.length; i++) {
  const a = argv[i]
  if (a.startsWith('--')) {
    const key = a.slice(2)
    const next = argv[i + 1]
    if (next === undefined || next.startsWith('--')) opt[key] = true
    else { opt[key] = next; i++ }
  } else positional.push(a)
}

const HELP = `figure-craft 走查工具

  node figure.mjs shot   <thing|url> [--out f.png] [--scale 2] [--clip x,y,w,h]
                          [--click-at x,y | --click <css> [--click-has 文案]] [--click-wait ms]
  node figure.mjs labels <thing|url> [--n 14] [--every 300] [--jump 6]
                          [--click <css> | --click-at x,y]
  node figure.mjs eval   <thing|url> "<js>"

  --base <url>  dev server（默认 http://127.0.0.1:5173）
  --wait <ms>   导航后等待（默认 5000）
  --width/--height/--scale  视口（默认 1400x950 @1x）
  --port <n>    CDP 端口（默认 9333）
  --keep        跑完不关 Chrome
`
if (!cmd || cmd === 'help' || opt.help) { console.log(HELP); process.exit(0) }
if (!['shot', 'labels', 'eval'].includes(cmd)) { console.error(`未知命令：${cmd}\n\n${HELP}`); process.exit(2) }
if (!positional[0]) { console.error(HELP); process.exit(2) }

const BASE = String(opt.base ?? 'http://127.0.0.1:5173').replace(/\/$/, '')
const TARGET = /^https?:\/\//.test(positional[0])
  ? positional[0]
  : `${BASE}/thing/${positional[0]}`
const WIDTH = Number(opt.width ?? 1400)
const HEIGHT = Number(opt.height ?? 950)
const SCALE = Number(opt.scale ?? 1)
const WAIT = Number(opt.wait ?? 5000)
const PORT = Number(opt.port ?? 9333)
const KEEP = !!opt.keep
const sleep = ms => new Promise(r => setTimeout(r, ms))

/* ─── headless Chrome ─── */
function chromeBinary() {
  const candidates = [
    process.env.CHROME,
    '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
    '/Applications/Chromium.app/Contents/MacOS/Chromium',
    '/usr/bin/google-chrome',
    '/usr/bin/google-chrome-stable',
    '/usr/bin/chromium',
    '/usr/bin/chromium-browser',
    '/snap/bin/chromium',
  ]
  return candidates.find(c => c && existsSync(c)) ?? 'google-chrome'
}

const cdpList = async port => {
  try {
    const res = await fetch(`http://127.0.0.1:${port}/json/list`)
    if (!res.ok) return null
    const list = await res.json()
    return Array.isArray(list) ? list : null
  } catch { return null }
}

const freePort = () => new Promise(resolve => {
  const srv = createServer()
  srv.once('error', () => resolve(PORT))
  srv.listen(0, '127.0.0.1', () => {
    const { port } = srv.address()
    srv.close(() => resolve(port))
  })
})

let chrome = null
let profile = null
let port = PORT

async function startChrome() {
  if (await cdpList(port)) return port // 已经有 Chrome 占着，复用
  port = await freePort()
  profile = mkdtempSync(join(tmpdir(), 'figure-craft-'))
  const binary = chromeBinary()
  chrome = spawn(binary, [
    '--headless=new', '--disable-gpu', '--enable-unsafe-swiftshader',
    '--hide-scrollbars', '--no-first-run', '--no-default-browser-check',
    '--disable-extensions', '--mute-audio',
    `--remote-debugging-port=${port}`, `--user-data-dir=${profile}`, 'about:blank',
  ], { stdio: ['ignore', 'ignore', 'pipe'] })
  let stderr = ''
  chrome.stderr.on('data', d => { stderr += d })
  for (let i = 0; i < 100; i++) {
    await sleep(200)
    if (chrome.exitCode !== null) {
      throw new Error(`Chrome 启动失败（${binary}）\n${stderr.trim().slice(0, 600)}\n` +
        `提示：装 Chrome，或用 CHROME=<路径> 指定。`)
    }
    if (await cdpList(port)) return port
  }
  throw new Error('Chrome 起来了但 CDP 端口没响应')
}

function stopChrome() {
  if (chrome && chrome.exitCode === null) chrome.kill('SIGKILL')
  if (profile) { try { rmSync(profile, { recursive: true, force: true }) } catch {} }
}

/* ─── CDP ─── */
async function connect(port) {
  const list = await cdpList(port)
  const page = list.find(t => t.type === 'page')
  if (!page) throw new Error('CDP 里没有 page target')
  const ws = new WebSocket(page.webSocketDebuggerUrl)
  await new Promise((res, rej) => {
    ws.onopen = res
    ws.onerror = () => rej(new Error('CDP WebSocket 连接失败'))
  })
  let id = 0
  const pending = new Map()
  ws.onmessage = e => {
    const msg = JSON.parse(e.data)
    if (msg.id && pending.has(msg.id)) { pending.get(msg.id)(msg); pending.delete(msg.id) }
  }
  const call = (method, params = {}) => new Promise((res, rej) => {
    const i = ++id
    pending.set(i, m => (m.error ? rej(new Error(`${method}: ${m.error.message}`)) : res(m.result)))
    ws.send(JSON.stringify({ id: i, method, params }))
  })
  const evaluate = async expression => {
    const r = await call('Runtime.evaluate', { expression, returnByValue: true, awaitPromise: true })
    if (r.exceptionDetails) throw new Error(r.exceptionDetails.exception?.description ?? '页面里抛错了')
    return r.result?.value
  }
  return { call, evaluate, close: () => ws.close() }
}

/** 导航前先探一下：dev server 没开 / 指错端口，都要说清楚，别让人对着空白截图猜 */
async function preflight() {
  try {
    const res = await fetch(TARGET, { redirect: 'follow' })
    if (!res.ok) throw new Error(`HTTP ${res.status}`)
  } catch (e) {
    throw new Error(
      `打不开 ${TARGET}（${e.message}）\n` +
      `  dev server 开着吗？先跑 \`npm run dev\`，或用 --base <url> 指到它。`,
    )
  }
}

async function openPage() {
  await preflight()
  const p = await startChrome()
  const cdp = await connect(p)
  await cdp.call('Page.enable')
  await cdp.call('Runtime.enable')
  await cdp.call('Emulation.setDeviceMetricsOverride', {
    width: WIDTH, height: HEIGHT, deviceScaleFactor: SCALE, mobile: false,
  })
  await cdp.call('Page.navigate', { url: TARGET })
  await sleep(WAIT)
  const info = await cdp.evaluate('({ title: document.title, canvas: !!document.querySelector("canvas") })')
  if (!info.canvas) {
    console.error(
      `\n⚠ ${TARGET} 没有渲染出 canvas。\n` +
      `  页面标题是「${info.title}」——如果不是 Thing Explainer，说明这个端口上是别的项目，\n` +
      `  用 --base <url> 指到本项目（Vite 默认 5173，被占用时会顺延，看 npm run dev 的输出）。\n`,
    )
  }
  return cdp
}

/* ─── 共享：画布定点点击 ─── */
/** 在视口坐标上补一次真点击（pointerdown/up + click）。
 *  3D 部件不是 DOM 元素，只有真事件走到 canvas 上，R3F 才会做射线拾取 ——
 *  "点了部件之后图变成什么样"只能这么验。 */
const CLICK_AT = (x, y) => `(() => {
  const el = document.querySelector('canvas')
  if (!el) return 'no-canvas'
  const base = { bubbles: true, cancelable: true, clientX: ${x}, clientY: ${y}, pointerId: 1, isPrimary: true, button: 0, buttons: 1 }
  el.dispatchEvent(new PointerEvent('pointermove', base))
  el.dispatchEvent(new PointerEvent('pointerdown', base))
  el.dispatchEvent(new PointerEvent('pointerup', { ...base, buttons: 0 }))
  el.dispatchEvent(new MouseEvent('click', { ...base, buttons: 0 }))
  const r = el.getBoundingClientRect()
  return JSON.stringify({ canvas: [Math.round(r.left), Math.round(r.top), Math.round(r.width), Math.round(r.height)] })
})()`

/** 画布定点点击（--click-at）：部件不是 DOM 元素，只有真事件走到 canvas 上 R3F 才会射线拾取 */
async function clickAt(cdp) {
  const [x, y] = String(opt['click-at']).split(',').map(Number)
  if (!Number.isFinite(x) || !Number.isFinite(y)) throw new Error('--click-at 要 x,y')
  console.log('click-at', x, y, await cdp.evaluate(CLICK_AT(x, y)))
  await sleep(Number(opt['click-wait'] ?? 1200))
}

async function shot() {
  const cdp = await openPage()
  // DOM 点击：造出"点了按钮之后"的状态（flow / practice 的激活态只能这么验）
  if (opt.click) {
    const hit = await cdp.evaluate(`(() => {
      const has = ${JSON.stringify(opt['click-has'] ?? '')}
      const els = [...document.querySelectorAll(${JSON.stringify(String(opt.click))})]
        .filter(e => e.offsetParent && (!has || (e.textContent || '').includes(has)))
      if (!els.length) return null
      els[0].click()
      return (els[0].textContent || '').trim()
    })()`)
    console.log(hit === null
      ? `（--click 没命中任何可见元素：${opt.click}）`
      : `click ${JSON.stringify(hit)}`)
    await sleep(Number(opt['click-wait'] ?? 1500))
  }
  if (opt['click-at']) await clickAt(cdp)
  const params = { format: 'png', captureBeyondViewport: false }
  if (opt.clip) {
    const [x, y, w, h] = String(opt.clip).split(',').map(Number)
    if ([x, y, w, h].some(n => !Number.isFinite(n))) throw new Error('--clip 要 x,y,w,h')
    params.clip = { x, y, width: w, height: h, scale: 1 }
  }
  const { data } = await cdp.call('Page.captureScreenshot', params)
  const out = String(opt.out ?? `figure-${Date.now()}.png`)
  writeFileSync(out, Buffer.from(data, 'base64'))
  const bytes = Buffer.from(data, 'base64').length
  console.log(`saved ${out}  ${bytes} bytes  ${WIDTH}x${HEIGHT}@${SCALE}x${opt.clip ? `  clip ${opt.clip}` : ''}`)
  if (opt.clip) console.log('提示：4× 判据看的是"局部放大后还有没有真东西"，不是整体缩略图。')
  cdp.close()
}

/* ─── 命令：labels ─── */
const LABEL_PROBE = `(() => {
  const out = {}
  document.querySelectorAll('[data-label]').forEach(el => {
    const r = el.getBoundingClientRect()
    out[el.dataset.label] = [
      el.style.display === 'none' ? 'hid' : 'vis',
      Math.round(r.x), Math.round(r.y),
      el.style.opacity === '' ? 1 : Number(el.style.opacity),
    ]
  })
  return out
})()`

async function labels() {
  const cdp = await openPage()
  const n = Number(opt.n ?? 14)
  const every = Number(opt.every ?? 300)
  const jumpLimit = Number(opt.jump ?? 6)

  if (opt.click) {
    const clicked = await cdp.evaluate(`(() => {
      const els = [...document.querySelectorAll(${JSON.stringify(String(opt.click))})].filter(e => e.offsetParent)
      if (!els.length) return null
      els[0].click()
      return els[0].textContent
    })()`)
    console.log(clicked === null
      ? `（--click 没命中任何可见元素：${opt.click}）`
      : `点了 ${JSON.stringify(clicked)} —— 激活态最容易触发重排抖动\n`)
    await sleep(700)
  }
  if (opt['click-at']) await clickAt(cdp)

  const samples = []
  for (let i = 0; i < n; i++) { samples.push(await cdp.evaluate(LABEL_PROBE)); await sleep(every) }
  const keys = [...new Set(samples.flatMap(s => Object.keys(s)))]
  if (!keys.length) {
    console.log('没找到 [data-label] 元素。标注层是不是没渲染？')
    cdp.close()
    return
  }

  let bad = 0
  console.log(`采样 ${n} 次 × ${every}ms（${keys.length} 个标签）\n`)
  console.log('  ' + '标签'.padEnd(24) + '判定'.padEnd(12) + '位移'.padEnd(8) + '最大跳变'.padEnd(10) + '透明度')
  for (const key of keys) {
    const col = samples.map(s => s[key]).filter(Boolean)
    if (col.length < 2) { console.log('  ' + key.padEnd(24) + '（采样不足）'); continue }
    const xs = col.map(c => c[1])
    const ys = col.map(c => c[2])
    const disp = new Set(col.map(c => c[0]))
    const opac = new Set(col.map(c => c[3]))
    let jump = 0
    for (let i = 1; i < col.length; i++) {
      jump = Math.max(jump, Math.abs(xs[i] - xs[i - 1]), Math.abs(ys[i] - ys[i - 1]))
    }
    const span = Math.max(Math.max(...xs) - Math.min(...xs), Math.max(...ys) - Math.min(...ys))
    const flick = disp.size > 1 || jump > jumpLimit
    if (flick) bad++
    const verdict = flick
      ? (disp.size > 1 ? '✗ 显隐跳变' : '✗ 位置跳变')
      : '✓ stable'
    console.log(
      '  ' + key.padEnd(24) + verdict.padEnd(12) +
      `Δ${span}px`.padEnd(8) + `${jump}px`.padEnd(10) +
      [...opac].join('→') + (opac.size > 1 && !flick ? '  ⚠ 透明度在翻' : ''),
    )
  }
  console.log(bad === 0
    ? '\n✓ 全部稳定（位移是相机自转的平滑漂移，跳变才是抖动）'
    : `\n✗ ${bad} 个标签不稳：位置跳变 = 选位在抖；显隐跳变 = 占用判定在抖`)
  if (bad) process.exitCode = 1
  cdp.close()
}

/* ─── 命令：eval ─── */
async function runEval() {
  const expr = positional[1]
  if (!expr) throw new Error('eval 需要一段 JS 表达式')
  const cdp = await openPage()
  const value = await cdp.evaluate(expr)
  console.log(typeof value === 'string' ? value : JSON.stringify(value, null, 2))
  cdp.close()
}

try {
  if (cmd === 'shot') await shot()
  else if (cmd === 'labels') await labels()
  else await runEval()
} catch (err) {
  // 给人（和 agent）看的是原因，不是调用栈
  console.error(`\n✗ ${err?.message ?? err}\n`)
  process.exitCode = 1
} finally {
  if (!KEEP) { stopChrome() } else if (chrome) { console.log(`\n（--keep：Chrome 留在后台，CDP 端口 ${port}）`) }
}
