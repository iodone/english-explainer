import type { ThingData } from '../types'

export const fireTruck: ThingData = {
  id: 'fire-truck',
  slug: 'fire-truck',
  simpleName: 'The Fire Fighting Car',
  realName: 'Fire Truck',
  category: 'transport',
  funFacts: [
    'A big fire car can hold more than 3,000 liters of water, and its heart can push it all out again in less than two minutes.',
    'In some cities the fire team uses a turn-table ladder: the whole top of the car turns around, so the ladder can point at a building from any side.',
    'The ladder on the biggest fire cars can reach higher than a building with 10 floors, and some cars carry enough hose to cross a whole city street many times over.',
  ],
  parts: [
    { id: 'driver-room', label: 'driver room', realName: 'Crew Cab', position: [-0.55, 0.08, 0], finish: 'hull' },
    { id: 'water-tank', label: 'water tank', realName: 'Water Tank', position: [0.42, 0.06, 0], finish: 'titanium' },
    { id: 'pump-heart', label: 'pump heart', realName: 'Water Pump', position: [0.64, -0.19, 0], finish: 'warning' },
    { id: 'water-hoses', label: 'water hoses', realName: 'Hose Reels', position: [0.02, -0.18, 0.22], finish: 'cold' },
    { id: 'long-ladder', label: 'long ladder', realName: 'Extension Ladder', position: [0.18, 0.30, 0], finish: 'cold' },
    { id: 'loud-horn', label: 'loud horn', realName: 'Siren and Light Bar', position: [-0.46, 0.30, 0], finish: 'cold' },
    { id: 'turning-wheels', label: 'turning wheels', realName: 'Wheels', position: [0.10, -0.40, 0], finish: 'cold' },
  ],
  article: [
    {
      sentences: [
        [
          'When fire breaks out in a house, the people inside need help fast, and the first helper to arrive is a big red car built for one job: fighting fire.',
        ],
        [
          'The ',
          { text: 'driver room', part: 'driver-room' },
          ' in front holds a small team of fire fighters who drive it through the busy streets.',
        ],
        [
          'Every other part of the car is there for one job: moving water — the only thing that can put the fire out.',
        ],
      ],
    },
    {
      sentences: [
        [
          'Under the middle of the car sits a great ',
          { text: 'water tank', part: 'water-tank' },
          ', a room full of water carried from the ',
          { text: 'station', dict: 'station' },
          '.',
        ],
        [
          'Behind it works the ',
          { text: 'pump heart', part: 'pump-heart', dict: 'pump' },
          ', a machine that grabs the water and pushes it out with real ',
          { text: 'force', dict: 'force' },
          '.',
        ],
        [
          'Rolled in round rings on the sides hang the ',
          { text: 'water hoses', part: 'water-hoses', dict: 'hose' },
          ' — long pipes that carry the pushed water right to the fire.',
        ],
        [
          'On top, closed up short and flat, rests a ',
          { text: 'long ladder', part: 'long-ladder', dict: 'ladder' },
          ' that can rise high into the sky to reach the upper floors.',
        ],
      ],
    },
    {
      sentences: [
        [
          'When the car stops at the burning house, the heart starts its hard work: it pulls water from the tank and drives it into the hoses.',
        ],
        [
          'A fire fighter opens the end of a hose, and water shoots out in a hard, bright line.',
        ],
        [
          'If people are trapped up high, the ladder is raised — it climbs and climbs until its top stands by the window.',
        ],
        [
          'The big ',
          { text: 'turning wheels', part: 'turning-wheels' },
          ', driven by the ',
          { text: 'engine', dict: 'engine' },
          ', are what carried everyone here so fast.',
        ],
      ],
    },
    {
      sentences: [
        [
          'On the way through the streets, the ',
          { text: 'loud horn', part: 'loud-horn', dict: 'horn' },
          ' and its flashing lights ask the other cars to move to the side.',
        ],
        [
          'Sometimes the tank runs dry before the fire dies, so the car can also pull water from a river or from the water pipes under the street.',
        ],
        [
          'Long after the last ',
          { text: 'smoke', dict: 'smoke' },
          ' rises, the red car stays, watching, until the fire is truly dead and the people are safe.',
        ],
      ],
    },
  ],
  flow: [
    { partIds: ['driver-room'], sentenceRef: 1, caption: 'The driver room in front holds the team that drives the car through the busy streets.' },
    { partIds: ['water-tank'], sentenceRef: 3, caption: 'Under the middle sits the water tank, a room full of water carried from the station.' },
    { partIds: ['pump-heart'], sentenceRef: 4, caption: 'Behind it works the pump heart, pulling water in and pushing it out with force.' },
    { partIds: ['water-hoses'], sentenceRef: 5, caption: 'Rolled on the sides, the water hoses carry the pushed water right to the fire.' },
    { partIds: ['long-ladder'], sentenceRef: 6, caption: 'Closed up short on top, the long ladder can rise high to reach the upper floors.' },
  ],
  keyExpressions: [
    { text: 'the front room where the team sits and drives', partId: 'driver-room' },
    { text: 'a room full of water, carried from the station', partId: 'water-tank' },
    { text: 'the machine that pulls water in and pushes it out hard', partId: 'pump-heart' },
    { text: 'long pipes rolled in rings on the sides', partId: 'water-hoses' },
    { text: 'the long ladder on top that climbs to high windows', partId: 'long-ladder' },
    { text: 'the horn and lights that ask other cars to move to the side', partId: 'loud-horn' },
    { text: 'the big wheels driven by the engine', partId: 'turning-wheels' },
    { text: 'water pushed out in a hard, bright line', partId: 'water-hoses' },
    { text: 'a true friend to every burning house', partId: 'driver-room' },
  ],
  color: '#E63946',
}
