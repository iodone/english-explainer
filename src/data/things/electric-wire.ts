import type { ThingData } from '../types'

export const electricWire: ThingData = {
  id: 'electric-wire',
  slug: 'electric-wire',
  simpleName: 'The Power Line',
  realName: 'Electric wire',
  category: 'power',
  funFacts: [
    'An electric wire can carry power very fast — almost as fast as light.',
    'The first electric wires were put up about 150 years ago.',
    'Some electric wires go under the ground and some go through the air on very tall sticks.',
  ],
  parts: [
    { id: 'outside', label: 'outside', realName: 'Insulation', position: [0, 0, 0], finish: 'hull' },
    { id: 'inside-wire', label: 'inside wire', realName: 'Conductor', position: [0, 0, 0], finish: 'titanium' },
    { id: 'end-part', label: 'end part', realName: 'Connector', position: [0, 0, 0.12], finish: 'cold' },
    { id: 'ground-wire', label: 'ground wire', realName: 'Ground conductor', position: [0, -0.04, 0], finish: 'warning' },
    { id: 'cover', label: 'cover', realName: 'Sheath', position: [0, 0.04, 0], finish: 'hull' },
    { id: 'hold-part', label: 'hold part', realName: 'Strain relief', position: [0, 0, 0.10], finish: 'titanium' },
    { id: 'bend-part', label: 'bend part', realName: 'Flexible joint', position: [0, 0, -0.08], finish: 'cold' },
  ],
  article: [
    {
      sentences: [
        [
          'This is an ',
          { text: 'electric wire', dict: 'electric-wire' },
          '. It carries power from one place to another.',
        ],
      ],
    },
    {
      sentences: [
        [
          'The ',
          { text: 'outside', part: 'outside' },
          ' is the colored part you can see.',
        ],
        ['It keeps the power inside so it does not hurt you.'],
      ],
    },
    {
      sentences: [
        [
          'The ',
          { text: 'inside wire', part: 'inside-wire' },
          ' is the metal part inside that carries the power.',
        ],
        ['It is usually made of a soft yellow metal that lets power go through it very well.'],
      ],
    },
    {
      sentences: [
        [
          'The ',
          { text: 'end part', part: 'end-part' },
          ' at the end is what you push into the wall to get power.',
        ],
        [
          'The ',
          { text: 'ground wire', part: 'ground-wire' },
          ' is a special wire that keeps you safe if something goes wrong.',
        ],
      ],
    },
    {
      sentences: [
        [
          'The ',
          { text: 'cover', part: 'cover' },
          ' around the outside keeps water and other things away from the inside wire.',
        ],
        [
          'The ',
          { text: 'hold part', part: 'hold-part' },
          ' where the wire meets the end part keeps the wire from breaking.',
        ],
      ],
    },
    {
      sentences: [
        [
          'The ',
          { text: 'bend part', part: 'bend-part' },
          ' lets the wire turn without breaking.',
        ],
        ['Without electric wires, we could not get power to our homes.'],
      ],
    },
  ],
  flow: [
    { partIds: ['outside', 'inside-wire'], sentenceRef: 1, caption: 'Outside keeps power safe; inside wire carries it.' },
    { partIds: ['inside-wire'], sentenceRef: 4, caption: 'Inside wire is metal that lets power go through.' },
    { partIds: ['end-part', 'ground-wire'], sentenceRef: 6, caption: 'End part plugs into wall; ground wire keeps you safe.' },
    { partIds: ['cover', 'hold-part'], sentenceRef: 8, caption: 'Cover keeps water out; hold part stops breaking.' },
    { partIds: ['bend-part'], sentenceRef: 10, caption: 'Bend part lets wire turn without breaking.' },
  ],
  keyExpressions: [
    { text: 'electric wire', partId: 'inside-wire' },
    { text: 'carries power from one place to another', partId: 'inside-wire' },
    { text: 'keeps the power inside so it does not hurt you', partId: 'outside' },
    { text: 'carries the power', partId: 'inside-wire' },
    { text: 'push into the wall to get power', partId: 'end-part' },
    { text: 'keeps you safe if something goes wrong', partId: 'ground-wire' },
    { text: 'lets the wire turn without breaking', partId: 'bend-part' },
  ],
  color: '#FFD700',
}