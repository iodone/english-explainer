#!/usr/bin/env node
/**
 * Build one lesson as one file:// HTML. Vite and Three.js come from the host
 * repository; the resulting page needs no server, package install, or network.
 */
import { existsSync } from 'node:fs'
import { readFile, writeFile, mkdir } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { build, createServer } from 'vite'
import react from '@vitejs/plugin-react'

const HERE = path.dirname(fileURLToPath(import.meta.url))
const SKILL = path.resolve(HERE, '..')
const ROOT = path.resolve(SKILL, '../../..')
const args = process.argv.slice(2)
const option = name => {
  const index = args.indexOf(`--${name}`)
  return index >= 0 ? args[index + 1] : undefined
}
const target = args.find(arg => !arg.startsWith('--') && args[args.indexOf(arg) - 1] !== '--out')
const entry = path.resolve(target || path.join(SKILL, 'examples/iron/main.js'))
const out = path.resolve(option('out') || path.join(ROOT, 'english-explain-out/dist', `${path.basename(path.dirname(entry))}.html`))
if (!existsSync(entry)) throw new Error(`No lesson entry: ${entry}`)

function validateLesson(lesson, shapes) {
  const fail = message => { throw new Error(`${lesson.id || entry}: ${message}`) }
  if (!lesson?.id || !lesson.simpleName || !lesson.realName) fail('needs id, simpleName, and realName')
  if (!Array.isArray(lesson.parts) || !lesson.parts.length) fail('needs at least one part')
  if (!Array.isArray(lesson.article) || !lesson.article.length) fail('needs a structured article')
  if (!Array.isArray(lesson.flow) || !lesson.flow.length) fail('needs flow steps')
  if (!Array.isArray(shapes) || !shapes.length) fail('needs at least one shape')
  const partIds = new Set(lesson.parts.map(part => part.id))
  if (partIds.size !== lesson.parts.length) fail('part ids must be unique')
  const linked = new Set()
  const geometryParts = new Set(shapes.map(shape => shape.partId))
  const sentences = lesson.article.flatMap(paragraph => paragraph.sentences)
  for (const sentence of sentences) {
    for (const segment of sentence) {
      if (typeof segment === 'string') continue
      if (segment.part && !partIds.has(segment.part)) fail(`article links unknown part ${segment.part}`)
      if (segment.part) linked.add(segment.part)
    }
  }
  for (const part of lesson.parts) {
    if (!linked.has(part.id)) fail(`part ${part.id} has no phrase in the article`)
    if (!geometryParts.has(part.id)) fail(`part ${part.id} has no geometry`)
    if (!lesson.partExplanations?.[part.id]?.trim()) fail(`part ${part.id} has no simple-words explanation`)
  }
  for (const [index, step] of lesson.flow.entries()) {
    if (!step.partIds?.length || step.partIds.some(id => !partIds.has(id))) fail(`flow[${index}] has an unknown part`)
    if (!Number.isInteger(step.sentenceRef) || !sentences[step.sentenceRef]) fail(`flow[${index}] has a bad sentenceRef`)
    if (!step.caption?.trim()) fail(`flow[${index}] has no caption`)
  }
  for (const [index, step] of (lesson.tour || []).entries()) {
    if (step.partIds.some(id => !partIds.has(id))) fail(`tour[${index}] has an unknown part`)
    if (!sentences[step.sentenceRef]) fail(`tour[${index}] has a bad sentenceRef`)
    if (!step.caption?.trim()) fail(`tour[${index}] has no caption`)
  }
  for (const [index, shape] of shapes.entries()) {
    if (!partIds.has(shape.partId)) fail(`shape[${index}] links unknown part ${shape.partId}`)
    if (!['box', 'cylinder', 'sphere', 'rod'].includes(shape.type)) fail(`shape[${index}] has unknown type ${shape.type}`)
  }
  return { sentences: sentences.length, parts: partIds.size }
}

let server
try {
  server = await createServer({
    root: ROOT,
    configFile: false,
    logLevel: 'error',
    server: { middlewareMode: true, watch: null },
    appType: 'custom',
  })
  const loaded = await server.ssrLoadModule(entry)
  const lesson = loaded.lesson || loaded.default
  const shapes = loaded.shapes || []
  const counts = validateLesson(lesson, shapes)

  // Bundle the tiny boot module alongside the real entry, preserving the named shapes export.
  const bootResult = await build({
    root: ROOT,
    configFile: false,
    logLevel: 'warn',
    plugins: [react()],
    build: {
      write: false,
      target: 'es2020',
      minify: 'oxc',
      rollupOptions: {
        input: path.join(SKILL, 'scripts/boot.js'),
        output: { format: 'iife' },
        plugins: [{
          name: 'english-explain-entry',
          resolveId(source) {
            if (source === 'english-explain:lesson') return entry
            return null
          },
        }],
      },
    },
  })
  const bootOutputs = Array.isArray(bootResult) ? bootResult.flatMap(item => item.output) : bootResult.output
  const bootBundle = bootOutputs.find(item => item.type === 'chunk' && item.isEntry)
  if (!bootBundle) throw new Error('Vite did not produce the boot bundle')
  const css = await readFile(path.join(SKILL, 'style.css'), 'utf8')
  const template = await readFile(path.join(SKILL, 'page.html'), 'utf8')
  const safeTitle = lesson.simpleName.replace(/[&<>]/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;' })[char])
  const html = template
    .replace('__TITLE__', `${safeTitle} / ${safeTitle === lesson.realName ? 'Word → Object' : lesson.realName}`)
    .replace('__CSS__', () => css)
    .replace('__BUNDLE__', () => bootBundle.code.replace(/<\/script/gi, '<\\/script'))
    // Third-party shader sources keep their own whitespace; strip only line ends
    // so the generated artifact is safe under git diff --check.
    .split('\n').map(line => line.replace(/[ \t]+$/g, '').replace(/^[ \t]+/, '')).join('\n')
  await mkdir(path.dirname(out), { recursive: true })
  await writeFile(out, html)
  console.log(`${out}  ${(Buffer.byteLength(html) / 1024).toFixed(0)} KB`)
  console.log(`✓ ${counts.parts} parts linked · ${counts.sentences} sentences · ${lesson.flow.length} flow steps · offline bundle`)
} finally {
  await server?.close()
}
