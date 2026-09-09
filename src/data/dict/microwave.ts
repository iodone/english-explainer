import type { DictEntry } from '../types'

export const microwaveDict: Record<string, DictEntry> = {
  microwave: {
    word: 'microwave',
    phonetic: '/ˈmaɪkroʊweɪv/',
    pos: 'n.',
    meaning: '微波炉',
  },
  cook: {
    word: 'cook',
    phonetic: '/kʊk/',
    pos: 'v.',
    meaning: '烹饪；加热食物',
  },
  spark: {
    word: 'spark',
    phonetic: '/spɑːrk/',
    pos: 'n.',
    meaning: '火花；电火花',
  },
  'back and forth': {
    word: 'back and forth',
    phonetic: '/ˌbæk ənd ˈfɔːrθ/',
    pos: 'phr.',
    meaning: '来回地；反复地',
    breakdown: [
      { part: 'back', gloss: '向后' },
      { part: 'and', gloss: '和' },
      { part: 'forth', gloss: '向前' },
    ],
  },
  'start and stop': {
    word: 'start and stop',
    phonetic: '/stɑːrt ənd stɑːp/',
    pos: 'phr.',
    meaning: '启动和停止',
    breakdown: [
      { part: 'start', gloss: '开始' },
      { part: 'and', gloss: '和' },
      { part: 'stop', gloss: '停止' },
    ],
  },
}
