import type { ThingData } from '../types';

export const powerChokeCoil: ThingData = {
  id: 'power-choke-coil',
  slug: 'power-choke-coil',
  simpleName: 'The Slow Wire Ring',
  realName: 'Choke Coil',
  category: 'power',
  color: '#2F4F4F',
  funFacts: [
    'This part is a ring of wire that slows down fast changes in power.',
    'It helps keep the power in a line calm and even.',
    'You can find it in things that change power from one kind to another.',
    'It works by making a force that pushes back against fast changes.',
    'Without it, fast changes in power could hurt other parts.',
    'It has no parts that move so it can work for a very long time.'
  ],
  parts: [
    { id: 'body', label: 'Wire Ring', realName: 'Coil Winding', position: [0, 0, 0], finish: 'hull' },
    { id: 'end', label: 'Wire End', realName: 'Lead Wire', position: [-0.15, 0, 0], finish: 'cold' },
    { id: 'top', label: 'Core Part', realName: 'Ferrite Core', position: [0, 0, 0], finish: 'titanium' },
    { id: 'inside', label: 'Middle Part', realName: 'Air Gap', position: [0, 0, 0], finish: 'warning' },
    { id: 'plug', label: 'Wire One', realName: 'Input Lead', position: [-0.1, 0, 0], finish: 'titanium' },
    { id: 'power', label: 'Wire Two', realName: 'Output Lead', position: [0.1, 0, 0], finish: 'cold' }
  ],
  article: [
    {
      sentences: [
        ['This is a ring of wire that slows down fast changes in power.'],
        ['The ', { text: 'body', part: 'body' }, ' is the wire that turns round and round to make a ring.'],
        ['The ', { text: 'end', part: 'end' }, ' is the wire that comes out of the ring.'],
        ['The ', { text: 'top', part: 'top' }, ' is the hard part in the middle of the ring.'],
        ['The ', { text: 'inside', part: 'inside' }, ' is the open space in the middle of the ring.']
      ]
    },
    {
      sentences: [
        ['The ', { text: 'plug', part: 'plug' }, ' is the first wire that brings power in.'],
        ['The ', { text: 'power', part: 'power' }, ' is the second wire that takes power out.'],
        ['When power comes in fast, the ', { text: 'body', part: 'body' }, ' pushes back against it.'],
        ['This makes the power go out in a slow, even way.'],
        ['The ', { text: 'top', part: 'top' }, ' helps the ring push back harder.'],
        ['This part is very good for keeping power calm in a line.']
      ]
    }
  ],
  flow: [
    { partIds: ['plug', 'end'], caption: 'Power comes in through the first wire', sentenceRef: 5 },
    { partIds: ['body', 'inside'], caption: 'The wire ring pushes back against fast changes', sentenceRef: 7 },
    { partIds: ['top'], caption: 'The core helps push back harder', sentenceRef: 9 },
    { partIds: ['power'], caption: 'Slow power goes out through the second wire', sentenceRef: 6 }
  ],
  keyExpressions: [
    { text: 'choke coil', partId: 'body' },
    { text: 'coil winding', partId: 'body' },
    { text: 'ferrite core', partId: 'top' },
    { text: 'air gap', partId: 'inside' }
  ]
};
