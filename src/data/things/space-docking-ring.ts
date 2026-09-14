import type { ThingData } from '../types';

export const spaceDockingRing: ThingData = {
  id: 'space-docking-ring',
  slug: 'space-docking-ring',
  simpleName: 'The Join Ring',
  realName: 'Docking Ring',
  category: 'space',
  color: '#C0C0C0',
  funFacts: [
    'Two ships can join in space and become one big ship.',
    'The ring must be very strong to hold the two ships together.',
    'Air stays inside the joined ships, so people can walk without a suit.',
    'The two rings must line up just right before they can lock.',
    'People move food, water, and machines through the gate hole.',
    'This ring is used when a small ship brings people to a big space station.'
  ],
  parts: [
    { id: 'ring', label: 'Main Ring', realName: 'Docking Ring', position: [0, 0.3, 0], finish: 'hull' },
    { id: 'hole', label: 'Gate Hole', realName: 'Passage Opening', position: [0, 0, 0], finish: 'hull' },
    { id: 'lock', label: 'Hold Parts', realName: 'Latch Claws', position: [0, -0.3, 0], finish: 'titanium' },
    { id: 'seal', label: 'Soft Ring', realName: 'Seal Ring', position: [-0.3, 0, -0.05], finish: 'cold' },
    { id: 'guide', label: 'Line Up Parts', realName: 'Guide Cone', position: [0.3, 0, 0.08], finish: 'titanium' },
    { id: 'light', label: 'Touch Light', realName: 'Contact Light', position: [-0.2, 0.2, 0.05], finish: 'warning' }
  ],
  article: [
    {
      sentences: [
        ['Two ships in space can join together with this big ring.'],
        ['The ', { text: 'main ring', part: 'ring' }, ' is the round part that meets the other ship.'],
        ['The ', { text: 'gate hole', part: 'hole' }, ' in the middle lets people walk from one ship to the other.'],
        ['The ', { text: 'hold parts', part: 'lock' }, ' pull the two rings close and keep them in place.'],
        ['The ', { text: 'soft ring', part: 'seal' }, ' stops the air from getting out into space.']
      ]
    },
    {
      sentences: [
        ['The ', { text: 'line up parts', part: 'guide' }, ' help the two rings find each other in the dark.'],
        ['The ', { text: 'touch light', part: 'light' }, ' tells people when the rings are locked.'],
        ['People can then walk through the hole without a heavy suit.'],
        ['The ring must be very strong to hold two ships together.'],
        ['Small parts on the ring push out and pull the ships in line.'],
        ['This ring is used when ships bring food, water, and new people to a space station.']
      ]
    }
  ],
  flow: [
    { partIds: ['guide'], caption: 'The line up parts help the two rings meet', sentenceRef: 5 },
    { partIds: ['lock'], caption: 'The hold parts pull the two rings close', sentenceRef: 3 },
    { partIds: ['seal'], caption: 'The soft ring stops the air from getting out', sentenceRef: 4 },
    { partIds: ['hole'], caption: 'People walk through the gate hole', sentenceRef: 2 }
  ],
  keyExpressions: [
    { text: 'docking ring', partId: 'ring' },
    { text: 'gate hole', partId: 'hole' },
    { text: 'soft ring', partId: 'seal' },
    { text: 'touch light', partId: 'light' }
  ]
};
