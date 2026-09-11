import type { ThingData } from '../types'

export const excavator: ThingData = {
  id: 'excavator',
  slug: 'excavator',
  simpleName: 'The Earth Biter',
  realName: 'Excavator',
  category: 'transport',
  funFacts: [
    'A big one is heavier than 20 cars put together, yet its wide road tracks spread the weight so well that it can cross soft, wet ground without going down.',
    'The same machine, with a different mouth, can cut steel, break old buildings apart, or lift other machines.',
    'Some of these machines built 50 years ago are still working now — with good care, an earth biter can out-live its driver.',
  ],
  parts: [
    { id: 'big-arm', label: 'big arm', realName: 'Boom', position: [0.21, 0, 0], finish: 'titanium' },
    { id: 'little-arm', label: 'little arm', realName: 'Stick', position: [0.44, -0.025, 0], finish: 'cold' },
    { id: 'biting-mouth', label: 'biting mouth', realName: 'Bucket', position: [0.565, -0.185, 0], finish: 'warning' },
    { id: 'road-tracks', label: 'road tracks', realName: 'Crawler Tracks', position: [-0.1, -0.315, 0], finish: 'cold' },
    { id: 'engine-heart', label: 'engine heart', realName: 'Engine & House', position: [-0.1, -0.135, 0], finish: 'cold' },
    { id: 'driver-box', label: 'driver box', realName: 'Cab', position: [0.075, -0.005, 0.025], finish: 'hull' },
    { id: 'tail-weight', label: 'tail weight', realName: 'Counterweight', position: [-0.345, -0.135, 0], finish: 'cold' },
  ],
  article: [
    {
      sentences: [
        [
          'Where a new road or a big house is going up, you will find this machine: it ',
          { text: 'digs', dict: 'dig' },
          ' the earth and moves it away.',
        ],
        [
          'Its real name is an ',
          { text: 'excavator', dict: 'excavator' },
          ' — the name comes from an old word for digging things out.',
        ],
        ['But watch it work, and another name feels more true: the earth biter.'],
      ],
    },
    {
      sentences: [
        [
          'The work starts at the ',
          { text: 'big arm', part: 'big-arm' },
          ' — a long, strong piece of steel that reaches out from the body, far over the ground.',
        ],
        [
          'At its end swings a second arm, the ',
          { text: 'little arm', part: 'little-arm' },
          ' — together the two can reach deep into a hole or high over a truck.',
        ],
        [
          'And at the very end hangs the ',
          { text: 'biting mouth', part: 'biting-mouth' },
          ' — a hard steel mouth with sharp teeth, built to bite into the dirt and come back full.',
        ],
        ['A big machine like this moves more earth in one day than 300 people could move with their hands.'],
      ],
    },
    {
      sentences: [
        [
          'Under all that weight, wheels would press deep into soft ground — so it runs on wide ',
          { text: 'road tracks', part: 'road-tracks' },
          ', a moving ring of metal that spreads the weight, so the machine can keep going over soft dirt.',
        ],
        [
          'Inside the body sits the ',
          { text: 'engine heart', part: 'engine-heart' },
          ' — it burns fuel all day and sends power to the arms, the tracks, and every moving part.',
        ],
        [
          'Up front, the ',
          { text: 'driver box', part: 'driver-box' },
          ' gives one worker a seat with glass on every side and the best view on the whole work place.',
        ],
        [
          'At the back hangs the ',
          { text: 'tail weight', part: 'tail-weight', dict: 'tail' },
          ' — a heavy block of steel that holds the machine down, so a mouth full of dirt can not pull it over.',
        ],
      ],
    },
    {
      sentences: [
        ['The whole job takes one worker: bite, lift, swing, drop — dirt moves from the hole to the truck, again and again.'],
        ['Machines like this one make the roads and the big buildings of a city — and the deep holes under them.'],
        ['The next time you see a fresh hole in the ground, look for the big yellow one that made it — and watch it take another bite.'],
      ],
    },
  ],
  flow: [
    { partIds: ['big-arm'], sentenceRef: 3, caption: 'The big arm reaches out from the body, holding the working parts far over the ground.' },
    { partIds: ['little-arm'], sentenceRef: 4, caption: 'At its end, the little arm swings — together the two can reach deep or high.' },
    { partIds: ['biting-mouth'], sentenceRef: 5, caption: 'The biting mouth cuts into the dirt with sharp teeth and comes back full.' },
    { partIds: ['road-tracks', 'engine-heart'], sentenceRef: 7, caption: 'The engine heart burns fuel and sends power out, while wide road tracks spread the weight over soft ground.' },
    { partIds: ['driver-box', 'tail-weight'], sentenceRef: 9, caption: 'In the driver box, one worker runs the whole job: bite, lift, swing, drop — with the tail weight holding it all down.' },
  ],
  keyExpressions: [
    { text: 'a long, strong piece of steel, reaching far over the ground', partId: 'big-arm' },
    { text: 'reach deep into a hole or high over a truck', partId: 'little-arm' },
    { text: 'bite into the dirt and come back full', partId: 'biting-mouth' },
    { text: 'a moving ring of metal spreading the weight', partId: 'road-tracks' },
    { text: 'burns fuel and sends power to every moving part', partId: 'engine-heart' },
    { text: 'a seat with glass on every side', partId: 'driver-box' },
    { text: 'a heavy block of steel holding the machine down', partId: 'tail-weight' },
    { text: 'bite, lift, swing, drop' },
    { text: 'more earth in one day than 300 people' },
  ],
  color: '#FFB703',
}
