import type { DictEntry } from '../types'

export const spaceCompassDict: Record<string, DictEntry> = {
  'space-compass': { word: 'space compass', phonetic: '/speɪs ˈkʌmpəs/', pos: 'n.', meaning: '太空指南针' },
  compass: { word: 'compass', phonetic: '/ˈkʌmpəs/', pos: 'n.', meaning: '指南针' },
  'north': { word: 'north', phonetic: '/nɔːrθ/', pos: 'n.', meaning: '北方' },
  'south': { word: 'south', phonetic: '/saʊθ/', pos: 'n.', meaning: '南方' },
  'needle': { word: 'needle', phonetic: '/ˈniːdəl/', pos: 'n.', meaning: '指针', breakdown: [{ part: 'nædl', gloss: 'Old English for a sewing tool' }] },
}