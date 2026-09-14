import type { DictEntry } from '../types';

export const powerFaultRelayDict: Record<string, DictEntry> = {
  'power-fault-relay': { word: 'fault relay', phonetic: '/fɔːlt ˈriːleɪ/', pos: 'n.', meaning: '发现电走错路就马上把电断掉的小盒' },
  'fault relay': { word: 'fault relay', phonetic: '/fɔːlt ˈriːleɪ/', pos: 'n.', meaning: '发现电走错路就马上把电断掉的小盒' },
  'power wire': { word: 'power wire', phonetic: '/ˈpaʊər ˈwaɪər/', pos: 'n.', meaning: '电进来又出去的那根线' },
  'bad power sensor': { word: 'bad power sensor', phonetic: '/bæd ˈpaʊər ˈsɛnsər/', pos: 'n.', meaning: '一直盯着电流、看它有没有走错路的检测件' },
  'pick coil': { word: 'pick coil', phonetic: '/pɪk kɔɪl/', pos: 'n.', meaning: '绕着导线、能感觉出电流的一小卷线圈' },
  'break contact': { word: 'break contact', phonetic: '/breɪk ˈkɒntækt/', pos: 'n.', meaning: '一分开就把电断掉的触点' },
  'main case': { word: 'main case', phonetic: '/meɪn keɪs/', pos: 'n.', meaning: '装住全部零件的外壳' },
  'set knob': { word: 'set knob', phonetic: '/sɛt nɒb/', pos: 'n.', meaning: '用来设定多大电流算太大的旋钮' }
};
