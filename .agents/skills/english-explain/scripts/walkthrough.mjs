#!/usr/bin/env node
/** Offline browser review: real word click, real 3D raycast click, auto tour, screenshots. */
import assert from 'node:assert/strict'
import { existsSync } from 'node:fs'
import { mkdir } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'
import { openBrowser, sleep } from './browser.mjs'

const HERE = path.dirname(fileURLToPath(import.meta.url))
const SKILL = path.resolve(HERE, '..')
const ROOT = path.resolve(SKILL, '../../..')
const args = process.argv.slice(2)
const option = (name, fallback) => {
  const index = args.indexOf(`--${name}`)
  return index >= 0 ? args[index + 1] : fallback
}
const positional = args.filter((arg, index) => !arg.startsWith('--') && args[index - 1] !== '--out' && args[index - 1] !== '--width' && args[index - 1] !== '--height')
const target = positional[0] || path.join(SKILL, 'examples/iron.html')
const url = /^https?:/.test(target) ? target : pathToFileURL(path.resolve(target)).href
if (!/^https?:/.test(target) && !existsSync(target)) throw new Error(`Missing page: ${target}`)
const out = path.resolve(option('out', path.join(ROOT, 'english-explain-out/walkthrough')))
await mkdir(out, { recursive: true })
const browser = await openBrowser({ width: Number(option('width', 1440)), height: Number(option('height', 1000)) })
let passed = 0
const pass = message => { passed++; console.log(`✓ ${message}`) }

try {
  // Start offline before navigation: a CDN font, script, or model cannot pass by accident.
  await browser.call('Network.emulateNetworkConditions', { offline: true, latency: 0, downloadThroughput: 0, uploadThroughput: 0 })
  await browser.goto(`${url}?capture&idle=1800&step=700`)
  await browser.waitFor('window.ENGLISH_EXPLAIN?.ready && document.body.dataset.ready === "true"')
  await sleep(500)
  const facts = await browser.evaluate(`(() => {
    const api = window.ENGLISH_EXPLAIN
    return {
      title: document.querySelector('h1').textContent,
      parts: api.lesson.parts.length,
      stat: Number(document.querySelector('[data-stat="parts"]').textContent),
      words: document.querySelectorAll('.word-part').length,
      canvas: !!document.querySelector('canvas'),
      external: performance.getEntriesByType('resource').filter(x => /^https?:/.test(x.name)).map(x => x.name),
    }
  })()`)
  assert.ok(facts.title && facts.canvas)
  assert.equal(facts.parts, facts.stat)
  assert.ok(facts.words >= facts.parts)
  assert.deepEqual(facts.external, [])
  pass(`file:// opens offline; ${facts.parts} part labels and HUD count come from lesson data`)
  await browser.screenshot(path.join(out, '01-overview.png'))

  await browser.evaluate(`document.querySelector('.word-part[data-part-id="hand-holder"]').click()`)
  await sleep(350)
  let selected = await browser.evaluate(`(() => ({
    state: window.ENGLISH_EXPLAIN.getState(),
    activeWords: [...document.querySelectorAll('.word-active')].map(x => x.dataset.partId),
    activeIndex: document.querySelector('.part-index-button.active')?.dataset.partId,
    explanation: document.querySelector('.simple-explanation').textContent,
  }))()`)
  assert.equal(selected.state.partId, 'hand-holder')
  assert.ok(selected.activeWords.every(id => id === 'hand-holder'))
  assert.equal(selected.activeIndex, 'hand-holder')
  assert.equal(selected.explanation, await browser.evaluate(`window.ENGLISH_EXPLAIN.lesson.partExplanations['hand-holder']`))
  pass('word → part: one state lights the phrase, part index, model, and simple explanation')
  await browser.screenshot(path.join(out, '02-word-to-part.png'))

  await browser.evaluate(`window.ENGLISH_EXPLAIN.startTour()`)
  await browser.evaluate(`window.ENGLISH_EXPLAIN.showTourStep(0)`)
  await sleep(250)
  await browser.evaluate(`window.ENGLISH_EXPLAIN.takeOver()`)
  const point = await browser.evaluate(`window.ENGLISH_EXPLAIN.projectPart('hand-holder')`)
  assert.ok(point && Number.isFinite(point.x) && Number.isFinite(point.y))
  await browser.clickAt(point.x, point.y)
  await sleep(400)
  selected = await browser.evaluate(`window.ENGLISH_EXPLAIN.getState()`)
  assert.equal(selected.partId, 'hand-holder')
  assert.ok(selected.sentenceIndex >= 0)
  pass('part → word: a real canvas raycast click selects the linked article sentence')
  await browser.screenshot(path.join(out, '03-part-to-word.png'))

  await browser.evaluate(`document.querySelector('.word-new[data-dict-key="iron"]').click()`)
  assert.equal(await browser.evaluate(`document.querySelector('.dict-head strong').textContent`), 'iron')
  pass('dictionary card reads the bundled entry')

  await browser.evaluate(`window.ENGLISH_EXPLAIN.startTour()`)
  const before = await browser.evaluate(`window.ENGLISH_EXPLAIN.getState().tourIndex`)
  await sleep(1050)
  const after = await browser.evaluate(`window.ENGLISH_EXPLAIN.getState()`)
  assert.equal(after.tour, true)
  assert.notEqual(after.tourIndex, before)
  const countText = await browser.evaluate(`document.querySelector('[data-tour-count]').textContent`)
  assert.ok(countText.startsWith(`${String(after.tourIndex + 1).padStart(2, '0')} / `))
  pass('auto tour advances through the shared link/flow script')
  await browser.screenshot(path.join(out, '04-auto-tour.png'))

  await browser.evaluate(`window.ENGLISH_EXPLAIN.takeOver()`)
  await browser.evaluate(`document.querySelector('.word-part[data-part-id="heat-wheel"]').click()`)
  await sleep(2200)
  assert.equal(await browser.evaluate(`window.ENGLISH_EXPLAIN.getState().tour`), true)
  pass('visitor input takes over; quiet hands return control to the tour')

  assert.deepEqual(browser.errors, [])
  assert.deepEqual(browser.networkFailures, [])
  pass('no browser exceptions or network requests')
  console.log(`\n${passed} checks passed · screenshots: ${out}`)
} finally {
  await browser.close()
}
