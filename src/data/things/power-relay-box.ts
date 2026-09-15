import type { ThingData } from '../types';

export const powerRelayBox: ThingData = {
  id: 'power-relay-box',
  slug: 'power-relay-box',
  simpleName: 'The Power Switch Box',
  realName: 'Protective Relay',
  category: 'power',
  color: '#5A6E8C',
  funFacts: [
    'This box can open a path in less time than a person can think.',
    'The wire coil is a small magnet that works only when power flows.',
    'The trip flag stays up until a person sets it back.',
    'Big ones stand outside and watch the power lines for a whole town.',
    'They keep a fire from starting when a tree falls on a wire.',
    'Never push the flag back until you know why it moved.'
  ],
  parts: [
    { id: 'coil', label: 'Wire Coil', realName: 'Coil', position: [0, 0.1, 0.1], finish: 'cold' },
    { id: 'contact', label: 'Touch Point', realName: 'Contact', position: [0, -0.05, 0.15], finish: 'hull' },
    { id: 'spring', label: 'Back Spring', realName: 'Spring', position: [-0.3, 0, 0.05], finish: 'cold' },
    { id: 'case', label: 'Box', realName: 'Case', position: [0, 0, 0], finish: 'hull' },
    { id: 'flag', label: 'Trip Flag', realName: 'Trip Flag', position: [0.35, 0.2, 0.2], finish: 'warning' },
    { id: 'terminal', label: 'Wire Post', realName: 'Terminal', position: [-0.35, -0.2, 0.08], finish: 'titanium' }
  ],
  article: [
    {
      sentences: [
        ['This box listens to the power in a line and turns it off if something is wrong.'],
        ['The ', { text: 'box', part: 'case' }, ' holds all the parts and keeps them safe.'],
        ['The ', { text: 'wire post', part: 'terminal' }, ' is where the power line joins the box.'],
        ['The ', { text: 'wire coil', part: 'coil' }, ' makes a field when power runs through it.'],
        ['That field pulls the ', { text: 'touch point', part: 'contact' }, ' and opens the path.']
      ]
    },
    {
      sentences: [
        ['The ', { text: 'back spring', part: 'spring' }, ' pulls the touch point shut again when the field is gone.'],
        ['The ', { text: 'trip flag', part: 'flag' }, ' shows that the box has opened the path.'],
        ['A person must look at the flag and fix the problem.'],
        ['Then they push a button and the box is ready to work again.'],
        ['This box is much faster than a person with a switch.'],
        ['It can open the path in a very short time.']
      ]
    }
  ],
  flow: [
    { partIds: ['case'], caption: 'The box holds all the parts and keeps them safe', sentenceRef: 1 },
    { partIds: ['terminal'], caption: 'The wire post is where the power line joins the box', sentenceRef: 2 },
    { partIds: ['coil'], caption: 'The wire coil makes a field when power runs through it', sentenceRef: 3 },
    { partIds: ['flag'], caption: 'The trip flag shows that the box has opened the path', sentenceRef: 6 }
  ],
  keyExpressions: [
    { text: 'wire post', partId: 'terminal' },
    { text: 'wire coil', partId: 'coil' },
    { text: 'touch point', partId: 'contact' },
    { text: 'trip flag', partId: 'flag' }
  ]
};
