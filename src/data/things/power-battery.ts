import type { ThingData } from '../types'

export const powerBattery: ThingData = {
  id: 'power-battery',
  slug: 'power-battery',
  simpleName: 'The Power Box',
  realName: 'Battery',
  category: 'power',
  funFacts: [
    'The first one was made more than two hundred years ago.',
    'It can save power inside itself and let it out when you need it.',
    'Some of them are very small, like the ones in your phone.',
    'Some of them are very big, like the ones that help run whole buildings.',
    'When it runs out of saved power, you must fill it up again or get a new one.',
  ],
  parts: [
    { id: 'body', label: 'body', realName: 'Battery casing', position: [0, 0, 0], finish: 'hull' },
    { id: 'top-part', label: 'top', realName: 'Terminal posts', position: [0, 0.08, 0], finish: 'cold' },
    { id: 'inside', label: 'inside', realName: 'Cell stack', position: [0, 0, 0], finish: 'titanium' },
    { id: 'top-one', label: 'top one', realName: 'Positive terminal', position: [-0.06, 0.08, 0], finish: 'titanium' },
    { id: 'top-two', label: 'top two', realName: 'Negative terminal', position: [0.06, 0.08, 0], finish: 'hull' },
    { id: 'cover', label: 'cover', realName: 'Insulating layer', position: [0, -0.06, 0], finish: 'cold' },
  ],
  article: [
    {
      sentences: [
        ['This is a ', { text: 'power box', dict: 'power-battery' }, '. It saves power inside itself so you can use it later.'],
        ['The ', { text: 'body', part: 'body' }, ' is the outside part that holds everything in. It keeps the inside safe from water and hits.'],
        ['The ', { text: 'top', part: 'top-part' }, ' has two parts that stick up. These are where the power comes out.'],
        ['The ', { text: 'inside', part: 'inside' }, ' is where the power is kept. It uses special stuff that can save and let out power.'],
        ['The ', { text: 'top one', part: 'top-one' }, ' is one of the two top parts. Power comes out of this one first.'],
        ['The ', { text: 'top two', part: 'top-two' }, ' is the other top part. Power goes back into this one after it has done its work.'],
        ['The ', { text: 'cover', part: 'cover' }, ' at the bottom stops power from going where it should not. It keeps everything safe.'],
      ],
    },
    {
      sentences: [
        ['When you join the top one and top two to something, power starts to flow.'],
        ['It goes from the top one, through the thing, and back to the top two.'],
        ['This is how it gives power to things like phones and lights.'],
        ['When all the saved power is used up, you need to fill it up again with new power.'],
      ],
    },
  ],
  flow: [
    { partIds: ['body'], sentenceRef: 1, caption: 'The body holds everything safe inside.' },
    { partIds: ['top-part', 'top-one', 'top-two'], sentenceRef: 2, caption: 'Top has two parts for power.' },
    { partIds: ['inside'], sentenceRef: 3, caption: 'Inside keeps the power saved.' },
    { partIds: ['cover'], sentenceRef: 6, caption: 'Cover stops power from going wrong.' },
  ],
  keyExpressions: [
    { text: 'power box', partId: 'body' },
    { text: 'top one', partId: 'top-one' },
    { text: 'top two', partId: 'top-two' },
    { text: 'inside', partId: 'inside' },
  ],
  color: '#FFD700',
}