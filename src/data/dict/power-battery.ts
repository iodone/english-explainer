import type { DictEntry } from '../types'

export const powerBatteryDict: Record<string, DictEntry> = {
  'power-battery': { word: 'battery', phonetic: '/ˈbætəri/', pos: 'n.', meaning: '电池' },
  battery: { word: 'battery', phonetic: '/ˈbætəri/', pos: 'n.', meaning: '电池', breakdown: [{ part: 'battre', gloss: 'French for beat' }] },
  terminal: { word: 'terminal', phonetic: '/ˈtɜːrmɪnəl/', pos: 'n. / adj.', meaning: '终端；端子', breakdown: [{ part: 'terminus', gloss: 'Latin for end' }] },
  cell: { word: 'cell', phonetic: '/sel/', pos: 'n.', meaning: '电池；细胞', breakdown: [{ part: 'cella', gloss: 'Latin for small room' }] },
  positive: { word: 'positive', phonetic: '/ˈpɒzətɪv/', pos: 'adj.', meaning: '正的；积极的', breakdown: [{ part: 'positus', gloss: 'Latin for placed' }] },
  negative: { word: 'negative', phonetic: '/ˈnɛɡətɪv/', pos: 'adj.', meaning: '负的；消极的', breakdown: [{ part: 'negare', gloss: 'Latin for deny' }] },
  insulate: { word: 'insulate', phonetic: '/ˈɪnsjʊleɪt/', pos: 'v.', meaning: '绝缘', breakdown: [{ part: 'insula', gloss: 'Latin for island' }] },
}