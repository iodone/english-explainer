import type { ThingData } from '../types'

export const lightBulb: ThingData = {
  id: 'light-bulb',
  slug: 'light-bulb',
  simpleName: 'Light Maker',
  realName: 'Light Bulb',
  category: 'power',
  funFacts: [
    'If you broke the glass of a burning bulb, the wire would burn out in a flash — the calm gas inside is the only reason it can keep living.',
    'The light wire runs hotter than the flowing rock of a mountain — the glass ball stays far cooler, but still too hot to hold for long.',
    'Color tells the heat: dark red is cooler, white is hottest — true for the wire, for fire, and for the stars.',
  ],
  parts: [
    { id: 'light-wire', label: 'Light Wire', realName: 'Filament', position: [-0.95, 0.9, 0], finish: 'titanium' },
    { id: 'glass-ball', label: 'Glass Ball', realName: 'Glass Envelope', position: [-1.1, 0.35, 0], finish: 'hull' },
    { id: 'calm-gas', label: 'Calm Gas', realName: 'Inert Gas Fill', position: [1.0, 0.9, 0], finish: 'cold' },
    { id: 'hold-wires', label: 'Hold Wires', realName: 'Support Wires', position: [-1.0, -0.3, 0], finish: 'cold' },
    { id: 'power-lines', label: 'Power Lines', realName: 'Lead-in Wires', position: [1.1, 0.15, 0], finish: 'cold' },
    { id: 'screw-base', label: 'Screw Bottom', realName: 'Threaded Base', position: [-0.8, -0.75, 0], finish: 'cold' },
    { id: 'touch-point', label: 'Touch Point', realName: 'Bottom Contact', position: [0.55, -1.05, 0], finish: 'warning' },
  ],
  article: [
    {
      sentences: [
        [
          'A ',
          { text: 'light bulb', dict: 'bulb' },
          ' is a small ',
          { text: 'glass room', part: 'glass-ball' },
          ' with a thin ',
          { text: 'wire', part: 'light-wire' },
          ' inside that gets so hot it gives off light — light with no fire at all.',
        ],
        [
          'The ',
          { text: 'wire', part: 'light-wire' },
          ' is thinner than a hair from your head, and inside it there is always a fight: power pushes through, the wire pushes back, and that pushing turns into heat.',
        ],
        ['For all the time before it, light meant fire — and fire could burn your house down.'],
      ],
    },
    {
      sentences: [
        [
          'The heart of the bulb is the ',
          { text: 'light wire', part: 'light-wire' },
          ': a line of metal made to take more heat than almost any other metal, and stay whole.',
        ],
        [
          'Power has to push hard to get through such a narrow path, and all that pushing turns into heat — until the ',
          { text: 'wire', part: 'light-wire' },
          ' lights up.',
        ],
        [
          'First the light is red, then yellow, then white — a little sun inside a ',
          { text: 'glass ball', part: 'glass-ball' },
          '.',
        ],
        [
          'But air would end it: if air touched the white hot ',
          { text: 'wire', part: 'light-wire' },
          ', the wire would burn through in a moment and the light would die.',
        ],
      ],
    },
    {
      sentences: [
        [
          { text: 'Hold wires', part: 'hold-wires' },
          ' reach up from below and keep the thin wire still, so a hit or a shake cannot break it.',
        ],
        [
          'So the ',
          { text: 'glass ball', part: 'glass-ball' },
          ' is emptied of air and filled with a ',
          { text: 'calm gas', part: 'calm-gas' },
          ' — a gas that will not burn and will not help the wire burn.',
        ],
        [
          'The ',
          { text: 'screw bottom', part: 'screw-base' },
          ' turns into its seat like a screw into wood, and at the very bottom a round ',
          { text: 'touch point', part: 'touch-point' },
          ' passes the power in, with glass between the two roads so they can never touch.',
        ],
        [
          'From there the flow runs up one ',
          { text: 'power line', part: 'power-lines' },
          ', through the ',
          { text: 'light wire', part: 'light-wire' },
          ', and back down the other — the light wire sits in the only road the power can take.',
        ],
      ],
    },
    {
      sentences: [
        ['It took many makers hundreds and hundreds of tries to find a wire that would live long enough: the story of the light bulb is really the story of the wire.'],
        ['Even the best wire dies slowly — bits of it fly off and stick to the glass, the wire grows thin, and one day it breaks. That is the moment a light bulb stops.'],
        [
          'A ',
          { text: 'glass room', part: 'glass-ball' },
          ', a ',
          { text: 'calm gas', part: 'calm-gas' },
          ', one ',
          { text: 'thin wire', part: 'light-wire' },
          ' — push power through it and it answers with light, no fire at all.',
        ],
      ],
    },
  ],
  flow: [
    { partIds: ['light-wire'], sentenceRef: 4, caption: 'Power pushes hard to get through the narrow path, and all that pushing turns into heat — until the wire lights up.' },
    { partIds: ['hold-wires'], sentenceRef: 7, caption: 'Hold wires keep the white hot wire still through hits and shakes.' },
    { partIds: ['glass-ball', 'calm-gas'], sentenceRef: 8, caption: 'The glass ball keeps air out; the calm gas will not let the wire burn.' },
    { partIds: ['screw-base', 'touch-point'], sentenceRef: 9, caption: 'Power comes in through the screw bottom and the round touch point.' },
    { partIds: ['power-lines'], sentenceRef: 10, caption: 'Up one line, through the light wire, back down the other — the only road.' },
  ],
  keyExpressions: [
    { text: 'light with no fire at all' },
    { text: 'all that pushing turns into heat' },
    { text: 'a little sun inside a glass ball', partId: 'light-wire' },
    { text: 'the wire would burn through' },
    { text: 'emptied of air', partId: 'glass-ball' },
    { text: 'will not help the wire burn', partId: 'calm-gas' },
    { text: 'a hit or a shake cannot break it', partId: 'hold-wires' },
    { text: 'like a screw into wood', partId: 'screw-base' },
    { text: 'the only road the power can take', partId: 'power-lines' },
  ],
  color: '#FACC15',
}
