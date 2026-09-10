import type { ThingData } from '../types'

export const battery: ThingData = {
  id: 'battery',
  slug: 'battery',
  simpleName: 'Power Can',
  realName: 'Battery',
  category: 'power',
  funFacts: [
    'The first battery was built more than two hundred years ago: circles of metal with wet paper between them, one on top of the other — the first power that did not come from fire or a storm.',
    'A car carries a heavy box full of these cans joined in a row, strong enough to turn the whole engine over.',
    'You make tiny power too: your head sends power bits down to tell your hand to move — your body is a little bit a battery too.',
  ],
  parts: [
    { id: 'first-metal', label: 'First Metal', realName: 'Anode (Zinc)', position: [0.6, 0, 0], finish: 'cold' },
    { id: 'second-metal', label: 'Second Metal', realName: 'Cathode (Carbon Rod)', position: [-1.2, 0, 0], finish: 'titanium' },
    { id: 'middle-stuff', label: 'Middle Stuff', realName: 'Electrolyte Paste', position: [0, 0, 0], finish: 'cold' },
    { id: 'trade-wall', label: 'Trade Wall', realName: 'Separator', position: [-0.6, 0, 0], finish: 'cold' },
    { id: 'top-cap', label: 'Top Cap', realName: 'Positive Terminal', position: [1.2, 1.05, 0], finish: 'warning' },
    { id: 'steel-skin', label: 'Steel Skin', realName: 'Steel Case', position: [1.2, 0, 0], finish: 'hull' },
  ],
  article: [
    {
      sentences: [
        [
          'A ',
          { text: 'battery', dict: 'battery' },
          ' is a small can of power that you can carry in your hand.',
        ],
        [
          'It does not make power out of nothing — it lets two different metals slowly ',
          { text: 'trade', dict: 'trade' },
          ' tiny bits of themselves, and that slow trade pushes power out.',
        ],
        ['One end has a + on it and one end has a −; the power always comes out at one end and goes back in at the other.'],
      ],
    },
    {
      sentences: [
        [
          'Inside the can there are two different metals: the ',
          { text: 'first metal', part: 'first-metal' },
          ' wrapped around the outside, and the ',
          { text: 'second metal', part: 'second-metal' },
          ' standing as a rod in the middle.',
        ],
        [
          'Between them sits the ',
          { text: 'middle stuff', part: 'middle-stuff' },
          ', a wet paste, and a thin ',
          { text: 'trade wall', part: 'trade-wall' },
          ' around the rod that keeps the two sides apart.',
        ],
        ['The middle stuff will not let the power bits pass straight through — they have to go the long way around.'],
        [
          'The long way around is: out of the ',
          { text: 'top cap', part: 'top-cap' },
          ', up the wire, through your machine, and back in at the flat end of the can.',
        ],
      ],
    },
    {
      sentences: [
        [
          'As the bits push through your machine — a light, a speaker, a small turning machine — they do work on the way, and that is the power.',
        ],
        ['The trade runs the whole time the wire joins the two ends, and it stops only when you break the path.'],
        [
          'When the trade is all done, the ',
          { text: 'first metal', part: 'first-metal' },
          ' has slowly changed into something new, and the battery is dead.',
        ],
        ['Nothing has been lost — everything that was in the can is still in the can, only in a different shape.'],
      ],
    },
    {
      sentences: [
        [
          'Some batteries can be ',
          { text: 'charged', dict: 'charge' },
          ': you push power back through them from the wall, the trade runs the other way, and the metals change back, ready to trade again.',
        ],
        [
          'If the two metals ever touched inside, all the power would rush out at once and the can would get burning hot — the ',
          { text: 'trade wall', part: 'trade-wall' },
          ' is the quiet keeper of the whole can.',
        ],
        [
          'Two metals, a wall, and a slow trade inside a ',
          { text: 'hard metal skin', part: 'steel-skin' },
          ' — that is the whole idea.',
        ],
      ],
    },
  ],
  flow: [
    {
      partIds: ['first-metal', 'second-metal'],
      caption: 'Two different metals sit inside the can, and they want to trade bits of power.',
      sentenceRef: 3,
    },
    {
      partIds: ['trade-wall', 'middle-stuff'],
      caption: 'The trade wall and the wet middle stuff will not let the bits pass straight through.',
      sentenceRef: 5,
    },
    {
      partIds: ['top-cap'],
      caption: 'So the bits go the long way: out of the top cap, through the wire and your machine, back in at the flat end.',
      sentenceRef: 6,
    },
    {
      partIds: ['first-metal', 'second-metal'],
      caption: 'When the trade is all done, the metals have changed and the battery is dead.',
      sentenceRef: 9,
    },
    {
      partIds: ['top-cap'],
      caption: 'Push power back the other way through the top cap, and the metals change back, ready to trade again.',
      sentenceRef: 11,
    },
  ],
  keyExpressions: [
    { text: 'a can of power' },
    { text: 'bits of power', partId: 'first-metal' },
    { text: 'the long way around', partId: 'top-cap' },
    { text: 'straight through', partId: 'trade-wall' },
    { text: 'do work on the way' },
    { text: 'break the path' },
    { text: 'the battery is dead', partId: 'second-metal' },
    { text: 'rush out at once', partId: 'trade-wall' },
    { text: 'ready to trade again', partId: 'top-cap' },
  ],
  color: '#EA580C',
}
