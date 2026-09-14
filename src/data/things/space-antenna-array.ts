import type { ThingData } from '../types';

export const spaceAntennaArray: ThingData = {
  id: 'space-antenna-array',
  slug: 'space-antenna-array',
  simpleName: 'The Space Ear',
  realName: 'Antenna Array',
  category: 'space',
  color: '#C0C0C0',
  funFacts: [
    'This big dish picks up radio waves from far out in space.',
    'The dish is the part that catches the waves and brings them to one point.',
    'The small feed sits at that point and takes the signal down a line.',
    'The dish can turn to look at a new place in the sky.',
    'These dishes are often put in a dry place with no hills around them.',
    'People put many of them together to make one very big ear.'
  ],
  parts: [
    { id: 'dish', label: 'Big Dish', realName: 'Dish Reflector', position: [0, 0, 0], finish: 'titanium' },
    { id: 'feed', label: 'Feed Horn', realName: 'Feed Horn', position: [0, 0, 0.28], finish: 'warning' },
    { id: 'arm', label: 'Hold Arm', realName: 'Support Arm', position: [0, 0.28, 0.1], finish: 'hull' },
    { id: 'turn', label: 'Turn Post', realName: 'Turning Post', position: [0, -0.36, 0], finish: 'hull' },
    { id: 'line', label: 'Lead Line', realName: 'Signal Line', position: [0.1, -0.1, -0.3], finish: 'titanium' },
    { id: 'panel', label: 'Back Panel', realName: 'Control Panel', position: [0, -0.24, -0.34], finish: 'cold' }
  ],
  article: [
    {
      sentences: [
        ['Radio waves from far out in space are very small when they reach the ground.'],
        ['The ', { text: 'big dish', part: 'dish' }, ' is the wide part that catches the waves.'],
        ['The ', { text: 'feed horn', part: 'feed' }, ' is the small part at the front that takes the signal.'],
        ['The ', { text: 'hold arm', part: 'arm' }, ' is the part that holds the feed in front of the dish.'],
        ['The ', { text: 'turn post', part: 'turn' }, ' is the part that lets the dish turn.']
      ]
    },
    {
      sentences: [
        ['The ', { text: 'lead line', part: 'line' }, ' takes the signal from the feed to the boxes inside.'],
        ['The ', { text: 'back panel', part: 'panel' }, ' holds the boxes and the small computers.'],
        ['The dish turns to look at one place in the sky and waits.'],
        ['Waves from that place hit the dish and come to the feed.'],
        ['The feed sends them down the line to the boxes.'],
        ['People put many dishes together to make one very big ear.']
      ]
    }
  ],
  flow: [
    { partIds: ['dish'], caption: 'The big dish catches the waves', sentenceRef: 1 },
    { partIds: ['feed'], caption: 'The feed horn takes the signal', sentenceRef: 2 },
    { partIds: ['arm'], caption: 'The hold arm holds the feed in front of the dish', sentenceRef: 3 },
    { partIds: ['turn'], caption: 'The turn post lets the dish turn', sentenceRef: 4 }
  ],
  keyExpressions: [
    { text: 'big dish', partId: 'dish' },
    { text: 'feed horn', partId: 'feed' },
    { text: 'hold arm', partId: 'arm' },
    { text: 'turn post', partId: 'turn' }
  ]
};
