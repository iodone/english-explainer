import type { ThingData } from '../types'

export const powerFuse: ThingData = {
  id: 'power-fuse',
  slug: 'power-fuse',
  simpleName: 'The Power Stopper',
  realName: 'Electrical fuse',
  category: 'power',
  funFacts: [
    'It breaks itself because it has to, to stop bad things from happening.',
    'When too much power goes through it, it gives up to save everything else.',
    'You have to get a new one after it breaks — it can not be fixed.',
    'It is one of the most important things that keeps your home safe from fire.',
    'Some of them are very small but can stop a very large flow of power.',
  ],
  parts: [
    { id: 'body', label: 'body', realName: 'Ceramic housing', position: [0, 0, 0], finish: 'hull' },
    { id: 'thin-wire', label: 'thin wire', realName: 'Fuse wire', position: [0, 0.06, 0], finish: 'titanium' },
    { id: 'ends', label: 'ends', realName: 'End caps', position: [0.14, 0, 0], finish: 'cold' },
    { id: 'window', label: 'window', realName: 'Inspection window', position: [0, 0.08, 0.06], finish: 'titanium' },
  ],
  article: [
    {
      sentences: [
        ['This is a ', { text: 'power stopper', dict: 'power-fuse' }, '. It keeps your home safe when too much power tries to go through the wires.'],
        ['The ', { text: 'body', part: 'body' }, ' is made of a hard stuff that does not burn. It holds everything inside safe.'],
        ['Inside, there is a very ', { text: 'thin wire', part: 'thin-wire' }, '. This wire is the most important part. If too much power goes through, this wire gets hot and breaks because it has to.'],
        ['The ', { text: 'ends', part: 'ends' }, ' join it to the rest of the power system. They make sure power can go through when things are working right.'],
        ['The ', { text: 'window', part: 'window' }, ' lets you look inside to see if the thin wire is still there. If it is broken, you need to get a new one.'],
      ],
    },
    {
      sentences: [
        ['When everything is working right, power goes through the thin wire without any problems.'],
        ['But if something goes wrong and too much power tries to get through, the thin wire gets very hot very fast.'],
        ['It gets very soft and breaks, which stops the power from going any further.'],
        ['This is how it keeps your home and your things safe from fire.'],
      ],
    },
  ],
  flow: [
    { partIds: ['body'], sentenceRef: 1, caption: 'The body is hard and does not burn.' },
    { partIds: ['thin-wire'], sentenceRef: 2, caption: 'The thin wire breaks because it has to, to stop power.' },
    { partIds: ['ends'], sentenceRef: 3, caption: 'The ends join it to the power system.' },
    { partIds: ['window'], sentenceRef: 4, caption: 'The window lets you check if the wire is still good.' },
  ],
  keyExpressions: [
    { text: 'power stopper', partId: 'body' },
    { text: 'thin wire', partId: 'thin-wire' },
    { text: 'ends', partId: 'ends' },
  ],
  color: '#FF6347',
}