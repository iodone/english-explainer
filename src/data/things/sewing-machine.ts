import type { ThingData } from '../types'

export const sewingMachine: ThingData = {
  id: 'sewing-machine',
  slug: 'sewing-machine',
  simpleName: 'The Cloth Joiner',
  realName: 'Sewing Machine',
  category: 'home',
  funFacts: [
    'The fastest machines can make over 8000 stitches in a minute — your eye can barely follow the needle.',
    'In 1846, a machine like this beat 5 hand workers making the same shirt — people could not believe it.',
    'The two threads lock together in the middle of the cloth — a chain that cannot come apart, stitch by stitch.',
  ],
  parts: [
    { id: 'sharp-needle', label: 'sharp needle', realName: 'Needle', position: [-0.2, -0.11, 0], finish: 'warning' },
    { id: 'top-thread', label: 'top thread', realName: 'Upper thread', position: [-0.1, 0.15, 0], finish: 'titanium' },
    { id: 'under-thread', label: 'under thread', realName: 'Bobbin thread', position: [-0.2, -0.225, 0], finish: 'cold' },
    { id: 'hand-wheel', label: 'big wheel', realName: 'Handwheel', position: [0.34, -0.02, 0], finish: 'cold' },
    { id: 'drive-band', label: 'drive band', realName: 'Drive belt', position: [0.335, -0.18, 0], finish: 'cold' },
    { id: 'foot-switch', label: 'foot switch', realName: 'Foot controller', position: [0.5, -0.36, 0], finish: 'cold' },
    { id: 'cloth-table', label: 'cloth table', realName: 'Needle plate & bed', position: [0, -0.16, 0], finish: 'hull' },
  ],
  article: [
    {
      sentences: [
        [
          'This machine drives a ',
          { text: 'needle', dict: 'needle' },
          ' through cloth, over and over, faster than any hand.',
        ],
        [
          'Each pass leaves a small ',
          { text: 'stitch', dict: 'stitch' },
          ' — two pieces of cloth become one.',
        ],
        ['A shirt needs about 3000 stitches; hands would need days — the machine needs minutes.'],
      ],
    },
    {
      sentences: [
        [
          'At the front, a ',
          { text: 'sharp needle', part: 'sharp-needle' },
          ' rides up and down, the only part that touches the cloth every moment.',
        ],
        [
          'It carries the ',
          { text: 'top thread', part: 'top-thread', dict: 'thread' },
          ' down through the cloth and back up, all day long.',
        ],
        [
          'Under the table, a second ',
          { text: 'under thread', part: 'under-thread' },
          ' waits on a small metal ring; the two threads lock hands under the cloth on every single pass.',
        ],
        [
          'A ',
          { text: 'big wheel', part: 'hand-wheel' },
          ' on the right end turns around and around — it is the hand that makes everything move.',
        ],
      ],
    },
    {
      sentences: [
        [
          'A ',
          { text: 'drive band', part: 'drive-band', dict: 'band' },
          ' runs from a small motor to the wheel, turning it fast.',
        ],
        [
          'Your foot rests on the ',
          { text: 'foot switch', part: 'foot-switch' },
          ' — press harder and everything runs faster; let up and it slows.',
        ],
        [
          'The cloth slides across the flat ',
          { text: 'cloth table', part: 'cloth-table' },
          ', and little teeth under it pull the cloth forward after every stitch.',
        ],
        ['Needle down, thread through, threads lock, cloth moves — 1000 times a minute, all in step.'],
      ],
    },
    {
      sentences: [
        ['The first machines of this kind ran on foot power alone — no motor, just a rocking board under the foot.'],
        ['Every shirt, every dress, every bag — most were born on a machine like this one.'],
        ['Today the needle still does the same simple job it did 200 years ago: push through, pull back, lock together.'],
      ],
    },
  ],
  flow: [
    { partIds: ['sharp-needle'], sentenceRef: 3, caption: 'The sharp needle rides up and down, the only part that touches the cloth.' },
    { partIds: ['top-thread'], sentenceRef: 4, caption: 'It carries the top thread down through the cloth and back up.' },
    { partIds: ['under-thread'], sentenceRef: 5, caption: 'Under the table, the under thread locks hands with it on every pass.' },
    { partIds: ['drive-band'], sentenceRef: 7, caption: 'A drive band runs from a small motor to the wheel, turning it fast.' },
    { partIds: ['foot-switch'], sentenceRef: 8, caption: 'Your foot on the switch sets the speed — press harder, run faster.' },
  ],
  keyExpressions: [
    { text: 'faster than any hand', partId: 'sharp-needle' },
    { text: 'carries the top thread down and back up', partId: 'top-thread' },
    { text: 'lock hands under the cloth', partId: 'under-thread' },
    { text: 'turns around and around', partId: 'hand-wheel' },
    { text: 'runs from the small motor to the wheel', partId: 'drive-band' },
    { text: 'press harder and everything runs faster', partId: 'foot-switch' },
    { text: 'little teeth pull the cloth forward', partId: 'cloth-table' },
    { text: 'two pieces of cloth become one' },
    { text: 'push through, pull back, lock together' },
  ],
  color: '#E8A0BF',
}
