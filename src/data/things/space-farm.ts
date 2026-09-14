import type { ThingData } from '../types'

export const spaceFarm: ThingData = {
  id: 'space-farm',
  slug: 'space-farm',
  simpleName: 'The Space Garden',
  realName: 'Space Farm',
  category: 'space',
  funFacts: [
    'In space, water does not fall — it makes round balls that float in the air.',
    'Space travelers on the space station ate space-grown food for the first time in 2015 — fresh food is hard to find up there.',
    'Things that grow move toward the light even without the pull of the world — they always know which way is up.',
  ],
  parts: [
    { id: 'grow-light', label: 'grow light', realName: 'LED grow panel', position: [0, 0.28, 0], finish: 'warning' },
    { id: 'water-pipe', label: 'water pipe', realName: 'Nutrient circulation tube', position: [0.36, 0.08, 0], finish: 'cold' },
    { id: 'plant-tray', label: 'plant tray', realName: 'Hydroponic tray', position: [0, 0.02, 0], finish: 'hull' },
    { id: 'see-cover', label: 'see-through walls', realName: 'Transparent enclosure', position: [0, 0.14, 0], finish: 'cold' },
    { id: 'food-tank', label: 'food tank', realName: 'Nutrient solution reservoir', position: [0, -0.26, 0], finish: 'hull' },
    { id: 'air-hole', label: 'air hole', realName: 'Ventilation port', position: [-0.38, 0.12, 0], finish: 'cold' },
    { id: 'control-box', label: 'control box', realName: 'Environmental controller', position: [0.38, -0.16, 0], finish: 'cold' },
  ],
  article: [
    {
      sentences: [
        [
          'This box grows food in space, far from any ',
          { text: 'farm', dict: 'farm' },
          ' on Earth.',
        ],
        ['Things that grow need light, water, and air — but not dirt.'],
        ['So this box gives them water with food in it, and big lights that give light all day, and the things ', { text: 'grow', dict: 'grow' }, ' without ever touching the ground.'],
      ],
    },
    {
      sentences: [
        [
          'On top, a bright ',
          { text: 'grow light', part: 'grow-light' },
          ' gives light down like a small sun — the things think it is day, all the time.',
        ],
        [
          'A ',
          { text: 'water pipe', part: 'water-pipe' },
          ' runs up the side, carrying food-water from the bottom to the top, drop by drop.',
        ],
        [
          'The things sit on a flat ',
          { text: 'grow box', part: 'plant-tray' },
          ' — their bottom parts hang down into the water, not into dirt.',
        ],
        [
          'All around, ',
          { text: 'see-through walls', part: 'see-cover' },
          ' let everyone watch the things grow; down below, the ',
          { text: 'food tank', part: 'food-tank' },
          ' holds the food-water that feeds them.',
        ],
      ],
    },
    {
      sentences: [
        [
          'Small ',
          { text: 'air holes', part: 'air-hole' },
          ' in the side let fresh air in — things that grow need air just like you.',
        ],
        ['The water goes round and round: up the pipe, through the bottom parts, and back down to the tank.'],
        ['No dirt, no rain — just water, light, and time.'],
        [
          'A ',
          { text: 'control box', part: 'control-box' },
          ' watches how much water is in the tank and the light, and fixes things before anything goes wrong.',
        ],
      ],
    },
    {
      sentences: [
        [
          'Growing food in space is strange: without the pull of the world, water makes round balls instead of falling.',
        ],
        ['But things that grow do not care — as long as their bottom parts find water and their leaves find light, they grow.'],
        ['One day, people going to far-away worlds will need boxes like this to eat.'],
      ],
    },
  ],
  flow: [
    { partIds: ['grow-light'], sentenceRef: 3, caption: 'The grow light gives light down like a small sun — the things think it is day.' },
    { partIds: ['water-pipe'], sentenceRef: 4, caption: 'A water pipe carries food-water from the bottom to the top, drop by drop.' },
    { partIds: ['plant-tray'], sentenceRef: 5, caption: 'The things sit on a flat grow box — their bottom parts hang down into the water.' },
    { partIds: ['see-cover', 'food-tank'], sentenceRef: 6, caption: 'See-through walls let everyone watch the things grow; the food tank holds the food-water.' },
    { partIds: ['control-box'], sentenceRef: 10, caption: 'The control box watches how much water is in the tank and the light.' },
  ],
  keyExpressions: [
    { text: 'grows food in space', partId: 'plant-tray' },
    { text: 'things that grow need light, water, and air', partId: 'grow-light' },
    { text: 'bottom parts hang down into the water, not into dirt', partId: 'plant-tray' },
    { text: 'carries food-water from the bottom to the top', partId: 'water-pipe' },
    { text: 'lets everyone watch the things grow', partId: 'see-cover' },
    { text: 'holds the food-water that feeds them', partId: 'food-tank' },
    { text: 'let fresh air in', partId: 'air-hole' },
    { text: 'water makes round balls instead of falling' },
    { text: 'people going to far-away worlds will need boxes like this' },
  ],
  color: '#7CB9E8',
}