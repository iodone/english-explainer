import * as THREE from 'three'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'
import { UI } from './ui.js'

const FINISH = {
  hull: { face: '#6E6C64', opacity: 0.12 },
  cold: { face: '#96999D', opacity: 0.14 },
  titanium: { face: '#D9D5C9', opacity: 0.18 },
  warning: { face: '#E8453C', opacity: 0.28 },
}

const text = (tag, className, value) => {
  const node = document.createElement(tag)
  if (className) node.className = className
  node.textContent = value
  return node
}

const sentencesOf = lesson => lesson.article.flatMap(p => p.sentences)
const plainSentence = sentence => sentence.map(seg => typeof seg === 'string' ? seg : seg.text).join('')
const wordCount = lesson => sentencesOf(lesson).map(plainSentence).join(' ').split(/\s+/).filter(Boolean).length

/** The one selection state drives the drawing, article, explanation, and counters. */
export function runEnglishExplain(lesson, shapes = []) {
  const app = document.querySelector('#app')
  const ui = { ...UI, ...lesson.ui }
  const query = new URLSearchParams(location.search)
  const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)').matches
  const sentences = sentencesOf(lesson)
  const dictionary = lesson.dictionary || {}
  const accent = new THREE.Color(lesson.color || '#3ECFCF').multiplyScalar(0.68)
  const accentHex = `#${accent.getHexString()}`
  const state = {
    partId: null,
    sentenceIndex: null,
    dictKey: null,
    tour: false,
    tourIndex: -1,
  }

  app.innerHTML = `
    <main class="lesson-shell">
      <header class="lesson-header">
        <div class="title-block">
          <div class="micro">${ui.fieldNotes}</div>
          <h1></h1>
          <p class="real-name"></p>
        </div>
        <dl class="lesson-stats" aria-label="${ui.facts}">
          <div><dt>${ui.parts}</dt><dd data-stat="parts"></dd></div>
          <div><dt>${ui.lines}</dt><dd data-stat="sentences"></dd></div>
          <div><dt>${ui.words}</dt><dd data-stat="words"></dd></div>
          <div><dt>${ui.steps}</dt><dd data-stat="steps"></dd></div>
        </dl>
      </header>
      <section class="learning-grid">
        <aside class="hud-panel sentence-panel" aria-label="${ui.currentReading}">
          <div class="panel-heading">${ui.reading} <span data-current-sentence></span></div>
          <blockquote data-reading></blockquote>
          <div class="panel-heading">${ui.parts}</div>
          <div class="part-index" data-part-index></div>
          <p class="panel-note">A name in the text and a part in the drawing share one light.</p>
        </aside>
        <section class="model-panel" aria-label="${ui.drawing}">
          <div class="model-topline"><span>${ui.liveDrawing}</span><span data-model-part>${ui.wholeThing}</span></div>
          <div class="canvas-wrap" data-canvas-wrap></div>
          <div class="model-help">${ui.drawingHelp}</div>
        </section>
        <aside class="hud-panel explain-panel" aria-live="polite">
          <div class="panel-heading">${ui.simpleWords} <span data-part-number></span></div>
          <div data-explanation></div>
          <div class="panel-heading dictionary-heading">WORD CARD</div>
          <div data-dictionary><p class="muted">${ui.dictionaryHint}</p></div>
        </aside>
      </section>
      <section class="article-panel">
        <div class="article-heading"><span>${ui.readWords}</span><span data-active-part>${ui.touchPart}</span></div>
        <article data-article></article>
      </section>
      <footer class="tour-bar">
        <button type="button" class="tour-button" data-tour-toggle>${ui.showMe}</button>
        <button type="button" class="step-button" data-tour-prev aria-label="${ui.lastStep}">←</button>
        <div class="tour-copy"><span data-tour-status>${ui.touchWordOrPart}</span><p data-tour-caption></p></div>
        <span class="tour-count" data-tour-count></span>
        <button type="button" class="step-button" data-tour-next aria-label="${ui.nextStep}">→</button>
      </footer>
    </main>`

  app.querySelector('h1').textContent = lesson.simpleName
  app.querySelector('.real-name').textContent = lesson.realName.toUpperCase()
  app.querySelector('[data-stat="parts"]').textContent = String(lesson.parts.length).padStart(2, '0')
  app.querySelector('[data-stat="sentences"]').textContent = String(sentences.length).padStart(2, '0')
  app.querySelector('[data-stat="words"]').textContent = String(wordCount(lesson))
  app.querySelector('[data-stat="steps"]').textContent = String(lesson.flow.length).padStart(2, '0')
  app.style.setProperty('--accent', accentHex)

  const partIndex = app.querySelector('[data-part-index]')
  lesson.parts.forEach((part, index) => {
    const button = text('button', 'part-index-button', '')
    button.type = 'button'
    button.dataset.partId = part.id
    button.append(text('span', 'part-number', String(index + 1).padStart(2, '0')))
    const names = text('span', 'part-names', '')
    names.append(text('b', '', part.label), text('small', '', part.realName))
    button.append(names)
    button.addEventListener('click', () => {
      takeOver()
      selectPart(part.id)
    })
    partIndex.append(button)
  })

  const article = app.querySelector('[data-article]')
  const sentenceNodes = []
  const wordNodes = []
  let sentenceIndex = 0
  for (const paragraph of lesson.article) {
    const p = document.createElement('p')
    for (const sentence of paragraph.sentences) {
      const currentSentence = sentenceIndex++
      const span = text('span', 'sentence', '')
      span.dataset.sentence = String(currentSentence)
      sentenceNodes[currentSentence] = span
      sentence.forEach(seg => {
        if (typeof seg === 'string') {
          span.append(document.createTextNode(seg))
          return
        }
        const word = text('button', seg.part ? 'word-part' : 'word-new', seg.text)
        word.type = 'button'
        if (seg.part) word.dataset.partId = seg.part
        if (seg.dict) word.dataset.dictKey = seg.dict
        word.addEventListener('click', () => {
          takeOver()
          if (seg.part) selectPart(seg.part, currentSentence, false, false)
          if (seg.dict) showDictionary(seg.dict)
        })
        wordNodes.push(word)
        span.append(word)
      })
      span.append(document.createTextNode(' '))
      p.append(span)
    }
    article.append(p)
  }

  function showDictionary(key) {
    state.dictKey = key
    const entry = dictionary[key]
    const target = app.querySelector('[data-dictionary]')
    target.replaceChildren()
    if (!entry) {
      target.append(text('p', 'muted', key))
      return
    }
    const head = text('div', 'dict-head', '')
    head.append(text('strong', '', entry.word), text('span', 'phonetic', entry.phonetic))
    target.append(head, text('p', 'dict-pos', entry.pos), text('p', 'dict-meaning', entry.meaning))
    if (entry.breakdown?.length) {
      const list = text('dl', 'breakdown', '')
      for (const item of entry.breakdown) {
        list.append(text('dt', '', item.part), text('dd', '', item.gloss))
      }
      target.append(list)
    }
  }

  function selectPart(partId, linkedSentence = null, fromTour = false, shouldScroll = true) {
    const part = lesson.parts.find(p => p.id === partId)
    if (!part) return
    state.partId = partId
    state.sentenceIndex = linkedSentence ?? sentences.findIndex(sentence =>
      sentence.some(seg => typeof seg !== 'string' && seg.part === partId))
    const index = lesson.parts.indexOf(part)
    app.querySelector('[data-model-part]').textContent = part.label.toUpperCase()
    app.querySelector('[data-active-part]').textContent = `${part.label.toUpperCase()} / ${part.realName.toUpperCase()}`
    app.querySelector('[data-current-sentence]').textContent = state.sentenceIndex >= 0 ? `S${String(state.sentenceIndex + 1).padStart(2, '0')}` : ''
    app.querySelector('[data-part-number]').textContent = `PART ${String(index + 1).padStart(2, '0')}`
    const explanation = app.querySelector('[data-explanation]')
    explanation.replaceChildren(
      text('h2', '', part.label),
      text('p', 'explanation-real-name', part.realName),
      text('p', 'simple-explanation', lesson.partExplanations[partId]),
    )
    if (!fromTour) app.querySelector('[data-tour-caption]').textContent = lesson.partExplanations[partId]
    updateHighlight()
    const sentenceNode = sentenceNodes[state.sentenceIndex]
    if (sentenceNode && !fromTour && shouldScroll) sentenceNode.scrollIntoView({ behavior: reducedMotion ? 'instant' : 'smooth', block: 'nearest' })
  }

  function updateHighlight() {
    for (const node of wordNodes) node.classList.toggle('word-active', node.dataset.partId === state.partId)
    for (const node of partIndex.children) node.classList.toggle('active', node.dataset.partId === state.partId)
    sentenceNodes.forEach((node, index) => node.classList.toggle('sentence-active', index === state.sentenceIndex))
    app.querySelector('[data-reading]').textContent = state.sentenceIndex >= 0 ? plainSentence(sentences[state.sentenceIndex]) : plainSentence(sentences[0])
    scene.updateSelection(state.partId)
  }

  // A part is a group, not one mesh: selecting it must light every piece that belongs to it.
  const wrap = app.querySelector('[data-canvas-wrap]')
  const canvas = document.createElement('canvas')
  canvas.setAttribute('aria-label', `${lesson.realName} parts drawing`)
  wrap.append(canvas)
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: false })
  renderer.setPixelRatio(Math.min(devicePixelRatio || 1, 1.75))
  renderer.setClearColor('#F4F1EA')
  const threeScene = new THREE.Scene()
  threeScene.background = new THREE.Color('#F4F1EA')
  const camera = new THREE.PerspectiveCamera(38, 1, 0.01, 100)
  const controls = new OrbitControls(camera, canvas)
  controls.enableDamping = true
  controls.dampingFactor = 0.06
  controls.autoRotate = !reducedMotion && !query.has('capture')
  controls.autoRotateSpeed = 0.32
  const model = new THREE.Group()
  threeScene.add(model)
  const partGroups = new Map()
  const pickable = []

  function groupFor(partId) {
    if (!partGroups.has(partId)) {
      const group = new THREE.Group()
      group.name = partId
      group.userData.partId = partId
      partGroups.set(partId, group)
      model.add(group)
    }
    return partGroups.get(partId)
  }

  function addMesh(partId, geometry, spec) {
    const part = lesson.parts.find(p => p.id === partId)
    if (!part) throw new Error(`Geometry names unknown part: ${partId}`)
    const role = part.finish || 'hull'
    const base = FINISH[role] || FINISH.hull
    const mesh = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({
      color: base.face,
      transparent: true,
      opacity: base.opacity,
      depthWrite: false,
      side: THREE.DoubleSide,
    }))
    mesh.position.fromArray(spec.position || [0, 0, 0])
    mesh.rotation.set(...(spec.rotation || [0, 0, 0]))
    mesh.scale.fromArray(spec.scale || [1, 1, 1])
    mesh.userData.partId = partId
    const edges = new THREE.LineSegments(
      new THREE.EdgesGeometry(geometry, 12),
      new THREE.LineBasicMaterial({ color: role === 'warning' ? '#E8453C' : '#2C2A25', transparent: true, opacity: 0.82 }),
    )
    mesh.add(edges)
    groupFor(partId).add(mesh)
    pickable.push(mesh)
    return mesh
  }

  for (const spec of shapes) {
    let geometry
    if (spec.type === 'box') geometry = new THREE.BoxGeometry(...spec.args)
    else if (spec.type === 'cylinder') geometry = new THREE.CylinderGeometry(...spec.args)
    else if (spec.type === 'sphere') geometry = new THREE.SphereGeometry(...spec.args)
    else if (spec.type === 'rod') {
      const from = new THREE.Vector3(...spec.from)
      const to = new THREE.Vector3(...spec.to)
      const direction = to.clone().sub(from)
      const mesh = addMesh(spec.partId, new THREE.CylinderGeometry(spec.radius || 0.02, spec.radius || 0.02, direction.length(), 6), {
        position: from.clone().add(to).multiplyScalar(0.5).toArray(),
      })
      mesh.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), direction.normalize())
      continue
    } else throw new Error(`Unknown shape type: ${spec.type}`)
    addMesh(spec.partId, geometry, spec)
  }

  const bounds = new THREE.Box3().setFromObject(model)
  if (lesson.ground !== false) {
    const grid = new THREE.GridHelper(8, 32, '#B9B1A1', '#D8D1C4')
    grid.position.y = bounds.min.y - 0.03
    grid.material.transparent = true
    grid.material.opacity = 0.24
    threeScene.add(grid)
  }
  const center = bounds.getCenter(new THREE.Vector3())
  const size = bounds.getSize(new THREE.Vector3())
  const radius = Math.max(size.x, size.y, size.z)
  camera.position.set(center.x + radius * 0.85, center.y + radius * 0.55, center.z + radius * 1.05)
  controls.target.copy(center)
  controls.minDistance = radius * 0.65
  controls.maxDistance = radius * 5
  controls.update()

  const labelNodes = new Map()
  for (const part of lesson.parts) {
    const label = text('button', 'part-label', `${part.label} / ${part.realName}`)
    label.type = 'button'
    label.dataset.partId = part.id
    label.addEventListener('click', () => {
      takeOver()
      selectPart(part.id)
    })
    wrap.append(label)
    labelNodes.set(part.id, label)
  }
  function projectPart(partId) {
    const group = partGroups.get(partId)
    if (!group) return null
    const point = new THREE.Box3().setFromObject(group).getCenter(new THREE.Vector3()).project(camera)
    const rect = canvas.getBoundingClientRect()
    return {
      x: rect.left + (point.x * 0.5 + 0.5) * rect.width,
      y: rect.top + (-point.y * 0.5 + 0.5) * rect.height,
    }
  }
  function updateLabels() {
    const occupied = []
    const ordered = [...lesson.parts].sort((a, b) => Number(b.id === state.partId) - Number(a.id === state.partId))
    for (const part of ordered) {
      const label = labelNodes.get(part.id)
      const point = projectPart(part.id)
      const rect = canvas.getBoundingClientRect()
      if (!point) { label.style.display = 'none'; continue }
      const width = label.offsetWidth || 150
      const height = label.offsetHeight || 30
      let found = null
      for (const dy of [0, -38, 38, -76, 76]) {
        const x = Math.max(rect.left + 8, Math.min(point.x + 12, rect.right - width - 8))
        const y = Math.max(rect.top + 40, Math.min(point.y + dy, rect.bottom - height - 32))
        const candidate = { left: x, right: x + width, top: y, bottom: y + height }
        if (!occupied.some(r => candidate.left < r.right + 5 && candidate.right > r.left - 5 && candidate.top < r.bottom + 5 && candidate.bottom > r.top - 5)) {
          found = { x, y, candidate }
          break
        }
      }
      label.style.display = found ? '' : 'none'
      if (found) {
        occupied.push(found.candidate)
        label.style.left = `${found.x - rect.left}px`
        label.style.top = `${found.y - rect.top}px`
      }
      label.classList.toggle('active', part.id === state.partId)
    }
  }

  const raycaster = new THREE.Raycaster()
  const pointer = new THREE.Vector2()
  let pointerDown = null
  canvas.addEventListener('pointerdown', event => {
    takeOver()
    pointerDown = { x: event.clientX, y: event.clientY }
  })
  canvas.addEventListener('wheel', takeOver, { passive: true })
  canvas.addEventListener('pointerup', event => {
    const down = pointerDown
    pointerDown = null
    if (!down || Math.hypot(event.clientX - down.x, event.clientY - down.y) > 5) return
    const rect = canvas.getBoundingClientRect()
    pointer.set(((event.clientX - rect.left) / rect.width) * 2 - 1, -((event.clientY - rect.top) / rect.height) * 2 + 1)
    raycaster.setFromCamera(pointer, camera)
    const hit = raycaster.intersectObjects(pickable, false)[0]
    if (hit) selectPart(hit.object.userData.partId)
  })

  const scene = {
    updateSelection(partId) {
      for (const [id, group] of partGroups) {
        group.traverse(node => {
          if (!node.isMesh) return
          const part = lesson.parts.find(p => p.id === id)
          const base = FINISH[part.finish || 'hull'] || FINISH.hull
          const selected = id === partId
          node.material.color.set(selected ? accent : base.face)
          node.material.opacity = selected ? 0.36 : base.opacity
          const edges = node.children.find(child => child.isLineSegments)
          if (edges) {
            edges.material.color.set(selected ? accent : part.finish === 'warning' ? '#E8453C' : '#2C2A25')
            edges.material.opacity = selected ? 1 : partId ? 0.42 : 0.82
          }
        })
      }
    },
  }

  function resize() {
    const width = wrap.clientWidth
    const height = wrap.clientHeight
    renderer.setSize(width, height, false)
    camera.aspect = width / Math.max(height, 1)
    camera.updateProjectionMatrix()
  }
  const resizeObserver = new ResizeObserver(resize)
  resizeObserver.observe(wrap)
  resize()

  let lastInput = performance.now()
  let lastTourChange = performance.now()
  const idleMs = Number(query.get('idle') || 15000)
  const stepMs = Number(query.get('step') || 4600)
  const tourSteps = lesson.tour || lesson.flow
  function showTourStep(index) {
    const step = tourSteps[index]
    if (!step) return
    state.tourIndex = index
    state.tour = true
    lastTourChange = performance.now()
    selectPart(step.partIds[0], step.sentenceRef, true)
    app.querySelector('[data-tour-status]').textContent = `${ui.showMe} / ${step.kind === 'link' ? ui.wordFindsPart : ui.followWork}`
    app.querySelector('[data-tour-caption]').textContent = step.caption
    app.querySelector('[data-tour-count]').textContent = `${String(index + 1).padStart(2, '0')} / ${String(tourSteps.length).padStart(2, '0')}`
    app.querySelector('[data-tour-toggle]').textContent = ui.yourTurn
    app.querySelector('[data-tour-toggle]').classList.add('running')
  }
  function startTour() {
    lastInput = performance.now()
    showTourStep((state.tourIndex + 1) % tourSteps.length)
  }
  function takeOver() {
    lastInput = performance.now()
    if (!state.tour) return
    state.tour = false
    app.querySelector('[data-tour-status]').textContent = `${ui.yourTurn} / ${ui.touchWordOrPart}`
    app.querySelector('[data-tour-toggle]').textContent = ui.showMeAgain
    app.querySelector('[data-tour-toggle]').classList.remove('running')
  }
  app.querySelector('[data-tour-toggle]').addEventListener('click', () => {
    if (state.tour) takeOver()
    else startTour()
  })
  app.querySelector('[data-tour-prev]').addEventListener('click', () => showTourStep((state.tourIndex - 1 + tourSteps.length) % tourSteps.length))
  app.querySelector('[data-tour-next]').addEventListener('click', () => showTourStep((state.tourIndex + 1) % tourSteps.length))
  addEventListener('keydown', event => {
    if (event.target instanceof HTMLButtonElement) return
    if (event.key === 'ArrowRight') showTourStep((state.tourIndex + 1) % tourSteps.length)
    else if (event.key === 'ArrowLeft') showTourStep((state.tourIndex - 1 + tourSteps.length) % tourSteps.length)
    else if (event.key === ' ') {
      if (state.tour) takeOver()
      else startTour()
    }
    else return
    event.preventDefault()
  })

  let firstFrame = true
  function frame(now) {
    if (state.tour && now - lastTourChange >= stepMs) showTourStep((state.tourIndex + 1) % tourSteps.length)
    if (!state.tour && !reducedMotion && now - lastInput > idleMs) startTour()
    controls.update()
    renderer.render(threeScene, camera)
    updateLabels()
    if (firstFrame) {
      firstFrame = false
      document.body.dataset.ready = 'true'
    }
    requestAnimationFrame(frame)
  }

  selectPart(lesson.parts[0].id, lesson.flow[0]?.sentenceRef ?? 0, true)
  showDictionary(Object.keys(dictionary)[0])
  updateHighlight()
  requestAnimationFrame(frame)
  if (!reducedMotion && !query.has('tour') && !query.has('capture')) startTour()

  // Stable, read-mostly automation contract; the walkthrough uses real clicks for both directions.
  window.ENGLISH_EXPLAIN = {
    ready: true,
    lesson,
    getState: () => ({ ...state }),
    selectPart,
    startTour,
    takeOver,
    showTourStep,
    projectPart,
  }
}
