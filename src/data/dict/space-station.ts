import type { DictEntry } from '../types'

/**
 * Shared Space House（International Space Station）词条表
 * key 与文章 dict 标注一一对应（动词短语用原形）。
 */
export const spaceStationDict: Record<string, DictEntry> = {
  'fly around': {
    word: 'fly around',
    phonetic: '/flaɪ əˈraʊnd/',
    pos: 'phr v.',
    meaning: '绕着……飞行；四处飞',
  },
  'far above': {
    word: 'far above',
    phonetic: '/fɑːr əˈbʌv/',
    pos: 'adv. phr.',
    meaning: '远在……上方；高出许多',
  },
  'carry out': {
    word: 'carry out',
    phonetic: '/ˈkæri aʊt/',
    pos: 'phr v.',
    meaning: '开展；执行；完成（研究、计划等）',
    breakdown: [
      { part: 'carry', gloss: '搬运、运送' },
      { part: 'out', gloss: '从头做到尾 → 完成' },
    ],
  },
  'go around': {
    word: 'go around',
    phonetic: '/ɡoʊ əˈraʊnd/',
    pos: 'phr v.',
    meaning: '绕行；围绕……转圈',
  },
  float: {
    word: 'float',
    phonetic: '/floʊt/',
    pos: 'v.',
    meaning: '漂浮；飘浮',
  },
  'fall toward': {
    word: 'fall toward',
    phonetic: '/fɔːl təˈwɔːrd/',
    pos: 'phr v.',
    meaning: '朝……方向坠落',
  },
  hit: {
    word: 'hit',
    phonetic: '/hɪt/',
    pos: 'v.',
    meaning: '撞上；击中',
  },
  'feel like': {
    word: 'feel like',
    phonetic: '/fiːl laɪk/',
    pos: 'phr v.',
    meaning: '感觉像是……',
  },
  tie: {
    word: 'tie',
    phonetic: '/taɪ/',
    pos: 'v.',
    meaning: '系；绑；拴住',
  },
  'float away': {
    word: 'float away',
    phonetic: '/floʊt əˈweɪ/',
    pos: 'phr v.',
    meaning: '飘走；漂走',
  },
  face: {
    word: 'face',
    phonetic: '/feɪs/',
    pos: 'v.',
    meaning: '朝向；面对',
  },
  'turn into': {
    word: 'turn into',
    phonetic: '/tɜːrn ˈɪntuː/',
    pos: 'phr v.',
    meaning: '把……变成……；（使）变为',
    breakdown: [
      { part: 'turn', gloss: '转变' },
      { part: 'into', gloss: '进入（另一种形态）' },
    ],
  },
  'run across': {
    word: 'run across',
    phonetic: '/rʌn əˈkrɔːs/',
    pos: 'phr v.',
    meaning: '横贯；（从一头）延伸穿过',
  },
  'get rid of': {
    word: 'get rid of',
    phonetic: '/ɡet ˈrɪd əv/',
    pos: 'phr v.',
    meaning: '摆脱；除掉；处理掉',
    breakdown: [
      { part: 'get', gloss: '使得（进入某状态）' },
      { part: 'rid', gloss: '摆脱、除去' },
      { part: 'of', gloss: '引出要除掉的东西' },
    ],
  },
  'carry away': {
    word: 'carry away',
    phonetic: '/ˈkæri əˈweɪ/',
    pos: 'phr v.',
    meaning: '带走；运走',
  },
  'throw away': {
    word: 'throw away',
    phonetic: '/θroʊ əˈweɪ/',
    pos: 'phr v.',
    meaning: '扔掉；抛掉',
    breakdown: [
      { part: 'throw', gloss: '扔、抛' },
      { part: 'away', gloss: '离开、向远处' },
    ],
  },
  catch: {
    word: 'catch',
    phonetic: '/kætʃ/',
    pos: 'v.',
    meaning: '抓住；接住',
  },
}
