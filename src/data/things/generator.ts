import type { ThingData } from '../types'

export const generator: ThingData = {
  id: 'generator',
  slug: 'generator',
  simpleName: 'The Power Spinner',
  realName: 'Generator',
  category: 'power',
  funFacts: [
    'The idea is almost 200 years old — older than the light bulb — yet no one has ever found a better way to make most of the world’s power.',
    'A person turning the hand bar makes about as much power as one small light needs — to run a big city the same way would take more people than live in it, all turning together, without stopping.',
    'A generator and a motor are the same machine: run it one way and it makes power, feed power in and it turns — and the same idea is used to stop heavy machines, turning their power of moving back into a flow of power again.',
  ],
  parts: [
    { id: 'hold-shape', label: 'hold shape', realName: 'Frame', position: [0, -0.56, 0], finish: 'hull' },
    { id: 'turn-wheel', label: 'turn wheel', realName: 'Rotor', position: [0, 0.15, 0], finish: 'cold' },
    { id: 'strong-magnet', label: 'strong magnet', realName: 'Magnet', position: [0, 0.39, 0], finish: 'titanium' },
    { id: 'wire-rings', label: 'wire rings', realName: 'Coil', position: [0, 0.15, 0], finish: 'cold' },
    { id: 'hand-bar', label: 'hand bar', realName: 'Crank Handle', position: [0.58, 0.5, 0], finish: 'cold' },
    { id: 'power-line', label: 'power line', realName: 'Output Wire', position: [-0.75, 0.4, 0], finish: 'cold' },
    { id: 'light-ball', label: 'light ball', realName: 'Bulb', position: [-1.12, 0.43, 0], finish: 'warning' },
  ],
  article: [
    {
      sentences: [
        [
          'The power spinner — the ',
          { text: 'generator', dict: 'generator' },
          ' — is a machine that makes power from moving: it turns the push of a turning wheel into the flow of power in a wire, and it is the quiet heart of almost every power station on Earth.',
        ],
        [
          'The idea was found almost 200 years ago: move a ',
          { text: 'magnet', dict: 'magnet' },
          ' past a wire, and a push of power flows through the wire; keep the magnet moving, and the power keeps flowing.',
        ],
        [
          'No fuel is burned inside it and nothing is used up: the machine simply takes the moving of a wheel and turns it into light and heat and work, as long as something outside keeps it turning.',
        ],
      ],
    },
    {
      sentences: [
        [
          'Everything sits in the ',
          { text: 'hold shape', part: 'hold-shape' },
          ' — a strong shape that holds the parts still while the inside turns.',
        ],
        [
          'Through the middle runs a turning rod with a ',
          { text: 'strong magnet', part: 'strong-magnet' },
          ' at its end — or many magnets set around the wheel — so that the turning brings north and south past the wire again and again.',
        ],
        [
          'Around the outside wait the ',
          { text: 'wire rings', part: 'wire-rings' },
          ' — the ',
          { text: 'coils', dict: 'coil' },
          ': circles of wire turned round and round, hundreds of turns of thin metal line, with their two ends pointing out.',
        ],
        [
          'Each time a magnet end goes past, it pushes power through the wire — first one way, then the other, over and over: this back and forth push changes 50 or 60 times every second in the wires of your house.',
        ],
      ],
    },
    {
      sentences: [
        [
          'Turn the ',
          { text: 'hand bar', part: 'hand-bar' },
          ' with your hand and you can watch it happen: the ',
          { text: 'light ball', part: 'light-ball' },
          ' starts to ',
          { text: 'glow', dict: 'glow' },
          ' — light made from nothing but the moving of your own body.',
        ],
        [
          'The ',
          { text: 'turn wheel', part: 'turn-wheel' },
          ' can be pushed around by anything that moves: falling water at a ',
          { text: 'dam', dict: 'dam' },
          ', wind on great blades, steam from a hot fire, or even the turning wheel of your own bicycle.',
        ],
        [
          'Push power into it and the machine itself turns — running backward it is a ',
          { text: 'motor', dict: 'motor' },
          '; running forward it makes power: one machine, working two ways.',
        ],
        [
          'The power then runs out along the ',
          { text: 'power line', part: 'power-line' },
          ', away to lights, to warm houses, to machines — the same flow of power, born from nothing but a magnet moving past a wire.',
        ],
      ],
    },
    {
      sentences: [
        [
          'Almost all the power on Earth is made this way: great wheels, pushed by water or wind or steam, turning inside great rings of wire in power stations day and night.',
        ],
        [
          'The biggest ones, turned by falling water, are each heavier than 2,000 cars — and a single one of them can light a whole city.',
        ],
        [
          'From the smallest hand-turned light to the biggest wheel in the greatest power stations, the way it works never changes: move a magnet past a wire, and the world lights up.',
        ],
      ],
    },
  ],
  keyExpressions: [
    { text: 'a machine that makes power from moving' },
    { text: 'move a magnet past a wire' },
    { text: 'a strong shape that holds the parts still', partId: 'hold-shape' },
    { text: 'turning, bringing north and south past the wire', partId: 'strong-magnet' },
    { text: 'circles of wire turned round and round', partId: 'wire-rings' },
    { text: 'light made from nothing but the moving of your own body', partId: 'light-ball' },
    { text: 'pushed around by anything that moves', partId: 'turn-wheel' },
    { text: 'turn it with your hand and watch it happen', partId: 'hand-bar' },
    { text: 'the same flow of power, born from a magnet moving past a wire', partId: 'power-line' },
  ],
  flow: [
    { partIds: ['hold-shape'], sentenceRef: 3, caption: 'First the hold shape — a strong shape that holds everything still while the inside turns.' },
    { partIds: ['strong-magnet'], sentenceRef: 4, caption: 'Through the middle runs a rod with a strong magnet at its end — turning, bringing north and south past the wire again and again.' },
    { partIds: ['wire-rings'], sentenceRef: 5, caption: 'Around it wait the wire rings — circles of wire turned round and round, hundreds of turns of thin metal line.' },
    { partIds: ['hand-bar'], sentenceRef: 7, caption: 'Turn the hand bar with your hand — and the light ball starts to glow, light made from nothing but moving.' },
    { partIds: ['turn-wheel'], sentenceRef: 8, caption: 'And the turn wheel can be pushed around by anything that moves — falling water, wind, steam, or the wheel of your own bicycle.' },
  ],
  color: '#059669',
}
