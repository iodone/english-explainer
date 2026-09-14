import type { ThingData } from '../types'

export const spacePlant: ThingData = {
  id: 'space-plant',
  slug: 'space-plant',
  simpleName: 'The Sky Plant',
  realName: 'Space plant growth',
  category: 'space',
  funFacts: [
    'People have been growing plants in the sky for more than 20 years.',
    'Plants in the sky grow differently because there is no pulling force.',
    'The first flower in the sky was grown in 2015.',
  ],
  parts: [
    { id: 'body', label: 'body', realName: 'Growth chamber', position: [0, 0, 0], finish: 'hull' },
    { id: 'light', label: 'light', realName: 'LED light', position: [0, 0.08, 0], finish: 'cold' },
    { id: 'dirt-box', label: 'dirt box', realName: 'Soil container', position: [0, -0.06, 0], finish: 'titanium' },
    { id: 'water-part', label: 'water part', realName: 'Irrigation system', position: [0, -0.04, 0.06], finish: 'cold' },
    { id: 'air-part', label: 'air part', realName: 'Air circulation', position: [0, 0.04, -0.06], finish: 'cold' },
    { id: 'look-part', label: 'look part', realName: 'Camera', position: [0, 0.06, 0.06], finish: 'titanium' },
    { id: 'power-wire', label: 'power wire', realName: 'Power cable', position: [0, -0.08, -0.04], finish: 'cold' },
  ],
  article: [
    {
      sentences: [
        [
          'This is a ',
          { text: 'sky plant', dict: 'space-plant' },
          '. It grows plants up in the sky where there is no ground.',
        ],
      ],
    },
    {
      sentences: [
        [
          'The ',
          { text: 'body', part: 'body' },
          ' is the box that holds the plant and everything it needs.',
        ],
        [
          'The ',
          { text: 'light', part: 'light' },
          ' at the top makes light like the sun so the plant can grow.',
        ],
      ],
    },
    {
      sentences: [
        [
          'The ',
          { text: 'dirt box', part: 'dirt-box' },
          ' at the bottom holds the dirt where the plant puts its feet.',
        ],
        [
          'The ',
          { text: 'water part', part: 'water-part' },
          ' gives the plant water when it needs it.',
        ],
      ],
    },
    {
      sentences: [
        [
          'The ',
          { text: 'air part', part: 'air-part' },
          ' moves the air around the plant so it can breathe.',
        ],
        ['Plants need to breathe just like people do.'],
      ],
    },
    {
      sentences: [
        [
          'The ',
          { text: 'look part', part: 'look-part' },
          ' takes pictures of the plant so people on the ground can see how it is doing.',
        ],
        ['This is important because no one is there to look at the plant.'],
      ],
    },
    {
      sentences: [
        [
          'The sky plant gets power through the ',
          { text: 'power wire', part: 'power-wire' },
          ' at the back.',
        ],
        ['Growing plants in the sky could help people who go on very long trips.'],
      ],
    },
  ],
  flow: [
    { partIds: ['body', 'light'], sentenceRef: 1, caption: 'Body holds the plant; light makes sun light.' },
    { partIds: ['dirt-box', 'water-part'], sentenceRef: 4, caption: 'Dirt box holds dirt; water part gives water.' },
    { partIds: ['air-part'], sentenceRef: 6, caption: 'Air part moves air so the plant can breathe.' },
    { partIds: ['look-part'], sentenceRef: 8, caption: 'Look part takes pictures for people on the ground.' },
    { partIds: ['power-wire'], sentenceRef: 10, caption: 'Power wire brings power; helps on long trips.' },
  ],
  keyExpressions: [
    { text: 'sky plant', partId: 'body' },
    { text: 'grows plants up in the sky', partId: 'light' },
    { text: 'makes light like the sun', partId: 'light' },
    { text: 'holds the dirt where the plant puts its feet', partId: 'dirt-box' },
    { text: 'gives the plant water', partId: 'water-part' },
    { text: 'moves the air so it can breathe', partId: 'air-part' },
    { text: 'how it is doing', partId: 'look-part' },
  ],
  color: '#90EE90',
}