import type { DictEntry } from '../types'

export const powerBankDict: Record<string, DictEntry> = {
  'power-bank': { word: 'power bank', phonetic: '/ˈpaʊər bæŋk/', pos: 'n.', meaning: '充电宝' },
  battery: { word: 'battery', phonetic: '/ˈbætəri/', pos: 'n.', meaning: '电池', breakdown: [{ part: 'batt', gloss: 'strike' }, { part: '-ery', gloss: 'place of' }] },
  port: { word: 'port', phonetic: '/pɔːrt/', pos: 'n.', meaning: '端口', breakdown: [{ part: 'port', gloss: 'gateway' }] },
  indicator: { word: 'indicator', phonetic: '/ˈɪndɪkeɪtər/', pos: 'n.', meaning: '指示器', breakdown: [{ part: 'in-', gloss: 'toward' }, { part: 'dic', gloss: 'say' }, { part: '-ator', gloss: 'thing' }] },
  cell: { word: 'cell', phonetic: '/sɛl/', pos: 'n.', meaning: '电池单元', breakdown: [{ part: 'cell', gloss: 'small room' }] },
}