import type { ThingData } from '../types'

export const homeFan: ThingData = {
  id: 'home-fan',
  slug: 'home-fan',
  simpleName: 'The Wind Maker',
  realName: 'Home fan',
  category: 'home',
  funFacts: [
    'It can move a very large flow of air every minute.',
    'The first ones were pushed by hand, not by power.',
    'Some of them can turn around in a circle to send wind in all ways.',
    'They use much less power than things that make cold air.',
    'They can make you feel much cooler even when the air is still warm.',
  ],
  parts: [
    { id: 'body', label: 'body', realName: 'Fan base', position: [0, 0, 0], finish: 'hull' },
    { id: 'spinning-part', label: 'spinning part', realName: 'Fan blades', position: [0, 0.1, 0], finish: 'cold' },
    { id: 'cover', label: 'cover', realName: 'Safety cage', position: [0, 0.1, 0.04], finish: 'titanium' },
    { id: 'neck', label: 'neck', realName: 'Support column', position: [0, 0.04, 0], finish: 'hull' },
    { id: 'buttons', label: 'buttons', realName: 'Speed control', position: [0, 0.02, 0.06], finish: 'hull' },
    { id: 'turn-part', label: 'turn part', realName: 'Oscillation motor', position: [0, -0.02, 0], finish: 'cold' },
  ],
  article: [
    {
      sentences: [
        ['This is a ', { text: 'wind maker', dict: 'home-fan' }, '. It moves air around to make you feel cooler.'],
        ['The ', { text: 'body', part: 'body' }, ' at the bottom holds it up. It must be wide so the fan does not fall over.'],
        ['The ', { text: 'spinning part', part: 'spinning-part' }, ' is what makes the wind. It goes around very fast and pushes the air.'],
        ['The ', { text: 'cover', part: 'cover' }, ' is around the spinning part. It stops things like fingers from going into the fast moving parts.'],
        ['The ', { text: 'neck', part: 'neck' }, ' holds the spinning part up high. It joins the body to the top part.'],
        ['The ', { text: 'buttons', part: 'buttons' }, ' let you choose how fast it goes. You can make it slow and quiet or fast and strong.'],
        ['The ', { text: 'turn part', part: 'turn-part' }, ' makes the fan move from side to side. This sends the wind to more places in the room.'],
      ],
    },
    {
      sentences: [
        ['When you turn it on, the spinning part starts to go around.'],
        ['It pushes the air forward, which makes a wind that feels nice on your skin.'],
        ['If you press the buttons, you can make the wind stronger or not as strong.'],
        ['The turn part can also make it move side to side so everyone in the room gets some wind.'],
      ],
    },
  ],
  flow: [
    { partIds: ['body', 'neck'], sentenceRef: 1, caption: 'Body holds it up; neck holds the top.' },
    { partIds: ['spinning-part', 'cover'], sentenceRef: 2, caption: 'Spinning part makes wind; cover keeps safe.' },
    { partIds: ['buttons'], sentenceRef: 5, caption: 'Buttons choose how fast it goes.' },
    { partIds: ['turn-part'], sentenceRef: 6, caption: 'Turn part makes it move side to side.' },
  ],
  keyExpressions: [
    { text: 'wind maker', partId: 'spinning-part' },
    { text: 'spinning part', partId: 'spinning-part' },
    { text: 'buttons', partId: 'buttons' },
    { text: 'turn part', partId: 'turn-part' },
  ],
  color: '#87CEEB',
}