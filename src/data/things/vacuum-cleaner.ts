import type { ThingData } from '../types'

export const vacuumCleaner: ThingData = {
  id: 'vacuum-cleaner',
  slug: 'vacuum-cleaner',
  simpleName: 'Dust Eater',
  realName: 'Vacuum Cleaner',
  category: 'home',
  funFacts: [
    'The first dust eaters had no machine inside — two people had to work them by hand.',
    'A strong dust eater can hold a small ball against its mouth with air alone.',
    'In space there is no air to carry dust, so a dust eater would do nothing there.',
  ],
  parts: [
    { id: 'air-puller', label: 'Air Puller', realName: 'Motor & Fan', position: [-0.95, -0.05, 0], finish: 'warning' },
    { id: 'dust-bag', label: 'Dust Bag', realName: 'Body & Dust Bag', position: [0.3, -0.1, 0], finish: 'hull' },
    { id: 'long-nose', label: 'Long Nose', realName: 'Hose', position: [0.95, 0.5, 0], finish: 'cold' },
    { id: 'floor-mouth', label: 'Floor Mouth', realName: 'Floor Nozzle', position: [1.25, -0.55, 0], finish: 'cold' },
    { id: 'clean-air-wall', label: 'Clean-Air Wall', realName: 'Exhaust Filter', position: [-1.28, -0.05, 0], finish: 'cold' },
    { id: 'little-wheels', label: 'Little Wheels', realName: 'Casters', position: [0.4, -0.5, 0.38], finish: 'cold' },
    { id: 'power-line', label: 'Power Line', realName: 'Power Cord', position: [-0.95, -0.55, 0], finish: 'cold' },
  ],
  article: [
    {
      sentences: [
        [
          'A ',
          { text: 'vacuum cleaner', dict: 'vacuum cleaner' },
          ' is a machine that eats dust off your floor.',
        ],
        ['It pulls air in at one end and pushes it out at the other, and the moving air carries the dust with it.'],
        ['Every part does one simple thing: air in, dust caught, air out.'],
      ],
    },
    {
      sentences: [
        [
          'An ',
          { text: 'air puller', part: 'air-puller' },
          ' inside spins very fast and pulls air through the whole machine.',
        ],
        ['Air is not empty — moving air pushes on whatever it passes, so a strong pull can carry small bits along.'],
        [
          'The air rushes in through a ',
          { text: 'floor mouth', part: 'floor-mouth' },
          ', a wide head that sits close to the ground so the pull stays strong.',
        ],
        [
          'From there it climbs a ',
          { text: 'long nose', part: 'long-nose' },
          ' — a soft ',
          { text: 'tube', dict: 'tube' },
          ' you can point anywhere.',
        ],
      ],
    },
    {
      sentences: [
        [
          'Inside the body, the dirty air runs into the ',
          { text: 'dust bag', part: 'dust-bag' },
          ', a soft wall with tiny holes in it.',
        ],
        ['Air slips through the holes, but the dust is too big, so it stays behind and fills the bag.'],
        [
          'Before the air goes out, a ',
          { text: 'clean-air wall', part: 'clean-air-wall' },
          ' catches the last of the fine dust.',
        ],
        ['The air that comes out is clean, and the room is fresh.'],
      ],
    },
    {
      sentences: [
        [
          'The body sits on ',
          { text: 'little wheels', part: 'little-wheels' },
          ', so you can pull it from room to room by its nose.',
        ],
        [
          'A ',
          { text: 'power line', part: 'power-line' },
          ' feeds it from the wall — the same power that lights your rooms.',
        ],
        ['When the bag can hold no more dust, you open the body, throw the old bag away, and the dust eater can start eating again.'],
      ],
    },
  ],
  flow: [
    {
      partIds: ['air-puller'],
      caption: 'The air puller spins fast and pulls air through the machine.',
      sentenceRef: 3,
    },
    {
      partIds: ['floor-mouth', 'long-nose'],
      caption: 'Air rushes in through the floor mouth and climbs the long nose.',
      sentenceRef: 6,
    },
    {
      partIds: ['dust-bag'],
      caption: 'The dust rides the air into the bag and stays caught.',
      sentenceRef: 8,
    },
    {
      partIds: ['clean-air-wall'],
      caption: 'A clean-air wall catches the last fine dust on the way out.',
      sentenceRef: 9,
    },
    {
      partIds: ['power-line'],
      caption: 'Power from the wall keeps the puller spinning.',
      sentenceRef: 12,
    },
  ],
  keyExpressions: [
    { text: 'vacuum cleaner' },
    { text: 'eats dust' },
    { text: 'pulls air in', partId: 'air-puller' },
    { text: 'floor mouth', partId: 'floor-mouth' },
    { text: 'long nose', partId: 'long-nose' },
    { text: 'dust bag', partId: 'dust-bag' },
    { text: 'clean-air wall', partId: 'clean-air-wall' },
    { text: 'room to room', partId: 'little-wheels' },
    { text: 'power from the wall', partId: 'power-line' },
  ],
  color: '#F472B6',
}
