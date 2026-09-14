import type { ThingData } from '../types'

export const powerSocket: ThingData = {
  id: 'power-socket',
  slug: 'power-socket',
  simpleName: 'The Wall Power',
  realName: 'Power socket',
  category: 'power',
  funFacts: [
    'A wall power lets you get power from the wall to make things work.',
    'The first wall powers were put in homes about 100 years ago.',
    'Some wall powers can also send things that move through the air.',
  ],
  parts: [
    { id: 'body', label: 'body', realName: 'Faceplate', position: [0, 0, 0], finish: 'hull' },
    { id: 'hole-left', label: 'hole left', realName: 'Live terminal', position: [-0.02, 0, 0.02], finish: 'titanium' },
    { id: 'hole-right', label: 'hole right', realName: 'Neutral terminal', position: [0.02, 0, 0.02], finish: 'titanium' },
    { id: 'ground-hole', label: 'ground hole', realName: 'Earth terminal', position: [0, -0.03, 0.02], finish: 'titanium' },
    { id: 'inside-part', label: 'inside part', realName: 'Contact', position: [0, 0, -0.02], finish: 'cold' },
    { id: 'wire', label: 'wire', realName: 'Wiring', position: [0, 0, -0.06], finish: 'cold' },
    { id: 'switch', label: 'switch', realName: 'Switch', position: [0, 0.04, 0.02], finish: 'warning' },
  ],
  article: [
    {
      sentences: [
        [
          'This is a ',
          { text: 'wall power', dict: 'power-socket' },
          '. It is how you get power from the wall to make things work.',
        ],
      ],
    },
    {
      sentences: [
        [
          'The ',
          { text: 'body', part: 'body' },
          ' is the flat part you see on the wall.',
        ],
        ['It holds all the other parts in place.'],
      ],
    },
    {
      sentences: [
        [
          'The ',
          { text: 'hole left', part: 'hole-left' },
          ' and ',
          { text: 'hole right', part: 'hole-right' },
          ' are the two small holes where you push the end of a wire in.',
        ],
        ['Power goes in one hole and comes out the other.'],
      ],
    },
    {
      sentences: [
        [
          'The ',
          { text: 'ground hole', part: 'ground-hole' },
          ' is the bigger hole at the bottom that keeps you safe.',
        ],
        ['If something goes wrong, the power goes into the ground instead of into you.'],
      ],
    },
    {
      sentences: [
        [
          'The ',
          { text: 'inside part', part: 'inside-part' },
          ' is the metal part inside that touches the end of the wire.',
        ],
        [
          'The ',
          { text: 'wire', part: 'wire' },
          ' behind the wall brings power from the power place.',
        ],
      ],
    },
    {
      sentences: [
        [
          'Some wall powers have a ',
          { text: 'switch', part: 'switch' },
          ' that lets you turn the power on and off.',
        ],
        ['Wall powers are in every room because we need power for almost everything.'],
      ],
    },
  ],
  flow: [
    { partIds: ['body'], sentenceRef: 1, caption: 'Body is the flat part on the wall.' },
    { partIds: ['hole-left', 'hole-right'], sentenceRef: 4, caption: 'Two holes — power goes in one and out the other.' },
    { partIds: ['ground-hole'], sentenceRef: 6, caption: 'Ground hole keeps you safe.' },
    { partIds: ['inside-part', 'wire'], sentenceRef: 8, caption: 'Inside part touches wire; wire brings power from far away.' },
    { partIds: ['switch'], sentenceRef: 10, caption: 'Switch turns power on and off.' },
  ],
  keyExpressions: [
    { text: 'wall power', partId: 'body' },
    { text: 'get power from the wall', partId: 'hole-left' },
    { text: 'where you push the end of a wire in', partId: 'hole-left' },
    { text: 'keeps you safe', partId: 'ground-hole' },
    { text: 'power goes into the ground instead of into you', partId: 'ground-hole' },
    { text: 'touches the end of the wire', partId: 'inside-part' },
    { text: 'turn the power on and off', partId: 'switch' },
  ],
  color: '#F5F5F5',
}