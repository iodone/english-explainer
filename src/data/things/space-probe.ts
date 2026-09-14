import type { ThingData } from '../types'

export const spaceProbe: ThingData = {
  id: 'space-probe',
  slug: 'space-probe',
  simpleName: 'The Far Looker',
  realName: 'Space probe',
  category: 'space',
  funFacts: [
    'Some far lookers have been going through the sky for over 40 years and are still sending messages back.',
    'A far looker can go to places that people can not go to yet.',
    'One far looker took 9 years to reach the farthest big round thing from the sun.',
  ],
  parts: [
    { id: 'body', label: 'body', realName: 'Bus', position: [0, 0, 0], finish: 'hull' },
    { id: 'big-dish', label: 'big dish', realName: 'High-gain antenna', position: [0, 0.20, 0], finish: 'cold' },
    { id: 'sun-boards', label: 'sun boards', realName: 'Solar panels', position: [-0.28, 0, 0], finish: 'titanium' },
    { id: 'camera-eye', label: 'camera eye', realName: 'Camera', position: [0.14, 0.08, 0.12], finish: 'warning' },
    { id: 'arm', label: 'arm', realName: 'Boom', position: [-0.18, 0, 0], finish: 'hull' },
    { id: 'small-dishes', label: 'small dishes', realName: 'Low-gain antennas', position: [0.06, 0.16, 0.06], finish: 'cold' },
    { id: 'heat-boards', label: 'heat boards', realName: 'Heat radiators', position: [0, -0.14, 0], finish: 'warning' },
  ],
  article: [
    {
      sentences: [
        [
          'This is a ',
          { text: 'far looker', dict: 'space-probe' },
          '. It is a machine that flies through the sky to far-away places to look at things and send back what it finds.',
        ],
      ],
    },
    {
      sentences: [
        [
          'The ',
          { text: 'body', part: 'body' },
          ' holds all the important parts. On one side, a long ',
          { text: 'arm', part: 'arm' },
          ' holds the ',
          { text: 'sun boards', part: 'sun-boards' },
          ' far out.',
        ],
      ],
    },
    {
      sentences: [
        ['The sun boards turn light from the sun into power.'],
        ['They are on long arms so they can get lots of light, even when the far looker is very far from the sun.'],
      ],
    },
    {
      sentences: [
        [
          'The ',
          { text: 'camera eye', part: 'camera-eye' },
          ' at the front takes pictures of things it flies by.',
        ],
        ['It can see things that are very, very far away and send the pictures back to Earth.'],
      ],
    },
    {
      sentences: [
        [
          'The ',
          { text: 'big dish', part: 'big-dish' },
          ' at the top sends messages back to Earth over very long ways.',
        ],
        [
          'The ',
          { text: 'small dishes', part: 'small-dishes' },
          ' help too, but they send messages over shorter ways.',
        ],
      ],
    },
    {
      sentences: [
        [
          'When the machine gets too hot, the ',
          { text: 'heat boards', part: 'heat-boards' },
          ' send the extra heat away into the sky.',
        ],
        ['This keeps all the parts working well for many, many years.'],
      ],
    },
  ],
  flow: [
    { partIds: ['sun-boards', 'body'], sentenceRef: 2, caption: 'Sun boards turn light from the sun into power.' },
    { partIds: ['arm', 'sun-boards'], sentenceRef: 1, caption: 'A long arm holds the sun boards far out.' },
    { partIds: ['camera-eye'], sentenceRef: 5, caption: 'The camera eye takes pictures of things it flies by.' },
    { partIds: ['big-dish'], sentenceRef: 7, caption: 'The big dish sends messages back to Earth.' },
    { partIds: ['heat-boards'], sentenceRef: 9, caption: 'The heat boards send extra heat away.' },
  ],
  keyExpressions: [
    { text: 'far looker', partId: 'body' },
    { text: 'flies through the sky to far-away places', partId: 'body' },
    { text: 'turn light from the sun into power', partId: 'sun-boards' },
    { text: 'takes pictures of things it flies by', partId: 'camera-eye' },
    { text: 'sends messages back to Earth', partId: 'big-dish' },
    { text: 'send the extra heat away', partId: 'heat-boards' },
    { text: 'working well for many, many years', partId: 'body' },
  ],
  color: '#D8BFD8',
}