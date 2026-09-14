import type { ThingData } from '../types'

export const spaceDrill: ThingData = {
  id: 'space-drill',
  slug: 'space-drill',
  simpleName: 'The Hole Maker',
  realName: 'Space drill',
  category: 'space',
  funFacts: [
    'In the sky, when you push the drill, you also push yourself backward.',
    'It must be held down or you would float away while making holes.',
    'Some of them can make holes in very hard things like stone and metal.',
    'It is used to put things together and take them apart in the sky.',
    'Without it, people in the sky could not fix things that break.',
  ],
  parts: [
    { id: 'body', label: 'body', realName: 'Drill body', position: [0, 0, 0], finish: 'hull' },
    { id: 'point', label: 'point', realName: 'Drill bit', position: [0, 0.1, 0], finish: 'titanium' },
    { id: 'spinning-part', label: 'spinning part', realName: 'Motor', position: [0, -0.02, 0], finish: 'cold' },
    { id: 'handle', label: 'handle', realName: 'Handle', position: [0, -0.08, 0], finish: 'hull' },
    { id: 'buttons', label: 'buttons', realName: 'Trigger', position: [0, -0.06, 0.04], finish: 'cold' },
    { id: 'hold-part', label: 'hold part', realName: 'Tether point', position: [0, -0.12, 0], finish: 'titanium' },
  ],
  article: [
    {
      sentences: [
        ['This is a ', { text: 'hole maker', dict: 'space-drill' }, '. It makes holes in things so you can put them together or take them apart.'],
        ['The ', { text: 'body', part: 'body' }, ' holds all the parts together. It is strong and can work even when it is very cold or very hot.'],
        ['The ', { text: 'point', part: 'point' }, ' is the sharp part that goes into the thing. It turns very fast and makes the hole.'],
        ['The ', { text: 'spinning part', part: 'spinning-part' }, ' is inside the body. It makes the point go around very fast.'],
        ['The ', { text: 'handle', part: 'handle' }, ' is the part you hold. It is made so your hand fits around it nicely.'],
        ['The ', { text: 'buttons', part: 'buttons' }, ' let you start and stop it. When you push them, the point starts to turn.'],
        ['The ', { text: 'hold part', part: 'hold-part' }, ' at the bottom can be tied to something. This stops it from floating away in the sky.'],
      ],
    },
    {
      sentences: [
        ['When you want to make a hole, you put the point on the thing.'],
        ['Then you push the buttons and the point starts to turn very fast.'],
        ['You push forward and the point goes into the thing, making a hole.'],
        ['In the sky, you must hold on to something with your other hand or you will move backward.'],
      ],
    },
  ],
  flow: [
    { partIds: ['body', 'spinning-part'], sentenceRef: 1, caption: 'Body holds parts; spinning part makes it go.' },
    { partIds: ['point'], sentenceRef: 2, caption: 'The point goes into the thing.' },
    { partIds: ['handle', 'buttons'], sentenceRef: 4, caption: 'Handle for holding; buttons start it.' },
    { partIds: ['hold-part'], sentenceRef: 6, caption: 'Hold part stops it from floating away.' },
  ],
  keyExpressions: [
    { text: 'hole maker', partId: 'body' },
    { text: 'point', partId: 'point' },
    { text: 'spinning part', partId: 'spinning-part' },
    { text: 'handle', partId: 'handle' },
  ],
  color: '#FFD700',
}