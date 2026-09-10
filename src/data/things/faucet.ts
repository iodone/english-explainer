import type { ThingData } from '../types'

export const faucet: ThingData = {
  id: 'faucet',
  slug: 'faucet',
  simpleName: 'Water Key',
  realName: 'Faucet',
  category: 'home',
  funFacts: [
    'A faucet that drops once every second loses more water in a year than you could drink.',
    'People have used screws to hold water back for hundreds and hundreds of years — the same idea still turns in your kitchen.',
    'Some faucets have no turner at all: they see your hands and open by themselves, using light your eye cannot see.',
  ],
  parts: [
    { id: 'water-pipe', label: 'Water Pipe', realName: 'Inlet Pipe', position: [-1.35, -0.75, 0], finish: 'cold' },
    { id: 'tap-body', label: 'Water Body', realName: 'Valve Body', position: [-0.6, 0.9, 0], finish: 'hull' },
    { id: 'hand-turner', label: 'Hand Turner', realName: 'Handle', position: [-0.6, -0.35, 0], finish: 'warning' },
    { id: 'turning-screw', label: 'Turning Screw', realName: 'Valve Stem Screw', position: [-1.5, 0.3, 0], finish: 'cold' },
    { id: 'turn-doors', label: 'Turn Doors', realName: 'Ceramic Discs', position: [0.25, -0.5, 0], finish: 'titanium' },
    { id: 'spout-mouth', label: 'Water Mouth', realName: 'Spout', position: [0.7, 0.55, 0], finish: 'cold' },
    { id: 'air-adder', label: 'Air Adder', realName: 'Aerator', position: [0.45, -1.0, 0], finish: 'cold' },
  ],
  article: [
    {
      sentences: [
        [
          'A ',
          { text: 'faucet', dict: 'faucet' },
          ' is a small machine that holds water back — and lets it go when you ask.',
        ],
        [
          'Inside the wall, water sits in a ',
          { text: 'water pipe', part: 'water-pipe', dict: 'pipe' },
          ', always pushing, always waiting to fall.',
        ],
        ['Between that water and your hands there is only a small door — and the door is the whole machine.'],
      ],
    },
    {
      sentences: [
        [
          'Turn the ',
          { text: 'hand turner', part: 'hand-turner' },
          ', and it turns a ',
          { text: 'turning screw', part: 'turning-screw', dict: 'screw' },
          ' — a tiny hill road wrapped around a stick.',
        ],
        ['Because the road is long and slow, a small force from your hand becomes a big force that lifts or presses the door.'],
        [
          'The door is really two hard ',
          { text: 'turn doors', part: 'turn-doors' },
          ' pressed flat against each other, with holes in the same places.',
        ],
        ['Turned together, the holes line up and water pushes through; turned a little, the holes no longer line up and the way is shut.'],
      ],
    },
    {
      sentences: [
        [
          'Coming up from the pipe, the water goes through the open holes, around a bend inside the ',
          { text: 'water body', part: 'tap-body' },
          ', and out of the ',
          { text: 'water mouth', part: 'spout-mouth' },
          '.',
        ],
        [
          'Before it falls, it passes the ',
          { text: 'air adder', part: 'air-adder' },
          ' — many tiny holes that put air into the water, so it falls soft and full, and does not jump.',
        ],
        ['Turn the hand turner back and the doors close: a whole pipe of pushing water stops against two small flat doors.'],
        ['That is the whole idea: a small turn moves a small door, and the small door holds all the water in your house behind it.'],
      ],
    },
    {
      sentences: [
        ['Hot water comes one way, cold the other; the two meet inside the body — turn one more, turn one less, and the water becomes as warm as you want.'],
        ['Old faucets pressed a soft ring down on a seat, and the ring got old and let water drop; two hard doors can hold for years and years.'],
        ['A screw, two flat doors, a mouth — a machine so small you forget it is one, standing guard over every drop in the house.'],
      ],
    },
  ],
  flow: [
    { partIds: ['water-pipe'], caption: 'Water sits in the pipe, always pushing, always waiting to fall.', sentenceRef: 1 },
    { partIds: ['hand-turner', 'turning-screw'], caption: 'The hand turner turns a screw — a tiny hill road wrapped around a stick.', sentenceRef: 3 },
    { partIds: ['turn-doors'], caption: 'Holes line up and water pushes through; turn a little, and the way is shut.', sentenceRef: 6 },
    { partIds: ['spout-mouth'], caption: 'Water goes around the bend and out of the mouth.', sentenceRef: 7 },
    { partIds: ['air-adder'], caption: 'Tiny holes put air into the water, so it falls soft.', sentenceRef: 8 },
  ],
  keyExpressions: [
    { text: 'holds water back', partId: 'turn-doors' },
    { text: 'always pushing, always waiting to fall', partId: 'water-pipe' },
    { text: 'a tiny hill road wrapped around a stick', partId: 'turning-screw' },
    { text: 'a small force becomes a big force', partId: 'hand-turner' },
    { text: 'holes in the same places', partId: 'turn-doors' },
    { text: 'the way is shut', partId: 'turn-doors' },
    { text: 'put air into the water', partId: 'air-adder' },
    { text: 'falls soft and full', partId: 'air-adder' },
    { text: 'holds all the water behind it', partId: 'turn-doors' },
  ],
  color: '#60A5FA',
}
