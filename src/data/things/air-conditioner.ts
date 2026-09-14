import type { ThingData } from '../types'

export const airConditioner: ThingData = {
  id: 'air-conditioner',
  slug: 'air-conditioner',
  simpleName: 'The Air Warmer',
  realName: 'Air conditioner',
  category: 'home',
  funFacts: [
    'An air warmer can make a room much colder or much warmer than it is outside.',
    'The first air warmers were made more than 100 years ago to help people work in hot places.',
    'Some air warmers can also take water out of the air so the room feels more good.',
  ],
  parts: [
    { id: 'body', label: 'body', realName: 'Housing', position: [0, 0, 0], finish: 'hull' },
    { id: 'front-part', label: 'front part', realName: 'Front panel', position: [0, 0, 0.10], finish: 'hull' },
    { id: 'cold-part', label: 'cold part', realName: 'Evaporator', position: [0, 0, 0.04], finish: 'cold' },
    { id: 'hot-part', label: 'hot part', realName: 'Condenser', position: [0, 0, -0.04], finish: 'warning' },
    { id: 'fan', label: 'fan', realName: 'Fan', position: [0, 0, 0.06], finish: 'cold' },
    { id: 'air-out', label: 'air out', realName: 'Air outlet', position: [0, 0.08, 0.10], finish: 'cold' },
    { id: 'power-wire', label: 'power wire', realName: 'Power cord', position: [0, -0.12, -0.06], finish: 'cold' },
  ],
  article: [
    {
      sentences: [
        [
          'This is an ',
          { text: 'air warmer', dict: 'air-conditioner' },
          '. It makes the air in a room colder or warmer so people feel better.',
        ],
      ],
    },
    {
      sentences: [
        [
          'The ',
          { text: 'body', part: 'body' },
          ' holds all the important parts inside.',
        ],
        [
          'The ',
          { text: 'front part', part: 'front-part' },
          ' on the front has small holes that let air come in and go out.',
        ],
      ],
    },
    {
      sentences: [
        [
          'Inside is the ',
          { text: 'cold part', part: 'cold-part' },
          ' that gets very cold when the air warmer is working.',
        ],
        [
          'Air from the room goes through the cold part and gets cold too.',
        ],
      ],
    },
    {
      sentences: [
        [
          'The ',
          { text: 'hot part', part: 'hot-part' },
          ' at the back gets very hot and sends the heat outside.',
        ],
        ['This is how the room gets colder — the heat goes outside.'],
      ],
    },
    {
      sentences: [
        [
          'A ',
          { text: 'fan', part: 'fan' },
          ' inside moves the air through the cold part and out through the ',
          { text: 'air out', part: 'air-out' },
          ' part at the top.',
        ],
        ['The fan also helps the hot part send heat outside.'],
      ],
    },
    {
      sentences: [
        [
          'The air warmer gets power through the ',
          { text: 'power wire', part: 'power-wire' },
          ' at the back.',
        ],
        ['You can use a thing you hold in your hand to turn it on and off from far away.'],
      ],
    },
  ],
  flow: [
    { partIds: ['body', 'front-part'], sentenceRef: 1, caption: 'The body holds everything; front part lets air in and out.' },
    { partIds: ['cold-part'], sentenceRef: 4, caption: 'The cold part gets very cold to cool the air.' },
    { partIds: ['hot-part'], sentenceRef: 6, caption: 'The hot part sends heat outside.' },
    { partIds: ['fan', 'air-out'], sentenceRef: 8, caption: 'Fan moves air through the cold part and out the top.' },
    { partIds: ['power-wire'], sentenceRef: 10, caption: 'Power wire brings power; you can control it from far away.' },
  ],
  keyExpressions: [
    { text: 'air warmer', partId: 'cold-part' },
    { text: 'makes the air colder or warmer', partId: 'cold-part' },
    { text: 'gets very cold when it is working', partId: 'cold-part' },
    { text: 'gets very hot and sends the heat outside', partId: 'hot-part' },
    { text: 'moves the air through the cold part', partId: 'fan' },
    { text: 'small holes that let air come in and go out', partId: 'front-part' },
    { text: 'turn it on and off from far away', partId: 'power-wire' },
  ],
  color: '#E0FFFF',
}