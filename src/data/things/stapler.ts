import type { ThingData } from '../types'

export const stapler: ThingData = {
  id: 'stapler',
  slug: 'stapler',
  simpleName: 'Pin Presser',
  realName: 'Stapler',
  category: 'home',
  funFacts: [
    'Doctors close cuts with tiny pins fired by machines like this one — same idea, much smaller pins.',
    'There are staplers that use no pins at all: they cut a small door in the paper and push it back through the hole, so the pages hold themselves.',
    'The first machines like this were heavy iron things that held only one pin — after every hit, you put in the next by hand.',
  ],
  parts: [
    { id: 'long-arm', label: 'Long Arm', realName: 'Handle', position: [-1.15, 0.75, 0], finish: 'cold' },
    { id: 'turn-point', label: 'Turn Point', realName: 'Hinge', position: [0.9, 0.4, 0], finish: 'cold' },
    { id: 'push-head', label: 'Push Head', realName: 'Driver', position: [-1.0, -0.05, 0], finish: 'warning' },
    { id: 'pin-room', label: 'Pin Room', realName: 'Staple Magazine', position: [-0.5, -0.6, 0], finish: 'hull' },
    { id: 'push-spring', label: 'Push Spring', realName: 'Magazine Spring', position: [0.8, -0.6, 0], finish: 'cold' },
    { id: 'bend-plate', label: 'Bend Plate', realName: 'Anvil', position: [-1.2, -0.55, 0], finish: 'titanium' },
  ],
  article: [
    {
      sentences: [
        [
          'A ',
          { text: 'stapler', dict: 'stapler' },
          ' is a small machine that drives little metal ',
          { text: 'pins', dict: 'pin' },
          ' through paper and bends their legs under, so the pages hold together.',
        ],
        ['It looks like one quiet box, but inside there is a pusher, a store room, and a bender, all sharing one body.'],
        ['The power is your hand: press down once, and everything inside moves together.'],
      ],
    },
    {
      sentences: [
        [
          'When you press the ',
          { text: 'long arm', part: 'long-arm' },
          ', it turns around the ',
          { text: 'turn point', part: 'turn-point' },
          ' and brings the ',
          { text: 'push head', part: 'push-head' },
          ' down hard — a small push on the long end becomes a big push on the short end.',
        ],
        [
          'The ',
          { text: 'push head', part: 'push-head' },
          ' strikes the first pin in the ',
          { text: 'pin room', part: 'pin-room' },
          ' and drives it down through the paper — two sharp legs cutting their way.',
        ],
        [
          'Under the paper waits the ',
          { text: 'bend plate', part: 'bend-plate' },
          ', with two low spots: the pin’s two legs fall into them and bend toward each other, locking the pages from the far side.',
        ],
        [
          'Let go, and a spring lifts the arm back up while the ',
          { text: 'push spring', part: 'push-spring' },
          ' slides the next pin forward, ready for the next hit.',
        ],
      ],
    },
    {
      sentences: [
        [
          'The ',
          { text: 'pin room', part: 'pin-room' },
          ' holds a whole row of pins in a line, pushed from behind by the ',
          { text: 'push spring', part: 'push-spring' },
          '.',
        ],
        ['When the room runs empty, you pop the back open and drop in a new row — the machine does the rest by itself.'],
        ['The low spots can face two ways: turned in, they bend the legs flat so the pages hold for good; turned out, they bend the legs away, so a pull takes the pin out without tearing the paper.'],
        ['Press with nothing under the mouth, and the pin comes out straight and open — the bending is the work of the ', { text: 'bend plate', part: 'bend-plate' }, ', and it is not there.'],
      ],
    },
    {
      sentences: [
        ['Before machines like this, joining pages was slow hand work: a small sharp point and a line, through and through, page after page.'],
        ['The same idea, made much bigger, is used on building sites — big machines drive huge pins and bend their legs to hold wood together.'],
        ['A ', { text: 'lever', dict: 'lever' }, ', a spring, a row of pins and a plate with two low spots — press once, and many pages become one.'],
      ],
    },
  ],
  flow: [
    { partIds: ['long-arm', 'turn-point'], sentenceRef: 3, caption: 'A small push on the long end becomes a big push on the short end.' },
    { partIds: ['push-head'], sentenceRef: 4, caption: 'The push head strikes the first pin and drives it down through the paper.' },
    { partIds: ['bend-plate'], sentenceRef: 5, caption: 'The legs fall into the two low spots and bend toward each other, locking the pages.' },
    { partIds: ['push-spring'], sentenceRef: 6, caption: 'The push spring slides the next pin forward, ready for the next hit.' },
    { partIds: ['pin-room'], sentenceRef: 7, caption: 'A whole row of pins waits in the pin room, side by side.' },
  ],
  keyExpressions: [
    { text: 'drives little metal pins through paper' },
    { text: 'a pusher, a store room, and a bender' },
    { text: 'a small push becomes a big push', partId: 'long-arm' },
    { text: 'two sharp legs cutting their way', partId: 'push-head' },
    { text: 'bend toward each other', partId: 'bend-plate' },
    { text: 'locking the pages from the far side', partId: 'bend-plate' },
    { text: 'slides the next pin forward', partId: 'push-spring' },
    { text: 'a whole row of pins in a line', partId: 'pin-room' },
    { text: 'many pages become one' },
  ],
  color: '#A855F7',
}
