import type { ThingData } from '../types'

export const powerPlug: ThingData = {
  id: 'power-plug',
  slug: 'power-plug',
  simpleName: 'The Power Plug',
  realName: 'Power plug',
  category: 'power',
  funFacts: [
    'They come in different shapes in different places around the world.',
    'Some have two round bits and some have two flat bits.',
    'Some have a third bit at the bottom that is for safety.',
    'If you push one into the wall, the power can go through to your thing.',
    'You should never put anything else in the wall holes, only the right one.',
  ],
  parts: [
    { id: 'body', label: 'body', realName: 'Plug body', position: [0, 0, 0], finish: 'hull' },
    { id: 'bits', label: 'bits', realName: 'Prongs', position: [0, 0, 0.05], finish: 'titanium' },
    { id: 'safety-bit', label: 'safety bit', realName: 'Ground pin', position: [0, -0.02, 0.05], finish: 'cold' },
    { id: 'end', label: 'end', realName: 'Cable entry', position: [0, 0, -0.04], finish: 'hull' },
    { id: 'top-part', label: 'top part', realName: 'Top surface', position: [0, 0.02, 0], finish: 'cold' },
    { id: 'bottom-part', label: 'bottom part', realName: 'Bottom surface', position: [0, -0.02, 0], finish: 'titanium' },
  ],
  article: [
    {
      sentences: [
        ['This is a ', { text: 'power plug', dict: 'power-plug' }, '. It is a thing that joins your things to the place with power.'],
        ['The ', { text: 'body', part: 'body' }, ' is the part you hold. It is usually made of a hard stuff that power cannot go through.'],
        ['The ', { text: 'bits', part: 'bits' }, ' are the two bits of metal that stick out. They go into the wall to get the power.'],
        ['Some of them also have a ', { text: 'safety bit', part: 'safety-bit' }, ' that is longer than the others. This one goes in first to keep you safe.'],
        ['The ', { text: 'end', part: 'end' }, ' is where the long string joins the body. The long string carries the power to your thing.'],
        ['The ', { text: 'top part', part: 'top-part' }, ' and the ', { text: 'bottom part', part: 'bottom-part' }, ' are the sides of the body. Sometimes there are words on them telling you about the power.'],
      ],
    },
    {
      sentences: [
        ['To use it, you take the two bits and push them into the holes in the wall.'],
        ['When they go in, they touch the power inside the wall.'],
        ['Then the power can go through the bits, through the long string, and into your thing.'],
        ['When you are done, you pull it out and the power stops.'],
      ],
    },
  ],
  flow: [
    { partIds: ['body', 'end'], sentenceRef: 1, caption: 'Body is the part you hold; end joins the long string.' },
    { partIds: ['bits', 'safety-bit'], sentenceRef: 2, caption: 'Bits go into the wall; safety bit keeps you safe.' },
    { partIds: ['top-part', 'bottom-part'], sentenceRef: 4, caption: 'Top and bottom are the sides of the body.' },
  ],
  keyExpressions: [
    { text: 'power plug', partId: 'body' },
    { text: 'bits', partId: 'bits' },
    { text: 'safety bit', partId: 'safety-bit' },
    { text: 'long string', partId: 'end' },
  ],
  color: '#FFFFFF',
}