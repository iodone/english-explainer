import type { ThingData } from '../types'

export const spaceShuttle: ThingData = {
  id: 'space-shuttle',
  slug: 'space-shuttle',
  simpleName: 'The Space Plane',
  realName: 'Space Shuttle',
  category: 'space',
  funFacts: [
    'In its eight and a half minutes of climbing, the machine burns fuel faster than a family car would use in 700 years of driving.',
    'The fire sticks were fished out of the sea after every ride and used again — some of their parts went up more than 40 times.',
    'The grab arm was a gift from another country, and it worked in space for 30 years — catching, holding, and moving things too big for human hands, every time it was asked.',
  ],
  parts: [
    { id: 'white-body', label: 'white body', realName: 'Orbiter', position: [0.08, 0.20, 0.34], finish: 'hull' },
    { id: 'fire-sticks', label: 'fire sticks', realName: 'Solid Boosters', position: [0.05, -0.10, 0.24], finish: 'warning' },
    { id: 'food-tank', label: 'food tank', realName: 'External Tank', position: [0, 0.35, 0], finish: 'titanium' },
    { id: 'both-wings', label: 'both wings', realName: 'Delta Wings', position: [-0.28, 0.11, 0.48], finish: 'cold' },
    { id: 'heat-shield', label: 'heat shield', realName: 'Heat Shield Tiles', position: [0.10, 0.04, 0.32], finish: 'cold' },
    { id: 'grab-arm', label: 'grab arm', realName: 'Robot Arm', position: [0.38, 0.40, 0.46], finish: 'cold' },
    { id: 'land-wheels', label: 'land wheels', realName: 'Landing Gear', position: [0.05, 0.02, 0.32], finish: 'cold' },
  ],
  article: [
    {
      sentences: [
        [
          'The ',
          { text: 'white body', part: 'white-body' },
          ' is the heart of the ',
          { text: 'shuttle', dict: 'shuttle' },
          ' — the only part built to fly to space and come back whole, riding up like a ',
          { text: 'rocket', dict: 'rocket' },
          ' and coming home to land on a long road, so it can fly again.',
        ],
        [
          'Over 30 years it made more than 100 rides to space and back — carrying people, machines, and whole pieces of a space station up with it.',
        ],
        [
          'But a ride to space needs more than one machine: the white body alone is not strong enough, so it travels held between two great fire sticks and one tall food tank, all burning and pushing as one.',
        ],
      ],
    },
    {
      sentences: [
        [
          'The two ',
          { text: 'fire sticks', part: 'fire-sticks' },
          ' stand one on each side and burn for the first two minutes of the ride; when they are empty they fall away into the sea, to be picked up and used again.',
        ],
        [
          'The great ',
          { text: 'food tank', part: 'food-tank' },
          ' rides in the middle as the biggest part of all, feeding fuel to three engines at the tail; when it runs dry it lets go too, and the white body flies on alone.',
        ],
        [
          'The three engines burn fuel so fast that in eight and a half minutes they push the whole machine from a standing start to more than 17,000 miles an hour — fast enough to keep falling around the earth without ever coming down.',
        ],
        [
          'Then the tank is gone and the fire sticks are gone, and the machine is left alone in space, going around the earth once every ',
          { text: 'hour', dict: 'hour' },
          ' and a half, with its people and everything it carried.',
        ],
      ],
    },
    {
      sentences: [
        [
          'For the ride home the ',
          { text: 'both wings', part: 'both-wings' },
          ' do at last what wings do — but there are no engines left to push, so the machine falls out of the sky the whole way down: a long, quiet fall that ends on a road, with no way to go around and try again.',
        ],
        [
          'Coming down, the machine hits the air so hard that its under side glows with heat — the ',
          { text: 'heat shield', part: 'heat-shield' },
          ', a skin of more than 20,000 little covers, stands between the fire and the people, and they feel nothing but a warm room.',
        ],
        [
          'Up there, the ',
          { text: 'grab arm', part: 'grab-arm' },
          ' — a long ',
          { text: 'robot', dict: 'robot' },
          ' arm with a hand at the end — moves what people cannot: it can hold a whole person, catch a space thing flying by, or swing a great load from one place to another.',
        ],
        [
          'Its hand once caught a broken ',
          { text: 'telescope', dict: 'telescope' },
          ' high above the earth and held it still while people worked on it out in space — fixing the great eye in the sky for the whole world.',
        ],
      ],
    },
    {
      sentences: [
        [
          'Only near the end does the machine stop falling and fly: the ',
          { text: 'land wheels', part: 'land-wheels' },
          ' drop down from under the body, it touches the road going faster than 200 miles an hour, and a round ',
          { text: 'umbrella', dict: 'umbrella' },
          ' of cloth opens out behind to slow it down.',
        ],
        [
          'A few weeks of looking-over later, it could fly again — and the hardest-working one made 39 rides to space, more than any other machine that carries people has ever made.',
        ],
        [
          'The last ride came in 2011; today the last ones rest in great buildings where people can walk under their wings and look up close at a machine that went to space — while new ones are being built to carry people up again.',
        ],
      ],
    },
  ],
  keyExpressions: [
    { text: 'the only part built to fly to space and come back whole' },
    { text: 'riding up like a rocket, coming home to land on a road', partId: 'white-body' },
    { text: 'burn for two minutes, then fall away into the sea', partId: 'fire-sticks' },
    { text: 'the biggest part of all, feeding fuel to the engines', partId: 'food-tank' },
    { text: 'a long, quiet fall that ends on a road', partId: 'both-wings' },
    { text: 'a skin of more than 20,000 little covers', partId: 'heat-shield' },
    { text: 'a long robot arm that moves what people cannot', partId: 'grab-arm' },
    { text: 'drop down at the very end, touching the road faster than 200 miles an hour', partId: 'land-wheels' },
    { text: 'going around the earth once every hour and a half' },
  ],
  flow: [
    { partIds: ['white-body'], sentenceRef: 0, caption: 'First the white body — the heart of the shuttle, the only part built to fly to space and come back whole.' },
    { partIds: ['fire-sticks'], sentenceRef: 3, caption: 'The two fire sticks burn for the first two minutes, then fall away into the sea, to be picked up and used again.' },
    { partIds: ['food-tank'], sentenceRef: 4, caption: 'The great food tank rides in the middle, feeding fuel to three engines at the tail; when it runs dry it lets go too.' },
    { partIds: ['heat-shield'], sentenceRef: 8, caption: 'Coming down, the under side glows with heat — the heat shield, a skin of more than 20,000 little covers, stands between the fire and the people.' },
    { partIds: ['land-wheels'], sentenceRef: 11, caption: 'Only near the end do the land wheels drop down, touching the road faster than 200 miles an hour, with an umbrella of cloth behind to slow it.' },
  ],
  color: '#EA580C',
}
