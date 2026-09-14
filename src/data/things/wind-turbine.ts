import type { ThingData } from '../types'

export const windTurbine: ThingData = {
  id: 'wind-turbine',
  slug: 'wind-turbine',
  simpleName: 'The Wind Power Maker',
  realName: 'Wind Turbine',
  category: 'power',
  funFacts: [
    'The biggest ones are as tall as a building with 20 floors — the blades are longer than a football field.',
    'One turn of the blades can make enough power to run a house for a whole day.',
    'These wind power makers make power without fire, without smoke, and without using up anything at all.',
  ],
  parts: [
    { id: 'tower', label: 'tower', realName: 'Tower', position: [0, -0.10, 0], finish: 'hull' },
    { id: 'blades', label: 'blades', realName: 'Rotor blades', position: [0, 0.30, 0], finish: 'cold' },
    { id: 'engine-box', label: 'engine box', realName: 'Nacelle', position: [0, 0.30, 0], finish: 'titanium' },
    { id: 'middle-part', label: 'middle part', realName: 'Hub', position: [0, 0.30, 0.06], finish: 'warning' },
    { id: 'power-box', label: 'power box', realName: 'Generator', position: [0, 0.28, -0.04], finish: 'cold' },
    { id: 'tail-fin', label: 'tail fin', realName: 'Anemometer & vane', position: [-0.18, 0.32, 0], finish: 'cold' },
    { id: 'ground-part', label: 'ground part', realName: 'Foundation', position: [0, -0.40, 0], finish: 'hull' },
  ],
  article: [
    {
      sentences: [
        [
          'This tall thing makes power from ',
          { text: 'wind', dict: 'wind' },
          ' — the moving air that blows across the land.',
        ],
        ['When wind pushes the big blades, they turn around and around, and that turning makes power.'],
        ['No fire, no smoke — just air moving fast across the blades.'],
      ],
    },
    {
      sentences: [
        [
          'A tall ',
          { text: 'tower', part: 'tower' },
          ' holds everything up high, where the wind is stronger and more still.',
        ],
        [
          'At the top, three long ',
          { text: 'blades', part: 'blades' },
          ' catch the wind like a ship catches the sea.',
        ],
        [
          'Behind the blades sits the ',
          { text: 'engine box', part: 'engine-box' },
          ' — a box that holds all the parts that turn wind into power.',
        ],
        [
          'The ',
          { text: 'middle part', part: 'middle-part' },
          ' in the center joins the blades to the engine box and lets them spin.',
        ],
      ],
    },
    {
      sentences: [
        [
          'Inside the engine box, a ',
          { text: 'power box', part: 'power-box' },
          ' takes the turning and changes it into power that can run your lights.',
        ],
        [
          'A small ',
          { text: 'tail fin', part: 'tail-fin' },
          ' at the back points the whole thing into the wind.',
        ],
        [
          'Down at the bottom, a heavy ',
          { text: 'ground part', part: 'ground-part' },
          ' holds the tower still — the wind pushes hard, but it does not move.',
        ],
        ['The wind blows, the blades turn, the power box makes a sound — and power flows down the tower to you.'],
      ],
    },
    {
      sentences: [
        ['People have used wind to make power for hundreds of years — the first ones ground food using wind.'],
        ['Today, fields of these tall towers can make enough power for a whole city.'],
        ['When the wind stops, they wait — and when it comes back, they start turning again.'],
      ],
    },
  ],
  flow: [
    { partIds: ['tower'], sentenceRef: 3, caption: 'A tall tower holds everything up high, where the wind is stronger.' },
    { partIds: ['blades'], sentenceRef: 4, caption: 'Three long blades catch the wind like a ship catches the sea.' },
    { partIds: ['engine-box'], sentenceRef: 5, caption: 'The engine box holds all the parts that turn wind into power.' },
    { partIds: ['power-box'], sentenceRef: 7, caption: 'The power box takes the turning and changes it into power.' },
    { partIds: ['ground-part'], sentenceRef: 9, caption: 'A heavy ground part holds the tower still.' },
  ],
  keyExpressions: [
    { text: 'makes power from wind', partId: 'blades' },
    { text: 'holds everything up high', partId: 'tower' },
    { text: 'catch the wind like a ship catches the sea', partId: 'blades' },
    { text: 'holds all the parts that turn wind into power', partId: 'engine-box' },
    { text: 'joins the blades and lets them spin', partId: 'middle-part' },
    { text: 'takes the turning and changes it into power', partId: 'power-box' },
    { text: 'points the whole thing into the wind', partId: 'tail-fin' },
    { text: 'no fire, no smoke — just air moving fast' },
    { text: 'when the wind stops, they wait' },
  ],
  color: '#F5F5DC',
}