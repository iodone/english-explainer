import type { ThingData } from '../types'

export const spaceAntenna: ThingData = {
  id: 'space-antenna',
  slug: 'space-antenna',
  simpleName: 'The Sky Talker',
  realName: 'Space antenna',
  category: 'space',
  funFacts: [
    'A sky talker can send things that move through the air all the way from the sky to the ground.',
    'The first sky talkers were sent up more than 60 years ago.',
    'Some sky talkers are as big as a very large house.',
  ],
  parts: [
    { id: 'body', label: 'body', realName: 'Feed horn', position: [0, 0, 0], finish: 'hull' },
    { id: 'big-dish', label: 'big dish', realName: 'Reflector', position: [0, 0, -0.10], finish: 'cold' },
    { id: 'arm', label: 'arm', realName: 'Support arm', position: [0, 0.08, -0.04], finish: 'titanium' },
    { id: 'talk-part', label: 'talk part', realName: 'Transmitter', position: [0, 0, 0.06], finish: 'warning' },
    { id: 'power-wire', label: 'power wire', realName: 'Power cable', position: [0, -0.06, 0.04], finish: 'cold' },
    { id: 'turn-part', label: 'turn part', realName: 'Steering mechanism', position: [0, -0.04, -0.08], finish: 'titanium' },
    { id: 'hold-part', label: 'hold part', realName: 'Mounting base', position: [0, -0.10, -0.06], finish: 'hull' },
  ],
  article: [
    {
      sentences: [
        [
          'This is a ',
          { text: 'sky talker', dict: 'space-antenna' },
          '. It sends and receives things that move through the air from very far away.',
        ],
      ],
    },
    {
      sentences: [
        [
          'The ',
          { text: 'body', part: 'body' },
          ' at the front is where the things that move through the air come in and go out.',
        ],
        [
          'The ',
          { text: 'big dish', part: 'big-dish' },
          ' behind it catches the things that move through the air and sends them to the body.',
        ],
      ],
    },
    {
      sentences: [
        [
          'A long ',
          { text: 'arm', part: 'arm' },
          ' holds the body in front of the big dish.',
        ],
        ['The arm is made very strong so the body does not move.'],
      ],
    },
    {
      sentences: [
        [
          'The ',
          { text: 'talk part', part: 'talk-part' },
          ' inside the body makes the things that move through the air.',
        ],
        ['It can also read the things that come in from far away.'],
      ],
    },
    {
      sentences: [
        [
          'A ',
          { text: 'power wire', part: 'power-wire' },
          ' brings power to the sky talker so it can work all the time.',
        ],
        [
          'The ',
          { text: 'turn part', part: 'turn-part' },
          ' can move the sky talker to point at different places in the sky.',
        ],
      ],
    },
    {
      sentences: [
        [
          'The ',
          { text: 'hold part', part: 'hold-part' },
          ' at the bottom holds the sky talker in one place.',
        ],
        ['Sky talkers help us talk to things that are very far away in the sky.'],
      ],
    },
  ],
  flow: [
    { partIds: ['body', 'big-dish'], sentenceRef: 1, caption: 'The body sends and receives; the big dish catches things.' },
    { partIds: ['arm'], sentenceRef: 4, caption: 'The arm holds the body in front of the big dish.' },
    { partIds: ['talk-part'], sentenceRef: 6, caption: 'The talk part makes and reads things that move through the air.' },
    { partIds: ['power-wire', 'turn-part'], sentenceRef: 8, caption: 'Power wire brings power; turn part moves it to point at the sky.' },
    { partIds: ['hold-part'], sentenceRef: 10, caption: 'The hold part holds it in one place.' },
  ],
  keyExpressions: [
    { text: 'sky talker', partId: 'big-dish' },
    { text: 'sends and receives things that move through the air', partId: 'talk-part' },
    { text: 'catches the things that move through the air', partId: 'big-dish' },
    { text: 'holds the body in front of the big dish', partId: 'arm' },
    { text: 'makes the things that move through the air', partId: 'talk-part' },
    { text: 'brings power to the sky talker', partId: 'power-wire' },
    { text: 'move the sky talker to point at different places', partId: 'turn-part' },
  ],
  color: '#C0C0C0',
}