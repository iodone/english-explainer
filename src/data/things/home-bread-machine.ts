import type { ThingData } from '../types';

export const homeBreadMachine: ThingData = {
  id: 'home-bread-machine',
  slug: 'home-bread-machine',
  simpleName: 'The Bread Maker',
  realName: 'Bread Machine',
  category: 'home',
  color: '#C19A6B',
  funFacts: [
    'This box takes flour, water, and salt, and makes bread.',
    'You put the food in the tin and close the lid.',
    'The box works on its own, and you do not touch it.',
    'It can make bread while you sleep.',
    'When the bread is done, the box gets cool and tells you.',
    'You wash the tin with warm water after you use it.'
  ],
  parts: [
    { id: 'body', label: 'Main Body', realName: 'Body Case', position: [0, 0, 0], finish: 'hull' },
    { id: 'tin', label: 'Bread Tin', realName: 'Baking Tin', position: [0, 0.02, 0], finish: 'hull' },
    { id: 'blade', label: 'Turn Blade', realName: 'Paddle', position: [0, -0.04, 0], finish: 'titanium' },
    { id: 'lid', label: 'Top Lid', realName: 'Lid', position: [0, 0.2, 0], finish: 'cold' },
    { id: 'heater', label: 'Heat Bar', realName: 'Heating Element', position: [0, -0.16, 0], finish: 'titanium' },
    { id: 'wire', label: 'Lead Wire', realName: 'Lead Line', position: [-0.28, -0.08, 0], finish: 'warning' }
  ],
  article: [
    {
      sentences: [
        ['This box takes flour, water, and salt, and makes bread.'],
        ['The ', { text: 'main body', part: 'body' }, ' is the case that holds the parts.'],
        ['The ', { text: 'bread tin', part: 'tin' }, ' is the box where the bread is made.'],
        ['The ', { text: 'turn blade', part: 'blade' }, ' turns the food while it comes together.'],
        ['The ', { text: 'top lid', part: 'lid' }, ' closes over the tin and keeps the heat in.']
      ]
    },
    {
      sentences: [
        ['The ', { text: 'heat bar', part: 'heater' }, ' warms the food from under the tin.'],
        ['The ', { text: 'lead wire', part: 'wire' }, ' brings power from the wall.'],
        ['You put the food in the tin and close the lid.'],
        ['The box works on its own, and you do not touch it.'],
        ['When the bread is done, the box gets cool and tells you.'],
        ['Then you take the bread out and wash the tin.']
      ]
    }
  ],
  flow: [
    { partIds: ['tin'], caption: 'The bread tin is the box where the bread is made', sentenceRef: 2 },
    { partIds: ['blade'], caption: 'The turn blade turns the food while it comes together', sentenceRef: 3 },
    { partIds: ['lid'], caption: 'The top lid closes over the tin and keeps the heat in', sentenceRef: 4 },
    { partIds: ['heater'], caption: 'The heat bar warms the food from under the tin', sentenceRef: 5 }
  ],
  keyExpressions: [
    { text: 'bread tin', partId: 'tin' },
    { text: 'turn blade', partId: 'blade' },
    { text: 'top lid', partId: 'lid' },
    { text: 'heat bar', partId: 'heater' }
  ]
};
