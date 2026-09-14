import type { DictEntry } from '../types'

export const powerPlugDict: Record<string, DictEntry> = {
  'power-plug': { word: 'power plug', phonetic: '/ˈpaʊər plʌɡ/', pos: 'n.', meaning: '电源插头' },
  plug: { word: 'plug', phonetic: '/plʌɡ/', pos: 'n.', meaning: '插头' },
  'prongs': { word: 'prongs', phonetic: '/prɒŋz/', pos: 'n.', meaning: '金属棒', breakdown: [{ part: 'pranga', gloss: 'A pointed piece of metal' }] },
  'socket': { word: 'socket', phonetic: '/ˈsɒkɪt/', pos: 'n.', meaning: '插座' },
  'outlet': { word: 'outlet', phonetic: '/ˈaʊtlet/', pos: 'n.', meaning: '电源插座' },
}