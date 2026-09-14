import type { ThingData } from '../types'

export const trashCan: ThingData = {
  id: 'trash-can',
  slug: 'trash-can',
  simpleName: 'The Trash Box',
  realName: 'Trash can',
  category: 'home',
  funFacts: [
    'A trash box holds the things you do not want any more until they are taken away.',
    'The first trash boxes were just holes in the ground.',
    'Some trash boxes can break down the things inside so they take up less room.',
  ],
  parts: [
    { id: 'body', label: 'body', realName: 'Container', position: [0, 0, 0], finish: 'hull' },
    { id: 'top-part', label: 'top part', realName: 'Lid', position: [0, 0.14, 0], finish: 'hull' },
    { id: 'handle', label: 'handle', realName: 'Handle', position: [0, 0.18, 0.06], finish: 'titanium' },
    { id: 'foot-pedal', label: 'foot pedal', realName: 'Pedal', position: [0, -0.12, 0.10], finish: 'titanium' },
    { id: 'inside-box', label: 'inside box', realName: 'Inner bucket', position: [0, -0.02, 0], finish: 'cold' },
    { id: 'smell-part', label: 'smell part', realName: 'Charcoal filter', position: [0, 0.12, 0], finish: 'cold' },
    { id: 'ring', label: 'ring', realName: 'Lid ring', position: [0, 0.10, 0], finish: 'titanium' },
  ],
  article: [
    {
      sentences: [
        [
          'This is a ',
          { text: 'trash box', dict: 'trash-can' },
          '. It holds the things you do not want any more.',
        ],
      ],
    },
    {
      sentences: [
        [
          'The ',
          { text: 'body', part: 'body' },
          ' is the big round box that holds all the trash.',
        ],
        [
          'The ',
          { text: 'top part', part: 'top-part' },
          ' on top closes it so you can not see the trash inside.',
        ],
      ],
    },
    {
      sentences: [
        [
          'The ',
          { text: 'handle', part: 'handle' },
          ' on the top part lets you open it with your hand.',
        ],
        [
          'But you can also push the ',
          { text: 'foot pedal', part: 'foot-pedal' },
          ' at the bottom with your foot to open it.',
        ],
      ],
    },
    {
      sentences: [
        [
          'The ',
          { text: 'inside box', part: 'inside-box' },
          ' inside the body holds the trash and can be taken out.',
        ],
        ['This makes it easy to take the trash away.'],
      ],
    },
    {
      sentences: [
        [
          'The ',
          { text: 'smell part', part: 'smell-part' },
          ' under the top part keeps bad smells from coming out.',
        ],
        [
          'The ',
          { text: 'ring', part: 'ring' },
          ' holds a bag inside so the trash does not touch the body.',
        ],
      ],
    },
    {
      sentences: [
        ['Trash boxes are in every home because everyone makes things they do not want.'],
        ['Without trash boxes, the things we do not want would be all over the floor.'],
      ],
    },
  ],
  flow: [
    { partIds: ['body', 'top-part'], sentenceRef: 1, caption: 'Body holds trash; top part closes it.' },
    { partIds: ['handle', 'foot-pedal'], sentenceRef: 4, caption: 'Handle opens with hand; foot pedal opens with foot.' },
    { partIds: ['inside-box'], sentenceRef: 6, caption: 'Inside box holds trash and can be taken out.' },
    { partIds: ['smell-part'], sentenceRef: 8, caption: 'Smell part keeps bad smells inside.' },
    { partIds: ['ring'], sentenceRef: 9, caption: 'Ring holds a bag so trash does not touch the body.' },
  ],
  keyExpressions: [
    { text: 'trash box', partId: 'body' },
    { text: 'holds the things you do not want', partId: 'inside-box' },
    { text: 'closes it so you can not see the trash', partId: 'top-part' },
    { text: 'open it with your hand', partId: 'handle' },
    { text: 'push the foot pedal with your foot', partId: 'foot-pedal' },
    { text: 'keeps bad smells from coming out', partId: 'smell-part' },
    { text: 'holds a bag inside', partId: 'ring' },
  ],
  color: '#808080',
}