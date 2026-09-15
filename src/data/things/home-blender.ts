import type { ThingData } from '../types';

export const homeBlender: ThingData = {
  id: 'home-blender',
  slug: 'home-blender',
  simpleName: 'The Fast Cutter',
  realName: 'Blender',
  category: 'home',
  color: '#90A4AE',
  funFacts: [
    'This machine cuts food into a drink with fast blades.',
    'The fast blades cut the food into very small bits.',
    'The food becomes a drink with no bits in it.',
    'You put the food and some water in the jar.',
    'You close the lid before you turn it on.',
    'You wash the jar and the blades after you use it.'
  ],
  parts: [
    { id: 'jar', label: 'Food Jar', realName: 'Jar', position: [0, 0.14, 0], finish: 'hull' },
    { id: 'blade', label: 'Cut Blades', realName: 'Blades', position: [0, -0.08, 0], finish: 'titanium' },
    { id: 'motor', label: 'Turn Motor', realName: 'Motor', position: [0, -0.24, 0], finish: 'warning' },
    { id: 'base', label: 'Base', realName: 'Base', position: [0, -0.34, 0], finish: 'hull' },
    { id: 'lid', label: 'Top Lid', realName: 'Lid', position: [0, 0.34, 0], finish: 'hull' },
    { id: 'dial', label: 'Speed Dial', realName: 'Dial', position: [0.24, -0.32, 0], finish: 'titanium' }
  ],
  article: [
    {
      sentences: [
        ['This machine cuts food into a drink with fast blades.'],
        ['The ', { text: 'food jar', part: 'jar' }, ' is the tall cup that holds the food.'],
        ['The ', { text: 'cut blades', part: 'blade' }, ' are the sharp parts that turn very fast.'],
        ['The ', { text: 'turn motor', part: 'motor' }, ' is the part that makes the blades turn.'],
        ['The ', { text: 'base', part: 'base' }, ' holds the jar and the motor.']
      ]
    },
    {
      sentences: [
        ['The ', { text: 'top lid', part: 'lid' }, ' keeps the food in the jar.'],
        ['The ', { text: 'speed dial', part: 'dial' }, ' sets how fast the blades turn.'],
        ['You put the food and some water in the jar.'],
        ['You close the lid and turn the dial.'],
        ['The fast blades cut the food into very small bits.'],
        ['The food becomes a drink with no bits in it.']
      ]
    }
  ],
  flow: [
    { partIds: ['jar'], caption: 'The food jar is the tall cup that holds the food', sentenceRef: 1 },
    { partIds: ['blade'], caption: 'The cut blades turn very fast', sentenceRef: 2 },
    { partIds: ['motor'], caption: 'The turn motor makes the blades turn', sentenceRef: 3 },
    { partIds: ['lid'], caption: 'The top lid keeps the food in the jar', sentenceRef: 5 }
  ],
  keyExpressions: [
    { text: 'food jar', partId: 'jar' },
    { text: 'cut blades', partId: 'blade' },
    { text: 'turn motor', partId: 'motor' },
    { text: 'top lid', partId: 'lid' }
  ]
};
