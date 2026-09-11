import type { ThingData } from '../types'

export const oilRig: ThingData = {
  id: 'oil-rig',
  slug: 'oil-rig',
  simpleName: 'The Deep Water Digger',
  realName: 'Offshore Oil Rig',
  category: 'power',
  funFacts: [
    'The deepest holes made by people start from rigs like this one — some go down more than 3,000 meters, deeper than the tallest building is tall, many times over.',
    'When big storms come, waves as tall as a room hit the legs — work stops, and everyone waits inside until the sea calms down.',
    'Old rigs are sometimes left standing in the sea — fish and small sea animals move into the legs, turning an old machine into a new home.',
  ],
  parts: [
    { id: 'sea-legs', label: 'sea legs', realName: 'Jacket Legs', position: [0, -0.27, 0], finish: 'hull' },
    { id: 'work-floor', label: 'work floor', realName: 'Deck', position: [0, 0, 0], finish: 'cold' },
    { id: 'worker-home', label: 'worker home', realName: 'Living Quarters', position: [-0.2, 0.09, 0], finish: 'cold' },
    { id: 'drill-tower', label: 'drill tower', realName: 'Derrick', position: [0.05, 0.25, 0], finish: 'titanium' },
    { id: 'drill-pipe', label: 'drill pipe', realName: 'Drill String', position: [0.05, -0.06, 0], finish: 'cold' },
    { id: 'fire-tower', label: 'fire tower', realName: 'Flare Boom', position: [-0.5, 0.2, 0], finish: 'warning' },
    { id: 'load-crane', label: 'load crane', realName: 'Deck Crane', position: [0.26, 0.07, 0], finish: 'cold' },
  ],
  article: [
    {
      sentences: [
        [
          'Far from land, a small city of ',
          { text: 'steel', dict: 'steel' },
          ' stands in the open sea.',
        ],
        [
          'It is an ',
          { text: 'oil rig', dict: 'rig' },
          ' — a machine built to find and draw up the ',
          { text: 'oil', dict: 'oil' },
          ' hiding deep under the sea floor.',
        ],
        [
          'Tall ',
          { text: 'sea legs', part: 'sea-legs' },
          ' stand on the sea floor and hold the whole rig above the biggest waves.',
        ],
      ],
    },
    {
      sentences: [
        [
          'On top of the legs lies the ',
          { text: 'work floor', part: 'work-floor' },
          ', a wide, flat place full of machines and moving steel.',
        ],
        [
          'The ',
          { text: 'drill tower', part: 'drill-tower', dict: 'tower' },
          ' rises over one end, tall and thin, its wheels turning without rest.',
        ],
        [
          'It holds the ',
          { text: 'drill pipe', part: 'drill-pipe', dict: 'pipe' },
          ', a long line of steel that turns and cuts its way down, far under the sea floor.',
        ],
        [
          'When the pipe finds a pocket of oil, the oil runs up inside it, pushed by the great weight of the sea above.',
        ],
      ],
    },
    {
      sentences: [
        [
          'Gas rises with the oil, and the ',
          { text: 'fire tower', part: 'fire-tower' },
          ' burns it away — a tall fire that lights the night sea for miles around.',
        ],
        [
          'The ',
          { text: 'load crane', part: 'load-crane', dict: 'crane' },
          ' swings boxes and pipes from working boats up to the work floor, day and night.',
        ],
        [
          'In the ',
          { text: 'worker home', part: 'worker-home' },
          ', the workers sleep, eat, and wait for the boat home — two weeks on, then two weeks off.',
        ],
        [
          'Every drop the rig draws up becomes ',
          { text: 'fuel', dict: 'fuel' },
          ' for cars and heat for homes, far across the sea.',
        ],
      ],
    },
    {
      sentences: [
        [
          'One day the oil runs out, and the great machines go quiet.',
        ],
        [
          'Big boats take the rig apart and carry the steel home, piece by piece.',
        ],
        [
          'Sometimes the sea legs are left standing, and fish make their homes in the old steel — a new city under the waves.',
        ],
      ],
    },
  ],
  flow: [
    { partIds: ['sea-legs'], sentenceRef: 2, caption: 'The sea legs stand on the sea floor, holding the rig high above the waves.' },
    { partIds: ['work-floor'], sentenceRef: 3, caption: 'The work floor is the flat top of the city, where every machine and worker does their job.' },
    { partIds: ['drill-pipe', 'drill-tower'], sentenceRef: 5, caption: 'The drill tower holds the drill pipe as it turns and cuts, deeper and deeper.' },
    { partIds: ['fire-tower'], sentenceRef: 7, caption: 'The fire tower burns off the gas that rises with the oil, lighting the night sea.' },
    { partIds: ['load-crane'], sentenceRef: 8, caption: 'The load crane lifts food, machines, and new pipes from boats up to the floor.' },
  ],
  keyExpressions: [
    { text: 'stands on the sea floor, above the biggest waves', partId: 'sea-legs' },
    { text: 'a wide, flat place full of machines', partId: 'work-floor' },
    { text: 'tall and thin, with wheels turning without rest', partId: 'drill-tower' },
    { text: 'turns and cuts its way down', partId: 'drill-pipe' },
    { text: 'a tall fire that lights the night sea', partId: 'fire-tower' },
    { text: 'swings boxes and pipes up from working boats', partId: 'load-crane' },
    { text: 'two weeks on, then two weeks off', partId: 'worker-home' },
    { text: 'fuel for cars and heat for homes', partId: 'drill-pipe' },
    { text: 'a new city under the waves', partId: 'sea-legs' },
  ],
  color: '#48CAE4',
}
