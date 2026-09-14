import type { ThingData } from '../types';

export const spaceSignalDish: ThingData = {
  id: 'space-signal-dish',
  slug: 'space-signal-dish',
  simpleName: 'The Space Dish',
  realName: 'Signal Dish',
  category: 'space',
  color: '#C0C0C0',
  funFacts: [
    'This dish sends and takes signals from probes far out in space.',
    'The dish is wide, so it can catch a very small signal.',
    'The feed sits in front of the dish and does the talking.',
    'A gear under the dish turns it to point at a new place in the sky.',
    'The cover keeps the hot light of the sun off the feed.',
    'People keep the dish dry and clean, or the signal will be small.'
  ],
  parts: [
    { id: 'dish', label: 'Wide Dish', realName: 'Reflector', position: [0, 0, 0], finish: 'titanium' },
    { id: 'feed', label: 'Small Feed', realName: 'Feed Horn', position: [0, 0, 0.24], finish: 'warning' },
    { id: 'cover', label: 'Front Cover', realName: 'Sun Cover', position: [0, 0.06, 0.3], finish: 'cold' },
    { id: 'gear', label: 'Turn Gear', realName: 'Drive Gear', position: [0, -0.34, -0.04], finish: 'titanium' },
    { id: 'post', label: 'Hold Post', realName: 'Support Post', position: [0, -0.46, -0.04], finish: 'hull' },
    { id: 'box', label: 'Signal Box', realName: 'Receiver Box', position: [0.18, -0.2, -0.24], finish: 'hull' }
  ],
  article: [
    {
      sentences: [
        ['A probe far out in space sends a very small signal back to the ground.'],
        ['The ', { text: 'wide dish', part: 'dish' }, ' is the part that catches the signal.'],
        ['The ', { text: 'small feed', part: 'feed' }, ' is the part in front that sends and takes the signal.'],
        ['The ', { text: 'turn gear', part: 'gear' }, ' is the wheel that turns the dish.'],
        ['The ', { text: 'hold post', part: 'post' }, ' is the part that holds the dish up.']
      ]
    },
    {
      sentences: [
        ['The ', { text: 'signal box', part: 'box' }, ' is the box at the back that reads the signal.'],
        ['The ', { text: 'front cover', part: 'cover' }, ' is the small roof that keeps the sun off the feed.'],
        ['The dish turns to point at one place in the sky.'],
        ['The feed sends a signal out to the probe.'],
        ['When a signal comes back, the dish brings it to the feed.'],
        ['The box reads it and people learn what the probe is doing.']
      ]
    }
  ],
  flow: [
    { partIds: ['dish'], caption: 'The wide dish catches the signal', sentenceRef: 1 },
    { partIds: ['feed'], caption: 'The small feed sends and takes the signal', sentenceRef: 2 },
    { partIds: ['gear'], caption: 'The turn gear turns the dish', sentenceRef: 3 },
    { partIds: ['post'], caption: 'The hold post holds the dish up', sentenceRef: 4 }
  ],
  keyExpressions: [
    { text: 'wide dish', partId: 'dish' },
    { text: 'small feed', partId: 'feed' },
    { text: 'turn gear', partId: 'gear' },
    { text: 'signal box', partId: 'box' }
  ]
};
