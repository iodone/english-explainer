import type { ThingData } from '../types';

export const powerDataLogger: ThingData = {
  id: 'power-data-logger',
  slug: 'power-data-logger',
  simpleName: 'The Number Keeper',
  realName: 'Data Logger',
  category: 'power',
  color: '#607D8B',
  funFacts: [
    'This small box writes down the power in a line all day.',
    'It can write down one number every second for many days.',
    'People read the numbers to find what went wrong.',
    'It can work with no wall plug, so you can carry it.',
    'Some of them can send the numbers to a computer far away.',
    'Then people use what they learn to make the line safe.'
  ],
  parts: [
    { id: 'case', label: 'Main Case', realName: 'Case', position: [0, 0, 0], finish: 'hull' },
    { id: 'chip', label: 'Memory Chip', realName: 'Memory Chip', position: [0, 0, 0], finish: 'hull' },
    { id: 'wire', label: 'Sense Wire', realName: 'Sense Wire', position: [-0.26, 0, 0], finish: 'cold' },
    { id: 'display', label: 'Read Screen', realName: 'Display', position: [0.14, 0.1, 0], finish: 'titanium' },
    { id: 'battery', label: 'Small Battery', realName: 'Battery', position: [0.14, -0.08, 0], finish: 'warning' },
    { id: 'button', label: 'Start Button', realName: 'Button', position: [-0.14, -0.1, 0], finish: 'titanium' }
  ],
  article: [
    {
      sentences: [
        ['This small box writes down the power in a line all day.'],
        ['The ', { text: 'main case', part: 'case' }, ' is the box that holds the parts.'],
        ['The ', { text: 'memory chip', part: 'chip' }, ' is the part that keeps the numbers.'],
        ['The ', { text: 'sense wire', part: 'wire' }, ' goes round the line and reads the power.'],
        ['The ', { text: 'read screen', part: 'display' }, ' shows the numbers.']
      ]
    },
    {
      sentences: [
        ['The ', { text: 'small battery', part: 'battery' }, ' lets the box work with no wall plug.'],
        ['The ', { text: 'start button', part: 'button' }, ' turns the box on.'],
        ['The box writes down the power, the push, and the time.'],
        ['People read the numbers to find what went wrong.'],
        ['It can write down one number every second for many days.'],
        ['Then people use what they learn to make the line safe.']
      ]
    }
  ],
  flow: [
    { partIds: ['chip'], caption: 'The memory chip keeps the numbers', sentenceRef: 2 },
    { partIds: ['wire'], caption: 'The sense wire goes round the line and reads the power', sentenceRef: 3 },
    { partIds: ['display'], caption: 'The read screen shows the numbers', sentenceRef: 4 },
    { partIds: ['button'], caption: 'The start button turns the box on', sentenceRef: 6 }
  ],
  keyExpressions: [
    { text: 'memory chip', partId: 'chip' },
    { text: 'sense wire', partId: 'wire' },
    { text: 'read screen', partId: 'display' },
    { text: 'start button', partId: 'button' }
  ]
};
