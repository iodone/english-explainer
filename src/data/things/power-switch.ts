import type { ThingData } from '../types'

export const powerSwitch: ThingData = {
  id: 'power-switch',
  slug: 'power-switch',
  simpleName: 'The Power Stopper',
  realName: 'Power switch',
  category: 'power',
  funFacts: [
    'A power stopper can turn power on and off more than 100,000 times before it needs to be changed.',
    'The first power stoppers were made about 150 years ago when people started using power in their homes.',
    'Some power stoppers have a light that shows you if the power is on or off.',
  ],
  parts: [
    { id: 'body', label: 'body', realName: 'Faceplate', position: [0, 0, 0], finish: 'hull' },
    { id: 'switch-part', label: 'switch part', realName: 'Toggle', position: [0, 0.04, 0.04], finish: 'cold' },
    { id: 'inside-part', label: 'inside part', realName: 'Contacts', position: [0, 0, -0.02], finish: 'titanium' },
    { id: 'wire-in', label: 'wire in', realName: 'Line terminal', position: [0, -0.06, -0.04], finish: 'cold' },
    { id: 'wire-out', label: 'wire out', realName: 'Load terminal', position: [0, 0.06, -0.04], finish: 'cold' },
    { id: 'hold-part', label: 'hold part', realName: 'Mounting bracket', position: [0, 0, -0.06], finish: 'hull' },
    { id: 'light', label: 'light', realName: 'Indicator LED', position: [0, 0.08, 0.04], finish: 'warning' },
  ],
  article: [
    {
      sentences: [
        [
          'This is a ',
          { text: 'power stopper', dict: 'power-switch' },
          '. It turns power on and off for things in your home.',
        ],
      ],
    },
    {
      sentences: [
        [
          'The ',
          { text: 'body', part: 'body' },
          ' is the flat part on the wall that you see every day.',
        ],
        [
          'The ',
          { text: 'switch part', part: 'switch-part' },
          ' on the front is the part you move up or down to turn the power on or off.',
        ],
      ],
    },
    {
      sentences: [
        [
          'Inside the body is the ',
          { text: 'inside part', part: 'inside-part' },
          ' — two pieces of metal that touch or do not touch.',
        ],
        ['When they touch, power can go through. When they do not touch, power stops.'],
      ],
    },
    {
      sentences: [
        [
          'A ',
          { text: 'wire in', part: 'wire-in' },
          ' at the back brings power from the wires in the wall.',
        ],
        [
          'A ',
          { text: 'wire out', part: 'wire-out' },
          ' sends power to the thing you want to turn on.',
        ],
      ],
    },
    {
      sentences: [
        [
          'The ',
          { text: 'hold part', part: 'hold-part' },
          ' joins the power stopper to the wall so it does not move.',
        ],
        [
          'Some power stoppers have a small ',
          { text: 'light', part: 'light' },
          ' that shows you if the power is on.',
        ],
      ],
    },
    {
      sentences: [
        ['Power stoppers are in every home and are one of the most used things.'],
        ['They help keep people safe by letting them turn off power when they do not need it.'],
      ],
    },
  ],
  flow: [
    { partIds: ['body', 'switch-part'], sentenceRef: 1, caption: 'The body is on the wall; the switch part turns power on or off.' },
    { partIds: ['inside-part'], sentenceRef: 4, caption: 'Inside part: two pieces of metal that touch or do not touch.' },
    { partIds: ['wire-in', 'wire-out'], sentenceRef: 6, caption: 'Wire in brings power; wire out sends it to the thing.' },
    { partIds: ['hold-part', 'light'], sentenceRef: 8, caption: 'Hold part joins it to the wall; light shows if power is on.' },
    { partIds: ['switch-part'], sentenceRef: 10, caption: 'Power stoppers help keep people safe.' },
  ],
  keyExpressions: [
    { text: 'power stopper', partId: 'switch-part' },
    { text: 'turns power on and off', partId: 'switch-part' },
    { text: 'move up or down to turn power on or off', partId: 'switch-part' },
    { text: 'two pieces of metal that touch or do not touch', partId: 'inside-part' },
    { text: 'brings power from the wires in the wall', partId: 'wire-in' },
    { text: 'sends power to the thing you want to turn on', partId: 'wire-out' },
    { text: 'help keep people safe', partId: 'switch-part' },
  ],
  color: '#F5F5DC',
}