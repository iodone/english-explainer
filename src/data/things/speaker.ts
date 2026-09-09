import type { ThingData } from '../types'

export const speaker: ThingData = {
  id: 'speaker',
  slug: 'speaker',
  simpleName: 'Sound Box',
  realName: 'Loudspeaker',
  category: 'home',
  funFacts: [
    'A big sound box can shake a whole room, but it is only pushing air — the same stuff you blow out of your mouth.',
    'When it plays quiet sounds, the paper moves only a tiny bit — less than the size of a hair.',
    'Very deep sounds need big sound boxes, because long, slow air waves need lots of air to move.',
  ],
  parts: [
    { id: 'box-body', label: 'Box Body', realName: 'Cabinet', position: [0.1, 0.1, -0.2], finish: 'hull' },
    { id: 'sound-paper', label: 'Sound Paper', realName: 'Speaker Cone', position: [0.1, 0.1, 0.12], finish: 'titanium' },
    { id: 'wire-ring', label: 'Wire Ring', realName: 'Voice Coil', position: [0.1, 0.1, 0.05], finish: 'warning' },
    { id: 'still-magnet', label: 'Still Magnet', realName: 'Permanent Magnet', position: [0.1, 0.1, -0.12], finish: 'cold' },
    { id: 'air-hole', label: 'Air Hole', realName: 'Bass Reflex Port', position: [0.1, -0.45, 0], finish: 'cold' },
    { id: 'sound-wire', label: 'Sound Wire', realName: 'Audio Signal Cable', position: [0.5, 0.8, -0.9], finish: 'cold' },
  ],
  article: [
    {
      sentences: [
        [
          'A ',
          { text: 'speaker', dict: 'speaker' },
          ' is a box that turns power into sound.',
        ],
        [
          'Music players send it quick waves of power through a ',
          { text: 'sound wire', part: 'sound-wire' },
          ', and the box shakes the air so you can hear them.',
        ],
        ['Sound is nothing but air moving in waves — push, pull, push, pull.'],
      ],
    },
    {
      sentences: [
        [
          'At the box’s heart there are two ',
          { text: 'magnets', dict: 'magnet' },
          ': one that never changes, and one made of a ',
          { text: 'wire ring', part: 'wire-ring' },
          ' that turns into a magnet only while power runs through it.',
        ],
        [
          'The ',
          { text: 'still magnet', part: 'still-magnet' },
          ' sits in one place and never moves.',
        ],
        [
          'When the power flows one way, the ring and the still magnet pull together; when the power turns around, they push apart.',
        ],
        ['The power turns around many times each second, so the ring shakes very fast.'],
      ],
    },
    {
      sentences: [
        [
          'The ring is joined to a big piece of paper — the ',
          { text: 'sound paper', part: 'sound-paper' },
          '.',
        ],
        ['As the ring shakes, the paper shakes with it, pushing air out in front and pulling air in behind.'],
        ['Those air waves spread across the room and hit your ears — that is the sound you hear.'],
        ['Big slow waves sound deep; small fast waves sound high.'],
      ],
    },
    {
      sentences: [
        [
          'The paper hangs inside a strong ',
          { text: 'box body', part: 'box-body' },
          ', which keeps the air behind the paper and the air in front apart.',
        ],
        [
          'An ',
          { text: 'air hole', part: 'air-hole' },
          ' in the box lets the back air move in and out too, making deep sounds stronger.',
        ],
        ['Power waves in, air waves out — and the box sings.'],
      ],
    },
  ],
  flow: [
    {
      partIds: ['sound-wire'],
      caption: 'Quick waves of power come in through the sound wire.',
      sentenceRef: 1,
    },
    {
      partIds: ['wire-ring', 'still-magnet'],
      caption: 'The wire ring becomes a magnet that the still magnet pulls and pushes.',
      sentenceRef: 5,
    },
    {
      partIds: ['sound-paper'],
      caption: 'The shaking ring shakes the paper, and the paper pushes air waves out.',
      sentenceRef: 8,
    },
    {
      partIds: ['box-body'],
      caption: 'The box keeps the front air and the back air apart, so the sound is stronger.',
      sentenceRef: 11,
    },
    {
      partIds: ['air-hole'],
      caption: 'The air hole lets back air move too, making deep sounds stronger.',
      sentenceRef: 12,
    },
  ],
  keyExpressions: [
    { text: 'sound box' },
    { text: 'waves of power', partId: 'sound-wire' },
    { text: 'turns into a magnet', partId: 'wire-ring' },
    { text: 'pull together, push apart', partId: 'still-magnet' },
    { text: 'shakes the air', partId: 'sound-paper' },
    { text: 'air waves' },
    { text: 'in front and behind' },
    { text: 'deep sounds', partId: 'air-hole' },
    { text: 'the box sings', partId: 'box-body' },
  ],
  color: '#6366F1',
}
