import type { ThingData } from '../types'

export const microwave: ThingData = {
  id: 'microwave',
  slug: 'microwave',
  simpleName: 'Food-Heating Radio Box',
  realName: 'Microwave Oven',
  category: 'home',
  funFacts: [
    'The wave maker idea came from radio work in the 1940s.',
    'A microwave can make a cup of water hot faster than a hot plate.',
    'Some door screens have holes smaller than the waves, so the waves stay inside.',
  ],
  parts: [
    { id: 'wave-maker', label: 'Radio Wave Maker', realName: 'Magnetron', position: [0.75, 0.3, -0.25], finish: 'warning' },
    { id: 'wave-road', label: 'Wave Road', realName: 'Waveguide', position: [0.3, 0.3, -0.1], finish: 'cold' },
    { id: 'turning-table', label: 'Turning Table', realName: 'Turntable', position: [0, -0.35, 0], finish: 'titanium' },
    { id: 'door-screen', label: 'Door Screen', realName: 'Choke Door', position: [0, 0, 0.65], finish: 'hull' },
    { id: 'power-changer', label: 'Power Changer', realName: 'Transformer', position: [-0.8, -0.35, -0.25], finish: 'cold' },
    { id: 'control-brain', label: 'Control Brain', realName: 'Control Board', position: [0, 0.55, 0], finish: 'cold' },
    { id: 'air-pusher', label: 'Air Pusher', realName: 'Cooling Fan', position: [0, 0, -0.65], finish: 'cold' },
  ],
  article: [
    {
      sentences: [
        [
          'A ',
          { text: 'microwave', dict: 'microwave' },
          ' is a box that ',
          { text: 'cooks', dict: 'cook' },
          ' food with radio waves.',
        ],
        [
          'It is not a fire box; it uses waves like the ones that carry radio songs, but they are shorter and stronger.',
        ],
        [
          'Inside, a ',
          { text: 'wave maker', part: 'wave-maker' },
          ' sends waves through a ',
          { text: 'wave road', part: 'wave-road' },
          ' and into the food.',
        ],
      ],
    },
    {
      sentences: [
        [
          'The waves make water in the food move ',
          { text: 'back and forth', dict: 'back and forth' },
          ' many, many times each second.',
        ],
        [
          'This fast moving makes heat, so the food grows hot from the inside out.',
        ],
        [
          'A ',
          { text: 'turning table', part: 'turning-table' },
          ' keeps the food moving, so the waves do not miss a cold middle.',
        ],
      ],
    },
    {
      sentences: [
        [
          'A ',
          { text: 'power changer', part: 'power-changer' },
          ' makes the box’s power strong enough for the wave maker.',
        ],
        [
          'A ',
          { text: 'control brain', part: 'control-brain' },
          ' listens to the numbers you press and tells each part when to ',
          { text: 'start and stop', dict: 'start and stop' },
          '.',
        ],
        [
          'A small ',
          { text: 'air pusher', part: 'air-pusher' },
          ' keeps the machine cool.',
        ],
      ],
    },
    {
      sentences: [
        [
          'The door has a ',
          { text: 'screen', part: 'door-screen' },
          ' with tiny holes.',
        ],
        [
          'The holes are too small for the waves, but big enough for light, so you can watch your food.',
        ],
        [
          'Metal with sharp edges can make ',
          { text: 'sparks', dict: 'spark' },
          ', so knives stay out.',
        ],
      ],
    },
  ],
  flow: [
    {
      partIds: ['wave-maker'],
      caption: 'Short radio waves start in the wave maker.',
      sentenceRef: 1,
    },
    {
      partIds: ['wave-road'],
      caption: 'A wave road carries the waves to the food.',
      sentenceRef: 2,
    },
    {
      partIds: ['wave-maker', 'wave-road'],
      caption: 'The waves make water in the food move very fast and grow hot.',
      sentenceRef: 4,
    },
    {
      partIds: ['turning-table'],
      caption: 'The turning table moves the food so every part gets warm.',
      sentenceRef: 5,
    },
    {
      partIds: ['control-brain', 'power-changer', 'air-pusher'],
      caption: 'The brain tells the parts when to start and stop.',
      sentenceRef: 7,
    },
    {
      partIds: ['door-screen'],
      caption: 'The door screen keeps the waves inside and lets you watch.',
      sentenceRef: 10,
    },
  ],
  keyExpressions: [
    { text: 'microwave' },
    { text: 'cook food' },
    { text: 'radio waves', partId: 'wave-maker' },
    { text: 'back and forth' },
    { text: 'grow hot' },
    { text: 'turning table', partId: 'turning-table' },
    { text: 'start and stop', partId: 'control-brain' },
    { text: 'tiny holes', partId: 'door-screen' },
    { text: 'make sparks' },
  ],
  color: '#F0923A',
}
