import type { ThingData } from '../types'

export const spaceClamp: ThingData = {
  id: 'space-clamp',
  slug: 'space-clamp',
  simpleName: 'The Hold Together Thing',
  realName: 'Space clamp',
  category: 'space',
  funFacts: [
    'In the sky, if you let go of something, it will float away and you might never find it again.',
    'They are used to hold things still while you work on them with other tools.',
    'Some of them can be opened very wide and some can only be opened a little.',
    'They are very strong and can hold things that are very heavy.',
    'Without them, people in the sky would have a very hard time putting things together.',
  ],
  parts: [
    { id: 'body', label: 'body', realName: 'Clamp body', position: [0, 0, 0], finish: 'hull' },
    { id: 'jaws', label: 'jaws', realName: 'Jaws', position: [0, 0.04, 0], finish: 'titanium' },
    { id: 'handle', label: 'handle', realName: 'Handle', position: [0, -0.06, 0], finish: 'hull' },
    { id: 'move-part', label: 'move part', realName: 'Screw mechanism', position: [0, 0.02, 0.03], finish: 'cold' },
    { id: 'grip', label: 'grip', realName: 'Grip surface', position: [0, -0.08, 0], finish: 'cold' },
    { id: 'hold-part', label: 'hold part', realName: 'Tether ring', position: [0, -0.1, 0], finish: 'titanium' },
  ],
  article: [
    {
      sentences: [
        ['This is a ', { text: 'hold together thing', dict: 'space-clamp' }, '. It holds things together very hard so they do not move.'],
        ['The ', { text: 'body', part: 'body' }, ' is the strong part that holds everything together. It does not move at all.'],
        ['The ', { text: 'jaws', part: 'jaws' }, ' are the two parts that close on the thing. One of them stays still and one of them moves.'],
        ['The ', { text: 'handle', part: 'handle' }, ' is the part you turn. When you turn it, the move part goes in or out.'],
        ['The ', { text: 'move part', part: 'move-part' }, ' is a long round thing with a line going around it. When you turn the handle, it makes the jaws close.'],
        ['The ', { text: 'grip', part: 'grip' }, ' on the handle is made so your hand does not slip when you turn it.'],
        ['The ', { text: 'hold part', part: 'hold-part' }, ' at the bottom can be tied to something. This stops the whole thing from floating away.'],
      ],
    },
    {
      sentences: [
        ['To use it, you put the thing you want to hold between the jaws.'],
        ['Then you turn the handle and the jaws close on the thing very hard.'],
        ['Now the thing cannot move and you can work on it with other tools.'],
        ['When you are done, you turn the handle the other way and the jaws open.'],
      ],
    },
  ],
  flow: [
    { partIds: ['body', 'jaws'], sentenceRef: 1, caption: 'Body is strong; jaws close on the thing.' },
    { partIds: ['handle', 'move-part'], sentenceRef: 3, caption: 'Handle turns; move part makes jaws close.' },
    { partIds: ['grip'], sentenceRef: 4, caption: 'Grip stops your hand from slipping.' },
    { partIds: ['hold-part'], sentenceRef: 6, caption: 'Hold part stops it from floating away.' },
  ],
  keyExpressions: [
    { text: 'hold together thing', partId: 'body' },
    { text: 'jaws', partId: 'jaws' },
    { text: 'handle', partId: 'handle' },
    { text: 'move part', partId: 'move-part' },
  ],
  color: '#C0C0C0',
}