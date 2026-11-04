// Built with teardown-kit's runSim/createStage, not the english-explain runtime.
// Upstream: https://github.com/elvarofficial/teardown (MIT).
import * as THREE from 'three';
import {runSim} from './runtime.js';
import {createStage} from './stage3d.js';

const PARTS = [
  {id: 'hot-bottom', label: 'HOT BOTTOM', real: 'SOLEPLATE', point: [-.15, -.52, .23], sentence: 3,
    explain: 'A thick piece of metal. Its heat and weight press the little lines in cloth back into a flat shape.'},
  {id: 'heat-maker', label: 'HEAT MAKER', real: 'HEATING ELEMENT', point: [0, -.13, .23], sentence: 11,
    explain: 'A wire that gets hot when power runs through it. It warms the thick metal bottom.'},
  {id: 'water-room', label: 'WATER ROOM', real: 'WATER TANK', point: [.05, -.28, .23], sentence: 7,
    explain: 'A room that holds water inside the iron. The water runs down toward the hot metal.'},
  {id: 'steam-holes', label: 'STEAM HOLES', real: 'STEAM VENTS', point: [-.15, -.63, .23], sentence: 8,
    explain: 'Little openings in the bottom. Water becomes steam there and goes up into the cloth.'},
  {id: 'hand-holder', label: 'HAND HOLDER', real: 'HANDLE', point: [.02, .24, 0], sentence: 0,
    explain: 'A cool place for your hand. Your hand pushes down, but the heavy bottom does most of the work.'},
  {id: 'heat-wheel', label: 'HEAT WHEEL', real: 'THERMOSTAT DIAL', point: [-.45, -.28, .25], sentence: 11,
    explain: 'A wheel that sets how hot the iron gets. It turns the heat maker off and on.'},
  {id: 'power-wire', label: 'POWER WIRE', real: 'POWER CORD', point: [1.15, .12, 0], sentence: 12,
    explain: 'A wire that brings power from the wall to the heat maker.'},
];
const ARTICLE = [
  ['An ', 'iron', ' is a hot, heavy piece of metal with a ', 'hand holder', ' — made to press the lines out of cloth.'],
  ['The heart of the machine is its ', 'hot bottom', ': a thick plate of metal that grows very hot.'],
  ['Most irons also hold water, in a small ', 'water room', ' hidden inside the body. The water runs down to a line of ', 'steam holes', ' in the bottom.'],
  ['A ', 'heat wheel', ' sets how hot. Two different metals bend as they warm and turn the ', 'heat maker', ' off before things get too hot.'],
  ['The ', 'power wire', ' brings power from the wall to the heat maker. Power running through it makes it hot.'],
];
const LINK = Object.fromEntries(['iron', 'hand holder', 'hot bottom', 'water room', 'steam holes', 'heat wheel', 'heat maker', 'power wire'].map(k => [k, k]));
const WORD_PART = Object.fromEntries(PARTS.map(p => [p.label.toLowerCase(), p.id]));
const WORD_SENTENCE = {iron: 0, 'hand holder': 0, 'hot bottom': 1, 'water room': 2, 'steam holes': 2, 'heat wheel': 3, 'heat maker': 3, 'power wire': 4};
const DURATION = 36;
const DEFAULTS = {
  duration: DURATION, fps: 30, seed: 7, theme: 'light', accent: '#0E7C7B',
  hud: {
    enabled: true, title: 'CLOTH PRESSER', subtitle: '/ SIMPLE WORDS', right: 'WORD → PART / LIVE',
    host: 'SIMPLE ENGLISH', path: 'touch a word · find its part', sideTitle: 'PART EXPLANATION', logRows: 4,
  },
  stages: [
    {at: 0, name: 'FIND', cmd: 'word: hot bottom', logs: ['The words light up.', 'The same part answers in the drawing.', '!One word. One part.']},
    {at: 6, name: 'HEAT', cmd: 'part: heat maker', logs: ['Power runs through the wire.', 'The thick metal bottom grows hot.', '!Heat + weight → flat cloth.']},
    {at: 12, name: 'WATER', cmd: 'part: water room', logs: ['Water runs down inside the iron.', 'It touches the hot metal.', '!Water → steam → into cloth.']},
    {at: 18, name: 'HOLD', cmd: 'part: hand holder', logs: ['Your hand has a cool place to hold.', 'The heavy bottom does most of the work.', '!A simple name tells you its job.']},
    {at: 24, name: 'CONTROL', cmd: 'part: heat wheel', logs: ['Two metals bend as they warm.', 'The heat turns off and on.', '!Not too hot.']},
    {at: 30, name: 'POWER', cmd: 'part: power wire', logs: ['Power comes from the wall.', 'The heat maker does the rest.', '!Now touch any word yourself.']},
  ],
  director: {enabled: false},
};

const smooth = x => {const u = Math.max(0, Math.min(1, x)); return u * u * (3 - 2 * u);};
const TOUR = [
  {at: 0, id: 'hot-bottom'},
  {at: 6, id: 'heat-maker'},
  {at: 9, id: 'power-wire'},
  {at: 12, id: 'water-room'},
  {at: 15, id: 'steam-holes'},
  {at: 18, id: 'hand-holder'},
  {at: 24, id: 'heat-wheel'},
  {at: 30, id: 'power-wire'},
  {at: 33, id: 'heat-maker'},
];
const partAt = t => {
  let step = TOUR[0];
  for (const next of TOUR) if (next.at <= t) step = next;
  return PARTS.find(part => part.id === step.id);
};

// Static lesson data lets the repository's --entry gate inspect this demo in
// Node without starting teardown. Every tour command and log is checked here.
const markedArticle = ARTICLE.map(tokens => tokens.map(token => {
  if (WORD_PART[token]) return {text: token, part: WORD_PART[token]};
  if (token === 'iron') return {text: token, dict: 'iron'};
  return token;
}));
export const lesson = {
  id: 'teardown-iron',
  slug: 'teardown-iron',
  simpleName: 'Cloth Presser',
  realName: 'Iron',
  category: 'home',
  color: '#0E7C7B',
  parts: PARTS.map(part => ({id: part.id, label: part.label, realName: part.real, position: part.point})),
  article: [{sentences: markedArticle}],
  flow: DEFAULTS.stages.map((stage, index) => ({
    partIds: [TOUR.find(step => step.at === stage.at)?.id || 'hot-bottom'],
    caption: [stage.cmd, ...stage.logs].join(' '),
    sentenceRef: index === 0 ? 1 : Math.min(index, ARTICLE.length - 1),
  })),
  keyExpressions: PARTS.map(part => ({text: part.label.toLowerCase(), partId: part.id})),
  funFacts: [],
  partExplanations: Object.fromEntries(PARTS.map(part => [part.id, part.explain])),
  tour: DEFAULTS.stages.map((stage, index) => ({
    partIds: [TOUR.find(step => step.at === stage.at)?.id || 'hot-bottom'],
    caption: [stage.cmd, ...stage.logs].join(' '),
    sentenceRef: index === 0 ? 1 : Math.min(index, ARTICLE.length - 1),
  })),
};
export default lesson;

function createLesson(app) {
  const style = document.createElement('style');
  style.textContent = `
    :root{--bg:#F4F1EA;--fg:#2C2A25;--dim:rgba(44,42,37,.68);--mute:rgba(44,42,37,.45);--line:rgba(44,42,37,.17);--panel:rgba(244,241,234,.95);--top:12rem;--bot:29rem}
    body{background:#F4F1EA}#gl{background:#F4F1EA}
    #app{font-family:Inter,system-ui,sans-serif}
    #app:after{content:'';position:absolute;inset:0;pointer-events:none;background-image:linear-gradient(rgba(180,170,155,.10) 1px,transparent 1px),linear-gradient(90deg,rgba(180,170,155,.10) 1px,transparent 1px);background-size:40px 40px;z-index:-1}
    .hdr .title{font-family:Newsreader,Georgia,serif;font-weight:500;letter-spacing:-.02em}.hdr .title .bar{width:.35rem}
    .bot{padding:1.7rem 2.8rem 2.5rem}.logs{font-family:Newsreader,Georgia,serif;font-size:1.8rem;line-height:1.25;margin-top:.8rem}.logs .ln{font-family:'JetBrains Mono',monospace;font-size:1.2rem;width:4rem}.prompt{font-family:'JetBrains Mono',monospace;font-size:1.4rem;margin-top:1.1rem}.tfoot{font-size:1rem}
    .side{width:38%;padding-top:0}.side .shead{display:none}.stats{margin-top:auto;gap:.5rem 1.4rem}.stats b{font-family:Newsreader,Georgia,serif;font-size:2.1rem;font-weight:500}.sfoot{display:none}
    .article{position:absolute;left:2.8rem;right:2.8rem;top:12.4rem;bottom:30rem;display:flex;align-items:flex-end;justify-content:space-between;pointer-events:none}
    .sentence{max-width:49rem;padding:1.2rem 1.5rem;background:rgba(244,241,234,.92);border-left:.25rem solid var(--accent);font:2.05rem/1.4 Newsreader,Georgia,serif;box-shadow:0 0 2rem #F4F1EA}
    .sentence button,.article button{pointer-events:auto;border:0;border-bottom:1px dashed #0E7C7B;background:none;color:#0E7C7B;font:inherit;padding:0;cursor:pointer}
    .takeover{pointer-events:auto;cursor:pointer;align-self:flex-start;border:1px solid var(--line);background:var(--panel);padding:1rem 1.4rem;font:1.25rem 'JetBrains Mono',monospace;letter-spacing:.08em}
    .part-name{font:500 2.8rem/1 Newsreader,Georgia,serif;color:var(--fg);margin:.6rem 0 .3rem}.part-real{font-size:1rem;letter-spacing:.13em;color:var(--mute)}
    .part-explain{font:1.65rem/1.3 Newsreader,Georgia,serif;margin:.8rem 0}.side .mini{display:none}
    .word-hint{font-size:1.1rem;color:var(--mute);margin-top:1rem;line-height:1.6}.word-hint b{color:#0E7C7B;font-weight:500}
    .ann div{font-size:1.35rem;background:rgba(244,241,234,.88);padding:.45rem .6rem}.ann div.a{color:#0E7C7B}
    .tour-cursor{position:absolute;width:2rem;height:2rem;border:1px solid var(--accent);border-radius:50%;pointer-events:none;opacity:0;z-index:30}
  `;
  document.head.append(style);
  app.insertAdjacentHTML('beforeend', `<div class="article"><div class="sentence"></div><button class="takeover">AUTO TOUR · TAKE OVER</button></div><div class="tour-cursor"></div>`);
  const sentence = app.querySelector('.sentence');
  const renderSentence = index => {
    sentence.replaceChildren();
    for (const token of ARTICLE[index]) {
      if (!LINK[token]) {sentence.append(token); continue;}
      const b = document.createElement('button');
      b.textContent = token;
      b.dataset.word = token;
      b.style.background = 'rgba(62,207,207,.20)';
      b.onclick = () => window.LESSON.selectWord(token);
      sentence.append(b);
    }
  };
  return {sentence, renderSentence, cursor: app.querySelector('.tour-cursor'), takeover: app.querySelector('.takeover')};
}

function createIron(scene) {
  const groups = new Map();
  const pickable = [];
  const groupFor = id => {
    if (!groups.has(id)) {const g = new THREE.Group(); groups.set(id, g); scene.add(g);}
    return groups.get(id);
  };
  const mesh = (id, geometry, pos, rot = [0, 0, 0]) => {
    const m = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({color: '#96999D', transparent: true, opacity: .13, depthWrite: false, side: THREE.DoubleSide}));
    m.position.set(...pos); m.rotation.set(...rot); m.userData.partId = id;
    const edge = new THREE.LineSegments(new THREE.EdgesGeometry(geometry), new THREE.LineBasicMaterial({color: '#2C2A25', transparent: true, opacity: .8}));
    m.add(edge); groupFor(id).add(m); pickable.push(m); return m;
  };
  const box = (id, size, pos, rot) => mesh(id, new THREE.BoxGeometry(...size), pos, rot);
  const rod = (id, a, b) => {
    const from = new THREE.Vector3(...a), to = new THREE.Vector3(...b), d = to.clone().sub(from);
    const m = mesh(id, new THREE.CylinderGeometry(.018, .018, d.length(), 6), from.add(to).multiplyScalar(.5).toArray());
    m.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), d.normalize());
  };
  box('hot-bottom', [1.3, .07, .4], [-.1, -.55, 0]); box('hot-bottom', [.35, .07, .4], [-.85, -.53, 0], [0, 0, -.12]);
  box('water-room', [1, .38, .36], [.05, -.28, 0]); box('heat-maker', [.9, .045, .05], [0, -.13, .19]);
  for (let i = 0; i < 5; i++) mesh('steam-holes', new THREE.CylinderGeometry(.015, .015, .04, 8), [-.55 + i * .25, -.60, 0], [Math.PI / 2, 0, 0]);
  box('hand-holder', [.05, .28, .05], [-.25, .05, 0]); box('hand-holder', [.05, .28, .05], [.3, .05, 0]); box('hand-holder', [.72, .06, .07], [.02, .22, 0], [0, 0, -.06]);
  mesh('heat-wheel', new THREE.CylinderGeometry(.09, .09, .04, 16), [-.45, -.28, .21], [Math.PI / 2, 0, 0]);
  rod('power-wire', [.55, -.2, 0], [.95, -.08, 0]); rod('power-wire', [.95, -.08, 0], [1.25, .18, 0]);
  const grid = new THREE.GridHelper(8, 32, '#B9B1A1', '#D8D1C4'); grid.position.y = -.68; grid.material.transparent = true; grid.material.opacity = .22; scene.add(grid);
  return {groups, pickable};
}

if (typeof window !== 'undefined') runSim(DEFAULTS, async ({canvas, hud, capture}) => {
  // teardown/capture.mjs also accepts HTML pages exposing window.seek/DURATION.
  // Keep that native capture contract while using runSim for the live clock.
  window.DURATION = DURATION;
  window.FPS = DEFAULTS.fps;
  window.seek = seconds => window.SIM?.render(Math.max(0, Math.min(DURATION - .001, seconds)));
  const st = createStage(canvas, hud, {bg: '#F4F1EA', fov: 36, bloom: {strength: .08, radius: .2, threshold: 1}, capture});
  st.renderer.toneMapping = THREE.NoToneMapping;
  const iron = createIron(st.scene);
  const ui = createLesson(document.querySelector('#app'));
  const side = document.querySelector('.side');
  side.insertAdjacentHTML('afterbegin', '<div class="part-real"></div><div class="part-name"></div><div class="part-explain"></div><div class="word-hint">SIMPLE NAME ↔ REAL NAME<br><b>Touch the words in the sentence.</b></div>');
  let selected = partAt(0);
  let manual = null;
  let manualAt = -100;
  let lastSentence = -1;
  const raycaster = new THREE.Raycaster();
  const pointer = new THREE.Vector2();
  const select = (part, fromUser = false) => {
    selected = part;
    if (fromUser) {manual = part; manualAt = performance.now() / 1000;}
    side.querySelector('.part-real').textContent = `${String(PARTS.indexOf(part) + 1).padStart(2, '0')} / ${part.real}`;
    side.querySelector('.part-name').textContent = part.label;
    side.querySelector('.part-explain').textContent = part.explain;
    const sentenceIndex = WORD_SENTENCE[part.label.toLowerCase()];
    if (lastSentence !== sentenceIndex) {
      ui.renderSentence(sentenceIndex);
      lastSentence = sentenceIndex;
    }
  };
  window.LESSON = {
    selectWord(word) {
      const id = WORD_PART[word];
      if (id) select(PARTS.find(p => p.id === id), true);
    },
    selectPart(id) {select(PARTS.find(p => p.id === id), true);},
    get selected() {return selected.id;},
  };
  ui.takeover.onclick = () => {manual = null; manualAt = -100;};
  let down = null;
  canvas.addEventListener('pointerdown', e => {down = {x: e.clientX, y: e.clientY}; manual = selected; manualAt = performance.now() / 1000;});
  canvas.addEventListener('pointermove', e => {
    if (e.buttons) {
      az -= e.movementX * .004;
      el = Math.max(.1, Math.min(1.2, el + e.movementY * .003));
      manualAt = performance.now() / 1000;
    }
  });
  canvas.addEventListener('wheel', e => {
    manual = selected;
    manualAt = performance.now() / 1000;
    distance = Math.max(2.3, Math.min(8, distance * Math.exp(e.deltaY * .001)));
  }, {passive: true});
  canvas.addEventListener('wheel', () => {manualAt = performance.now() / 1000;}, {passive: true});
  canvas.addEventListener('pointerup', e => {
    if (!down || Math.hypot(e.clientX - down.x, e.clientY - down.y) > 5) return;
    pointer.set(e.clientX / innerWidth * 2 - 1, -e.clientY / innerHeight * 2 + 1);
    raycaster.setFromCamera(pointer, st.camera);
    const hit = raycaster.intersectObjects(iron.pickable, false)[0];
    if (hit) select(PARTS.find(p => p.id === hit.object.userData.partId), true);
    down = null;
  });
  let az = .64, el = .42, distance = 4.0;
  const resize = () => st.resize();
  resize();
  select(selected);
  return {
    resize,
    render(t) {
      const auto = !manual && t % DURATION < DURATION - .01;
      if (!manual) select(partAt(t));
      else if (performance.now() / 1000 - manualAt > 15) manual = null;
      const currentAt = TOUR.filter(step => step.at <= t).at(-1)?.at || 0;
      const local = t - currentAt;
      const targetAz = .64 + .12 * Math.sin(t * .16);
      az += (targetAz - az) * .035;
      st.camera.position.set(Math.sin(az) * distance, Math.sin(el) * distance, Math.cos(az) * distance);
      if (capture) {az = .64; st.camera.position.set(Math.sin(az) * distance, Math.sin(el) * distance, Math.cos(az) * distance);}
      st.camera.lookAt(0, -.18, 0);
      st.camera.updateMatrixWorld();
      for (const [id, group] of iron.groups) {
        group.traverse(node => {
          if (!node.isMesh) return;
          const active = id === selected.id;
          node.material.color.set(active ? '#E8453C' : id === 'hot-bottom' ? '#D9D5C9' : '#96999D');
          node.material.opacity = active ? .34 : .13;
          const edge = node.children.find(c => c.isLineSegments);
          edge.material.color.set(active ? '#0E7C7B' : '#2C2A25');
          edge.material.opacity = active ? 1 : .72;
        });
      }
      st.render();
      const p = st.project(selected.point);
      const annotations = [{text: `${selected.label} / ${selected.real}`, x: p.x + 15, y: p.y - 12, cls: 'a'}];
      for (const other of PARTS) {
        if (other === selected) continue;
        const q = st.project(other.point);
        annotations.push({text: other.label, x: q.x + 10, y: q.y, cls: ''});
      }
      const k = smooth((local - 4.7) / 1.1);
      ui.cursor.style.opacity = auto && local > 4.7 ? 1 - k : 0;
      ui.cursor.style.left = `${p.x + 25 * k}px`; ui.cursor.style.top = `${p.y + 20 * k}px`;
      ui.takeover.textContent = manual ? 'RESUME AUTO TOUR' : 'AUTO TOUR · TAKE OVER';
      document.querySelector('.cmd').textContent = `word: ${selected.label.toLowerCase()}`;
      document.querySelector('.prompt').innerHTML = `&gt; ${selected.label.toLowerCase()} → ${selected.real.toLowerCase()}`;
      return {
        status: manual ? 'YOUR TURN' : 'AUTO TOUR',
        stats: [
          {label: 'SENTENCE', value: `${String(lastSentence + 1).padStart(2, '0')} / ${String(ARTICLE.length).padStart(2, '0')}`},
          {label: 'PARTS LINKED', value: `${String(PARTS.length).padStart(2, '0')} / ${String(PARTS.length).padStart(2, '0')}`},
          {label: 'LINKED WORDS', value: String(Object.keys(WORD_PART).length).padStart(2, '0')},
          {label: 'MODE', value: manual ? 'MANUAL' : 'GUIDED'},
        ],
        annotations,
      };
    },
  };
});
