import type { ThingData } from '../types'

export const subway: ThingData = {
  id: 'subway',
  slug: 'subway',
  simpleName: 'The Train Under the City',
  realName: 'Subway',
  category: 'transport',
  funFacts: [
    'The deepest station in the world lies more than 100 meters under the ground — riding its moving steps from the street to the train takes almost five minutes.',
    'In the busiest city on earth, a train arrives at the busy stations once every two minutes, and at the busiest times there are people whose whole job is to push riders inside, so the doors can close.',
    'The first road under a river was cut by hand, more than 150 years ago, by people working in the dark with small burning lights — and the tunnel they made still carries trains today.',
  ],
  parts: [
    { id: 'deep-hole', label: 'deep hole', realName: 'Tunnel', position: [-1.15, -0.25, 0], finish: 'titanium' },
    { id: 'long-train', label: 'long train', realName: 'Train', position: [0, -0.15, 0], finish: 'hull' },
    { id: 'steel-rails', label: 'steel rails', realName: 'Tracks', position: [-0.60, -0.52, 0], finish: 'cold' },
    { id: 'side-doors', label: 'side doors', realName: 'Platform Doors', position: [0.03, -0.18, 0.14], finish: 'cold' },
    { id: 'moving-steps', label: 'moving steps', realName: 'Escalators & Stairs', position: [1.24, 0.10, 0], finish: 'cold' },
    { id: 'stone-sides', label: 'stone sides', realName: 'Tunnel Walls', position: [0.60, -0.70, 0], finish: 'cold' },
    { id: 'power-rail', label: 'power rail', realName: 'Third Rail', position: [-0.85, -0.44, 0.20], finish: 'warning' },
  ],
  article: [
    {
      sentences: [
        [
          'Under the streets of a big city, far below the feet of the people walking above, runs the ',
          { text: 'subway', dict: 'subway' },
          ' — a train that never sees the sky.',
        ],
        [
          'It rides through a ',
          { text: 'deep hole', part: 'deep-hole' },
          ' — a long ',
          { text: 'tunnel', dict: 'tunnel' },
          ' cut through rock and dirt — where no car and no rain can ever follow.',
        ],
        [
          'The first one was built more than 160 years ago in ',
          { text: 'London', dict: 'london' },
          ', and today almost every big city on earth has one under it.',
        ],
      ],
    },
    {
      sentences: [
        [
          'The ',
          { text: 'long train', part: 'long-train' },
          ' is made of many cars joined end to end, carrying 1,000 people at once — as many as a whole street full of cars.',
        ],
        [
          'It runs on two ',
          { text: 'steel rails', part: 'steel-rails' },
          ' — long metal roads laid wheel to wheel; each wheel holds its ',
          { text: 'rail', dict: 'rail' },
          ' from both sides, so the train can never leave the road and never waits for a red light.',
        ],
        [
          'At every stop the ',
          { text: 'side doors', part: 'side-doors' },
          ' open together along the whole train, people step out and people step in, and twenty seconds later the train is moving again.',
        ],
        [
          'To get down from the street, people ride the ',
          { text: 'moving steps', part: 'moving-steps' },
          ' — stairs that carry people down on their own — or a small moving room like an ',
          { text: 'elevator', dict: 'elevator' },
          ', for people who cannot use stairs.',
        ],
      ],
    },
    {
      sentences: [
        [
          'The ',
          { text: 'stone sides', part: 'stone-sides' },
          ' are the walls of the deep hole — steel and stone plates holding back the earth and the water, so the road through the ground stays open year after year.',
        ],
        [
          'One line beside the road is not for wheels at all: the ',
          { text: 'power rail', part: 'power-rail' },
          ' feeds the train with power, so much of it that a person must never, ever touch it.',
        ],
        [
          'Why build under the ground? Because a city runs out of room up top: the streets are full, and under the ground there is always more space — new roads can go below buildings, below rivers, below everything people have built.',
        ],
        [
          'And down there no rain falls, no snow blocks the way, and no car ever gets in front — so the train can run all day, every day, at any hour of any year.',
        ],
      ],
    },
    {
      sentences: [
        [
          'A city train can carry more people in one hour than a road full of cars carries in three, and it does it again every few minutes, from morning to night.',
        ],
        [
          'The deepest stations sit more than 100 meters under the ground; the moving steps ride so long that a person could read a whole page on the way up.',
        ],
        [
          'From inside you cannot see where you are — only the dark walls going past — yet the train always knows its way, and the city above knows just where you will come up.',
        ],
      ],
    },
  ],
  keyExpressions: [
    { text: 'a train that never sees the sky' },
    { text: 'holding back the earth and the water', partId: 'stone-sides' },
    { text: 'a long road cut through rock and dirt', partId: 'deep-hole' },
    { text: 'many cars joined end to end, carrying 1,000 people at once', partId: 'long-train' },
    { text: 'long metal roads laid wheel to wheel', partId: 'steel-rails' },
    { text: 'open together along the whole train', partId: 'side-doors' },
    { text: 'stairs that carry people down on their own', partId: 'moving-steps' },
    { text: 'so much power that a person must never touch it', partId: 'power-rail' },
    { text: 'under the ground there is always more space' },
  ],
  flow: [
    { partIds: ['deep-hole'], sentenceRef: 1, caption: 'First the deep hole — a long tunnel cut through rock and dirt, where no car and no rain can ever follow.' },
    { partIds: ['long-train'], sentenceRef: 3, caption: 'Inside runs the long train — many cars joined end to end, carrying 1,000 people at once.' },
    { partIds: ['side-doors'], sentenceRef: 5, caption: 'At every stop the side doors open together along the whole train, and twenty seconds later it is moving again.' },
    { partIds: ['stone-sides'], sentenceRef: 7, caption: 'The stone sides hold back the earth and the water, so the road through the ground stays open year after year.' },
    { partIds: ['power-rail'], sentenceRef: 8, caption: 'Beside the road lies the power rail — it feeds the train with power, so much that a person must never, ever touch it.' },
  ],
  color: '#0E7490',
}
