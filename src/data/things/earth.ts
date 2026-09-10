import type { ThingData } from '../types'

export const earth: ThingData = {
  id: 'earth',
  slug: 'earth',
  simpleName: 'The Blue World',
  realName: 'Earth',
  category: 'space',
  funFacts: [
    'The turning heart is bigger than the moon: its inner ball, hard iron, is a little smaller than the moon, and ball and sea together a little bigger than the red world next door — and it is the slow turning of that iron sea that makes the power field, a world-sized magnet spinning in the middle of the world.',
    'Every day the day star breathes out wind without end, and every day the power field turns almost all of it away; the little that gets through runs down the field lines to the two ends of the world, where it lights the night sky in moving green and red — the sky-fires of the far north and far south.',
    'Only twenty-four people have ever seen the blue world whole, with their own eyes: the rest of us know it only from pictures. They saw it rise over the dead gray ground of the moon — a small blue and white ball hanging in the black — and one of them took the picture that changed how the whole world sees itself.',
  ],
  parts: [
    { id: 'stone-skin', label: 'stone skin', realName: 'Crust', position: [0.65, 0.25, 0.3], finish: 'cold' },
    { id: 'hot-middle', label: 'hot middle', realName: 'Mantle', position: [0.42, 0, 0], finish: 'cold' },
    { id: 'turning-heart', label: 'turning heart', realName: 'Core', position: [0, 0, 0], finish: 'warning' },
    { id: 'blue-water', label: 'blue water', realName: 'Oceans', position: [0.44, 0.13, 0.42], finish: 'cold' },
    { id: 'dry-lands', label: 'dry lands', realName: 'Continents', position: [0.36, 0.44, 0.32], finish: 'cold' },
    { id: 'air-skin', label: 'air skin', realName: 'Atmosphere', position: [0, 0.82, 0], finish: 'hull' },
    { id: 'power-field', label: 'power field', realName: 'Magnetosphere', position: [1.08, 0.1, 0], finish: 'titanium' },
  ],
  article: [
    {
      sentences: [
        [
          'The blue world is our world — the third rock from the day star, the one place in all the sky where we know for sure there is life: a blue and white ball of rock and water, turning once a day, carrying every one of us along.',
        ],
        [
          'From far away it is almost all water: a great sea of blue broken by land, wrapped in moving white clouds, with one moon going round it — the brightest, bluest eye in the sky, seen from any of the other worlds.',
        ],
        [
          'Of all the ',
          { text: 'planets', dict: 'planet' },
          ' circling the day star — and we have now sent eyes to every one of them — the blue world is still the only one that is right: not too hot, not too cold, wet enough, with air to breathe and ground to stand on — the one world that needs no fixing.',
        ],
      ],
    },
    {
      sentences: [
        [
          'Under our feet, the world is built in layers, from skin to heart: a thin stone skin on the outside, a deep hot middle under it, and at the very center a ball of iron — hotter than the face of the day star, and still turning.',
        ],
        [
          'The outside layer is the ',
          { text: 'stone skin', part: 'stone-skin' },
          ': rock a few tens of miles thick — thinner, next to the whole world, than the paint on a ball — carrying the land, the sea floors, and everything we have ever built.',
        ],
        [
          'Under the skin lies the ',
          { text: 'hot middle', part: 'hot-middle' },
          ': 1,800 miles of rock so hot and so pressed that it flows, slowly, the way glass does — a deep sea of slow stone carrying the skin above it and driving the slow moving of the land.',
        ],
        [
          'And in the middle of everything turns the ',
          { text: 'turning heart', part: 'turning-heart' },
          ': a ball of iron half as wide as the whole world, hotter than the outside of the day star — a heart that has burned and turned without rest for 4,500,000,000 years.',
        ],
      ],
    },
    {
      sentences: [
        [
          'On the skin, most of the room belongs to the ',
          { text: 'blue water', part: 'blue-water' },
          ': one great ',
          { text: 'ocean', dict: 'ocean' },
          ', miles deep, covering seven of every ten parts of the world — the home of nearly all life that has ever lived, and the maker of our rain, our winds, and much of our air.',
        ],
        [
          'Out of the sea rise the ',
          { text: 'dry lands', part: 'dry-lands' },
          ': seven great pieces of land and many small ones, riding the slow stone sea below — moving a little each year, slower than grass grows, the land floating on the stone the way boats float on water.',
        ],
        [
          'Over everything lies the ',
          { text: 'air skin', part: 'air-skin' },
          ': miles of gases wrapped around the world — thin, next to the whole ball, like the light on a wet stone — holding our heat in, turning the day star’s light into wind and rain, and standing between every living thing and the black of space.',
        ],
        [
          'And around all of it spreads the ',
          { text: 'power field', part: 'power-field' },
          ': a great field of power, made deep down by the turning heart, reaching far out into space — the wall that turns away the day star’s wind, the same wind that, with no field to stop it, long ago blew the air from the red world next door.',
        ],
      ],
    },
    {
      sentences: [
        [
          'The blue world and the red world began as sisters, born side by side from the same turning cloud of dust and ice — but the blue world kept its turning heart, and its heart kept its field, and its field kept its air; and with air and water held close, life took hold and never let go.',
        ],
        [
          'Every human story has happened here, on this one ball: every war and every song, every language, every animal that ever lived, every person you have ever heard of — all of it, from the beginning to now, on a few miles of stone floating on a sea of hot rock.',
        ],
        [
          'And it is ours to keep: there is no second blue world, no near place waiting for us, no ship big enough to carry us all — the one world we have, seen whole from space, small and blue and beautiful, is home for everyone who will ever live.',
        ],
      ],
    },
  ],
  keyExpressions: [
    { text: 'the third rock from the day star' },
    { text: 'the one place in all the sky where we know for sure there is life' },
    { text: 'thinner, next to the whole world, than the paint on a ball', partId: 'stone-skin' },
    { text: 'a deep sea of slow stone', partId: 'hot-middle' },
    { text: 'burned and turned without rest', partId: 'turning-heart' },
    { text: 'seven of every ten parts of the world', partId: 'blue-water' },
    { text: 'slower than grass grows', partId: 'dry-lands' },
    { text: 'like the light on a wet stone', partId: 'air-skin' },
    { text: 'the wall that turns away the day star’s wind', partId: 'power-field' },
  ],
  flow: [
    { partIds: ['stone-skin'], sentenceRef: 4, caption: 'We live on the stone skin — a few tens of miles of rock, thinner than the paint on a ball.' },
    { partIds: ['hot-middle'], sentenceRef: 5, caption: 'Under it flows the hot middle — a sea of slow stone, carrying the skin above it.' },
    { partIds: ['turning-heart'], sentenceRef: 6, caption: 'At the center burns the turning heart — iron, hotter than the face of the day star, turning without rest.' },
    { partIds: ['air-skin'], sentenceRef: 9, caption: 'Over the ground and sea lies the air skin — miles of gases, holding heat in and the black of space out.' },
    { partIds: ['power-field'], sentenceRef: 10, caption: 'And the turning heart makes the power field — the wall that turns away the day star’s wind.' },
  ],
  color: '#0EA5E9',
}
