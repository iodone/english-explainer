import type { ThingData } from '../types';

export const homeEspresso: ThingData = {
  id: 'home-espresso',
  slug: 'home-espresso',
  simpleName: 'The Strong Cup Maker',
  realName: 'Espresso Machine',
  category: 'home',
  color: '#5D4037',
  funFacts: [
    'This machine pushes hot water through fine ground coffee.',
    'The water takes the good parts out of the coffee.',
    'A strong small cup of coffee comes out.',
    'The steam wand sends hot steam into milk.',
    'The gauge shows how hard the water is pushed.',
    'The drip tray catches the drops.'
  ],
  parts: [
    { id: 'head', label: 'Group Head', realName: 'Group Head', position: [0, 0.12, 0], finish: 'hull' },
    { id: 'holder', label: 'Coffee Holder', realName: 'Portafilter', position: [0, -0.04, 0], finish: 'titanium' },
    { id: 'wand', label: 'Steam Wand', realName: 'Steam Wand', position: [0.24, 0.04, 0], finish: 'cold' },
    { id: 'gauge', label: 'Gauge', realName: 'Pressure Gauge', position: [-0.2, 0.2, 0], finish: 'warning' },
    { id: 'tray', label: 'Drip Tray', realName: 'Drip Tray', position: [0, -0.24, 0], finish: 'hull' },
    { id: 'cord', label: 'Power Cord', realName: 'Cord', position: [-0.26, -0.2, 0], finish: 'cold' }
  ],
  article: [
    {
      sentences: [
        ['This machine pushes hot water through fine ground coffee.'],
        ['The ', { text: 'group head', part: 'head' }, ' is the part the hot water comes out of.'],
        ['The ', { text: 'coffee holder', part: 'holder' }, ' is the small cup that holds the ground coffee.'],
        ['The ', { text: 'steam wand', part: 'wand' }, ' sends hot steam into milk.'],
        ['The ', { text: 'gauge', part: 'gauge' }, ' shows how hard the water is pushed.']
      ]
    },
    {
      sentences: [
        ['The ', { text: 'drip tray', part: 'tray' }, ' catches the drops.'],
        ['The ', { text: 'power cord', part: 'cord' }, ' brings power from the wall.'],
        ['You put the ground coffee in the holder and lock it in.'],
        ['The machine pushes hot water through the coffee with a lot of force.'],
        ['The water takes the good parts out of the coffee.'],
        ['A strong small cup of coffee comes out.']
      ]
    }
  ],
  flow: [
    { partIds: ['head'], caption: 'The group head is the part the hot water comes out of', sentenceRef: 1 },
    { partIds: ['holder'], caption: 'The coffee holder holds the ground coffee', sentenceRef: 2 },
    { partIds: ['wand'], caption: 'The steam wand sends hot steam into milk', sentenceRef: 3 },
    { partIds: ['gauge'], caption: 'The gauge shows how hard the water is pushed', sentenceRef: 4 }
  ],
  keyExpressions: [
    { text: 'group head', partId: 'head' },
    { text: 'coffee holder', partId: 'holder' },
    { text: 'steam wand', partId: 'wand' },
    { text: 'drip tray', partId: 'tray' }
  ]
};
