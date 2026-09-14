import type { ThingData } from '../types';

export const powerInductor: ThingData = {
  id: 'power-inductor',
  slug: 'power-inductor',
  simpleName: 'The Power Storer',
  realName: 'Inductor',
  category: 'power',
  color: '#4682B4',
  funFacts: [
    'This part can store power in a field you can not see.',
    'The field grows when power first comes in.',
    'It can give the power back a short time later.',
    'The wire turns round and round many times.',
    'It has no parts that move, so it can work for many years.',
    'You can find one in many things that use power at home.'
  ],
  parts: [
    { id: 'body', label: 'Wire Body', realName: 'Wire Coil', position: [0, 0, 0], finish: 'hull' },
    { id: 'end', label: 'Wire End', realName: 'Lead Wire', position: [-0.3, 0, 0], finish: 'cold' },
    { id: 'top', label: 'Top Core', realName: 'Iron Core', position: [0, 0.08, 0], finish: 'titanium' },
    { id: 'inside', label: 'Power Heart', realName: 'Magnetic Field', position: [0, 0, 0], finish: 'warning' },
    { id: 'plug', label: 'Power In', realName: 'Input Lead', position: [-0.18, 0, 0], finish: 'titanium' },
    { id: 'power', label: 'Power Out', realName: 'Output Lead', position: [0.18, 0, 0], finish: 'cold' }
  ],
  article: [
    {
      sentences: [
        ['This part stores power in a field that you can not see.'],
        ['The ', { text: 'body', part: 'body' }, ' is a long wire that turns round and round.'],
        ['The ', { text: 'end', part: 'end' }, ' is where the wire meets the line from the wall.'],
        ['The ', { text: 'top', part: 'top' }, ' is a hard piece in the middle of the wire.'],
        ['The ', { text: 'inside', part: 'inside' }, ' is a field that holds power for a short time.']
      ]
    },
    {
      sentences: [
        ['The ', { text: 'plug', part: 'plug' }, ' takes power in from the wall.'],
        ['The ', { text: 'power', part: 'power' }, ' goes out to the rest of the thing.'],
        ['When power first comes in, the field starts to grow.'],
        ['The field can hold that power and give it back later.'],
        ['This helps keep the push of power even and slow.'],
        ['A part like this can store power for a short time.']
      ]
    }
  ],
  flow: [
    { partIds: ['plug'], caption: 'Power comes in from the wall', sentenceRef: 5 },
    { partIds: ['body'], caption: 'The wire turns round and round', sentenceRef: 1 },
    { partIds: ['inside'], caption: 'The field holds power for a short time', sentenceRef: 7 },
    { partIds: ['power'], caption: 'Power goes out to the rest of the thing', sentenceRef: 6 }
  ],
  keyExpressions: [
    { text: 'inductor', partId: 'body' },
    { text: 'wire coil', partId: 'body' },
    { text: 'magnetic field', partId: 'inside' },
    { text: 'input lead', partId: 'plug' }
  ]
};
