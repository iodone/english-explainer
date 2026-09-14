import type { ThingData } from '../types'

export const powerWire: ThingData = {
  id: 'power-wire',
  slug: 'power-wire',
  simpleName: 'The Power Line',
  realName: 'Electrical wire',
  category: 'power',
  funFacts: [
    'It can move power from one place to another at the speed of light.',
    'The first ones were put under the ground more than one hundred years ago.',
    'Some of them are as thin as a hair, while others are as big as your arm.',
    'If you touch one that has power going through it, it can hurt you very much.',
    'They are covered in special stuff that stops power from coming out.',
  ],
  parts: [
    { id: 'body', label: 'body', realName: 'Outer jacket', position: [0, 0, 0], finish: 'hull' },
    { id: 'inside', label: 'inside', realName: 'Conductor core', position: [0, 0, 0], finish: 'titanium' },
    { id: 'cover', label: 'cover', realName: 'Insulation layer', position: [0, 0, 0], finish: 'cold' },
    { id: 'end-parts', label: 'end parts', realName: 'Connectors', position: [0.14, 0, 0], finish: 'hull' },
    { id: 'bend-parts', label: 'bend parts', realName: 'Strain reliefs', position: [0.1, 0, 0], finish: 'cold' },
  ],
  article: [
    {
      sentences: [
        ['This is a ', { text: 'power line', dict: 'power-wire' }, '. It moves power from one place to another so things can work.'],
        ['The ', { text: 'body', part: 'body' }, ' is the outside part you can see and touch. It keeps everything inside safe.'],
        ['The ', { text: 'inside', part: 'inside' }, ' is the part that actually moves the power. It is made of a special stuff that power can go through very well.'],
        ['The ', { text: 'cover', part: 'cover' }, ' goes around the inside. It stops the power from coming out and hurting people.'],
        ['The ', { text: 'end parts', part: 'end-parts' }, ' are at each end. They join the wire to the things that need power.'],
        ['The ', { text: 'bend parts', part: 'bend-parts' }, ' are where the wire meets the end parts. They stop the wire from breaking when it gets pulled.'],
      ],
    },
    {
      sentences: [
        ['When something needs power, it is joined to the wire through the end parts.'],
        ['Power goes from the power place, through the inside, and to the thing.'],
        ['The cover keeps the power inside the wire so it goes only where it should.'],
        ['If the cover breaks, the power can come out and that is very bad.'],
      ],
    },
  ],
  flow: [
    { partIds: ['body'], sentenceRef: 1, caption: 'The body is the outside you can touch.' },
    { partIds: ['inside', 'cover'], sentenceRef: 2, caption: 'Inside moves power; cover keeps it safe.' },
    { partIds: ['end-parts'], sentenceRef: 4, caption: 'End parts join wire to things.' },
    { partIds: ['bend-parts'], sentenceRef: 5, caption: 'Bend parts stop wire from breaking.' },
  ],
  keyExpressions: [
    { text: 'power line', partId: 'body' },
    { text: 'inside', partId: 'inside' },
    { text: 'cover', partId: 'cover' },
    { text: 'end parts', partId: 'end-parts' },
  ],
  color: '#FFD700',
}