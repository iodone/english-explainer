import type { DictEntry } from '../types'

export const spaceLanderDict: Record<string, DictEntry> = {
  'space-lander': { word: 'space lander', phonetic: '/speɪs ˈlændər/', pos: 'n.', meaning: '太空着陆器' },
  lander: { word: 'lander', phonetic: '/ˈlændər/', pos: 'n.', meaning: '着陆器', breakdown: [{ part: 'land', gloss: 'ground' }, { part: '-er', gloss: 'thing' }] },
  retro: { word: 'retro', phonetic: '/ˈrɛtroʊ/', pos: 'adj.', meaning: '反向的', breakdown: [{ part: 'retro', gloss: 'backward' }] },
  robotic: { word: 'robotic', phonetic: '/roʊˈbɒtɪk/', pos: 'adj.', meaning: '机器人的', breakdown: [{ part: 'robot', gloss: 'machine person' }, { part: '-ic', gloss: 'relating to' }] },
  gear: { word: 'gear', phonetic: '/ɡɪər/', pos: 'n.', meaning: '齿轮；装置', breakdown: [{ part: 'gear', gloss: 'equipment' }] },
}