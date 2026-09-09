import type { DictEntry } from '../types'

export const bicycleDict: Record<string, DictEntry> = {
  bicycle: {
    word: 'bicycle',
    phonetic: '/ˈbaɪsɪkl/',
    pos: 'n.',
    meaning: '自行车',
  },
  chain: {
    word: 'chain',
    phonetic: '/tʃeɪn/',
    pos: 'n.',
    meaning: '链条；环环相扣的金属环',
  },
  'push back': {
    word: 'push back',
    phonetic: '/pʊʃ bæk/',
    pos: 'phr.',
    meaning: '反推；推回来',
    breakdown: [
      { part: 'push', gloss: '推' },
      { part: 'back', gloss: '回；向后' },
    ],
  },
  'slow down': {
    word: 'slow down',
    phonetic: '/sloʊ daʊn/',
    pos: 'phr.',
    meaning: '减速；慢下来',
    breakdown: [
      { part: 'slow', gloss: '慢' },
      { part: 'down', gloss: '下；降' },
    ],
  },
}
