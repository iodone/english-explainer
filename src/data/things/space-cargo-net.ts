import type { ThingData } from '../types';

export const spaceCargoNet: ThingData = {
  id: 'space-cargo-net',
  slug: 'space-cargo-net',
  simpleName: 'The Hold Net',
  realName: 'Space Cargo Net',
  category: 'space',
  color: '#808080',
  funFacts: [
    'This net holds things down in space so they do not float away.',
    'It is made of very strong lines that do not break easy.',
    'People use it to keep boxes and bags in one place on the ship.',
    'Without it, things would float around and hit people or other parts.',
    'The net can hold things of many different sizes and shapes.',
    'It is easy to put on and take off so people can get to things fast.'
  ],
  parts: [
    { id: 'body', label: 'Net Body', realName: 'Mesh Panel', position: [0, 0, 0], finish: 'hull' },
    { id: 'end', label: 'Hook End', realName: 'Hook Fastener', position: [0, 0, -0.2], finish: 'cold' },
    { id: 'top', label: 'Top Line', realName: 'Upper Cord', position: [0, 0.15, 0], finish: 'titanium' },
    { id: 'line', label: 'Cross Lines', realName: 'Bungee Cords', position: [0, 0, 0], finish: 'warning' },
    { id: 'corner', label: 'Corner Part', realName: 'Corner Bracket', position: [0.15, 0.15, 0], finish: 'titanium' },
    { id: 'base', label: 'Bottom Line', realName: 'Lower Cord', position: [0, -0.15, 0], finish: 'hull' }
  ],
  article: [
    {
      sentences: [
        ['This is a net that holds things down in space.'],
        ['The ', { text: 'body', part: 'body' }, ' is the part with many lines that go over things.'],
        ['The ', { text: 'end', part: 'end' }, ' is a hook that joins the net to the wall.'],
        ['The ', { text: 'top', part: 'top' }, ' is the line at the top that holds the net up.'],
        ['The ', { text: 'line', part: 'line' }, ' are the lines that go across to hold things in.']
      ]
    },
    {
      sentences: [
        ['The ', { text: 'corner', part: 'corner' }, ' is a small part that holds the net at the sides.'],
        ['The ', { text: 'lower line', part: 'base' }, ' is the line at the bottom that holds things down.'],
        ['In space, things do not stay put so you need a net to hold them.'],
        ['The ', { text: 'line', part: 'line' }, ' go over and under things to keep them in place.'],
        ['The ', { text: 'end', part: 'end' }, ' lets you take the net off fast when you need to get to things.'],
        ['This net is very important for keeping the ship safe and in order.']
      ]
    }
  ],
  flow: [
    { partIds: ['end', 'corner'], caption: 'The hooks and corners hold the net to the wall', sentenceRef: 2 },
    { partIds: ['top', 'base'], caption: 'The top and bottom lines hold things in', sentenceRef: 3 },
    { partIds: ['line', 'body'], caption: 'The cross lines go over things to keep them still', sentenceRef: 8 },
    { partIds: ['end'], caption: 'The hooks let you take the net off fast', sentenceRef: 9 }
  ],
  keyExpressions: [
    { text: 'cargo net', partId: 'body' },
    { text: 'mesh panel', partId: 'body' },
    { text: 'bungee cords', partId: 'line' },
    { text: 'hook fastener', partId: 'end' }
  ]
};
