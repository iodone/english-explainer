import type { ThingData } from '../types';

export const spaceAirFilter: ThingData = {
  id: 'space-air-filter',
  slug: 'space-air-filter',
  simpleName: 'The Space Air Cleaner',
  realName: 'Air Filter',
  category: 'space',
  color: '#87CEEB',
  funFacts: [
    'People on a space station must have clean air to live and work.',
    'The air carries dust, hairs, and small bits from the walls and clothes.',
    'This box takes those bits out before people take a breath.',
    'Without a filter, the dust would make people sick in a short time.',
    'The pad is changed every few months, and the old one is thrown away.',
    'Some of these boxes also take bad smells out of the air.'
  ],
  parts: [
    { id: 'frame', label: 'Main Frame', realName: 'Filter Frame', position: [0, -0.23, 0], finish: 'hull' },
    { id: 'net', label: 'Catch Net', realName: 'Filter Screen', position: [-0.08, 0, 0], finish: 'titanium' },
    { id: 'fan', label: 'Air Pusher', realName: 'Fan', position: [0.14, 0, 0], finish: 'titanium' },
    { id: 'pad', label: 'Catch Pad', realName: 'Filter Pad', position: [0, 0, 0], finish: 'warning' },
    { id: 'inlet', label: 'Air In', realName: 'Air Inlet', position: [-0.24, 0, 0], finish: 'hull' },
    { id: 'outlet', label: 'Clean Out', realName: 'Air Outlet', position: [0.24, 0, 0], finish: 'cold' }
  ],
  article: [
    {
      sentences: [
        ['This box takes dust and bad stuff out of the air on a space station.'],
        ['The ', { text: 'main frame', part: 'frame' }, ' is the strong box that holds all the parts.'],
        ['The ', { text: 'catch net', part: 'net' }, ' is the fine sheet that catches dust and small bits.'],
        ['The ', { text: 'air pusher', part: 'fan' }, ' pulls the air through the box.'],
        ['The ', { text: 'catch pad', part: 'pad' }, ' is the thick part that must be changed often.']
      ]
    },
    {
      sentences: [
        ['The ', { text: 'air in', part: 'inlet' }, ' is the side where the dirty air comes in.'],
        ['The ', { text: 'clean out', part: 'outlet' }, ' is the side where the clean air goes back into the room.'],
        ['Air must be clean for people to live in a space station.'],
        ['The filter stops dust from getting into the machines and the people.'],
        ['When the pad is full of dust, the people change it for a new one.'],
        ['A small light tells them when the pad must be changed.']
      ]
    }
  ],
  flow: [
    { partIds: ['fan'], caption: 'The air pusher pulls the air through the box', sentenceRef: 3 },
    { partIds: ['net'], caption: 'The catch net catches the dust', sentenceRef: 2 },
    { partIds: ['pad'], caption: 'The catch pad must be changed often', sentenceRef: 4 },
    { partIds: ['outlet'], caption: 'The clean out lets clean air back into the room', sentenceRef: 6 }
  ],
  keyExpressions: [
    { text: 'catch net', partId: 'net' },
    { text: 'catch pad', partId: 'pad' },
    { text: 'air pusher', partId: 'fan' },
    { text: 'clean out', partId: 'outlet' }
  ]
};
