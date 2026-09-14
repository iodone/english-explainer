import type { ThingData } from '../types'

export const powerInverter: ThingData = {
  id: 'power-inverter',
  slug: 'power-inverter',
  simpleName: 'The Power Changer Box',
  realName: 'Power Inverter',
  category: 'power',
  funFacts: [
    'Every sun board system needs one of these — without it, the power from the sun cannot run your lights.',
    'The first inverters were big as a table and heavy as a car — today they fit in your hand.',
    'A good inverter changes power so fast that it happens many, many times every second.',
  ],
  parts: [
    { id: 'inverter-box', label: 'inverter box', realName: 'Enclosure', position: [0, 0, 0], finish: 'hull' },
    { id: 'cooling-lines', label: 'cooling lines', realName: 'Heat sink vents', position: [0, -0.16, 0], finish: 'cold' },
    { id: 'big-wire', label: 'big wire in', realName: 'DC input terminal', position: [-0.30, 0.06, 0], finish: 'warning' },
    { id: 'small-wire', label: 'small wire out', realName: 'AC output terminal', position: [0.30, 0.06, 0], finish: 'titanium' },
    { id: 'inside-parts', label: 'inside parts', realName: 'Power electronics', position: [0, 0.02, 0], finish: 'cold' },
    { id: 'small-screen', label: 'small screen', realName: 'Status display', position: [0, 0.16, 0.13], finish: 'cold' },
    { id: 'ground-wire', label: 'ground wire', realName: 'Grounding cable', position: [0, -0.24, 0], finish: 'cold' },
  ],
  article: [
    {
      sentences: [
        [
          'This box takes one kind of power and ',
          { text: 'changes', dict: 'change' },
          ' it into another kind — the kind your house uses.',
        ],
        ['Sun boards and batteries make one kind; your lights and machines need the other.'],
        ['This box sits in the middle and changes power all day, without stopping.'],
      ],
    },
    {
      sentences: [
        [
          'The ',
          { text: 'inverter box', part: 'inverter-box' },
          ' is a strong case that holds all the parts inside.',
        ],
        [
          'On the bottom, ',
          { text: 'cooling lines', part: 'cooling-lines' },
          ' let the heat out — changing power makes things hot.',
        ],
        [
          'On the left, a ',
          { text: 'big wire in', part: 'big-wire' },
          ' brings in the first kind of power; on the right, a ',
          { text: 'small wire out', part: 'small-wire' },
          ' sends out the second kind.',
        ],
        [
          'Inside, the ',
          { text: 'inside parts', part: 'inside-parts' },
          ' do the hard work of changing power many, many times every second.',
        ],
      ],
    },
    {
      sentences: [
        [
          'A ',
          { text: 'small screen', part: 'small-screen' },
          ' on the front shows how much power is going through.',
        ],
        [
          'At the bottom, a ',
          { text: 'ground wire', part: 'ground-wire' },
          ' keeps everything safe — if something goes wrong, the power goes into the ground.',
        ],
        ['It is a simple job, but one that every sun board, every battery, and every power line needs.'],
        ['Without this box, power from the sun could never run your lights.'],
      ],
    },
    {
      sentences: [
        ['The first inverters were huge and could only change power in one way.'],
        ['Today, some are small enough to hold in your hand and can change power in both ways.'],
        ['One day, every home may have one, turning sun power into house power all by itself.'],
      ],
    },
  ],
  flow: [
    { partIds: ['inverter-box'], sentenceRef: 3, caption: 'The inverter box is a strong case that holds all the parts inside.' },
    { partIds: ['cooling-lines'], sentenceRef: 4, caption: 'Cooling lines let the heat out — changing power makes things hot.' },
    { partIds: ['big-wire', 'small-wire'], sentenceRef: 5, caption: 'Big wire in brings power; small wire out sends the changed power.' },
    { partIds: ['inside-parts'], sentenceRef: 6, caption: 'Inside parts change power many, many times every second.' },
    { partIds: ['ground-wire'], sentenceRef: 8, caption: 'A ground wire keeps everything safe.' },
  ],
  keyExpressions: [
    { text: 'takes one kind of power and changes it', partId: 'inverter-box' },
    { text: 'let the heat out', partId: 'cooling-lines' },
    { text: 'brings in the first kind of power', partId: 'big-wire' },
    { text: 'sends out the second kind', partId: 'small-wire' },
    { text: 'changing power many, many times every second', partId: 'inside-parts' },
    { text: 'shows how much power is going through', partId: 'small-screen' },
    { text: 'keeps everything safe', partId: 'ground-wire' },
    { text: 'power from the sun could never run your lights' },
    { text: 'turning sun power into house power' },
  ],
  color: '#FFD700',
}