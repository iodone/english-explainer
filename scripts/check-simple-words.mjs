/**
 * Munroe 闸门：learner-facing 文本全部用词必须可被四通道之一放行。
 *
 * 通道（任一命中即过）：
 *   1. xkcd Simple Writer 原表全形式（scripts/data/xkcd-simple-writer-words.txt，
 *      3634 形式含屈折家族）——Randall 自己写作时的判定标准，权威源
 *   2. SIMPLE_WORDS 合并表（src/data/word-list.ts，展示层 + 手工补丁）
 *   3. dict 词条豁免（站级词库 key/word 分词）——「生词标注」是设计内的学习机制：
 *      表外概念词以词条形式显式引入（有音标/词性/中文兜底）
 *   4. 屈折逆推兜底（链式 + er/est 补 e/双写还原 + ly）——服务未来手工补词的屈折形式
 *
 * 检查范围（errors）：
 *   - article 正文（全部 segment 文本）
 *   - flow[].caption（过程解说句）
 *   - keyExpressions[].text（复述练习短语）
 *   - funFacts[]（Did you know 小节）
 * 不检查：parts.realName（真实术语，设计上允许超纲）、parts.label（命名层，同属术语对照）。
 * 数字直接写阿拉伯数字（tokenize 天然跳过）——比英文数字词更 Munroe。
 *
 * 每 thing 报告 dict 豁免依赖词数：production line review 时盯这个数，
 * 防止执行 agent 用"海量加词条"绕过简单词写作约束。
 *
 * 用法：npx tsx scripts/check-simple-words.mjs
 */
import { readFileSync } from 'node:fs'
import { things } from '../src/data/things.ts'
import { dictionary } from '../src/data/dictionary.ts'
import { SIMPLE_WORDS } from '../src/data/word-list.ts'

/* ─── 通道 1：xkcd 原表（权威） ─── */
const ORIG = new Set(
  readFileSync(new URL('./data/xkcd-simple-writer-words.txt', import.meta.url), 'utf8')
    .split('\n')
    .filter(l => l && !l.startsWith('//'))
    .map(w => w.toLowerCase()),
)

/* ─── 通道 2：合并表 ─── */
const OURS = new Set(SIMPLE_WORDS.map(w => w.toLowerCase()))

/* ─── 通道 3：dict 词条（key 与 word 字段都分词；屈折由通道 4 联合集覆盖） ─── */
const DICT_WORDS = new Set()
for (const [key, entry] of Object.entries(dictionary)) {
  for (const text of [key, entry.word]) {
    for (const w of text.toLowerCase().split(/[^a-z]+/)) {
      if (w.length > 1) DICT_WORDS.add(w)
    }
  }
}

/* ─── 通道 3b：复合词拆分（heat-sink → heat + sink 各自查表） ─── */
function hitsCompound(word) {
  // 最小 8 字符才尝试拆分，避免 damage→dam+age 这类误判
  if (word.length < 8) return false
  // 尝试在每个位置切一刀，两半都通过任意通道即算命中
  for (let i = 3; i <= word.length - 3; i++) {
    const left = word.slice(0, i)
    const right = word.slice(i)
    // 两半都必须在已知词集中（orig / merged / dict / inflect 任一）
    if (verdictBase(left) && verdictBase(right)) return true
  }
  return false
}
/** 仅查通道 1-3 + 屈折，不含复合词（避免递归） */
function verdictBase(word) {
  if (ORIG.has(word)) return true
  if (OURS.has(word)) return true
  if (DICT_WORDS.has(word)) return true
  if (hitsInflect(word)) return true
  return false
}

/* ─── 通道 4：屈折逆推（链式 + 名词化/比较级/副词） ─── */
function inflectForms(word) {
  const c = [word]
  const push = w => { if (w.length >= 2) c.push(w) }
  if (word.endsWith('ies')) push(word.slice(0, -3) + 'y')
  if (word.endsWith('es')) push(word.slice(0, -2))
  if (word.endsWith('s')) push(word.slice(0, -1))
  if (word.endsWith('ied')) push(word.slice(0, -3) + 'y')
  if (word.endsWith('ed')) {
    push(word.slice(0, -2))                          // walked → walk
    push(word.slice(0, -2).replace(/(.)\1$/, '$1'))  // stopped → stop
    push(word.slice(0, -1))                          // liked → like
  }
  if (word.endsWith('d')) push(word.slice(0, -1))
  if (word.endsWith('ing')) {
    push(word.slice(0, -3))                          // walking → walk
    push(word.slice(0, -3).replace(/(.)\1$/, '$1'))  // running → run
    push(word.slice(0, -3) + 'e')                    // making → make
  }
  // er/est（比较级 + 施动者名词）：直接剥 / 剥后补 e（nicer/maker）/ 剥后双写还原（bigger/runner）
  for (const suf of ['er', 'est']) {
    if (word.endsWith(suf)) {
      const stem = word.slice(0, -suf.length)
      push(stem)
      push(stem + 'e')
      push(stem.replace(/(.)\1$/, '$1'))
    }
  }
  if (word.endsWith('ier')) push(word.slice(0, -3) + 'y')
  if (word.endsWith('iest')) push(word.slice(0, -4) + 'y')
  // ly 副词：直接剥 / 剥后补 e（nicely）/ happi → happy
  if (word.endsWith('ly')) {
    const stem = word.slice(0, -2)
    push(stem)
    push(stem + 'e')
    if (stem.endsWith('i')) push(stem.slice(0, -1) + 'y')
  }
  return c
}
function hitsInflect(word) {
  // 链式：原词全变体 + 剥复数 s 后的全变体（meetings → meeting → meet）。
  // 命中集 = 合并表 ∪ dict 词条（tests → test∈dict、blades → blade∈dict 同理）
  const known = new Set([...OURS, ...DICT_WORDS])
  const forms = new Set([word])
  if (word.endsWith('s')) forms.add(word.slice(0, -1))
  for (const f of forms) {
    for (const c of inflectForms(f)) if (known.has(c)) return true
  }
  return false
}

/* ─── 判定 ─── */
function verdict(word) {
  if (ORIG.has(word)) return 'orig'
  if (OURS.has(word)) return 'merged'
  if (DICT_WORDS.has(word)) return 'dict'
  if (hitsCompound(word)) return 'compound'
  if (hitsInflect(word)) return 'inflect'
  return null
}

/** 非字母切词；≤1 字符残段放行（缩写残段） */
function tokenize(text) {
  return text.toLowerCase().split(/[^a-z]+/).filter(t => t.length > 1)
}

let errors = 0

for (const thing of things) {
  const offenders = []
  const dictRelied = new Set()
  const compoundRelied = new Set()

  const check = (text, where) => {
    for (const w of tokenize(text)) {
      const v = verdict(w)
      if (!v) offenders.push({ word: w, where })
      else if (v === 'dict') dictRelied.add(w)
      else if (v === 'compound') compoundRelied.add(w)
    }
  }

  // 1. article 正文
  let sentenceIdx = 0
  for (const para of thing.article) {
    for (const sentence of para.sentences) {
      const text = sentence
        .map(seg => (typeof seg === 'string' ? seg : seg.text))
        .join('')
      check(text, `article 句${sentenceIdx}`)
      sentenceIdx++
    }
  }
  // 2. flow 解说句
  for (const [i, step] of thing.flow.entries()) check(step.caption, `flow[${i}] caption`)
  // 3. keyExpressions
  for (const [i, expr] of thing.keyExpressions.entries()) check(expr.text, `keyExpressions[${i}]`)
  // 4. funFacts
  for (const [i, fact] of thing.funFacts.entries()) check(fact, `funFacts[${i}]`)

  // 汇总：同词合并报
  const byWord = new Map()
  for (const o of offenders) {
    if (!byWord.has(o.word)) byWord.set(o.word, [])
    byWord.get(o.word).push(o.where)
  }
  if (byWord.size > 0) {
    for (const [word, wheres] of byWord) {
      console.error(`✗ ${thing.slug} 超纲词 "${word}" ×${wheres.length}（${wheres.slice(0, 3).join('、')}${wheres.length > 3 ? '…' : ''}）`)
      errors++
    }
  } else {
    console.log(
      `· ${thing.slug}: ${sentenceIdx} 句全词在表 · dict 豁免 ${dictRelied.size} 词${dictRelied.size ? `（${[...dictRelied].join(' ')}）` : ''}${compoundRelied.size ? ` · 复合词 ${compoundRelied.size}（${[...compoundRelied].join(' ')}）` : ''}`,
    )
  }
}

console.log(`\n通道容量：xkcd 原表 ${ORIG.size} · 合并表 ${OURS.size} · dict 分词 ${DICT_WORDS.size} · 复合词拆分已启用`)
console.log(errors === 0 ? '✓ Munroe 闸门全部通过' : `✗ ${errors} 个超纲词`)
process.exit(errors === 0 ? 0 : 1)
