import type { ThingData } from '../types';

export const homeTeaStrainer: ThingData = {
  id: 'home-tea-strainer',
  slug: 'home-tea-strainer',
  simpleName: 'The Tea Sifter',
  realName: 'Tea Strainer',
  category: 'home',
  color: '#C0C0C0',
  funFacts: [
    'You put tea bits in this small bowl and pour hot water over them.',
    'The fine mesh holds the bits back, so the drink is clear.',
    'The handle keeps your hand away from the hot water.',
    'The top rim sits on the cup so the bowl does not fall in.',
    'You wash it after use, so the old tea does not go in the next cup.',
    'Some of them have a small lid to keep the tea warm while it sits.'
  ],
  parts: [
    { id: 'bowl', label: 'Small Bowl', realName: 'Strainer Bowl', position: [0, 0, 0], finish: 'hull' },
    { id: 'mesh', label: 'Fine Mesh', realName: 'Mesh Screen', position: [0, -0.07, 0], finish: 'titanium' },
    { id: 'handle', label: 'Hold Handle', realName: 'Handle', position: [0.4, 0.16, 0], finish: 'hull' },
    { id: 'rim', label: 'Top Rim', realName: 'Rim Ring', position: [0, 0.07, 0], finish: 'cold' },
    { id: 'rest', label: 'Drop Tray', realName: 'Drip Tray', position: [0, -0.12, 0], finish: 'titanium' },
    { id: 'lid', label: 'Top Lid', realName: 'Cover Lid', position: [0, 0.11, 0], finish: 'cold' }
  ],
  article: [
    {
      sentences: [
        ['This small bowl holds the tea bits back when you pour hot water into a cup.'],
        ['The ', { text: 'small bowl', part: 'bowl' }, ' is the cup shaped part where the tea bits sit.'],
        ['The ', { text: 'fine mesh', part: 'mesh' }, ' is the sheet with very small holes at the bottom.'],
        ['The ', { text: 'hold handle', part: 'handle' }, ' is the part your hand holds.'],
        ['The ', { text: 'top rim', part: 'rim' }, ' is the edge that sits on the cup.']
      ]
    },
    {
      sentences: [
        ['The ', { text: 'drop tray', part: 'rest' }, ' is the small plate under the bowl that catches drops.'],
        ['The ', { text: 'top lid', part: 'lid' }, ' is the cover that keeps the tea warm.'],
        ['You put the tea bits in the bowl and pour hot water over them.'],
        ['The water goes through the mesh and the bits stay in the bowl.'],
        ['You take the bowl off the cup and the drink is clear.'],
        ['You wash it after use, so the old tea does not go in the next cup.']
      ]
    }
  ],
  flow: [
    { partIds: ['bowl'], caption: 'The small bowl holds the tea bits', sentenceRef: 1 },
    { partIds: ['mesh'], caption: 'The fine mesh keeps the bits back', sentenceRef: 2 },
    { partIds: ['handle'], caption: 'The hold handle keeps your hand away from the hot water', sentenceRef: 3 },
    { partIds: ['rim'], caption: 'The top rim sits on the cup', sentenceRef: 4 }
  ],
  keyExpressions: [
    { text: 'small bowl', partId: 'bowl' },
    { text: 'fine mesh', partId: 'mesh' },
    { text: 'hold handle', partId: 'handle' },
    { text: 'top rim', partId: 'rim' }
  ]
};
