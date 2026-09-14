import type { ThingData } from '../types'

export const powerController: ThingData = {
  id: 'power-controller',
  slug: 'power-controller',
  simpleName: 'The Power Master',
  realName: 'Power controller',
  category: 'power',
  funFacts: [
    'It tells other parts of the power system what to do.',
    'It can turn power on and off many times every second.',
    'It helps save power by only giving things as much as they need.',
    'Some of them can think on their own and make choices about power.',
    'Without it, many power systems would not work right.',
  ],
  parts: [
    { id: 'body', label: 'body', realName: 'Controller housing', position: [0, 0, 0], finish: 'hull' },
    { id: 'brain', label: 'brain', realName: 'Processor chip', position: [0, 0.04, 0], finish: 'titanium' },
    { id: 'in-part', label: 'in part', realName: 'Input connector', position: [-0.12, 0, 0], finish: 'cold' },
    { id: 'out-part', label: 'out part', realName: 'Output connector', position: [0.12, 0, 0], finish: 'cold' },
    { id: 'show-part', label: 'show part', realName: 'Display panel', position: [0, 0.08, 0.06], finish: 'titanium' },
    { id: 'cool-part', label: 'cool part', realName: 'Heat sink', position: [0, -0.06, 0], finish: 'hull' },
  ],
  article: [
    {
      sentences: [
        ['This is a ', { text: 'power master', dict: 'power-controller' }, '. It tells the power system what to do and when to do it.'],
        ['The ', { text: 'body', part: 'body' }, ' holds all the important parts together. It keeps them safe from heat and wet.'],
        ['The ', { text: 'brain', part: 'brain' }, ' is the part that thinks. It looks at how much power is needed and makes choices very fast.'],
        ['The ', { text: 'in part', part: 'in-part' }, ' is where power comes in. It takes power from the big power system.'],
        ['The ', { text: 'out part', part: 'out-part' }, ' sends power out to the things that need it. It only sends as much as each thing needs.'],
        ['The ', { text: 'show part', part: 'show-part' }, ' tells you what is going on. It can show numbers and words about how much power is being used.'],
        ['The ', { text: 'cool part', part: 'cool-part' }, ' stops it from getting too hot. When the brain works hard, it makes heat that must go away.'],
      ],
    },
    {
      sentences: [
        ['When power comes in through the in part, the brain looks at it right away.'],
        ['It decides how much power each thing needs and sends it out through the out part.'],
        ['If something is using too much power, the brain can turn it down.'],
        ['This helps save power and keeps everything working the right way.'],
      ],
    },
  ],
  flow: [
    { partIds: ['body'], sentenceRef: 1, caption: 'The body holds all the important parts.' },
    { partIds: ['brain'], sentenceRef: 2, caption: 'The brain thinks and makes choices fast.' },
    { partIds: ['in-part', 'out-part'], sentenceRef: 3, caption: 'Power in through in part; out through out part.' },
    { partIds: ['show-part'], sentenceRef: 5, caption: 'The show part tells you what is going on.' },
    { partIds: ['cool-part'], sentenceRef: 6, caption: 'The cool part stops it from getting too hot.' },
  ],
  keyExpressions: [
    { text: 'power master', partId: 'body' },
    { text: 'brain', partId: 'brain' },
    { text: 'in part', partId: 'in-part' },
    { text: 'out part', partId: 'out-part' },
  ],
  color: '#32CD32',
}