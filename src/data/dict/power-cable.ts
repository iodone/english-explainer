import type { DictEntry } from '../types'

export const powerCableDict: Record<string, DictEntry> = {
  'power-cable': { word: 'power cable', phonetic: '/ˈpaʊər ˈkeɪbəl/', pos: 'n.', meaning: '电力电缆' },
  conductor: { word: 'conductor', phonetic: '/kənˈdʌktər/', pos: 'n.', meaning: '导体', breakdown: [{ part: 'con-', gloss: 'together' }, { part: 'duct', gloss: 'lead' }, { part: '-or', gloss: 'thing' }] },
  sheath: { word: 'sheath', phonetic: '/ʃiːθ/', pos: 'n.', meaning: '护套', breakdown: [{ part: 'sheath', gloss: 'cover' }] },
  insulation: { word: 'insulation', phonetic: '/ˌɪnsjʊˈleɪʃən/', pos: 'n.', meaning: '绝缘层', breakdown: [{ part: 'insul', gloss: 'island' }, { part: '-ation', gloss: 'state of' }] },
  termination: { word: 'termination', phonetic: '/ˌtɜːrmɪˈneɪʃən/', pos: 'n.', meaning: '终端', breakdown: [{ part: 'termin', gloss: 'end' }, { part: '-ation', gloss: 'state of' }] },
  clamp: { word: 'clamp', phonetic: '/klæmp/', pos: 'n.', meaning: '夹具', breakdown: [{ part: 'clamp', gloss: 'grip' }] },
  splice: { word: 'splice', phonetic: '/splaɪs/', pos: 'n.', meaning: '接头', breakdown: [{ part: 'splice', gloss: 'join together' }] },
}