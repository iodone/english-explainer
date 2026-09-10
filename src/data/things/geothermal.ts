import type { ThingData } from '../types'

export const geothermal: ThingData = {
  id: 'geothermal',
  slug: 'geothermal',
  simpleName: 'The Earth Heat House',
  realName: 'Geothermal Power Plant',
  category: 'power',
  funFacts: [
    'One small cold country, built on hot ground far out in the cold sea, makes more than half its power this way and warms almost every house in town with earth heat — its people sit outside in warm water while snow falls on their heads.',
    'The deepest hole people have ever drilled is about 7.5 miles down: the deeper the drill went, the hotter and softer the stone, until at the bottom the rock closed the hole behind it, like a mouth.',
    'The ground under your feet is not still: it rises and falls a hair with the pull of the sea twice a day, and it settles when a deep well takes its water out — the earth is a slow body that breathes, and the earth heat house is built to listen to it.',
  ],
  parts: [
    { id: 'deep-holes', label: 'deep holes', realName: 'Production Wells', position: [0, -0.6, 0], finish: 'titanium' },
    { id: 'heat-rocks', label: 'heat rocks', realName: 'Hot Reservoir Rock', position: [0.05, -1.15, 0], finish: 'warning' },
    { id: 'water-way', label: 'water way', realName: 'Injection Well', position: [-0.42, -0.5, 0], finish: 'cold' },
    { id: 'steam-way', label: 'steam way', realName: 'Production Riser', position: [0.42, -0.5, 0], finish: 'cold' },
    { id: 'steam-hall', label: 'steam hall', realName: 'Turbine Hall', position: [1.1, 0.1, 0], finish: 'hull' },
    { id: 'turning-wheel', label: 'turning wheel', realName: 'Steam Turbine', position: [1.02, 0.12, 0], finish: 'cold' },
    { id: 'cloud-tower', label: 'cloud tower', realName: 'Cooling Tower', position: [1.55, 0.3, 0], finish: 'cold' },
  ],
  article: [
    {
      sentences: [
        [
          'Deep under the ground, below the mountains, the earth is hot — and this house of machines reaches down into that old heat and turns it into the light in your room.',
        ],
        [
          'The reaching down is done by the ',
          { text: 'deep holes', part: 'deep-holes' },
          ': two wells drilled straight down into the rock, more than a mile deep — deeper than the tallest building is tall.',
        ],
        [
          'At the bottom of the holes lie the ',
          { text: 'heat rocks', part: 'heat-rocks' },
          ': gray stone holding heat enough to turn water into steam — heat left over from the making of the world itself, for the deeper you go, the warmer the rock, and so it has been since the earth was young.',
        ],
      ],
    },
    {
      sentences: [
        [
          'Cold water is pushed down the first hole through the ',
          { text: 'water way', part: 'water-way' },
          ': a long pipe carrying water down into the hot dark, where it spreads through the broken places in the stone and touches the heat on every side.',
        ],
        [
          'The stone gives its heat to the water, little by little, until the water can hold no more — and then it turns to steam, the way water in a closed box over a fire pushes at the walls until they give.',
        ],
        [
          'The steam runs back up the second hole through the ',
          { text: 'steam way', part: 'steam-way' },
          ': pushed by its own heat, up and up through a mile of rock, arriving at the top hot, fast, and ready to work.',
        ],
        [
          'Up top, it is caught in the ',
          { text: 'steam hall', part: 'steam-hall' },
          ': the great room of the house, where the steam is cleaned, dried, and held behind doors at high pushing strength — strength enough to push a train down a track.',
        ],
      ],
    },
    {
      sentences: [
        [
          'The doors open onto the ',
          { text: 'turning wheel', part: 'turning-wheel' },
          ': a wheel with blades on it, like a water wheel that runs on steam — the hot steam blows through the blades, the wheel spins, and the heat of the world’s inside becomes turning.',
        ],
        [
          'The wheel is joined to a power maker, and its turning is changed into the power that lights the town — the inside heat of the world, brought up a mile of rock and turned into light.',
        ],
        [
          'The used steam, its work done, rises up the inside of the ',
          { text: 'cloud tower', part: 'cloud-tower' },
          ': a great round tower, wide in the middle like a top, standing over the house and breathing out a soft white cloud on cold days.',
        ],
        [
          'Cooled back into water, it runs down the first hole again — the same water going around the same circle for years, taking heat from the stone, giving it to the town, and going back for more.',
        ],
      ],
    },
    {
      sentences: [
        [
          'This is power that cannot run out on a human clock: the stone below has been hot for 4,000,000,000 years, and it will still be warm when every fire now burning above the ground has been forgotten.',
        ],
        [
          'In a few hot places on the earth, the ground does this work by itself: tall ',
          { text: 'geysers', dict: 'geyser' },
          ' of steaming water throw themselves into the sky every few minutes, and hot springs run warm rivers past the doors — people have warmed themselves at such places for more than 2,000 years, and some towns there are heated through the winter by hot water running under their streets.',
        ],
        [
          'Every light in your room, made this way, is a little of the world’s own inside heat, brought up through a mile of rock to say hello.',
        ],
      ],
    },
  ],
  keyExpressions: [
    { text: 'heat left over from the making of the world itself' },
    { text: 'more than a mile deep — deeper than the tallest building is tall', partId: 'deep-holes' },
    { text: 'gray stone holding heat enough to turn water into steam', partId: 'heat-rocks' },
    { text: 'spreads through the broken places in the stone', partId: 'water-way' },
    { text: 'hot, fast, and ready to work', partId: 'steam-way' },
    { text: 'strength enough to push a train down a track', partId: 'steam-hall' },
    { text: 'like a water wheel that runs on steam', partId: 'turning-wheel' },
    { text: 'breathing out a soft white cloud on cold days', partId: 'cloud-tower' },
    { text: 'the same water going around the same circle for years' },
  ],
  flow: [
    { partIds: ['deep-holes'], sentenceRef: 1, caption: 'First the deep holes — two wells, more than a mile down into the warm rock.' },
    { partIds: ['water-way'], sentenceRef: 3, caption: 'Down the water way — cold water, pushed into the broken stone to drink its heat.' },
    { partIds: ['steam-way'], sentenceRef: 5, caption: 'Up the steam way — the water comes home as steam, hot, fast, and pushing.' },
    { partIds: ['turning-wheel'], sentenceRef: 7, caption: 'The steam blows through the turning wheel — the world’s inside heat becomes turning, and the turning becomes light.' },
    { partIds: ['cloud-tower'], sentenceRef: 9, caption: 'And the used steam rises out of the cloud tower — a white wave to the sky, before the same water goes down again.' },
  ],
  color: '#C2410C',
}
