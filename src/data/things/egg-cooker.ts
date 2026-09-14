import type { ThingData } from '../types'

export const eggCooker: ThingData = {
  id: 'egg-cooker',
  slug: 'egg-cooker',
  simpleName: 'The Egg Maker',
  realName: 'Egg cooker',
  category: 'home',
  funFacts: [
    'An egg maker can cook eggs in many different ways — soft, hard, or even as a flat round thing.',
    'Some egg makers can cook up to 7 eggs at the same time.',
    'The first egg makers were made about 50 years ago and used only hot water.',
  ],
  parts: [
    { id: 'body', label: 'body', realName: 'Base', position: [0, 0, 0], finish: 'hull' },
    { id: 'pot', label: 'pot', realName: 'Heating plate', position: [0, -0.04, 0], finish: 'titanium' },
    { id: 'lid', label: 'lid', realName: 'Cover', position: [0, 0.12, 0], finish: 'hull' },
    { id: 'egg-holes', label: 'egg holes', realName: 'Egg tray', position: [0, 0.04, 0], finish: 'cold' },
    { id: 'water-line', label: 'water line', realName: 'Water level mark', position: [0, -0.02, 0.10], finish: 'warning' },
    { id: 'button', label: 'button', realName: 'Power switch', position: [0, 0.08, 0.12], finish: 'warning' },
    { id: 'power-wire', label: 'power wire', realName: 'Power cord', position: [0, -0.10, -0.08], finish: 'cold' },
  ],
  article: [
    {
      sentences: [
        [
          'This is an ',
          { text: 'egg maker', dict: 'egg-cooker' },
          '. It cooks eggs for you so you do not have to watch them.',
        ],
      ],
    },
    {
      sentences: [
        [
          'The ',
          { text: 'body', part: 'body' },
          ' is the bottom part that holds everything together.',
        ],
        [
          'Inside is the ',
          { text: 'pot', part: 'pot' },
          ' that gets hot and heats the water to cook the eggs.',
        ],
      ],
    },
    {
      sentences: [
        [
          'The ',
          { text: 'egg holes', part: 'egg-holes' },
          ' hold the eggs in place so they do not move around while they are being cooked.',
        ],
        ['You can put in as many eggs as there are holes.'],
      ],
    },
    {
      sentences: [
        [
          'A ',
          { text: 'water line', part: 'water-line' },
          ' on the side shows you how much water to put in.',
        ],
        ['More water makes the eggs harder, and less water makes them softer.'],
      ],
    },
    {
      sentences: [
        [
          'The ',
          { text: 'lid', part: 'lid' },
          ' on top closes the egg maker so the heat stays inside.',
        ],
        [
          'You start the egg maker by pushing the ',
          { text: 'button', part: 'button' },
          ' on the front.',
        ],
      ],
    },
    {
      sentences: [
        [
          'The egg maker gets power through the ',
          { text: 'power wire', part: 'power-wire' },
          ' at the back.',
        ],
        ['When the eggs are done, the egg maker makes a sound to tell you.'],
      ],
    },
  ],
  flow: [
    { partIds: ['body', 'pot'], sentenceRef: 1, caption: 'The body holds the pot that heats water to cook eggs.' },
    { partIds: ['egg-holes'], sentenceRef: 4, caption: 'The egg holes hold eggs in place while they cook.' },
    { partIds: ['water-line'], sentenceRef: 6, caption: 'The water line shows how much water to put in.' },
    { partIds: ['lid', 'button'], sentenceRef: 8, caption: 'Lid keeps heat inside; button starts the cooking.' },
    { partIds: ['power-wire'], sentenceRef: 10, caption: 'Power wire brings power; maker tells you when done.' },
  ],
  keyExpressions: [
    { text: 'egg maker', partId: 'pot' },
    { text: 'cooks eggs for you', partId: 'pot' },
    { text: 'gets hot and heats the water', partId: 'pot' },
    { text: 'hold the eggs in place', partId: 'egg-holes' },
    { text: 'shows you how much water to put in', partId: 'water-line' },
    { text: 'closes the egg maker so heat stays inside', partId: 'lid' },
    { text: 'makes a sound to tell you', partId: 'button' },
  ],
  color: '#FFFACD',
}