import type { ThingData } from '../types';

export const powerBusDuct: ThingData = {
  id: 'power-bus-duct',
  slug: 'power-bus-duct',
  simpleName: 'The Power Path',
  realName: 'Bus Duct',
  category: 'power',
  color: '#CD853F',
  funFacts: [
    'This box carries power along a building without a big group of wires.',
    'It is used where many machines need a lot of power.',
    'The bars inside are made of copper, which carries power very well.',
    'You can add a plug box at any place along the path.',
    'It must be kept dry and far from water, or it can be very bad.',
    'People check it often, because it carries a lot of power every day.'
  ],
  parts: [
    { id: 'duct', label: 'Main Path', realName: 'Bus Duct', position: [-0.4, 0, 0], finish: 'hull' },
    { id: 'bar', label: 'Power Bars', realName: 'Conductor Bars', position: [0.2, 0.035, 0], finish: 'warning' },
    { id: 'cover', label: 'Path Cover', realName: 'Duct Cover', position: [0.2, 0.08, 0], finish: 'cold' },
    { id: 'joint', label: 'Join Part', realName: 'Joint Block', position: [0.46, 0, 0], finish: 'titanium' },
    { id: 'plug', label: 'Plug Box', realName: 'Plug Box', position: [-0.2, -0.13, 0], finish: 'hull' },
    { id: 'hang', label: 'Hang Parts', realName: 'Hanger', position: [-0.3, 0.22, 0], finish: 'titanium' }
  ],
  article: [
    {
      sentences: [
        ['This long box carries heavy power along the roof of a big building.'],
        ['The ', { text: 'main path', part: 'duct' }, ' is the metal box that holds the power bars inside.'],
        ['The ', { text: 'power bars', part: 'bar' }, ' are the thick metal parts that carry the power.'],
        ['The ', { text: 'path cover', part: 'cover' }, ' keeps hands and water away from the bars.'],
        ['The ', { text: 'join part', part: 'joint' }, ' lets two of these boxes join end to end.']
      ]
    },
    {
      sentences: [
        ['The ', { text: 'plug box', part: 'plug' }, ' is where a machine can take power out of the path.'],
        ['The ', { text: 'hang parts', part: 'hang' }, ' hold the box up under the roof.'],
        ['Power goes in at one end and comes out along the whole path.'],
        ['It can carry much more power than a line of round wires.'],
        ['People use it in tall buildings, so they do not need many long wires.'],
        ['It must be put in by people who work with power every day.']
      ]
    }
  ],
  flow: [
    { partIds: ['bar'], caption: 'The power bars carry the heavy power', sentenceRef: 2 },
    { partIds: ['cover'], caption: 'The path cover keeps hands away from the bars', sentenceRef: 3 },
    { partIds: ['plug'], caption: 'The plug box lets a machine take power out', sentenceRef: 5 },
    { partIds: ['hang'], caption: 'The hang parts hold the box under the roof', sentenceRef: 6 }
  ],
  keyExpressions: [
    { text: 'main path', partId: 'duct' },
    { text: 'power bars', partId: 'bar' },
    { text: 'plug box', partId: 'plug' },
    { text: 'hang parts', partId: 'hang' }
  ]
};
