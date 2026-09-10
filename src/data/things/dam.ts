import type { ThingData } from '../types'

export const dam: ThingData = {
  id: 'dam',
  slug: 'dam',
  simpleName: 'Water Wall',
  realName: 'Dam',
  category: 'power',
  funFacts: [
    'Where the wall meets the river, many dams build a fish way: a stepped water path beside the wall, so fish can work their way up and over it, one small jump at a time.',
    'When a dam gives way, the whole water room arrives at once — more people have died in dam breaks than in any other kind of machine trouble, so the wall is watched and checked every single day.',
    'The tallest dam in the world stands higher than a hundred-floor building would — a great wall in the mountains, holding a whole river still.',
  ],
  parts: [
    { id: 'wall-body', label: 'Wall Body', realName: 'Dam Wall', position: [0, 0.2, 0], finish: 'hull' },
    { id: 'still-water', label: 'Still Water', realName: 'Reservoir', position: [-1.0, 0.55, 0], finish: 'cold' },
    { id: 'water-gate', label: 'Water Gate', realName: 'Spillway Gates', position: [0.15, 0.5, 0], finish: 'warning' },
    { id: 'fall-pipes', label: 'Fall Pipes', realName: 'Penstocks', position: [0.1, 0.0, 0], finish: 'titanium' },
    { id: 'spin-rooms', label: 'Spin Rooms', realName: 'Turbine Hall', position: [0.9, -0.6, 0], finish: 'cold' },
    { id: 'power-maker', label: 'Power Maker', realName: 'Generators', position: [1.4, -0.55, 0], finish: 'cold' },
    { id: 'fish-way', label: 'Fish Way', realName: 'Fish Ladder', position: [-0.3, -0.4, 0.4], finish: 'cold' },
  ],
  article: [
    {
      sentences: [
        [
          'A ',
          { text: 'dam', dict: 'dam' },
          ' is a great wall set across a river: the river pushes, the wall holds, and the water behind it grows deep and still.',
        ],
        ['A river running down a hill is power on the move — but thin and spread out, gone as it goes; a dam gathers it, holding the whole river’s push in one deep, quiet place.'],
        ['Then the push is let out slowly, through machines, as made power — the same water, the same fall, but caught and used.'],
      ],
    },
    {
      sentences: [
        [
          'The ',
          { text: 'wall body', part: 'wall-body' },
          ' is built to lean: its back runs down and out, its feet run deep into the ground, and the more the river pushes, the harder it stands.',
        ],
        [
          'Behind it lies the ',
          { text: 'still water', part: 'still-water' },
          ' — the water room, a deep and quiet piece of the river held still, and every bit of it is stored push.',
        ],
        [
          'When the river runs too big — after rain, or when the winter snow goes soft — the ',
          { text: 'water gate', part: 'water-gate' },
          ' opens and lets the extra water past in a great fall, so the wall is never asked to hold more than it can.',
        ],
        [
          'But most of the water never touches the gate: it takes the long way down, through ',
          { text: 'fall pipes', part: 'fall-pipes' },
          ' — tubes running down through the wall, from the quiet top to the very bottom of the fall — while fish climb their own small ',
          { text: 'fish way', part: 'fish-way' },
          ' beside the wall.',
        ],
      ],
    },
    {
      sentences: [
        [
          'At the bottom, the falling water comes into the ',
          { text: 'spin rooms', part: 'spin-rooms' },
          ', where it drives turning wheels — the same shape as a ',
          { text: 'windmill', dict: 'windmill' },
          '’s wings, but turned by water instead of wind.',
        ],
        [
          'The wheels turn ',
          { text: 'power makers', part: 'power-maker' },
          ', and the made power walks away on wires, to towns far from any river.',
        ],
        [
          'In this way, a dam is a kind of water ',
          { text: 'battery', dict: 'battery' },
          ': rain from the sky, stored as water waiting to fall, spent when the towns ask for it.',
        ],
        ['And the machines can start and stop in minutes, which makes wind and sun their best friends: when the sky is dark and still, the water works.'],
      ],
    },
    {
      sentences: [
        ['The first great ones, less than a hundred years ago, were the biggest things people had ever built: whole rivers turned to still waters, dry lands given water, and power lines running farther than a day’s walk.'],
        ['Today every big river in the world wears one, and together they make more power than all the world’s wind fields put together.'],
        ['A wall that will not move, a water room that does not run, and at the bottom of it all, wheels turning day and night — the quietest big machine on Earth.'],
      ],
    },
  ],
  flow: [
    { partIds: ['wall-body'], sentenceRef: 3, caption: 'The wall leans into the push — the more the river pushes, the harder it stands.' },
    { partIds: ['still-water'], sentenceRef: 4, caption: 'Behind it, the water room — still water held deep, a store of push.' },
    { partIds: ['fall-pipes'], sentenceRef: 6, caption: 'Most of the water takes the long way down, through the fall pipes inside the wall.' },
    { partIds: ['spin-rooms'], sentenceRef: 7, caption: 'The falling water drives turning wheels — a windmill turned by water.' },
    { partIds: ['power-maker'], sentenceRef: 8, caption: 'The wheels turn power makers, and the power walks away on wires to far towns.' },
  ],
  keyExpressions: [
    { text: 'the river pushes, the wall holds' },
    { text: 'power on the move' },
    { text: 'the more the river pushes, the harder it stands' },
    { text: 'still water held deep, a store of push' },
    { text: 'the long way down' },
    { text: 'turned by water instead of wind' },
    { text: 'a kind of water battery' },
    { text: 'when the sky is dark and still, the water works' },
    { text: 'the quietest big machine on Earth' },
  ],
  color: '#0EA5E9',
}
