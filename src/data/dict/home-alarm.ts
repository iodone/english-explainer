import type { DictEntry } from '../types'

export const homeAlarmDict: Record<string, DictEntry> = {
  'home-alarm': { word: 'home alarm system', phonetic: '/hoʊm əˈlɑːrm ˈsɪstəm/', pos: 'n.', meaning: '家庭报警系统' },
  alarm: { word: 'alarm', phonetic: '/əˈlɑːrm/', pos: 'n. / v.', meaning: '警报；使惊恐', breakdown: [{ part: 'a-', gloss: 'to' }, { part: 'l\'arme', gloss: 'French for the weapon' }] },
  siren: { word: 'siren', phonetic: '/ˈsaɪrən/', pos: 'n.', meaning: '警报器', breakdown: [{ part: 'Siren', gloss: 'Greek myth creature' }] },
  sensor: { word: 'sensor', phonetic: '/ˈsensər/', pos: 'n.', meaning: '传感器', breakdown: [{ part: 'sens', gloss: 'feel' }, { part: '-or', gloss: 'thing that' }] },
  keypad: { word: 'keypad', phonetic: '/ˈkiːpæd/', pos: 'n.', meaning: '键盘', breakdown: [{ part: 'key', gloss: 'key' }, { part: 'pad', gloss: 'flat surface' }] },
  communication: { word: 'communication', phonetic: '/kəˌmjuːnɪˈkeɪʃən/', pos: 'n.', meaning: '通信', breakdown: [{ part: 'com-', gloss: 'together' }, { part: 'munis', gloss: 'duty' }, { part: '-tion', gloss: 'act of' }] },
}