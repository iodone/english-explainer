import type { ThingData } from '../types'

export const powerGrid: ThingData = {
  id: 'power-grid',
  slug: 'power-grid',
  simpleName: 'The Long Wire',
  realName: 'Power Grid',
  category: 'power',
  funFacts: [
    'The push in the big wires turns back and forth 50 or 60 times a second — so the light above your head is really going dark and bright 100 times a second, too fast for any eye to catch.',
    'On the hottest days the wires grow: heat stretches metal, and each long run hangs lower in the middle — the line is built with that in mind, or a hot summer afternoon would let it fall onto the trees below.',
    'Some lands run their long wires under the sea instead: a metal line as thick as an arm, laid on the sea floor between countries, carrying push through the cold and the dark for years without one stop.',
  ],
  parts: [
    { id: 'push-maker', label: 'push-maker', realName: 'Generator', position: [-2.3, -0.45, 0], finish: 'cold' },
    { id: 'tall-changer', label: 'tall changer', realName: 'Step-up Transformer', position: [-1.5, -0.5, 0], finish: 'cold' },
    { id: 'iron-men', label: 'iron men', realName: 'Transmission Pylons', position: [0.3, 0, 0], finish: 'titanium' },
    { id: 'long-wires', label: 'long wires', realName: 'High-voltage Lines', position: [0.3, 0.25, 0], finish: 'warning' },
    { id: 'small-changer', label: 'small changer', realName: 'Step-down Transformer', position: [2.1, -0.6, 0], finish: 'cold' },
    { id: 'wall-doors', label: 'wall doors', realName: 'Outlets', position: [2.75, -0.55, 0], finish: 'cold' },
    { id: 'night-windows', label: 'night windows', realName: 'Home', position: [2.9, -0.45, 0], finish: 'hull' },
  ],
  article: [
    {
      sentences: [
        [
          'The long wire is the biggest machine people have ever built — not one machine but a land of machines, all joined into one: a river of power that starts at a turning wheel far away and ends in the light above your head.',
        ],
        [
          'It begins in a ',
          { text: 'push-maker', part: 'push-maker' },
          ': a great hall where falling water, blowing wind, or burning heat spins a wheel, and the wheel turns rings of wire between the arms of a ',
          { text: 'magnet', dict: 'magnet' },
          ' — and wire moving through a magnet’s field makes power flow: push made from turning.',
        ],
        [
          'The power it makes is a push, like the push of a ',
          { text: 'battery', dict: 'battery' },
          ' but never-ending, and it flows only when its ring is whole — out along one ',
          { text: 'wire', dict: 'wire' },
          ', through everything on the way, and back home along another: a ',
          { text: 'circuit', dict: 'circuit' },
          ', a circle the power must be able to walk, or nothing anywhere on it works at all.',
        ],
      ],
    },
    {
      sentences: [
        [
          'But a push big enough to light a room would be lost on the way to a far city, for power walking a long thin wire loses itself as heat — so the ',
          { text: 'tall changer', part: 'tall-changer' },
          ', a box of iron rings, first makes the push huge, hundreds of times stronger, before the trip even starts.',
        ],
        [
          'Then the ',
          { text: 'long wires', part: 'long-wires' },
          ' rise into the air: the hottest power we make, hung on the ',
          { text: 'iron men', part: 'iron-men' },
          ' — tall standing metal shapes with arms wide as trees, walking in a line over hills and rivers and fields, holding the wires high and away from everything that lives.',
        ],
        [
          'Hung power is strange stuff: given the smallest chance it would rather jump through the air to the ground than stay in its wire — which is why the men stand on legs of glass the power cannot cross, and why a bird can sit safely on the wire itself, touching nothing else.',
        ],
        [
          'Near the town the ',
          { text: 'small changer', part: 'small-changer' },
          ' steps the push back down, box after box — from enough power for a whole city, to enough for a street, to the soft little push that runs the light above your head.',
        ],
      ],
    },
    {
      sentences: [
        [
          'The last step hides in your walls: the ',
          { text: 'wall doors', part: 'wall-doors' },
          ', the small holes that lights and machines drink from, each one the end of a line running all the way back — through every changer and every wire — to the spinning wheel where it all began.',
        ],
        [
          'Everything you own drinks from this one river: the light, the ice box, the washing machine, this screen — none of them carries power of its own; each is only a mouth at the end of the same long flow, opened and closed by your hand.',
        ],
        [
          'And the whole dance is timed like music: power cannot be stored on the wire, so somewhere a wheel is spinning right now because you just turned a light on — more pushing when the city wakes, less when it sleeps, breath for breath, every moment of every day.',
        ],
        [
          'At night you can see the whole machine working: look out over any city and every yellow ',
          { text: 'night window', part: 'night-windows' },
          ' is a warm dinner, a child reading, a family still up — a land lit by light that began as a turning wheel far away, this very second.',
        ],
      ],
    },
    {
      sentences: [
        [
          'It grew piece by piece, a hundred years ago: one power house lighting one street, then street after street joined, then towns, then whole countries — until today much of the world is one joined net, its parts holding each other’s turning still, like dancers holding hands.',
        ],
        [
          'That joining is also its one great soft spot: when a big part fails, its neighbors must catch the falling work at once — and if they cannot, the fall spreads down the line like standing stones, and a whole land can go dark in a minute, all the way back to the push-makers.',
        ],
        [
          'The fire in a far hall, the wind on a hill, the water held by a great ',
          { text: 'dam', dict: 'dam' },
          ', the sun on a roof — all of it becomes one flow, one push, riding the long wire to your room: the largest machine ever built, and the only one most people never see.',
        ],
      ],
    },
  ],
  flow: [
    { partIds: ['push-maker'], sentenceRef: 1, caption: 'Falling water or blowing wind spins the wheel — push made from turning.' },
    { partIds: ['tall-changer'], sentenceRef: 3, caption: 'The tall changer makes the push huge before the long trip: hundreds of times stronger.' },
    { partIds: ['iron-men', 'long-wires'], sentenceRef: 4, caption: 'Iron men hold the hot wires high, walking in a line over the land.' },
    { partIds: ['small-changer'], sentenceRef: 6, caption: 'Near the town the small changer steps the push back down, box after box.' },
    { partIds: ['night-windows'], sentenceRef: 10, caption: 'Every night window is bright with light that began as turning far away, this very second.' },
  ],
  keyExpressions: [
    { text: 'the biggest machine people have ever built' },
    { text: 'push made from turning', partId: 'push-maker' },
    { text: 'a circle the power must be able to walk' },
    { text: 'loses itself as heat' },
    { text: 'hundreds of times stronger', partId: 'tall-changer' },
    { text: 'arms wide as trees', partId: 'iron-men' },
    { text: 'breath for breath, every moment' },
    { text: 'a whole land can go dark in a minute' },
    { text: 'the only one most people never see' },
  ],
  color: '#FCD34D',
}
