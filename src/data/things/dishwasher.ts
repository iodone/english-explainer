import type { ThingData } from '../types'

export const dishwasher: ThingData = {
  id: 'dishwasher',
  slug: 'dishwasher',
  simpleName: 'The Dish Washer',
  realName: 'Dishwasher',
  category: 'home',
  funFacts: [
    'The first dishwashers were made by a woman who was tired of washing dishes by hand — she built one in her house.',
    'A dishwasher uses less water than washing by hand — it is better for the world.',
    'Some dishwashers are so quiet that you can talk right next to them and not hear a thing.',
  ],
  parts: [
    { id: 'box-body', label: 'box body', realName: 'Tub', position: [0, 0, 0], finish: 'hull' },
    { id: 'water-shooter', label: 'water shooter', realName: 'Spray arm', position: [0, -0.10, 0], finish: 'titanium' },
    { id: 'dish-rack', label: 'dish rack', realName: 'Rack', position: [0, 0.06, 0], finish: 'cold' },
    { id: 'door', label: 'door', realName: 'Door', position: [0, -0.20, 0.14], finish: 'cold' },
    { id: 'soap-box', label: 'soap box', realName: 'Detergent dispenser', position: [0.20, 0.10, 0.13], finish: 'warning' },
    { id: 'control-button', label: 'control button', realName: 'Control panel', position: [0, 0.18, 0.14], finish: 'titanium' },
    { id: 'drain-pipe', label: 'drain pipe', realName: 'Drain hose', position: [0, -0.24, -0.10], finish: 'cold' },
  ],
  article: [
    {
      sentences: [
        [
          'This kitchen box washes your ',
          { text: 'dishes', dict: 'dishwasher' },
          ' for you — no hands needed.',
        ],
        ['Put the dirty dishes inside, add soap, push the button, and walk away.'],
        ['Hot water and soap do all the work while you do something else.'],
      ],
    },
    {
      sentences: [
        [
          'The ',
          { text: 'box body', part: 'box-body' },
          ' is a big box that holds all the dishes inside.',
        ],
        [
          'At the bottom, a ',
          { text: 'water shooter', part: 'water-shooter' },
          ' spins around and shoots hot water at the dishes.',
        ],
        [
          'The ',
          { text: 'dish rack', part: 'dish-rack' },
          ' holds the dishes in place so they do not fall over.',
        ],
        [
          'A big ',
          { text: 'door', part: 'door' },
          ' at the front opens so you can put dishes in and take them out.',
        ],
      ],
    },
    {
      sentences: [
        [
          'A small ',
          { text: 'soap box', part: 'soap-box' },
          ' on the door holds the soap — it opens at the right time.',
        ],
        [
          'The ',
          { text: 'control button', part: 'control-button' },
          ' on the front lets you choose how long to wash.',
        ],
        [
          'At the back, a ',
          { text: 'drain pipe', part: 'drain-pipe' },
          ' takes the dirty water away.',
        ],
        ['When the washing is done, the door opens a little to let the dishes dry.'],
      ],
    },
    {
      sentences: [
        ['The first dishwashers were big and could only wash a few things at a time.'],
        ['Today, they can wash and dry a whole kitchen full of dishes in one go.'],
        ['Some new ones can even tell how dirty the dishes are and wash them just right.'],
      ],
    },
  ],
  flow: [
    { partIds: ['box-body'], sentenceRef: 3, caption: 'The box body is a big box that holds all the dishes.' },
    { partIds: ['water-shooter'], sentenceRef: 4, caption: 'The water shooter spins and shoots hot water at the dishes.' },
    { partIds: ['dish-rack'], sentenceRef: 5, caption: 'The dish rack holds the dishes in place.' },
    { partIds: ['door'], sentenceRef: 6, caption: 'A big door opens so you can put dishes in and take them out.' },
    { partIds: ['drain-pipe'], sentenceRef: 9, caption: 'The drain pipe takes the dirty water away.' },
  ],
  keyExpressions: [
    { text: 'washes your dishes for you', partId: 'box-body' },
    { text: 'no hands needed', partId: 'box-body' },
    { text: 'spins around and shoots hot water', partId: 'water-shooter' },
    { text: 'holds the dishes in place', partId: 'dish-rack' },
    { text: 'opens so you can put dishes in', partId: 'door' },
    { text: 'holds the soap — it opens at the right time', partId: 'soap-box' },
    { text: 'lets you choose how long to wash', partId: 'control-button' },
    { text: 'takes the dirty water away', partId: 'drain-pipe' },
    { text: 'hot water and soap do all the work' },
  ],
  color: '#AFEEEE',
}