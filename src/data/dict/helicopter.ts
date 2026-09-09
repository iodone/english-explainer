import type { DictEntry } from '../types'

/**
 * Sky Boat with Turning Wings — Helicopter 词条表
 * key 与 things/helicopter.ts 文中 dict 标注一一对应（动词短语用原形 key）。
 */
export const helicopterDict: Record<string, DictEntry> = {
  'take off': {
    word: 'take off',
    phonetic: '/teɪk ɔːf/',
    pos: 'phr.',
    meaning: '（飞机等）起飞；离开地面',
    breakdown: [
      { part: 'take', gloss: '拿/取' },
      { part: 'off', gloss: '离开' },
    ],
  },
  straight: {
    word: 'straight',
    phonetic: '/streɪt/',
    pos: 'adv.',
    meaning: '笔直地；直接地',
  },
  'come from': {
    word: 'come from',
    phonetic: '/kʌm frʌm/',
    pos: 'phr.',
    meaning: '来自；起源于',
    breakdown: [
      { part: 'come', gloss: '来' },
      { part: 'from', gloss: '从' },
    ],
  },
  'spin around': {
    word: 'spin around',
    phonetic: '/spɪn əˈraʊnd/',
    pos: 'phr.',
    meaning: '快速旋转；打转',
    breakdown: [
      { part: 'spin', gloss: '旋转' },
      { part: 'around', gloss: '环绕' },
    ],
  },
  'push down': {
    word: 'push down',
    phonetic: '/pʊʃ daʊn/',
    pos: 'phr.',
    meaning: '向下推',
    breakdown: [
      { part: 'push', gloss: '推' },
      { part: 'down', gloss: '向下' },
    ],
  },
  'push back': {
    word: 'push back',
    phonetic: '/pʊʃ bæk/',
    pos: 'phr.',
    meaning: '反推回去；把…推回',
    breakdown: [
      { part: 'push', gloss: '推' },
      { part: 'back', gloss: '回/向后' },
    ],
  },
  pull: {
    word: 'pull',
    phonetic: '/pʊl/',
    pos: 'n.',
    meaning: '拉力；拉（v. 拉、拖）',
  },
  burn: {
    word: 'burn',
    phonetic: '/bɜːrn/',
    pos: 'v.',
    meaning: '燃烧；烧',
  },
  sideways: {
    word: 'sideways',
    phonetic: '/ˈsaɪdweɪz/',
    pos: 'adv.',
    meaning: '向侧面；侧着',
  },
  fight: {
    word: 'fight',
    phonetic: '/faɪt/',
    pos: 'v.',
    meaning: '对抗；与…作斗争',
  },
  tip: {
    word: 'tip',
    phonetic: '/tɪp/',
    pos: 'v.',
    meaning: '（使）倾斜；倾侧',
  },
  forward: {
    word: 'forward',
    phonetic: '/ˈfɔːrwərd/',
    pos: 'adv.',
    meaning: '向前',
  },
  'side to side': {
    word: 'side to side',
    phonetic: '/ˌsaɪd tə ˈsaɪd/',
    pos: 'phr.',
    meaning: '左右来回（移动/摇摆）',
    breakdown: [
      { part: 'side', gloss: '边/侧' },
      { part: 'to', gloss: '到' },
      { part: 'side', gloss: '边/侧' },
    ],
  },
  'look out': {
    word: 'look out',
    phonetic: '/lʊk aʊt/',
    pos: 'phr.',
    meaning: '向外看；朝外看',
    breakdown: [
      { part: 'look', gloss: '看' },
      { part: 'out', gloss: '向外' },
    ],
  },
  land: {
    word: 'land',
    phonetic: '/lænd/',
    pos: 'v.',
    meaning: '着陆；降落（n. 陆地）',
  },
  fixed: {
    word: 'fixed',
    phonetic: '/fɪkst/',
    pos: 'adj.',
    meaning: '固定的',
  },
  flat: {
    word: 'flat',
    phonetic: '/flæt/',
    pos: 'adj.',
    meaning: '平坦的；平的',
  },
}
