import type { ThingData } from '../types'

export const spaceGlove: ThingData = {
  id: 'space-glove',
  slug: 'space-glove',
  simpleName: 'The Sky Hand Cover',
  realName: 'Space glove',
  category: 'space',
  funFacts: [
    'A sky hand cover is very thick but the person inside can still feel small things with their fingers.',
    'The fingers in a sky hand cover have special rubber ends so the person can pick up very small things.',
    'After wearing sky hand covers for many hours, the person\'s hands get very tried because the covers push back.',
  ],
  parts: [
    { id: 'outer-layer', label: 'outer layer', realName: 'Micrometeoroid garment', position: [0, 0, 0.06], finish: 'hull' },
    { id: 'inner-layer', label: 'inner layer', realName: 'Pressure bladder', position: [0, 0, 0], finish: 'titanium' },
    { id: 'fingers', label: 'fingers', realName: 'Digits', position: [0, 0.12, 0.06], finish: 'cold' },
    { id: 'hand-ring', label: 'hand ring', realName: 'Disconnect ring', position: [0, -0.14, 0], finish: 'titanium' },
    { id: 'heater-wire', label: 'heater wire', realName: 'Heater element', position: [0, 0, -0.04], finish: 'warning' },
    { id: 'rubber-tips', label: 'rubber tips', realName: 'Tactile pads', position: [0, 0.16, 0.08], finish: 'cold' },
    { id: 'palm', label: 'palm', realName: 'Palm pad', position: [0, 0.02, 0.08], finish: 'hull' },
  ],
  article: [
    {
      sentences: [
        [
          'This is a ',
          { text: 'sky hand cover', dict: 'space-glove' },
          '. It is a special cover that keeps a person\'s hands safe in the sky where there is no air.',
        ],
      ],
    },
    {
      sentences: [
        [
          'The ',
          { text: 'outer layer', part: 'outer-layer' },
          ' on the outside stops small things flying through the sky from hurting the hands.',
        ],
        [
          'Under that, the ',
          { text: 'inner layer', part: 'inner-layer' },
          ' holds air inside so the hands can move and feel things.',
        ],
      ],
    },
    {
      sentences: [
        [
          'The ',
          { text: 'fingers', part: 'fingers' },
          ' are made to move well so the person can pick things up and use tools.',
        ],
        [
          'At the end of each finger are ',
          { text: 'rubber tips', part: 'rubber-tips' },
          ' that help the person feel small things.',
        ],
      ],
    },
    {
      sentences: [
        [
          'At the bottom, the ',
          { text: 'hand ring', part: 'hand-ring' },
          ' joins the hand cover to the arm cover.',
        ],
        ['This ring makes a very closed space so no air can get out.'],
      ],
    },
    {
      sentences: [
        [
          'Inside the cover, a ',
          { text: 'heater wire', part: 'heater-wire' },
          ' keeps the hands warm.',
        ],
        ['In the sky, it can be very cold, so the hands need help to stay warm.'],
      ],
    },
    {
      sentences: [
        [
          'The ',
          { text: 'palm', part: 'palm' },
          ' part has special rubber that helps the person hold things without dropping them.',
        ],
        ['The whole cover is made so the person can work with their hands even in the sky.'],
      ],
    },
  ],
  flow: [
    { partIds: ['outer-layer', 'inner-layer'], sentenceRef: 1, caption: 'Two layers keep the hands safe from small things and keep air in.' },
    { partIds: ['fingers', 'rubber-tips'], sentenceRef: 4, caption: 'Fingers move well; rubber tips help feel small things.' },
    { partIds: ['hand-ring'], sentenceRef: 6, caption: 'The hand ring joins to the arm cover.' },
    { partIds: ['heater-wire'], sentenceRef: 8, caption: 'A heater wire keeps the hands warm in the cold sky.' },
    { partIds: ['palm'], sentenceRef: 10, caption: 'The palm has special rubber for holding things.' },
  ],
  keyExpressions: [
    { text: 'sky hand cover', partId: 'outer-layer' },
    { text: 'keeps a person\'s hands safe', partId: 'outer-layer' },
    { text: 'stops small things from hurting', partId: 'outer-layer' },
    { text: 'holds air inside so hands can move', partId: 'inner-layer' },
    { text: 'fingers are made to move well', partId: 'fingers' },
    { text: 'rubber tips help feel small things', partId: 'rubber-tips' },
    { text: 'joins the hand cover to the arm cover', partId: 'hand-ring' },
  ],
  color: '#F0F0F0',
}