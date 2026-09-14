import type { ThingData } from '../types'

export const coffeeMaker: ThingData = {
  id: 'coffee-maker',
  slug: 'coffee-maker',
  simpleName: 'The Hot Drink Maker',
  realName: 'Coffee maker',
  category: 'home',
  funFacts: [
    'A hot drink maker can make a cup of hot drink in less than 5 minutes.',
    'The first hot drink makers were made about 200 years ago in a country far away.',
    'Some hot drink makers can also make other hot drinks like tea.',
  ],
  parts: [
    { id: 'body', label: 'body', realName: 'Housing', position: [0, 0, 0], finish: 'hull' },
    { id: 'water-box', label: 'water box', realName: 'Water reservoir', position: [0, 0.08, -0.06], finish: 'cold' },
    { id: 'heat-part', label: 'heat part', realName: 'Heating element', position: [0, -0.04, 0], finish: 'warning' },
    { id: 'put-in', label: 'put in', realName: 'Filter basket', position: [0, 0.04, 0.06], finish: 'titanium' },
    { id: 'pot', label: 'pot', realName: 'Carafe', position: [0, -0.10, 0.06], finish: 'cold' },
    { id: 'top-part', label: 'top part', realName: 'Lid', position: [0, 0.14, 0], finish: 'hull' },
    { id: 'power-wire', label: 'power wire', realName: 'Power cord', position: [0, -0.10, -0.10], finish: 'cold' },
  ],
  article: [
    {
      sentences: [
        [
          'This is a ',
          { text: 'hot drink maker', dict: 'coffee-maker' },
          '. It makes hot drinks by pushing hot water through special dry things.',
        ],
      ],
    },
    {
      sentences: [
        [
          'The ',
          { text: 'body', part: 'body' },
          ' holds all the important parts together.',
        ],
        [
          'The ',
          { text: 'water box', part: 'water-box' },
          ' at the back holds the water before it is heated.',
        ],
      ],
    },
    {
      sentences: [
        [
          'The ',
          { text: 'heat part', part: 'heat-part' },
          ' under the water box gets very hot and heats the water.',
        ],
        ['When the water gets hot enough, it goes up through a small pipe.'],
      ],
    },
    {
      sentences: [
        [
          'The hot water then goes into the ',
          { text: 'put in', part: 'put-in' },
          ' where the special dry things are.',
        ],
        ['The water makes the drink from the dry things as it goes through.'],
      ],
    },
    {
      sentences: [
        [
          'The hot drink then goes down into the ',
          { text: 'pot', part: 'pot' },
          ' below.',
        ],
        ['The pot holds the hot drink until you are ready to pour it.'],
      ],
    },
    {
      sentences: [
        [
          'The ',
          { text: 'top part', part: 'top-part' },
          ' on top closes the hot drink maker so the heat stays inside.',
        ],
        [
          'The hot drink maker gets power through the ',
          { text: 'power wire', part: 'power-wire' },
          ' at the back.',
        ],
      ],
    },
  ],
  flow: [
    { partIds: ['body', 'water-box'], sentenceRef: 1, caption: 'The body holds everything; water box holds water.' },
    { partIds: ['heat-part'], sentenceRef: 4, caption: 'The heat part gets hot and heats the water.' },
    { partIds: ['put-in'], sentenceRef: 6, caption: 'Hot water goes through the dry things in the put-in.' },
    { partIds: ['pot'], sentenceRef: 8, caption: 'The hot drink goes down into the pot.' },
    { partIds: ['top-part', 'power-wire'], sentenceRef: 10, caption: 'Top part keeps heat inside; power wire brings power.' },
  ],
  keyExpressions: [
    { text: 'hot drink maker', partId: 'put-in' },
    { text: 'makes hot drinks by pushing hot water', partId: 'put-in' },
    { text: 'holds the water before it is heated', partId: 'water-box' },
    { text: 'gets very hot and heats the water', partId: 'heat-part' },
    { text: 'makes the drink from the dry things', partId: 'put-in' },
    { text: 'holds the hot drink until you are ready', partId: 'pot' },
    { text: 'closes so the heat stays inside', partId: 'top-part' },
  ],
  color: '#D2691E',
}