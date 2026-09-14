import type { ThingData } from '../types';

export const homeDehumidifier: ThingData = {
  id: 'home-dehumidifier',
  slug: 'home-dehumidifier',
  simpleName: 'The Water Taker',
  realName: 'Dehumidifier',
  category: 'home',
  color: '#B0C0C0',
  funFacts: [
    'A room can feel wet when the air holds too much water.',
    'This box pulls that water out of the air and keeps it in a water tank.',
    'Damp air can make walls feel cold and let small living things grow.',
    'The water it gathers can be used for plants or for washing.',
    'People use these boxes in rooms that feel too wet.',
    'A dry room feels warmer, so people can rest well at night.'
  ],
  parts: [
    { id: 'case', label: 'Main Case', realName: 'Main Shell', position: [0, 0, 0], finish: 'hull' },
    { id: 'holes', label: 'Air Holes', realName: 'Air Inlet', position: [0, 0.14, -0.12], finish: 'cold' },
    { id: 'coil', label: 'Cold Snake', realName: 'Cooling Coil', position: [0, 0.06, 0], finish: 'titanium' },
    { id: 'fan', label: 'Air Pusher', realName: 'Fan Blade', position: [0, 0.16, -0.06], finish: 'hull' },
    { id: 'tank', label: 'Water Box', realName: 'Water Tank', position: [0, -0.16, 0], finish: 'hull' },
    { id: 'switch', label: 'Turn Part', realName: 'Control Switch', position: [0.08, 0, -0.13], finish: 'warning' }
  ],
  article: [
    {
      sentences: [
        ['This box takes water out of the air in a room.'],
        ['The ', { text: 'main case', part: 'case' }, ' is the box that holds all the other parts.'],
        ['A ', { text: 'fan blade', part: 'fan' }, ' pulls air into the box from the room.'],
        ['The air goes over a ', { text: 'cold snake', part: 'coil' }, ', and the water in it turns into drops.'],
        ['The ', { text: 'air holes', part: 'holes' }, ' on the side let the air come in.']
      ]
    },
    {
      sentences: [
        ['The drops fall down into the ', { text: 'water box', part: 'tank' }, ' at the bottom.'],
        ['When the water box is full, a small light tells you to empty it.'],
        ['The ', { text: 'turn part', part: 'switch' }, ' lets you set how dry you want the air.'],
        ['Dry air feels better in a warm room and keeps the walls clean.'],
        ['It also helps stop small living things that grow in damp air.'],
        ['This box makes a wet room dry, so people can rest well at home.']
      ]
    }
  ],
  flow: [
    { partIds: ['fan'], caption: 'The fan pulls damp air into the box', sentenceRef: 2 },
    { partIds: ['coil'], caption: 'The cold snake turns water into drops', sentenceRef: 3 },
    { partIds: ['tank'], caption: 'The drops fall into the water box', sentenceRef: 5 },
    { partIds: ['switch'], caption: 'The turn part sets how dry the air will be', sentenceRef: 7 }
  ],
  keyExpressions: [
    { text: 'water box', partId: 'tank' },
    { text: 'cold snake', partId: 'coil' },
    { text: 'fan blade', partId: 'fan' },
    { text: 'air holes', partId: 'holes' }
  ]
};
