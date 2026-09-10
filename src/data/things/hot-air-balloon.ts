import type { ThingData } from '../types'

export const hotAirBalloon: ThingData = {
  id: 'hot-air-balloon',
  slug: 'hot-air-balloon',
  simpleName: 'Hot Air Ball',
  realName: 'Hot Air Balloon',
  category: 'transport',
  funFacts: [
    'A big hot air ball can stand as tall as a church, yet once the air is let out it fits in the back of a truck.',
    'Balloon drivers cross whole countries with no engine at all — winning is reading the sky and finding winds that go your way.',
    'Balloon drivers fly in the early morning, when the winds are calm — by the middle of the day the winds have grown too strong.',
  ],
  parts: [
    { id: 'cloth-bag', label: 'Cloth Bag', realName: 'Envelope', position: [0, 1.35, 0], finish: 'titanium' },
    { id: 'fire-maker', label: 'Fire Maker', realName: 'Burner', position: [0, 0, 0], finish: 'warning' },
    { id: 'fire-mouth', label: 'Open Mouth', realName: 'Envelope Mouth', position: [0, 0.42, 0], finish: 'cold' },
    { id: 'top-door', label: 'Top Door', realName: 'Parachute Valve', position: [0, 2.32, 0], finish: 'cold' },
    { id: 'tie-lines', label: 'Tie Lines', realName: 'Suspension Lines', position: [0.42, 0, 0], finish: 'cold' },
    { id: 'fuel-bottles', label: 'Fuel Bottles', realName: 'Propane Tanks', position: [0.16, -0.42, 0], finish: 'cold' },
    { id: 'people-box', label: 'People Box', realName: 'Basket', position: [0, -0.42, 0], finish: 'hull' },
  ],
  article: [
    {
      sentences: [
        [
          'A hot air ball is a great round ',
          { text: 'cloth bag', part: 'cloth-bag' },
          ' full of warm air, with a small room for people hanging under it — the oldest flying machine there is, older than the sky boats with turning wings.',
        ],
        ['It flies for the same reason smoke from a fire goes up: warm air rises.'],
        ['Warm air is thinner than cold air, so a bag of warm air is not as heavy as the cold air around it, and the cold air pushes in from all sides and lifts the bag.'],
      ],
    },
    {
      sentences: [
        [
          'At the bottom of the bag sits the ',
          { text: 'fire maker', part: 'fire-maker' },
          ', a ring of small mouths that drink ',
          { text: 'fuel', dict: 'fuel' },
          ' and breathe long blue fire up into the cloth above.',
        ],
        [
          'The bag is made of ',
          { text: 'cloth', dict: 'cloth' },
          ', cut and joined into the shape of a rain drop turned the other way up, as tall as a church, with an ',
          { text: 'open mouth', part: 'fire-mouth' },
          ' at the bottom where the fire goes in.',
        ],
        [
          'At the very top of the ball sits a door in the cloth: pull the line and the ',
          { text: 'top door', part: 'top-door' },
          ' falls open, hot air runs out, and the ball drops.',
        ],
        [
          'Under the bag hang the ',
          { text: 'tie lines', part: 'tie-lines' },
          ', the ',
          { text: 'fuel bottles', part: 'fuel-bottles' },
          ', and the ',
          { text: 'people box', part: 'people-box' },
          ': a small hard room with high walls and a floor to stand on, room for a fire keeper and a few friends.',
        ],
      ],
    },
    {
      sentences: [
        ['Going up is easy: burn more, the air inside gets hotter, and the ball climbs.'],
        ['Coming down is just as easy: let the fire rest, the air inside cools and takes up less room, and the ball comes down — or open the way out at the top for a faster fall.'],
        ['But it cannot push itself where it wants to go: the ball has no engine and no wings, and must wait on the wind.'],
        ['Its driver picks a road in the sky by going up and coming down instead: high up and low down the winds blow different ways, and finding a layer that blows where you want to go is the whole art of it.'],
      ],
    },
    {
      sentences: [
        [
          'The first ',
          { text: 'balloon', dict: 'balloon' },
          ' riders flew more than two hundred years ago, in bags of paper and cloth, before anyone had put an engine in the sky.',
        ],
        ['Today the balls are bigger and the cloth is better, but the idea is the same as it ever was: a bag of warm air, a fire to keep it warm, and the whole sky pushing up from below.'],
        ['It is the quiet way to leave the ground: no road but the wind, no sound but the fire, and the whole world turning slowly under your feet.'],
      ],
    },
  ],
  flow: [
    { partIds: ['cloth-bag'], sentenceRef: 2, caption: 'A bag of warm air is not as heavy as the cold around it — the sky does the lifting.' },
    { partIds: ['fire-maker'], sentenceRef: 3, caption: 'The fire maker pours heat into the bag.' },
    { partIds: ['people-box'], sentenceRef: 6, caption: 'Under it all, the people ride in a small hard room.' },
    { partIds: ['top-door'], sentenceRef: 8, caption: 'Let the fire rest and the ball comes down — open the top and it comes down faster.' },
    { partIds: ['cloth-bag'], sentenceRef: 10, caption: 'No engine, no wings: the driver goes up and down to find a wind going the right way.' },
  ],
  keyExpressions: [
    { text: 'a bag of warm air' },
    { text: 'warm air rises' },
    { text: 'thinner than cold air' },
    { text: 'drink fuel' },
    { text: 'breathe long blue fire' },
    { text: 'as tall as a church' },
    { text: 'no engine and no wings' },
    { text: 'high up and low down' },
    { text: 'no road but the wind' },
  ],
  color: '#F97316',
}
