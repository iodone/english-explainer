import type { ThingData } from '../types'

export const wavePower: ThingData = {
  id: 'wave-power',
  slug: 'wave-power',
  simpleName: 'The Sea Swing',
  realName: 'Wave Power Plant',
  category: 'power',
  funFacts: [
    'Waves are really second-hand sun power: the sun warms the air, the wind pushes the sea, and the sea pushes the machine — so a light burning at night by the sea is, in the end, light from the sun.',
    'Some sea machines do not rock at all: the waves push air up and down inside them like a slow heart, and it is the moving air that turns the wheels.',
    'In the cold far north, a machine like this has run by the sea for more than 20 years, lighting homes with the waves that break on the edge of the land.',
  ],
  parts: [
    { id: 'sea-rider', label: 'sea rider', realName: 'Rocking Float', position: [-0.35, 0.36, 0], finish: 'hull' },
    { id: 'turn-pin', label: 'turn pin', realName: 'Hinge', position: [0.12, 0.42, 0], finish: 'titanium' },
    { id: 'power-maker', label: 'power maker', realName: 'Generator', position: [0.30, 0.36, 0], finish: 'warning' },
    { id: 'long-arm', label: 'long arm', realName: 'Frame to Seabed', position: [0.30, -0.15, 0], finish: 'cold' },
    { id: 'land-line', label: 'land line', realName: 'Seabed Cable', position: [0.95, -0.55, 0], finish: 'cold' },
    { id: 'bed-plate', label: 'bed plate', realName: 'Seabed Anchor', position: [0.50, -0.68, 0], finish: 'cold' },
    { id: 'wave-walls', label: 'wave walls', realName: 'Shaped Float Sides', position: [-0.55, 0.36, 0], finish: 'cold' },
  ],
  article: [
    {
      sentences: [
        [
          'The sea never stops moving: waves rise and fall, all day and all night — and the ',
          { text: 'sea rider', part: 'sea-rider' },
          ' is a machine built to catch that moving and turn it into power.',
        ],
        [
          'It sits in the water like a strange ',
          { text: 'float', dict: 'float' },
          ' lying on its side, one end round and one end flat, so every wave that comes pushes it and makes it rock.',
        ],
        [
          'There is more power in the sea’s waves than in almost anything else on earth — enough, if it could all be caught, to light every city near the water.',
        ],
      ],
    },
    {
      sentences: [
        [
          'Each passing wave lifts the round end and lets it fall — rise, fall, rise, fall, ',
          { text: 'over and over', dict: 'over and over' },
          ', all day and all night, and the machine never gets tired.',
        ],
        [
          'The rider does not swing free: through its middle runs a strong round bar, the ',
          { text: 'turn pin', part: 'turn-pin' },
          ', fixed to a great ',
          { text: 'long arm', part: 'long-arm' },
          ' reaching down under the sea, so every rock of the rider becomes a turn of the pin.',
        ],
        [
          'The turning pin turns the wheels of the ',
          { text: 'power maker', part: 'power-maker' },
          ' — the same kind of spinning machine that makes power inside a ',
          { text: 'dam', dict: 'dam' },
          ' or a ',
          { text: 'generator', dict: 'generator' },
          '.',
        ],
        [
          'From there the power runs away under the water through the ',
          { text: 'land line', part: 'land-line' },
          ' — a long, heavy rope of copper — to houses on the land, where it turns on lights, warms rooms, and brings the sea’s power into every-day life.',
        ],
      ],
    },
    {
      sentences: [
        [
          'Everything is held down by the ',
          { text: 'bed plate', part: 'bed-plate' },
          ' — a great, heavy shape sitting on the sea floor, deep enough that storms above cannot pull the machine away from its place.',
        ],
        [
          'The ',
          { text: 'wave walls', part: 'wave-walls' },
          ' are shaped so a wave cannot slip past without pushing — the shape catches the sea’s push the way an open hand catches a ball.',
        ],
        [
          'The sea is a hard place for machines: it eats metal little by little, it fills every corner with sand, and its storms pull with the strength of 1,000 horses — so every part must be strong, simple, and easy to fix.',
        ],
        [
          'When a part breaks, a ship must sail out, lift the machine up, and put things right — a job that takes more days and more money than the part itself, which is why sea power is still young.',
        ],
      ],
    },
    {
      sentences: [
        [
          'People have tried to catch wave power for more than 200 years — the idea is old, but only in the last few years have machines like this started to make real power for real houses.',
        ],
        [
          'One working machine can power a few hundred houses, and the newest ones float whole, riding the very waves they turn into light.',
        ],
        [
          'The waves have rolled for longer than there have been people to watch them; they will roll on after us too — free power, waiting for better machines, and better hands.',
        ],
      ],
    },
  ],
  keyExpressions: [
    { text: 'built to catch the sea’s moving and turn it into power' },
    { text: 'rise, fall, over and over, and never gets tired', partId: 'sea-rider' },
    { text: 'a strong round bar fixed through the middle', partId: 'turn-pin' },
    { text: 'the same kind of spinning machine as inside a dam', partId: 'power-maker' },
    { text: 'a long, heavy rope of copper under the sea', partId: 'land-line' },
    { text: 'a great, heavy shape on the sea floor', partId: 'bed-plate' },
    { text: 'shaped so a wave cannot slip past without pushing', partId: 'wave-walls' },
    { text: 'reaching down under the sea, joining rider to the sea bed', partId: 'long-arm' },
    { text: 'free power, waiting for better machines and better hands' },
  ],
  flow: [
    { partIds: ['sea-rider'], sentenceRef: 0, caption: 'The sea rider catches the moving of the waves — rise, fall, over and over, all day and all night, and it never gets tired.' },
    { partIds: ['turn-pin'], sentenceRef: 4, caption: 'Through its middle runs the turn pin, fixed to the long arm — every rock of the rider becomes a turn of the pin.' },
    { partIds: ['power-maker'], sentenceRef: 5, caption: 'The turning pin turns the wheels of the power maker — the same spinning machine as inside a dam or a generator.' },
    { partIds: ['land-line'], sentenceRef: 6, caption: 'The power runs away under the sea through the land line — a long, heavy rope of copper — to houses on the land.' },
    { partIds: ['bed-plate'], sentenceRef: 7, caption: 'The bed plate sits deep on the sea floor, heavy enough that storms above cannot pull the machine away from its place.' },
  ],
  color: '#0D9488',
}
