import type { ThingData } from '../types'

export const bridge: ThingData = {
  id: 'bridge',
  slug: 'bridge',
  simpleName: 'The High Road',
  realName: 'Suspension Bridge',
  category: 'transport',
  funFacts: [
    'Each great line is made from more than 25,000 thin wires, side by side: laid out end to end, one line’s wires would reach most of the way around the world — yet wrapped together they make a rope less than a yard across, strong enough to hang a loaded road from.',
    'The best-loved high road of them all — the great red one that stands at the great gate of water on the west side — was the longest in the world for twenty-seven years, and its great lines pull on the end holds with the strength of 50,000 cars: a hanging road a mile long, colored the red of falling iron so ships could see it even through the thick sea air.',
    'The oldest high roads were walking ropes: grass ropes and wood thrown across mountain rivers, only as wide as a hand, swinging at every step — people have crossed this way for more than 3,000 years; the idea is as old as the hills, and only the steel is new.',
  ],
  parts: [
    { id: 'great-lines', label: 'great lines', realName: 'Main Cable', position: [0, 0.42, 0], finish: 'warning' },
    { id: 'hang-lines', label: 'hang lines', realName: 'Suspender Ropes', position: [0.22, 0.18, 0], finish: 'cold' },
    { id: 'hold-towers', label: 'hold towers', realName: 'Suspension Tower', position: [0.55, 0.35, 0], finish: 'titanium' },
    { id: 'end-holds', label: 'end holds', realName: 'Anchorage', position: [-1.45, -0.3, 0], finish: 'cold' },
    { id: 'road-way', label: 'road way', realName: 'Bridge Deck', position: [-0.6, 0, 0], finish: 'hull' },
    { id: 'under-bones', label: 'under bones', realName: 'Stiffening Truss', position: [-0.22, -0.16, 0], finish: 'cold' },
    { id: 'water-legs', label: 'water legs', realName: 'Pier Foundation', position: [0.55, -0.72, 0], finish: 'cold' },
  ],
  article: [
    {
      sentences: [
        [
          'The high road is a way for cars and people to get across a wide river or a deep piece of sea without a boat: a long road carried high in the air, from one side of the empty space to the other.',
        ],
        [
          'You meet it at every great city on a great river: sooner or later the city grows a ',
          { text: 'bridge', dict: 'bridge' },
          ', and then, day and night, a river of cars runs across, never stopping, while under them the boats go by and the water runs on its own way, paying the road above no mind.',
        ],
        [
          'For crossing the widest spaces, it is the answer that needs the least: nothing built in the middle of the water, no wall thrown across the flow — just a few tall points, a few long lines, and the pulling power of ',
          { text: 'steel', dict: 'steel' },
          '.',
        ],
      ],
    },
    {
      sentences: [
        [
          'The holding work is done by the ',
          { text: 'great lines', part: 'great-lines' },
          ': two huge ropes, each a ',
          { text: 'cable', dict: 'cable' },
          ' of more than 25,000 thin steel wires all wrapped into one, running from the land at one end, up over one tower, down to the middle of the road, up over the far tower, and away into the land at the other end: the great deep smile of the crossing.',
        ],
        [
          'From the great lines hang the ',
          { text: 'hang lines', part: 'hang-lines' },
          ': hundreds of thin straight ',
          { text: 'ropes', dict: 'rope' },
          ', one every few steps along the whole road, each one carrying its small piece of the road’s weight up to the great line above — the road hangs from its lines the way a coat hangs from a hook.',
        ],
        [
          'The weight comes down at the ',
          { text: 'hold towers', part: 'hold-towers' },
          ': two great towers of steel and stone, taller than most buildings, standing up out of the water at the deepest part of the river — the two high points from which the whole road hangs.',
        ],
        [
          'And at the two ends, the great lines run down into the ',
          { text: 'end holds', part: 'end-holds' },
          ': great blocks of steel and concrete, set in the ground on each side of the water, heavy enough to hold back the pull of the whole hanging road — for the lines pull on them without rest, all day and all night, with the strength of a small mountain.',
        ],
      ],
    },
    {
      sentences: [
        [
          'The floor of it all is the ',
          { text: 'road way', part: 'road-way' },
          ': a long, thin box of steel, wide enough for six lines of cars, running flat from one side to the other — from far away it looks too thin to carry its own weight, let alone a river of cars above the water.',
        ],
        [
          'The thin box is saved by its ',
          { text: 'under bones', part: 'under-bones' },
          ': crossing bars and long steel bones running under the floor, making the whole road into one strong piece — for a hanging floor with no bones would swing and wave in the wind like a wet cloth, bending under its own shaking.',
        ],
        [
          'Down at the water stand the ',
          { text: 'water legs', part: 'water-legs' },
          ': great wide feet under the towers, dropping through the river to the rock below, passing the weight of the whole crossing — road, lines, cars, and all — down into the ground.',
        ],
        [
          'And so the weight travels, piece to piece: the cars push on the road way, the road way hangs from the hang lines, the hang lines hang from the great lines, the great lines press down on the hold towers and pull on the end holds — every piece passing its share along, from a single wheel, up into the sky, over, and down into the rock.',
        ],
      ],
    },
    {
      sentences: [
        [
          'The crossing is never still: the road breathes up and down under the moving cars, a slow wave running ahead of them; the towers lean a hair into the strongest wind; the great lines grow shorter in the cold and longer in the warm — the whole thing is built to move, because a thing that cannot bend must instead break.',
        ],
        [
          'Building it is work for years: first the water legs and towers, then a first thin line carried across by boat or by air, then that little line used to pull across the great lines, piece by piece — and last, the road itself, built out from the towers, meeting itself in the middle of the air.',
        ],
        [
          'When the last piece joins in the middle of the sky, the crossing is born — and it will stand for a hundred years, through wind, ice, and the daily river of cars: the widest empty room in the world, quietly traveled over.',
        ],
      ],
    },
  ],
  keyExpressions: [
    { text: 'the answer that needs the least' },
    { text: 'the great deep smile of the crossing', partId: 'great-lines' },
    { text: 'heavy enough to hold back the pull', partId: 'end-holds' },
    { text: 'the two high points from which the whole road hangs', partId: 'hold-towers' },
    { text: 'each one carrying its small piece of the road’s weight up', partId: 'hang-lines' },
    { text: 'a long, thin box of steel', partId: 'road-way' },
    { text: 'making the whole road into one strong piece', partId: 'under-bones' },
    { text: 'every piece passing its share along' },
    { text: 'built to move, because a thing that cannot bend must instead break' },
  ],
  flow: [
    { partIds: ['great-lines'], sentenceRef: 3, caption: 'First the great lines — two huge ropes, the deep smile of the crossing.' },
    { partIds: ['hang-lines'], sentenceRef: 4, caption: 'From the great lines hang hundreds of hang lines — each carrying its small piece of the road up.' },
    { partIds: ['hold-towers'], sentenceRef: 5, caption: 'The great lines run over the hold towers — taller than most buildings, standing in the deep water.' },
    { partIds: ['road-way', 'under-bones'], sentenceRef: 8, caption: 'The road hangs from it all, thin but strong — the under bones make the floor a box that will not bend.' },
    { partIds: ['end-holds'], sentenceRef: 10, caption: 'And at each end the pull lands in the end holds — great stone against the pull of the whole road.' },
  ],
  color: '#EA580C',
}
