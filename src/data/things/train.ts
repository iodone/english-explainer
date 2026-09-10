import type { ThingData } from '../types'

export const train: ThingData = {
  id: 'train',
  slug: 'train',
  simpleName: 'Iron Road',
  realName: 'Train',
  category: 'transport',
  funFacts: [
    'The wheels and the rails are both hard metal, so a train meets the ground on a spot smaller than the end of your finger — that is why rolling a train takes one part in a hundred of the power a road truck would need.',
    'Where the lines cross a big river, they sometimes run under the water itself, through a tube laid on the river bed — trains have been driving under rivers for more than a hundred years.',
    'The longest trains, carrying rock and food and fuel across open land, are longer than a whole small town from end to end, pulled by several power cars at once.',
  ],
  parts: [
    { id: 'power-car', label: 'Power Car', realName: 'Locomotive', position: [1.15, 0.35, 0], finish: 'titanium' },
    { id: 'people-cars', label: 'People Cars', realName: 'Carriages', position: [-1.1, 0.35, 0], finish: 'hull' },
    { id: 'wheel-sets', label: 'Wheel Sets', realName: 'Bogies', position: [0, 0.17, 0], finish: 'cold' },
    { id: 'rail-lines', label: 'Rail Lines', realName: 'Rails', position: [0, 0.02, 0], finish: 'cold' },
    { id: 'power-arm', label: 'Power Arm', realName: 'Pantograph', position: [1.15, 0.95, 0], finish: 'warning' },
    { id: 'sky-wire', label: 'Sky Wire', realName: 'Overhead Line', position: [0, 1.18, 0], finish: 'cold' },
  ],
  article: [
    {
      sentences: [
        [
          'A train is a line of heavy cars that follows a road of ',
          { text: 'iron', dict: 'iron' },
          ': two long lines of hard metal, laid end to end across the land.',
        ],
        [
          'A car on a road must fight the soft ground, turn and stop and turn again; a train makes a trade — it can only follow the ',
          { text: 'rails', dict: 'rail' },
          ', never going anywhere else, and in return the wheels roll with almost no fight at all.',
        ],
        ['That is the whole idea: less fight means less power lost, and a machine that touches the ground at only a few small points can grow as long and as heavy as you like.'],
      ],
    },
    {
      sentences: [
        [
          'The ',
          { text: 'power car', part: 'power-car' },
          ' does the pulling: a power maker inside turns the wheels through ',
          { text: 'wheel sets', part: 'wheel-sets' },
          ' — groups of four wheels, each group able to bend a little on its own, so the long car can take the bends.',
        ],
        [
          'Its power comes from above: a ',
          { text: 'power arm', part: 'power-arm' },
          ' on the car’s roof rides up against the ',
          { text: 'sky wire', part: 'sky-wire' },
          ', and the wire hands the car a running river of power.',
        ],
        [
          'Behind the power car, the ',
          { text: 'people cars', part: 'people-cars' },
          ' — dozens on the longest trains — hang from each other arm to arm, following like a dance line, pulled by the one at the head.',
        ],
        [
          'And under all of it lie the ',
          { text: 'rail lines', part: 'rail-lines' },
          ': two hard metal roads, exactly the same space between them, from city to city — so true that a train can hold its line at speed with no hand on the wheel.',
        ],
      ],
    },
    {
      sentences: [
        ['Starting is a quiet fight: metal wheels on metal rails slip a little with a small cry, then catch, and the whole heavy line begins to roll.'],
        ['Stopping is the harder half: a train needs a long, long way to come to rest, so the lines carry marks and lights far ahead, telling the driver while there is still room.'],
        ['At night and in rain and snow, when the driver can see almost nothing, the train does not see at all — it simply follows its two lines, and they never turn away from it.'],
        ['And because the lines bend so gently and the ride is so quiet, people sleep, eat, and work inside it while it runs through the dark, faster than any car on the road.'],
      ],
    },
    {
      sentences: [
        ['The first ones, two hundred years ago, were pulled by fire-breathing iron horses — slow, loud, and black with smoke.'],
        ['Today the fastest ones float above the line, held up and pushed along by moving power — no wheels touching, no fight at all.'],
        ['A road of iron, an arm reaching to the sky, cars holding hands down the line — the heaviest thing that moves on land.'],
      ],
    },
  ],
  flow: [
    { partIds: ['power-car'], sentenceRef: 3, caption: 'The power car does the pulling — a power maker inside turns the wheels.' },
    { partIds: ['sky-wire', 'power-arm'], sentenceRef: 4, caption: 'The power arm rides up against the sky wire, which hands the car a running river of power.' },
    { partIds: ['people-cars'], sentenceRef: 5, caption: 'People cars hang arm to arm, pulled by the one at the head.' },
    { partIds: ['rail-lines'], sentenceRef: 6, caption: 'The rail lines: two hard metal roads, so true that a train can hold its line at speed.' },
    { partIds: ['wheel-sets', 'rail-lines'], sentenceRef: 7, caption: 'Metal wheels on metal rails: slip a little, catch, and the heavy line rolls.' },
  ],
  keyExpressions: [
    { text: 'a road of iron' },
    { text: 'a train makes a trade' },
    { text: 'touches the ground at only a few small points' },
    { text: 'a running river of power' },
    { text: 'arm to arm, following like a dance line' },
    { text: 'hold its line at speed' },
    { text: 'slip a little with a small cry, then catch' },
    { text: 'they never turn away from it' },
    { text: 'the heaviest thing that moves on land' },
  ],
  color: '#84CC16',
}
