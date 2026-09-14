import type { ThingData } from '../types'

export const riceCooker: ThingData = {
  id: 'rice-cooker',
  slug: 'rice-cooker',
  simpleName: 'The Rice Maker',
  realName: 'Rice cooker',
  category: 'home',
  funFacts: [
    'A rice maker can cook rice all by itself — you just put in rice and water and push a button.',
    'The first rice makers were made in a country where people eat rice every day.',
    'Some rice makers can keep rice warm for many hours after cooking it.',
  ],
  parts: [
    { id: 'pot', label: 'pot', realName: 'Inner pot', position: [0, -0.04, 0], finish: 'titanium' },
    { id: 'body', label: 'body', realName: 'Outer body', position: [0, 0, 0], finish: 'hull' },
    { id: 'lid', label: 'lid', realName: 'Lid', position: [0, 0.18, 0], finish: 'hull' },
    { id: 'button', label: 'button', realName: 'Cook switch', position: [0, 0.10, 0.14], finish: 'warning' },
    { id: 'steam-hole', label: 'steam hole', realName: 'Steam vent', position: [0, 0.20, 0.08], finish: 'cold' },
    { id: 'power-wire', label: 'power wire', realName: 'Power cord', position: [0, -0.14, -0.10], finish: 'cold' },
    { id: 'handle', label: 'handle', realName: 'Handle', position: [0, 0.16, 0.12], finish: 'titanium' },
  ],
  article: [
    {
      sentences: [
        [
          'This is a ',
          { text: 'rice maker', dict: 'rice-cooker' },
          '. It cooks rice all by itself — you just put in rice and water and push a button.',
        ],
      ],
    },
    {
      sentences: [
        [
          'The ',
          { text: 'pot', part: 'pot' },
          ' inside holds the rice and water. It has a special covering that stops rice from getting stuck to it.',
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
          'On top is the ',
          { text: 'lid', part: 'lid' },
          ' that closes the top so the heat stays inside.',
        ],
      ],
    },
    {
      sentences: [
        [
          'You start cooking by pushing the ',
          { text: 'button', part: 'button' },
          ' on the front.',
        ],
        ['The rice maker then heats the water until the rice is cooked.'],
      ],
    },
    {
      sentences: [
        [
          'When the water gets very hot, ',
          { text: 'steam comes out through the steam hole', part: 'steam-hole' },
          ' at the top.',
        ],
        ['This is how the rice maker knows when the rice is done.'],
      ],
    },
    {
      sentences: [
        [
          'After the rice is cooked, the rice maker keeps it warm using power from the ',
          { text: 'power wire', part: 'power-wire' },
          '.',
        ],
        [
          'A ',
          { text: 'handle', part: 'handle' },
          ' on top makes it easy to open the lid.',
        ],
      ],
    },
  ],
  flow: [
    { partIds: ['pot'], sentenceRef: 1, caption: 'The pot holds rice and water inside.' },
    { partIds: ['body', 'lid'], sentenceRef: 3, caption: 'The body holds everything; the lid keeps heat inside.' },
    { partIds: ['button'], sentenceRef: 5, caption: 'Push the button to start cooking.' },
    { partIds: ['steam-hole'], sentenceRef: 7, caption: 'Steam comes out when the rice is almost done.' },
    { partIds: ['power-wire', 'handle'], sentenceRef: 9, caption: 'Power wire keeps rice warm; handle opens the lid.' },
  ],
  keyExpressions: [
    { text: 'rice maker', partId: 'pot' },
    { text: 'cooks rice all by itself', partId: 'pot' },
    { text: 'special covering that stops rice from getting stuck', partId: 'pot' },
    { text: 'holds everything together', partId: 'body' },
    { text: 'closes the top so heat stays inside', partId: 'lid' },
    { text: 'pushing the button to start', partId: 'button' },
    { text: 'steam comes out through the steam hole', partId: 'steam-hole' },
  ],
  color: '#FFF8DC',
}