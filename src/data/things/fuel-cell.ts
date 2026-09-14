import type { ThingData } from '../types'

export const fuelCell: ThingData = {
  id: 'fuel-cell',
  slug: 'fuel-cell',
  simpleName: 'The Gas Power Box',
  realName: 'Fuel Cell',
  category: 'power',
  funFacts: [
    'A gas power box car runs so quietly that you can hear the tires on the road — no engine sound at all.',
    'The only thing that comes out of a gas power box is water — you can drink what comes out of the back.',
    'Gas power boxes have been in space since the 1960s — they made power and water for the people on the moon ships.',
  ],
  parts: [
    { id: 'box-body', label: 'box body', realName: 'Stack housing', position: [0, 0, 0], finish: 'hull' },
    { id: 'thin-wall', label: 'thin wall', realName: 'Membrane electrode assembly', position: [0, 0, 0], finish: 'cold' },
    { id: 'gas-in', label: 'gas in', realName: 'Hydrogen inlet', position: [-0.30, 0.06, 0], finish: 'warning' },
    { id: 'air-in', label: 'air in', realName: 'Air inlet', position: [0.30, 0.06, 0], finish: 'cold' },
    { id: 'water-out', label: 'water out', realName: 'Water outlet', position: [0.20, -0.20, 0], finish: 'cold' },
    { id: 'wire-ends', label: 'wire ends', realName: 'Electrical terminals', position: [0, 0.20, 0], finish: 'titanium' },
    { id: 'power-wire', label: 'power wire', realName: 'Power cable', position: [0, 0.24, 0], finish: 'cold' },
  ],
  article: [
    {
      sentences: [
        [
          'This small box makes power from two ',
          { text: 'gases', dict: 'gas' },
          ' — and the only things that come out are clean water.',
        ],
        ['No fire, no turning parts, no sound — just a quiet meeting of gases inside a thin wall.'],
        ['It is like a battery that never runs out, as long as you keep feeding it gas.'],
      ],
    },
    {
      sentences: [
        [
          'The ',
          { text: 'box body', part: 'box-body' },
          ' holds everything together — a strong box with many thin layers inside.',
        ],
        [
          'Each layer has a ',
          { text: 'thin wall', part: 'thin-wall' },
          ' in the middle — this wall is where the power is made.',
        ],
        [
          'On one side, ',
          { text: 'gas in', part: 'gas-in' },
          ' brings in the first gas; on the other side, ',
          { text: 'air in', part: 'air-in' },
          ' brings in air.',
        ],
        ['The two gases meet at the thin wall, and the wall lets only the smallest parts through.'],
      ],
    },
    {
      sentences: [
        ['When the small parts cross the wall, they leave their power behind — and that power flows out through the wires.'],
        [
          'The only thing that comes out the bottom is water, through the ',
          { text: 'water out', part: 'water-out' },
          '.',
        ],
        [
          'At the top, two ',
          { text: 'wire ends', part: 'wire-ends' },
          ' send the power out through a ',
          { text: 'power wire', part: 'power-wire' },
          '.',
        ],
        ['Feed it gas, and it makes power and water — feed it more, and it makes more.'],
      ],
    },
    {
      sentences: [
        ['The first gas power boxes went into space ships, where they made power and drinking water at the same time.'],
        ['Today, some cars and buses run on gas power boxes — they are quiet and clean.'],
        ['One day, gas power boxes may power whole buildings, using gas made from light from the sun and water.'],
      ],
    },
  ],
  flow: [
    { partIds: ['box-body'], sentenceRef: 3, caption: 'The box body holds everything together — a strong box with many thin layers.' },
    { partIds: ['thin-wall'], sentenceRef: 4, caption: 'The thin wall in the middle is where the power is made.' },
    { partIds: ['gas-in', 'air-in'], sentenceRef: 5, caption: 'Gas in brings the first gas; air in brings air from the other side.' },
    { partIds: ['water-out'], sentenceRef: 8, caption: 'The only thing that comes out the bottom is water.' },
    { partIds: ['power-wire'], sentenceRef: 9, caption: 'Wire ends send the power out through a power wire.' },
  ],
  keyExpressions: [
    { text: 'makes power from two gases', partId: 'gas-in' },
    { text: 'the only things that come out are clean water', partId: 'water-out' },
    { text: 'a battery that never runs out', partId: 'box-body' },
    { text: 'the wall lets only the smallest parts through', partId: 'thin-wall' },
    { text: 'brings in the first gas', partId: 'gas-in' },
    { text: 'brings in air', partId: 'air-in' },
    { text: 'send the power out through a power wire', partId: 'power-wire' },
    { text: 'no fire, no turning parts, no sound' },
    { text: 'feed it gas, and it makes power and water' },
  ],
  color: '#7FFFD4',
}