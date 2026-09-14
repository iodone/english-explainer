import type { ThingData } from '../types'

export const batteryCharger: ThingData = {
  id: 'battery-charger',
  slug: 'battery-charger',
  simpleName: 'The Power Filler',
  realName: 'Battery charger',
  category: 'power',
  funFacts: [
    'A power filler can fill a battery many times — some batteries can be filled more than 1000 times.',
    'The first power fillers were very slow and could take all night to fill a battery.',
    'Some power fillers can fill a battery very fast — in less than one hour.',
  ],
  parts: [
    { id: 'body', label: 'body', realName: 'Housing', position: [0, 0, 0], finish: 'hull' },
    { id: 'plug', label: 'plug', realName: 'Plug', position: [0, 0.14, 0], finish: 'cold' },
    { id: 'wire', label: 'wire', realName: 'Cord', position: [0, 0.08, 0], finish: 'cold' },
    { id: 'light', label: 'light', realName: 'LED indicator', position: [0, 0.04, 0.10], finish: 'warning' },
    { id: 'inside-part', label: 'inside part', realName: 'Circuit board', position: [0, 0, 0], finish: 'titanium' },
    { id: 'put-in', label: 'put in', realName: 'Battery slot', position: [0, -0.06, 0.06], finish: 'cold' },
    { id: 'cool-holes', label: 'cool holes', realName: 'Ventilation', position: [0, -0.04, -0.10], finish: 'hull' },
  ],
  article: [
    {
      sentences: [
        [
          'This is a ',
          { text: 'power filler', dict: 'battery-charger' },
          '. It fills batteries with power so they can work again.',
        ],
      ],
    },
    {
      sentences: [
        [
          'The ',
          { text: 'body', part: 'body' },
          ' is the outside part that holds all the important things inside.',
        ],
        [
          'The ',
          { text: 'plug', part: 'plug' },
          ' goes into the wall to get power from the power that comes through wires in the ground.',
        ],
      ],
    },
    {
      sentences: [
        [
          'A ',
          { text: 'wire', part: 'wire' },
          ' joins the plug to the body and carries the power.',
        ],
        [
          'A small ',
          { text: 'light', part: 'light' },
          ' on the front tells you if the battery is being filled or if it is done.',
        ],
      ],
    },
    {
      sentences: [
        [
          'Inside the body is the ',
          { text: 'inside part', part: 'inside-part' },
          ' that changes the power from the wall into the kind of power the battery needs.',
        ],
        ['This is important because the power from the wall is not the same as the power in a battery.'],
      ],
    },
    {
      sentences: [
        [
          'You put the battery into the ',
          { text: 'put in', part: 'put-in' },
          ' part on the front or side.',
        ],
        ['Some power fillers can fill more than one battery at the same time.'],
      ],
    },
    {
      sentences: [
        [
          'The ',
          { text: 'cool holes', part: 'cool-holes' },
          ' on the back let the heat go out so the power filler does not get too hot.',
        ],
        ['When the battery is full, the light changes color to tell you it is done.'],
      ],
    },
  ],
  flow: [
    { partIds: ['body', 'plug'], sentenceRef: 1, caption: 'The body holds everything; the plug gets power from the wall.' },
    { partIds: ['wire', 'light'], sentenceRef: 4, caption: 'Wire carries power; light tells you when it is done.' },
    { partIds: ['inside-part'], sentenceRef: 6, caption: 'The inside part changes wall power into battery power.' },
    { partIds: ['put-in'], sentenceRef: 8, caption: 'Put the battery in the put-in part.' },
    { partIds: ['cool-holes'], sentenceRef: 10, caption: 'Cool holes let heat go out so it does not get too hot.' },
  ],
  keyExpressions: [
    { text: 'power filler', partId: 'inside-part' },
    { text: 'fills batteries with power', partId: 'inside-part' },
    { text: 'goes into the wall to get power', partId: 'plug' },
    { text: 'carries the power', partId: 'wire' },
    { text: 'tells you if the battery is being filled', partId: 'light' },
    { text: 'changes the power from the wall', partId: 'inside-part' },
    { text: 'let the heat go out so it does not get too hot', partId: 'cool-holes' },
  ],
  color: '#90EE90',
}