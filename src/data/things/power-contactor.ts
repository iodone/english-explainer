import type { ThingData } from '../types';

export const powerContactor: ThingData = {
  id: 'power-contactor',
  slug: 'power-contactor',
  simpleName: 'The Power Switch',
  realName: 'Contactor',
  category: 'power',
  color: '#4682B4',
  funFacts: [
    'A small push can turn on a very big machine with this box.',
    'The pads must touch hard and flat so the power can go through.',
    'It can turn power on and off many times in one day.',
    'These boxes are used to start big motors and lights in buildings.',
    'A magnet inside pulls the arm down when power comes in.',
    'People must not touch these boxes, because the power can hurt them.'
  ],
  parts: [
    { id: 'coil', label: 'Turn Coil', realName: 'Magnet Coil', position: [0, -0.12, 0], finish: 'titanium' },
    { id: 'arm', label: 'Pull Arm', realName: 'Moving Arm', position: [0, 0.02, 0], finish: 'hull' },
    { id: 'pad', label: 'Touch Pads', realName: 'Contact Pads', position: [0.1, 0.14, 0], finish: 'warning' },
    { id: 'spring', label: 'Push Back Part', realName: 'Return Spring', position: [0.16, 0.02, 0], finish: 'hull' },
    { id: 'wire', label: 'Power Lines', realName: 'Main Terminals', position: [-0.24, 0.1, 0], finish: 'hull' },
    { id: 'box', label: 'Cover Box', realName: 'Enclosure Box', position: [0, 0, 0.14], finish: 'cold' }
  ],
  article: [
    {
      sentences: [
        ['This box turns heavy power on and off with a small push.'],
        ['The ', { text: 'turn coil', part: 'coil' }, ' becomes a magnet when a small power comes in.'],
        ['The ', { text: 'pull arm', part: 'arm' }, ' is pulled by the magnet and moves down.'],
        ['The ', { text: 'touch pads', part: 'pad' }, ' meet and let the heavy power go through.'],
        ['The ', { text: 'power lines', part: 'wire' }, ' bring the heavy power in and out of the box.']
      ]
    },
    {
      sentences: [
        ['The ', { text: 'push back part', part: 'spring' }, ' pulls the arm up when the small power stops.'],
        ['The ', { text: 'cover box', part: 'box' }, ' keeps dust and hands away from the power parts.'],
        ['A small push can turn on a very big machine this way.'],
        ['The pads must touch hard and flat, or the power will make a hot spot.'],
        ['People use these boxes to start big motors and lights in a building.'],
        ['It can turn power on and off many times in one day.']
      ]
    }
  ],
  flow: [
    { partIds: ['coil'], caption: 'The turn coil becomes a magnet', sentenceRef: 1 },
    { partIds: ['arm'], caption: 'The magnet pulls the arm down', sentenceRef: 2 },
    { partIds: ['pad'], caption: 'The touch pads meet and let power through', sentenceRef: 3 },
    { partIds: ['spring'], caption: 'The push back part pulls the arm up again', sentenceRef: 5 }
  ],
  keyExpressions: [
    { text: 'turn coil', partId: 'coil' },
    { text: 'pull arm', partId: 'arm' },
    { text: 'touch pads', partId: 'pad' },
    { text: 'push back part', partId: 'spring' }
  ]
};
