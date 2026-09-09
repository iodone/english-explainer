import type { DictEntry } from '../types'

export const refrigeratorDict: Record<string, DictEntry> = {
  refrigerator: {
    word: 'refrigerator',
    phonetic: '/rɪˈfrɪdʒəreɪtər/',
    pos: 'n.',
    meaning: '冰箱；冷藏箱',
  },
  'take away': {
    word: 'take away',
    phonetic: '/teɪk əˈweɪ/',
    pos: 'phr.',
    meaning: '带走；移走',
    breakdown: [
      { part: 'take', gloss: '拿' },
      { part: 'away', gloss: '离开' },
    ],
  },
  'keep safe': {
    word: 'keep safe',
    phonetic: '/kiːp seɪf/',
    pos: 'phr.',
    meaning: '保持安全；保藏好',
    breakdown: [
      { part: 'keep', gloss: '保持' },
      { part: 'safe', gloss: '安全' },
    ],
  },
  'start and stop': {
    word: 'start and stop',
    phonetic: '/stɑːrt ənd stɑːp/',
    pos: 'phr.',
    meaning: '启动和停止',
    breakdown: [
      { part: 'start', gloss: '开始' },
      { part: 'and', gloss: '和' },
      { part: 'stop', gloss: '停止' },
    ],
  },
}
