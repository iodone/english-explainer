import type { DictEntry } from '../types'

/**
 * Red World Space Car 词条
 * key 与文章 MarkedSeg.dict 标注一一对应（动词短语用原形）。
 */
export const curiosityRoverDict: Record<string, DictEntry> = {
  'the red world': {
    word: 'the red world',
    phonetic: '/ðə ˈred wɜːrld/',
    pos: 'phr.',
    meaning: '红色星球；火星',
    breakdown: [
      { part: 'red', gloss: '红色的' },
      { part: 'world', gloss: '世界；（这里指）星球' },
    ],
  },
  land: {
    word: 'land',
    phonetic: '/lænd/',
    pos: 'v.',
    meaning: '着陆，降落',
  },
  'drive around': {
    word: 'drive around',
    phonetic: '/ˌdraɪv əˈraʊnd/',
    pos: 'phr.',
    meaning: '（开车）四处行驶，开来开去',
    breakdown: [
      { part: 'drive', gloss: '驾驶，开车' },
      { part: 'around', gloss: '四处，到处' },
    ],
  },
  'look at': {
    word: 'look at',
    phonetic: '/lʊk ət/',
    pos: 'phr.',
    meaning: '看，瞧；查看',
    breakdown: [
      { part: 'look', gloss: '看' },
      { part: 'at', gloss: '朝着（看的对象）' },
    ],
  },
  'send back': {
    word: 'send back',
    phonetic: '/ˌsend ˈbæk/',
    pos: 'phr.',
    meaning: '送回，发回',
    breakdown: [
      { part: 'send', gloss: '送，发送' },
      { part: 'back', gloss: '回，向后' },
    ],
  },
  sit: {
    word: 'sit',
    phonetic: '/sɪt/',
    pos: 'v.',
    meaning: '坐；位于，待在某个位置',
  },
  'find out': {
    word: 'find out',
    phonetic: '/ˌfaɪnd ˈaʊt/',
    pos: 'phr.',
    meaning: '查明，弄清楚',
    breakdown: [
      { part: 'find', gloss: '找到' },
      { part: 'out', gloss: '出来' },
    ],
  },
  safe: {
    word: 'safe',
    phonetic: '/seɪf/',
    pos: 'adj.',
    meaning: '安全的，没有危险的',
  },
  'climb over': {
    word: 'climb over',
    phonetic: '/ˌklaɪm ˈoʊvər/',
    pos: 'phr.',
    meaning: '爬过，翻越',
    breakdown: [
      { part: 'climb', gloss: '爬，攀登' },
      { part: 'over', gloss: '越过，到另一边' },
    ],
  },
  matter: {
    word: 'matter',
    phonetic: '/ˈmætər/',
    pos: 'n.',
    meaning: '物质（构成世界的东西）',
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
  'dust storm': {
    word: 'dust storm',
    phonetic: '/ˈdʌst ˌstɔːrm/',
    pos: 'phr.',
    meaning: '沙尘暴',
    breakdown: [
      { part: 'dust', gloss: '灰尘，沙尘' },
      { part: 'storm', gloss: '风暴，暴风雨' },
    ],
  },
  'reach out': {
    word: 'reach out',
    phonetic: '/ˌriːtʃ ˈaʊt/',
    pos: 'phr.',
    meaning: '伸出手（臂）',
    breakdown: [
      { part: 'reach', gloss: '伸手，伸出' },
      { part: 'out', gloss: '向外' },
    ],
  },
  'bite off': {
    word: 'bite off',
    phonetic: '/ˌbaɪt ˈɔːf/',
    pos: 'phr.',
    meaning: '咬下，咬掉',
    breakdown: [
      { part: 'bite', gloss: '咬' },
      { part: 'off', gloss: '掉，分离' },
    ],
  },
  powder: {
    word: 'powder',
    phonetic: '/ˈpaʊdər/',
    pos: 'n.',
    meaning: '粉末，粉',
  },
  'figure out': {
    word: 'figure out',
    phonetic: '/ˈfɪgjər ˌaʊt/',
    pos: 'phr.',
    meaning: '弄明白，想清楚',
    breakdown: [
      { part: 'figure', gloss: '想，推测' },
      { part: 'out', gloss: '出来' },
    ],
  },
  radio: {
    word: 'radio',
    phonetic: '/ˈreɪdioʊ/',
    pos: 'n.',
    meaning: '无线电；收音机',
  },
}
