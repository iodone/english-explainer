import type { ThingData } from '../types';

export const powerBusbar: ThingData = {
  id: 'power-busbar',
  slug: 'power-busbar',
  simpleName: 'The Power Road',
  realName: 'Busbar',
  category: 'power',
  color: '#CD7F32',
  funFacts: [
    'A bar like this can carry much more power than a small wire.',
    'It is often made of copper because copper carries power very well.',
    'The bar gets hot when much power runs through it.',
    'Big bars are used in power plants, trains, and tall buildings.',
    'The power watch shows if too much power is going through.',
    'People must not touch the bar, because the power can hurt them.'
  ],
  parts: [
    { id: 'bar', label: 'Long Bar', realName: 'Main Busbar', position: [0, 0, 0], finish: 'hull' },
    { id: 'plate', label: 'Join Plate', realName: 'Connection Plate', position: [0, 0, 0.08], finish: 'titanium' },
    { id: 'hole', label: 'Bolt Holes', realName: 'Mounting Holes', position: [0.14, 0, 0], finish: 'cold' },
    { id: 'cover', label: 'Top Cover', realName: 'Insulating Cover', position: [0, 0.05, 0], finish: 'hull' },
    { id: 'stand', label: 'Hold Stand', realName: 'Support Insulator', position: [0, -0.08, 0], finish: 'titanium' },
    { id: 'meter', label: 'Power Watch', realName: 'Current Meter', position: [0.2, 0.1, 0.06], finish: 'warning' }
  ],
  article: [
    {
      sentences: [
        ['This long bar carries power from one place to many other places.'],
        ['The ', { text: 'long bar', part: 'bar' }, ' is a thick piece of metal that power runs through.'],
        ['The ', { text: 'join plate', part: 'plate' }, ' is where another wire can be added.'],
        ['The ', { text: 'bolt holes', part: 'hole' }, ' are where big bolts hold the bar in place.'],
        ['The ', { text: 'top cover', part: 'cover' }, ' keeps hands away from the hot metal.']
      ]
    },
    {
      sentences: [
        ['The ', { text: 'hold stand', part: 'stand' }, ' keeps the bar up off the floor and stops power from going into it.'],
        ['The ', { text: 'power watch', part: 'meter' }, ' shows how much power goes through the bar.'],
        ['Power runs along the bar and then goes out through a smaller wire.'],
        ['This bar is used in power plants and big buildings with many rooms.'],
        ['It can carry much more power than a single wire can.'],
        ['The bar is often made of copper because copper carries power well.']
      ]
    }
  ],
  flow: [
    { partIds: ['bar'], caption: 'The long bar carries power to many places', sentenceRef: 1 },
    { partIds: ['plate'], caption: 'The join plate lets another wire be added', sentenceRef: 2 },
    { partIds: ['stand'], caption: 'The hold stand keeps the bar off the floor', sentenceRef: 5 },
    { partIds: ['meter'], caption: 'The power watch shows how much power goes through', sentenceRef: 6 }
  ],
  keyExpressions: [
    { text: 'long bar', partId: 'bar' },
    { text: 'join plate', partId: 'plate' },
    { text: 'hold stand', partId: 'stand' },
    { text: 'power watch', partId: 'meter' }
  ]
};
