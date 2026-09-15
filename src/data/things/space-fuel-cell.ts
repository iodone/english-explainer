import type { ThingData } from '../types';

export const spaceFuelCell: ThingData = {
  id: 'space-fuel-cell',
  slug: 'space-fuel-cell',
  simpleName: 'The Power Maker',
  realName: 'Fuel Cell',
  category: 'space',
  color: '#00CED1',
  funFacts: [
    'This box makes power from a gas and air.',
    'It makes power all day, as long as the gas lasts.',
    'One kind of fuel cell was used on ships that went to the moon.',
    'It makes water as well as power.',
    'There are no parts that move inside, so it works with no sound.',
    'People use it on ships that must go a long time with no sun.'
  ],
  parts: [
    { id: 'body', label: 'Main Body', realName: 'Cell Stack', position: [0, 0, 0], finish: 'hull' },
    { id: 'plate', label: 'Top Plate', realName: 'Plate', position: [0, 0.14, 0], finish: 'titanium' },
    { id: 'pipe', label: 'Gas Pipe', realName: 'Pipe', position: [-0.24, 0.06, 0], finish: 'cold' },
    { id: 'tank', label: 'Fuel Tank', realName: 'Tank', position: [-0.4, 0, 0], finish: 'hull' },
    { id: 'wire', label: 'Lead Wire', realName: 'Lead Line', position: [0.24, 0.06, 0], finish: 'titanium' },
    { id: 'light', label: 'Check Light', realName: 'Check Light', position: [0.12, 0.18, 0], finish: 'warning' }
  ],
  article: [
    {
      sentences: [
        ['This box makes power from a gas and air.'],
        ['The ', { text: 'main body', part: 'body' }, ' is the case that holds the parts.'],
        ['The ', { text: 'top plate', part: 'plate' }, ' is the flat part that presses the parts together.'],
        ['The ', { text: 'gas pipe', part: 'pipe' }, ' brings the gas into the box.'],
        ['The ', { text: 'fuel tank', part: 'tank' }, ' holds the gas until it is used.']
      ]
    },
    {
      sentences: [
        ['The ', { text: 'lead wire', part: 'wire' }, ' takes the power out to the machines.'],
        ['The ', { text: 'check light', part: 'light' }, ' shows that the box is working.'],
        ['The gas and the air meet inside the main body.'],
        ['They join and make power and water at the same time.'],
        ['A fuel cell can make power all day, as long as the gas lasts.'],
        ['People use it on ships that must go a long time with no sun.']
      ]
    }
  ],
  flow: [
    { partIds: ['tank'], caption: 'The fuel tank holds the gas until it is used', sentenceRef: 4 },
    { partIds: ['pipe'], caption: 'The gas pipe brings the gas into the box', sentenceRef: 3 },
    { partIds: ['plate'], caption: 'The top plate presses the parts together', sentenceRef: 2 },
    { partIds: ['light'], caption: 'The check light shows that the box is working', sentenceRef: 6 }
  ],
  keyExpressions: [
    { text: 'top plate', partId: 'plate' },
    { text: 'gas pipe', partId: 'pipe' },
    { text: 'fuel tank', partId: 'tank' },
    { text: 'check light', partId: 'light' }
  ]
};
