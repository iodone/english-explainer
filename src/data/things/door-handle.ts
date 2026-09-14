import type { ThingData } from '../types'

export const doorHandle: ThingData = {
  id: 'door-handle',
  slug: 'door-handle',
  simpleName: 'The Door Handle',
  realName: 'Door handle',
  category: 'home',
  funFacts: [
    'A door handle lets you open and close a door without hurting your hand.',
    'The first door handles were just pieces of metal that you turned.',
    'Some new door handles can read your hand and open by themselves.',
  ],
  parts: [
    { id: 'handle', label: 'handle', realName: 'Lever', position: [0, 0, 0.04], finish: 'titanium' },
    { id: 'body', label: 'body', realName: 'Rosette', position: [0, 0, 0], finish: 'hull' },
    { id: 'turn-part', label: 'turn part', realName: 'Spindle', position: [0, 0, -0.02], finish: 'titanium' },
    { id: 'move-part', label: 'move part', realName: 'Latch', position: [0.06, 0, 0], finish: 'cold' },
    { id: 'keep-part', label: 'keep part', realName: 'Strike plate', position: [0.10, 0, 0], finish: 'hull' },
    { id: 'spring', label: 'spring', realName: 'Return spring', position: [0, 0, -0.01], finish: 'cold' },
    { id: 'hold-part', label: 'hold part', realName: 'Screw', position: [0, 0.04, 0], finish: 'titanium' },
  ],
  article: [
    {
      sentences: [
        [
          'This is a ',
          { text: 'door handle', dict: 'door-handle' },
          '. It lets you open and close a door with your hand.',
        ],
      ],
    },
    {
      sentences: [
        [
          'The ',
          { text: 'handle', part: 'handle' },
          ' is the part you push down with your hand.',
        ],
        [
          'The ',
          { text: 'body', part: 'body' },
          ' around the handle holds it to the door.',
        ],
      ],
    },
    {
      sentences: [
        [
          'The ',
          { text: 'turn part', part: 'turn-part' },
          ' inside goes through the door from one side to the other.',
        ],
        [
          'When you push the handle, the turn part turns and moves the ',
          { text: 'move part', part: 'move-part' },
          '.',
        ],
      ],
    },
    {
      sentences: [
        ['The move part is the small piece that goes into the door to keep the door closed.'],
        [
          'When the handle goes down, the move part comes out and the door can open.',
        ],
      ],
    },
    {
      sentences: [
        [
          'The ',
          { text: 'keep part', part: 'keep-part' },
          ' on the door has a hole where the move part goes in.',
        ],
        [
          'The ',
          { text: 'spring', part: 'spring' },
          ' inside makes the handle go back up when you let go.',
        ],
      ],
    },
    {
      sentences: [
        [
          'The ',
          { text: 'hold part', part: 'hold-part' },
          ' keeps the body very hard to the door.',
        ],
        ['Door handles are one of the most simple but important things in a home.'],
      ],
    },
  ],
  flow: [
    { partIds: ['handle', 'body'], sentenceRef: 1, caption: 'Handle is what you push; body holds it to the door.' },
    { partIds: ['turn-part', 'move-part'], sentenceRef: 4, caption: 'Turn part turns; move part keeps door closed.' },
    { partIds: ['move-part'], sentenceRef: 6, caption: 'Move part comes out when handle goes down.' },
    { partIds: ['keep-part', 'spring'], sentenceRef: 8, caption: 'Keep part has hole for move part; spring makes handle go back.' },
    { partIds: ['hold-part'], sentenceRef: 10, caption: 'Hold part keeps body very hard to door.' },
  ],
  keyExpressions: [
    { text: 'door handle', partId: 'handle' },
    { text: 'open and close a door with your hand', partId: 'handle' },
    { text: 'push down with your hand', partId: 'handle' },
    { text: 'holds it to the door', partId: 'body' },
    { text: 'goes through the door from one side to the other', partId: 'turn-part' },
    { text: 'comes out and the door can open', partId: 'move-part' },
    { text: 'makes the handle go back up', partId: 'spring' },
  ],
  color: '#C0C0C0',
}