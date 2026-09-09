/**
 * Thing Explainer — 类型契约
 *
 * 文章是结构化的：句 → 段（segment）。
 * segment 是最小标注单元：普通文本（string，不可点）或
 * 可点击片段（part 关联 和/或 词条）。
 * 短语级关联优先（"hot water box" 整体指向部件），词级兜底。
 */

/** 可点击文本段 */
export interface MarkedSeg {
  text: string
  /** 关联部件 id —— 点击高亮图中部件 */
  part?: string
  /** 词条 key（dictionary.ts）—— 点击弹释义卡 */
  dict?: string
}

/** 句子 = 段数组（string 与 MarkedSeg 混排） */
export type Sentence = (string | MarkedSeg)[]

export interface ArticleParagraph {
  sentences: Sentence[]
}

export interface ThingPart {
  id: string
  label: string        // simple name（Munroe 式命名）
  realName: string     // 真实术语
  position: [number, number, number]
}

/** 过程动画步骤 */
export interface FlowStep {
  partIds: string[]
  caption: string      // simple-words 解说句
  sentenceRef: number  // 对应文章句索引（全篇连续计数，用于同步高亮）
}

/** 复述练习关键表达 */
export interface KeyExpression {
  text: string
  partId?: string      // hover 时图上对应部件微亮
}

export interface DictEntry {
  word: string
  phonetic: string     // IPA（美音）
  pos: string          // 词性缩写
  meaning: string      // 中文释义
  /** 构词拆解（复合短语时展示） */
  breakdown?: { part: string; gloss: string }[]
}

export interface ThingData {
  id: string
  slug: string
  simpleName: string
  realName: string
  category: string
  /** 文末 "Did you know" 静态小节（原 FunFacts 降级） */
  funFacts: string[]
  parts: ThingPart[]
  article: ArticleParagraph[]
  flow: FlowStep[]
  keyExpressions: KeyExpression[]
  color: string
}