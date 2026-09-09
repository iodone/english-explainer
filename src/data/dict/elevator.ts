import type { DictEntry } from '../types'

export const elevatorDict: Record<string, DictEntry> = {
  elevator: {
    word: 'elevator',
    phonetic: '/ˈelɪveɪtər/',
    pos: 'n.',
    meaning: '电梯',
  },
  'up and down': {
    word: 'up and down',
    phonetic: '/ˌʌp ənd ˈdaʊn/',
    pos: 'phr.',
    meaning: '上下；上上下下',
    breakdown: [
      { part: 'up', gloss: '向上' },
      { part: 'and', gloss: '和' },
      { part: 'down', gloss: '向下' },
    ],
  },
  'between floors': {
    word: 'between floors',
    phonetic: '/bɪˈtwiːn flɔːrz/',
    pos: 'phr.',
    meaning: '在楼层之间',
    breakdown: [
      { part: 'between', gloss: '在…之间' },
      { part: 'floors', gloss: '楼层' },
    ],
  },
  'at the same time': {
    word: 'at the same time',
    phonetic: '/ət ðə seɪm taɪm/',
    pos: 'phr.',
    meaning: '同时',
    breakdown: [
      { part: 'at', gloss: '在' },
      { part: 'the same', gloss: '同一个' },
      { part: 'time', gloss: '时间' },
    ],
  },
  'too fast': {
    word: 'too fast',
    phonetic: '/tuː fæst/',
    pos: 'phr.',
    meaning: '太快',
    breakdown: [
      { part: 'too', gloss: '太' },
      { part: 'fast', gloss: '快' },
    ],
  },
}
