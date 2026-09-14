import type { ThingData } from '../types';

export const spaceCoolantLoop: ThingData = {
  id: 'space-coolant-loop',
  slug: 'space-coolant-loop',
  simpleName: 'The Cold Circle',
  realName: 'Coolant Loop',
  category: 'space',
  color: '#4169E1',
  funFacts: [
    'This circle of pipes carries heat away from the inside of a ship.',
    'The cold stuff inside takes the heat with it as it moves around.',
    'A pump keeps the cold stuff moving all the time.',
    'At the outside end the heat goes out into space through the fins.',
    'Cold stuff that gets too warm can not carry any more heat.',
    'People check the pipes, because a small hole can stop the whole circle.'
  ],
  parts: [
    { id: 'pump', label: 'Push Pump', realName: 'Coolant Pump', position: [0, 0, -0.3], finish: 'titanium' },
    { id: 'pipe', label: 'Cold Pipe', realName: 'Coolant Line', position: [0.21, 0, 0.21], finish: 'hull' },
    { id: 'plate', label: 'Cold Plate', realName: 'Cold Plate', position: [-0.3, 0, 0], finish: 'cold' },
    { id: 'tank', label: 'Cold Tank', realName: 'Coolant Tank', position: [0.3, 0, 0], finish: 'titanium' },
    { id: 'fin', label: 'Cold Fins', realName: 'Radiator Panel', position: [0, 0, 0.3], finish: 'hull' },
    { id: 'valve', label: 'Turn Valve', realName: 'Shut Valve', position: [-0.21, 0, -0.21], finish: 'warning' }
  ],
  article: [
    {
      sentences: [
        ['A ship in space makes a lot of heat, and heat can not leave through the walls.'],
        ['The ', { text: 'push pump', part: 'pump' }, ' is the part that keeps the cold stuff moving.'],
        ['The ', { text: 'cold pipe', part: 'pipe' }, ' is the long line that the cold stuff moves through.'],
        ['The ', { text: 'cold plate', part: 'plate' }, ' is the flat part that takes heat from the machines.'],
        ['The ', { text: 'cold tank', part: 'tank' }, ' is the box that holds the cold stuff.']
      ]
    },
    {
      sentences: [
        ['The ', { text: 'cold fins', part: 'fin' }, ' are the flat parts that throw the heat out into space.'],
        ['The ', { text: 'turn valve', part: 'valve' }, ' is the part that lets people stop the cold stuff.'],
        ['The cold stuff takes heat from the plate and gets warm.'],
        ['It moves along the pipe to the fins and the heat goes out.'],
        ['Then the cold stuff goes back to the plate and starts again.'],
        ['The pump keeps this circle going day and night.']
      ]
    }
  ],
  flow: [
    { partIds: ['pump'], caption: 'The push pump keeps the cold stuff moving', sentenceRef: 1 },
    { partIds: ['pipe'], caption: 'The cold pipe carries the cold stuff', sentenceRef: 2 },
    { partIds: ['plate'], caption: 'The cold plate takes heat from the machines', sentenceRef: 3 },
    { partIds: ['fin'], caption: 'The cold fins throw the heat out', sentenceRef: 5 }
  ],
  keyExpressions: [
    { text: 'push pump', partId: 'pump' },
    { text: 'cold pipe', partId: 'pipe' },
    { text: 'cold plate', partId: 'plate' },
    { text: 'cold fins', partId: 'fin' }
  ]
};
