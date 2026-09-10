import type { ThingData } from '../types'

export const ship: ThingData = {
  id: 'ship',
  slug: 'ship',
  simpleName: 'Water Walker',
  realName: 'Ship',
  category: 'transport',
  funFacts: [
    'The greatest ships are so long that the people driving them cannot see the back of the ship with their own eyes — cameras and mirrors do the watching.',
    'When a great ship passes, it pulls the moving water with it: small boats keep well away, or they will be drawn in against the ship’s side.',
    'Out of the water, in a dry room where ships are fixed, a great ship must be held up all along its body by stands — without the sea’s push from below, its own weight would bend it.',
  ],
  parts: [
    { id: 'float-body', label: 'Float Body', realName: 'Hull', position: [-0.3, 0, 0], finish: 'hull' },
    { id: 'push-room', label: 'Push Room', realName: 'Engine Room', position: [0.95, -0.325, 0], finish: 'titanium' },
    { id: 'push-foot', label: 'Push Foot', realName: 'Propeller', position: [1.6, -0.4, 0], finish: 'warning' },
    { id: 'back-fin', label: 'Back Fin', realName: 'Rudder', position: [1.85, -0.3, 0], finish: 'cold' },
    { id: 'watch-room', label: 'Watch Room', realName: 'Bridge', position: [0.75, 0.5, 0], finish: 'cold' },
    { id: 'carry-room', label: 'Carry Room', realName: 'Cargo Hold', position: [-0.7, 0, 0], finish: 'cold' },
    { id: 'heavy-bottom', label: 'Heavy Bottom', realName: 'Ballast Keel', position: [-0.3, -0.48, 0], finish: 'cold' },
  ],
  article: [
    {
      sentences: [
        [
          'A ',
          { text: 'ship', dict: 'ship' },
          ' is a great ',
          { text: 'iron', dict: 'iron' },
          ' box made to walk on water — and the strange part is that it works: the more you put on it, the deeper it sits, and it still does not go down.',
        ],
        ['The whole idea turns on one fact: push a thing down into water, and the water pushes back up — with a push as big as the weight of the water moved out of the way.'],
        ['So a ship is built wide and empty inside: the water it pushes out of the way is heavier than the ship and all it holds, and the sea holds it all up on a push from below.'],
      ],
    },
    {
      sentences: [
        [
          'The ',
          { text: 'float body', part: 'float-body' },
          ' is that empty iron box — room inside, walls strong enough to hold back the sea on every side, and a front shaped to part the water and go through it with the least fight.',
        ],
        [
          'Down at the back, under the water line, the ',
          { text: 'push room', part: 'push-room' },
          ' burns its fuel — the heart of the walk.',
        ],
        [
          'It turns the ',
          { text: 'push foot', part: 'push-foot' },
          ': a set of small turning wings that bite into the water and push it backward, driving the ship forward.',
        ],
        [
          'Behind it swings the ',
          { text: 'back fin', part: 'back-fin', dict: 'fin' },
          ', a flat plate turned by the driver: the water against the turned plate carries the back of the ship sideways, and the ship answers by putting its nose where the fin says.',
        ],
      ],
    },
    {
      sentences: [
        [
          'High up at the back sits the ',
          { text: 'watch room', part: 'watch-room' },
          ', with windows on every side: from there the ship is driven — eyes on the sea, hands on the wheel, orders sent down to the push room.',
        ],
        [
          'Most of the great middle of the ship is ',
          { text: 'carry room', part: 'carry-room' },
          ', space from floor to roof — boxes and cars and food and fuel, riding quietly while the ship does the walking.',
        ],
        [
          'Along the bottom runs the ',
          { text: 'heavy bottom', part: 'heavy-bottom' },
          ', a great weight of iron laid low: it pulls the whole ship’s weight down and keeps it from turning over — weight set low is the oldest way of standing up in a moving world.',
        ],
        ['And a ship must never go down: inside the walls there are more walls, so if one space is torn open, the water fills that space and stops there — and the ship stays up.'],
      ],
    },
    {
      sentences: [
        ['The first ones crossed whole seas by the stars and the winds, climbing water hills with no land in sight for weeks at a time.'],
        ['Today the greatest of them carry more things in one walk than ten hundred trucks could carry in a year, and almost everything you own has spent part of its life on one.'],
        ['An iron box as heavy as a town, walking on water and never going under — the heaviest thing that ever walked on water.'],
      ],
    },
  ],
  flow: [
    { partIds: ['float-body'], sentenceRef: 3, caption: 'The float body: an empty iron box, parting the water with the least fight.' },
    { partIds: ['push-room'], sentenceRef: 4, caption: 'Down at the back, the push room burns its fuel — the heart of the walk.' },
    { partIds: ['push-foot'], sentenceRef: 5, caption: 'The push foot’s turning wings bite into the water — push back, go forward.' },
    { partIds: ['back-fin'], sentenceRef: 6, caption: 'The back fin swings, the water pushes back, and the ship puts its nose where the fin says.' },
    { partIds: ['watch-room'], sentenceRef: 7, caption: 'In the watch room: eyes on the sea, orders sent down.' },
  ],
  keyExpressions: [
    { text: 'a great iron box made to walk on water' },
    { text: 'a push from below' },
    { text: 'heavier than the ship and all it holds' },
    { text: 'turning wings that bite into the water' },
    { text: 'walls inside the walls' },
    { text: 'weight set low is the oldest way of standing up' },
    { text: 'climbing water hills with no land in sight' },
    { text: 'the heaviest thing that ever walked on water' },
    { text: 'spent part of its life on one' },
  ],
  color: '#3B82F6',
}
