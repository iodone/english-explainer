/**
 * 数据一致性校验：thing 文章 ↔ flow ↔ keyExpressions ↔ dict 闭环。
 * 用法：npx tsx scripts/validate-data.mjs
 */
import { things } from '../src/data/things.ts'
import { dictionary } from '../src/data/dictionary.ts'

let errors = 0

for (const thing of things) {
  const label = thing.slug

  // 1. 句子总数与 sentenceRef 越界检查
  const sentenceCount = thing.article.reduce((n, p) => n + p.sentences.length, 0)
  for (const [i, step] of thing.flow.entries()) {
    if (step.sentenceRef < 0 || step.sentenceRef >= sentenceCount) {
      console.error(`✗ ${label} flow[${i}] sentenceRef=${step.sentenceRef} 越界（总句数 ${sentenceCount}）`)
      errors++
    }
    for (const pid of step.partIds) {
      if (!thing.parts.some(p => p.id === pid)) {
        console.error(`✗ ${label} flow[${i}] partId "${pid}" 不存在于 parts`)
        errors++
      }
    }
  }

  // 2. keyExpressions partId 检查
  for (const [i, expr] of thing.keyExpressions.entries()) {
    if (expr.partId && !thing.parts.some(p => p.id === expr.partId)) {
      console.error(`✗ ${label} keyExpressions[${i}] partId "${expr.partId}" 不存在`)
      errors++
    }
  }

  // 3. 文中 dict 标注 → dictionary 闭环
  let dictMarks = 0
  let partMarks = 0
  for (const para of thing.article) {
    for (const sentence of para.sentences) {
      for (const seg of sentence) {
        if (typeof seg === 'string') continue
        if (seg.part) {
          partMarks++
          if (!thing.parts.some(p => p.id === seg.part)) {
            console.error(`✗ ${label} 文中标注 part "${seg.part}" 不存在`)
            errors++
          }
        }
        if (seg.dict) {
          dictMarks++
          if (!dictionary[seg.dict]) {
            console.error(`✗ ${label} 文中词条 "${seg.dict}" 在 dictionary 中缺失`)
            errors++
          }
        }
      }
    }
  }

  // 4. 每个部件至少被文中标注一次
  const markedParts = new Set(
    thing.article.flatMap(p => p.sentences.flat())
      .filter(s => typeof s !== 'string' && s.part)
      .map(s => s.part),
  )
  for (const part of thing.parts) {
    if (!markedParts.has(part.id)) {
      console.error(`✗ ${label} 部件 "${part.id}" 未在文中标注`)
      errors++
    }
  }

  console.log(
    `· ${label}: ${sentenceCount} 句 · ${thing.parts.length} 部件（全部标注）· dict 标注 ${dictMarks} 处 · flow ${thing.flow.length} 步 · keyExpressions ${thing.keyExpressions.length}`,
  )
}

// 5. dictionary 词条的基本字段
for (const [key, entry] of Object.entries(dictionary)) {
  if (!entry.word || !entry.phonetic || !entry.pos || !entry.meaning) {
    console.error(`✗ 词条 "${key}" 字段不全`, entry)
    errors++
  }
}

console.log(`\n词典总量：${Object.keys(dictionary).length} 词条`)
console.log(errors === 0 ? '✓ 全部通过' : `✗ ${errors} 个错误`)
process.exit(errors === 0 ? 0 : 1)
