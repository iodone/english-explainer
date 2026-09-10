import type { ThingData } from '../types'

export const moon: ThingData = {
  id: 'moon',
  slug: 'moon',
  simpleName: 'The Night Ball',
  realName: 'The Moon',
  category: 'space',
  funFacts: [
    'The boot marks of the walkers, and the wheel marks of their little car, will still be sharp in 10,000,000 years — for with no wind and no rain, nothing there ever rubs them out.',
    'Seen from the night ball, the earth also has faces: full earth, half earth, new earth — and the first walkers stood in its dust and looked up at a half-lit home world hanging in a black sky.',
    'When people let old landing machines fall onto the ball, its whole body kept shaking for hours — for dry rock carries shaking far, and the night ball is dry all the way through.',
  ],
  parts: [
    { id: 'far-face', label: 'far face', realName: 'Far Side', position: [-1.07, 0.1, 0], finish: 'cold' },
    { id: 'dark-lands', label: 'dark lands', realName: 'Maria (Old Lava Seas)', position: [-0.3, 0.45, 0], finish: 'warning' },
    { id: 'ring-mountains', label: 'ring mountains', realName: 'Craters', position: [-0.5, -0.35, 0], finish: 'titanium' },
    { id: 'moon-dust', label: 'moon dust', realName: 'Regolith', position: [-0.4, 0.1, 0], finish: 'cold' },
    { id: 'sea-pull', label: 'sea pull', realName: 'Tides (Gravity)', position: [0.6, 0.1, 0], finish: 'cold' },
    { id: 'rock-ball', label: 'rock ball', realName: 'The Moon Itself', position: [-0.4, 0.1, 0], finish: 'hull' },
    { id: 'steps-place', label: 'steps place', realName: 'Apollo Landing Site', position: [-0.15, -0.42, 0], finish: 'cold' },
  ],
  article: [
    {
      sentences: [
        [
          'The night ball is the great round rock that goes around the earth, hanging in our sky, bright at night with second-hand light — for it makes no light of its own: it is a mirror for the sun.',
        ],
        [
          'It is far away in a way the mind cannot hold: to drive there would take about half a year of driving, day and night without stopping — yet it is still the closest world to ours, and the only other world people have ever walked on.',
        ],
        [
          'It was born of a hit: when the earth was young, another world ran into it, and the night ball grew from the pieces thrown into the sky — which is why it is made of much the same rock as the ground under your feet.',
        ],
      ],
    },
    {
      sentences: [
        [
          'Its face never changes for us: the ball turns exactly once each time it goes around the earth, so it always shows us the same side, while the ',
          { text: 'far face', part: 'far-face' },
          ', the half turned away, was not seen by anyone until machines flew around to look at it.',
        ],
        [
          'The face we know wears its ',
          { text: 'dark lands', part: 'dark-lands' },
          ': wide flat fields of dark rock, spread by fires from inside and turned hard long ago — the first sky watchers took them for seas and named them so, and we still call them seas, though there is no water in them.',
        ],
        [
          'Everywhere else is torn with ',
          { text: 'ring mountains', part: 'ring-mountains' },
          ': round walls of thrown-up rock, one inside another, cut by falling sky stones across more than 4,000,000,000 years — for with no wind and no rain to wear them away, every hit that ever happened is still there to be seen.',
        ],
        [
          'Over it all lies the ',
          { text: 'moon dust', part: 'moon-dust' },
          ': a deep soft cover of tiny broken bits, ground finer than sand by the small hits of ages — it holds the shape of every boot mark, and nothing ever blows it away.',
        ],
      ],
    },
    {
      sentences: [
        [
          'The strangest thing the night ball does is done to the sea: the ',
          { text: 'sea pull', part: 'sea-pull' },
          ' lifts the water of the whole sea as it passes, so the sea rises and falls twice a day — the breathing of the ',
          { text: 'tides', dict: 'tide' },
          ', the oldest clock in the sky.',
        ],
        [
          'Its shape plays games with us: as it walks its ',
          { text: 'orbit', dict: 'orbit' },
          ', we see more and more of its lit side, then less and less, so the ',
          { text: 'rock ball', part: 'rock-ball' },
          ' seems to grow from a thin smile to a full round face and back, once a month — the very circle our months were first counted by.',
        ],
        [
          'Sometimes the game turns serious: when the earth stands exactly between the sun and the ball, the whole face turns red for an hour; and when the ball stands before the sun, day turns to night for minutes — an ',
          { text: 'eclipse', dict: 'eclipse' },
          ', the meeting of the shadows, which people cross half the world to stand inside.',
        ],
        [
          '12 people have walked there: their ',
          { text: 'steps place', part: 'steps-place' },
          ' is still sharp, with a little car, a small cloth on a standing stick, and a mirror machine that still throws our own light back to us, so that any night we can tell how far away the night ball is — and find it walking away from us by about as much as a finger is wide, every year.',
        ],
      ],
    },
    {
      sentences: [
        [
          'Its pull holds us up as well: without it the earth would roll like a slowing top, tipping over as it turned, until its north and south traded places and the lands burned and iced by turns — the night ball has been holding our world straight since long before anything lived here.',
        ],
        [
          'And its size in our sky is a perfect chance: the sun is 400 times wider and 400 times farther, so the two round faces look the same size to us — which is exactly why, in an eclipse, the bright sun can be covered by the dark ball, edge to edge, with a ring of fire showing round it.',
        ],
        [
          'A mirror, a clock, a sea-mover, a story of every falling stone since the world was young — the night ball is all of these at once, and it hangs over every night there has ever been.',
        ],
      ],
    },
  ],
  flow: [
    { partIds: ['dark-lands'], sentenceRef: 4, caption: 'Dark lands: flat fields of old dark rock, spread by fires from inside long ago.' },
    { partIds: ['ring-mountains'], sentenceRef: 5, caption: 'Ring mountains: walls of thrown-up rock, cut by falling sky stones, kept forever.' },
    { partIds: ['moon-dust'], sentenceRef: 6, caption: 'A deep soft cover of broken bits, holding every boot mark.' },
    { partIds: ['sea-pull'], sentenceRef: 7, caption: 'The sea pull lifts the sea as it passes — the sea rises and falls twice a day.' },
    { partIds: ['steps-place'], sentenceRef: 10, caption: 'The steps place: boot marks, a little car, a cloth on a stick, and a mirror that still answers our light.' },
  ],
  keyExpressions: [
    { text: 'second-hand light' },
    { text: 'always shows us the same side', partId: 'far-face' },
    { text: 'seas without water', partId: 'dark-lands' },
    { text: 'cut by falling sky stones', partId: 'ring-mountains' },
    { text: 'ground finer than sand', partId: 'moon-dust' },
    { text: 'the breathing of the tides', partId: 'sea-pull' },
    { text: 'from a thin smile to a full round face', partId: 'rock-ball' },
    { text: 'the meeting of the shadows' },
    { text: 'holding our world straight' },
  ],
  color: '#A5B4FC',
}
