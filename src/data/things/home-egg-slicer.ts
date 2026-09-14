import type { ThingData } from '../types';

export const homeEggSlicer: ThingData = {
  id: 'home-egg-slicer',
  slug: 'home-egg-slicer',
  simpleName: 'The Egg Cutter',
  realName: 'Egg Slicer',
  category: 'home',
  color: '#808080',
  funFacts: [
    'An egg slicer cuts a hard egg into even parts with one push.',
    'The thin wires go all the way through the egg.',
    'The cup holds the egg so it does not roll away.',
    'You can turn the egg and cut it the other way for small bits.',
    'The wires must be pulled out of the frame when you wash it.',
    'It also works for other soft food.'
  ],
  parts: [
    { id: 'tray', label: 'Hold Tray', realName: 'Body Tray', position: [0, -0.12, 0], finish: 'hull' },
    { id: 'cup', label: 'Egg Cup', realName: 'Egg Cradle', position: [0, -0.06, 0], finish: 'cold' },
    { id: 'wire', label: 'Cut Wires', realName: 'Cutting Wires', position: [0, 0, 0], finish: 'titanium' },
    { id: 'handle', label: 'Press Handle', realName: 'Press Handle', position: [0, 0.24, 0], finish: 'hull' },
    { id: 'frame', label: 'Top Frame', realName: 'Hinge Frame', position: [-0.16, 0.06, 0.12], finish: 'titanium' },
    { id: 'spring', label: 'Spring Back', realName: 'Return Spring', position: [-0.16, -0.04, -0.12], finish: 'cold' }
  ],
  article: [
    {
      sentences: [
        ['This small frame cuts a hard egg into even parts with one push.'],
        ['The ', { text: 'hold tray', part: 'tray' }, ' is the bottom part that sits on the table.'],
        ['The ', { text: 'egg cup', part: 'cup' }, ' is the round hole where the egg goes.'],
        ['The ', { text: 'cut wires', part: 'wire' }, ' are the thin lines that cut through the egg.'],
        ['The ', { text: 'press handle', part: 'handle' }, ' is the part your hand pushes down.']
      ]
    },
    {
      sentences: [
        ['The ', { text: 'top frame', part: 'frame' }, ' is the part that holds the wires and moves down.'],
        ['The ', { text: 'spring back', part: 'spring' }, ' is the part that lifts the frame again.'],
        ['You put the egg in the cup and push the handle down.'],
        ['The wires go through the egg and it comes out in even parts.'],
        ['You turn the egg and push again for smaller bits.'],
        ['You wash the wires right after use, because egg stays on them.']
      ]
    }
  ],
  flow: [
    { partIds: ['handle'], caption: 'The press handle moves the frame down', sentenceRef: 4 },
    { partIds: ['wire'], caption: 'The cut wires cut through the egg', sentenceRef: 3 },
    { partIds: ['cup'], caption: 'The egg cup holds the egg', sentenceRef: 2 },
    { partIds: ['frame'], caption: 'The top frame holds the wires', sentenceRef: 5 }
  ],
  keyExpressions: [
    { text: 'hold tray', partId: 'tray' },
    { text: 'egg cup', partId: 'cup' },
    { text: 'cut wires', partId: 'wire' },
    { text: 'press handle', partId: 'handle' }
  ]
};
