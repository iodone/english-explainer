import type { ThingData } from '../types'

export const clock: ThingData = {
  id: 'clock',
  slug: 'clock',
  simpleName: 'Round Time Keeper',
  realName: 'Wall Clock',
  category: 'home',
  funFacts: [
    'The swinging wheel idea is over 350 years old, and it made clocks good enough to help ships find their way at sea.',
    'Some big old clocks use a hanging weight instead of a push-back metal.',
    'The tick-tock you hear is real metal parts letting go, 300 or more times every minute.',
  ],
  parts: [
    { id: 'time-face', label: 'Time Face', realName: 'Dial', position: [0.1, 0.25, 0.12], finish: 'titanium' },
    { id: 'short-pointer', label: 'Short Pointer', realName: 'Hour Hand', position: [-0.07, 0.35, 0.18], finish: 'cold' },
    { id: 'long-pointer', label: 'Long Pointer', realName: 'Minute Hand', position: [0.37, 0.41, 0.2], finish: 'cold' },
    { id: 'turning-heart', label: 'Turning Heart', realName: 'Gear Train', position: [0.15, -0.75, -0.06], finish: 'warning' },
    { id: 'push-back-metal', label: 'Push-Back Metal', realName: 'Mainspring', position: [1.0, -0.45, -0.06], finish: 'cold' },
    { id: 'tick-stopper', label: 'Tick Stopper', realName: 'Escapement', position: [-0.65, -0.58, -0.06], finish: 'warning' },
    { id: 'swing-wheel', label: 'Fast Swinging Wheel', realName: 'Balance Wheel', position: [-1.0, -0.95, -0.06], finish: 'cold' },
  ],
  article: [
    {
      sentences: [
        [
          'A ',
          { text: 'clock', dict: 'clock' },
          ' is a machine that tells the time.',
        ],
        ['It counts every second, all day and all night, without stopping.'],
        ['This one hangs on a wall and needs no power from the wall to run.'],
      ],
    },
    {
      sentences: [
        [
          'The ',
          { text: 'time face', part: 'time-face' },
          ' is a round board with the numbers 1 to 12 on it.',
        ],
        [
          'Two pointers move around the face: a ',
          { text: 'long pointer', part: 'long-pointer' },
          ' for ',
          { text: 'minutes', dict: 'minute' },
          ' and a ',
          { text: 'short pointer', part: 'short-pointer' },
          ' for ',
          { text: 'hours', dict: 'hour' },
          '.',
        ],
        [
          'The long pointer goes around once every hour, and the short pointer moves one number in that time.',
        ],
      ],
    },
    {
      sentences: [
        [
          'Behind the face sits the ',
          { text: 'turning heart', part: 'turning-heart' },
          ' — a set of little turning wheels that pass power along, wheel to wheel.',
        ],
        [
          'The power comes from the ',
          { text: 'push-back metal', part: 'push-back-metal' },
          ', a long, thin piece of metal rolled into a circle that slowly pushes itself open.',
        ],
        [
          'A ',
          { text: 'tick stopper', part: 'tick-stopper' },
          ' holds the wheels and lets them go one small step at a time — ',
          { text: 'tick, tock, tick, tock', dict: 'tick-tock' },
          '.',
        ],
        [
          'A ',
          { text: 'fast swinging wheel', part: 'swing-wheel' },
          ' moves back and forth, and every swing takes the same time.',
        ],
      ],
    },
    {
      sentences: [
        ['Each small step moves the pointers a tiny bit around the face.'],
        [
          'When the push-back metal has pushed itself all the way open, the clock stops — until you turn a small ',
          { text: 'key', dict: 'key' },
          ' and roll it up again.',
        ],
        ['Clocks like this have told good time for hundreds of years with nothing but wheels and metal.'],
      ],
    },
  ],
  flow: [
    {
      partIds: ['push-back-metal'],
      caption: 'A rolled-up piece of metal slowly pushes itself open — that push is the clock’s power.',
      sentenceRef: 7,
    },
    {
      partIds: ['turning-heart'],
      caption: 'The push turns a heart of little wheels behind the face.',
      sentenceRef: 6,
    },
    {
      partIds: ['tick-stopper'],
      caption: 'A tick stopper holds the wheels and lets them go one small step at a time.',
      sentenceRef: 8,
    },
    {
      partIds: ['swing-wheel'],
      caption: 'A fast swinging wheel keeps every step the same size.',
      sentenceRef: 9,
    },
    {
      partIds: ['short-pointer', 'long-pointer'],
      caption: 'Each step moves the pointers around the time face.',
      sentenceRef: 10,
    },
  ],
  keyExpressions: [
    { text: 'tell the time' },
    { text: 'time face', partId: 'time-face' },
    { text: 'long pointer', partId: 'long-pointer' },
    { text: 'short pointer', partId: 'short-pointer' },
    { text: 'one small step at a time', partId: 'tick-stopper' },
    { text: 'tick, tock', partId: 'tick-stopper' },
    { text: 'back and forth', partId: 'swing-wheel' },
    { text: 'push itself open', partId: 'push-back-metal' },
    { text: 'turning heart', partId: 'turning-heart' },
  ],
  color: '#EAB308',
}
