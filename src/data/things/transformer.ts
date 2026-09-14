import type { ThingData } from '../types'

export const transformer: ThingData = {
  id: 'transformer',
  slug: 'transformer',
  simpleName: 'The Power Changer',
  realName: 'Transformer',
  category: 'power',
  funFacts: [
    'The biggest ones are as tall as a house and heavier than 10 cars put together.',
    'Without boxes like this, power could only travel a few city blocks before it lost its push.',
    'The low song you hear near one is the iron ring shaking a little, 50 or 60 times every second.',
  ],
  parts: [
    { id: 'thin-wire-ring', label: 'thin wire ring', realName: 'Primary winding (high voltage)', position: [-0.14, -0.2, 0], finish: 'warning' },
    { id: 'thick-wire-ring', label: 'thick wire ring', realName: 'Secondary winding (low voltage)', position: [0.14, -0.2, 0], finish: 'cold' },
    { id: 'iron-loop', label: 'iron ring', realName: 'Iron core', position: [0, -0.08, 0], finish: 'titanium' },
    { id: 'oil-box', label: 'oil box', realName: 'Oil tank', position: [0, -0.37, 0], finish: 'hull' },
    { id: 'glass-towers', label: 'glass towers', realName: 'Bushings', position: [0, 0.12, 0], finish: 'cold' },
    { id: 'cooling-walls', label: 'cooling walls', realName: 'Radiator fins', position: [0.42, -0.22, 0], finish: 'cold' },
    { id: 'red-sign', label: 'red sign', realName: 'Warning plate', position: [-0.1, -0.2, 0.2], finish: 'cold' },
  ],
  article: [
    {
      sentences: [
        [
          'A ',
          { text: 'transformer', dict: 'transformer' },
          ' is a quiet box that stands between the big power lines and your street.',
        ],
        ['Power travels best when it pushes very hard, but a push that hard would burn your house.'],
        ['So this box takes the hard push and gives back a soft one — strong on one side, safe on the other.'],
      ],
    },
    {
      sentences: [
        [
          'Inside sit two wire rings that never touch, both wrapped around one closed ',
          { text: 'iron ring', part: 'iron-loop' },
          '.',
        ],
        [
          'The ',
          { text: 'thin wire ring', part: 'thin-wire-ring' },
          ' has many, many turns of thin wire — it takes in the hard push from the big lines.',
        ],
        [
          'The ',
          { text: 'thick wire ring', part: 'thick-wire-ring' },
          ' has few turns of thick wire — it gives out the soft push your house can use.',
        ],
        [
          'On top, three ',
          { text: 'glass towers', part: 'glass-towers' },
          ' hold the wires that come in and go out.',
        ],
      ],
    },
    {
      sentences: [
        ['How does the push jump across, with no wire touching?'],
        [
          'When power runs through the thin ring, it turns the iron ring into a ',
          { text: 'magnet', dict: 'magnet' },
          ' for a moment — then off, then on, again and again.',
        ],
        ['That turning on and off wakes power up in the thick ring, all by itself.'],
        ['More turns on the way in push the number up; fewer turns on the way out bring it down — that is how it works.'],
      ],
    },
    {
      sentences: [
        [
          'All of this lives in an ',
          { text: 'oil box', part: 'oil-box' },
          ' of special oil that carries heat away and stops fire.',
        ],
        [
          'Down the sides, ',
          { text: 'cooling walls', part: 'cooling-walls' },
          ' help the hot oil pass its heat to the air outside.',
        ],
        [
          'A ',
          { text: 'red sign', part: 'red-sign' },
          ' tells everyone to stay back — this box can bite harder than any wall plug.',
        ],
      ],
    },
  ],
  flow: [
    { partIds: ['iron-loop'], sentenceRef: 3, caption: 'Two wire rings ride one closed iron ring, and they never touch.' },
    { partIds: ['thin-wire-ring'], sentenceRef: 4, caption: 'The thin wire ring takes in the hard push from the big lines.' },
    { partIds: ['thick-wire-ring'], sentenceRef: 5, caption: 'The thick wire ring gives out the soft push your house can use.' },
    { partIds: ['oil-box'], sentenceRef: 11, caption: 'The oil box carries the heat away and stops fire.' },
    { partIds: ['cooling-walls'], sentenceRef: 12, caption: 'The cooling walls pass that heat to the air outside.' },
  ],
  keyExpressions: [
    { text: 'many turns of thin wire', partId: 'thin-wire-ring' },
    { text: 'few turns of thick wire', partId: 'thick-wire-ring' },
    { text: 'turns the iron ring into a magnet', partId: 'iron-loop' },
    { text: 'hold the wires that come in and go out', partId: 'glass-towers' },
    { text: 'carries heat away and stops fire', partId: 'oil-box' },
    { text: 'pass its heat to the air outside', partId: 'cooling-walls' },
    { text: 'this box can bite — stay back', partId: 'red-sign' },
    { text: 'takes the hard push and gives back a soft one' },
    { text: 'two wire rings that never touch' },
  ],
  color: '#B87333',
}
