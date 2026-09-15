import type { ThingData } from '../types';

export const homeWaffleMaker: ThingData = {
  id: 'home-waffle-maker',
  slug: 'home-waffle-maker',
  simpleName: 'The Waffle Press',
  realName: 'Waffle Maker',
  category: 'home',
  color: '#C8A05A',
  funFacts: [
    'People have made waffles this way for a very long time.',
    'The deep holes hold warm sweet stuff on top of the food.',
    'The first waffle makers sat right on a hot stove.',
    'You can turn the press over on some kinds to cook the other side.',
    'The ready light helps you know when to put the batter in.',
    'Never touch the hot plates with your hand; the handle is the safe part.'
  ],
  parts: [
    { id: 'top-plate', label: 'Top Plate', realName: 'Top Plate', position: [0, 0.25, 0], finish: 'hull' },
    { id: 'bottom-plate', label: 'Bottom Plate', realName: 'Bottom Plate', position: [0, -0.25, 0], finish: 'hull' },
    { id: 'handle', label: 'Handle', realName: 'Handle', position: [0.5, 0.25, 0.15], finish: 'titanium' },
    { id: 'light', label: 'Ready Light', realName: 'Ready Light', position: [-0.45, 0.35, 0.2], finish: 'warning' },
    { id: 'pour-spot', label: 'Pour Spot', realName: 'Pour Spot', position: [0, 0.5, 0.1], finish: 'cold' },
    { id: 'cord', label: 'Power Line', realName: 'Power Cord', position: [-0.5, -0.3, -0.1], finish: 'cold' }
  ],
  article: [
    {
      sentences: [
        ['This hot press cooks a soft food batter and gives it deep holes.'],
        ['The ', { text: 'top plate', part: 'top-plate' }, ' gets hot and presses down on the food.'],
        ['The ', { text: 'bottom plate', part: 'bottom-plate' }, ' gets hot too, so the food cooks on both sides at once.'],
        ['The ', { text: 'pour spot', part: 'pour-spot' }, ' is the place where you put in the soft batter.'],
        ['The ', { text: 'handle', part: 'handle' }, ' stays cool, so you can lift the top plate and not burn your hand.']
      ]
    },
    {
      sentences: [
        ['The ', { text: 'ready light', part: 'light' }, ' comes on when the plates are hot enough to start.'],
        ['The ', { text: 'power line', part: 'cord' }, ' brings the power in from the wall.'],
        ['You close the press and wait while the food cooks inside.'],
        ['The deep holes hold the batter so it does not run out the sides.'],
        ['In a few minutes the food turns a warm brown, and that means it is done.'],
        ['Open the press and lift the food out onto a plate.']
      ]
    }
  ],
  flow: [
    { partIds: ['pour-spot'], caption: 'The pour spot is the place where you put in the soft batter', sentenceRef: 3 },
    { partIds: ['top-plate'], caption: 'The top plate gets hot and presses down on the food', sentenceRef: 1 },
    { partIds: ['handle'], caption: 'The handle stays cool, so you can lift the top plate and not burn your hand', sentenceRef: 4 },
    { partIds: ['light'], caption: 'The ready light comes on when the plates are hot enough to start', sentenceRef: 5 }
  ],
  keyExpressions: [
    { text: 'top plate', partId: 'top-plate' },
    { text: 'bottom plate', partId: 'bottom-plate' },
    { text: 'pour spot', partId: 'pour-spot' },
    { text: 'ready light', partId: 'light' }
  ]
};
