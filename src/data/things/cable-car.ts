import type { ThingData } from '../types'

export const cableCar: ThingData = {
  id: 'cable-car',
  slug: 'cable-car',
  simpleName: 'The Sky Car',
  realName: 'Cable Car',
  category: 'transport',
  funFacts: [
    'The longest sky-car lines run for hours over high ice and rock, with no road under them at all — the only way up is the line itself.',
    'Some big cabins can carry a whole car across a river, hanging from the same kind of wire as this little one.',
    'The very first sky cars, over a hundred years ago, were pulled by water wheels turning in the river below — no power house, just the river doing the work.',
  ],
  parts: [
    { id: 'sky-cabin', label: 'sky cabin', realName: 'Cabin', position: [-0.1, 0.06, 0], finish: 'cold' },
    { id: 'hanging-arm', label: 'hanging arm', realName: 'Hanger', position: [-0.1, 0.23, 0], finish: 'cold' },
    { id: 'carrier-wheel', label: 'carrier wheel', realName: 'Rope Wheel', position: [-0.1, 0.3, 0], finish: 'titanium' },
    { id: 'main-wire', label: 'main wire', realName: 'Haul Cable', position: [0, 0.3, 0], finish: 'hull' },
    { id: 'steel-tower', label: 'steel tower', realName: 'Pylon', position: [-0.25, -0.05, 0], finish: 'cold' },
    { id: 'drive-wheel', label: 'drive wheel', realName: 'Bullwheel', position: [0.86, 0.22, 0], finish: 'warning' },
    { id: 'power-house', label: 'power house', realName: 'Station', position: [0.88, -0.35, 0], finish: 'cold' },
  ],
  article: [
    {
      sentences: [
        [
          'High over the snow hills, a small ',
          { text: 'sky cabin', part: 'sky-cabin', dict: 'cabin' },
          ' rides through the morning air, hanging on a single line.',
        ],
        [
          'It hangs by one strong ',
          { text: 'hanging arm', part: 'hanging-arm' },
          ', a short steel bar with a wheel at its top.',
        ],
        [
          'Under the seats, the land drops away: trees look like green grass, and the river is a thin bright line far below.',
        ],
      ],
    },
    {
      sentences: [
        [
          'The wheel at the top is the ',
          { text: 'carrier wheel', part: 'carrier-wheel' },
          ', and it runs along a steel ',
          { text: 'main wire', part: 'main-wire', dict: 'wire' },
          ' drawn from hill top to hill top.',
        ],
        [
          'That wire is a heavy steel ',
          { text: 'cable', dict: 'cable' },
          ' as round as your arm, pulled from end to end.',
        ],
        [
          'Each ',
          { text: 'steel tower', part: 'steel-tower', dict: 'tower' },
          ' stands down on the land and holds the wire high with arms open wide.',
        ],
        [
          'Little wheels on the tower tops let the wire pass over without a sound, again and again, all day long.',
        ],
      ],
    },
    {
      sentences: [
        [
          'What moves it all is a great ',
          { text: 'drive wheel', part: 'drive-wheel' },
          ' at the top of the line: a turning ring of steel that pulls the wire along, hand over hand, forever.',
        ],
        [
          'It turns inside the ',
          { text: 'power house', part: 'power-house' },
          ', the little house at the top where the machines work and the line comes home.',
        ],
        [
          'Power from far away turns it round and round, never stopping, day and night.',
        ],
        [
          'When wind pushes across the line, the hanging room swings a little, like a leaf in the rain.',
        ],
      ],
    },
    {
      sentences: [
        [
          'You hold the ',
          { text: 'hand rail', dict: 'rail' },
          ' and look out the window at the wide white world below.',
        ],
        [
          'In four minutes you step out at the top station, higher than the trees, tired and happy and ready for the snow.',
        ],
        [
          'Behind you, the little room turns around and ',
          { text: 'grips', dict: 'grip' },
          ' the wire again, sliding back down to do it all once more.',
        ],
      ],
    },
  ],
  flow: [
    { partIds: ['sky-cabin'], sentenceRef: 0, caption: 'The cabin waits at the bottom; people walk in and take a seat.' },
    { partIds: ['hanging-arm'], sentenceRef: 1, caption: 'The hanging arm locks its little wheel onto the moving wire.' },
    { partIds: ['carrier-wheel', 'main-wire'], sentenceRef: 3, caption: 'The carrier wheel grips the main wire, and the wire pulls the cabin up the line.' },
    { partIds: ['steel-tower'], sentenceRef: 5, caption: 'Tower by tower, the wire passes over the little wheels, high above the land.' },
    { partIds: ['power-house', 'drive-wheel'], sentenceRef: 8, caption: 'At the top power house, the great drive wheel has pulled you all the way up.' },
  ],
  keyExpressions: [
    { text: 'a small room that rides through the morning air', partId: 'sky-cabin' },
    { text: 'a short steel bar with a wheel at its top', partId: 'hanging-arm' },
    { text: 'the wheel that runs along the wire', partId: 'carrier-wheel' },
    { text: 'a heavy steel cable pulled from end to end', partId: 'main-wire' },
    { text: 'holds the wire high with arms open wide', partId: 'steel-tower' },
    { text: 'a turning ring that pulls the wire along, hand over hand', partId: 'drive-wheel' },
    { text: 'the little house where the machines work', partId: 'power-house' },
    { text: 'swings a little, like a leaf in the rain', partId: 'sky-cabin' },
    { text: 'the little room turns around and slides back down', partId: 'hanging-arm' },
  ],
  color: '#3D5A80',
}
