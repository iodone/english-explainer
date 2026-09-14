import type { ThingData } from '../types'

export const batteryPack: ThingData = {
  id: 'battery-pack',
  slug: 'battery-pack',
  simpleName: 'The Power Box',
  realName: 'Battery pack',
  category: 'power',
  funFacts: [
    'A power box can be filled with power many times — some can be filled more than 1000 times.',
    'The first power boxes were very big and heavy, but now they can be as small as a card.',
    'Some power boxes can fill a phone many times before they need to be filled again.',
  ],
  parts: [
    { id: 'body', label: 'body', realName: 'Housing', position: [0, 0, 0], finish: 'hull' },
    { id: 'inside-part', label: 'inside part', realName: 'Battery cells', position: [0, 0, 0], finish: 'titanium' },
    { id: 'put-in', label: 'put in', realName: 'Input port', position: [0, 0.08, 0.06], finish: 'cold' },
    { id: 'take-out', label: 'take out', realName: 'Output port', position: [0, -0.08, 0.06], finish: 'cold' },
    { id: 'light', label: 'light', realName: 'LED indicators', position: [0, 0.04, 0.08], finish: 'warning' },
    { id: 'button', label: 'button', realName: 'Power button', position: [0, 0.06, 0.08], finish: 'warning' },
    { id: 'safe-part', label: 'safe part', realName: 'Protection circuit', position: [0, 0, -0.04], finish: 'cold' },
  ],
  article: [
    {
      sentences: [
        [
          'This is a ',
          { text: 'power box', dict: 'battery-pack' },
          '. It keeps power inside so you can use it later when you are not near a wall.',
        ],
      ],
    },
    {
      sentences: [
        [
          'The ',
          { text: 'body', part: 'body' },
          ' is the outside part that holds everything inside.',
        ],
        [
          'Inside is the ',
          { text: 'inside part', part: 'inside-part' },
          ' — special things that can hold power for a long time.',
        ],
      ],
    },
    {
      sentences: [
        [
          'You fill the power box with power through the ',
          { text: 'put in', part: 'put-in' },
          ' part at one end.',
        ],
        ['This is the same kind of end that your phone uses.'],
      ],
    },
    {
      sentences: [
        [
          'When you want to use the power, you join your thing to the ',
          { text: 'take out', part: 'take-out' },
          ' part at the other end.',
        ],
        ['The power goes from the power box to your thing.'],
      ],
    },
    {
      sentences: [
        [
          'Small ',
          { text: 'lights', part: 'light' },
          ' on the side show you how much power is left inside.',
        ],
        [
          'A ',
          { text: 'button', part: 'button' },
          ' on the side turns the power box on and off.',
        ],
      ],
    },
    {
      sentences: [
        [
          'A ',
          { text: 'safe part', part: 'safe-part' },
          ' inside stops the power box from getting too hot or from having too much power.',
        ],
        ['This keeps the power box and your things safe.'],
      ],
    },
  ],
  flow: [
    { partIds: ['body', 'inside-part'], sentenceRef: 1, caption: 'The body holds the inside part that keeps power.' },
    { partIds: ['put-in'], sentenceRef: 4, caption: 'Fill the power box through the put-in part.' },
    { partIds: ['take-out'], sentenceRef: 6, caption: 'Use power through the take-out part.' },
    { partIds: ['light', 'button'], sentenceRef: 8, caption: 'Lights show power left; button turns it on and off.' },
    { partIds: ['safe-part'], sentenceRef: 10, caption: 'The safe part stops it from getting too hot.' },
  ],
  keyExpressions: [
    { text: 'power box', partId: 'inside-part' },
    { text: 'keeps power inside so you can use it later', partId: 'inside-part' },
    { text: 'special things that can hold power', partId: 'inside-part' },
    { text: 'fill the power box with power', partId: 'put-in' },
    { text: 'use the power through the take-out part', partId: 'take-out' },
    { text: 'show you how much power is left', partId: 'light' },
    { text: 'stops the power box from getting too hot', partId: 'safe-part' },
  ],
  color: '#90EE90',
}