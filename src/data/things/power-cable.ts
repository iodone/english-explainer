import type { ThingData } from '../types'

export const powerCable: ThingData = {
  id: 'power-cable',
  slug: 'power-cable',
  simpleName: 'The Power Wire',
  realName: 'Power cable',
  category: 'power',
  funFacts: [
    'A power wire can carry power very far — from the power place all the way to your home.',
    'The first power wires were put up more than 100 years ago.',
    'Some power wires go under the ground and some go through the air on very tall sticks.',
  ],
  parts: [
    { id: 'outside', label: 'outside', realName: 'Outer sheath', position: [0, 0, 0], finish: 'hull' },
    { id: 'inside-wire', label: 'inside wire', realName: 'Conductor', position: [0, 0, 0], finish: 'titanium' },
    { id: 'cover', label: 'cover', realName: 'Insulation', position: [0, 0.02, 0], finish: 'cold' },
    { id: 'end-part', label: 'end part', realName: 'Termination', position: [0, 0, 0.12], finish: 'titanium' },
    { id: 'hold-part', label: 'hold part', realName: 'Clamp', position: [0, 0, 0.10], finish: 'hull' },
    { id: 'join-part', label: 'join part', realName: 'Splice', position: [0, 0, -0.06], finish: 'cold' },
    { id: 'ground-wire', label: 'ground wire', realName: 'Ground conductor', position: [0, -0.04, 0], finish: 'warning' },
  ],
  article: [
    {
      sentences: [
        [
          'This is a ',
          { text: 'power wire', dict: 'power-cable' },
          '. It carries power from one place to another.',
        ],
      ],
    },
    {
      sentences: [
        [
          'The ',
          { text: 'outside', part: 'outside' },
          ' is the thick part you can see from far away.',
        ],
        ['It keeps the power inside safe from rain and wind.'],
      ],
    },
    {
      sentences: [
        [
          'The ',
          { text: 'inside wire', part: 'inside-wire' },
          ' is the metal part inside that carries the power.',
        ],
        [
          'The ',
          { text: 'cover', part: 'cover' },
          ' around the inside wire keeps the power from getting out.',
        ],
      ],
    },
    {
      sentences: [
        [
          'The ',
          { text: 'end part', part: 'end-part' },
          ' at the end is where the power wire is joined to other things.',
        ],
        [
          'The ',
          { text: 'hold part', part: 'hold-part' },
          ' holds the end part very hard so it does not come off.',
        ],
      ],
    },
    {
      sentences: [
        [
          'The ',
          { text: 'join part', part: 'join-part' },
          ' in the middle is where two power wires are joined together.',
        ],
        ['The join must be very good so the power does not get out.'],
      ],
    },
    {
      sentences: [
        [
          'The ',
          { text: 'ground wire', part: 'ground-wire' },
          ' is a special wire that keeps things safe if something goes wrong.',
        ],
        ['Without power wires, we could not get power from the power place to our homes.'],
      ],
    },
  ],
  flow: [
    { partIds: ['outside', 'inside-wire'], sentenceRef: 1, caption: 'Outside keeps power safe; inside wire carries it.' },
    { partIds: ['cover'], sentenceRef: 4, caption: 'Cover keeps power from getting out.' },
    { partIds: ['end-part', 'hold-part'], sentenceRef: 6, caption: 'End part joins to things; hold part holds it hard.' },
    { partIds: ['join-part'], sentenceRef: 8, caption: 'Join part joins two wires together.' },
    { partIds: ['ground-wire'], sentenceRef: 10, caption: 'Ground wire keeps things safe if something goes wrong.' },
  ],
  keyExpressions: [
    { text: 'power wire', partId: 'inside-wire' },
    { text: 'carries power from one place to another', partId: 'inside-wire' },
    { text: 'keeps the power inside safe', partId: 'outside' },
    { text: 'carries the power', partId: 'inside-wire' },
    { text: 'keeps the power from getting out', partId: 'cover' },
    { text: 'joined to other things', partId: 'end-part' },
    { text: 'keeps things safe if something goes wrong', partId: 'ground-wire' },
  ],
  color: '#2F4F4F',
}