import type { DictEntry } from '../types'

/**
 * Heavy Metal Power Building 词条
 * key 与文章 MarkedSeg.dict 标注一一对应（动词短语用原形）。
 */
export const nuclearReactorDict: Record<string, DictEntry> = {
  power: {
    word: 'power',
    phonetic: '/ˈpaʊər/',
    pos: 'n.',
    meaning: '动力；电力，能量',
  },
  'break apart': {
    word: 'break apart',
    phonetic: '/breɪk əˈpɑːrt/',
    pos: 'phr.',
    meaning: '分裂；使拆散成几块',
    breakdown: [
      { part: 'break', gloss: '打破，弄碎' },
      { part: 'apart', gloss: '分离，散开' },
    ],
  },
  matter: {
    word: 'matter',
    phonetic: '/ˈmætər/',
    pos: 'n.',
    meaning: '物质（构成世界的东西）',
  },
  sit: {
    word: 'sit',
    phonetic: '/sɪt/',
    pos: 'v.',
    meaning: '坐；位于，待在某个位置',
  },
  core: {
    word: 'core',
    phonetic: '/kɔːr/',
    pos: 'n.',
    meaning: '核心，中心部分',
  },
  'heavy metal': {
    word: 'heavy metal',
    phonetic: '/ˈhevi ˈmetl/',
    pos: 'phr.',
    meaning: '重金属（很重的金属物质）',
    breakdown: [
      { part: 'heavy', gloss: '重的' },
      { part: 'metal', gloss: '金属' },
    ],
  },
  'let out': {
    word: 'let out',
    phonetic: '/let aʊt/',
    pos: 'phr.',
    meaning: '释放，放出',
    breakdown: [
      { part: 'let', gloss: '让，允许' },
      { part: 'out', gloss: '向外' },
    ],
  },
  water: {
    word: 'water',
    phonetic: '/ˈwɔːtər/',
    pos: 'n.',
    meaning: '水',
  },
  'turn into': {
    word: 'turn into',
    phonetic: '/tɜːrn ˈɪntuː/',
    pos: 'phr.',
    meaning: '变成，转变为',
    breakdown: [
      { part: 'turn', gloss: '转变，转动' },
      { part: 'into', gloss: '进入（某种状态）' },
    ],
  },
  steam: {
    word: 'steam',
    phonetic: '/stiːm/',
    pos: 'n.',
    meaning: '蒸汽，水蒸气',
  },
  blade: {
    word: 'blade',
    phonetic: '/bleɪd/',
    pos: 'n.',
    meaning: '叶片；刀刃',
  },
  spin: {
    word: 'spin',
    phonetic: '/spɪn/',
    pos: 'v.',
    meaning: '快速旋转',
  },
  safe: {
    word: 'safe',
    phonetic: '/seɪf/',
    pos: 'adj.',
    meaning: '安全的，没有危险的',
  },
}
