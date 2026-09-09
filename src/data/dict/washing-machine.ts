import type { DictEntry } from '../types'

/**
 * Boxes That Make Clothes Smell Better — Washing Machine & Dryer 词条表
 * key 与 things/washing-machine.ts 文中 dict 标注一一对应（动词短语用原形 key）。
 */
export const washingMachineDict: Record<string, DictEntry> = {
  'side by side': {
    word: 'side by side',
    phonetic: '/ˌsaɪd baɪ ˈsaɪd/',
    pos: 'phr.',
    meaning: '并排地；紧挨在一起',
    breakdown: [
      { part: 'side', gloss: '边/侧' },
      { part: 'by', gloss: '挨着' },
      { part: 'side', gloss: '边/侧' },
    ],
  },
  'wash off': {
    word: 'wash off',
    phonetic: '/wɔːʃ ɔːf/',
    pos: 'phr.',
    meaning: '洗掉；用水冲掉',
    breakdown: [
      { part: 'wash', gloss: '洗' },
      { part: 'off', gloss: '掉/脱离' },
    ],
  },
  dirt: {
    word: 'dirt',
    phonetic: '/dɜːrt/',
    pos: 'n.',
    meaning: '污垢；脏东西',
  },
  wet: {
    word: 'wet',
    phonetic: '/wet/',
    pos: 'adj.',
    meaning: '湿的；潮湿的',
  },
  'fill up': {
    word: 'fill up',
    phonetic: '/fɪl ʌp/',
    pos: 'phr.',
    meaning: '（使）填满；注满',
    breakdown: [
      { part: 'fill', gloss: '装/填' },
      { part: 'up', gloss: '完全（表示装满）' },
    ],
  },
  grab: {
    word: 'grab',
    phonetic: '/ɡræb/',
    pos: 'v.',
    meaning: '抓住；抓取',
  },
  'hold on to': {
    word: 'hold on to',
    phonetic: '/hoʊld ɑːn tuː/',
    pos: 'phr.',
    meaning: '紧紧抓住；抓着不放',
    breakdown: [
      { part: 'hold', gloss: '握住' },
      { part: 'on', gloss: '继续' },
      { part: 'to', gloss: '向着/附着' },
    ],
  },
  toss: {
    word: 'toss',
    phonetic: '/tɔːs/',
    pos: 'v.',
    meaning: '扔；抛；（来回）翻动、颠动',
  },
  'over and over': {
    word: 'over and over',
    phonetic: '/ˌoʊvər ənd ˈoʊvər/',
    pos: 'phr.',
    meaning: '反复地；一遍又一遍地',
    breakdown: [
      { part: 'over', gloss: '一遍' },
      { part: 'and', gloss: '又' },
      { part: 'over', gloss: '一遍' },
    ],
  },
  'push out': {
    word: 'push out',
    phonetic: '/pʊʃ aʊt/',
    pos: 'phr.',
    meaning: '推出；把…排出去',
    breakdown: [
      { part: 'push', gloss: '推' },
      { part: 'out', gloss: '向外' },
    ],
  },
  spin: {
    word: 'spin',
    phonetic: '/spɪn/',
    pos: 'v.',
    meaning: '快速旋转',
  },
  'fly off': {
    word: 'fly off',
    phonetic: '/flaɪ ɔːf/',
    pos: 'phr.',
    meaning: '飞离；（被甩得）飞出去',
    breakdown: [
      { part: 'fly', gloss: '飞' },
      { part: 'off', gloss: '脱离' },
    ],
  },
  'pass through': {
    word: 'pass through',
    phonetic: '/pæs θruː/',
    pos: 'phr.',
    meaning: '穿过；透过',
    breakdown: [
      { part: 'pass', gloss: '经过' },
      { part: 'through', gloss: '穿过' },
    ],
  },
  'carry away': {
    word: 'carry away',
    phonetic: '/ˈkæri əˈweɪ/',
    pos: 'phr.',
    meaning: '带走；运走',
    breakdown: [
      { part: 'carry', gloss: '携带/带' },
      { part: 'away', gloss: '离开' },
    ],
  },
  'little by little': {
    word: 'little by little',
    phonetic: '/ˌlɪtl baɪ ˈlɪtl/',
    pos: 'phr.',
    meaning: '一点一点地；逐渐地',
    breakdown: [
      { part: 'little', gloss: '一点点' },
      { part: 'by', gloss: '逐次' },
      { part: 'little', gloss: '一点点' },
    ],
  },
  'stick together': {
    word: 'stick together',
    phonetic: '/ˌstɪk təˈɡeðər/',
    pos: 'phr.',
    meaning: '粘在一起；黏成一团',
    breakdown: [
      { part: 'stick', gloss: '粘/贴' },
      { part: 'together', gloss: '一起' },
    ],
  },
  'come out': {
    word: 'come out',
    phonetic: '/kʌm aʊt/',
    pos: 'phr.',
    meaning: '出来；（洗完/烘干后）从机器里取出来',
    breakdown: [
      { part: 'come', gloss: '来' },
      { part: 'out', gloss: '向外' },
    ],
  },
}
