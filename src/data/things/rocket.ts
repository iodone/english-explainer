import type { ThingData } from '../types'

export const rocket: ThingData = {
  id: 'rocket',
  slug: 'rocket',
  simpleName: 'Space Fire Ship',
  realName: 'Rocket',
  category: 'space',
  funFacts: [
    'A big rocket at take-off burns fuel faster than a whole small town uses water — and the fire below it is louder than anything else people have ever made.',
    'The gas leaves the fire door at more than ten times the speed of sound; a space rocket flying up is going five times faster than a gun shot within a minute of leaving the ground.',
    'The biggest rocket ever flown stood taller than a thirty-floor building and carried people to the moon; the machines that will fly people to the moon again are being built right now, and they land back on their own feet.',
  ],
  parts: [
    { id: 'fire-heart', label: 'Fire Heart', realName: 'Main Engine', position: [0, -0.38, 0], finish: 'warning' },
    { id: 'fire-door', label: 'Fire Door', realName: 'Engine Nozzle', position: [0, -0.66, 0], finish: 'cold' },
    { id: 'fuel-rooms', label: 'Fuel Rooms', realName: 'Propellant Tanks', position: [0, 0.9, 0], finish: 'titanium' },
    { id: 'drop-tanks', label: 'Drop Tanks', realName: 'Booster Stages', position: [0.52, 0.15, 0], finish: 'hull' },
    { id: 'people-room', label: 'People Room', realName: 'Crew Capsule', position: [0, 1.98, 0], finish: 'cold' },
    { id: 'top-rod', label: 'Top Rod', realName: 'Escape Tower', position: [0, 2.45, 0], finish: 'cold' },
    { id: 'end-wings', label: 'End Wings', realName: 'Fins', position: [0, -0.45, 0], finish: 'cold' },
  ],
  article: [
    {
      sentences: [
        [
          'A ',
          { text: 'rocket', dict: 'rocket' },
          ' is the only machine that throws itself into the sky — and to do it, it must carry everything: its own air for burning, its own push, and almost nothing else.',
        ],
        ['Inside a flying machine with wings, the air does half the work — wings hold you up, and the burning needs the air around you — but a rocket leaves all that behind: above the sky there is no air at all, no wings to hold anything, no help.'],
        [
          'So it pushes: the rocket throws hot ',
          { text: 'gas', dict: 'gas' },
          ' out of its back as fast as it can, and the world pushes back — that push back is what drives it up.',
        ],
      ],
    },
    {
      sentences: [
        [
          'The ',
          { text: 'fire heart', part: 'fire-heart' },
          ' is a room that burns without stopping, faster and hotter than any fire on the ground: ',
          { text: 'fuel', dict: 'fuel' },
          ' and the rocket’s own stored air meet there, and the burning gas wants out.',
        ],
        [
          'It leaves through the ',
          { text: 'fire door', part: 'fire-door' },
          ', an opening that gets narrower and narrower, driving the gas out faster and faster — the harder the gas is thrown back, the harder the rocket is thrown forward.',
        ],
        [
          'Almost all of a rocket is ',
          { text: 'fuel rooms', part: 'fuel-rooms' },
          ' — rooms of fuel and stored air, one on top of another — because so much push is needed: most of the machine is there only to be burned.',
        ],
        [
          'And that is why rockets are built to drop pieces as they go: the ',
          { text: 'drop tanks', part: 'drop-tanks' },
          ' — the big outside rooms — empty first, let go, and fall back into the sea, so the machine gets lighter as it climbs.',
        ],
      ],
    },
    {
      sentences: [
        [
          'Up front rides the ',
          { text: 'people room', part: 'people-room' },
          ', a small round room at the very top, with seats like a car’s and windows like a flying machine’s, its own air inside, and just enough space to live for days.',
        ],
        [
          'On its nose stands the ',
          { text: 'top rod', part: 'top-rod' },
          ', a thin rod with its own small push-makers, there for the worst day: if the big fire goes wrong on the way up, it pulls the people room free, and a great round ',
          { text: 'cloth', dict: 'cloth' },
          ' opens to walk the people down.',
        ],
        [
          'The ',
          { text: 'end wings', part: 'end-wings' },
          ' at the bottom are not for flying up — they are for coming back through the air straight and true, so that the fire at the bottom keeps pointing the right way.',
        ],
        ['And the whole thing is built around one hard idea: every bit of weight must be paid for with push, so the rocket is a skin of metal around rooms of fuel — nothing more, everything doing two jobs, nothing along for the ride.'],
      ],
    },
    {
      sentences: [
        ['The first ones were built as war machines in the second great war; then came bigger ones that carried people to space; and the biggest of all, half a hundred years ago, carried people to the moon — nothing bigger has flown since.'],
        ['Today the big work horses of the sky come back and land on their own feet, standing up on fire, so they can fly again — something the old ones could never do.'],
        ['A room of fire at the bottom, rooms of fuel above, people at the very top — the machine that carries its own world into the sky.'],
      ],
    },
  ],
  flow: [
    { partIds: ['fire-heart'], sentenceRef: 3, caption: 'Fuel and stored air meet in the fire heart, and the burning gas wants out.' },
    { partIds: ['fire-door'], sentenceRef: 4, caption: 'The fire door drives the gas out faster and faster — the harder back, the harder forward.' },
    { partIds: ['drop-tanks'], sentenceRef: 6, caption: 'The drop tanks empty first, let go, and fall back — the machine gets lighter as it climbs.' },
    { partIds: ['top-rod'], sentenceRef: 8, caption: 'If the big fire goes wrong, the top rod pulls the people room free.' },
    { partIds: ['end-wings'], sentenceRef: 9, caption: 'The end wings keep it flying straight on the way back.' },
  ],
  keyExpressions: [
    { text: 'throws itself into the sky' },
    { text: 'the world pushes back' },
    { text: 'an opening that gets narrower and narrower' },
    { text: 'most of the machine is there only to be burned' },
    { text: 'built to drop pieces as they go' },
    { text: 'a great round cloth opens to walk the people down' },
    { text: 'everything doing two jobs, nothing along for the ride' },
    { text: 'standing up on fire' },
    { text: 'carries its own world into the sky' },
  ],
  color: '#7C3AED',
}
