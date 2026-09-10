import type { ThingData } from '../types'

export const glasses: ThingData = {
  id: 'glasses',
  slug: 'glasses',
  simpleName: 'Eye Helpers',
  realName: 'Glasses',
  category: 'home',
  funFacts: [
    'Most of the bending is done not by the glass but by the front of your eye itself — glasses only fix the last small part.',
    'One early glasses wearer wanted to stop changing between far and close pairs, so he cut two pairs in half and made one pair with far-seeing glass on top and close-seeing glass under it.',
    'The two pieces of glass in a pair are not always the same — each of your eyes can need a different shape from the other.',
  ],
  parts: [
    { id: 'bender-pair', label: 'Light Benders', realName: 'Lenses', position: [0, 0.95, 0], finish: 'titanium' },
    { id: 'glass-rings', label: 'Glass Rings', realName: 'Frames', position: [-1.0, 0.6, 0], finish: 'cold' },
    { id: 'nose-bridge', label: 'Nose Bridge', realName: 'Bridge', position: [0, 0.45, 0], finish: 'cold' },
    { id: 'side-arms', label: 'Side Arms', realName: 'Temples', position: [-1.6, 0.3, 0], finish: 'cold' },
    { id: 'ear-bends', label: 'Ear Bends', realName: 'Temple Tips', position: [1.55, 0.05, 0], finish: 'cold' },
    { id: 'turn-screws', label: 'Turn Screws', realName: 'Hinge Screws', position: [-0.9, -0.55, 0], finish: 'warning' },
  ],
  article: [
    {
      sentences: [
        ['Glasses are two pieces of shaped glass that fix how your eyes see the world.'],
        [
          'Each eye is itself a small ',
          { text: 'camera', dict: 'camera' },
          ': light goes in, and inside the eye the world makes a tiny picture.',
        ],
        ['But eyes are not all the same: in some, the picture stops in front of the back wall; in others, it stops behind — and the world goes soft.'],
      ],
    },
    {
      sentences: [
        ['A piece of glass with the right shape bends light.'],
        ['Glass shaped thick in the middle pulls light lines together; glass shaped thin in the middle pushes them apart.'],
        ['Put the right one in front of an eye, and the light bends just enough to make the picture fall exactly on the back wall.'],
        ['The eye was almost right all along — the glass only moves the picture a tiny bit, and the world becomes sharp.'],
      ],
    },
    {
      sentences: [
        [
          'The glass sits in thin ',
          { text: 'glass rings', part: 'glass-rings' },
          ', and a small ',
          { text: 'nose bridge', part: 'nose-bridge' },
          ' carries the weight on your nose.',
        ],
        [
          'Two ',
          { text: 'side arms', part: 'side-arms' },
          ' reach back along your head and end in ',
          { text: 'ear bends', part: 'ear-bends' },
          ' that bend down behind your ears, so the glasses stay on when you move.',
        ],
        [
          'At each side, a tiny ',
          { text: 'turn screw', part: 'turn-screws' },
          ' lets its arm turn in, so the glasses become small enough to put away.',
        ],
        [
          'Eyes are different: the one who checks your eyes finds how much bending you need, and each ',
          { text: 'light bender', part: 'bender-pair' },
          ' is shaped to bend exactly that much.',
        ],
      ],
    },
    {
      sentences: [
        ['The first glasses, hundreds and hundreds of years ago, had no arms at all: two round pieces of glass held on the nose, or one glass on a stick, held up by hand.'],
        ['Reading glasses make close things sharp; far glasses make far things sharp; and some pairs do both, one shape on top of another in the same glass.'],
        [
          'Two pieces of shaped glass, a small bridge, two arms — and the sharp world comes back into ',
          { text: 'focus', dict: 'focus' },
          '.',
        ],
      ],
    },
  ],
  flow: [
    { partIds: ['bender-pair'], caption: 'Glass with the right shape bends light.', sentenceRef: 3 },
    { partIds: ['bender-pair'], caption: 'Thick middles pull light lines together; thin middles push them apart.', sentenceRef: 4 },
    { partIds: ['bender-pair'], caption: 'The glass moves the picture a tiny bit, and the world becomes sharp.', sentenceRef: 6 },
    { partIds: ['glass-rings', 'nose-bridge'], caption: 'Thin rings hold the glass, and a small bridge carries the weight on your nose.', sentenceRef: 7 },
    { partIds: ['side-arms', 'ear-bends', 'turn-screws'], caption: 'Arms bend down behind the ears, and tiny screws let the glasses become small.', sentenceRef: 9 },
  ],
  keyExpressions: [
    { text: 'fix how your eyes see', partId: 'bender-pair' },
    { text: 'the world makes a tiny picture' },
    { text: 'stops in front of the back wall' },
    { text: 'pulls light lines together', partId: 'bender-pair' },
    { text: 'pushes them apart', partId: 'bender-pair' },
    { text: 'fall exactly on the back wall' },
    { text: 'moves the picture a tiny bit', partId: 'bender-pair' },
    { text: 'bend down behind your ears', partId: 'ear-bends' },
    { text: 'the sharp world comes back' },
  ],
  color: '#818CF8',
}
