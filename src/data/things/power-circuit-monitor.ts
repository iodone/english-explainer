import type { ThingData } from '../types';

export const powerCircuitMonitor: ThingData = {
  id: 'power-circuit-monitor',
  slug: 'power-circuit-monitor',
  simpleName: 'The Line Watcher',
  realName: 'Circuit Monitor',
  category: 'power',
  color: '#455A64',
  funFacts: [
    'This box watches the power in a line and shows if it is well.',
    'The screen shows the push, the flow, and the power.',
    'When a number goes too far, the alarm tells you.',
    'Then you can look at the line and find the bad part.',
    'People use it to keep a big machine in good shape.',
    'It can also keep a record of the numbers for later.'
  ],
  parts: [
    { id: 'case', label: 'Main Case', realName: 'Case', position: [0, 0, 0], finish: 'hull' },
    { id: 'display', label: 'Read Screen', realName: 'Display', position: [0.12, 0.12, 0], finish: 'hull' },
    { id: 'wire', label: 'Sense Wire', realName: 'Sense Wire', position: [-0.28, 0, 0], finish: 'cold' },
    { id: 'input', label: 'Power End', realName: 'Power Input', position: [0.3, 0, 0], finish: 'titanium' },
    { id: 'alarm', label: 'Loud Alarm', realName: 'Alarm', position: [-0.14, 0.14, 0], finish: 'warning' },
    { id: 'button', label: 'Set Button', realName: 'Button', position: [-0.1, -0.12, 0], finish: 'titanium' }
  ],
  article: [
    {
      sentences: [
        ['This box watches the power in a line and shows if it is well.'],
        ['The ', { text: 'main case', part: 'case' }, ' is the box that holds the parts.'],
        ['The ', { text: 'read screen', part: 'display' }, ' shows the numbers.'],
        ['The ', { text: 'sense wire', part: 'wire' }, ' goes round the line and reads the power.'],
        ['The ', { text: 'power end', part: 'input' }, ' takes the line in from the wall.']
      ]
    },
    {
      sentences: [
        ['The ', { text: 'loud alarm', part: 'alarm' }, ' makes a sound if the power is wrong.'],
        ['The ', { text: 'set button', part: 'button' }, ' lets you pick the numbers you want.'],
        ['The screen shows the push, the flow, and the power.'],
        ['When a number goes too far, the alarm tells you.'],
        ['Then you can look at the line and find the bad part.'],
        ['People use it to keep a big machine in good shape.']
      ]
    }
  ],
  flow: [
    { partIds: ['display'], caption: 'The read screen shows the numbers', sentenceRef: 2 },
    { partIds: ['wire'], caption: 'The sense wire goes round the line and reads the power', sentenceRef: 3 },
    { partIds: ['input'], caption: 'The power end takes the line in from the wall', sentenceRef: 4 },
    { partIds: ['alarm'], caption: 'The loud alarm makes a sound if the power is wrong', sentenceRef: 5 }
  ],
  keyExpressions: [
    { text: 'read screen', partId: 'display' },
    { text: 'sense wire', partId: 'wire' },
    { text: 'power end', partId: 'input' },
    { text: 'loud alarm', partId: 'alarm' }
  ]
};
