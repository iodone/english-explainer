import type { ThingData } from '../types'

export const saturn: ThingData = {
  id: 'saturn',
  slug: 'saturn',
  simpleName: 'The Ringed World',
  realName: 'Saturn',
  category: 'space',
  funFacts: [
    'The six-sided storm on top was first seen in pictures sent back by a flying machine that passed the world in 1980 — and it is still turning today.',
    'On the big moon it rains and rivers run — but not with water: the rain is the same gas people burn at home, made cold enough to fall as drops.',
    'Each year a little of the ring ice falls down onto the world below: the rings are slowly raining themselves away, and one day, far from now, they may be gone.',
  ],
  parts: [
    { id: 'round-body', label: 'round body', realName: 'Planet Globe', position: [0.35, 0.25, 0.35], finish: 'hull' },
    { id: 'wind-lines', label: 'wind lines', realName: 'Cloud Bands', position: [0.53, 0.14, 0], finish: 'cold' },
    { id: 'ring-plate', label: 'ring plate', realName: 'Ring System', position: [0.95, 0, 0.45], finish: 'titanium' },
    { id: 'dark-street', label: 'dark street', realName: 'Cassini Division', position: [-0.7, 0, 0.62], finish: 'cold' },
    { id: 'top-storm', label: 'top storm', realName: 'North Polar Hexagon', position: [0, 0.53, 0], finish: 'warning' },
    { id: 'big-moon', label: 'big moon', realName: 'Titan', position: [1.05, 0.75, -0.35], finish: 'cold' },
    { id: 'moon-family', label: 'moon family', realName: 'Minor Moons', position: [-1.15, -0.5, 0.4], finish: 'cold' },
  ],
  article: [
    {
      sentences: [
        [
          'The ringed world is a great ball of gas turning far out in the cold of space: the second biggest of the worlds that go around our sun, and the only one with rings like these.',
        ],
        [
          'Around its middle runs the ',
          { text: 'ring plate', part: 'ring-plate' },
          ': a wide plate of ice and rock so big that 20 of our worlds, side by side, would fit across it — and yet more than 1,000 times wider than it is thick.',
        ],
        [
          'The world is called ',
          { text: 'Saturn', dict: 'saturn' },
          ', after an old god of growing things; seen from our world with just your eyes, it looks like nothing more than a pale yellow star.',
        ],
      ],
    },
    {
      sentences: [
        [
          'The ',
          { text: 'round body', part: 'round-body' },
          ' is a ball of gas, almost 10 of our worlds across, made of the same light stuff as the sun — so light that the whole world, dropped into a big enough pool of water, would float.',
        ],
        [
          'Around the ball the sky runs in ',
          { text: 'wind lines', part: 'wind-lines' },
          ': pale and dark lines of cloud, moving with the turning of the world, pushed by winds that blow past 1,000 miles an hour.',
        ],
        [
          'On the very top of the world turns a strange ',
          { text: 'top storm', part: 'top-storm' },
          ': a storm with six sides, each side wider than our whole world, turning round and round like a great sky wheel.',
        ],
        [
          'Days here are short: the world turns once around in less than 11 hours, so one of its days is less than half of one of ours.',
        ],
      ],
    },
    {
      sentences: [
        [
          'The rings are made of more bits of ice than anyone could ever count — some no bigger than a bit of dust, some as big as a house — each one turning around the world on its own little road.',
        ],
        [
          'Some sky watchers think the rings are young: made, maybe, when a moon came too close and broke apart, and still changing today, bit by bit.',
        ],
        [
          'Between the two widest rings runs the ',
          { text: 'dark street', part: 'dark-street' },
          ': a dark road of empty space almost 3,000 miles wide, found by the sky watcher who first saw it — like a dark street between two bright cities.',
        ],
        [
          'Around the world turns a whole ',
          { text: 'moon family', part: 'moon-family' },
          ' of moons — more than 200 now counted — and among them one ',
          { text: 'big moon', part: 'big-moon' },
          ': a world bigger than our own moon, with thick air, rain, rivers, and seas.',
        ],
      ],
    },
    {
      sentences: [
        [
          'A year here is long: the ringed world goes around the sun once in about 30 of our years, on a slow, cold road far out in the dark.',
        ],
        [
          'The world leans over as it goes, more than ours does, and the rings lean with it — so, seen from our world, they lie wide open some years and almost close in others.',
        ],
        [
          'It is a world with no ground to stand on — nothing but wind and cloud all the way down — and yet it may be the most beautiful thing in our sky: a quiet world turning in a ring of its own making.',
        ],
      ],
    },
  ],
  keyExpressions: [
    { text: 'the second biggest of the worlds that go around our sun' },
    { text: 'one of its days is less than half of one of ours' },
    { text: '20 of our worlds, side by side, would fit across', partId: 'ring-plate' },
    { text: 'so light that the whole world would float', partId: 'round-body' },
    { text: 'winds that blow past 1,000 miles an hour', partId: 'wind-lines' },
    { text: 'a storm with six sides, each side wider than our whole world', partId: 'top-storm' },
    { text: 'a dark road of empty space almost 3,000 miles wide', partId: 'dark-street' },
    { text: 'more than 200 now counted', partId: 'moon-family' },
    { text: 'thick air, rain, rivers, and seas', partId: 'big-moon' },
  ],
  flow: [
    { partIds: ['ring-plate'], sentenceRef: 1, caption: 'Around its middle, the ring plate — wide enough that 20 of our worlds would fit across, yet more than 1,000 times wider than thick.' },
    { partIds: ['round-body'], sentenceRef: 3, caption: 'The round body — a ball of gas almost 10 worlds across, so light it would float in water.' },
    { partIds: ['wind-lines'], sentenceRef: 4, caption: 'Around the ball, the wind lines — lines of cloud moving on winds that blow past 1,000 miles an hour.' },
    { partIds: ['top-storm'], sentenceRef: 5, caption: 'On the very top, the top storm — six-sided, each side wider than our whole world.' },
    { partIds: ['dark-street'], sentenceRef: 9, caption: 'Between the widest rings, the dark street — a road of empty space almost 3,000 miles wide.' },
  ],
  color: '#CA8A04',
}
