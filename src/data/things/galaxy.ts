import type { ThingData } from '../types'

export const galaxy: ThingData = {
  id: 'galaxy',
  slug: 'galaxy',
  simpleName: 'The Star City',
  realName: 'Galaxy',
  category: 'space',
  funFacts: [
    'Our star city is eating its neighbors: two small star cities are being pulled apart by ours right now, their stars slowly joining our streets over the next 100,000,000 years.',
    'On a clear, dark night, far from the lights of town, you can see the city’s own flat wheel with your eyes alone — a soft line of light from one side of the sky to the other, made of the added-up light of stars too far away to see one by one.',
    'If the whole city were made small enough to cover a country, the space between stars would be like the space between houses in a quiet town — stars are far apart, and the city is mostly empty room.',
  ],
  parts: [
    { id: 'flat-wheel', label: 'flat wheel', realName: 'Galactic Disk', position: [1.0, 0, 0], finish: 'hull' },
    { id: 'heart-light', label: 'heart light', realName: 'Galactic Bulge', position: [0, 0, 0], finish: 'warning' },
    { id: 'turning-arms', label: 'turning arms', realName: 'Spiral Arms', position: [0.388, 0.282, 0], finish: 'titanium' },
    { id: 'star-clouds', label: 'star clouds', realName: 'Star-Forming Regions', position: [-0.49, 0.14, 0], finish: 'cold' },
    { id: 'dust-rivers', label: 'dust rivers', realName: 'Dust Lanes', position: [-0.332, 0.241, 0], finish: 'cold' },
    { id: 'old-star-groups', label: 'old star groups', realName: 'Globular Clusters', position: [0.9, 0.9, 0.35], finish: 'cold' },
    { id: 'hidden-hold', label: 'hidden hold', realName: 'Dark Matter Halo', position: [-1.1, -1.1, 0], finish: 'cold' },
  ],
  article: [
    {
      sentences: [
        [
          'This is the star city we live in — a great crowd of 400,000,000,000 stars, so wide that light, the fastest thing there is, needs 100,000 years to cross it from side to side.',
        ],
        [
          'People call it a ',
          { text: 'galaxy', dict: 'galaxy' },
          ' — a city of stars with no walls and no streets, where the houses are suns and every sun may carry its own family of worlds.',
        ],
        [
          'Seen from far away, the whole city is a ',
          { text: 'flat wheel', part: 'flat-wheel' },
          ': round and thin like a dinner plate, with a soft crowd of stars in the middle — and our own sun, with its little family of worlds, rides the wheel about half way out from the middle.',
        ],
      ],
    },
    {
      sentences: [
        [
          'In the middle burns the ',
          { text: 'heart light', part: 'heart-light' },
          ': a great ball of old stars pressed close together, so thick with suns that the middle of the city glows like a warm room with the lights left on.',
        ],
        [
          'Hidden there, too heavy to see, sits a black hole — a thing so full of matter that even light cannot get away — and the whole city slowly turns around it.',
        ],
        [
          'Winding out from the heart run the ',
          { text: 'turning arms', part: 'turning-arms' },
          ': two great bending rivers of stars and gas, reaching out and around, so that the whole city turns like a wheel — but so slowly that a single turn takes 230,000,000 years.',
        ],
        [
          'The arms are moving crowds, not walls: stars enter at one end, ride the crowd a while, and leave at the other — the arm is the river, and the stars are the water; the water flows, but the river stays.',
        ],
      ],
    },
    {
      sentences: [
        [
          'The biggest, brightest new stars are born in the ',
          { text: 'star clouds', part: 'star-clouds' },
          ': great cold clouds of gas, pushed together by the arm’s own slow push until they light up as fresh suns — the young part of the city, where the street lights are still being put in.',
        ],
        [
          'Running along the inside of the arms are the ',
          { text: 'dust rivers', part: 'dust-rivers' },
          ': dark lines of dust, the smoke of old and dying stars, so thick that they hide the middle of the city from us, like a wall of smoke across a bright room.',
        ],
        [
          'Above and below the wheel hang the ',
          { text: 'old star groups', part: 'old-star-groups' },
          ': hundreds of little round balls of stars, the oldest houses in the city, left over from its early days, from before it had learned to lie flat.',
        ],
        [
          'For stars are born in the clouds, live their long lives burning quietly, and end in smoke and light — and their smoke becomes the dust of new clouds, so nothing in the city is ever lost, only handed down.',
        ],
      ],
    },
    {
      sentences: [
        [
          'Around everything lies the ',
          { text: 'hidden hold', part: 'hidden-hold' },
          ': a great round something that no eye can see, more than ten times as heavy as all the city’s stars together, holding the whole turning city in its pull — for without it, the turning would tear the city apart, throwing its stars off like water from a fast wheel.',
        ],
        [
          'We see our own city only from the inside, edge on: on a dark night, far from the lights of town, its flat wheel shows as a pale river of light across the sky — the very wheel we ride, from the inside.',
        ],
        [
          'And far across the dark are other star cities, as many as there are stars in ours — each one a whole city of suns, turning alone in the biggest empty room there is.',
        ],
      ],
    },
  ],
  keyExpressions: [
    { text: 'a city of stars with no walls and no streets' },
    { text: 'round and thin like a dinner plate', partId: 'flat-wheel' },
    { text: 'the middle of the city glows like a warm room with the lights left on', partId: 'heart-light' },
    { text: 'the arm is the river, and the stars are the water', partId: 'turning-arms' },
    { text: 'pushed together until they light up as fresh suns', partId: 'star-clouds' },
    { text: 'the smoke of old and dying stars', partId: 'dust-rivers' },
    { text: 'the oldest houses in the city', partId: 'old-star-groups' },
    { text: 'more than ten times as heavy as all the city’s stars together', partId: 'hidden-hold' },
    { text: 'each one a whole city of suns, turning alone in the biggest empty room there is' },
  ],
  flow: [
    { partIds: ['flat-wheel'], sentenceRef: 2, caption: 'First the flat wheel — the great turning plate of the city, thin and wide, one full turn every 230,000,000 years.' },
    { partIds: ['heart-light'], sentenceRef: 3, caption: 'In the middle, the heart light — old stars pressed warm and close, with a hidden black hole at the center.' },
    { partIds: ['turning-arms'], sentenceRef: 5, caption: 'Winding out, the turning arms — slow rivers of stars, where the city keeps its youngest suns.' },
    { partIds: ['star-clouds'], sentenceRef: 7, caption: 'Along the arms, the star clouds — cold gas pushed together, lighting up as fresh suns.' },
    { partIds: ['hidden-hold'], sentenceRef: 11, caption: 'And around it all, the hidden hold — the quiet hand that holds the turning city together.' },
  ],
  color: '#9333EA',
}
