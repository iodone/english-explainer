import type { ThingData } from '../types'

export const bus: ThingData = {
  id: 'bus',
  slug: 'bus',
  simpleName: 'The Big People Box',
  realName: 'City Bus',
  category: 'transport',
  funFacts: [
    'A full city bus can carry as many riders as 50 cars — one driver, one machine, one road.',
    'In some cities, two bus bodies are joined back to back with a turning middle, so one long bus can turn corners like two short ones.',
    'The first stop bells used a thin rope along the window — one pull, and a real bell rang at the front.',
  ],
  parts: [
    { id: 'long-body', label: 'long body', realName: 'Bus Body', position: [0, -0.1, 0], finish: 'hull' },
    { id: 'top-windows', label: 'top windows', realName: 'Window Band', position: [-0.06, -0.02, 0.15], finish: 'cold' },
    { id: 'front-door', label: 'front door', realName: 'Entry Door', position: [0.37, -0.13, 0.16], finish: 'cold' },
    { id: 'driver-seat', label: 'driver seat', realName: "Driver's Seat", position: [0.33, -0.1, 0.05], finish: 'titanium' },
    { id: 'stop-bell', label: 'stop bell', realName: 'Stop Bell', position: [0.24, -0.03, 0.02], finish: 'warning' },
    { id: 'wheel-set', label: 'wheel set', realName: 'Wheels', position: [0, -0.3, 0], finish: 'cold' },
    { id: 'back-engine', label: 'back engine', realName: 'Rear Engine', position: [-0.35, -0.18, 0], finish: 'cold' },
  ],
  article: [
    {
      sentences: [
        [
          'Every morning, the big people box rolls down its street, slowing with its ',
          { text: 'brakes', dict: 'brake' },
          ' at every corner where people wait.',
        ],
        [
          'Inside, the ',
          { text: 'long body', part: 'long-body' },
          ' is a room on wheels, with rows of seats from front to back.',
        ],
        [
          'Riders step through the ',
          { text: 'front door', part: 'front-door' },
          ', one by one, each showing a card or a ',
          { text: 'ticket', dict: 'ticket' },
          '.',
        ],
      ],
    },
    {
      sentences: [
        [
          'Up front sits the driver in the ',
          { text: 'driver seat', part: 'driver-seat' },
          ', hands on the wheel, eyes on the road.',
        ],
        [
          'Under the floor at the back, the ',
          { text: 'back engine', part: 'back-engine' },
          ' burns ',
          { text: 'fuel', dict: 'fuel' },
          ', turning it into the push that drives the wheels.',
        ],
        [
          'The ',
          { text: 'wheel set', part: 'wheel-set' },
          ' turns as one — six black tires singing on the gray street, stop after stop.',
        ],
        [
          'At each stop the doors open wide, and new riders step up while others step down.',
        ],
      ],
    },
    {
      sentences: [
        [
          'Light comes in through the ',
          { text: 'top windows', part: 'top-windows' },
          ', a long line of glass from front to back.',
        ],
        [
          'When a rider sees their stop coming, they reach up and press the ',
          { text: 'stop bell', part: 'stop-bell', dict: 'bell' },
          ' — one bright ring runs through the bus.',
        ],
        [
          'The driver hears it, pulls a ',
          { text: 'handle', dict: 'handle' },
          ', and the bus slows and stops at the next corner.',
        ],
        [
          'In some cities, buses have two floors, with a stair that climbs up to another row of seats.',
        ],
      ],
    },
    {
      sentences: [
        [
          'At night, the last bus rolls home to the station, empty and quiet.',
        ],
        [
          'Tomorrow it will do it all again — the same streets, the same corners, from morning to night.',
        ],
        [
          'For many city riders, this slow box on wheels is how the city comes to them, door to door, all for a little money.',
        ],
      ],
    },
  ],
  flow: [
    { partIds: ['front-door'], sentenceRef: 2, caption: 'The front door opens, and riders step up one by one, each with a card or a ticket.' },
    { partIds: ['driver-seat'], sentenceRef: 3, caption: 'The driver takes the seat — hands on the wheel, eyes on the road.' },
    { partIds: ['back-engine'], sentenceRef: 4, caption: 'The back engine burns fuel and pushes, and the bus begins to roll.' },
    { partIds: ['wheel-set'], sentenceRef: 5, caption: 'The wheel set turns as one — six tires, stop after stop, all day long.' },
    { partIds: ['stop-bell'], sentenceRef: 8, caption: 'A rider presses the stop bell, and the driver pulls up at the next corner.' },
  ],
  keyExpressions: [
    { text: 'a room on wheels, from front to back', partId: 'long-body' },
    { text: 'riders step through, one by one', partId: 'front-door' },
    { text: 'hands on the wheel, eyes on the road', partId: 'driver-seat' },
    { text: 'burns fuel under the floor at the back', partId: 'back-engine' },
    { text: 'six black tires, stop after stop', partId: 'wheel-set' },
    { text: 'a long line of glass from front to back', partId: 'top-windows' },
    { text: 'reach up and press — one bright ring', partId: 'stop-bell' },
    { text: 'two floors, with a stair that climbs up', partId: 'long-body' },
    { text: 'from morning to night, door to door', partId: 'front-door' },
  ],
  color: '#F4A261',
}
