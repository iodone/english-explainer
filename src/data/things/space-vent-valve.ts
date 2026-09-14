import type { ThingData } from '../types';

export const spaceVentValve: ThingData = {
  id: 'space-vent-valve',
  slug: 'space-vent-valve',
  simpleName: 'The Air Door',
  realName: 'Space Vent Valve',
  category: 'space',
  color: '#708090',
  funFacts: [
    'This part lets air move from one room to another in space.',
    'It can open just a little or all the way to let more air through.',
    'People use it to keep the air inside the ship safe to breathe.',
    'If this part breaks, the air in the ship could get bad very fast.',
    'It is made of strong metal so it can work for a long time.',
    'Some ships have many of these to control air in every room.'
  ],
  parts: [
    { id: 'body', label: 'Round Body', realName: 'Valve Housing', position: [0, 0, 0], finish: 'hull' },
    { id: 'end', label: 'Air Hole', realName: 'Port Opening', position: [0, 0, -0.25], finish: 'cold' },
    { id: 'top', label: 'Turn Handle', realName: 'Actuator Knob', position: [0, 0.18, 0], finish: 'titanium' },
    { id: 'inside', label: 'Move Part', realName: 'Gate Disc', position: [0, 0, 0], finish: 'warning' },
    { id: 'seal', label: 'Air Stop Ring', realName: 'Gasket Seal', position: [0, 0, -0.1], finish: 'hull' },
    { id: 'power', label: 'Push Part', realName: 'Spring Return', position: [0.15, 0, 0], finish: 'cold' }
  ],
  article: [
    {
      sentences: [
        ['This is a part that lets air move through a wall in space.'],
        ['The ', { text: 'body', part: 'body' }, ' is a round metal shell that holds all the parts inside.'],
        ['The ', { text: 'end', part: 'end' }, ' is the hole where air comes in or goes out.'],
        ['The ', { text: 'top', part: 'top' }, ' is a handle that people turn to open or close the air door.'],
        ['The ', { text: 'inside', part: 'inside' }, ' is a flat round piece that moves to let air through.']
      ]
    },
    {
      sentences: [
        ['The ', { text: 'seal', part: 'seal' }, ' is a soft ring that stops air from getting out when the door is shut.'],
        ['The ', { text: 'power', part: 'power' }, ' pushes the door shut so air stays in.'],
        ['When the handle turns, the ', { text: 'inside', part: 'inside' }, ' moves to one side.'],
        ['Air then goes through the ', { text: 'end', part: 'end' }, ' and into the next room.'],
        ['The ', { text: 'seal', part: 'seal' }, ' makes sure no air gets away when the door is shut.'],
        ['This part helps keep the air inside the ship safe for people to breathe.']
      ]
    }
  ],
  flow: [
    { partIds: ['body', 'end'], caption: 'The round body holds the air hole', sentenceRef: 1 },
    { partIds: ['top', 'inside'], caption: 'The handle moves the flat part', sentenceRef: 3 },
    { partIds: ['seal', 'power'], caption: 'The ring and push part keep air in', sentenceRef: 5 },
    { partIds: ['end'], caption: 'Air goes through the hole to the next room', sentenceRef: 8 }
  ],
  keyExpressions: [
    { text: 'vent valve', partId: 'body' },
    { text: 'actuator knob', partId: 'top' },
    { text: 'gasket seal', partId: 'seal' },
    { text: 'spring return', partId: 'power' }
  ]
};
