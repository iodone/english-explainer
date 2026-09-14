import type { ThingData } from '../types';

export const powerEnclosure: ThingData = {
  id: 'power-enclosure',
  slug: 'power-enclosure',
  simpleName: 'The Power Box',
  realName: 'Electrical Enclosure',
  category: 'power',
  color: '#808080',
  funFacts: [
    'This box keeps power parts safe from water, dust, and people touching them.',
    'It has a door that can be locked so only people who know how can open it.',
    'You can find it on walls in buildings and outside near power lines.',
    'It is made of metal or hard stuff that does not break easy.',
    'Inside it has a place to join all the power lines together.',
    'Without this box, power parts would not be safe to use.'
  ],
  parts: [
    { id: 'body', label: 'Box Body', realName: 'Enclosure Shell', position: [0, 0, 0], finish: 'hull' },
    { id: 'end', label: 'Door', realName: 'Access Door', position: [0, 0, -0.15], finish: 'titanium' },
    { id: 'top', label: 'Top Part', realName: 'Top Cover', position: [0, 0.15, 0], finish: 'cold' },
    { id: 'inside', label: 'Inside Part', realName: 'Mounting Plate', position: [0, 0, 0], finish: 'warning' },
    { id: 'lock', label: 'Lock Part', realName: 'Lock Mechanism', position: [0, 0.08, -0.15], finish: 'titanium' },
    { id: 'seal', label: 'Edge Part', realName: 'Weather Seal', position: [0, 0.12, 0], finish: 'hull' }
  ],
  article: [
    {
      sentences: [
        ['This is a box that keeps power parts safe inside.'],
        ['The ', { text: 'body', part: 'body' }, ' is the hard outside that keeps water and dust out.'],
        ['The ', { text: 'end', part: 'end' }, ' is the door that lets people get to the parts inside.'],
        ['The ', { text: 'top', part: 'top' }, ' is the cover on top that keeps things out.'],
        ['The ', { text: 'inside', part: 'inside' }, ' is the flat part where power parts are put.']
      ]
    },
    {
      sentences: [
        ['The ', { text: 'lock', part: 'lock' }, ' is the part that keeps the door shut so people cannot open it.'],
        ['The ', { text: 'seal', part: 'seal' }, ' is the soft part around the edge that keeps water out.'],
        ['People open the ', { text: 'end', part: 'end' }, ' to get to the parts on the ', { text: 'inside', part: 'inside' }, '.'],
        ['The ', { text: 'lock', part: 'lock' }, ' makes sure only people who know how can open it.'],
        ['The ', { text: 'seal', part: 'seal' }, ' keeps the inside dry so the parts work well.'],
        ['This box is very important for keeping power parts safe and working.']
      ]
    }
  ],
  flow: [
    { partIds: ['body', 'top'], caption: 'The hard box keeps things out', sentenceRef: 1 },
    { partIds: ['end', 'lock'], caption: 'The door opens with a lock', sentenceRef: 5 },
    { partIds: ['inside'], caption: 'Power parts sit on the flat part', sentenceRef: 4 },
    { partIds: ['seal'], caption: 'The seal keeps water out', sentenceRef: 6 }
  ],
  keyExpressions: [
    { text: 'enclosure', partId: 'body' },
    { text: 'access door', partId: 'end' },
    { text: 'mounting plate', partId: 'inside' },
    { text: 'weather seal', partId: 'seal' }
  ]
};
