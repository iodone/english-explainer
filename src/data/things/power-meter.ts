import type { ThingData } from '../types'

export const powerMeter: ThingData = {
  id: 'power-meter',
  slug: 'power-meter',
  simpleName: 'The Power Counter',
  realName: 'Power meter',
  category: 'power',
  funFacts: [
    'A power counter can count how much power a home uses in a whole year.',
    'The first power counters were made about 140 years ago when people started using power in their homes.',
    'Some new power counters can send the numbers to the power company by themselves.',
  ],
  parts: [
    { id: 'body', label: 'body', realName: 'Housing', position: [0, 0, 0], finish: 'hull' },
    { id: 'glass-front', label: 'glass front', realName: 'Display window', position: [0, 0, 0.08], finish: 'cold' },
    { id: 'numbers', label: 'numbers', realName: 'Register', position: [0, 0, 0.06], finish: 'titanium' },
    { id: 'wire-in', label: 'wire in', realName: 'Line input', position: [0, -0.08, -0.04], finish: 'cold' },
    { id: 'wire-out', label: 'wire out', realName: 'Load output', position: [0, 0.08, -0.04], finish: 'cold' },
    { id: 'turn-part', label: 'turn part', realName: 'Disc', position: [0, -0.02, 0.04], finish: 'cold' },
    { id: 'hold-part', label: 'hold part', realName: 'Mounting base', position: [0, 0, -0.08], finish: 'hull' },
  ],
  article: [
    {
      sentences: [
        [
          'This is a ',
          { text: 'power counter', dict: 'power-meter' },
          '. It counts how much power your home uses.',
        ],
      ],
    },
    {
      sentences: [
        [
          'The ',
          { text: 'body', part: 'body' },
          ' is the box on the wall that holds all the counting things.',
        ],
        [
          'A ',
          { text: 'glass front', part: 'glass-front' },
          ' on the front lets you see the numbers inside.',
        ],
      ],
    },
    {
      sentences: [
        [
          'Behind the glass are the ',
          { text: 'numbers', part: 'numbers' },
          ' that show how much power has been used.',
        ],
        ['The numbers go up as more power is used.'],
      ],
    },
    {
      sentences: [
        [
          'A ',
          { text: 'turn part', part: 'turn-part' },
          ' inside turns around when power is going through.',
        ],
        ['The faster it turns, the more power is being used at that time.'],
      ],
    },
    {
      sentences: [
        [
          'A ',
          { text: 'wire in', part: 'wire-in' },
          ' at the back brings power from the power company.',
        ],
        [
          'A ',
          { text: 'wire out', part: 'wire-out' },
          ' sends power to your home.',
        ],
      ],
    },
    {
      sentences: [
        [
          'The ',
          { text: 'hold part', part: 'hold-part' },
          ' joins the power counter to the wall.',
        ],
        ['A person from the power company comes to read the numbers and tell you how much to pay.'],
      ],
    },
  ],
  flow: [
    { partIds: ['body', 'glass-front'], sentenceRef: 1, caption: 'The body holds everything; glass front lets you see inside.' },
    { partIds: ['numbers'], sentenceRef: 4, caption: 'The numbers show how much power has been used.' },
    { partIds: ['turn-part'], sentenceRef: 6, caption: 'The turn part goes around when power is being used.' },
    { partIds: ['wire-in', 'wire-out'], sentenceRef: 8, caption: 'Wire in brings power from the company; wire out sends it home.' },
    { partIds: ['hold-part'], sentenceRef: 10, caption: 'The hold part joins it to the wall.' },
  ],
  keyExpressions: [
    { text: 'power counter', partId: 'numbers' },
    { text: 'counts how much power your home uses', partId: 'numbers' },
    { text: 'lets you see the numbers inside', partId: 'glass-front' },
    { text: 'show how much power has been used', partId: 'numbers' },
    { text: 'turns around when power is going through', partId: 'turn-part' },
    { text: 'brings power from the power company', partId: 'wire-in' },
    { text: 'comes to read the numbers', partId: 'numbers' },
  ],
  color: '#F5F5DC',
}