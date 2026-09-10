import type { ThingData } from '../types'

export const comet: ThingData = {
  id: 'comet',
  slug: 'comet',
  simpleName: 'Sky Ice Ball',
  realName: 'Comet',
  category: 'space',
  funFacts: [
    'A small comet once grew a cloud wider than the sun in a single night, when no one was looking — it is still the biggest thing anyone has watched appear.',
    'Every sea may carry water that once sat inside comets: the young earth was hit by so many of these ice balls that some of its water could have come out of them.',
    'A machine has even landed on one: a small box on legs, dropped from a bigger machine that flew beside its comet for two years, taking pictures of a world of ice on its way around the sun.',
  ],
  parts: [
    { id: 'ice-heart', label: 'Ice Heart', realName: 'Nucleus', position: [-0.5, 0.05, 0], finish: 'warning' },
    { id: 'dark-skin', label: 'Dark Skin', realName: 'Surface Crust', position: [-0.5, 0.02, 0], finish: 'cold' },
    { id: 'gas-doors', label: 'Gas Doors', realName: 'Jets', position: [-0.7, 0.1, 0], finish: 'cold' },
    { id: 'warm-coat', label: 'Warm Coat', realName: 'Coma', position: [-0.5, 0, 0], finish: 'hull' },
    { id: 'dust-tail', label: 'Dust Tail', realName: 'Dust Tail', position: [-1.75, 0.15, 0], finish: 'titanium' },
    { id: 'light-tail', label: 'Light Tail', realName: 'Ion Tail', position: [-1.6, -0.55, 0], finish: 'cold' },
    { id: 'long-path', label: 'Long Path', realName: 'Orbital Path', position: [0.5, -0.45, 0], finish: 'cold' },
  ],
  article: [
    {
      sentences: [
        [
          'A ',
          { text: 'comet', dict: 'comet' },
          ' is a great ball of ice and dirt, left over from the building of the worlds, that sleeps in the cold far dark for most of its life and wakes, once each trip around the sun, into one of the biggest shows in the sky.',
        ],
        [
          'It looks like a star with hair, but it is only ice and dirt: a small dark heart that, warmed by the sun, grows a cloud and long tails longer than the distance from the earth to the sun.',
        ],
        [
          'The ',
          { text: 'ice heart', part: 'ice-heart' },
          ' is the whole thing really: a dirty ice ball a person could walk across in a morning, and everything else is a show it puts on as it comes near the fire.',
        ],
      ],
    },
    {
      sentences: [
        [
          'Its skin is not white but nearly as black as night — a ',
          { text: 'dark skin', part: 'dark-skin' },
          ' of burnt dirt over the ice, which is why these balls are so hard to find until they begin to show.',
        ],
        [
          'As it falls nearer the sun, the ice under the skin warms, turns straight to ',
          { text: 'gas', dict: 'gas' },
          ' without ever becoming water, and breaks out through ',
          { text: 'gas doors', part: 'gas-doors' },
          ' in the skin, shooting out in thin lines.',
        ],
        [
          'Gas and dirt, flowing out, wrap the heart in a growing ',
          { text: 'warm coat', part: 'warm-coat' },
          ' — a cloud that can grow wider than the sun itself.',
        ],
        [
          'And the sun does the rest: its light, flowing out like a river, carries the gas and dirt off the heart and away into two long tails that the comet wears only near the fire.',
        ],
      ],
    },
    {
      sentences: [
        [
          'The ',
          { text: 'dust tail', part: 'dust-tail' },
          ' is the heavier one: light dirt that leaves slowly and hangs in a wide line that bends along the path, catching the sun’s light, gold and soft.',
        ],
        [
          'The ',
          { text: 'light tail', part: 'light-tail' },
          ' is made of the gas itself, blown by nothing but light into a straight thin line pointing away from the sun, always.',
        ],
        [
          'And that is the strangest part of the show: the ',
          { text: 'tails', dict: 'tail' },
          ' do not hang behind the runner like a horse’s tail — they point away from the sun no matter which way the comet is going, so on the way home it flies ahead of its own hair.',
        ],
        [
          'Each trip, the ',
          { text: 'long path', part: 'long-path' },
          ' is a long thin ring: far past the last world at one end, around the fire at the other — a fall of many years toward the sun, and a climb of many years back out.',
        ],
      ],
    },
    {
      sentences: [
        [
          'Near the sun it burns half itself away and grows a show that can be seen across whole worlds; far out it goes dark again, a small sleeping ball of dirty ice, waiting for the next fall.',
        ],
        [
          'The best known one comes back about once in a person’s life; the last time it came, people sent little machines to meet it — and when it returns, in the year 2061, the people who saw it as children will be old enough to tell their children’s children.',
        ],
        [
          'Dirty ice, a black skin, two tails of gas and gold — a small cold thing that turns into the biggest show in the sky, over and over, for as long as the sun burns.',
        ],
      ],
    },
  ],
  flow: [
    { partIds: ['ice-heart'], sentenceRef: 2, caption: 'A few hours’ walk across, all ice and dirt — the whole comet is this small dark heart.' },
    { partIds: ['gas-doors'], sentenceRef: 4, caption: 'Near the sun the ice turns straight to gas and breaks out through the doors in the skin.' },
    { partIds: ['warm-coat'], sentenceRef: 5, caption: 'Gas flowing out wraps the heart in a cloud that can grow wider than the sun itself.' },
    { partIds: ['dust-tail', 'light-tail'], sentenceRef: 7, caption: 'Two tails: light dirt hanging in a bending line, and gas blown straight by nothing but light.' },
    { partIds: ['long-path'], sentenceRef: 10, caption: 'A long thin ring: years falling toward the sun, years climbing back out.' },
  ],
  keyExpressions: [
    { text: 'a great ball of ice and dirt' },
    { text: 'left over from the building of the worlds' },
    { text: 'sleeps in the cold far dark' },
    { text: 'turns straight to gas' },
    { text: 'a cloud wider than the sun itself' },
    { text: 'catching the sun’s light' },
    { text: 'blown by nothing but light' },
    { text: 'ahead of its own hair' },
    { text: 'once in a person’s life' },
  ],
  color: '#67E8F9',
}
