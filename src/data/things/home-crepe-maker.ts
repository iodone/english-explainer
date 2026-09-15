import type { ThingData } from '../types';

export const homeCrepeMaker: ThingData = {
  id: 'home-crepe-maker',
  slug: 'home-crepe-maker',
  simpleName: 'The Thin Food Maker',
  realName: 'Crepe Maker',
  category: 'home',
  color: '#C8B48C',
  funFacts: [
    'This tool cooks a thin flat food in a short time.',
    'The hot plate cooks the food in less than a minute.',
    'You put the plate in the wet food and turn it over.',
    'The food spreader moves the food out to a thin sheet.',
    'People eat this food with sweet food or with soft cheese.',
    'You wash the plate after it gets cool.'
  ],
  parts: [
    { id: 'plate', label: 'Hot Plate', realName: 'Plate', position: [0, 0, 0], finish: 'hull' },
    { id: 'handle', label: 'Hold Handle', realName: 'Handle', position: [-0.3, 0.02, 0], finish: 'titanium' },
    { id: 'light', label: 'Heat Light', realName: 'Temperature Light', position: [0.2, 0.06, 0], finish: 'warning' },
    { id: 'cord', label: 'Power Cord', realName: 'Cord', position: [-0.4, -0.08, 0], finish: 'cold' },
    { id: 'spreader', label: 'Food Spreader', realName: 'Batter Spreader', position: [0.14, -0.14, 0], finish: 'hull' },
    { id: 'edge', label: 'Round Edge', realName: 'Rim', position: [0, 0.03, 0], finish: 'titanium' }
  ],
  article: [
    {
      sentences: [
        ['This tool cooks a thin flat food in a short time.'],
        ['The ', { text: 'hot plate', part: 'plate' }, ' is the flat part that gets hot.'],
        ['The ', { text: 'hold handle', part: 'handle' }, ' is the part your hand holds.'],
        ['The ', { text: 'heat light', part: 'light' }, ' comes on when the plate is hot enough.'],
        ['The ', { text: 'power cord', part: 'cord' }, ' brings power from the wall.']
      ]
    },
    {
      sentences: [
        ['The ', { text: 'food spreader', part: 'spreader' }, ' is the tool that spreads the wet food thin.'],
        ['The ', { text: 'round edge', part: 'edge' }, ' keeps the wet food on the plate.'],
        ['You put the plate in the wet food and turn it over.'],
        ['The food spreader moves the food out to a thin sheet.'],
        ['The hot plate cooks the food in less than a minute.'],
        ['You turn it over and take the thin food off.']
      ]
    }
  ],
  flow: [
    { partIds: ['plate'], caption: 'The hot plate is the flat part that gets hot', sentenceRef: 1 },
    { partIds: ['spreader'], caption: 'The food spreader spreads the wet food thin', sentenceRef: 5 },
    { partIds: ['edge'], caption: 'The round edge keeps the wet food on the plate', sentenceRef: 6 },
    { partIds: ['light'], caption: 'The heat light comes on when the plate is hot enough', sentenceRef: 3 }
  ],
  keyExpressions: [
    { text: 'hot plate', partId: 'plate' },
    { text: 'hold handle', partId: 'handle' },
    { text: 'heat light', partId: 'light' },
    { text: 'food spreader', partId: 'spreader' }
  ]
};
