import type { ArticleParagraph, Sentence, ThingData } from './types'

/** 句子纯文本（segment.text 拼接，供预览/计数用） */
export function sentencePlainText(sentence: Sentence): string {
  return sentence.map(seg => (typeof seg === 'string' ? seg : seg.text)).join('')
}

/** 全篇铺平为连续句列表（索引即 sentenceRef 的坐标系） */
export function flattenSentences(article: ArticleParagraph[]): Sentence[] {
  return article.flatMap(p => p.sentences)
}

/**
 * 文章总词数 —— Munroe "ten hundred words" 概念的量化：
 * 每篇只用最常见词，词数本身就是学习负荷的度量。
 */
export function countArticleWords(article: ArticleParagraph[]): number {
  return flattenSentences(article)
    .map(sentencePlainText)
    .join(' ')
    .split(/\s+/)
    .filter(Boolean).length
}

/**
 * 图→词：找到第一个含该部件标注的句索引（全篇连续，0-based）。
 * 无标注返回 null。
 */
export function findSentenceIndexByPart(
  thing: ThingData,
  partId: string,
): number | null {
  let idx = 0
  for (const para of thing.article) {
    for (const sentence of para.sentences) {
      if (
        sentence.some(
          seg => typeof seg !== 'string' && seg.part === partId,
        )
      ) {
        return idx
      }
      idx++
    }
  }
  return null
}
