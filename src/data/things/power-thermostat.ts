import type { ThingData } from '../types';

export const powerThermostat: ThingData = {
  id: 'power-thermostat',
  slug: 'power-thermostat',
  simpleName: 'The Heat Holder',
  realName: 'Thermostat',
  category: 'power',
  color: '#F5F5F5',
  funFacts: [
    'This thing watches how hot or cold a room is and turns heat on or off.',
    'It has a part that feels the heat in the air and tells the heat maker what to do.',
    'You can set it to the heat you want and it will keep the room at that heat.',
    'It helps save power by not making heat when the room is already warm enough.',
    'Some of these can be set to make the room hotter or colder at different times.',
    'It is one of the most important things for keeping a home feeling good.'
  ],
  parts: [
    { id: 'body', label: 'Wall Part', realName: 'Thermostat Body', position: [0, 0, 0], finish: 'hull' },
    { id: 'end', label: 'Show Part', realName: 'Display Screen', position: [0, 0.02, -0.05], finish: 'titanium' },
    { id: 'top', label: 'Set Part', realName: 'Control Buttons', position: [0, 0.06, -0.05], finish: 'cold' },
    { id: 'inside', label: 'Feel Part', realName: 'Temperature Sensor', position: [0, 0, 0], finish: 'warning' },
    { id: 'wire', label: 'Line Part', realName: 'Wiring Terminal', position: [0, -0.05, 0], finish: 'hull' },
    { id: 'power', label: 'Power Part', realName: 'Power Supply', position: [0, 0.05, 0.05], finish: 'cold' }
  ],
  article: [
    {
      sentences: [
        ['This is a thing that watches how hot or cold a room is.'],
        ['The ', { text: 'body', part: 'body' }, ' is the part on the wall that holds everything.'],
        ['The ', { text: 'end', part: 'end' }, ' is the part that shows you the heat in the room.'],
        ['The ', { text: 'top', part: 'top' }, ' are the parts you push to set the heat you want.'],
        ['The ', { text: 'inside', part: 'inside' }, ' is the part that feels how hot the air is.']
      ]
    },
    {
      sentences: [
        ['The ', { text: 'wire', part: 'wire' }, ' is where the lines from the heat maker join in.'],
        ['The ', { text: 'power', part: 'power' }, ' gives power to the thing so it can work.'],
        ['When the room gets too cold, the ', { text: 'inside', part: 'inside' }, ' tells the heat maker to turn on.'],
        ['When the room is warm enough, it tells the heat maker to turn off.'],
        ['The ', { text: 'end', part: 'end' }, ' shows you the heat so you know if it is working.'],
        ['This thing helps save power by not making heat when it is not needed.']
      ]
    }
  ],
  flow: [
    { partIds: ['body', 'end'], caption: 'The wall part holds the show part', sentenceRef: 1 },
    { partIds: ['inside'], caption: 'The feel part watches the heat', sentenceRef: 4 },
    { partIds: ['top'], caption: 'You set the heat you want', sentenceRef: 3 },
    { partIds: ['wire', 'power'], caption: 'Lines and power join in', sentenceRef: 5 }
  ],
  keyExpressions: [
    { text: 'thermostat', partId: 'body' },
    { text: 'temperature sensor', partId: 'inside' },
    { text: 'display screen', partId: 'end' },
    { text: 'control buttons', partId: 'top' }
  ]
};
