import type { ThingData } from '../types'

export const spaceSignal: ThingData = {
  id: 'space-signal',
  slug: 'space-signal',
  simpleName: 'The Message Sender',
  realName: 'Space signal',
  category: 'space',
  funFacts: [
    'They move at the fastest speed anything can move, faster than anything else.',
    'Some of them can go very far, even to other places in the sky far away.',
    'They are used to talk to people in the sky and to send pictures and sounds.',
    'They are not things you can see, but you can see what they do.',
    'Without them, we could not talk to people in the sky or use things like phones.',
  ],
  parts: [
    { id: 'body', label: 'body', realName: 'Signal source', position: [0, 0, 0], finish: 'hull' },
    { id: 'waves', label: 'waves', realName: 'Waves', position: [0, 0.05, 0], finish: 'cold' },
    { id: 'send-part', label: 'send part', realName: 'Transmitter', position: [0, -0.02, 0], finish: 'titanium' },
    { id: 'get-part', label: 'get part', realName: 'Receiver', position: [0, 0.02, 0], finish: 'titanium' },
    { id: 'light', label: 'light', realName: 'Light beam', position: [0, 0.1, 0], finish: 'warning' },
    { id: 'path', label: 'path', realName: 'Transmission path', position: [0, 0, 0.1], finish: 'hull' },
  ],
  article: [
    {
      sentences: [
        ['This is a ', { text: 'message sender', dict: 'space-signal' }, '. It sends messages from one place to another very fast.'],
        ['The ', { text: 'body', part: 'body' }, ' is where the message starts. It is usually a small thing like a phone or a big thing like a thing in the sky.'],
        ['The ', { text: 'waves', part: 'waves' }, ' are what carry the message. You cannot see them but they move very fast through the air and even through the sky.'],
        ['The ', { text: 'send part', part: 'send-part' }, ' is the part that sends the waves out. It takes your message and puts it on the waves.'],
        ['The ', { text: 'get part', part: 'get-part' }, ' is the part that gets the waves. It takes the message off the waves so you can hear or see it.'],
        ['The ', { text: 'light', part: 'light' }, ' is a special kind of message that uses light. It can carry very many messages at the same time.'],
        ['The ', { text: 'path', part: 'path' }, ' is the way the waves go. They can go straight or they can go around things, but they always try to go the fastest way.'],
      ],
    },
    {
      sentences: [
        ['To send a message, you talk into the send part.'],
        ['The send part puts your words on the waves and sends them out.'],
        ['The waves go very fast to the get part far away.'],
        ['The get part takes your words off the waves and the other person can hear you.'],
      ],
    },
  ],
  flow: [
    { partIds: ['body', 'send-part'], sentenceRef: 1, caption: 'Body is where message starts; send part sends it out.' },
    { partIds: ['waves'], sentenceRef: 2, caption: 'Waves carry the message very fast.' },
    { partIds: ['get-part'], sentenceRef: 4, caption: 'Get part takes the message off the waves.' },
    { partIds: ['light', 'path'], sentenceRef: 5, caption: 'Light is a special kind; path is the way it goes.' },
  ],
  keyExpressions: [
    { text: 'message sender', partId: 'body' },
    { text: 'waves', partId: 'waves' },
    { text: 'send part', partId: 'send-part' },
    { text: 'get part', partId: 'get-part' },
  ],
  color: '#4169E1',
}