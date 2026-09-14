import type { ThingData } from '../types';

export const powerSurgeProtector: ThingData = {
  id: 'power-surge-protector',
  slug: 'power-surge-protector',
  simpleName: 'The Power Guard',
  realName: 'Surge Protector',
  category: 'power',
  color: '#FF6347',
  funFacts: [
    'A big jump of power can hurt the small parts inside a computer.',
    'The box takes the jump and turns it into heat.',
    'The small light shows that the box is still working.',
    'It does not stop the power all the time.',
    'People use it for computers and for boxes that must not stop.',
    'A jump can come from a storm or from a big machine next door.'
  ],
  parts: [
    { id: 'body', label: 'Main Body', realName: 'Body Case', position: [0, 0, 0], finish: 'hull' },
    { id: 'cover', label: 'Top Cover', realName: 'Cover', position: [0, 0.1, 0], finish: 'cold' },
    { id: 'inside', label: 'Guard Inside', realName: 'Guard Disc', position: [-0.06, 0, 0], finish: 'warning' },
    { id: 'end', label: 'Cable End', realName: 'Cable End', position: [0.22, 0, 0], finish: 'titanium' },
    { id: 'wire', label: 'Lead Wire', realName: 'Lead Wire', position: [0.38, 0, 0], finish: 'titanium' },
    { id: 'light', label: 'Pilot Light', realName: 'Pilot Light', position: [0.12, 0.12, 0], finish: 'warning' }
  ],
  article: [
    {
      sentences: [
        ['A big jump of power can hurt the small parts inside a computer.'],
        ['The ', { text: 'main body', part: 'body' }, ' is the box that holds the parts.'],
        ['The ', { text: 'top cover', part: 'cover' }, ' is the lid that goes over the top.'],
        ['The ', { text: 'guard inside', part: 'inside' }, ' is the part that takes the jump and turns it into heat.'],
        ['The ', { text: 'cable end', part: 'end' }, ' is the end where the power comes in.']
      ]
    },
    {
      sentences: [
        ['The ', { text: 'lead wire', part: 'wire' }, ' is the wire that takes the power on to the machines.'],
        ['The ', { text: 'pilot light', part: 'light' }, ' is the small light that shows it is working.'],
        ['When a big jump comes, the guard inside takes it at once.'],
        ['The jump turns into heat, so the machines do not feel it.'],
        ['The lead wire takes the safe power on to the machines.'],
        ['The pilot light stays on, so you know the box is still working.']
      ]
    }
  ],
  flow: [
    { partIds: ['inside'], caption: 'The guard inside takes the jump', sentenceRef: 3 },
    { partIds: ['end'], caption: 'The cable end is where the power comes in', sentenceRef: 4 },
    { partIds: ['wire'], caption: 'The lead wire takes the power on to the machines', sentenceRef: 5 },
    { partIds: ['light'], caption: 'The pilot light shows the box is working', sentenceRef: 6 }
  ],
  keyExpressions: [
    { text: 'guard inside', partId: 'inside' },
    { text: 'lead wire', partId: 'wire' },
    { text: 'pilot light', partId: 'light' },
    { text: 'cable end', partId: 'end' }
  ]
};
