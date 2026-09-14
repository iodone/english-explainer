import type { ThingData } from '../types'

export const spaceFood: ThingData = {
  id: 'space-food',
  slug: 'space-food',
  simpleName: 'The Space Food Box',
  realName: 'Space Food System',
  category: 'space',
  funFacts: [
    'The first space food came in a soft tube you push — space travelers did not think it was very good.',
    'A bit floating in space can fly into an eye or a machine, so space food must never break into small bits.',
    'Some space food is dried so much that it has almost no weight — you add water and it comes back to life.',
  ],
  parts: [
    { id: 'sealed-food', label: 'sealed food', realName: 'Retort pouch meals', position: [0, 0.06, 0], finish: 'hull' },
    { id: 'water-port', label: 'water hole', realName: 'Water injection port', position: [-0.30, 0.10, 0], finish: 'cold' },
    { id: 'heat-box', label: 'heat box', realName: 'Food warmer', position: [0, -0.14, 0], finish: 'warning' },
    { id: 'small-screen', label: 'small screen', realName: 'Selection display', position: [0.24, 0.16, 0], finish: 'cold' },
    { id: 'crumb-fan', label: 'crumb fan', realName: 'Crumb vacuum', position: [-0.14, 0.20, 0], finish: 'cold' },
    { id: 'trash-box', label: 'bad-things box', realName: 'Waste compartment', position: [0.18, -0.28, 0], finish: 'hull' },
    { id: 'food-shelf', label: 'food board', realName: 'Storage rack', position: [0, 0.10, 0], finish: 'titanium' },
  ],
  article: [
    {
      sentences: [
        [
          'This box keeps ',
          { text: 'food', dict: 'food' },
          ' safe for space travelers, far from any kitchen.',
        ],
        ['Food that is not sealed will float away — so every bag is shut in a small bag.'],
        ['To eat, you push water into the bag through a tiny hole, and the dry food comes back to life.'],
      ],
    },
    {
      sentences: [
        [
          'Rows of ',
          { text: 'sealed food', part: 'sealed-food' },
          ' bags sit on a flat board, each one holding a full bag of food.',
        ],
        [
          'A ',
          { text: 'water hole', part: 'water-port' },
          ' on the side lets you push water into a bag without opening it.',
        ],
        [
          'The ',
          { text: 'heat box', part: 'heat-box' },
          ' warms the food up fast — cold food in space is no fun.',
        ],
        [
          'A ',
          { text: 'small screen', part: 'small-screen' },
          ' on the front shows what food is ready.',
        ],
      ],
    },
    {
      sentences: [
        [
          'Next to the screen, a ',
          { text: 'crumb fan', part: 'crumb-fan' },
          ' takes in any bits that break off — bits in space can hurt people and machines.',
        ],
        ['When you are done, all things you do not need go into the ', { text: 'bad-things box', part: 'trash-box' }, '.'],
        [
          'The ',
          { text: 'food board', part: 'food-shelf' },
          ' holds everything in place so nothing floats around.',
        ],
        ['Eating in space is hard: food floats, water makes balls, and bits can break machines.'],
      ],
    },
    {
      sentences: [
        ['The first space travelers did not like space food much — it came in tubes and was like paste.'],
        ['Today, space food can be quite good: bread, fish, even dried food.'],
        ['But every bite must be ', { text: 'sealed', dict: 'seal' }, ' — in space, food that is not shut can hurt people and machines.'],
      ],
    },
  ],
  flow: [
    { partIds: ['sealed-food'], sentenceRef: 3, caption: 'Rows of sealed food bags sit on a flat board, each holding a full bag of food.' },
    { partIds: ['water-port'], sentenceRef: 4, caption: 'A water hole lets you push water into a bag without opening it.' },
    { partIds: ['heat-box'], sentenceRef: 5, caption: 'The heat box warms the food up fast.' },
    { partIds: ['small-screen'], sentenceRef: 6, caption: 'A small screen shows what food is ready.' },
    { partIds: ['trash-box'], sentenceRef: 8, caption: 'All things you do not need go into the bad-things box.' },
  ],
  keyExpressions: [
    { text: 'every bag is shut in a small bag', partId: 'sealed-food' },
    { text: 'push water into the bag through a tiny hole', partId: 'water-port' },
    { text: 'warms the food up fast', partId: 'heat-box' },
    { text: 'shows what food is ready', partId: 'small-screen' },
    { text: 'takes in any bits that break off', partId: 'crumb-fan' },
    { text: 'all things you do not need go into the bad-things box', partId: 'trash-box' },
    { text: 'the food board holds everything in place', partId: 'food-shelf' },
    { text: 'food floats, water makes balls, and bits can break machines' },
    { text: 'food that is not shut can hurt people and machines' },
  ],
  color: '#C8A2C8',
}