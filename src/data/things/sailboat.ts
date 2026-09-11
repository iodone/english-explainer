import type { ThingData } from '../types'

export const sailboat: ThingData = {
  id: 'sailboat',
  slug: 'sailboat',
  simpleName: 'The Wind Runner',
  realName: 'Sailboat',
  category: 'transport',
  funFacts: [
    'The fastest of these boats have gone more than 75 miles an hour — a boat, pushed by nothing but air, running as fast as a car on the open road.',
    'Laid out flat, the cloth wings of one of the biggest boats would cover almost half a football field — all of it working together as one machine.',
    'In a side wind, a good boat can go faster than the wind itself: the leaned-over wing turns the wind’s slow push into a fast pull forward.',
  ],
  parts: [
    { id: 'boat-body', label: 'boat body', realName: 'Hull', position: [0.1, 0.03, 0], finish: 'hull' },
    { id: 'sky-stick', label: 'sky stick', realName: 'Mast', position: [0.08, 0.75, 0], finish: 'cold' },
    { id: 'main-sail', label: 'main sail', realName: 'Mainsail', position: [-0.25, 0.6, 0], finish: 'warning' },
    { id: 'front-sail', label: 'front sail', realName: 'Jib', position: [0.42, 0.45, 0], finish: 'cold' },
    { id: 'swing-arm', label: 'swing arm', realName: 'Boom', position: [-0.35, 0.18, 0], finish: 'cold' },
    { id: 'deep-fin', label: 'deep fin', realName: 'Keel', position: [0.01, -0.4, 0], finish: 'titanium' },
    { id: 'tail-blade', label: 'tail blade', realName: 'Rudder', position: [-0.72, -0.22, 0], finish: 'cold' },
  ],
  article: [
    {
      sentences: [
        [
          'The wind runner is a boat with no engine at all: it is pushed over the sea by nothing but the wind, and with a good wind behind it, it can run day and night for weeks.',
        ],
        [
          'The pushing power comes from the ',
          { text: 'sail', dict: 'sail' },
          ': a great cloth wing, hung high above the water to catch the moving sky.',
        ],
        [
          'People have sailed this way for more than 2,000 years, with wood and cloth and rope; the newest boats carry wings of cloth as big as a house, and some can even go faster than the wind that pushes them.',
        ],
      ],
    },
    {
      sentences: [
        [
          'Everything grows out of the ',
          { text: 'boat body', part: 'boat-body' },
          ': a long shape, pointed at the front and round at the back, that parts the water with the least fight and carries every other piece of the boat.',
        ],
        [
          'Up from the middle of the body stands the ',
          { text: 'sky stick', part: 'sky-stick' },
          ' — the ',
          { text: 'mast', dict: 'mast' },
          ', a tall stick that holds the wings up high, where the wind blows free and strong.',
        ],
        [
          'On it hang two cloth wings: the ',
          { text: 'main sail', part: 'main-sail' },
          ', the great wing behind the stick, and the ',
          { text: 'front sail', part: 'front-sail' },
          ', a smaller one ahead of it — together they stand like a wall the wind must push.',
        ],
        [
          'The bottom edge of the main wing is tied to a ',
          { text: 'swing arm', part: 'swing-arm' },
          ' — the ',
          { text: 'boom', dict: 'boom' },
          ', a long arm that swings across the boat, so the sail can be turned to meet the wind from any side.',
        ],
      ],
    },
    {
      sentences: [
        [
          'Down under the water hangs the ',
          { text: 'deep fin', part: 'deep-fin' },
          ' — the ',
          { text: 'keel', dict: 'keel' },
          ', a heavy blade of iron reaching deep down, fighting the side push of the wind so the boat does not tip over.',
        ],
        [
          'At the back works the ',
          { text: 'tail blade', part: 'tail-blade' },
          ' — the ',
          { text: 'rudder', dict: 'rudder' },
          ', a flat blade pushed around by a wheel or a stick, pointing the boat left or right across the sea.',
        ],
        [
          'A boat can even work its way up into the wind: it points about half way between straight into the wind and straight across it, and the wind, pushing past the leaned-over wing, drives it ahead and across at the same time.',
        ],
        [
          'That is why a boat on the move leans over: the wind pushes it across, the deep fin holds it back, and the boat leans between them, its side sometimes almost touching the water.',
        ],
      ],
    },
    {
      sentences: [
        [
          'With the wind behind it, the boat runs easy, its great wings held wide to catch the whole moving sky.',
        ],
        [
          'Then the real work begins: the wings are pulled in, the boom swings across, the boat turns up into the wind and leans over hard — and the run is on.',
        ],
        [
          'No engine, no fuel, no noise — nothing but a person, a boat, and the never-ending power of the moving air.',
        ],
      ],
    },
  ],
  keyExpressions: [
    { text: 'a boat with no engine at all' },
    { text: 'pushed over the sea by nothing but the wind' },
    { text: 'parts the water with the least fight', partId: 'boat-body' },
    { text: 'holds the wings up high, where the wind blows free and strong', partId: 'sky-stick' },
    { text: 'standing like a wall the wind must push', partId: 'main-sail' },
    { text: 'a smaller wing ahead of the mast', partId: 'front-sail' },
    { text: 'swings across the boat to meet the wind from any side', partId: 'swing-arm' },
    { text: 'fighting the side push of the wind so the boat does not tip over', partId: 'deep-fin' },
    { text: 'pointing the boat any way its person wants to go', partId: 'tail-blade' },
  ],
  flow: [
    { partIds: ['boat-body'], sentenceRef: 3, caption: 'First the boat body — the long shape that parts the water with the least fight, carrying everything else.' },
    { partIds: ['sky-stick'], sentenceRef: 4, caption: 'Up from its middle stands the sky stick — the mast, holding the wings up where the wind blows free and strong.' },
    { partIds: ['main-sail'], sentenceRef: 5, caption: 'On it the main sail — the great cloth wing behind the stick, standing like a wall the wind must push.' },
    { partIds: ['deep-fin'], sentenceRef: 7, caption: 'Down under the water, the deep fin — the keel, heavy iron fighting the wind’s side push so the boat does not tip over.' },
    { partIds: ['tail-blade'], sentenceRef: 8, caption: 'And at the back, the tail blade — the rudder, pointing the boat any way its person wants to go.' },
  ],
  color: '#14B8A6',
}
