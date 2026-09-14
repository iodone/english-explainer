import type { ThingData } from '../types';

export const powerStrip: ThingData = {
  id: 'power-strip',
  slug: 'power-strip',
  simpleName: 'The Many-Plug Box',
  realName: 'Power Strip',
  category: 'power',
  color: '#F5F5F5',
  funFacts: [
    'This is a box with many places to plug things in.',
    'It lets you use many things from one wall plug.',
    'It has a wire that goes into the wall.',
    'Some of them have a button that turns all the power off at once.',
    'Some of them can stop too much power from breaking your things.',
    'You can find them in almost every house.'
  ],
  parts: [
    { id: 'body', label: 'body', realName: 'housing', position: [0, 0, 0], finish: 'hull' },
    { id: 'end', label: 'end', realName: 'outlets', position: [0, 0.05, 0], finish: 'cold' },
    { id: 'top', label: 'top', realName: 'plug', position: [0, 0, -0.25], finish: 'titanium' },
    { id: 'inside', label: 'inside', realName: 'circuit', position: [0, 0, 0], finish: 'warning' },
    { id: 'power', label: 'power', realName: 'switch', position: [0, 0.06, 0.1], finish: 'warning' },
    { id: 'wire', label: 'wire', realName: 'cord', position: [0, 0, -0.15], finish: 'hull' }
  ],
  article: [
    {
      sentences: [
        ['This is a box with many places to plug things in.'],
        ['It lets you use many things from one wall plug.'],
        ['The ', { text: 'body', part: 'body' }, ' is the long box that holds all the plug places.'],
        ['The ', { text: 'end', part: 'end' }, ' on the ', { text: 'body', part: 'body' }, ' are where you put the plugs.']
      ]
    },
    {
      sentences: [
        ['The ', { text: 'top', part: 'top' }, ' at the end of the ', { text: 'wire', part: 'wire' }, ' goes into the wall.'],
        ['You plug your things into the ', { text: 'end', part: 'end' }, ' on the ', { text: 'body', part: 'body' }, '.'],
        ['The ', { text: 'power', part: 'power' }, ' turns all the power on or off.'],
        ['The ', { text: 'inside', part: 'inside' }, ' inside the ', { text: 'body', part: 'body' }, ' sends the power to each plug place.'],
        ['If too much power comes from the wall, the ', { text: 'inside', part: 'inside' }, ' stops it.'],
        ['This keeps your things safe from getting broken.'],
        ['You can plug in as many things as there are places on the ', { text: 'end', part: 'end' }, '.']
      ]
    }
  ],
  flow: [
    { partIds: ['top', 'wire'], caption: 'The plug goes into the wall', sentenceRef: 4 },
    { partIds: ['end'], caption: 'You plug your things into the outlets', sentenceRef: 5 },
    { partIds: ['power'], caption: 'The switch turns power on or off', sentenceRef: 6 },
    { partIds: ['inside'], caption: 'The circuit sends power to each place', sentenceRef: 7 }
  ],
  keyExpressions: [
    { text: 'power strip', partId: 'body' },
    { text: 'outlet', partId: 'end' },
    { text: 'switch', partId: 'power' },
    { text: 'surge protector', partId: 'inside' }
  ]
};