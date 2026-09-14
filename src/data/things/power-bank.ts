import type { ThingData } from '../types'

export const powerBank: ThingData = {
  id: 'power-bank',
  slug: 'power-bank',
  simpleName: 'The Power Box',
  realName: 'Power bank',
  category: 'power',
  funFacts: [
    'A power box can fill up with power and then give it to other things when you need it.',
    'The first power boxes were made about 20 years ago.',
    'Some power boxes can fill up a small phone more than 10 times.',
  ],
  parts: [
    { id: 'body', label: 'body', realName: 'Housing', position: [0, 0, 0], finish: 'hull' },
    { id: 'power-inside', label: 'power inside', realName: 'Battery cell', position: [0, 0, 0], finish: 'cold' },
    { id: 'power-in', label: 'power in', realName: 'Input port', position: [0, 0, -0.08], finish: 'titanium' },
    { id: 'power-out', label: 'power out', realName: 'Output port', position: [0, 0, 0.08], finish: 'titanium' },
    { id: 'light', label: 'light', realName: 'LED indicator', position: [0, 0.06, 0.04], finish: 'warning' },
    { id: 'button', label: 'button', realName: 'Power button', position: [0, 0.06, -0.02], finish: 'warning' },
    { id: 'cover', label: 'cover', realName: 'Protective case', position: [0, 0, 0], finish: 'hull' },
  ],
  article: [
    {
      sentences: [
        [
          'This is a ',
          { text: 'power box', dict: 'power-bank' },
          '. It holds power inside so you can use it later.',
        ],
      ],
    },
    {
      sentences: [
        [
          'The ',
          { text: 'body', part: 'body' },
          ' is the small box you can hold in your hand.',
        ],
        [
          'Inside the body is the ',
          { text: 'power inside', part: 'power-inside' },
          ' that holds all the power.',
        ],
      ],
    },
    {
      sentences: [
        [
          'You fill the power box with power through the ',
          { text: 'power in', part: 'power-in' },
          ' at one end.',
        ],
        [
          'When you need power, you put a wire in the ',
          { text: 'power out', part: 'power-out' },
          ' at the other end.',
        ],
      ],
    },
    {
      sentences: [
        [
          'The ',
          { text: 'light', part: 'light' },
          ' on the body tells you how much power is left inside.',
        ],
        ['When the light is very low, it is time to fill the power box again.'],
      ],
    },
    {
      sentences: [
        [
          'The ',
          { text: 'button', part: 'button' },
          ' on the side starts and stops the power going out.',
        ],
        ['You push it once to start and once more to stop.'],
      ],
    },
    {
      sentences: [
        [
          'The ',
          { text: 'cover', part: 'cover' },
          ' keeps the body safe if you drop it.',
        ],
        ['Power boxes are very good for when you are away from home and need power.'],
      ],
    },
  ],
  flow: [
    { partIds: ['body', 'power-inside'], sentenceRef: 1, caption: 'Body is small box; power inside holds all the power.' },
    { partIds: ['power-in', 'power-out'], sentenceRef: 4, caption: 'Power in fills it; power out gives power to other things.' },
    { partIds: ['light'], sentenceRef: 6, caption: 'Light tells how much power is left.' },
    { partIds: ['button'], sentenceRef: 8, caption: 'Button starts and stops the power going out.' },
    { partIds: ['cover'], sentenceRef: 10, caption: 'Cover keeps it safe if dropped.' },
  ],
  keyExpressions: [
    { text: 'power box', partId: 'power-inside' },
    { text: 'holds power inside so you can use it later', partId: 'power-inside' },
    { text: 'fill the power box with power', partId: 'power-in' },
    { text: 'how much power is left inside', partId: 'light' },
    { text: 'starts and stops the power going out', partId: 'button' },
    { text: 'away from home and need power', partId: 'power-out' },
    { text: 'keeps the body safe if you drop it', partId: 'cover' },
  ],
  color: '#2F4F4F',
}