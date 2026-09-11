import type { ThingData } from '../types'

export const flywheel: ThingData = {
  id: 'flywheel',
  slug: 'flywheel',
  simpleName: 'The Spinning Battery',
  realName: 'Flywheel Energy Storage',
  category: 'power',
  funFacts: [
    'Some fly wheels spin so fast that their edges move faster than sound; if one ever broke, the pieces would shoot out like the fastest balls ever — which is why the box around them is built so strong.',
    'The idea is far from new: between 2,000 and 3,000 years ago, people cut heavy round stones that kept turning on their own weight, using the saved turning to keep their work even.',
    'A spinning wheel once saved the people of a failed moon trip: when the power died, the slow turning of their ship kept it pointing the right way until help came.',
  ],
  parts: [
    { id: 'heavy-wheel', label: 'heavy wheel', realName: 'Rotor', position: [0.02, 0.02, 0], finish: 'titanium' },
    { id: 'air-free-box', label: 'air-free box', realName: 'Vacuum Enclosure', position: [-0.40, 0.38, 0], finish: 'hull' },
    { id: 'hold-rings', label: 'hold rings', realName: 'Magnetic Bearings', position: [-0.20, 0.30, 0], finish: 'cold' },
    { id: 'spin-motor', label: 'spin motor', realName: 'Motor-Generator', position: [0.44, 0.10, 0], finish: 'warning' },
    { id: 'power-lines', label: 'power lines', realName: 'Grid Connection', position: [0.66, -0.28, 0], finish: 'cold' },
    { id: 'air-puller', label: 'air puller', realName: 'Vacuum Pump', position: [0.36, 0.50, 0], finish: 'cold' },
    { id: 'stand-legs', label: 'stand legs', realName: 'Support Frame', position: [-0.38, -0.58, 0], finish: 'cold' },
  ],
  article: [
    {
      sentences: [
        [
          'Power is easiest to make when it is needed, but some machines make it at the wrong time — at night, when everyone sleeps, or in a quick rush of wind that no one can use.',
        ],
        [
          'The answer can be a fly wheel: a machine that saves power not the way a ',
          { text: 'battery', dict: 'battery' },
          ' does, with hidden stuff inside, but in a moving way — as a wheel turning around, faster and faster.',
        ],
        [
          'Push power in, and the wheel speeds up; draw power out, and it slows down — the spinning itself is the saving.',
        ],
      ],
    },
    {
      sentences: [
        [
          'At the heart sits the ',
          { text: 'heavy wheel', part: 'heavy-wheel' },
          ', made of steel so thick that a small one can be as heavy as a car.',
        ],
        [
          'It turns inside an ',
          { text: 'air-free box', part: 'air-free-box' },
          ': with the air pulled out, nothing rubs against the wheel, and a spin that would die in minutes can last for hours.',
        ],
        [
          'Holding it at the center are the ',
          { text: 'hold rings', part: 'hold-rings' },
          ', which carry the wheel without ever touching it, so nothing rubs and nothing wears out.',
        ],
        [
          'Beside it stands the ',
          { text: 'spin motor', part: 'spin-motor' },
          ', a machine that works both ways: it spends power to ',
          { text: 'spin', dict: 'spin' },
          ' the wheel up, and takes power back out when the wheel winds down.',
        ],
      ],
    },
    {
      sentences: [
        [
          'When the city sleeps and power is ',
          { text: 'cheap', dict: 'cheap' },
          ', the motor spends the night spinning the wheel, up past 20,000 turns a minute, until it sings like a great big ',
          { text: 'top', dict: 'top' },
          '.',
        ],
        [
          'In the morning, when everyone wakes and the city asks for more, the flow turns around: the wheel gives its speed back, and the motor hands the power to the ',
          { text: 'power lines', part: 'power-lines' },
          '.',
        ],
        [
          'If the wheel ever needs care, the little ',
          { text: 'air puller', part: 'air-puller' },
          ' works the other way too, pulling the last bits of air out to keep the inside empty and clean.',
        ],
        [
          'All of it stands on the strong ',
          { text: 'stand legs', part: 'stand-legs' },
          ', bolted to the ground so that all the push and pull of the turning wheel passes safely into the earth.',
        ],
      ],
    },
    {
      sentences: [
        [
          'Where the lights must never go out — hospitals, computer rooms, space stations — a row of these wheels waits, ready to step in when the outside power fails.',
        ],
        [
          'A normal battery grows old with use, but a wheel does not; give it care and it can spin and serve for 20 years or more.',
        ],
        [
          'It is one of the oldest power ideas there is: long before batteries, people saved their push in turning stones, and the same round idea still works today.',
        ],
      ],
    },
  ],
  flow: [
    { partIds: ['heavy-wheel'], sentenceRef: 3, caption: 'At the heart sits the heavy wheel, as heavy as a car.' },
    { partIds: ['air-free-box'], sentenceRef: 4, caption: 'It turns inside the air-free box, where nothing rubs and a spin can last for hours.' },
    { partIds: ['hold-rings'], sentenceRef: 5, caption: 'The hold rings carry the wheel without ever touching it.' },
    { partIds: ['spin-motor'], sentenceRef: 6, caption: 'The spin motor works both ways: spending power to spin the wheel up, taking it back out again.' },
    { partIds: ['power-lines'], sentenceRef: 8, caption: 'When the city wakes, the wheel hands its speed back through the power lines.' },
  ],
  keyExpressions: [
    { text: 'a thick steel wheel, as heavy as a car, that saves power by turning', partId: 'heavy-wheel' },
    { text: 'the box around the wheel with its air pulled out', partId: 'air-free-box' },
    { text: 'rings that carry the wheel without ever touching it', partId: 'hold-rings' },
    { text: 'the both-ways machine that spins the wheel up and takes power back out', partId: 'spin-motor' },
    { text: 'the lines that carry saved power out to the city', partId: 'power-lines' },
    { text: 'the little pump that keeps the inside empty and clean', partId: 'air-puller' },
    { text: 'the strong legs that pass the wheel’s push into the ground', partId: 'stand-legs' },
    { text: 'past 20,000 turns a minute, singing like a great big top', partId: 'heavy-wheel' },
    { text: 'spinning itself is the saving', partId: 'heavy-wheel' },
  ],
  color: '#F5B301',
}
