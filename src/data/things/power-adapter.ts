import type { ThingData } from '../types'

export const powerAdapter: ThingData = {
  id: 'power-adapter',
  slug: 'power-adapter',
  simpleName: 'The Power Changer Thing',
  realName: 'Power adapter',
  category: 'power',
  funFacts: [
    'They can change the power from the wall so it is just right for your thing.',
    'Some of them get warm when they are working, and that is normal.',
    'They have a special shape so you can only put them in one way.',
    'If you use the wrong one, it can break your thing or not work at all.',
    'Some of them can work with power from different places around the world.',
  ],
  parts: [
    { id: 'body', label: 'body', realName: 'Adapter body', position: [0, 0, 0], finish: 'hull' },
    { id: 'plug', label: 'plug', realName: 'Input prongs', position: [0, 0, 0.05], finish: 'titanium' },
    { id: 'end', label: 'end', realName: 'Output connector', position: [0, 0, -0.05], finish: 'titanium' },
    { id: 'light', label: 'light', realName: 'LED indicator', position: [0, 0.02, 0], finish: 'cold' },
    { id: 'inside', label: 'inside', realName: 'Transformer', position: [0, 0, 0], finish: 'warning' },
    { id: 'hold-part', label: 'hold part', realName: 'Grip texture', position: [0, -0.02, 0], finish: 'hull' },
  ],
  article: [
    {
      sentences: [
        ['This is a ', { text: 'power changer thing', dict: 'power-adapter' }, '. It changes the kind of power from the wall so your thing can use it.'],
        ['The ', { text: 'body', part: 'body' }, ' is the part you hold. It is usually a small box shape that fits in your hand.'],
        ['The ', { text: 'plug', part: 'plug' }, ' is the part that goes in the wall. It takes the power from the wall into the body.'],
        ['The ', { text: 'end', part: 'end' }, ' is the other side. It has a long string that goes to your thing and gives it the right kind of power.'],
        ['The ', { text: 'light', part: 'light' }, ' is a small thing that works when it is on. It tells you that the power is going through.'],
        ['The ', { text: 'inside', part: 'inside' }, ' is where the change happens. It takes the power from the wall and makes it just right for your thing.'],
        ['The ', { text: 'hold part', part: 'hold-part' }, ' on the body makes it easy to hold. It has a special feel so your hand does not slip.'],
      ],
    },
    {
      sentences: [
        ['To use it, you put the plug in the wall.'],
        ['Then you put the end into your thing.'],
        ['The power goes from the wall into the body, gets changed, and then goes into your thing.'],
        ['When you are done, you pull it out of the wall first, then out of your thing.'],
      ],
    },
  ],
  flow: [
    { partIds: ['body', 'inside'], sentenceRef: 1, caption: 'Body holds parts; inside changes the power.' },
    { partIds: ['plug'], sentenceRef: 2, caption: 'Plug goes in the wall.' },
    { partIds: ['end'], sentenceRef: 3, caption: 'End goes to your thing.' },
    { partIds: ['light', 'hold-part'], sentenceRef: 4, caption: 'Light shows it is working; hold part for your hand.' },
  ],
  keyExpressions: [
    { text: 'power changer thing', partId: 'body' },
    { text: 'plug', partId: 'plug' },
    { text: 'end', partId: 'end' },
    { text: 'light', partId: 'light' },
  ],
  color: '#333333',
}