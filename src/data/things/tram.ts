import type { ThingData } from '../types'

export const tram: ThingData = {
  id: 'tram',
  slug: 'tram',
  simpleName: 'The Street Train',
  realName: 'Tram',
  category: 'transport',
  funFacts: [
    'The first trams were pulled by horses — people later changed them to run on power from wires.',
    'Some cities have trams that run under the ground like a train and then come up to the street.',
    'A single tram can carry as many people as ten cars — but it only needs one driver.',
  ],
  parts: [
    { id: 'car-body', label: 'car body', realName: 'Car body', position: [0, 0.04, 0], finish: 'hull' },
    { id: 'wheels', label: 'wheels', realName: 'Wheel trucks', position: [0, -0.16, 0], finish: 'cold' },
    { id: 'power-arm', label: 'power arm', realName: 'Pantograph', position: [0, 0.28, 0], finish: 'warning' },
    { id: 'seats', label: 'seats', realName: 'Seating', position: [0, 0.04, 0], finish: 'cold' },
    { id: 'door', label: 'door', realName: 'Doors', position: [0.30, 0.04, 0], finish: 'titanium' },
    { id: 'windows', label: 'windows', realName: 'Glazing', position: [0, 0.12, 0.10], finish: 'cold' },
    { id: 'track', label: 'track', realName: 'Track', position: [0, -0.22, 0], finish: 'hull' },
  ],
  article: [
    {
      sentences: [
        [
          'This ',
          { text: 'tram', dict: 'tram' },
          ' is a train that runs on the street — it carries people through the city on a track built into the road.',
        ],
        [
          'It gets its power from a ',
          { text: 'power arm', part: 'power-arm' },
          ' that touches a wire high above the street.',
        ],
        ['You can get on and off at stops along the way, just like a bus but on a track.'],
      ],
    },
    {
      sentences: [
        [
          'The ',
          { text: 'car body', part: 'car-body' },
          ' is a long box that holds all the people inside.',
        ],
        [
          'Under the car, ',
          { text: 'wheels', part: 'wheels' },
          ' run on a ',
          { text: 'track', part: 'track' },
          ' built into the road — the track keeps it going straight.',
        ],
        [
          'The ',
          { text: 'power arm', part: 'power-arm' },
          ' on top reaches up to touch the wire and bring power down to the motor.',
        ],
        [
          'Inside, rows of ',
          { text: 'seats', part: 'seats' },
          ' let people sit while the tram moves through the city.',
        ],
      ],
    },
    {
      sentences: [
        [
          'A ',
          { text: 'door', part: 'door' },
          ' on the side opens at every stop to let people on and off.',
        ],
        [
          'Big ',
          { text: 'windows', part: 'windows' },
          ' on both sides let you see the city as you ride.',
        ],
        ['The driver sits at the front and controls how fast the tram goes.'],
        ['When the tram gets to the end of the line, it turns around and goes back the other way.'],
      ],
    },
    {
      sentences: [
        ['The first trams were pulled by horses through the streets of big cities.'],
        ['Today, many cities are bringing trams back because they are clean and quiet.'],
        ['Some new trams run on batteries and do not need a wire at all.'],
      ],
    },
  ],
  flow: [
    { partIds: ['car-body'], sentenceRef: 3, caption: 'The car body is a long box that holds all the people inside.' },
    { partIds: ['wheels', 'track'], sentenceRef: 4, caption: 'Wheels run on a track built into the road.' },
    { partIds: ['power-arm'], sentenceRef: 5, caption: 'The power arm reaches up to touch the wire and bring power down.' },
    { partIds: ['door'], sentenceRef: 7, caption: 'A door on the side opens at every stop.' },
    { partIds: ['windows'], sentenceRef: 8, caption: 'Big windows let you see the city as you ride.' },
  ],
  keyExpressions: [
    { text: 'a train that runs on the street', partId: 'car-body' },
    { text: 'carries people through the city', partId: 'car-body' },
    { text: 'gets its power from a power arm', partId: 'power-arm' },
    { text: 'keeps it going straight', partId: 'track' },
    { text: 'reaches up to touch the wire', partId: 'power-arm' },
    { text: 'let people on and off', partId: 'door' },
    { text: 'let you see the city as you ride', partId: 'windows' },
    { text: 'on a track built into the road' },
    { text: 'turns around and goes back the other way' },
  ],
  color: '#B0C4DE',
}