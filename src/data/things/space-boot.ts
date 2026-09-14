import type { ThingData } from '../types'

export const spaceBoot: ThingData = {
  id: 'space-boot',
  slug: 'space-boot',
  simpleName: 'The Sky Foot Cover',
  realName: 'Space boot',
  category: 'space',
  funFacts: [
    'A sky foot cover is very thick and heavy — it is about 4 times heavier than a normal foot cover.',
    'The bottom of the sky foot cover has special rubber that stops the person from moving when they do not want to.',
    'The first sky foot covers were made very big and hard to move in, but new ones are much better.',
  ],
  parts: [
    { id: 'hard-cover', label: 'hard cover', realName: 'Outer shell', position: [0, 0, 0.04], finish: 'hull' },
    { id: 'soft-inside', label: 'soft inside', realName: 'Pressure bladder', position: [0, 0, 0], finish: 'titanium' },
    { id: 'hard-bottom', label: 'hard bottom', realName: 'Sole', position: [0, -0.14, 0], finish: 'cold' },
    { id: 'leg-ring', label: 'leg ring', realName: 'Disconnect ring', position: [0, 0.14, 0], finish: 'titanium' },
    { id: 'heater-wire', label: 'heater wire', realName: 'Heater element', position: [0, 0, -0.04], finish: 'warning' },
    { id: 'rubber-bottom', label: 'rubber bottom', realName: 'Traction pads', position: [0, -0.16, 0], finish: 'cold' },
    { id: 'front-part', label: 'front part', realName: 'Toe cap', position: [0, -0.08, 0.10], finish: 'hull' },
  ],
  article: [
    {
      sentences: [
        [
          'This is a ',
          { text: 'sky foot cover', dict: 'space-boot' },
          '. It is a special cover that keeps a person\'s feet safe in the sky where there is no air.',
        ],
      ],
    },
    {
      sentences: [
        [
          'The ',
          { text: 'hard cover', part: 'hard-cover' },
          ' on the outside stops small things from hurting the feet.',
        ],
        [
          'Under that, the ',
          { text: 'soft inside', part: 'soft-inside' },
          ' holds air so the feet can move and feel things.',
        ],
      ],
    },
    {
      sentences: [
        [
          'At the bottom is the ',
          { text: 'hard bottom', part: 'hard-bottom' },
          ' — a very strong piece that the person stands on.',
        ],
        [
          'Under the hard bottom, ',
          { text: 'rubber bottom', part: 'rubber-bottom' },
          ' parts stop the person from moving when they do not want to.',
        ],
      ],
    },
    {
      sentences: [
        [
          'At the top, the ',
          { text: 'leg ring', part: 'leg-ring' },
          ' joins the foot cover to the leg cover.',
        ],
        ['This ring makes a very closed space so no air can get out.'],
      ],
    },
    {
      sentences: [
        [
          'Inside the cover, a ',
          { text: 'heater wire', part: 'heater-wire' },
          ' keeps the feet warm.',
        ],
        ['In the sky, it can be very cold, so the feet need help to stay warm.'],
      ],
    },
    {
      sentences: [
        [
          'The ',
          { text: 'front part', part: 'front-part' },
          ' at the front is very strong so the person can kick things without hurting their feet.',
        ],
        ['The whole cover is made so the person can walk and work even in the sky.'],
      ],
    },
  ],
  flow: [
    { partIds: ['hard-cover', 'soft-inside'], sentenceRef: 1, caption: 'Two layers keep the feet safe and hold air inside.' },
    { partIds: ['hard-bottom', 'rubber-bottom'], sentenceRef: 4, caption: 'The hard bottom is strong; rubber stops sliding.' },
    { partIds: ['leg-ring'], sentenceRef: 6, caption: 'The leg ring joins to the leg cover.' },
    { partIds: ['heater-wire'], sentenceRef: 8, caption: 'A heater wire keeps the feet warm in the cold sky.' },
    { partIds: ['front-part'], sentenceRef: 10, caption: 'The front part is strong for kicking things.' },
  ],
  keyExpressions: [
    { text: 'sky foot cover', partId: 'hard-cover' },
    { text: 'keeps a person\'s feet safe', partId: 'hard-cover' },
    { text: 'stops small things from hurting', partId: 'hard-cover' },
    { text: 'holds air so feet can move', partId: 'soft-inside' },
    { text: 'very strong piece that the person stands on', partId: 'front-part' },
    { text: 'stops the person from moving', partId: 'rubber-bottom' },
    { text: 'joins the foot cover to the leg cover', partId: 'leg-ring' },
  ],
  color: '#F5F5F5',
}