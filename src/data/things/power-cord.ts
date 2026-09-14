import type { ThingData } from '../types'

export const powerCord: ThingData = {
  id: 'power-cord',
  slug: 'power-cord',
  simpleName: 'The Power String',
  realName: 'Power cord',
  category: 'power',
  funFacts: [
    'The power inside them is always moving very fast, even when the thing is not turned on.',
    'If you cut one, you should never touch the inside because it can hurt you very bad.',
    'Some of them are very long and some are very short, for what they are used for.',
    'They have a special shape so you can only put them in one way.',
    'They are made of a special stuff that does not let power go through the outside.',
  ],
  parts: [
    { id: 'body', label: 'body', realName: 'Cable', position: [0, 0, 0], finish: 'hull' },
    { id: 'plug', label: 'plug', realName: 'Plug end', position: [0, 0, 0.1], finish: 'titanium' },
    { id: 'end', label: 'end', realName: 'Connector end', position: [0, 0, -0.1], finish: 'titanium' },
    { id: 'outside', label: 'outside', realName: 'Insulation', position: [0, 0.01, 0], finish: 'cold' },
    { id: 'inside', label: 'inside', realName: 'Conductors', position: [0, 0, 0], finish: 'warning' },
    { id: 'hold-part', label: 'hold part', realName: 'Strain relief', position: [0, 0, 0.08], finish: 'hull' },
  ],
  article: [
    {
      sentences: [
        ['This is a ', { text: 'power string', dict: 'power-cord' }, '. It is a long thing that carries power from one place to another.'],
        ['The ', { text: 'body', part: 'body' }, ' is the long part in the middle. It is made of many small wires inside a hard outside.'],
        ['The ', { text: 'plug', part: 'plug' }, ' is at one end. You push this into the wall to get the power.'],
        ['The ', { text: 'end', part: 'end' }, ' is at the other side. This goes into your thing to give it power.'],
        ['The ', { text: 'outside', part: 'outside' }, ' is the hard stuff around the wires. It keeps the power inside and keeps you safe.'],
        ['The ', { text: 'inside', part: 'inside' }, ' is where the power moves. It is made of a very good power carrying stuff.'],
        ['The ', { text: 'hold part', part: 'hold-part' }, ' is where the body joins the plug or end. It is thick so the wires inside do not break.'],
      ],
    },
    {
      sentences: [
        ['To use it, you put one end in the wall and the other end in your thing.'],
        ['Then the power can go from the wall through the string and into your thing.'],
        ['When you do not need it, you pull it out of the wall first, then out of your thing.'],
        ['You should not pull it by the body or the wires inside might break.'],
      ],
    },
  ],
  flow: [
    { partIds: ['body', 'outside'], sentenceRef: 1, caption: 'Body is long; outside keeps you safe.' },
    { partIds: ['plug'], sentenceRef: 2, caption: 'Plug goes in the wall.' },
    { partIds: ['end'], sentenceRef: 3, caption: 'End goes in your thing.' },
    { partIds: ['inside', 'hold-part'], sentenceRef: 5, caption: 'Inside carries power; hold part stops break.' },
  ],
  keyExpressions: [
    { text: 'power string', partId: 'body' },
    { text: 'plug', partId: 'plug' },
    { text: 'end', partId: 'end' },
    { text: 'outside', partId: 'outside' },
  ],
  color: '#000000',
}