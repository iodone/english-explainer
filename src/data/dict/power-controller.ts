import type { DictEntry } from '../types'

export const powerControllerDict: Record<string, DictEntry> = {
  'power-controller': { word: 'power controller', phonetic: '/ˈpaʊər kənˈtroʊlər/', pos: 'n.', meaning: '功率控制器' },
  controller: { word: 'controller', phonetic: '/kənˈtroʊlər/', pos: 'n.', meaning: '控制器', breakdown: [{ part: 'contra-', gloss: 'against' }, { part: 'rotulus', gloss: 'roll' }] },
  processor: { word: 'processor', phonetic: '/ˈprɒsesər/', pos: 'n.', meaning: '处理器', breakdown: [{ part: 'pro-', gloss: 'forward' }, { part: 'cedere', gloss: 'go' }] },
  connector: { word: 'connector', phonetic: '/kəˈnɛktər/', pos: 'n.', meaning: '连接器', breakdown: [{ part: 'con-', gloss: 'together' }, { part: 'nectere', gloss: 'bind' }] },
  heat: { word: 'heat', phonetic: '/hiːt/', pos: 'n. / v.', meaning: '热；加热', breakdown: [{ part: 'heat', gloss: 'Old English hǣtu' }] },
  sink: { word: 'sink', phonetic: '/sɪŋk/', pos: 'n. / v.', meaning: '水槽；下沉', breakdown: [{ part: 'sink', gloss: 'Old English sincan' }] },
}