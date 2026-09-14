import type { ThingData } from '../types'

export const powerLight: ThingData = {
  id: 'power-light',
  slug: 'power-light',
  simpleName: 'The Light Maker',
  realName: 'Light fixture',
  category: 'power',
  funFacts: [
    'The first ones used fire to make light a very long time ago.',
    'New ones use much less power than old ones and last much longer.',
    'Some can change how bright they are when you tell them to.',
    'Some can even change their color to make a room feel different.',
    'Without them, we would have to go to sleep when the sun goes down.',
  ],
  parts: [
    { id: 'body', label: 'body', realName: 'Fixture body', position: [0, 0.08, 0], finish: 'hull' },
    { id: 'light-part', label: 'light part', realName: 'Light bulb', position: [0, 0, 0], finish: 'titanium' },
    { id: 'cover', label: 'cover', realName: 'Lampshade', position: [0, 0.02, 0], finish: 'cold' },
    { id: 'wire', label: 'wire', realName: 'Power wire', position: [0, 0.12, 0], finish: 'hull' },
    { id: 'switch', label: 'switch', realName: 'Switch', position: [0, 0.1, 0.06], finish: 'cold' },
    { id: 'hold-part', label: 'hold part', realName: 'Mounting bracket', position: [0, 0.14, 0], finish: 'titanium' },
  ],
  article: [
    {
      sentences: [
        ['This is a ', { text: 'light maker', dict: 'power-light' }, '. It turns power into light so you can see when it is dark.'],
        ['The ', { text: 'body', part: 'body' }, ' is the part that holds everything together. It is usually on the wall or the top of a room.'],
        ['The ', { text: 'light part', part: 'light-part' }, ' is the part that actually makes the light. When power goes through it, it gets bright.'],
        ['The ', { text: 'cover', part: 'cover' }, ' goes around the light part. It spreads the light out so it is not too bright in one spot.'],
        ['The ', { text: 'wire', part: 'wire' }, ' brings power from the wall to the light. Without power, the light can not work.'],
        ['The ', { text: 'switch', part: 'switch' }, ' lets you turn it on and off. When you move it, power goes to the light or stops.'],
        ['The ', { text: 'hold part', part: 'hold-part' }, ' keeps it on the wall or top of the room. It must be strong so it does not fall.'],
      ],
    },
    {
      sentences: [
        ['When you move the switch, power goes through the wire to the light part.'],
        ['The light part gets bright and sends light out through the cover.'],
        ['The cover makes the light soft and nice instead of too bright.'],
        ['When you move the switch again, the power stops and the light goes off.'],
      ],
    },
  ],
  flow: [
    { partIds: ['body'], sentenceRef: 1, caption: 'The body holds everything together.' },
    { partIds: ['light-part', 'cover'], sentenceRef: 2, caption: 'Light part makes light; cover spreads it.' },
    { partIds: ['wire'], sentenceRef: 4, caption: 'The wire brings power from the wall.' },
    { partIds: ['switch'], sentenceRef: 5, caption: 'The switch turns it on and off.' },
    { partIds: ['hold-part'], sentenceRef: 6, caption: 'The hold part keeps it on the wall.' },
  ],
  keyExpressions: [
    { text: 'light maker', partId: 'body' },
    { text: 'light part', partId: 'light-part' },
    { text: 'cover', partId: 'cover' },
    { text: 'switch', partId: 'switch' },
  ],
  color: '#FFFACD',
}