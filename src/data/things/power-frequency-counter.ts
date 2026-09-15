import type { ThingData } from '../types';

export const powerFrequencyCounter: ThingData = {
  id: 'power-frequency-counter',
  slug: 'power-frequency-counter',
  simpleName: 'The Wave Counter',
  realName: 'Frequency Counter',
  category: 'power',
  color: '#3F51B5',
  funFacts: [
    'This box counts how many times a signal goes back and forth in one second.',
    'A signal can go back and forth many times in one second.',
    'The chip counts each wave and writes down the number.',
    'If the number is not right, the alarm tells you.',
    'People use it to check that a power line runs at the right speed.',
    'It can count a very big number of waves in one second.'
  ],
  parts: [
    { id: 'input', label: 'Input Wire', realName: 'Input Wire', position: [-0.28, 0, 0], finish: 'cold' },
    { id: 'chip', label: 'Count Chip', realName: 'Chip', position: [0, 0, 0], finish: 'hull' },
    { id: 'display', label: 'Read Screen', realName: 'Display', position: [0.08, 0.14, 0], finish: 'titanium' },
    { id: 'case', label: 'Main Case', realName: 'Case', position: [0, -0.08, 0], finish: 'hull' },
    { id: 'alarm', label: 'Loud Alarm', realName: 'Alarm', position: [-0.16, 0.14, 0], finish: 'warning' },
    { id: 'button', label: 'Set Button', realName: 'Button', position: [-0.14, -0.14, 0], finish: 'titanium' }
  ],
  article: [
    {
      sentences: [
        ['This box counts how many times a signal goes back and forth in one second.'],
        ['The ', { text: 'input wire', part: 'input' }, ' brings the signal in from the line.'],
        ['The ', { text: 'count chip', part: 'chip' }, ' is the part that counts the waves.'],
        ['The ', { text: 'read screen', part: 'display' }, ' shows the number.'],
        ['The ', { text: 'main case', part: 'case' }, ' is the box that holds the parts.']
      ]
    },
    {
      sentences: [
        ['The ', { text: 'loud alarm', part: 'alarm' }, ' makes a sound if the speed is wrong.'],
        ['The ', { text: 'set button', part: 'button' }, ' lets you pick the speed you want.'],
        ['A signal can go back and forth many times in one second.'],
        ['The chip counts each wave and writes down the number.'],
        ['If the number is not right, the alarm tells you.'],
        ['People use it to check that a power line runs at the right speed.']
      ]
    }
  ],
  flow: [
    { partIds: ['input'], caption: 'The input wire brings the signal in from the line', sentenceRef: 1 },
    { partIds: ['chip'], caption: 'The count chip counts the waves', sentenceRef: 2 },
    { partIds: ['display'], caption: 'The read screen shows the number', sentenceRef: 3 },
    { partIds: ['alarm'], caption: 'The loud alarm makes a sound if the speed is wrong', sentenceRef: 5 }
  ],
  keyExpressions: [
    { text: 'input wire', partId: 'input' },
    { text: 'count chip', partId: 'chip' },
    { text: 'read screen', partId: 'display' },
    { text: 'loud alarm', partId: 'alarm' }
  ]
};
