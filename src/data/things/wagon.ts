import type { ThingData } from '../types'

export const wagon: ThingData = {
  id: 'wagon',
  slug: 'wagon',
  simpleName: 'The Pull Cart',
  realName: 'Wagon',
  category: 'transport',
  funFacts: [
    'Wagons were one of the first things people used to carry heavy loads — before cars, before trains, before anything.',
    'Some wagons are still used today on farms — they are simple, strong, and never break down.',
    'The first wagons had no seats — people sat on the floor or on the load itself.',
  ],
  parts: [
    { id: 'cart-body', label: 'cart body', realName: 'Cargo bed', position: [0, 0.04, 0], finish: 'hull' },
    { id: 'wheels', label: 'wheels', realName: 'Wheels', position: [0, -0.14, 0], finish: 'cold' },
    { id: 'pull-bar', label: 'pull bar', realName: 'Tongue', position: [0.34, -0.04, 0], finish: 'hull' },
    { id: 'handle', label: 'handle', realName: 'Handle', position: [0.44, 0.02, 0], finish: 'titanium' },
    { id: 'floor', label: 'floor', realName: 'Floor board', position: [0, -0.04, 0], finish: 'cold' },
    { id: 'side-walls', label: 'side walls', realName: 'Side panels', position: [0, 0.10, 0], finish: 'hull' },
    { id: 'load-space', label: 'load space', realName: 'Cargo area', position: [0, 0.06, 0], finish: 'cold' },
  ],
  article: [
    {
      sentences: [
        [
          'This simple ',
          { text: 'wagon', dict: 'wagon' },
          ' carries things from one place to another — you pull it with your hands.',
        ],
        ['No engine, no power — just four wheels and a strong body.'],
        ['Put your things in the back, take the handle, and pull.'],
      ],
    },
    {
      sentences: [
        [
          'The ',
          { text: 'cart body', part: 'cart-body' },
          ' is a box with no top — it holds everything you want to carry.',
        ],
        [
          'Four ',
          { text: 'wheels', part: 'wheels' },
          ' at the bottom let it roll over the ground.',
        ],
        [
          'A long ',
          { text: 'pull bar', part: 'pull-bar' },
          ' at the front joins to the ',
          { text: 'handle', part: 'handle' },
          ' so you can pull it.',
        ],
        [
          'The ',
          { text: 'floor', part: 'floor' },
          ' at the bottom is made of wood — strong enough to hold a heavy load.',
        ],
      ],
    },
    {
      sentences: [
        [
          'Tall ',
          { text: 'side walls', part: 'side-walls' },
          ' keep things from falling out when the wagon moves.',
        ],
        [
          'The ',
          { text: 'load space', part: 'load-space' },
          ' in the middle is where you put everything — the bigger it is, the more you can carry.',
        ],
        ['When you are done, just tip the wagon over and everything falls out.'],
        ['It is the oldest way to carry things — and still one of the best.'],
      ],
    },
    {
      sentences: [
        ['People have used wagons for a very long time — the first ones were pulled by animals.'],
        ['Today, some wagons are pulled by cars or trucks — the idea is the same.'],
        ['On farms, wagons carry food, wood, and all kinds of things from the field to the house.'],
      ],
    },
  ],
  flow: [
    { partIds: ['cart-body'], sentenceRef: 3, caption: 'The cart body is a box with no top that holds everything.' },
    { partIds: ['wheels'], sentenceRef: 4, caption: 'Four wheels at the bottom let it roll over the ground.' },
    { partIds: ['pull-bar', 'handle'], sentenceRef: 5, caption: 'The pull bar joins to the handle so you can pull it.' },
    { partIds: ['side-walls'], sentenceRef: 7, caption: 'Tall side walls keep things from falling out.' },
    { partIds: ['load-space'], sentenceRef: 8, caption: 'The load space is where you put everything.' },
  ],
  keyExpressions: [
    { text: 'carries things from one place to another', partId: 'cart-body' },
    { text: 'you pull it with your hands', partId: 'handle' },
    { text: 'no engine, no power — just four wheels', partId: 'wheels' },
    { text: 'a box with no top — it holds everything', partId: 'cart-body' },
    { text: 'let it roll over the ground', partId: 'wheels' },
    { text: 'joins to the handle so you can pull it', partId: 'pull-bar' },
    { text: 'strong enough to hold a heavy load', partId: 'floor' },
    { text: 'keep things from falling out', partId: 'side-walls' },
    { text: 'the oldest way to carry things' },
  ],
  color: '#DEB887',
}