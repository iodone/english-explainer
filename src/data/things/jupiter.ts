import type { ThingData } from '../types'

export const jupiter: ThingData = {
  id: 'jupiter',
  slug: 'jupiter',
  simpleName: 'The Big Brother',
  realName: 'Jupiter',
  category: 'space',
  funFacts: [
    'The great storm is wider than our whole world — and it has been spinning for so long that no person alive has ever seen the big brother without it.',
    'It has a force around it, like the one around a magnet, but about 20,000 times stronger than the one around our world — the biggest force of any planet.',
    'Because it turns so fast, its middle moves at almost 28,000 miles an hour — no planet in the sky spins faster.',
  ],
  parts: [
    { id: 'big-ball', label: 'big ball', realName: 'Planet Body', position: [0, 0, 0], finish: 'hull' },
    { id: 'cloud-lines', label: 'cloud lines', realName: 'Cloud Bands', position: [0, 0.35, 0], finish: 'cold' },
    { id: 'red-eye', label: 'red eye', realName: 'Great Red Spot', position: [0.3, -0.28, 0.5], finish: 'warning' },
    { id: 'fire-moon', label: 'fire moon', realName: 'Io', position: [1.18, 0.42, -0.25], finish: 'cold' },
    { id: 'ice-moon', label: 'ice moon', realName: 'Europa', position: [1.05, 0.05, -0.45], finish: 'titanium' },
    { id: 'small-ring', label: 'small ring', realName: 'Jupiter Ring', position: [0, 0, 0], finish: 'cold' },
    { id: 'glow-ring', label: 'glow ring', realName: 'Aurora', position: [0, 0.5, 0], finish: 'cold' },
  ],
  article: [
    {
      sentences: [
        [
          'The big brother is the biggest ',
          { text: 'planet', dict: 'planet' },
          ' in our sky — a huge ',
          { text: 'big ball', part: 'big-ball' },
          ' of gas and wind, more than twice as heavy as every other planet put together.',
        ],
        [
          'You could line up 11 of our worlds across its middle, and more than 1,300 of our worlds would fit inside it — yet from far away, ',
          { text: 'Jupiter', dict: 'jupiter' },
          ' looks like just a bright star in the night sky.',
        ],
        [
          'It runs around the sun once in almost 12 of our years — but it turns all the way around in less than 10 hours, the fastest turn of any planet.',
        ],
      ],
    },
    {
      sentences: [
        [
          'Its face is cut into long ',
          { text: 'cloud lines', part: 'cloud-lines' },
          ' of light and dark cloud, running side by side like the lines on a hand, pushed by winds past 300 miles an hour.',
        ],
        [
          'In the south turns the ',
          { text: 'red eye', part: 'red-eye' },
          ' — the great storm — a spinning eye of cloud wider than our whole world, watched by people on Earth for almost 200 years.',
        ],
        [
          'Deep inside, there is no ground at all: the gas grows thicker and thicker the deeper you go, until it turns into a hot, moving sea of metal — there is no place to stand.',
        ],
        [
          'It gives off more heat than it takes from the sun — almost a star that failed — and if it had been about 80 times heavier, it would have become one.',
        ],
      ],
    },
    {
      sentences: [
        [
          'Around it runs a ',
          { text: 'small ring', part: 'small-ring' },
          ' — a thin, dark circle made of tiny pieces, so hard to see that no one knew it was there until machines flew out to look.',
        ],
        [
          'Its ',
          { text: 'fire moon', part: 'fire-moon' },
          ' is the busiest fire place in the sky — a yellow world with more than 400 fire mountains, some throwing hot rock higher than any mountain on our world.',
        ],
        [
          'Its ',
          { text: 'ice moon', part: 'ice-moon' },
          ' keeps an ',
          { text: 'ocean', dict: 'ocean' },
          ' under its ice — more water than all the seas of our world — and some people think small living things might make their home there.',
        ],
        [
          'More than 90 other moons run around it, big and small — a whole family of worlds, and some of them are bigger than the smallest planet going around the sun.',
        ],
      ],
    },
    {
      sentences: [
        [
          'At its top and bottom, the ',
          { text: 'glow ring', part: 'glow-ring' },
          ' lights up the sky — great circles of dancing light, made of the same flying bits that make the lights dance at the top of our world.',
        ],
        [
          'The big brother is loud, too: its storms send out radio noise, and long before any machine flew there, radios on Earth could hear it — the loudest voice in the sky after our sun.',
        ],
        [
          'From far away it looks calm and quiet, a slow bright light crossing the night — but up close it is nothing but storms, turning fast, louder than anything, holding its whole family of moons in one wide hand.',
        ],
      ],
    },
  ],
  keyExpressions: [
    { text: 'a huge ball of gas and wind' },
    { text: 'more than twice as heavy as every other planet put together' },
    { text: 'more than 1,300 of our worlds would fit inside', partId: 'big-ball' },
    { text: 'running side by side like the lines on a hand', partId: 'cloud-lines' },
    { text: 'a spinning eye of cloud wider than our whole world', partId: 'red-eye' },
    { text: 'a thin, dark circle made of tiny pieces', partId: 'small-ring' },
    { text: 'a yellow world with more than 400 fire mountains', partId: 'fire-moon' },
    { text: 'an ocean under its ice, more water than all the seas of our world', partId: 'ice-moon' },
    { text: 'great circles of dancing light', partId: 'glow-ring' },
  ],
  flow: [
    { partIds: ['big-ball'], sentenceRef: 0, caption: 'First the big ball — a huge ball of gas and wind, more than twice as heavy as every other planet put together.' },
    { partIds: ['cloud-lines'], sentenceRef: 3, caption: 'Its face is cut into cloud lines — light and dark rows of cloud, running side by side like the lines on a hand.' },
    { partIds: ['red-eye'], sentenceRef: 4, caption: 'In the south turns the red eye — the great storm, a spinning eye of cloud wider than our whole world.' },
    { partIds: ['fire-moon'], sentenceRef: 8, caption: 'Around it runs the fire moon — a yellow world with more than 400 fire mountains, the busiest fire place in the sky.' },
    { partIds: ['ice-moon'], sentenceRef: 9, caption: 'And beside it, the ice moon — keeping an ocean under its ice, more water than all the seas of our world.' },
  ],
  color: '#B91C1C',
}
