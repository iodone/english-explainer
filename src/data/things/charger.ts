import type { ThingData } from '../types'

export const charger: ThingData = {
  id: 'charger',
  slug: 'charger',
  simpleName: 'The Battery Filler',
  realName: 'Phone Charger',
  category: 'power',
  funFacts: [
    'The safe box is really a tiny power machine: it takes in big wall power and hands the phone just what it needs: no more, no less.',
    'Leaving the filler in the wall all night uses a tiny bit of power by itself — about enough for one small night light.',
    'A fast filler can take a phone from empty to full in under an hour — less time than a cup of coffee needs to get cold.',
  ],
  parts: [
    { id: 'small-phone', label: 'small phone', realName: 'Smartphone', position: [0.57, -0.22, 0], finish: 'cold' },
    { id: 'wall-plug', label: 'wall plug', realName: 'Plug', position: [-0.3, 0.1, 0], finish: 'cold' },
    { id: 'metal-legs', label: 'metal legs', realName: 'Prongs', position: [-0.4, 0.1, 0], finish: 'cold' },
    { id: 'wall-socket', label: 'wall socket', realName: 'Wall Outlet', position: [-0.45, 0.1, 0], finish: 'cold' },
    { id: 'power-wire', label: 'power wire', realName: 'Cable', position: [0, -0.02, 0], finish: 'titanium' },
    { id: 'safe-box', label: 'safe box', realName: 'Power Adapter', position: [0.32, -0.15, 0], finish: 'hull' },
    { id: 'battery-bar', label: 'battery bar', realName: 'Battery Indicator', position: [0.57, -0.12, 0.02], finish: 'warning' },
  ],
  article: [
    {
      sentences: [
        [
          'At night, on the table, a ',
          { text: 'small phone', part: 'small-phone' },
          ' lies tired, its power almost gone.',
        ],
        [
          'Its friend, the charger, stands ready: a ',
          { text: 'wall plug', part: 'wall-plug', dict: 'plug' },
          ', a long wire, and a little box.',
        ],
        [
          'Two ',
          { text: 'metal legs', part: 'metal-legs' },
          ' reach out from its face.',
        ],
      ],
    },
    {
      sentences: [
        [
          'They push into the ',
          { text: 'wall socket', part: 'wall-socket', dict: 'socket' },
          ' — two little holes in the wall that will not let go.',
        ],
        [
          'Hidden power in the house walls begins to ',
          { text: 'flow', dict: 'flow' },
          ', night and day, waiting to be used.',
        ],
        [
          'It runs down the ',
          { text: 'power wire', part: 'power-wire', dict: 'wire' },
          ', a long, soft line of metal and plastic.',
        ],
        [
          'Then it reaches the ',
          { text: 'safe box', part: 'safe-box' },
          ', whose quiet job is to take big, fast wall power and make it small, slow, and safe.',
        ],
      ],
    },
    {
      sentences: [
        [
          'Made safe, the power runs on into the phone, bit by bit.',
        ],
        [
          'Inside, it fills the ',
          { text: 'battery', dict: 'battery' },
          ' the way a glass fills with water, drop by drop.',
        ],
        [
          'On the screen, the ',
          { text: 'battery bar', part: 'battery-bar' },
          ' shows the story: a short line that gets longer and longer, minute by minute.',
        ],
        [
          'An hour later, the bar is full, and its little light turns green — done.',
        ],
      ],
    },
    {
      sentences: [
        [
          'You pull the plug out of the wall, and the flow stops as if it was never there.',
        ],
        [
          'In the morning, the phone wakes up full of power, ready for a new day.',
        ],
        [
          'All night, the little filler worked without a sound — a quiet night worker for your pocket machine.',
        ],
      ],
    },
  ],
  flow: [
    { partIds: ['small-phone'], sentenceRef: 0, caption: 'The phone lies tired on the table, its power almost gone.' },
    { partIds: ['metal-legs', 'wall-socket'], sentenceRef: 2, caption: 'Two metal legs push into the wall socket, and the power wakes up.' },
    { partIds: ['power-wire'], sentenceRef: 5, caption: 'Power runs down the long wire into the little safe box.' },
    { partIds: ['safe-box'], sentenceRef: 6, caption: 'The safe box makes the power small, slow, and safe for the phone.' },
    { partIds: ['battery-bar'], sentenceRef: 9, caption: 'The battery bar fills, minute by minute, until the light turns green.' },
  ],
  keyExpressions: [
    { text: 'lies tired at night, its power almost gone', partId: 'small-phone' },
    { text: 'pushes into the two little holes in the wall', partId: 'wall-plug' },
    { text: 'two metal legs that reach out from its face', partId: 'metal-legs' },
    { text: 'two little holes in the wall that will not let go', partId: 'wall-socket' },
    { text: 'a long, soft line of metal and plastic', partId: 'power-wire' },
    { text: 'takes big, fast wall power and makes it small, slow, and safe', partId: 'safe-box' },
    { text: 'a short line that gets longer and longer', partId: 'battery-bar' },
    { text: 'fills the way a glass fills with water', partId: 'battery-bar' },
    { text: 'a quiet night worker for your pocket machine', partId: 'safe-box' },
  ],
  color: '#8FBF3D',
}
