import type { ThingData } from '../types';

export const spaceHeatExchanger: ThingData = {
  id: 'space-heat-exchanger',
  slug: 'space-heat-exchanger',
  simpleName: 'The Heat Mover',
  realName: 'Heat Exchanger',
  category: 'space',
  color: '#B0C4DE',
  funFacts: [
    'This part moves heat from one line to another line.',
    'The two lines run side by side, but they do not join.',
    'Heat goes through the tube walls from the hot line to the cold one.',
    'Then the ship can throw that heat out into space.',
    'It keeps the ship and its tools cool.',
    'It has no parts that move, so it works with no sound.'
  ],
  parts: [
    { id: 'shell', label: 'Main Shell', realName: 'Shell', position: [0, 0, 0], finish: 'hull' },
    { id: 'bundle', label: 'Tube Bundle', realName: 'Tube Bundle', position: [0, 0, 0], finish: 'hull' },
    { id: 'inlet', label: 'Hot Inlet', realName: 'Inlet', position: [-0.3, 0.1, 0], finish: 'titanium' },
    { id: 'outlet', label: 'Cold Outlet', realName: 'Outlet', position: [0.3, 0.1, 0], finish: 'titanium' },
    { id: 'fins', label: 'Thin Fins', realName: 'Fins', position: [0, 0.16, 0], finish: 'cold' },
    { id: 'sensor', label: 'Heat Sense', realName: 'Heat Sensor', position: [0.16, -0.1, 0], finish: 'warning' }
  ],
  article: [
    {
      sentences: [
        ['This part moves heat from one line to another line.'],
        ['The ', { text: 'main shell', part: 'shell' }, ' is the case that holds the parts.'],
        ['The ', { text: 'tube bundle', part: 'bundle' }, ' is the group of small tubes inside.'],
        ['The ', { text: 'hot inlet', part: 'inlet' }, ' takes the hot water in at one end.'],
        ['The ', { text: 'cold outlet', part: 'outlet' }, ' sends the water out at the other end.']
      ]
    },
    {
      sentences: [
        ['The ', { text: 'thin fins', part: 'fins' }, ' are the plates that give off heat.'],
        ['The ', { text: 'heat sense', part: 'sensor' }, ' reads how hot the water is.'],
        ['The two lines run side by side, but they do not join.'],
        ['Heat goes through the tube walls from the hot line to the cold one.'],
        ['Then the ship can throw that heat out into space.'],
        ['People use it to keep the ship and its tools cool.']
      ]
    }
  ],
  flow: [
    { partIds: ['bundle'], caption: 'The tube bundle is the group of small tubes inside', sentenceRef: 2 },
    { partIds: ['inlet'], caption: 'The hot inlet takes the hot water in at one end', sentenceRef: 3 },
    { partIds: ['outlet'], caption: 'The cold outlet sends the water out at the other end', sentenceRef: 4 },
    { partIds: ['fins'], caption: 'The thin fins give off heat', sentenceRef: 5 }
  ],
  keyExpressions: [
    { text: 'main shell', partId: 'shell' },
    { text: 'tube bundle', partId: 'bundle' },
    { text: 'hot inlet', partId: 'inlet' },
    { text: 'thin fins', partId: 'fins' }
  ]
};
