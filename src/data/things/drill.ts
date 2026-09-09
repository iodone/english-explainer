import type { ThingData } from '../types'

export const drill: ThingData = {
  id: 'drill',
  slug: 'drill',
  simpleName: 'Fast-Spinning Hole Maker',
  realName: 'Cordless Drill',
  category: 'home',
  funFacts: [
    'The first drills were not machines at all — people turned them by hand, and a hole took minutes.',
    'Some turning points are made to hit stone with many tiny fast hits, breaking it bit by bit.',
    'With a different turning point in the turn grip, the same machine can make paint turn around, drive screws in, or clean metal.',
  ],
  parts: [
    { id: 'go-button', label: 'Go Button', realName: 'Trigger', position: [-0.45, -0.12, 0.24], finish: 'warning' },
    { id: 'hand-hold', label: 'Hand Hold', realName: 'Handle & Grip', position: [-0.6, -0.4, 0], finish: 'cold' },
    { id: 'power-box', label: 'Power Box', realName: 'Battery Pack', position: [-0.6, -0.95, 0], finish: 'cold' },
    { id: 'spin-maker', label: 'Spin Maker', realName: 'Motor', position: [-0.1, 0.15, 0], finish: 'cold' },
    { id: 'speed-changer', label: 'Speed-Changer Wheels', realName: 'Gear Reduction', position: [0.4, 0.15, 0], finish: 'titanium' },
    { id: 'turn-grip', label: 'Turn Grip', realName: 'Chuck', position: [0.72, 0.15, 0], finish: 'cold' },
    { id: 'turning-point', label: 'Turning Point', realName: 'Drill Bit', position: [1.1, 0.15, 0], finish: 'cold' },
  ],
  article: [
    {
      sentences: [
        [
          'A ',
          { text: 'drill', dict: 'drill' },
          ' is a fast-turning machine that makes holes.',
        ],
        ['You hold it in one hand, point it at a wall or a piece of wood, and it cuts a hole by turning very fast.'],
        ['Every part serves one job: making the front turn with strength.'],
      ],
    },
    {
      sentences: [
        [
          'Power comes from a ',
          { text: 'power box', part: 'power-box' },
          ' — a small block of stored power that drops into the ',
          { text: 'hand hold', part: 'hand-hold' },
          ', the part you hold.',
        ],
        [
          'When you press the ',
          { text: 'go button', part: 'go-button' },
          ', power flows to a ',
          { text: 'spin maker', part: 'spin-maker' },
          ', and it starts turning — press harder, and it turns faster.',
        ],
        ['The spin maker turns power into turning, many times each second.'],
        ['But fast is not the same as strong.'],
      ],
    },
    {
      sentences: [
        [
          'A set of ',
          { text: 'speed-changer wheels', part: 'speed-changer' },
          ' changes speed into strength: a small wheel turning fast makes a big wheel turn slowly, but with much more push.',
        ],
        [
          'At the front, a ',
          { text: 'turn grip', part: 'turn-grip' },
          ' — three little metal fingers — closes around the back end of the ',
          { text: 'turning point', part: 'turning-point' },
          '.',
        ],
        ['The turning point is a long, hard piece of metal with cutting edges going around it like small steps.'],
        ['As it turns, the edges cut the wood away in tiny pieces, and the pieces ride up the steps and out of the hole.'],
      ],
    },
    {
      sentences: [
        ['Let go of the button, and the power stops at once.'],
        ['You can make the front turn left or right, to drive screws in or pull them out.'],
        ['From a small hole in a piece of wood to a big hole in a wall, the drill turns your hand’s small push into strong turning that never stops.'],
      ],
    },
  ],
  flow: [
    {
      partIds: ['go-button'],
      caption: 'You press the go button, and power flows to the spin maker.',
      sentenceRef: 4,
    },
    {
      partIds: ['spin-maker'],
      caption: 'The spin maker turns power into fast turning.',
      sentenceRef: 5,
    },
    {
      partIds: ['speed-changer'],
      caption: 'Small fast wheels make big wheels turn slowly — and strong.',
      sentenceRef: 7,
    },
    {
      partIds: ['turn-grip'],
      caption: 'Three metal fingers close around the turning point.',
      sentenceRef: 8,
    },
    {
      partIds: ['turning-point'],
      caption: 'The turning point cuts the wood away, and the pieces fly out of the hole.',
      sentenceRef: 10,
    },
  ],
  keyExpressions: [
    { text: 'hole maker' },
    { text: 'stored power', partId: 'power-box' },
    { text: 'press harder', partId: 'go-button' },
    { text: 'turns power into turning', partId: 'spin-maker' },
    { text: 'fast is not the same as strong' },
    { text: 'changes speed into strength', partId: 'speed-changer' },
    { text: 'turning point', partId: 'turning-point' },
    { text: 'ride up the steps' },
    { text: 'left or right', partId: 'turn-grip' },
  ],
  color: '#D946EF',
}
