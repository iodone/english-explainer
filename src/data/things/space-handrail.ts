import type { ThingData } from '../types';

export const spaceHandrail: ThingData = {
  id: 'space-handrail',
  slug: 'space-handrail',
  simpleName: 'The Hold Bar',
  realName: 'Space Handrail',
  category: 'space',
  color: '#C0C0C0',
  funFacts: [
    'People hold this bar to move around in space where there is no ground.',
    'It is made of strong metal so it does not break when people pull on it.',
    'The bar has a special feel so hands do not slip off in space clothes.',
    'These bars are put all over the inside of the ship for easy moving.',
    'Without them, people would just float and hit things.',
    'Some bars can be taken off and put in a new place when needed.'
  ],
  parts: [
    { id: 'body', label: 'Long Bar', realName: 'Rail Tube', position: [0, 0, 0], finish: 'hull' },
    { id: 'end', label: 'End Stop', realName: 'End Cap', position: [0, 0, -0.35], finish: 'cold' },
    { id: 'top', label: 'Grip Surface', realName: 'Knurled Zone', position: [0, 0.06, 0], finish: 'titanium' },
    { id: 'mount', label: 'Wall Part', realName: 'Mounting Bracket', position: [0, -0.1, 0], finish: 'warning' },
    { id: 'join', label: 'Middle Join', realName: 'Splice Coupler', position: [0, 0, 0.15], finish: 'titanium' },
    { id: 'tip', label: 'Other End', realName: 'Terminal Fitting', position: [0, 0, 0.35], finish: 'cold' }
  ],
  article: [
    {
      sentences: [
        ['This is a bar that people hold to move around in space.'],
        ['The ', { text: 'body', part: 'body' }, ' is a long round piece of strong metal.'],
        ['The ', { text: 'end', part: 'end' }, ' is a cap that closes one side of the bar.'],
        ['The ', { text: 'top', part: 'top' }, ' is the part with small lines so hands do not slip.'],
        ['The ', { text: 'mount', part: 'mount' }, ' joins the bar to the wall of the ship.']
      ]
    },
    {
      sentences: [
        ['The ', { text: 'join', part: 'join' }, ' is in the middle and joins two pieces of bar together.'],
        ['The ', { text: 'tip', part: 'tip' }, ' is the other end that closes the bar.'],
        ['In space, there is no ground to walk on so people hold these bars to move.'],
        ['The ', { text: 'top', part: 'top' }, ' lets people hold on even with big space clothes on.'],
        ['The ', { text: 'mount', part: 'mount' }, ' must be very strong so the bar does not come off the wall.'],
        ['These bars are all over the ship so people can get to any place they need.']
      ]
    }
  ],
  flow: [
    { partIds: ['mount', 'body'], caption: 'The bar is joined to the wall', sentenceRef: 4 },
    { partIds: ['top'], caption: 'The grip lets hands hold on well', sentenceRef: 3 },
    { partIds: ['join'], caption: 'Two pieces join together in the middle', sentenceRef: 5 },
    { partIds: ['end', 'tip'], caption: 'Both ends are closed with caps', sentenceRef: 6 }
  ],
  keyExpressions: [
    { text: 'handrail', partId: 'body' },
    { text: 'knurled zone', partId: 'top' },
    { text: 'mounting bracket', partId: 'mount' },
    { text: 'splice coupler', partId: 'join' }
  ]
};
