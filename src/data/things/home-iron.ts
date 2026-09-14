import type { ThingData } from '../types';

export const homeIron: ThingData = {
  id: 'home-iron',
  slug: 'home-iron',
  simpleName: 'The Flat Hot Thing',
  realName: 'Clothes Iron',
  category: 'home',
  color: '#B0C0C0',
  funFacts: [
    'This thing gets hot enough to take lines out of cloth.',
    'It has a flat bottom that slides over cloth to make it flat.',
    'You can put water in it to make hot air that goes into cloth.',
    'People use it to make their clothes look nice before they go out.',
    'It was one of the first things in the home to use power for heat.',
    'If you leave it on one place too long, it can burn the cloth.'
  ],
  parts: [
    { id: 'body', label: 'Main Body', realName: 'Iron Housing', position: [0, 0, 0], finish: 'hull' },
    { id: 'end', label: 'Pointed End', realName: 'Soleplate Tip', position: [0, 0, -0.3], finish: 'titanium' },
    { id: 'top', label: 'Hold Part', realName: 'Handle Grip', position: [0, 0.15, 0], finish: 'cold' },
    { id: 'inside', label: 'Water Box', realName: 'Water Tank', position: [0, 0.05, 0.05], finish: 'warning' },
    { id: 'sole', label: 'Flat Bottom', realName: 'Soleplate', position: [0, -0.08, 0], finish: 'titanium' },
    { id: 'power', label: 'Line In', realName: 'Power Cord', position: [0.2, 0.1, 0.15], finish: 'cold' }
  ],
  article: [
    {
      sentences: [
        ['This is a thing that makes cloth flat and even.'],
        ['The ', { text: 'body', part: 'body' }, ' is the hard outside part that holds everything in place.'],
        ['The ', { text: 'end', part: 'end' }, ' is a small point that gets into hard-to-get-to places on cloth.'],
        ['The ', { text: 'top', part: 'top' }, ' is the part you hold to move it over cloth.'],
        ['The ', { text: 'inside', part: 'inside' }, ' holds water that turns into hot air when the thing is on.']
      ]
    },
    {
      sentences: [
        ['The ', { text: 'sole', part: 'sole' }, ' is the flat hot bottom that sits on the cloth.'],
        ['The ', { text: 'power', part: 'power' }, ' brings power from the wall to make it hot.'],
        ['When you turn it on, the ', { text: 'sole', part: 'sole' }, ' gets very hot.'],
        ['You move the ', { text: 'top', part: 'top' }, ' back and forth over the cloth.'],
        ['The heat takes out lines and makes the cloth flat.'],
        ['The ', { text: 'inside', part: 'inside' }, ' lets out hot air to help with hard lines.']
      ]
    }
  ],
  flow: [
    { partIds: ['power'], caption: 'Power comes in through the line', sentenceRef: 6 },
    { partIds: ['sole', 'body'], caption: 'The flat bottom gets very hot', sentenceRef: 7 },
    { partIds: ['top', 'end'], caption: 'You move it over the cloth', sentenceRef: 8 },
    { partIds: ['inside'], caption: 'Hot air helps take out hard lines', sentenceRef: 10 }
  ],
  keyExpressions: [
    { text: 'soleplate', partId: 'sole' },
    { text: 'handle grip', partId: 'top' },
    { text: 'water tank', partId: 'inside' },
    { text: 'power cord', partId: 'power' }
  ]
};
