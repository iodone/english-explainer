import type { ThingData } from '../types'

export const spaceCompass: ThingData = {
  id: 'space-compass',
  slug: 'space-compass',
  simpleName: 'The Turning North Thing',
  realName: 'Space compass',
  category: 'space',
  funFacts: [
    'In the sky, a normal one does not work well because there is no big ground under you.',
    'Some of them use the stars to know which way they are going.',
    'They have been used by people who go on water for a very long time.',
    'The first ones were made a very long time ago in a place far away.',
    'They work because the world is like a very big round thing with power inside.',
  ],
  parts: [
    { id: 'body', label: 'body', realName: 'Compass housing', position: [0, 0, 0], finish: 'hull' },
    { id: 'needle', label: 'needle', realName: 'Magnetic needle', position: [0, 0.01, 0], finish: 'titanium' },
    { id: 'markings', label: 'markings', realName: 'Dial markings', position: [0, 0.011, 0], finish: 'cold' },
    { id: 'glass', label: 'glass', realName: 'Cover glass', position: [0, 0.02, 0], finish: 'cold' },
    { id: 'bottom-part', label: 'bottom part', realName: 'Base plate', position: [0, -0.01, 0], finish: 'hull' },
    { id: 'hold-part', label: 'hold part', realName: 'Lanyard ring', position: [0, -0.02, 0], finish: 'titanium' },
  ],
  article: [
    {
      sentences: [
        ['This is a ', { text: 'turning north thing', dict: 'space-compass' }, '. It tells you which way is north so you know where you are going.'],
        ['The ', { text: 'body', part: 'body' }, ' is the round part that holds everything. It is usually flat and easy to hold in your hand.'],
        ['The ', { text: 'needle', part: 'needle' }, ' is the long thin part that turns. One end of it always points to the north.'],
        ['The ', { text: 'markings', part: 'markings' }, ' are the letters and lines on the body. They tell you which way is north, south, east, and west.'],
        ['The ', { text: 'glass', part: 'glass' }, ' is on top so you can see the needle. It keeps the needle safe and clean.'],
        ['The ', { text: 'bottom part', part: 'bottom-part' }, ' is the flat part under the body. Some of them have things on them to help you see which way to go on a map.'],
        ['The ', { text: 'hold part', part: 'hold-part' }, ' is a small round thing on the side. You can put a string through it so you do not lose it.'],
      ],
    },
    {
      sentences: [
        ['To use it, you hold it flat in your hand.'],
        ['The needle will turn and one end will point to the north.'],
        ['Then you can turn yourself until you are facing the way you want to go.'],
        ['It is a very old tool but it still works very well today.'],
      ],
    },
  ],
  flow: [
    { partIds: ['body', 'needle'], sentenceRef: 1, caption: 'Body holds parts; needle points north.' },
    { partIds: ['markings'], sentenceRef: 3, caption: 'Markings show north, south, east, and west.' },
    { partIds: ['glass', 'bottom-part'], sentenceRef: 4, caption: 'Glass keeps it safe; bottom part is flat.' },
    { partIds: ['hold-part'], sentenceRef: 6, caption: 'Hold part is for a string so you do not lose it.' },
  ],
  keyExpressions: [
    { text: 'turning north thing', partId: 'body' },
    { text: 'needle', partId: 'needle' },
    { text: 'markings', partId: 'markings' },
    { text: 'glass', partId: 'glass' },
  ],
  color: '#DAA520',
}