import type { ThingData } from '../types'

export const doorLock: ThingData = {
  id: 'door-lock',
  slug: 'door-lock',
  simpleName: 'The Door Lock',
  realName: 'Door lock',
  category: 'home',
  funFacts: [
    'A door lock keeps people who should not come in from getting through the door.',
    'The first door locks were made more than 4,000 years ago.',
    'Some new door locks do not need a piece of metal — they can read your hand or face.',
  ],
  parts: [
    { id: 'body', label: 'body', realName: 'Lock body', position: [0, 0, 0], finish: 'hull' },
    { id: 'key-hole', label: 'key hole', realName: 'Keyhole', position: [0, 0, 0.04], finish: 'titanium' },
    { id: 'turn-part', label: 'turn part', realName: 'Cylinder', position: [0, 0, 0.02], finish: 'titanium' },
    { id: 'move-part', label: 'move part', realName: 'Bolt', position: [0.06, 0, 0], finish: 'cold' },
    { id: 'handle', label: 'handle', realName: 'Lever', position: [0, -0.06, 0.04], finish: 'titanium' },
    { id: 'keep-part', label: 'keep part', realName: 'Strike plate', position: [0.10, 0, 0], finish: 'hull' },
    { id: 'inside-part', label: 'inside part', realName: 'Pin tumbler', position: [0, 0, 0.01], finish: 'cold' },
  ],
  article: [
    {
      sentences: [
        [
          'This is a ',
          { text: 'door lock', dict: 'door-lock' },
          '. It keeps the door closed so only the right people can come in.',
        ],
      ],
    },
    {
      sentences: [
        [
          'The ',
          { text: 'body', part: 'body' },
          ' is the part you see on the door.',
        ],
        [
          'The ',
          { text: 'key hole', part: 'key-hole' },
          ' on the front is where you put the piece of metal in.',
        ],
      ],
    },
    {
      sentences: [
        [
          'The ',
          { text: 'turn part', part: 'turn-part' },
          ' inside turns when you turn the piece of metal.',
        ],
        [
          'When the turn part turns, it moves the ',
          { text: 'move part', part: 'move-part' },
          ' that keeps the door closed.',
        ],
      ],
    },
    {
      sentences: [
        [
          'The ',
          { text: 'handle', part: 'handle' },
          ' on the door is what you push to open the door.',
        ],
        ['You can only push the handle when the move part is not in the way.'],
      ],
    },
    {
      sentences: [
        [
          'The ',
          { text: 'keep part', part: 'keep-part' },
          ' on the door is a strong piece of metal where the move part goes in.',
        ],
        ['It holds the move part very hard so the door can not be pushed open.'],
      ],
    },
    {
      sentences: [
        [
          'The ',
          { text: 'inside part', part: 'inside-part' },
          ' is the very small parts inside that read the shape of the piece of metal.',
        ],
        ['Only the right piece of metal can make all the inside parts move the right way.'],
      ],
    },
  ],
  flow: [
    { partIds: ['body', 'key-hole'], sentenceRef: 1, caption: 'Body is the part on the door; key hole is where metal goes in.' },
    { partIds: ['turn-part', 'move-part'], sentenceRef: 4, caption: 'Turn part turns; move part keeps the door closed.' },
    { partIds: ['handle'], sentenceRef: 6, caption: 'Handle opens the door when move part is out of the way.' },
    { partIds: ['keep-part'], sentenceRef: 8, caption: 'Keep part holds move part very hard.' },
    { partIds: ['inside-part'], sentenceRef: 10, caption: 'Inside part reads the shape of the metal.' },
  ],
  keyExpressions: [
    { text: 'door lock', partId: 'body' },
    { text: 'keeps the door closed so only the right people can come in', partId: 'move-part' },
    { text: 'where you put the piece of metal in', partId: 'key-hole' },
    { text: 'turns when you turn the piece of metal', partId: 'turn-part' },
    { text: 'moves the move part that keeps the door closed', partId: 'turn-part' },
    { text: 'holds the move part very hard', partId: 'keep-part' },
    { text: 'reads the shape of the piece of metal', partId: 'inside-part' },
  ],
  color: '#B8860B',
}