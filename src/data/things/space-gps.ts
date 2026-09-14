import type { ThingData } from '../types'

export const spaceGps: ThingData = {
  id: 'space-gps',
  slug: 'space-gps',
  simpleName: 'The Star Finder',
  realName: 'Space GPS',
  category: 'space',
  funFacts: [
    'It can find where you are even when you are many, many miles from home.',
    'It uses stars and other things in the sky to know where to go.',
    'Some of these can work even when they are very, very far from the ground.',
    'It sends information faster than you can think.',
    'It helps keep people safe by always knowing where they are.',
  ],
  parts: [
    { id: 'body', label: 'body', realName: 'Receiver unit', position: [0, 0, 0], finish: 'hull' },
    { id: 'screen', label: 'screen', realName: 'Display', position: [0, 0.16, 0], finish: 'titanium' },
    { id: 'top-part', label: 'top', realName: 'Antenna', position: [0, 0.28, 0], finish: 'cold' },
    { id: 'buttons', label: 'buttons', realName: 'Control buttons', position: [0, 0.08, 0.12], finish: 'hull' },
  ],
  article: [
    {
      sentences: [
        ['This is a ', { text: 'star finder', dict: 'space-gps' }, '. It helps you know where you are in the sky.'],
        ['The ', { text: 'body', part: 'body' }, ' holds all the important parts inside. It is strong and can work in very cold or very hot places.'],
        ['The ', { text: 'screen', part: 'screen' }, ' shows you where to go. It can show a map of the stars and tell you which way to turn.'],
        ['The ', { text: 'top', part: 'top-part' }, ' can hear things from very far away. It listens to messages from other things in the sky.'],
        ['The ', { text: 'buttons', part: 'buttons' }, ' let you tell it what to do. You can press them to change what you see on the screen.'],
      ],
    },
    {
      sentences: [
        ['When you use this, it talks to many other things in the sky at the same time.'],
        ['Each of those things tells the ', { text: 'star finder', dict: 'space-gps' }, ' how far away it is.'],
        ['Then the ', { text: 'star finder', dict: 'space-gps' }, ' thinks very hard and tells you where you are.'],
        ['It is like having a friend who always knows the way, even when you are very far from home.'],
      ],
    },
  ],
  flow: [
    { partIds: ['body'], sentenceRef: 1, caption: 'The body holds all the important parts.' },
    { partIds: ['screen'], sentenceRef: 2, caption: 'The screen shows where to go.' },
    { partIds: ['top-part'], sentenceRef: 3, caption: 'The top listens to messages from far away.' },
    { partIds: ['buttons'], sentenceRef: 4, caption: 'The buttons let you tell it what to do.' },
  ],
  keyExpressions: [
    { text: 'star finder', partId: 'body' },
    { text: 'screen', partId: 'screen' },
    { text: 'control buttons', partId: 'buttons' },
  ],
  color: '#1E90FF',
}