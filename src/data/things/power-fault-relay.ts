import type { ThingData } from '../types';

export const powerFaultRelay: ThingData = {
  id: 'power-fault-relay',
  slug: 'power-fault-relay',
  simpleName: 'The Bad Power Finder',
  realName: 'Fault Relay',
  category: 'power',
  color: '#B22222',
  funFacts: [
    'This box looks for bad power in a line and cuts it off fast.',
    'Bad power can start a fire or stop a whole street.',
    'The box can tell the small bit of power that goes out from the bit that comes back.',
    'When the two do not add up, the box cuts the line in a small part of a second.',
    'Someone must come and set it by hand before the power goes on again.',
    'These boxes are in most walls where power comes into a house.'
  ],
  parts: [
    { id: 'wire', label: 'Power Wire', realName: 'Terminal', position: [-0.24, 0, 0], finish: 'hull' },
    { id: 'sense', label: 'Bad Power Sensor', realName: 'Current Sensor', position: [0, 0.12, 0], finish: 'warning' },
    { id: 'coil', label: 'Pick Coil', realName: 'Trip Coil', position: [-0.08, 0, 0], finish: 'titanium' },
    { id: 'contact', label: 'Break Contact', realName: 'Trip Contact', position: [0.12, 0, 0], finish: 'titanium' },
    { id: 'case', label: 'Main Case', realName: 'Relay Case', position: [0, 0, 0], finish: 'hull' },
    { id: 'set', label: 'Set Knob', realName: 'Setting Dial', position: [0, -0.16, 0.13], finish: 'cold' }
  ],
  article: [
    {
      sentences: [
        ['This box looks for bad power in a line and cuts the line off very fast.'],
        ['The ', { text: 'power wire', part: 'wire' }, ' is where the power comes in and goes out.'],
        ['The ', { text: 'bad power sensor', part: 'sense' }, ' is the part that watches the power all the time.'],
        ['The ', { text: 'pick coil', part: 'coil' }, ' is the small roll of wire that feels the power.'],
        ['The ', { text: 'break contact', part: 'contact' }, ' is the part that opens and stops the power.']
      ]
    },
    {
      sentences: [
        ['The ', { text: 'main case', part: 'case' }, ' is the box that holds all the parts.'],
        ['The ', { text: 'set knob', part: 'set' }, ' is the part you turn to pick how much power is too much.'],
        ['Power goes out along the wire and comes back on the same line.'],
        ['When some of it goes to the ground, the two sides do not add up.'],
        ['The coil feels that and the break contact opens in a small part of a second.'],
        ['A person must set it by hand before the power can go on again.']
      ]
    }
  ],
  flow: [
    { partIds: ['sense'], caption: 'The bad power sensor watches the power all the time', sentenceRef: 2 },
    { partIds: ['coil'], caption: 'The pick coil feels the power in the wire', sentenceRef: 3 },
    { partIds: ['contact'], caption: 'The break contact opens and stops the power', sentenceRef: 4 },
    { partIds: ['set'], caption: 'The set knob picks how much power is too much', sentenceRef: 6 }
  ],
  keyExpressions: [
    { text: 'bad power sensor', partId: 'sense' },
    { text: 'pick coil', partId: 'coil' },
    { text: 'break contact', partId: 'contact' },
    { text: 'set knob', partId: 'set' }
  ]
};
