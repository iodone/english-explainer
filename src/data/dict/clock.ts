import type { DictEntry } from '../types'

export const clockDict: Record<string, DictEntry> = {
  clock: {
    word: 'clock',
    phonetic: '/klɑːk/',
    pos: 'n.',
    meaning: '时钟；挂钟',
  },
  hour: {
    word: 'hour',
    phonetic: '/ˈaʊər/',
    pos: 'n.',
    meaning: '小时；钟点',
  },
  minute: {
    word: 'minute',
    phonetic: '/ˈmɪnɪt/',
    pos: 'n.',
    meaning: '分钟',
  },
  key: {
    word: 'key',
    phonetic: '/kiː/',
    pos: 'n.',
    meaning: '钥匙；（钟表）上发条的钥匙',
  },
  'tick-tock': {
    word: 'tick-tock',
    phonetic: '/ˈtɪk tɑːk/',
    pos: 'phr.',
    meaning: '滴答声（钟表走时的声音）',
    breakdown: [
      { part: 'tick', gloss: '滴' },
      { part: 'tock', gloss: '答' },
    ],
  },
}
