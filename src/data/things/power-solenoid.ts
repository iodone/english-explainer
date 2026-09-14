import type { ThingData } from '../types';

export const powerSolenoid: ThingData = {
  id: 'power-solenoid',
  slug: 'power-solenoid',
  simpleName: 'The Push-Pull Thing',
  realName: 'Solenoid',
  category: 'power',
  color: '#4682B4',
  funFacts: [
    'This is a thing that moves in and out when you turn power on.',
    'It uses power to make a round piece of metal move.',
    'When the power is on, the metal goes in. When it is off, it comes back out.',
    'You can find them in locks that open with a button.',
    'They are also used in machines that need to push things.',
    'They work very fast — faster than you can see.'
  ],
  parts: [
    { id: 'body', label: 'body', realName: 'coil housing', position: [0, 0, 0], finish: 'hull' },
    { id: 'end', label: 'end', realName: 'plunger', position: [0, 0.15, 0], finish: 'titanium' },
    { id: 'top', label: 'top', realName: 'coil', position: [0, 0, 0], finish: 'warning' },
    { id: 'inside', label: 'inside', realName: 'core', position: [0, 0, 0], finish: 'cold' },
    { id: 'plug', label: 'plug', realName: 'connector', position: [0, -0.15, 0], finish: 'titanium' },
    { id: 'power', label: 'power', realName: 'spring', position: [0, 0.1, 0], finish: 'cold' }
  ],
  article: [
    {
      sentences: [
        ['This is a thing that pushes or pulls when you turn power on.'],
        ['The ', { text: 'body', part: 'body' }, ' holds the ', { text: 'top', part: 'top' }, ' inside.'],
        ['The ', { text: 'top', part: 'top' }, ' is made of a long piece of wire wound round and round.'],
        ['The ', { text: 'inside', part: 'inside' }, ' is a piece of metal that can move in and out.']
      ]
    },
    {
      sentences: [
        ['When power goes through the ', { text: 'top', part: 'top' }, ', it makes the ', { text: 'inside', part: 'inside' }, ' move.'],
        ['The ', { text: 'inside', part: 'inside' }, ' pushes the ', { text: 'end', part: 'end' }, ' out.'],
        ['When the power stops, the ', { text: 'power', part: 'power' }, ' pushes the ', { text: 'end', part: 'end' }, ' back in.'],
        ['The ', { text: 'plug', part: 'plug' }, ' joins it to the power from the wall or a battery.'],
        ['This happens very fast — faster than you can see.'],
        ['You can find them in locks that open with a button.'],
        ['They are also used in machines that need to push things.']
      ]
    }
  ],
  flow: [
    { partIds: ['plug', 'top'], caption: 'Power goes through the wire coil', sentenceRef: 4 },
    { partIds: ['inside', 'end'], caption: 'The core pushes the plunger out', sentenceRef: 5 },
    { partIds: ['power'], caption: 'The spring pushes it back in', sentenceRef: 6 },
    { partIds: ['body'], caption: 'The body holds all the parts', sentenceRef: 1 }
  ],
  keyExpressions: [
    { text: 'solenoid', partId: 'body' },
    { text: 'plunger', partId: 'end' },
    { text: 'coil', partId: 'top' },
    { text: 'core', partId: 'inside' }
  ]
};