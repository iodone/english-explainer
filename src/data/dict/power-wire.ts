import type { DictEntry } from '../types'

export const powerWireDict: Record<string, DictEntry> = {
  'power-wire': { word: 'electrical wire', phonetic: '/ɪˈlɛktrɪkəl waɪər/', pos: 'n.', meaning: '电线' },
  wire: { word: 'wire', phonetic: '/waɪər/', pos: 'n.', meaning: '电线', breakdown: [{ part: 'wir', gloss: 'Old English for metal thread' }] },
  conductor: { word: 'conductor', phonetic: '/kənˈdʌktər/', pos: 'n.', meaning: '导体', breakdown: [{ part: 'con-', gloss: 'together' }, { part: 'ducere', gloss: 'lead' }] },
  jacket: { word: 'jacket', phonetic: '/ˈdʒækɪt/', pos: 'n.', meaning: '外套；护套', breakdown: [{ part: 'jaquette', gloss: 'French for small coat' }] },
  connector: { word: 'connector', phonetic: '/kəˈnɛktər/', pos: 'n.', meaning: '连接器', breakdown: [{ part: 'con-', gloss: 'together' }, { part: 'nectere', gloss: 'bind' }] },
  strain: { word: 'strain', phonetic: '/streɪn/', pos: 'n. / v.', meaning: '拉力；拉紧', breakdown: [{ part: 'stringere', gloss: 'Latin for bind tight' }] },
  insulation: { word: 'insulation', phonetic: '/ˌɪnsjʊˈleɪʃən/', pos: 'n.', meaning: '绝缘', breakdown: [{ part: 'insula', gloss: 'Latin for island' }, { part: '-tion', gloss: 'act of' }] },
}