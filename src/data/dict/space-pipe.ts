import type { DictEntry } from '../types'

export const spacePipeDict: Record<string, DictEntry> = {
  'space-pipe': { word: 'space pipe system', phonetic: '/speɪs paɪp ˈsɪstəm/', pos: 'n.', meaning: '太空管道系统' },
  pipe: { word: 'pipe', phonetic: '/paɪp/', pos: 'n.', meaning: '管道', breakdown: [{ part: 'pipa', gloss: 'Latin for tube' }] },
  joint: { word: 'joint', phonetic: '/dʒɔɪnt/', pos: 'n.', meaning: '接头', breakdown: [{ part: 'joindre', gloss: 'French for join' }] },
  bend: { word: 'bend', phonetic: '/bɛnd/', pos: 'n. / v.', meaning: '弯曲', breakdown: [{ part: 'bendan', gloss: 'Old English for bend' }] },
  valve: { word: 'valve', phonetic: '/vælv/', pos: 'n.', meaning: '阀门', breakdown: [{ part: 'valva', gloss: 'Latin for leaf of a door' }] },
  insulation: { word: 'insulation', phonetic: '/ˌɪnsjʊˈleɪʃən/', pos: 'n.', meaning: '绝缘；隔热', breakdown: [{ part: 'insula', gloss: 'Latin for island' }, { part: '-tion', gloss: 'act of' }] },
  clamp: { word: 'clamp', phonetic: '/klæmp/', pos: 'n.', meaning: '夹子', breakdown: [{ part: 'klam', gloss: 'Old English for grip' }] },
}