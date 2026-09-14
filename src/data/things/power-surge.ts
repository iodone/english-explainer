import type { ThingData } from '../types';

export const powerSurge: ThingData = {
  id: 'power-surge',
  slug: 'power-surge',
  simpleName: 'The Power Jump Stopper',
  realName: 'Surge Protector',
  category: 'power',
  color: '#F5F5F5',
  funFacts: [
    'This thing stops big power jumps from breaking your things.',
    'It takes in the big jump and lets just normal power through.',
    'You can find it in power boxes that have many holes for plugs.',
    'Without it, a big power jump could break your phone or computer.',
    'Some of these can take many big jumps before they need to be changed.',
    'It works very fast to stop the jump before it gets to your things.'
  ],
  parts: [
    { id: 'body', label: 'Box Body', realName: 'Protector Housing', position: [0, 0, 0], finish: 'hull' },
    { id: 'end', label: 'Wall Plug', realName: 'Power Plug', position: [0, 0, -0.15], finish: 'cold' },
    { id: 'top', label: 'Hole Part', realName: 'Outlet Strip', position: [0, 0.08, 0], finish: 'titanium' },
    { id: 'inside', label: 'Stop Part', realName: 'MOV Circuit', position: [0, 0, 0], finish: 'warning' },
    { id: 'light', label: 'Show Light', realName: 'Status LED', position: [0.08, 0.06, -0.05], finish: 'titanium' },
    { id: 'switch', label: 'On Off Part', realName: 'Power Switch', position: [-0.08, 0.06, -0.05], finish: 'hull' }
  ],
  article: [
    {
      sentences: [
        ['This is a thing that stops big power jumps from breaking your things.'],
        ['The ', { text: 'body', part: 'body' }, ' is the hard outside that holds all the parts.'],
        ['The ', { text: 'end', part: 'end' }, ' is the part that goes into the wall to get power.'],
        ['The ', { text: 'top', part: 'top' }, ' is the part with holes where you put your plugs in.'],
        ['The ', { text: 'inside', part: 'inside' }, ' is the part that takes in the big power jump.']
      ]
    },
    {
      sentences: [
        ['The ', { text: 'light', part: 'light' }, ' shows you that the thing is working and keeping things safe.'],
        ['The ', { text: 'switch', part: 'switch' }, ' lets you turn it on and off.'],
        ['When a big power jump comes, the ', { text: 'inside', part: 'inside' }, ' takes it in very fast.'],
        ['This stops the jump from going through the ', { text: 'top', part: 'top' }, ' to your things.'],
        ['The ', { text: 'light', part: 'light' }, ' will go out if the inside part is used up.'],
        ['This thing is very important for keeping your things safe from power jumps.']
      ]
    }
  ],
  flow: [
    { partIds: ['end', 'body'], caption: 'Power comes in from the wall', sentenceRef: 2 },
    { partIds: ['inside'], caption: 'The stop part takes in big power jumps', sentenceRef: 7 },
    { partIds: ['top'], caption: 'Safe power goes out to your things', sentenceRef: 8 },
    { partIds: ['light', 'switch'], caption: 'The light shows it is working', sentenceRef: 5 }
  ],
  keyExpressions: [
    { text: 'surge protector', partId: 'body' },
    { text: 'MOV circuit', partId: 'inside' },
    { text: 'outlet strip', partId: 'top' },
    { text: 'status LED', partId: 'light' }
  ]
};
