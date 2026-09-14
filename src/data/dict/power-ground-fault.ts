import type { DictEntry } from '../types';

export const powerGroundFaultDict: Record<string, DictEntry> = {
  'power-ground-fault': { word: 'ground fault sensor', phonetic: '/ɡraʊnd fɔːlt ˈsɛnsər/', pos: 'n.', meaning: '发现电流漏到地里就立刻断电的小盒' },
  'ground fault sensor': { word: 'ground fault sensor', phonetic: '/ɡraʊnd fɔːlt ˈsɛnsər/', pos: 'n.', meaning: '发现电流漏到地里就立刻断电的小盒' },
  'ring coil': { word: 'ring coil', phonetic: '/rɪŋ kɔɪl/', pos: 'n.', meaning: '套住两根导线、感测有没有电流漏走的圆环' },
  'sense wind': { word: 'sense wind', phonetic: '/sɛns waɪnd/', pos: 'n.', meaning: '绕在圆环上、把漏电变成小信号的线圈' },
  'trip contact': { word: 'trip contact', phonetic: '/trɪp ˈkɒntækt/', pos: 'n.', meaning: '一跳开就把电断掉的触点' },
  'main case': { word: 'main case', phonetic: '/meɪn keɪs/', pos: 'n.', meaning: '装住内部零件的外壳' },
  'face panel': { word: 'face panel', phonetic: '/feɪs ˈpænəl/', pos: 'n.', meaning: '正面带指示灯和按钮的面板' },
  'test button': { word: 'test button', phonetic: '/tɛst ˈbʌtən/', pos: 'n.', meaning: '按一下检查还能不能用的按钮' }
};
