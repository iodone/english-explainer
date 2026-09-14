import type { DictEntry } from '../types'

export const homeFanDict: Record<string, DictEntry> = {
  'home-fan': { word: 'home fan', phonetic: '/hoʊm fæn/', pos: 'n.', meaning: '家用风扇' },
  fan: { word: 'fan', phonetic: '/fæn/', pos: 'n.', meaning: '风扇', breakdown: [{ part: 'vannus', gloss: 'Latin for winnowing basket' }] },
  blade: { word: 'blade', phonetic: '/bleɪd/', pos: 'n.', meaning: '叶片', breakdown: [{ part: 'blæd', gloss: 'Old English for leaf' }] },
  oscillation: { word: 'oscillation', phonetic: '/ˌɒsɪˈleɪʃən/', pos: 'n.', meaning: '摆动', breakdown: [{ part: 'oscillare', gloss: 'Latin for swing' }, { part: '-tion', gloss: 'act of' }] },
  cage: { word: 'cage', phonetic: '/keɪdʒ/', pos: 'n.', meaning: '笼子', breakdown: [{ part: 'cavea', gloss: 'Latin for enclosure' }] },
  column: { word: 'column', phonetic: '/ˈkɒləm/', pos: 'n.', meaning: '柱子', breakdown: [{ part: 'columna', gloss: 'Latin for pillar' }] },
}