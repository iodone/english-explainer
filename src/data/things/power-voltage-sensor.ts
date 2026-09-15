import type { ThingData } from '../types';

export const powerVoltageSensor: ThingData = {
  id: 'power-voltage-sensor',
  slug: 'power-voltage-sensor',
  simpleName: 'The Push Reader',
  realName: 'Voltage Sensor',
  category: 'power',
  color: '#0097A7',
  funFacts: [
    'This small part reads how strong the push is in a wire.',
    'When the push is too big or too small, the chip sees it.',
    'It sends the number on, and the alarm tells you.',
    'People use it to watch a power line and find problems.',
    'It can work all day and not get tired.',
    'The read screen shows the number.'
  ],
  parts: [
    { id: 'input', label: 'Input Wire', realName: 'Input Wire', position: [-0.28, 0, 0], finish: 'cold' },
    { id: 'chip', label: 'Small Chip', realName: 'Chip', position: [-0.02, 0.02, 0], finish: 'hull' },
    { id: 'output', label: 'Output Wire', realName: 'Output Wire', position: [0.26, 0, 0], finish: 'cold' },
    { id: 'display', label: 'Read Screen', realName: 'Display', position: [0.02, 0.14, 0], finish: 'titanium' },
    { id: 'alarm', label: 'Loud Alarm', realName: 'Alarm', position: [-0.14, 0.14, 0], finish: 'warning' },
    { id: 'case', label: 'Main Case', realName: 'Case', position: [0, -0.1, 0], finish: 'hull' }
  ],
  article: [
    {
      sentences: [
        ['This small part reads how strong the push is in a wire.'],
        ['The ', { text: 'input wire', part: 'input' }, ' brings the power in from the line.'],
        ['The ', { text: 'small chip', part: 'chip' }, ' is the part that turns the push into a number.'],
        ['The ', { text: 'output wire', part: 'output' }, ' sends the number to the other parts.'],
        ['The ', { text: 'read screen', part: 'display' }, ' shows the number.']
      ]
    },
    {
      sentences: [
        ['The ', { text: 'loud alarm', part: 'alarm' }, ' makes a sound if the push is too big.'],
        ['The ', { text: 'main case', part: 'case' }, ' is the box that holds the parts.'],
        ['When the push is too big or too small, the chip sees it.'],
        ['It sends the number on, and the alarm tells you.'],
        ['People use it to watch a power line and find problems.'],
        ['It can work all day and not get tired.']
      ]
    }
  ],
  flow: [
    { partIds: ['input'], caption: 'The input wire brings the power in from the line', sentenceRef: 1 },
    { partIds: ['chip'], caption: 'The small chip turns the push into a number', sentenceRef: 2 },
    { partIds: ['output'], caption: 'The output wire sends the number to the other parts', sentenceRef: 3 },
    { partIds: ['display'], caption: 'The read screen shows the number', sentenceRef: 4 }
  ],
  keyExpressions: [
    { text: 'input wire', partId: 'input' },
    { text: 'small chip', partId: 'chip' },
    { text: 'output wire', partId: 'output' },
    { text: 'loud alarm', partId: 'alarm' }
  ]
};
