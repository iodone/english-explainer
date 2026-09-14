import type { DictEntry } from '../types'

export const electricWireDict: Record<string, DictEntry> = {
  'electric-wire': { word: 'electric wire', phonetic: '/ɪˈlɛktrɪk ˈwaɪər/', pos: 'n.', meaning: '电线' },
  insulation: { word: 'insulation', phonetic: '/ˌɪnsjʊˈleɪʃən/', pos: 'n.', meaning: '绝缘层', breakdown: [{ part: 'insul', gloss: 'island' }, { part: '-ation', gloss: 'state of' }] },
  conductor: { word: 'conductor', phonetic: '/kənˈdʌktər/', pos: 'n.', meaning: '导体', breakdown: [{ part: 'con-', gloss: 'together' }, { part: 'duct', gloss: 'lead' }, { part: '-or', gloss: 'one who does' }] },
  connector: { word: 'connector', phonetic: '/kəˈnɛktər/', pos: 'n.', meaning: '连接器', breakdown: [{ part: 'con-', gloss: 'together' }, { part: 'nect', gloss: 'bind' }, { part: '-or', gloss: 'thing' }] },
  sheath: { word: 'sheath', phonetic: '/ʃiːθ/', pos: 'n.', meaning: '护套', breakdown: [{ part: 'sheath', gloss: 'cover for blade' }] },
}