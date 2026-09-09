import type { ThingData } from '../types'

export const refrigerator: ThingData = {
  id: 'refrigerator',
  slug: 'refrigerator',
  simpleName: 'Cold Box',
  realName: 'Refrigerator',
  category: 'home',
  funFacts: [
    'The first home cold box was sold in 1927, and many people paid more money for it than for a car.',
    'Before cold boxes, people kept food in ice boxes and used big pieces of ice from cold places.',
    'A cold box works better with space behind it, because heat needs a place to leave.',
  ],
  parts: [
    { id: 'cold-box', label: 'Cold Box', realName: 'Cabinet', position: [0, 0, 0], finish: 'hull' },
    { id: 'cold-maker', label: 'Cold Maker', realName: 'Compressor', position: [0.45, -0.95, 0.35], finish: 'warning' },
    { id: 'cold-road', label: 'Cold Road', realName: 'Condenser & Evaporator Coils', position: [0, -0.2, -0.45], finish: 'cold' },
    { id: 'air-pusher', label: 'Air Pusher', realName: 'Evaporator Fan', position: [0, -0.2, 0.45], finish: 'cold' },
    { id: 'heat-watcher', label: 'Heat Watcher', realName: 'Thermostat', position: [0.7, 0.15, 0.55], finish: 'warning' },
    { id: 'ice-room', label: 'Ice Room', realName: 'Freezer Compartment', position: [0, 0.85, 0], finish: 'titanium' },
    { id: 'door-seal', label: 'Soft Door Line', realName: 'Door Gasket', position: [0, 0, 0.58], finish: 'cold' },
  ],
  article: [
    {
      sentences: [
        [
          'A ',
          { text: 'refrigerator', dict: 'refrigerator' },
          ' is a ',
          { text: 'cold box', part: 'cold-box' },
          ' that ',
          { text: 'keeps food safe', dict: 'keep safe' },
          ' by ',
          { text: 'taking heat away', dict: 'take away' },
          '.',
        ],
        [
          'It does not add cold; it moves heat from inside to outside.',
        ],
        [
          'The walls are thick, so heat has a hard time getting back in.',
        ],
      ],
    },
    {
      sentences: [
        [
          'A ',
          { text: 'cold maker', part: 'cold-maker' },
          ' presses a special stuff together and makes it hot.',
        ],
        [
          'The hot stuff sends heat into the air behind the box.',
        ],
        [
          'Then the stuff gets more room and becomes colder.',
        ],
        [
          'A ',
          { text: 'cold road', part: 'cold-road' },
          ' in the walls carries this cold feeling to every part of the box.',
        ],
      ],
    },
    {
      sentences: [
        [
          'An ',
          { text: 'air pusher', part: 'air-pusher' },
          ' moves cold air around the food.',
        ],
        [
          'A ',
          { text: 'heat watcher', part: 'heat-watcher' },
          ' checks how warm the box is.',
        ],
        [
          'When the box is too warm, it ',
          { text: 'starts and stops', dict: 'start and stop' },
          ' the cold maker; when the box is cold enough, it stops.',
        ],
      ],
    },
    {
      sentences: [
        [
          'An ',
          { text: 'ice room', part: 'ice-room' },
          ' at the top is colder than the rest, so it can hold ice and food for a long time.',
        ],
        [
          'A ',
          { text: 'soft line', part: 'door-seal' },
          ' around the door closes the last heat road.',
        ],
        [
          'Your food stays safe, and the machine stays quiet enough to share a room with you.',
        ],
      ],
    },
  ],
  flow: [
    {
      partIds: ['cold-maker'],
      caption: 'The cold maker presses special stuff together.',
      sentenceRef: 3,
    },
    {
      partIds: ['cold-road'],
      caption: 'The cold road carries cold to the box.',
      sentenceRef: 6,
    },
    {
      partIds: ['air-pusher'],
      caption: 'The air pusher moves cold air around the food.',
      sentenceRef: 7,
    },
    {
      partIds: ['heat-watcher'],
      caption: 'The heat watcher starts and stops the cold maker.',
      sentenceRef: 9,
    },
    {
      partIds: ['ice-room', 'door-seal'],
      caption: 'The ice room and soft door line keep the cold inside.',
      sentenceRef: 11,
    },
  ],
  keyExpressions: [
    { text: 'refrigerator' },
    { text: 'keep food safe' },
    { text: 'take heat away' },
    { text: 'from inside to outside' },
    { text: 'presses special stuff together', partId: 'cold-maker' },
    { text: 'gets colder', partId: 'cold-road' },
    { text: 'cold air', partId: 'air-pusher' },
    { text: 'start and stop', partId: 'heat-watcher' },
    { text: 'quiet enough' },
  ],
  color: '#60A5FA',
}
