import type { ThingData } from '../types'

export const waterPump: ThingData = {
  id: 'water-pump',
  slug: 'water-pump',
  simpleName: 'The Water Pusher',
  realName: 'Water pump',
  category: 'power',
  funFacts: [
    'A water pusher can move water from very deep under the ground up to the top.',
    'Some water pushers can move enough water to fill a very big room in one hour.',
    'The first water pushers were made a very long time ago and were worked by hand.',
  ],
  parts: [
    { id: 'body', label: 'body', realName: 'Casing', position: [0, 0, 0], finish: 'hull' },
    { id: 'water-in', label: 'water in', realName: 'Inlet', position: [-0.18, -0.08, 0], finish: 'cold' },
    { id: 'water-out', label: 'water out', realName: 'Outlet', position: [0.18, 0.08, 0], finish: 'cold' },
    { id: 'turn-part', label: 'turn part', realName: 'Impeller', position: [0, 0, 0], finish: 'titanium' },
    { id: 'motor', label: 'motor', realName: 'Motor', position: [0, -0.16, 0], finish: 'cold' },
    { id: 'power-wire', label: 'power wire', realName: 'Power cord', position: [0, -0.22, -0.06], finish: 'cold' },
    { id: 'stand', label: 'stand', realName: 'Mounting base', position: [0, -0.24, 0], finish: 'hull' },
  ],
  article: [
    {
      sentences: [
        [
          'This is a ',
          { text: 'water pusher', dict: 'water-pump' },
          '. It moves water from one place to another by pushing it through pipes.',
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
          'Water comes in through the ',
          { text: 'water in', part: 'water-in' },
          ' part at one side.',
        ],
      ],
    },
    {
      sentences: [
        [
          'Inside the body is the ',
          { text: 'turn part', part: 'turn-part' },
          ' — a flat thing that turns around very fast.',
        ],
        ['When it turns, it pushes the water from the water in part to the water out part.'],
      ],
    },
    {
      sentences: [
        [
          'The pushed water goes out through the ',
          { text: 'water out', part: 'water-out' },
          ' part at the other side.',
        ],
        ['The water pusher can move water up or sideways through pipes.'],
      ],
    },
    {
      sentences: [
        [
          'Under the body is the ',
          { text: 'motor', part: 'motor' },
          ' that makes the turn part go around.',
        ],
        [
          'The motor gets power through the ',
          { text: 'power wire', part: 'power-wire' },
          ' at the back.',
        ],
      ],
    },
    {
      sentences: [
        [
          'The whole thing sits on a ',
          { text: 'stand', part: 'stand' },
          ' that holds it in one place.',
        ],
        ['The stand has holes so you can join it to the ground with screws.'],
      ],
    },
  ],
  flow: [
    { partIds: ['body', 'water-in'], sentenceRef: 1, caption: 'Water comes in through the water in part.' },
    { partIds: ['turn-part'], sentenceRef: 4, caption: 'The turn part pushes water from one side to the other.' },
    { partIds: ['water-out'], sentenceRef: 6, caption: 'Pushed water goes out through the water out part.' },
    { partIds: ['motor', 'power-wire'], sentenceRef: 8, caption: 'The motor makes the turn part go; power wire brings power.' },
    { partIds: ['stand'], sentenceRef: 10, caption: 'The stand holds the water pusher in one place.' },
  ],
  keyExpressions: [
    { text: 'water pusher', partId: 'turn-part' },
    { text: 'moves water from one place to another', partId: 'turn-part' },
    { text: 'pushing it through pipes', partId: 'turn-part' },
    { text: 'flat thing that turns around very fast', partId: 'turn-part' },
    { text: 'pushes the water from water in to water out', partId: 'turn-part' },
    { text: 'makes the turn part go around', partId: 'motor' },
    { text: 'holds it in one place', partId: 'stand' },
  ],
  color: '#ADD8E6',
}