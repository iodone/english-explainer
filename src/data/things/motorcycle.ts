import type { ThingData } from '../types'

export const motorcycle: ThingData = {
  id: 'motorcycle',
  slug: 'motorcycle',
  simpleName: 'The Two-Wheel Rider',
  realName: 'Motorcycle',
  category: 'transport',
  funFacts: [
    'A fast engine can turn more than 10,000 times a minute, and the fastest machines have gone past 200 miles an hour — with no roof, no doors, and nothing to hold on to but the machine itself.',
    'A good rider can ride on the back wheel alone, with the front wheel high in the air — and can bring the machine to a full stop and hold it there with both feet on the ground.',
    'They carry little — one or two people and a small bag — yet they need far less road than a car, and in many big cities of the world there are more of them than there are cars.',
  ],
  parts: [
    { id: 'metal-bones', label: 'metal bones', realName: 'Frame', position: [0, -0.05, 0], finish: 'hull' },
    { id: 'fire-heart', label: 'fire heart', realName: 'Engine', position: [0.06, -0.14, 0], finish: 'warning' },
    { id: 'back-wheel', label: 'back wheel', realName: 'Rear Wheel', position: [-0.58, -0.34, 0], finish: 'cold' },
    { id: 'round-wheel', label: 'round wheel', realName: 'Front Wheel', position: [0.58, -0.34, 0], finish: 'cold' },
    { id: 'turning-stick', label: 'turning stick', realName: 'Handlebar & Fork', position: [0.46, 0.32, 0], finish: 'cold' },
    { id: 'smoke-pipe', label: 'smoke pipe', realName: 'Exhaust Pipe', position: [-0.28, -0.44, 0], finish: 'cold' },
    { id: 'ride-seat', label: 'ride seat', realName: 'Seat', position: [-0.34, 0.30, 0], finish: 'titanium' },
  ],
  article: [
    {
      sentences: [
        [
          'The two-wheel rider is a fast road machine with only two wheels, one behind the other — small, light, and easy to move, it can carry one person through spaces a car could never fit.',
        ],
        [
          'The first one was built more than 140 years ago, when people put a small engine into a bicycle; from that first ',
          { text: 'motorcycle', dict: 'motorcycle' },
          ' to today, the idea has never stopped growing.',
        ],
        [
          'Everything is held together by the ',
          { text: 'metal bones', part: 'metal-bones' },
          ' — a strong metal shape that ties the two wheels to each other, holding every other piece in place.',
        ],
      ],
    },
    {
      sentences: [
        [
          'In its middle sits the ',
          { text: 'fire heart', part: 'fire-heart' },
          ' — the engine — a small metal box where fuel and air burn in fast fires, hundreds of little pushes every second.',
        ],
        [
          'Each fire is started by a ',
          { text: 'spark', dict: 'spark' },
          ', the same tiny light that can jump from your hand to a door on a dry day, and the used gas leaves through the ',
          { text: 'smoke pipe', part: 'smoke-pipe' },
          ', a long cool line running back along the side.',
        ],
        [
          'The push of the fires turns a wheel inside, round and round, and that turning is carried to the ',
          { text: 'back wheel', part: 'back-wheel' },
          ' by a ',
          { text: 'chain', dict: 'chain' },
          ' — a line of small metal rings, each one pushing the next.',
        ],
        [
          'The rider holds the ',
          { text: 'turning stick', part: 'turning-stick' },
          ' and points the ',
          { text: 'round wheel', part: 'round-wheel' },
          ' with small moves of the hands: a push on one side, a pull on the other, even a lean of the body, and the machine turns.',
        ],
      ],
    },
    {
      sentences: [
        [
          'The ',
          { text: 'ride seat', part: 'ride-seat' },
          ' sits high, putting the rider up where they can see far down the road; when the machine stops, both feet can still reach the ground.',
        ],
        [
          'A machine standing still falls over, but a moving one holds itself up, because the spinning wheels fight to keep turning the same way — the faster they turn, the harder it is to push them over.',
        ],
        [
          'In a fast turn the rider leans far into the bend, and the best riders lean so far that a knee almost touches the road.',
        ],
        [
          'To stop, the rider pulls the ',
          { text: 'brake', dict: 'brake' },
          ' — strong metal rings that grab each wheel and slow it down, turning the machine’s power of moving into heat.',
        ],
      ],
    },
    {
      sentences: [
        [
          'Some of the fastest can go from a full stop to 60 miles an hour in less than 3 seconds — faster than almost any car on the road.',
        ],
        [
          'Riding one feels like flying low: the wind pushes past your body, the road runs under the wheels, and the whole world is close enough to touch.',
        ],
        [
          'It is not the fastest way to go, and not the safest — but with nothing between the rider and the world but moving air, it is the one that feels the most free.',
        ],
      ],
    },
  ],
  keyExpressions: [
    { text: 'a fast road machine with only two wheels' },
    { text: 'there is no standing still' },
    { text: 'ties the two wheels to each other, holding every other piece in place', partId: 'metal-bones' },
    { text: 'hundreds of little pushes every second', partId: 'fire-heart' },
    { text: 'pushed by the fires through the chain, round and round', partId: 'back-wheel' },
    { text: 'pointed with small moves of the hands', partId: 'round-wheel' },
    { text: 'a push on one side, a pull on the other', partId: 'turning-stick' },
    { text: 'a long cool line carrying the used gas away', partId: 'smoke-pipe' },
    { text: 'up where the rider can see far down the road', partId: 'ride-seat' },
  ],
  flow: [
    { partIds: ['metal-bones'], sentenceRef: 2, caption: 'First the metal bones — the strong metal shape that ties the two wheels to each other, holding every other piece in place.' },
    { partIds: ['fire-heart'], sentenceRef: 3, caption: 'In its middle sits the fire heart — the engine, where fuel and air burn in fast fires, hundreds of little pushes every second.' },
    { partIds: ['back-wheel'], sentenceRef: 5, caption: 'The push is carried to the back wheel by the chain — a line of small metal rings, each one pushing the next.' },
    { partIds: ['round-wheel'], sentenceRef: 6, caption: 'The rider points the round wheel through the turning stick — a push on one side, a pull on the other, and the machine turns.' },
    { partIds: ['ride-seat'], sentenceRef: 7, caption: 'High on top sits the ride seat, putting the rider up where they can see far down the road.' },
  ],
  color: '#2563EB',
}
