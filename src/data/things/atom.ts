import type { ThingData } from '../types'

export const atom: ThingData = {
  id: 'atom',
  slug: 'atom',
  simpleName: 'The Tiny Piece',
  realName: 'Atom',
  category: 'power',
  funFacts: [
    'A tiny piece is almost all nothing: if the heavy heart were a stone in the middle of a playing field, the flyers would be dust in the far seats — and everything between would be empty room. Stuff is nearly all not-there; you do not fall through the floor only because no two pieces will share the same room.',
    'Breaking one heavy heart of the 92-push-point stuff lets out as much power as burning 1,000,000 times its weight in wood: a small piece of the deep-fire stuff, too small to see, holds enough power to run a great ship for years on end — this is the deep power that power stations are built around.',
    'The heaviest kind ever found in the ground — the 92-push-point stuff — was named for a planet: the man who found it was naming new worlds in the sky at the same time, and reached for the newest one. His new stuff was only found later to hold the deepest fire there is.',
  ],
  parts: [
    { id: 'heavy-heart', label: 'heavy heart', realName: 'Nucleus', position: [0, 0, 0], finish: 'warning' },
    { id: 'push-points', label: 'push points', realName: 'Protons', position: [0.11, 0.05, 0], finish: 'cold' },
    { id: 'still-points', label: 'still points', realName: 'Neutrons', position: [0.02, 0.13, 0], finish: 'cold' },
    { id: 'light-flyers', label: 'light flyers', realName: 'Electrons', position: [0.28, 0.24, 0], finish: 'cold' },
    { id: 'near-road', label: 'near road', realName: 'Inner Electron Shell', position: [0.34, -0.05, 0], finish: 'titanium' },
    { id: 'far-road', label: 'far road', realName: 'Outer Electron Shell', position: [-0.62, 0, 0], finish: 'hull' },
    { id: 'pull-hands', label: 'pull hands', realName: 'Electromagnetic Attraction', position: [-0.25, -0.09, 0], finish: 'cold' },
  ],
  article: [
    {
      sentences: [
        [
          'The tiny piece is the smallest thing there is: everything you have ever seen or touched — water, stone, air, steel, the wood of a tree, your own body — is built out of tiny pieces, piece joined to piece, too small for any eye, too small even for most machines.',
        ],
        [
          'In one drop of water there are more tiny pieces than there are drops of water in all the world’s seas — and each one is a little world of its own: a middle, a few moving parts, and almost nothing but empty room inside.',
        ],
        [
          'It is the end of the cutting: cut anything in half, and half again, and again and again — sooner or later you come to a piece that will not cut any smaller, the smallest piece of the stuff you started with; that piece is the tiny piece, and its name, the ',
          { text: 'atom', dict: 'atom' },
          ', means just that: not able to be cut.',
        ],
      ],
    },
    {
      sentences: [
        [
          'In the middle of each one sits the ',
          { text: 'heavy heart', part: 'heavy-heart' },
          ': a tiny, hard ball 100,000 times smaller than the whole piece — a single stone in the middle of a playing field — and yet nearly all of the piece’s weight is pressed into that one small middle.',
        ],
        [
          'The heavy heart is built of two kinds of still smaller pieces: the ',
          { text: 'push points', part: 'push-points' },
          ', each carrying a bit of power that makes every one push every other one away, like the two same ends of a magnet pushed together; and the ',
          { text: 'still points', part: 'still-points' },
          ', their quiet brothers, that carry no push at all and only add weight.',
        ],
        [
          'What a stuff is — its kind — is set by counting push points: one push point makes the lightest gas there is; six make the stuff of every living thing; 26 make the metal of trains and ships; 92 make the heaviest kind found in the ground, the deep-fire stuff that power stations break apart for their heat.',
        ],
        [
          'Holding all those pushing points together in one ball takes a grip stronger than anything else in the world: a hold so strong that pulling a heavy heart apart lets out 1,000,000 times more power than burning the same weight of wood — the deep power that warms cities and that the day star itself runs on.',
        ],
      ],
    },
    {
      sentences: [
        [
          'Around the heavy heart fly the ',
          { text: 'light flyers', part: 'light-flyers' },
          ': pieces 2,000 times lighter than the heart-points, moving so fast that each one seems to be everywhere at once — a thick cloud of them, filling the empty room around the middle.',
        ],
        [
          'But their flying is not free: each flyer keeps to its own road, and the roads are set steps out from the heart — the ',
          { text: 'near road', part: 'near-road' },
          ' close in, the ',
          { text: 'far road', part: 'far-road' },
          ' farther out — a flyer may jump from one road to another, but never rest between.',
        ],
        [
          'The pull that keeps the flyers from flying away is the ',
          { text: 'pull hands', part: 'pull-hands' },
          ': the same power that makes the push points push, working the other way between push and flyer — a pull across the empty room, with no touching, holding the whole little world together like a quiet hand.',
        ],
        [
          'And this is where light comes from: when a flyer jumps from a far road down to a near one, it lets go of a little bit of power, and a piece of light flies out — every light ever lit, from the day star to a burning fire to the screen you may be reading on, is flyers falling between roads.',
        ],
      ],
    },
    {
      sentences: [
        [
          'Alone, one tiny piece is nearly nothing; the world is made by joining: the roads of one piece hold hands with the roads of another, and pieces join to pieces without end — two pieces of one kind with one of another make every drop of water; joined differently, the same few kinds make all the rest: every stuff, and every living thing, that there is.',
        ],
        [
          'The joining is the great game of stuff: the very same points that make the soft black heart of a pencil make, joined a different way, the hardest clear stone on earth — nothing changed but the joining, and soft becomes hard, black becomes clear.',
        ],
        [
          'So everything — every wave of the sea, every leaf, every star, and you, reading this — is tiny pieces joined together: each piece a middle of pushing points ringed by flying light, joined in shapes without end: the world is not made of things so much as it is made of tiny pieces, making things.',
        ],
      ],
    },
  ],
  keyExpressions: [
    { text: 'the smallest thing there is' },
    { text: 'more tiny pieces than there are drops of water in all the world’s seas' },
    { text: 'the end of the cutting' },
    { text: 'a single stone in the middle of a playing field', partId: 'heavy-heart' },
    { text: 'their quiet brothers', partId: 'still-points' },
    { text: 'set by counting push points', partId: 'push-points' },
    { text: 'everywhere at once', partId: 'light-flyers' },
    { text: 'set steps out from the heart', partId: 'near-road' },
    { text: 'a pull across the empty room, with no touching', partId: 'pull-hands' },
  ],
  flow: [
    { partIds: ['heavy-heart'], sentenceRef: 3, caption: 'In the middle sits the heavy heart — 100,000 times smaller than the piece, and nearly all its weight.' },
    { partIds: ['push-points', 'still-points'], sentenceRef: 4, caption: 'The heart is push points and still points — pushing points held together by the strongest grip there is.' },
    { partIds: ['light-flyers'], sentenceRef: 7, caption: 'Around it fly the light flyers — everywhere at once in the empty room.' },
    { partIds: ['near-road', 'far-road'], sentenceRef: 8, caption: 'Their roads are set steps out — the near road close in, the far road farther out.' },
    { partIds: ['pull-hands'], sentenceRef: 9, caption: 'And the pull hands hold it all — a pull across the empty room, with no touching.' },
  ],
  color: '#8B5CF6',
}
