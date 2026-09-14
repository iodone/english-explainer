import type { ThingData } from '../types'

export const monorail: ThingData = {
  id: 'monorail',
  slug: 'monorail',
  simpleName: 'The One Rail Train',
  realName: 'Monorail',
  category: 'transport',
  funFacts: [
    'A one rail train sits on top of one big rail instead of two small ones like a normal train.',
    'Some one rail trains can go very fast — over 100 ways in one hour.',
    'The first one rail train was built over 100 years ago, but they are still used in many big cities today.',
  ],
  parts: [
    { id: 'car-body', label: 'car body', realName: 'Car body', position: [0, 0.08, 0], finish: 'hull' },
    { id: 'rail', label: 'rail', realName: 'Beam', position: [0, -0.08, 0], finish: 'titanium' },
    { id: 'wheels', label: 'wheels', realName: 'Bogies', position: [0, -0.02, 0], finish: 'cold' },
    { id: 'windows', label: 'windows', realName: 'Windows', position: [0, 0.12, 0.12], finish: 'cold' },
    { id: 'door', label: 'door', realName: 'Door', position: [0.18, 0.04, 0.12], finish: 'warning' },
    { id: 'power-arm', label: 'power arm', realName: 'Pantograph', position: [0, 0.22, 0], finish: 'titanium' },
    { id: 'seats', label: 'seats', realName: 'Seats', position: [0, 0.02, 0], finish: 'cold' },
  ],
  article: [
    {
      sentences: [
        [
          'This is a ',
          { text: 'one rail train', dict: 'monorail' },
          '. It is a train that rides on top of one big rail instead of two small ones.',
        ],
      ],
    },
    {
      sentences: [
        [
          'The ',
          { text: 'car body', part: 'car-body' },
          ' is the big part that holds all the people inside.',
        ],
        [
          'It has big ',
          { text: 'windows', part: 'windows' },
          ' so people can see outside while they ride.',
        ],
      ],
    },
    {
      sentences: [
        [
          'The car body sits on top of the ',
          { text: 'rail', part: 'rail' },
          ' — one long beam that goes through the city.',
        ],
        [
          'The ',
          { text: 'wheels', part: 'wheels' },
          ' under the car body hold it on the rail and make it go.',
        ],
      ],
    },
    {
      sentences: [
        [
          'People get in and out through the ',
          { text: 'door', part: 'door' },
          ' on the side.',
        ],
        [
          'Inside, there are ',
          { text: 'seats', part: 'seats' },
          ' for people to sit on while they ride.',
        ],
      ],
    },
    {
      sentences: [
        [
          'The ',
          { text: 'power arm', part: 'power-arm' },
          ' on top reaches up to get power from the wires above the rail.',
        ],
        ['This power makes the wheels turn and the train go forward.'],
      ],
    },
    {
      sentences: [
        ['One rail trains are very quiet because they do not touch the ground.'],
        ['They go above the streets, so they do not get stuck in the big line of cars.'],
        ['Many cities use one rail trains to move people around quickly and quietly.'],
      ],
    },
  ],
  flow: [
    { partIds: ['car-body', 'windows'], sentenceRef: 1, caption: 'The car body holds people inside with big windows.' },
    { partIds: ['rail', 'wheels'], sentenceRef: 4, caption: 'The car body sits on one rail with wheels under it.' },
    { partIds: ['door', 'seats'], sentenceRef: 6, caption: 'People get in through the door and sit on the seats.' },
    { partIds: ['power-arm'], sentenceRef: 8, caption: 'The power arm gets power from the wires above.' },
    { partIds: ['wheels'], sentenceRef: 9, caption: 'Power makes the wheels turn and the train go.' },
  ],
  keyExpressions: [
    { text: 'one rail train', partId: 'rail' },
    { text: 'rides on top of one big rail', partId: 'rail' },
    { text: 'holds all the people inside', partId: 'car-body' },
    { text: 'big windows so people can see outside', partId: 'windows' },
    { text: 'hold it on the rail and make it go', partId: 'wheels' },
    { text: 'get in and out through the door', partId: 'door' },
    { text: 'reaches up to get power from the wires', partId: 'power-arm' },
  ],
  color: '#98FB98',
}