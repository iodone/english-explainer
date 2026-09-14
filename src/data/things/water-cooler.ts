import type { ThingData } from '../types'

export const waterCooler: ThingData = {
  id: 'water-cooler',
  slug: 'water-cooler',
  simpleName: 'The Water Cooler',
  realName: 'Water cooler',
  category: 'home',
  funFacts: [
    'A water cooler can make water very cold so it is nice to drink on hot days.',
    'The first water coolers were made about 100 years ago.',
    'Some water coolers can also make water very hot for making hot drinks.',
  ],
  parts: [
    { id: 'body', label: 'body', realName: 'Housing', position: [0, 0, 0], finish: 'hull' },
    { id: 'water-box', label: 'water box', realName: 'Water reservoir', position: [0, 0.10, 0], finish: 'cold' },
    { id: 'cold-part', label: 'cold part', realName: 'Cooling system', position: [0, -0.04, 0], finish: 'cold' },
    { id: 'hot-part', label: 'hot part', realName: 'Heating system', position: [0, -0.04, 0.06], finish: 'warning' },
    { id: 'cold-button', label: 'cold button', realName: 'Cold spigot', position: [0, -0.08, 0.10], finish: 'cold' },
    { id: 'hot-button', label: 'hot button', realName: 'Hot spigot', position: [0, -0.08, 0.08], finish: 'warning' },
    { id: 'power-wire', label: 'power wire', realName: 'Power cord', position: [0, -0.12, -0.08], finish: 'cold' },
  ],
  article: [
    {
      sentences: [
        [
          'This is a ',
          { text: 'water cooler', dict: 'water-cooler' },
          '. It makes water cold so it is nice to drink.',
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
          ' at the top holds the water before it is made cold.',
        ],
      ],
    },
    {
      sentences: [
        [
          'The ',
          { text: 'cold part', part: 'cold-part' },
          ' inside gets very cold and makes the water cold too.',
        ],
        [
          'Some water coolers also have a ',
          { text: 'hot part', part: 'hot-part' },
          ' that makes water very hot.',
        ],
      ],
    },
    {
      sentences: [
        [
          'You get cold water by pushing the ',
          { text: 'cold button', part: 'cold-button' },
          ' at the front.',
        ],
        [
          'You get hot water by pushing the ',
          { text: 'hot button', part: 'hot-button' },
          ' next to it.',
        ],
      ],
    },
    {
      sentences: [
        ['The hot button is usually a different color so you know which one is hot.'],
        ['This is important because the hot water can be very hot and hurt you.'],
      ],
    },
    {
      sentences: [
        [
          'The water cooler gets power through the ',
          { text: 'power wire', part: 'power-wire' },
          ' at the back.',
        ],
        ['Water coolers are very good for places where many people work.'],
      ],
    },
  ],
  flow: [
    { partIds: ['body', 'water-box'], sentenceRef: 1, caption: 'The body holds everything; water box holds water.' },
    { partIds: ['cold-part', 'hot-part'], sentenceRef: 4, caption: 'Cold part makes water cold; hot part makes it hot.' },
    { partIds: ['cold-button', 'hot-button'], sentenceRef: 6, caption: 'Cold button gives cold water; hot button gives hot water.' },
    { partIds: ['hot-button'], sentenceRef: 8, caption: 'The hot button is a different color so you know it is hot.' },
    { partIds: ['power-wire'], sentenceRef: 10, caption: 'Power wire brings power; good for places where many work.' },
  ],
  keyExpressions: [
    { text: 'water cooler', partId: 'cold-part' },
    { text: 'makes water cold so it is nice to drink', partId: 'cold-part' },
    { text: 'holds the water before it is made cold', partId: 'water-box' },
    { text: 'gets very cold and makes the water cold', partId: 'cold-part' },
    { text: 'makes water very hot', partId: 'hot-part' },
    { text: 'push the cold button at the front', partId: 'cold-button' },
    { text: 'push the hot button next to it', partId: 'hot-button' },
  ],
  color: '#E0FFFF',
}