import type { ThingData } from '../types'

export const powerHeater: ThingData = {
  id: 'power-heater',
  slug: 'power-heater',
  simpleName: 'The Heat Maker',
  realName: 'Electric heater',
  category: 'power',
  funFacts: [
    'It turns power into heat using a special wire inside.',
    'Some of them blow hot air, while others just get hot on their own.',
    'They can make a room warm in just a few minutes.',
    'You should never put things on top of them or too close to them.',
    'Some of them can turn off by themselves if they get too hot.',
  ],
  parts: [
    { id: 'body', label: 'body', realName: 'Heater housing', position: [0, 0, 0], finish: 'hull' },
    { id: 'hot-part', label: 'hot part', realName: 'Heating element', position: [0, 0, 0.04], finish: 'titanium' },
    { id: 'blow-part', label: 'blow part', realName: 'Fan', position: [0, -0.06, 0.04], finish: 'cold' },
    { id: 'buttons', label: 'buttons', realName: 'Thermostat', position: [0, 0.08, 0.06], finish: 'hull' },
    { id: 'wire', label: 'wire', realName: 'Power cord', position: [0, -0.04, -0.06], finish: 'cold' },
    { id: 'safe-part', label: 'safe part', realName: 'Safety switch', position: [0, 0.06, -0.04], finish: 'titanium' },
  ],
  article: [
    {
      sentences: [
        ['This is a ', { text: 'heat maker', dict: 'power-heater' }, '. It uses power to make a room warm when it is cold outside.'],
        ['The ', { text: 'body', part: 'body' }, ' holds all the parts inside. It has many small holes that let the hot air come out.'],
        ['The ', { text: 'hot part', part: 'hot-part' }, ' is inside the body. When power goes through it, it gets very hot.'],
        ['The ', { text: 'blow part', part: 'blow-part' }, ' pushes air past the hot part. This makes the warm air go out into the room.'],
        ['The ', { text: 'buttons', part: 'buttons' }, ' let you choose how hot you want the room to be. When the room is warm enough, it turns off.'],
        ['The ', { text: 'wire', part: 'wire' }, ' brings power from the wall. Without it, the heater can not work.'],
        ['The ', { text: 'safe part', part: 'safe-part' }, ' turns it off if it gets too hot. This stops bad things like fires from happening.'],
      ],
    },
    {
      sentences: [
        ['When you turn it on, power goes through the wire to the hot part.'],
        ['The hot part gets hot and the blow part pushes air over it.'],
        ['Warm air comes out of the holes in the body and fills the room.'],
        ['When the room is warm enough, the buttons turn it off until it gets cold again.'],
      ],
    },
  ],
  flow: [
    { partIds: ['body'], sentenceRef: 1, caption: 'The body has holes for hot air.' },
    { partIds: ['hot-part'], sentenceRef: 2, caption: 'The hot part gets very hot inside.' },
    { partIds: ['blow-part'], sentenceRef: 3, caption: 'The blow part pushes air over the hot part.' },
    { partIds: ['buttons'], sentenceRef: 4, caption: 'Buttons choose how warm you want it.' },
    { partIds: ['wire', 'safe-part'], sentenceRef: 5, caption: 'Wire brings power; safe part keeps it safe.' },
  ],
  keyExpressions: [
    { text: 'heat maker', partId: 'body' },
    { text: 'hot part', partId: 'hot-part' },
    { text: 'blow part', partId: 'blow-part' },
    { text: 'safe part', partId: 'safe-part' },
  ],
  color: '#FF4500',
}