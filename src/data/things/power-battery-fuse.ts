import type { ThingData } from '../types';

export const powerBatteryFuse: ThingData = {
  id: 'power-battery-fuse',
  slug: 'power-battery-fuse',
  simpleName: 'The Battery Safe',
  realName: 'Battery Fuse',
  category: 'power',
  color: '#FFD700',
  funFacts: [
    'This small part stops the power when it gets too big for the battery.',
    'A wire inside it gets hot and breaks, and the power stops.',
    'The sand inside takes the heat and stops a bright flash.',
    'A fuse works only one time, so people put in a new one.',
    'Every battery box has one, because a big power jump can start a fire.',
    'It is small, but it keeps the whole battery safe.'
  ],
  parts: [
    { id: 'fuse', label: 'Safe Wire', realName: 'Fuse Element', position: [0, 0, 0], finish: 'warning' },
    { id: 'case', label: 'Main Case', realName: 'Fuse Case', position: [0, 0, 0], finish: 'hull' },
    { id: 'in', label: 'Power In', realName: 'Input End', position: [-0.4, 0, 0], finish: 'hull' },
    { id: 'out', label: 'Power Out', realName: 'Output End', position: [0.4, 0, 0], finish: 'hull' },
    { id: 'sand', label: 'Sand Fill', realName: 'Arc Sand', position: [0, 0, 0], finish: 'cold' },
    { id: 'cap', label: 'End Cap', realName: 'End Cap', position: [-0.31, 0, 0], finish: 'titanium' }
  ],
  article: [
    {
      sentences: [
        ['This small part stops the power when it grows too big for the battery.'],
        ['The ', { text: 'safe wire', part: 'fuse' }, ' is the thin wire inside that breaks first.'],
        ['The ', { text: 'main case', part: 'case' }, ' is the body that holds the wire and the sand.'],
        ['The ', { text: 'power in', part: 'in' }, ' is the end where the power comes in.'],
        ['The ', { text: 'power out', part: 'out' }, ' is the end where the power goes on.']
      ]
    },
    {
      sentences: [
        ['The ', { text: 'sand fill', part: 'sand' }, ' is the dry sand around the wire.'],
        ['The ', { text: 'end cap', part: 'cap' }, ' is the metal cap that closes each end.'],
        ['Power moves through the safe wire all the time.'],
        ['When too much power goes through, the wire gets hot and breaks.'],
        ['The sand takes the heat, so no bright flash comes out.'],
        ['People put in a new fuse before the battery can work again.']
      ]
    }
  ],
  flow: [
    { partIds: ['fuse'], caption: 'The safe wire breaks when the power is too big', sentenceRef: 1 },
    { partIds: ['case'], caption: 'The main case holds the wire and the sand', sentenceRef: 2 },
    { partIds: ['sand'], caption: 'The sand fill takes the heat', sentenceRef: 5 },
    { partIds: ['cap'], caption: 'The end cap closes each end', sentenceRef: 6 }
  ],
  keyExpressions: [
    { text: 'safe wire', partId: 'fuse' },
    { text: 'main case', partId: 'case' },
    { text: 'power in', partId: 'in' },
    { text: 'power out', partId: 'out' }
  ]
};
