import type { DictEntry } from '../types'

export const homeRugDict: Record<string, DictEntry> = {
  'home-rug': { word: 'home rug', phonetic: '/hoʊm rʌɡ/', pos: 'n.', meaning: '家用地毯' },
  rug: { word: 'rug', phonetic: '/rʌɡ/', pos: 'n.', meaning: '地毯' },
  'carpet': { word: 'carpet', phonetic: '/ˈkɑːrpɪt/', pos: 'n.', meaning: '地毯', breakdown: [{ part: 'carpita', gloss: 'Thick fabric' }] },
  'fibers': { word: 'fibers', phonetic: '/ˈfaɪbərz/', pos: 'n.', meaning: '纤维', breakdown: [{ part: 'fibra', gloss: 'A thread' }] },
  'pattern': { word: 'pattern', phonetic: '/ˈpætərn/', pos: 'n.', meaning: '图案' },
}