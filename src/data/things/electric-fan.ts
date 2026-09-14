import type { ThingData } from '../types'

export const electricFan: ThingData = {
  id: 'electric-fan',
  slug: 'electric-fan',
  simpleName: 'The Air Pusher',
  realName: 'Electric fan',
  category: 'power',
  funFacts: [
    'The first fans were made from big leaves that people waved by hand.',
    'A big air pusher can move as much air as a very strong wind.',
    'Some air pushers can turn around by themselves to send air to more places.',
  ],
  parts: [
    { id: 'blades', label: 'blades', realName: 'Impeller', position: [0, 0.08, 0.10], finish: 'titanium' },
    { id: 'cover', label: 'cover', realName: 'Guard', position: [0, 0.08, 0.14], finish: 'hull' },
    { id: 'motor', label: 'motor', realName: 'Motor', position: [0, 0.08, 0], finish: 'cold' },
    { id: 'stand', label: 'stand', realName: 'Oscillating base', position: [0, -0.14, 0], finish: 'hull' },
    { id: 'power-wire', label: 'power wire', realName: 'Power cord', position: [0, -0.18, -0.08], finish: 'cold' },
    { id: 'button', label: 'button', realName: 'Speed switch', position: [0, 0.02, 0.08], finish: 'warning' },
    { id: 'back-cover', label: 'back cover', realName: 'Rear guard', position: [0, 0.08, -0.06], finish: 'hull' },
  ],
  article: [
    {
      sentences: [
        [
          'This is an ',
          { text: 'air pusher', dict: 'electric-fan' },
          '. It makes air move fast to make you feel cool when it is very warm.',
        ],
      ],
    },
    {
      sentences: [
        [
          'The ',
          { text: 'blades', part: 'blades' },
          ' are the flat parts that turn around very fast and push the air.',
        ],
        [
          'They sit inside a ',
          { text: 'cover', part: 'cover' },
          ' that keeps things from touching the fast-turning blades.',
        ],
      ],
    },
    {
      sentences: [
        [
          'Behind the blades is the ',
          { text: 'motor', part: 'motor' },
          ' — the part that makes the blades turn around.',
        ],
        ['The motor gets power through the power wire at the back.'],
      ],
    },
    {
      sentences: [
        [
          'The whole top part sits on a ',
          { text: 'stand', part: 'stand' },
          ' that holds it up.',
        ],
        ['Some stands can turn around by themselves to send air to different places in the room.'],
      ],
    },
    {
      sentences: [
        [
          'You turn the air pusher on and off using the ',
          { text: 'button', part: 'button' },
          ' at the back.',
        ],
        ['Some have more than one button to make the blades go faster or slower.'],
      ],
    },
    {
      sentences: [
        [
          'A ',
          { text: 'back cover', part: 'back-cover' },
          ' at the back keeps things from getting into the motor.',
        ],
        [
          'The ',
          { text: 'power wire', part: 'power-wire' },
          ' brings power from the wall to make the motor work.',
        ],
      ],
    },
  ],
  flow: [
    { partIds: ['blades', 'cover'], sentenceRef: 1, caption: 'The blades turn around fast and push the air.' },
    { partIds: ['motor'], sentenceRef: 3, caption: 'The motor makes the blades turn around.' },
    { partIds: ['stand'], sentenceRef: 5, caption: 'The stand holds the air pusher up.' },
    { partIds: ['button'], sentenceRef: 7, caption: 'The button turns the air pusher on and off.' },
    { partIds: ['back-cover', 'power-wire'], sentenceRef: 9, caption: 'The back cover keeps the motor safe; power wire brings power.' },
  ],
  keyExpressions: [
    { text: 'air pusher', partId: 'blades' },
    { text: 'makes air move fast to make you feel cool', partId: 'blades' },
    { text: 'flat parts that turn around very fast', partId: 'blades' },
    { text: 'keeps things from touching the fast-turning blades', partId: 'cover' },
    { text: 'makes the blades turn around', partId: 'motor' },
    { text: 'turn around by itself to send air', partId: 'stand' },
    { text: 'turn the air pusher on and off', partId: 'button' },
  ],
  color: '#87CEEB',
}