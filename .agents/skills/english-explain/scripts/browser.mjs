// Self-contained CDP transport: Node's built-in fetch and WebSocket, a
// temporary Chrome profile, and no browser dependency.
import { spawn } from 'node:child_process'
import { existsSync, mkdtempSync, rmSync, writeFileSync, mkdirSync } from 'node:fs'
import { createServer } from 'node:net'
import { tmpdir } from 'node:os'
import { dirname, join } from 'node:path'

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

function chromeBinary() {
  return [
    process.env.CHROME,
    '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
    '/Applications/Chromium.app/Contents/MacOS/Chromium',
    '/usr/bin/google-chrome',
    '/usr/bin/google-chrome-stable',
    '/usr/bin/chromium',
    '/usr/bin/chromium-browser',
  ].find(candidate => candidate && existsSync(candidate)) || 'google-chrome'
}

const freePort = () => new Promise(resolve => {
  const server = createServer()
  server.listen(0, '127.0.0.1', () => {
    const { port } = server.address()
    server.close(() => resolve(port))
  })
})

export async function openBrowser({ width = 1440, height = 1000, scale = 1 } = {}) {
  const port = await freePort()
  const profile = mkdtempSync(join(tmpdir(), 'english-explain-'))
  const chrome = spawn(chromeBinary(), [
    '--headless=new', '--disable-gpu', '--enable-unsafe-swiftshader',
    '--hide-scrollbars', '--no-first-run', '--no-default-browser-check',
    '--disable-extensions', '--mute-audio', '--allow-file-access-from-files',
    `--remote-debugging-port=${port}`, `--user-data-dir=${profile}`, 'about:blank',
  ], { stdio: ['ignore', 'ignore', 'pipe'] })
  let stderr = ''
  chrome.stderr.on('data', chunk => { stderr += chunk })
  let targets = null
  for (let attempt = 0; attempt < 100; attempt++) {
    if (chrome.exitCode !== null) throw new Error(`Chrome failed to start: ${stderr.slice(0, 600)}`)
    try {
      const response = await fetch(`http://127.0.0.1:${port}/json/list`)
      if (response.ok) { targets = await response.json(); break }
    } catch { /* Chrome is still starting. */ }
    await sleep(150)
  }
  if (!targets) throw new Error('Chrome did not expose a CDP endpoint')
  const target = targets.find(item => item.type === 'page')
  const ws = new WebSocket(target.webSocketDebuggerUrl)
  await new Promise((resolve, reject) => { ws.onopen = resolve; ws.onerror = reject })
  let id = 0
  const pending = new Map()
  const errors = []
  const networkFailures = []
  ws.onmessage = event => {
    const message = JSON.parse(event.data)
    if (message.id && pending.has(message.id)) {
      const { resolve, reject } = pending.get(message.id)
      pending.delete(message.id)
      if (message.error) reject(new Error(message.error.message))
      else resolve(message.result)
    }
    if (message.method === 'Runtime.exceptionThrown') errors.push(message.params.exceptionDetails.exception?.description || message.params.exceptionDetails.text)
    if (message.method === 'Network.loadingFailed' && !message.params.canceled) networkFailures.push(message.params.errorText)
  }
  const call = (method, params = {}) => new Promise((resolve, reject) => {
    const next = ++id
    pending.set(next, { resolve, reject })
    ws.send(JSON.stringify({ id: next, method, params }))
  })
  const evaluate = async expression => {
    const result = await call('Runtime.evaluate', { expression, returnByValue: true, awaitPromise: true })
    if (result.exceptionDetails) throw new Error(result.exceptionDetails.exception?.description || result.exceptionDetails.text)
    return result.result?.value
  }
  const waitFor = async (expression, timeout = 15000) => {
    const started = Date.now()
    while (Date.now() - started < timeout) {
      if (await evaluate(expression)) return
      await sleep(100)
    }
    throw new Error(`Timed out: ${expression}`)
  }
  await call('Page.enable')
  await call('Runtime.enable')
  await call('Network.enable')
  await call('Emulation.setDeviceMetricsOverride', { width, height, deviceScaleFactor: scale, mobile: false })
  return {
    call, evaluate, waitFor, errors, networkFailures,
    async goto(url) { await call('Page.navigate', { url }) },
    async clickAt(x, y) {
      for (const type of ['mouseMoved', 'mousePressed', 'mouseReleased']) {
        await call('Input.dispatchMouseEvent', { type, x, y, button: 'left', buttons: type === 'mousePressed' ? 1 : 0, clickCount: type === 'mouseMoved' ? 0 : 1 })
      }
    },
    async screenshot(file) {
      const { data } = await call('Page.captureScreenshot', { format: 'png', captureBeyondViewport: false })
      mkdirSync(dirname(file), { recursive: true })
      writeFileSync(file, Buffer.from(data, 'base64'))
      console.log(`screenshot ${file}`)
    },
    async close() {
      ws.close()
      if (chrome.exitCode === null) chrome.kill('SIGKILL')
      try { rmSync(profile, { recursive: true, force: true }) } catch { /* Best-effort temp cleanup. */ }
    },
  }
}

export { sleep }
