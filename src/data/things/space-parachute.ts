import type { ThingData } from '../types';

export const spaceParachute: ThingData = {
  id: 'space-parachute',
  slug: 'space-parachute',
  simpleName: 'The Slow-Down Cloth',
  realName: 'Parachute',
  category: 'space',
  color: '#87CEEB',
  funFacts: [
    'This is a big piece of cloth that slows things down when they fall.',
    'It works by catching the air and pushing against it.',
    'Space people use it to land on the ground or on other worlds.',
    'The cloth opens up like a big round room.',
    'It can be very big, as wide as a house.',
    'Without it, things would hit the ground too fast.'
  ],
  parts: [
    { id: 'body', label: 'body', realName: 'canopy', position: [0, 0.2, 0], finish: 'cold' },
    { id: 'end', label: 'end', realName: 'lines', position: [0, -0.1, 0], finish: 'titanium' },
    { id: 'top', label: 'top', realName: 'opening', position: [0, 0.3, 0], finish: 'cold' },
    { id: 'inside', label: 'inside', realName: 'payload', position: [0, -0.2, 0], finish: 'hull' },
    { id: 'hole', label: 'hole', realName: 'vent', position: [0, 0.25, 0], finish: 'hull' },
    { id: 'strap', label: 'strap', realName: 'harness', position: [0, -0.15, 0], finish: 'titanium' }
  ],
  article: [
    {
      sentences: [
        ['This is a big piece of cloth that slows things down when they fall.'],
        ['The ', { text: 'body', part: 'body' }, ' catches the air and pushes against it.'],
        ['The ', { text: 'end', part: 'end' }, ' hold the ', { text: 'body', part: 'body' }, ' open so it can catch more air.'],
        ['The ', { text: 'top', part: 'top' }, ' lets the air fill the ', { text: 'body', part: 'body' }, ' from above.']
      ]
    },
    {
      sentences: [
        ['When something falls from space, the ', { text: 'body', part: 'body' }, ' opens up.'],
        ['Air fills the ', { text: 'body', part: 'body' }, ' and pushes up against it.'],
        ['This makes the thing fall slower and slower.'],
        ['The ', { text: 'inside', part: 'inside' }, ' is what hangs below the ', { text: 'body', part: 'body' }, '.'],
        ['The ', { text: 'strap', part: 'strap' }, ' holds the ', { text: 'inside', part: 'inside' }, ' to the ', { text: 'end', part: 'end' }, '.'],
        ['The small ', { text: 'hole', part: 'hole' }, ' at the ', { text: 'top', part: 'top' }, ' lets some air out to keep it going straight.'],
        ['Then the ', { text: 'inside', part: 'inside' }, ' floats down to the ground.']
      ]
    }
  ],
  flow: [
    { partIds: ['end', 'body'], caption: 'The lines open the big cloth', sentenceRef: 2 },
    { partIds: ['top'], caption: 'Air fills the cloth from above', sentenceRef: 3 },
    { partIds: ['body'], caption: 'The air pushes up and slows the fall', sentenceRef: 5 },
    { partIds: ['inside', 'strap'], caption: 'The payload floats down to the ground', sentenceRef: 10 }
  ],
  keyExpressions: [
    { text: 'parachute', partId: 'body' },
    { text: 'canopy', partId: 'body' },
    { text: 'lines', partId: 'end' },
    { text: 'harness', partId: 'strap' }
  ]
};