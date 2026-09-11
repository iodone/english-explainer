import type { ThingData } from '../types'

export const nebula: ThingData = {
  id: 'nebula',
  slug: 'nebula',
  simpleName: 'The Star Cloud',
  realName: 'Nebula',
  category: 'space',
  funFacts: [
    'One of the biggest is wider than a hundred star systems laid side by side — and it is still growing.',
    'Almost all of a nebula is empty space: the gas is thinner than any air on Earth, yet the whole cloud can be heavier than many suns.',
    'The pretty colors you see in pictures are not what your eye would see: a camera has to watch one spot for hours to catch enough light to show them.',
  ],
  parts: [
    { id: 'gas-cloud', label: 'gas cloud', realName: 'Molecular Cloud', position: [-0.08, 0.05, 0], finish: 'hull' },
    { id: 'baby-stars', label: 'baby stars', realName: 'Protostars', position: [0.2, -0.02, 0], finish: 'warning' },
    { id: 'dust-road', label: 'dust road', realName: 'Dust Lane', position: [0, -0.06, 0], finish: 'titanium' },
    { id: 'dark-heart', label: 'dark heart', realName: 'Dense Core', position: [0.14, -0.12, 0], finish: 'cold' },
    { id: 'star-wind', label: 'star wind', realName: 'Stellar Wind', position: [0.32, 0.08, 0], finish: 'cold' },
    { id: 'light-ring', label: 'light ring', realName: 'Emission Ring', position: [0.2, -0.02, 0], finish: 'cold' },
    { id: 'old-star', label: 'old star', realName: 'Dying Star', position: [-0.42, 0.18, 0], finish: 'cold' },
  ],
  article: [
    {
      sentences: [
        ['Far out in space, between the stars, sit great clouds of gas and dust.'],
        [
          'When a cloud like this is big enough and thick enough, it starts to ',
          { text: 'glow', dict: 'glow' },
          ' — and then it gets its own name: a ',
          { text: 'nebula', dict: 'nebula' },
          '.',
        ],
        ['Each one is a place where new suns are made.'],
      ],
    },
    {
      sentences: [
        [
          'The story starts with the ',
          { text: 'gas cloud', part: 'gas-cloud', dict: 'gas' },
          ' itself — a huge, cold spread of gas and dust, thinner than any air, yet heavier than many suns put together.',
        ],
        [
          'Through the middle runs a long ',
          { text: 'dust road', part: 'dust-road' },
          ', where the dust is so thick that it hides the stars behind it.',
        ],
        [
          'In one corner lies the ',
          { text: 'dark heart', part: 'dark-heart' },
          ', where the gas pulls together, more and more, year after year, until the middle gets so heavy that it lights up.',
        ],
        [
          'That is where the ',
          { text: 'baby stars', part: 'baby-stars' },
          ' live — new suns growing inside the cold gas, each one eating the gas around it and getting bigger every day.',
        ],
      ],
    },
    {
      sentences: [
        ['But a new star does not stay hidden for long.'],
        [
          'Its light, and the ',
          { text: 'star wind', part: 'star-wind' },
          ' of tiny pieces that flies out from it, push the gas away and clear the space around the new star.',
        ],
        [
          'Where the wind meets the gas, it lights up a ',
          { text: 'light ring', part: 'light-ring' },
          ' — a round wall of glowing gas, like a door opening around the star.',
        ],
        [
          'Sometimes the story starts at the other end: an ',
          { text: 'old star', part: 'old-star' },
          ', at the end of its life, blows its outer skin out into space, and that skin lights up as a ring of glowing gas too.',
        ],
      ],
    },
    {
      sentences: [
        ['Given time, the star wind clears the cloud away, and only the new stars are left.'],
        ['So a nebula is both a start and an end: it turns gas into stars, and its stars turn gas into light, for years beyond counting.'],
        ['Look up on a clear, dark night, far from city lights, and you may see one: a soft gray spot, wider than a hundred star systems, busy making suns.'],
      ],
    },
  ],
  flow: [
    { partIds: ['gas-cloud'], sentenceRef: 3, caption: 'A huge gas cloud — cold gas and dust, spread wide between the stars.' },
    { partIds: ['dark-heart'], sentenceRef: 5, caption: 'In the dark heart, the gas pulls together, more and more, year after year.' },
    { partIds: ['baby-stars'], sentenceRef: 6, caption: 'The middle gets so heavy that it lights up: baby stars, growing on the gas around them.' },
    { partIds: ['star-wind'], sentenceRef: 8, caption: 'The new stars push out light and a star wind, driving the gas away.' },
    { partIds: ['light-ring'], sentenceRef: 9, caption: 'Where the wind hits the cloud, it lights a ring of glowing gas — the light ring.' },
  ],
  keyExpressions: [
    { text: 'a huge, cold spread of gas and dust', partId: 'gas-cloud' },
    { text: 'pulls together, more and more, year after year', partId: 'dark-heart' },
    { text: 'new suns growing inside the cold gas', partId: 'baby-stars' },
    { text: 'so thick that it hides the stars behind it', partId: 'dust-road' },
    { text: 'push the gas away and clear the space', partId: 'star-wind' },
    { text: 'a round wall of glowing gas, like a door opening', partId: 'light-ring' },
    { text: 'blows its outer skin out into space', partId: 'old-star' },
    { text: 'turns gas into stars' },
    { text: 'for years beyond counting' },
  ],
  color: '#9BF6FF',
}
