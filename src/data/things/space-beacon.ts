import type { ThingData } from '../types';

export const spaceBeacon: ThingData = {
  id: 'space-beacon',
  slug: 'space-beacon',
  simpleName: 'The Far-Away Light',
  realName: 'Space Beacon',
  category: 'space',
  color: '#FFD700',
  funFacts: [
    'This is a light that gives off light in space so other things can find their way.',
    'It can be seen from very far away.',
    'Some of them give off light all the time and some only give off light when asked.',
    'They help space things know where they are.',
    'Some send out a sound you can not hear instead of light.',
    'Without them, it would be very hard to find your way in space.'
  ],
  parts: [
    { id: 'body', label: 'body', realName: 'housing', position: [0, 0, 0], finish: 'hull' },
    { id: 'end', label: 'end', realName: 'antenna', position: [0, 0.25, 0], finish: 'titanium' },
    { id: 'top', label: 'top', realName: 'lens', position: [0, 0.15, 0], finish: 'cold' },
    { id: 'inside', label: 'inside', realName: 'transmitter', position: [0, 0, 0], finish: 'warning' },
    { id: 'power', label: 'power', realName: 'solar panel', position: [0.2, 0, 0], finish: 'cold' },
    { id: 'light', label: 'light', realName: 'beacon light', position: [0, 0.18, 0], finish: 'warning' }
  ],
  article: [
    {
      sentences: [
        ['This is a light that gives off light in space so other things can find their way.'],
        ['The ', { text: 'body', part: 'body' }, ' holds all the parts inside.'],
        ['The ', { text: 'top', part: 'top' }, ' at the top makes the light bright.'],
        ['The ', { text: 'light', part: 'light' }, ' gives off light so it can be seen from far away.']
      ]
    },
    {
      sentences: [
        ['The ', { text: 'inside', part: 'inside' }, ' sends out light or a sound you can not hear.'],
        ['The ', { text: 'end', part: 'end' }, ' helps send the sound out into space.'],
        ['The ', { text: 'power', part: 'power' }, ' on the side gets power from the sun.'],
        ['This keeps the ', { text: 'light', part: 'light' }, ' giving off light all the time.'],
        ['Other things in space use the ', { text: 'light', part: 'light' }, ' to know where they are.'],
        ['Without this, it would be very hard to find your way in the dark of space.'],
        ['Some of them are on the ground and some fly around in space.']
      ]
    }
  ],
  flow: [
    { partIds: ['power'], caption: 'The solar panel gets power from the sun', sentenceRef: 6 },
    { partIds: ['inside', 'end'], caption: 'The transmitter sends out light or sound', sentenceRef: 4 },
    { partIds: ['top', 'light'], caption: 'The lens makes the light bright', sentenceRef: 7 },
    { partIds: ['body'], caption: 'The body holds all the parts', sentenceRef: 1 }
  ],
  keyExpressions: [
    { text: 'beacon', partId: 'body' },
    { text: 'transmitter', partId: 'inside' },
    { text: 'antenna', partId: 'end' },
    { text: 'solar panel', partId: 'power' }
  ]
};