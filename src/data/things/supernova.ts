import type { ThingData } from '../types'

export const supernova: ThingData = {
  id: 'supernova',
  slug: 'supernova',
  simpleName: 'The Star’s Last Flash',
  realName: 'Supernova',
  category: 'space',
  funFacts: [
    'Almost 1,000 years ago, sky watchers found a new star, bright enough to see in the day — the dust from that flash is still up there, still growing wider.',
    'What is left in the middle can become a tiny star that turns 700 times every second — the fastest turning thing we know of.',
    'Without supernovas, there would be no iron for our blood, no gold for rings, no new suns — the sky would be a much emptier place.',
  ],
  parts: [
    { id: 'iron-heart', label: 'iron heart', realName: 'Iron Core', position: [0, 0.02, 0], finish: 'cold' },
    { id: 'big-flash', label: 'big flash', realName: 'Peak Burst', position: [0.2, 0.16, 0], finish: 'warning' },
    { id: 'flash-rings', label: 'flash rings', realName: 'Shock Rings', position: [-0.16, 0.11, 0], finish: 'cold' },
    { id: 'push-waves', label: 'push waves', realName: 'Pressure Waves', position: [-0.35, -0.13, 0], finish: 'cold' },
    { id: 'flying-bits', label: 'flying bits', realName: 'Ejecta', position: [0.3, 0.24, 0], finish: 'titanium' },
    { id: 'star-dust', label: 'star dust', realName: 'Remnant Cloud', position: [0.42, -0.24, 0], finish: 'hull' },
    { id: 'new-stars', label: 'new stars', realName: 'Second-Generation Stars', position: [0.34, -0.08, 0], finish: 'cold' },
  ],
  article: [
    {
      sentences: [
        ['A star can live for 1,000,000,000 years and more, burning fuel and giving light — but for the biggest ones, the end comes fast.'],
        [
          'When that end comes, the star does not just go dark — it goes out with the biggest flash in the sky: a ',
          { text: 'supernova', dict: 'supernova' },
          '.',
        ],
        ['For a few weeks, one dying star can burn brighter than a whole star city put together.'],
      ],
    },
    {
      sentences: [
        ['The story starts deep inside, where the star has burned so long that its heart has turned to iron — the one metal that will not burn.'],
        [
          'In less than a second, the heart falls in on itself, and the whole star ',
          { text: 'explodes', dict: 'explode' },
          '.',
        ],
        [
          'What is left in the middle is the ',
          { text: 'iron heart', part: 'iron-heart', dict: 'iron' },
          ' — a tiny, hard ball: heavier than the sun, yet no wider than a city.',
        ],
        [
          'Around it, the ',
          { text: 'big flash', part: 'big-flash' },
          ' breaks out — light past counting, brighter than a whole star city of suns.',
        ],
      ],
    },
    {
      sentences: [
        [
          'The flash runs out in rings: first the ',
          { text: 'flash rings', part: 'flash-rings' },
          ', then wider and wider ',
          { text: 'push waves', part: 'push-waves' },
          ' that press the gas they meet.',
        ],
        [
          'Behind the waves fly the ',
          { text: 'flying bits', part: 'flying-bits' },
          ' — the star’s own body, cut to pieces: iron, gold, silver, and more: the very pieces that you, and everything around you, are made of.',
        ],
        ['The bits fly out faster than anything made by people — no flying machine and no rocket has ever moved that fast.'],
        [
          'After the flash, what is left of the star spreads out as a slow ',
          { text: 'star dust', part: 'star-dust' },
          ' — a cloud of gas and dust, glowing soft for 100,000 years.',
        ],
      ],
    },
    {
      sentences: [
        ['And here is the best part: inside that dust, ', { text: 'new stars', part: 'new-stars' }, ' are born.'],
        ['Our own sun is one of them — made, 5,000,000,000 years ago, from the dust of older stars that died in flashes like this.'],
        ['So when you look up at night, remember: every bit of iron in your blood, every piece of gold in a ring, was made in the last flash of a dying star.'],
      ],
    },
  ],
  flow: [
    { partIds: ['iron-heart'], sentenceRef: 5, caption: 'Deep inside the old star, the heart has turned to iron — the one metal that will not burn.' },
    { partIds: ['big-flash'], sentenceRef: 6, caption: 'The heart falls in, and the whole star explodes: the big flash breaks out, brighter than a star city.' },
    { partIds: ['flash-rings', 'push-waves'], sentenceRef: 7, caption: 'The flash runs out in rings — flash rings first, then wider and wider push waves.' },
    { partIds: ['flying-bits'], sentenceRef: 8, caption: 'Behind the waves fly the flying bits — iron, gold, silver: the pieces everything is made of.' },
    { partIds: ['star-dust', 'new-stars'], sentenceRef: 10, caption: 'The dust spreads out and glows for 100,000 years — and inside it, new stars are born.' },
  ],
  keyExpressions: [
    { text: 'burned so long that its heart turned to iron', partId: 'iron-heart' },
    { text: 'light past counting, brighter than a whole star city', partId: 'big-flash' },
    { text: 'runs out in rings', partId: 'flash-rings' },
    { text: 'wider and wider, pressing the gas they meet', partId: 'push-waves' },
    { text: 'the very pieces that you are made of', partId: 'flying-bits' },
    { text: 'a slow cloud of gas and dust, glowing soft', partId: 'star-dust' },
    { text: 'inside that dust, new stars are born', partId: 'new-stars' },
    { text: 'goes out with the biggest flash in the sky' },
    { text: 'no flying machine and no rocket has ever moved that fast' },
  ],
  color: '#C3B1FF',
}
