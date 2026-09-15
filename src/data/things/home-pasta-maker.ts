import type { ThingData } from '../types';

export const homePastaMaker: ThingData = {
  id: 'home-pasta-maker',
  slug: 'home-pasta-maker',
  simpleName: 'The Noodle Maker',
  realName: 'Pasta Maker',
  category: 'home',
  color: '#D9B382',
  funFacts: [
    'This machine makes long thin food from flour and water.',
    'The screw pushes the food to the shape plate.',
    'The food comes out through the holes in long thin shapes.',
    'You can change the plate to make other shapes.',
    'Some plates make flat shapes and some make round ones.',
    'You hang the long food up to dry before you cook it.'
  ],
  parts: [
    { id: 'hopper', label: 'Food Hopper', realName: 'Hopper', position: [0, 0.2, 0], finish: 'hull' },
    { id: 'screw', label: 'Turn Screw', realName: 'Screw', position: [0, 0.02, 0], finish: 'titanium' },
    { id: 'die', label: 'Shape Plate', realName: 'Die', position: [0, -0.2, 0], finish: 'hull' },
    { id: 'motor', label: 'Turn Motor', realName: 'Motor', position: [0, 0.02, 0.2], finish: 'warning' },
    { id: 'handle', label: 'Hand Wheel', realName: 'Crank', position: [-0.26, 0.04, 0], finish: 'titanium' },
    { id: 'tray', label: 'Catch Tray', realName: 'Tray', position: [0, -0.34, 0], finish: 'hull' }
  ],
  article: [
    {
      sentences: [
        ['This machine makes long thin food from flour and water.'],
        ['The ', { text: 'food hopper', part: 'hopper' }, ' is the wide top where the flour goes in.'],
        ['The ', { text: 'turn screw', part: 'screw' }, ' is the long part that pushes the food along.'],
        ['The ', { text: 'shape plate', part: 'die' }, ' is the flat part with holes in it.'],
        ['The ', { text: 'turn motor', part: 'motor' }, ' is the part that turns the screw.']
      ]
    },
    {
      sentences: [
        ['The ', { text: 'hand wheel', part: 'handle' }, ' lets you turn the screw by hand.'],
        ['The ', { text: 'catch tray', part: 'tray' }, ' takes the food as it comes out.'],
        ['You put the flour and the water in the hopper.'],
        ['The screw pushes the food to the shape plate.'],
        ['The food comes out through the holes in long thin shapes.'],
        ['You can change the plate to make other shapes.']
      ]
    }
  ],
  flow: [
    { partIds: ['hopper'], caption: 'The food hopper is the wide top where the flour goes in', sentenceRef: 1 },
    { partIds: ['screw'], caption: 'The turn screw pushes the food along', sentenceRef: 2 },
    { partIds: ['die'], caption: 'The shape plate is the flat part with holes in it', sentenceRef: 3 },
    { partIds: ['motor'], caption: 'The turn motor turns the screw', sentenceRef: 4 }
  ],
  keyExpressions: [
    { text: 'food hopper', partId: 'hopper' },
    { text: 'turn screw', partId: 'screw' },
    { text: 'shape plate', partId: 'die' },
    { text: 'catch tray', partId: 'tray' }
  ]
};
