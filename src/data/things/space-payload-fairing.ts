import type { ThingData } from '../types';

export const spacePayloadFairing: ThingData = {
  id: 'space-payload-fairing',
  slug: 'space-payload-fairing',
  simpleName: 'The Nose Cover',
  realName: 'Payload Fairing',
  category: 'space',
  color: '#D0D4D8',
  funFacts: [
    'This cover sits on top of a rocket and keeps the load safe from the air.',
    'The shell must be light, so it is made of thin metal.',
    'The hot skin takes the heat so the parts inside stay cool.',
    'The two halves are thrown away after each flight.',
    'People must build a new cover for each rocket.',
    'A big load needs a big cover, and the cover is as wide as the rocket.'
  ],
  parts: [
    { id: 'shell', label: 'Big Shell', realName: 'Shell', position: [0, 0.2, 0], finish: 'hull' },
    { id: 'split-line', label: 'Break Line', realName: 'Split Line', position: [0, 0, 0.15], finish: 'cold' },
    { id: 'clamp', label: 'Hold Clamp', realName: 'Clamp', position: [0.3, -0.1, 0.1], finish: 'titanium' },
    { id: 'spring', label: 'Push Spring', realName: 'Spring', position: [-0.3, 0.1, 0.08], finish: 'cold' },
    { id: 'heat-layer', label: 'Hot Skin', realName: 'Heat Layer', position: [0, 0.3, -0.05], finish: 'warning' },
    { id: 'bolt', label: 'Break Bolt', realName: 'Bolt', position: [0.2, -0.2, 0.12], finish: 'titanium' }
  ],
  article: [
    {
      sentences: [
        ['This cover sits on the top of a rocket and keeps the load safe.'],
        ['The ', { text: 'big shell', part: 'shell' }, ' is the two half boxes that cover the load.'],
        ['The ', { text: 'break line', part: 'split-line' }, ' is the place where the two halves come apart.'],
        ['The ', { text: 'hold clamp', part: 'clamp' }, ' holds the two halves shut while the rocket goes up.'],
        ['The ', { text: 'hot skin', part: 'heat-layer' }, ' takes the heat when the rocket goes up through the air.']
      ]
    },
    {
      sentences: [
        ['The ', { text: 'break bolt', part: 'bolt' }, ' comes apart when the rocket is high in the sky.'],
        ['Then the ', { text: 'push spring', part: 'spring' }, ' pushes the two halves away from the load.'],
        ['The two halves fall back to the ground and no one is hurt.'],
        ['The load can then open its own sun boards and fly on.'],
        ['This cover is used one time only, and then it is gone.'],
        ['It is gone after one flight, so people must build a new one.']
      ]
    }
  ],
  flow: [
    { partIds: ['shell'], caption: 'The big shell is the two half boxes that cover the load', sentenceRef: 1 },
    { partIds: ['split-line'], caption: 'The break line is the place where the two halves come apart', sentenceRef: 2 },
    { partIds: ['clamp'], caption: 'The hold clamp holds the two halves shut while the rocket goes up', sentenceRef: 3 },
    { partIds: ['spring'], caption: 'Then the push spring pushes the two halves away from the load', sentenceRef: 6 }
  ],
  keyExpressions: [
    { text: 'big shell', partId: 'shell' },
    { text: 'break line', partId: 'split-line' },
    { text: 'hold clamp', partId: 'clamp' },
    { text: 'push spring', partId: 'spring' }
  ]
};
