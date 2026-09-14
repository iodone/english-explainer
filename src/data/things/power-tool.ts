import type { ThingData } from '../types'

export const powerTool: ThingData = {
  id: 'power-tool',
  slug: 'power-tool',
  simpleName: 'The Hand Machine',
  realName: 'Power tool',
  category: 'power',
  funFacts: [
    'A hand machine can do work much faster than doing it with your hands.',
    'The first hand machines were made more than 100 years ago.',
    'Some hand machines can turn very fast — more than 30,000 times in one minute.',
  ],
  parts: [
    { id: 'body', label: 'body', realName: 'Housing', position: [0, 0, 0], finish: 'hull' },
    { id: 'handle', label: 'handle', realName: 'Grip', position: [0, -0.10, 0.02], finish: 'titanium' },
    { id: 'turn-part', label: 'turn part', realName: 'Motor', position: [0, 0.02, 0], finish: 'cold' },
    { id: 'work-end', label: 'work end', realName: 'Chuck', position: [0, 0.12, 0], finish: 'titanium' },
    { id: 'button', label: 'button', realName: 'Trigger', position: [0, -0.06, 0.06], finish: 'warning' },
    { id: 'power-wire', label: 'power wire', realName: 'Power cord', position: [0, -0.12, -0.04], finish: 'cold' },
    { id: 'side-handle', label: 'side handle', realName: 'Auxiliary handle', position: [0.08, -0.02, 0], finish: 'titanium' },
  ],
  article: [
    {
      sentences: [
        [
          'This is a ',
          { text: 'hand machine', dict: 'power-tool' },
          '. It helps you do work much faster than using your hands.',
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
          { text: 'handle', part: 'handle' },
          ' at the bottom is where you hold it with your hand.',
        ],
      ],
    },
    {
      sentences: [
        [
          'The ',
          { text: 'turn part', part: 'turn-part' },
          ' inside goes round and round very fast.',
        ],
        [
          'It is joined to the ',
          { text: 'work end', part: 'work-end' },
          ' at the front where the work happens.',
        ],
      ],
    },
    {
      sentences: [
        [
          'You push the ',
          { text: 'button', part: 'button' },
          ' with your finger to make it start.',
        ],
        ['The more you push, the faster it goes.'],
      ],
    },
    {
      sentences: [
        [
          'The ',
          { text: 'power wire', part: 'power-wire' },
          ' brings power from the wall so it can work.',
        ],
        ['Some hand machines use a box that holds power inside instead of a wire.'],
      ],
    },
    {
      sentences: [
        [
          'The ',
          { text: 'side handle', part: 'side-handle' },
          ' on the side gives your other hand something to hold.',
        ],
        ['Hand machines make hard work much easier and faster.'],
      ],
    },
  ],
  flow: [
    { partIds: ['body', 'handle'], sentenceRef: 1, caption: 'Body holds parts; handle is where you hold it.' },
    { partIds: ['turn-part', 'work-end'], sentenceRef: 4, caption: 'Turn part spins fast; work end does the work.' },
    { partIds: ['button'], sentenceRef: 6, caption: 'Push button to start; push more for faster.' },
    { partIds: ['power-wire'], sentenceRef: 8, caption: 'Power wire brings power from the wall.' },
    { partIds: ['side-handle'], sentenceRef: 10, caption: 'Side handle gives other hand something to hold.' },
  ],
  keyExpressions: [
    { text: 'hand machine', partId: 'body' },
    { text: 'helps you do work much faster', partId: 'turn-part' },
    { text: 'holds it with your hand', partId: 'handle' },
    { text: 'goes round and round very fast', partId: 'turn-part' },
    { text: 'push the button with your finger', partId: 'button' },
    { text: 'brings power from the wall', partId: 'power-wire' },
    { text: 'gives your other hand something to hold', partId: 'side-handle' },
  ],
  color: '#FFD700',
}