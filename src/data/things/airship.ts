import type { ThingData } from '../types'

export const airship: ThingData = {
  id: 'airship',
  slug: 'airship',
  simpleName: 'The Sky Whale',
  realName: 'Airship',
  category: 'transport',
  funFacts: [
    'The biggest sky whale ever built was 245 meters long — about as long as 50 cars in a line — and in 1929 it flew all the way around the world in 21 days.',
    'A sky whale does not stay up for free: the lifting gas slowly slips out day by day, so the team must keep adding more to keep the ship up.',
    'The biggest sky whale of all was meant to be filled with a safe gas that cannot burn, but a world war made it hard to get, so it was filled with a cheap burning one instead — and that choice ended everything.',
  ],
  parts: [
    { id: 'gas-bag', label: 'gas bag', realName: 'Envelope', position: [0, 0.52, 0], finish: 'hull' },
    { id: 'inside-air-bags', label: 'inside air bags', realName: 'Ballonets', position: [-0.30, 0.52, 0], finish: 'cold' },
    { id: 'hanging-room', label: 'hanging room', realName: 'Gondola', position: [0, 0.055, 0], finish: 'cold' },
    { id: 'turn-fins', label: 'turn fins', realName: 'Rudder and Elevators', position: [0.92, 0.62, 0], finish: 'cold' },
    { id: 'turning-blades', label: 'turning blades', realName: 'Propeller Engines', position: [0.35, 0.02, 0.13], finish: 'warning' },
    { id: 'fuel-tank', label: 'fuel tank', realName: 'Fuel Tanks', position: [-0.50, 0.16, 0.10], finish: 'cold' },
    { id: 'nose-rope', label: 'nose rope', realName: 'Mooring Line', position: [-0.98, 0.05, 0], finish: 'titanium' },
  ],
  article: [
    {
      sentences: [
        [
          'The biggest thing that has ever flown had no wings at all — it floated, slow and silent, like a ',
          { text: 'whale', dict: 'whale' },
          ' moving through the air.',
        ],
        [
          'This sky whale is the ',
          { text: 'airship', dict: 'airship' },
          ': a great soft bag of gas that is lighter than air, so the air itself lifts it the way water lifts a boat.',
        ],
        [
          'The bag is the ',
          { text: 'gas bag', part: 'gas-bag', dict: 'gas' },
          ' — on the biggest ships, longer than three blue whales set nose to tail.',
        ],
      ],
    },
    {
      sentences: [
        [
          'Gas alone is not enough: the team must be able to make the ship heavier or lighter at will, so inside the great bag hide smaller ',
          { text: 'inside air bags', part: 'inside-air-bags' },
          ' that can be filled with outside air.',
        ],
        [
          'Under the middle hangs the ',
          { text: 'hanging room', part: 'hanging-room' },
          ', a small house with windows where the people sit, drive, and watch the world go by below.',
        ],
        [
          'At the tail sit the ',
          { text: 'turn fins', part: 'turn-fins' },
          ', flat wings that the driver can move to push the nose left or right, up or down.',
        ],
        [
          'Along the sides work the ',
          { text: 'turning blades', part: 'turning-blades', dict: 'blade' },
          ', little turning wings pushed by quiet engines, pulling the ship forward through the sky.',
        ],
      ],
    },
    {
      sentences: [
        [
          'To climb, the team lets air out of the inside bags, making the whole ship lighter; to drop back down, they fill them again.',
        ],
        [
          'The engines drink from the ',
          { text: 'fuel tank', part: 'fuel-tank' },
          ', and because the gas holds the ship up for free, they only need to push it along — so an airship can ',
          { text: 'float', dict: 'float' },
          ' for days on far less fuel than any fast flying machine.',
        ],
        [
          'When the ship comes home, a ',
          { text: 'nose rope', part: 'nose-rope', dict: 'rope' },
          ' is dropped down and tied to the ground, and the sky whale rests, pulling softly, until its next trip.',
        ],
        [
          'In their best years, the great sky whales crossed the sea carrying people who slept in beds and ate at tables hanging under the bag.',
        ],
      ],
    },
    {
      sentences: [
        [
          'Then came the day of the great fire: one of the biggest sky whales, landing in front of everyone, went up in smoke in under a minute, and the world turned away from them.',
        ],
        [
          'It was the gas that burned, picked not because it was safe, but because it was ',
          { text: 'cheap', dict: 'cheap' },
          '.',
        ],
        [
          'Today the few sky whales that fly again use a gas that cannot burn at all, and they sail on — slow, silent, and lighter than the world below them.',
        ],
      ],
    },
  ],
  flow: [
    { partIds: ['gas-bag'], sentenceRef: 2, caption: 'The great gas bag, lighter than air, is lifted by the sky itself.' },
    { partIds: ['inside-air-bags'], sentenceRef: 3, caption: 'The inside air bags take in or let out outside air, making the ship heavier or lighter at will.' },
    { partIds: ['turn-fins'], sentenceRef: 5, caption: 'The turn fins move to push the nose left or right, up or down.' },
    { partIds: ['turning-blades'], sentenceRef: 6, caption: 'The turning blades pull the whole ship forward through the sky.' },
    { partIds: ['fuel-tank'], sentenceRef: 8, caption: 'The fuel tank feeds the engines, and the gas holds the ship up for free.' },
  ],
  keyExpressions: [
    { text: 'a great soft bag of gas lighter than air', partId: 'gas-bag' },
    { text: 'smaller bags inside that make the ship heavier or lighter', partId: 'inside-air-bags' },
    { text: 'the small house with windows where the people sit and drive', partId: 'hanging-room' },
    { text: 'flat wings at the tail that push the nose left or right', partId: 'turn-fins' },
    { text: 'little turning wings that pull the ship forward', partId: 'turning-blades' },
    { text: 'the tank that feeds fuel to the engines', partId: 'fuel-tank' },
    { text: 'the line dropped down and tied to the ground when the ship comes home', partId: 'nose-rope' },
    { text: 'like a whale moving through the air', partId: 'gas-bag' },
    { text: 'slow, silent, and lighter than the world below', partId: 'turning-blades' },
  ],
  color: '#7C8FA6',
}
