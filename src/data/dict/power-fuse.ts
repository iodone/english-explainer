import type { DictEntry } from '../types'

export const powerFuseDict: Record<string, DictEntry> = {
  'power-fuse': { word: 'electrical fuse', phonetic: '/ɪˈlɛktrɪkəl fjuːz/', pos: 'n.', meaning: '电气保险丝' },
  fuse: { word: 'fuse', phonetic: '/fjuːz/', pos: 'n. / v.', meaning: '保险丝；熔断', breakdown: [{ part: 'fus', gloss: 'Latin fundere (pour, melt)' }] },
  ceramic: { word: 'ceramic', phonetic: '/səˈræmɪk/', pos: 'adj. / n.', meaning: '陶瓷的；陶瓷', breakdown: [{ part: 'keramos', gloss: 'Greek for pottery' }] },
  housing: { word: 'housing', phonetic: '/ˈhaʊzɪŋ/', pos: 'n.', meaning: '外壳； housing', breakdown: [{ part: 'house', gloss: 'house' }, { part: '-ing', gloss: 'material for' }] },
  wire: { word: 'wire', phonetic: '/waɪər/', pos: 'n.', meaning: '电线', breakdown: [{ part: 'wire', gloss: 'Old English wir' }] },
  cap: { word: 'cap', phonetic: '/kæp/', pos: 'n.', meaning: '盖；帽', breakdown: [{ part: 'cap', gloss: 'Latin caput (head)' }] },
  inspection: { word: 'inspection', phonetic: '/ɪnˈspɛkʃən/', pos: 'n.', meaning: '检查', breakdown: [{ part: 'in-', gloss: 'into' }, { part: 'specere', gloss: 'look at' }, { part: '-tion', gloss: 'act of' }] },
}