import type { ThingData } from '../types'

export const iceMaker: ThingData = {
  id: 'ice-maker',
  slug: 'ice-maker',
  simpleName: 'The Ice Maker',
  realName: 'Ice maker',
  category: 'home',
  funFacts: [
    'An ice maker can make ice in less than 10 minutes.',
    'The first ice makers were made about 100 years ago.',
    'Some ice makers can make ice in many different shapes.',
  ],
  parts: [
    { id: 'body', label: 'body', realName: 'Housing', position: [0, 0, 0], finish: 'hull' },
    { id: 'water-box', label: 'water box', realName: 'Water reservoir', position: [0, 0.06, 0], finish: 'cold' },
    { id: 'cold-part', label: 'cold part', realName: 'Freezing plate', position: [0, -0.02, 0.06], finish: 'cold' },
    { id: 'ice-box', label: 'ice box', realName: 'Ice basket', position: [0, -0.08, 0], finish: 'titanium' },
    { id: 'top-part', label: 'top part', realName: 'Lid', position: [0, 0.12, 0], finish: 'hull' },
    { id: 'button', label: 'button', realName: 'Control button', position: [0, 0.08, 0.10], finish: 'warning' },
    { id: 'power-wire', label: 'power wire', realName: 'Power cord', position: [0, -0.10, -0.08], finish: 'cold' },
  ],
  article: [
    {
      sentences: [
        [
          'This is an ',
          { text: 'ice maker', dict: 'ice-maker' },
          '. It makes ice from water so you can put it in your drinks.',
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
          { text: 'water box', part: 'water-box' },
          ' at the top holds the water before it becomes ice.',
        ],
      ],
    },
    {
      sentences: [
        [
          'The ',
          { text: 'cold part', part: 'cold-part' },
          ' gets very cold and turns the water into ice.',
        ],
        ['The water sits on the cold part until it becomes hard like ice.'],
      ],
    },
    {
      sentences: [
        [
          'When the ice is ready, it falls down into the ',
          { text: 'ice box', part: 'ice-box' },
          ' below.',
        ],
        ['The ice box holds the ice until you are ready to use it.'],
      ],
    },
    {
      sentences: [
        [
          'The ',
          { text: 'top part', part: 'top-part' },
          ' on top closes the ice maker so the cold stays inside.',
        ],
        [
          'You start the ice maker by pushing the ',
          { text: 'button', part: 'button' },
          ' on the front.',
        ],
      ],
    },
    {
      sentences: [
        [
          'The ice maker gets power through the ',
          { text: 'power wire', part: 'power-wire' },
          ' at the back.',
        ],
        ['When the ice box is full, the ice maker stops making ice by itself.'],
      ],
    },
  ],
  flow: [
    { partIds: ['body', 'water-box'], sentenceRef: 1, caption: 'The body holds everything; water box holds water.' },
    { partIds: ['cold-part'], sentenceRef: 4, caption: 'The cold part gets very cold and turns water into ice.' },
    { partIds: ['ice-box'], sentenceRef: 6, caption: 'Ice falls down into the ice box.' },
    { partIds: ['top-part', 'button'], sentenceRef: 8, caption: 'Top part keeps cold inside; button starts the making.' },
    { partIds: ['power-wire'], sentenceRef: 10, caption: 'Power wire brings power; maker stops when full.' },
  ],
  keyExpressions: [
    { text: 'ice maker', partId: 'cold-part' },
    { text: 'makes ice from water', partId: 'cold-part' },
    { text: 'holds the water before it becomes ice', partId: 'water-box' },
    { text: 'gets very cold and turns the water into ice', partId: 'cold-part' },
    { text: 'holds the ice until you are ready to use it', partId: 'ice-box' },
    { text: 'closes so the cold stays inside', partId: 'top-part' },
    { text: 'stops making ice by itself', partId: 'button' },
  ],
  color: '#E0FFFF',
}