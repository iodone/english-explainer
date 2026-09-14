import type { ThingData } from '../types'

export const spaceJunk: ThingData = {
  id: 'space-junk',
  slug: 'space-junk',
  simpleName: 'The Sky Trash',
  realName: 'Space debris',
  category: 'space',
  funFacts: [
    'There are more than 100,000 pieces of sky trash going round the ground right now.',
    'Some sky trash is very old — from things sent up more than 50 years ago.',
    'Sky trash goes very fast — fast enough to break a sky boat if it hits one.',
  ],
  parts: [
    { id: 'old-part', label: 'old part', realName: 'Dead satellite', position: [0, 0, 0], finish: 'hull' },
    { id: 'broken-piece', label: 'broken piece', realName: 'Fragment', position: [0.08, 0.04, 0], finish: 'cold' },
    { id: 'big-piece', label: 'big piece', realName: 'Spent rocket stage', position: [0, 0, -0.08], finish: 'titanium' },
    { id: 'small-piece', label: 'small piece', realName: 'Paint flake', position: [-0.06, 0.06, 0.04], finish: 'cold' },
    { id: 'round-part', label: 'round part', realName: 'Bolt', position: [0.04, -0.04, 0.06], finish: 'titanium' },
    { id: 'flat-piece', label: 'flat piece', realName: 'Solar panel fragment', position: [0.10, 0, -0.04], finish: 'cold' },
    { id: 'wire-piece', label: 'wire piece', realName: 'Cable fragment', position: [-0.04, -0.06, 0], finish: 'cold' },
  ],
  article: [
    {
      sentences: [
        [
          'This is ',
          { text: 'sky trash', dict: 'space-junk' },
          '. It is all the broken things that go round the ground in the sky.',
        ],
      ],
    },
    {
      sentences: [
        [
          'The ',
          { text: 'old part', part: 'old-part' },
          ' is a thing that was sent up to the sky a long time ago but does not work any more.',
        ],
        ['It just goes round and round the ground, doing nothing.'],
      ],
    },
    {
      sentences: [
        [
          'The ',
          { text: 'broken piece', part: 'broken-piece' },
          ' next to it broke off when two things hit each other in the sky.',
        ],
        [
          'The ',
          { text: 'big piece', part: 'big-piece' },
          ' behind is the bottom of a fire stick that was left behind.',
        ],
      ],
    },
    {
      sentences: [
        [
          'Even very small things like the ',
          { text: 'small piece', part: 'small-piece' },
          ' can be bad because they go so fast.',
        ],
        [
          'The ',
          { text: 'round part', part: 'round-part' },
          ' is a very small piece of metal that fell off a long time ago.',
        ],
      ],
    },
    {
      sentences: [
        [
          'The ',
          { text: 'flat piece', part: 'flat-piece' },
          ' is a broken piece of the thing that makes power from the sun.',
        ],
        [
          'The ',
          { text: 'wire piece', part: 'wire-piece' },
          ' is a piece of wire that came off a broken thing.',
        ],
      ],
    },
    {
      sentences: [
        ['Sky trash is a very big problem because there is more and more of it all the time.'],
        ['People are working on ways to clean up the sky trash before it makes the sky too bad.'],
      ],
    },
  ],
  flow: [
    { partIds: ['old-part'], sentenceRef: 1, caption: 'Old part is a broken thing going round the ground.' },
    { partIds: ['broken-piece', 'big-piece'], sentenceRef: 4, caption: 'Broken piece from a hit; big piece from a fire stick.' },
    { partIds: ['small-piece', 'round-part'], sentenceRef: 6, caption: 'Small pieces are bad because they go fast.' },
    { partIds: ['flat-piece', 'wire-piece'], sentenceRef: 8, caption: 'Flat piece and wire piece are from broken things.' },
    { partIds: ['old-part'], sentenceRef: 10, caption: 'Sky trash is a big problem — more all the time.' },
  ],
  keyExpressions: [
    { text: 'sky trash', partId: 'old-part' },
    { text: 'broken things that go round the ground', partId: 'broken-piece' },
    { text: 'does not work any more', partId: 'old-part' },
    { text: 'broke off when two things hit each other', partId: 'broken-piece' },
    { text: 'left behind', partId: 'big-piece' },
    { text: 'can be bad because they go so fast', partId: 'small-piece' },
    { text: 'more and more of it all the time', partId: 'old-part' },
  ],
  color: '#808080',
}