import type { ThingData } from '../types';

export const homeVegetablePeeler: ThingData = {
  id: 'home-vegetable-peeler',
  slug: 'home-vegetable-peeler',
  simpleName: 'The Skin Taker',
  realName: 'Peeler',
  category: 'home',
  color: '#808080',
  funFacts: [
    'This small blade takes the skin off a round food in thin strips.',
    'The blade cuts a thin strip of skin and the strip comes off.',
    'You turn the food and do the same on the other side.',
    'You wash it by hand, because food stays on the blade.',
    'You hold the food in one hand and pull the blade along it.',
    'It works on round food or long green food.'
  ],
  parts: [
    { id: 'body', label: 'Main Body', realName: 'Peeler Body', position: [0, 0, 0], finish: 'hull' },
    { id: 'blade', label: 'Cut Blade', realName: 'Peeling Blade', position: [-0.02, 0.02, 0], finish: 'titanium' },
    { id: 'handle', label: 'Hold Handle', realName: 'Handle', position: [0.24, 0, 0], finish: 'cold' },
    { id: 'cover', label: 'Top Cover', realName: 'Blade Cover', position: [0, 0.05, 0], finish: 'hull' },
    { id: 'hold', label: 'Finger Hold', realName: 'Thumb Rest', position: [0.08, 0.03, 0], finish: 'warning' },
    { id: 'end', label: 'End Tip', realName: 'Blade Tip', position: [-0.16, 0.02, 0], finish: 'titanium' }
  ],
  article: [
    {
      sentences: [
        ['This small blade takes the skin off a round food in thin strips.'],
        ['The ', { text: 'main body', part: 'body' }, ' is the part that holds the blade.'],
        ['The ', { text: 'cut blade', part: 'blade' }, ' is the sharp part that cuts under the skin.'],
        ['The ', { text: 'hold handle', part: 'handle' }, ' is the part your hand holds.'],
        ['The ', { text: 'top cover', part: 'cover' }, ' is the part that goes over the blade when you put it away.']
      ]
    },
    {
      sentences: [
        ['The ', { text: 'finger hold', part: 'hold' }, ' is the small part where your finger sits.'],
        ['The ', { text: 'end tip', part: 'end' }, ' is the sharp point at the front of the blade.'],
        ['You hold the food in one hand and pull the blade along it.'],
        ['The blade cuts a thin strip of skin and the strip comes off.'],
        ['You turn the food and do the same on the other side.'],
        ['You wash it by hand, because food stays on the blade.']
      ]
    }
  ],
  flow: [
    { partIds: ['body'], caption: 'The main body holds the blade', sentenceRef: 1 },
    { partIds: ['blade'], caption: 'The cut blade cuts under the skin', sentenceRef: 2 },
    { partIds: ['handle'], caption: 'The hold handle is what your hand holds', sentenceRef: 3 },
    { partIds: ['end'], caption: 'The end tip is the sharp point at the front', sentenceRef: 6 }
  ],
  keyExpressions: [
    { text: 'main body', partId: 'body' },
    { text: 'cut blade', partId: 'blade' },
    { text: 'hold handle', partId: 'handle' },
    { text: 'end tip', partId: 'end' }
  ]
};
