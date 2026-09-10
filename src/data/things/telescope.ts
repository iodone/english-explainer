import type { ThingData } from '../types'

export const telescope: ThingData = {
  id: 'telescope',
  slug: 'telescope',
  simpleName: 'Sky Eye',
  realName: 'Telescope',
  category: 'space',
  funFacts: [
    'In space, a telescope works even better than on a mountain top: above the air, the sky does not move and the pictures come out sharp — that is why the big space telescope hangs far above us.',
    'Your own eyes are little telescopes too: each has a glass inside that bends light to a point — a telescope just puts more glass in front of them.',
    'The biggest telescopes do not look across the sky so much as back in time: some of the things they see sent their light before the Earth had any people on it — light older than the whole human story.',
  ],
  parts: [
    { id: 'far-glass', label: 'Far Glass', realName: 'Object Lens', position: [-1.6, 1.0, 0], finish: 'titanium' },
    { id: 'long-tube', label: 'Long Tube', realName: 'Optical Tube', position: [-0.4, 1.1, 0], finish: 'hull' },
    { id: 'eye-glass', label: 'Eye Glass', realName: 'Eyepiece', position: [1.75, 0.95, 0], finish: 'cold' },
    { id: 'turn-bed', label: 'Turn Bed', realName: 'Equatorial Mount', position: [0.75, -0.35, 0], finish: 'warning' },
    { id: 'three-legs', label: 'Three Legs', realName: 'Tripod', position: [-0.95, -0.9, 0], finish: 'cold' },
    { id: 'sky-finder', label: 'Sky Finder', realName: 'Finder Scope', position: [-0.2, 1.45, 0], finish: 'cold' },
  ],
  article: [
    {
      sentences: [
        [
          'A ',
          { text: 'telescope', dict: 'telescope' },
          ' is a long ',
          { text: 'tube', dict: 'tube' },
          ' that brings the sky close: it catches far more light than your eye ever could, and puts it all in one small picture.',
        ],
        [
          'The stars and the ',
          { text: 'planets', dict: 'planet' },
          ' are far bigger than anything on Earth, but they are so far away that only a tiny bit of their light lands in your eye — and a tiny bit of light makes a picture too small for your eye to use.',
        ],
        ['A telescope answers with size: the bigger the glass at the front, the more light it can catch, and the more it can show you.'],
      ],
    },
    {
      sentences: [
        [
          'At the front sits the ',
          { text: 'far glass', part: 'far-glass' },
          ', a round piece of glass cut with just the right bend: light passing through it bends, and all the light from one star comes together to one point inside the tube.',
        ],
        ['There the light makes a real little picture of the sky — and, strange to say, a picture standing on its head: the moon’s top points down.'],
        [
          'At the back, the ',
          { text: 'eye glass', part: 'eye-glass' },
          ' — a little glass that makes small things look big — takes that tiny picture and blows it up to a size your eye can really use.',
        ],
        [
          'Between them, the ',
          { text: 'long tube', part: 'long-tube' },
          ' holds the two glasses in a straight line and keeps every other light out, so the picture stays clean and sharp.',
        ],
      ],
    },
    {
      sentences: [
        [
          'Pointing is its own small art: you turn the tube on the ',
          { text: 'turn bed', part: 'turn-bed' },
          ', and the turn bed rides on ',
          { text: 'three legs', part: 'three-legs' },
          ', still as a rock — a shaking picture is no picture at all.',
        ],
        [
          'A small ',
          { text: 'sky finder', part: 'sky-finder' },
          ' sits on the side, a little wide-eye tube you look through first to find your star, before you look at it close.',
        ],
        ['And size is everything: a glass as wide as your eye shows you the moon; a glass as wide as a car shows you whole star clouds, so far away that their light left them before there were any people on Earth.'],
        ['With a big enough telescope, you do not just look far — you look back in time, because light takes real time to cross the sky.'],
      ],
    },
    {
      sentences: [
        ['The first ones, four hundred years ago, were no better than a pair of reading glasses — yet with them, one man saw that the biggest planet has moons of its own, going around it like a little family.'],
        ['The biggest ones today hold mirrors as wide as a house, on mountain tops above the clouds, and catch light from the very edge of the seeing world.'],
        ['A long tube, two bent glasses, three still legs — point it well, and the whole sky comes to your eye.'],
      ],
    },
  ],
  flow: [
    { partIds: ['far-glass'], sentenceRef: 3, caption: 'Light bends through the far glass and comes together to one point.' },
    { partIds: ['eye-glass'], sentenceRef: 5, caption: 'The eye glass takes the tiny picture and blows it up for your eye.' },
    { partIds: ['turn-bed', 'three-legs'], sentenceRef: 7, caption: 'You turn the tube on its turn bed; three legs hold it still.' },
    { partIds: ['sky-finder'], sentenceRef: 8, caption: 'A small sky finder helps you find your star before you look close.' },
    { partIds: ['far-glass'], sentenceRef: 9, caption: 'A bigger glass catches more light — and older light.' },
  ],
  keyExpressions: [
    { text: 'brings the sky close' },
    { text: 'the bigger the glass, the more light it can catch', partId: 'far-glass' },
    { text: 'light passing through it bends', partId: 'far-glass' },
    { text: 'a picture standing on its head' },
    { text: 'blows it up to a size your eye can really use', partId: 'eye-glass' },
    { text: 'keeps every other light out', partId: 'long-tube' },
    { text: 'still as a rock', partId: 'three-legs' },
    { text: 'you look back in time' },
    { text: 'the whole sky comes to your eye' },
  ],
  color: '#F97316',
}
