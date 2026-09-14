import type { DictEntry } from '../types'

export const spaceLadderDict: Record<string, DictEntry> = {
  'space-ladder': { word: 'space ladder', phonetic: '/speɪs ˈlædər/', pos: 'n.', meaning: '太空梯子' },
  ladder: { word: 'ladder', phonetic: '/ˈlædər/', pos: 'n.', meaning: '梯子', breakdown: [{ part: 'hlǣder', gloss: 'Old English for ladder' }] },
  rung: { word: 'rung', phonetic: '/rʌŋ/', pos: 'n.', meaning: '梯级', breakdown: [{ part: 'hrung', gloss: 'Old English for bar' }] },
  rail: { word: 'rail', phonetic: '/reɪl/', pos: 'n.', meaning: '栏杆', breakdown: [{ part: 'rēgula', gloss: 'Latin for bar' }] },
  strap: { word: 'strap', phonetic: '/stræp/', pos: 'n.', meaning: '带子', breakdown: [{ part: 'strop', gloss: 'strip of leather' }] },
  mount: { word: 'mount', phonetic: '/maʊnt/', pos: 'n. / v.', meaning: '安装座；登上', breakdown: [{ part: 'mons', gloss: 'Latin for mountain' }] },
}