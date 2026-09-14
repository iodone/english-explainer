import type { ThingData } from '../types';

export const spaceParticleShield: ThingData = {
  id: 'space-particle-shield',
  slug: 'space-particle-shield',
  simpleName: 'The Space Safe Wall',
  realName: 'Particle Shield',
  category: 'space',
  color: '#708090',
  funFacts: [
    'Small bits of rock fly through space faster than a shot from a gun.',
    'This wall stops them before they hit the room where people live.',
    'The front sheet breaks the bit into a cloud of smaller bits.',
    'The wall behind then takes the smaller bits without a hole.',
    'A thin wall with a space behind it works better than one thick wall.',
    'People on the ground can tell when a bit hits, from a small light.'
  ],
  parts: [
    { id: 'panel', label: 'Front Panel', realName: 'Bumper Panel', position: [0, 0, 0.16], finish: 'hull' },
    { id: 'gap', label: 'Space Gap', realName: 'Standoff Gap', position: [0, 0, 0], finish: 'cold' },
    { id: 'wall', label: 'Back Wall', realName: 'Rear Wall', position: [0, 0, -0.16], finish: 'titanium' },
    { id: 'frame', label: 'Hold Frame', realName: 'Support Frame', position: [0, 0.28, 0], finish: 'hull' },
    { id: 'post', label: 'Hold Posts', realName: 'Standoff Posts', position: [0.26, 0.26, 0], finish: 'titanium' },
    { id: 'sensor', label: 'Hit Sensor', realName: 'Impact Sensor', position: [0, 0.34, 0], finish: 'warning' }
  ],
  article: [
    {
      sentences: [
        ['Bits of rock and ice fly through space much faster than a shot from a gun.'],
        ['The ', { text: 'front panel', part: 'panel' }, ' is the first sheet that a fast bit hits.'],
        ['The ', { text: 'space gap', part: 'gap' }, ' is the empty space between the two sheets.'],
        ['The ', { text: 'back wall', part: 'wall' }, ' is the strong sheet that stops what is left.'],
        ['The ', { text: 'hold frame', part: 'frame' }, ' holds the two sheets so that they do not touch.']
      ]
    },
    {
      sentences: [
        ['The ', { text: 'hit sensor', part: 'sensor' }, ' tells people when a bit hits the wall.'],
        ['The ', { text: 'hold posts', part: 'post' }, ' are the short parts that stand between the sheets.'],
        ['A fast bit breaks into a cloud when it hits the front panel.'],
        ['The cloud of small bits then spreads out over the back wall.'],
        ['That is why a thin wall with a space behind it works better than one thick wall.'],
        ['People check the wall after a hit and change the front panel.']
      ]
    }
  ],
  flow: [
    { partIds: ['panel'], caption: 'The front panel is the first sheet a fast bit hits', sentenceRef: 1 },
    { partIds: ['gap'], caption: 'The space gap lets the bit break up', sentenceRef: 2 },
    { partIds: ['wall'], caption: 'The back wall stops what is left', sentenceRef: 3 },
    { partIds: ['sensor'], caption: 'The hit sensor tells people when a bit hits', sentenceRef: 5 }
  ],
  keyExpressions: [
    { text: 'front panel', partId: 'panel' },
    { text: 'space gap', partId: 'gap' },
    { text: 'back wall', partId: 'wall' },
    { text: 'hit sensor', partId: 'sensor' }
  ]
};
