import type { ThingData } from '../types'

export const toilet: ThingData = {
  id: 'toilet',
  slug: 'toilet',
  simpleName: 'Water Swirl Seat',
  realName: 'Toilet',
  category: 'home',
  funFacts: [
    'Old water seats had a water tank hung high on the wall, and you pulled a chain to open the door.',
    'The up-over pipe also keeps bad smell from the pipes out of your room — water sits in it as a wall.',
    'Some places have two buttons: one for a little water and one for a lot.',
  ],
  parts: [
    { id: 'water-tank', label: 'Water Tank', realName: 'Flush Tank', position: [-0.55, 0.35, 0], finish: 'cold' },
    { id: 'handle-arm', label: 'Handle Arm', realName: 'Flush Handle', position: [-0.15, 0.3, 0.28], finish: 'cold' },
    { id: 'water-door', label: 'Water Door', realName: 'Flush Valve', position: [-0.55, 0.02, 0], finish: 'warning' },
    { id: 'water-bowl', label: 'Water Bowl', realName: 'Bowl', position: [0.45, 0.12, 0], finish: 'titanium' },
    { id: 'up-over-pipe', label: 'Up-Over Pipe', realName: 'Siphon & Trap', position: [0.15, -0.35, 0], finish: 'cold' },
    { id: 'float-ball', label: 'Float Ball', realName: 'Float Valve Ball', position: [-0.38, 0.5, 0.18], finish: 'cold' },
    { id: 'fill-pipe', label: 'Fill Pipe', realName: 'Fill Valve', position: [-0.68, 0.32, 0], finish: 'cold' },
  ],
  article: [
    {
      sentences: [
        [
          'A ',
          { text: 'toilet', dict: 'toilet' },
          ' is a water seat that carries away what your body leaves behind.',
        ],
        ['You press a handle, water moves, and everything washes down into pipes under the ground.'],
        ['Then the seat fills itself with clean water again, ready for next time.'],
      ],
    },
    {
      sentences: [
        [
          'Behind the seat sits a ',
          { text: 'water tank', part: 'water-tank' },
          ' — a big box of clean water held up high.',
        ],
        [
          'When you push the ',
          { text: 'handle arm', part: 'handle-arm' },
          ', it lifts a ',
          { text: 'water door', part: 'water-door' },
          ' at the bottom of the tank.',
        ],
        ['The door opens, and all the tank water falls into the bowl at once.'],
        ['After the water runs out, the door drops shut by itself.'],
      ],
    },
    {
      sentences: [
        [
          'All that water fills the ',
          { text: 'water bowl', part: 'water-bowl' },
          ' and starts it spinning around and around.',
        ],
        [
          'At the bowl’s bottom there is a hidden path — an ',
          { text: 'up-over pipe', part: 'up-over-pipe' },
          ' that goes down, then up and over a small wall.',
        ],
        ['The falling water pushes everything ahead of it, up and over that wall.'],
        ['The pipe keeps pulling the water behind it until the bowl is empty.'],
      ],
    },
    {
      sentences: [
        [
          'As the tank runs low, a ',
          { text: 'float ball', part: 'float-ball' },
          ' that rides on the water falls down with it.',
        ],
        [
          'The falling ball opens a ',
          { text: 'fill pipe', part: 'fill-pipe' },
          ', and clean water flows back into the tank.',
        ],
        ['When the water lifts the ball back to the top, the pipe shuts — and the water seat is ready again.'],
      ],
    },
  ],
  flow: [
    {
      partIds: ['handle-arm'],
      caption: 'You push the handle arm, and it lifts the water door.',
      sentenceRef: 4,
    },
    {
      partIds: ['water-door'],
      caption: 'Tank water falls through the open door into the bowl.',
      sentenceRef: 5,
    },
    {
      partIds: ['water-bowl'],
      caption: 'The bowl fills, and the water starts spinning around.',
      sentenceRef: 7,
    },
    {
      partIds: ['up-over-pipe'],
      caption: 'Water pushes up and over the small wall, pulling everything behind it.',
      sentenceRef: 9,
    },
    {
      partIds: ['float-ball', 'fill-pipe'],
      caption: 'The tank runs low, the float ball falls, and the fill pipe opens.',
      sentenceRef: 11,
    },
  ],
  keyExpressions: [
    { text: 'water seat' },
    { text: 'carries away' },
    { text: 'press a handle', partId: 'handle-arm' },
    { text: 'water tank', partId: 'water-tank' },
    { text: 'falls into', partId: 'water-door' },
    { text: 'spinning around', partId: 'water-bowl' },
    { text: 'up and over', partId: 'up-over-pipe' },
    { text: 'rides on the water', partId: 'float-ball' },
    { text: 'flows back in', partId: 'fill-pipe' },
  ],
  color: '#38BDF8',
}
