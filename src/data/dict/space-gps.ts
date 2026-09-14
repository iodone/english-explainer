import type { DictEntry } from '../types'

export const spaceGpsDict: Record<string, DictEntry> = {
  'space-gps': { word: 'space GPS', phonetic: '/speɪs dʒiː piː ɛs/', pos: 'n.', meaning: '太空GPS' },
  gps: { word: 'GPS', phonetic: '/dʒiː piː ɛs/', pos: 'n.', meaning: '全球定位系统', breakdown: [{ part: 'G', gloss: 'Global' }, { part: 'P', gloss: 'Positioning' }, { part: 'S', gloss: 'System' }] },
  receiver: { word: 'receiver', phonetic: '/rɪˈsiːvər/', pos: 'n.', meaning: '接收器', breakdown: [{ part: 're-', gloss: 'back' }, { part: '-ceive', gloss: 'take' }, { part: '-r', gloss: 'one who' }] },
  antenna: { word: 'antenna', phonetic: '/ænˈtɛnə/', pos: 'n.', meaning: '天线', breakdown: [{ part: 'ante-', gloss: 'before' }, { part: '-nna', gloss: 'Latin for feeler' }] },
  display: { word: 'display', phonetic: '/dɪˈspleɪ/', pos: 'n. / v.', meaning: '显示器；展示', breakdown: [{ part: 'dis-', gloss: 'apart' }, { part: '-play', gloss: 'fold (Latin plicare)' }] },
  navigation: { word: 'navigation', phonetic: '/ˌnævɪˈɡeɪʃən/', pos: 'n.', meaning: '导航', breakdown: [{ part: 'navis', gloss: 'ship' }, { part: '-igare', gloss: 'drive' }, { part: '-tion', gloss: 'act of' }] },
  coordinate: { word: 'coordinate', phonetic: '/koʊˈɔːrdɪnət/', pos: 'n. / adj.', meaning: '坐标；协调的', breakdown: [{ part: 'co-', gloss: 'together' }, { part: 'ordinare', gloss: 'arrange' }] },
}