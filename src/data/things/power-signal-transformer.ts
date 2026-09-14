import type { ThingData } from '../types';

export const powerSignalTransformer: ThingData = {
  id: 'power-signal-transformer',
  slug: 'power-signal-transformer',
  simpleName: 'The Signal Changer',
  realName: 'Signal Transformer',
  category: 'power',
  color: '#FF8C00',
  funFacts: [
    'This box takes a small signal and makes it big enough to use.',
    'It is used in phones, radios, and other small boxes.',
    'Two rolls of fine wire sit on one iron ring inside.',
    'The ring carries the signal from one roll to the other without a wire between them.',
    'The number of turns on each roll sets how much the signal changes.',
    'It keeps the two sides from touching, so no power goes straight through.'
  ],
  parts: [
    { id: 'core', label: 'Iron Ring', realName: 'Iron Core', position: [0, 0, 0], finish: 'titanium' },
    { id: 'wire', label: 'Fine Wire', realName: 'Coil Winding', position: [0, 0, 0.05], finish: 'warning' },
    { id: 'in', label: 'Signal In', realName: 'Input Side', position: [-0.3, 0.13, 0], finish: 'hull' },
    { id: 'out', label: 'Signal Out', realName: 'Output Side', position: [0.3, 0.13, 0], finish: 'hull' },
    { id: 'case', label: 'Main Case', realName: 'Transformer Case', position: [0, 0, 0], finish: 'hull' },
    { id: 'sheet', label: 'Sheet Layers', realName: 'Insulating Sheet', position: [0, 0, -0.09], finish: 'cold' }
  ],
  article: [
    {
      sentences: [
        ['This box takes a small signal and makes it big, or makes a big one small.'],
        ['The ', { text: 'iron ring', part: 'core' }, ' is the ring inside that carries the signal.'],
        ['The ', { text: 'fine wire', part: 'wire' }, ' is the thin wire rolled many times around the ring.'],
        ['The ', { text: 'signal in', part: 'in' }, ' is the side where the small signal comes in.'],
        ['The ', { text: 'signal out', part: 'out' }, ' is the side where the changed signal goes out.']
      ]
    },
    {
      sentences: [
        ['The ', { text: 'sheet layers', part: 'sheet' }, ' are the thin sheets that keep the two sides from touching.'],
        ['The ', { text: 'main case', part: 'case' }, ' is the box that holds the ring and the wire.'],
        ['Signal goes in on one side and moves through the iron ring.'],
        ['The other roll picks it up and sends it out on the far side.'],
        ['No wire joins the two sides, so the box is safe to touch.'],
        ['People use it when they must change a signal from one size to another.']
      ]
    }
  ],
  flow: [
    { partIds: ['core'], caption: 'The iron ring carries the signal', sentenceRef: 1 },
    { partIds: ['wire'], caption: 'The fine wire is rolled around the ring', sentenceRef: 2 },
    { partIds: ['in'], caption: 'The signal in is where the small signal comes in', sentenceRef: 3 },
    { partIds: ['out'], caption: 'The signal out is where the changed signal goes out', sentenceRef: 4 }
  ],
  keyExpressions: [
    { text: 'iron ring', partId: 'core' },
    { text: 'fine wire', partId: 'wire' },
    { text: 'signal in', partId: 'in' },
    { text: 'signal out', partId: 'out' }
  ]
};
