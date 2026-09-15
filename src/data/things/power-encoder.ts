import type { ThingData } from '../types';

export const powerEncoder: ThingData = {
  id: 'power-encoder',
  slug: 'power-encoder',
  simpleName: 'The Turn Reader',
  realName: 'Encoder',
  category: 'power',
  color: '#6B8E23',
  funFacts: [
    'This part turns a turning shaft into a number.',
    'A small lamp and a read eye work together to count the marks.',
    'The box tells the computer how far the machine has turned.',
    'People use it on robot arms and on big machines.',
    'It can also tell the computer which way the shaft turns.',
    'It works with no touch, so it does not wear out fast.'
  ],
  parts: [
    { id: 'body', label: 'Main Body', realName: 'Encoder Body', position: [0, 0, 0], finish: 'hull' },
    { id: 'disc', label: 'Mark Disc', realName: 'Code Disc', position: [0, 0, 0], finish: 'titanium' },
    { id: 'lamp', label: 'Small Lamp', realName: 'Light Source', position: [0, 0.1, 0], finish: 'cold' },
    { id: 'eye', label: 'Read Eye', realName: 'Sensor Eye', position: [0, -0.1, 0], finish: 'warning' },
    { id: 'shaft', label: 'Turn Shaft', realName: 'Shaft', position: [0.24, 0, 0], finish: 'titanium' },
    { id: 'wire', label: 'Lead Wire', realName: 'Lead Line', position: [-0.24, -0.06, 0], finish: 'hull' }
  ],
  article: [
    {
      sentences: [
        ['This part turns a turning shaft into a number.'],
        ['The ', { text: 'main body', part: 'body' }, ' is the case that holds the parts.'],
        ['The ', { text: 'mark disc', part: 'disc' }, ' is the round part with marks on it.'],
        ['The ', { text: 'small lamp', part: 'lamp' }, ' sends light at the disc.'],
        ['The ', { text: 'read eye', part: 'eye' }, ' sees the light that comes through.']
      ]
    },
    {
      sentences: [
        ['The ', { text: 'turn shaft', part: 'shaft' }, ' is the part that turns with the machine.'],
        ['The ', { text: 'lead wire', part: 'wire' }, ' takes the number to the computers.'],
        ['As the shaft turns, the disc turns with it.'],
        ['The lamp sends light through the marks on the disc.'],
        ['The read eye sees the marks go by and counts them.'],
        ['The box tells the computer how far the machine has turned.']
      ]
    }
  ],
  flow: [
    { partIds: ['shaft'], caption: 'The turn shaft turns with the machine', sentenceRef: 5 },
    { partIds: ['disc'], caption: 'The mark disc is the round part with marks on it', sentenceRef: 2 },
    { partIds: ['lamp'], caption: 'The small lamp sends light at the disc', sentenceRef: 3 },
    { partIds: ['eye'], caption: 'The read eye sees the light that comes through', sentenceRef: 4 }
  ],
  keyExpressions: [
    { text: 'turn shaft', partId: 'shaft' },
    { text: 'mark disc', partId: 'disc' },
    { text: 'small lamp', partId: 'lamp' },
    { text: 'read eye', partId: 'eye' }
  ]
};
