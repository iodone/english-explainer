import type { ThingData } from '../types'

export const powerPlant: ThingData = {
  id: 'power-plant',
  slug: 'power-plant',
  simpleName: 'The Power Place',
  realName: 'Power plant',
  category: 'power',
  funFacts: [
    'A power place makes power for many houses and buildings.',
    'The first power places were made about 150 years ago.',
    'Some power places use fire, some use water, and some use things inside the ground.',
  ],
  parts: [
    { id: 'building', label: 'building', realName: 'Turbine hall', position: [0, 0, 0], finish: 'hull' },
    { id: 'fire-box', label: 'fire box', realName: 'Boiler', position: [0, 0, -0.06], finish: 'warning' },
    { id: 'turn-part', label: 'turn part', realName: 'Turbine', position: [0, 0.04, 0.04], finish: 'titanium' },
    { id: 'make-power-part', label: 'make power part', realName: 'Generator', position: [0, 0.04, 0.10], finish: 'cold' },
    { id: 'big-spin', label: 'big spin', realName: 'Cooling tower', position: [0.12, 0, 0], finish: 'hull' },
    { id: 'power-line', label: 'power line', realName: 'Transmission line', position: [0, 0.14, 0], finish: 'cold' },
    { id: 'smoke-pipe', label: 'smoke pipe', realName: 'Chimney', position: [-0.08, 0.10, -0.04], finish: 'titanium' },
  ],
  article: [
    {
      sentences: [
        [
          'This is a ',
          { text: 'power place', dict: 'power-plant' },
          '. It makes power for many houses and buildings.',
        ],
      ],
    },
    {
      sentences: [
        [
          'The ',
          { text: 'building', part: 'building' },
          ' is where all the big machines are.',
        ],
        [
          'Inside, the ',
          { text: 'fire box', part: 'fire-box' },
          ' burns things to make water very, very hot.',
        ],
      ],
    },
    {
      sentences: [
        ['The very hot water becomes like air and pushes the turn part very hard.'],
        [
          'The ',
          { text: 'turn part', part: 'turn-part' },
          ' goes round and round very fast.',
        ],
      ],
    },
    {
      sentences: [
        [
          'The turn part is joined to the ',
          { text: 'make power part', part: 'make-power-part' },
          '.',
        ],
        ['When the turn part goes round, the make power part makes power.'],
      ],
    },
    {
      sentences: [
        [
          'The ',
          { text: 'big spin', part: 'big-spin' },
          ' makes the water cool again after it has been used.',
        ],
        [
          'The power goes out through the ',
          { text: 'power line', part: 'power-line' },
          ' on top.',
        ],
      ],
    },
    {
      sentences: [
        [
          'The ',
          { text: 'smoke pipe', part: 'smoke-pipe' },
          ' lets the smoke go up into the air.',
        ],
        ['Power places are very important because they make the power we use every day.'],
      ],
    },
  ],
  flow: [
    { partIds: ['building', 'fire-box'], sentenceRef: 1, caption: 'Building holds machines; fire box burns to heat water.' },
    { partIds: ['turn-part'], sentenceRef: 4, caption: 'Hot water pushes the turn part round and round.' },
    { partIds: ['make-power-part'], sentenceRef: 6, caption: 'Turn part spins make power part to make power.' },
    { partIds: ['big-spin', 'power-line'], sentenceRef: 8, caption: 'Big spin cools water; power line sends power out.' },
    { partIds: ['smoke-pipe'], sentenceRef: 10, caption: 'Smoke pipe lets smoke go up.' },
  ],
  keyExpressions: [
    { text: 'power place', partId: 'building' },
    { text: 'makes power for many houses and buildings', partId: 'make-power-part' },
    { text: 'burns things to make water very hot', partId: 'fire-box' },
    { text: 'goes round and round very fast', partId: 'turn-part' },
    { text: 'makes power', partId: 'make-power-part' },
    { text: 'makes the water cool again', partId: 'big-spin' },
    { text: 'lets the smoke go up into the air', partId: 'smoke-pipe' },
  ],
  color: '#D3D3D3',
}