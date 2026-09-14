import type { DictEntry } from '../types'

export const powerCordDict: Record<string, DictEntry> = {
  'power-cord': { word: 'power cord', phonetic: '/ˈpaʊər kɔːrd/', pos: 'n.', meaning: '电源线' },
  cord: { word: 'cord', phonetic: '/kɔːrd/', pos: 'n.', meaning: '细绳' },
  'cable': { word: 'cable', phonetic: '/ˈkeɪbəl/', pos: 'n.', meaning: '电缆', breakdown: [{ part: 'caplum', gloss: 'A thick rope' }] },
  'conductor': { word: 'conductor', phonetic: '/kənˈdʌktər/', pos: 'n.', meaning: '导体', breakdown: [{ part: 'conducere', gloss: 'To lead' }] },
  'insulation': { word: 'insulation', phonetic: '/ˌɪnsəˈleɪʃən/', pos: 'n.', meaning: '绝缘材料' },
}