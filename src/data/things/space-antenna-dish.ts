import type { ThingData } from '../types';

export const spaceAntennaDish: ThingData = {
  id: 'space-antenna-dish',
  slug: 'space-antenna-dish',
  simpleName: 'The Sky Listener',
  realName: 'Antenna Dish',
  category: 'space',
  color: '#D3D3D3',
  funFacts: [
    'This wide dish sends and takes radio waves to talk to the ground.',
    'The dish must point just right, or the talk is lost.',
    'It can talk to people on the ground even when the ship is far away.',
    'Some dishes are as wide as a small room.',
    'It works day and night, and it can work in the rain.',
    'People use it to send pictures and words back to the ground.'
  ],
  parts: [
    { id: 'dish', label: 'Main Dish', realName: 'Dish', position: [0, 0, 0], finish: 'hull' },
    { id: 'arm', label: 'Feed Arm', realName: 'Feed Arm', position: [0, 0.16, 0], finish: 'titanium' },
    { id: 'feed', label: 'Radio Feed', realName: 'Feed Horn', position: [0, 0.3, 0], finish: 'cold' },
    { id: 'motor', label: 'Turn Motor', realName: 'Motor', position: [0, -0.24, 0], finish: 'warning' },
    { id: 'base', label: 'Base Stand', realName: 'Base', position: [0, -0.34, 0], finish: 'hull' },
    { id: 'wire', label: 'Lead Wire', realName: 'Lead Line', position: [0.24, -0.3, 0], finish: 'titanium' }
  ],
  article: [
    {
      sentences: [
        ['This wide dish sends and takes radio waves to talk to the ground.'],
        ['The ', { text: 'main dish', part: 'dish' }, ' is the round part that sends the waves out.'],
        ['The ', { text: 'feed arm', part: 'arm' }, ' holds the small part out in front of the dish.'],
        ['The ', { text: 'radio feed', part: 'feed' }, ' is the small part that takes the waves in.'],
        ['The ', { text: 'turn motor', part: 'motor' }, ' moves the dish to point at the ground.']
      ]
    },
    {
      sentences: [
        ['The ', { text: 'base stand', part: 'base' }, ' holds the dish on the ship.'],
        ['The ', { text: 'lead wire', part: 'wire' }, ' takes the talks to the computers.'],
        ['Radio waves go out from the feed and hit the dish.'],
        ['The dish sends them out in one thin line to the ground.'],
        ['When a talk comes back, the dish takes it in and sends it on.'],
        ['The dish must point just right, or the talk is lost.']
      ]
    }
  ],
  flow: [
    { partIds: ['dish'], caption: 'The main dish sends the waves out', sentenceRef: 1 },
    { partIds: ['arm'], caption: 'The feed arm holds the small part out in front of the dish', sentenceRef: 2 },
    { partIds: ['feed'], caption: 'The radio feed takes the waves in', sentenceRef: 3 },
    { partIds: ['motor'], caption: 'The turn motor moves the dish to point at the ground', sentenceRef: 4 }
  ],
  keyExpressions: [
    { text: 'main dish', partId: 'dish' },
    { text: 'feed arm', partId: 'arm' },
    { text: 'radio feed', partId: 'feed' },
    { text: 'turn motor', partId: 'motor' }
  ]
};
