import type { ThingData } from '../types'

export const spaceHammer: ThingData = {
  id: 'space-hammer',
  slug: 'space-hammer',
  simpleName: 'The Hit Thing',
  realName: 'Space hammer',
  category: 'space',
  funFacts: [
    'In the sky, when you hit something, you also move backward.',
    'It must be held down or you would float away when you use it.',
    'Some of them use pushing air instead of your hand to hit things.',
    'It is used to put things together and take things apart in the sky.',
    'Without it, people in the sky could not fix things that break.',
  ],
  parts: [
    { id: 'body', label: 'body', realName: 'Hammer head', position: [0, 0.04, 0], finish: 'hull' },
    { id: 'handle', label: 'handle', realName: 'Handle', position: [0, -0.06, 0], finish: 'cold' },
    { id: 'hit-face', label: 'hit face', realName: 'Striking face', position: [0, 0.04, 0.04], finish: 'titanium' },
    { id: 'hook', label: 'hook', realName: 'Claw', position: [0, 0.04, -0.04], finish: 'hull' },
    { id: 'grip', label: 'grip', realName: 'Grip surface', position: [0, -0.1, 0], finish: 'cold' },
    { id: 'hold-part', label: 'hold part', realName: 'Wrist strap', position: [0, -0.12, 0], finish: 'titanium' },
  ],
  article: [
    {
      sentences: [
        ['This is a ', { text: 'hit thing', dict: 'space-hammer' }, '. It is used to hit things in the sky to fix or break them.'],
        ['The ', { text: 'body', part: 'body' }, ' is the heavy part at the top. It is what hits the thing you want to fix or break.'],
        ['The ', { text: 'handle', part: 'handle' }, ' is the long part you hold. It gives you something to grab while you swing.'],
        ['The ', { text: 'hit face', part: 'hit-face' }, ' is the flat part that touches the thing you are hitting. It must be very strong.'],
        ['The ', { text: 'hook', part: 'hook' }, ' is on the other side. It can grab things and pull them out, like long thin things in walls.'],
        ['The ', { text: 'grip', part: 'grip' }, ' is on the handle. It stops your hand from slipping when your hands are wet.'],
        ['The ', { text: 'hold part', part: 'hold-part' }, ' goes around your hand. It stops the hammer from floating away if you let go.'],
      ],
    },
    {
      sentences: [
        ['When you want to hit something, you hold the handle and pull back.'],
        ['Then you push forward and the hit face hits the thing very hard.'],
        ['In the sky, you must hold on to something with your other hand.'],
        ['If you do not, you will move backward when you hit the thing.'],
      ],
    },
  ],
  flow: [
    { partIds: ['body', 'hit-face'], sentenceRef: 1, caption: 'Body is heavy; hit face is what touches.' },
    { partIds: ['handle', 'grip'], sentenceRef: 2, caption: 'Handle for holding; grip stops slipping.' },
    { partIds: ['hook'], sentenceRef: 4, caption: 'The hook grabs and pulls things out.' },
    { partIds: ['hold-part'], sentenceRef: 6, caption: 'Hold part stops it from floating away.' },
  ],
  keyExpressions: [
    { text: 'hit thing', partId: 'body' },
    { text: 'handle', partId: 'handle' },
    { text: 'hit face', partId: 'hit-face' },
    { text: 'hold part', partId: 'hold-part' },
  ],
  color: '#808080',
}