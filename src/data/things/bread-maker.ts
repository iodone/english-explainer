import type { ThingData } from '../types'

export const breadMaker: ThingData = {
  id: 'bread-maker',
  slug: 'bread-maker',
  simpleName: 'The Bread Maker',
  realName: 'Bread maker',
  category: 'home',
  funFacts: [
    'A bread maker can make a full round of bread all by itself — you just put in the things and push a button.',
    'The first bread makers were made about 40 years ago.',
    'Some bread makers can also make other things like sweet bread and food with rice.',
  ],
  parts: [
    { id: 'body', label: 'body', realName: 'Housing', position: [0, 0, 0], finish: 'hull' },
    { id: 'pot', label: 'pot', realName: 'Baking pan', position: [0, -0.04, 0], finish: 'titanium' },
    { id: 'blade', label: 'blade', realName: 'Kneading blade', position: [0, -0.04, 0], finish: 'cold' },
    { id: 'lid', label: 'lid', realName: 'Lid', position: [0, 0.18, 0], finish: 'hull' },
    { id: 'window', label: 'window', realName: 'Viewing window', position: [0, 0.20, 0.08], finish: 'cold' },
    { id: 'button', label: 'button', realName: 'Control panel', position: [0, 0.12, 0.14], finish: 'warning' },
    { id: 'power-wire', label: 'power wire', realName: 'Power cord', position: [0, -0.14, -0.10], finish: 'cold' },
  ],
  article: [
    {
      sentences: [
        [
          'This is a ',
          { text: 'bread maker', dict: 'bread-maker' },
          '. It makes bread all by itself — you just put in the things and push a button.',
        ],
      ],
    },
    {
      sentences: [
        [
          'The ',
          { text: 'body', part: 'body' },
          ' is the outside part that holds everything together.',
        ],
        [
          'Inside is the ',
          { text: 'pot', part: 'pot' },
          ' where the bread is made.',
        ],
      ],
    },
    {
      sentences: [
        [
          'A ',
          { text: 'blade', part: 'blade' },
          ' inside the pot puts together the flour and water to make the bread.',
        ],
        ['The blade turns around and around until the bread is ready.'],
      ],
    },
    {
      sentences: [
        [
          'On top is the ',
          { text: 'lid', part: 'lid' },
          ' that closes the top so the heat stays inside.',
        ],
        [
          'A ',
          { text: 'window', part: 'window' },
          ' in the lid lets you see the bread while it is being made.',
        ],
      ],
    },
    {
      sentences: [
        [
          'You choose what to make using the ',
          { text: 'button', part: 'button' },
          ' on the front.',
        ],
        ['Some bread makers have many buttons for different kinds of bread.'],
      ],
    },
    {
      sentences: [
        [
          'The bread maker gets power through the ',
          { text: 'power wire', part: 'power-wire' },
          ' at the back.',
        ],
        ['When the bread is done, the bread maker makes a sound to tell you.'],
      ],
    },
  ],
  flow: [
    { partIds: ['body', 'pot'], sentenceRef: 1, caption: 'The body holds the pot where bread is made.' },
    { partIds: ['blade'], sentenceRef: 4, caption: 'The blade puts together flour and water to make bread.' },
    { partIds: ['lid', 'window'], sentenceRef: 6, caption: 'The lid keeps heat inside; the window lets you see.' },
    { partIds: ['button'], sentenceRef: 8, caption: 'Choose what to make with the button.' },
    { partIds: ['power-wire'], sentenceRef: 10, caption: 'Power wire brings power; maker tells you when done.' },
  ],
  keyExpressions: [
    { text: 'bread maker', partId: 'pot' },
    { text: 'makes bread all by itself', partId: 'pot' },
    { text: 'puts together the flour and water', partId: 'blade' },
    { text: 'turns around and around', partId: 'blade' },
    { text: 'closes the top so heat stays inside', partId: 'lid' },
    { text: 'lets you see the bread while it is being made', partId: 'window' },
    { text: 'choose what to make', partId: 'button' },
  ],
  color: '#FFE4B5',
}