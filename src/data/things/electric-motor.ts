import type { ThingData } from '../types'

export const electricMotor: ThingData = {
  id: 'electric-motor',
  slug: 'electric-motor',
  simpleName: 'The Spin Maker',
  realName: 'Electric Motor',
  category: 'power',
  funFacts: [
    'A full-grown car carries more than thirty spin makers: one to turn the engine before it starts, four to move the wheels if it is that kind of car, one for each window, one to wipe the front glass, one for the fan, and one behind every seat that warms itself — the car of today is less a machine with motors in it than a group of motors riding together.',
    'The spin maker is the quiet winner of the machine world: it turns better than 9 of every 10 parts of the power it is fed into real turning — no fire, no smoke, no noise to speak of — while a fire-driven machine, at its very best, loses more than half of everything it eats.',
    'The biggest spin makers ever built stand taller than a house: the great ones that push ships through the sea turn wheels more than five times taller than a man — one spin maker, alone, with the strength of more than 100,000 horses.',
  ],
  parts: [
    { id: 'box-body', label: 'box body', realName: 'Motor Housing', position: [0, 0, 0], finish: 'hull' },
    { id: 'still-ring', label: 'still ring', realName: 'Stator (Magnet Ring)', position: [0, 0.28, 0], finish: 'titanium' },
    { id: 'spin-heart', label: 'spin heart', realName: 'Rotor (Wire-Wrapped Core)', position: [0, 0, 0], finish: 'warning' },
    { id: 'turn-changer', label: 'turn changer', realName: 'Commutator', position: [0.48, 0, 0], finish: 'cold' },
    { id: 'rubbing-bridges', label: 'rubbing bridges', realName: 'Brushes', position: [0.48, 0.15, 0], finish: 'cold' },
    { id: 'spin-stick', label: 'spin stick', realName: 'Output Shaft', position: [0.85, 0, 0], finish: 'cold' },
    { id: 'wire-arms', label: 'wire arms', realName: 'Power Leads', position: [-0.95, 0.24, 0], finish: 'cold' },
  ],
  article: [
    {
      sentences: [
        [
          'The spin maker is a machine for turning power into turning: it takes the ',
          { text: 'invisible', dict: 'invisible' },
          ' push that runs through wires and gives it a spinning end — a little machine quiet enough to hold in your hands, that does more work, in more places, than any other machine there is.',
        ],
        [
          'You live inside a world of them: there is one in the washing machine, one in the vacuum cleaner pulling in dust, one under the drill, one behind every ',
          { text: 'fan', dict: 'fan' },
          ' that moves the summer air, and tens more hidden in the walls, the boxes, and the cars around you — hundreds in a single house, none louder than a fly.',
        ],
        [
          'They come in every size, from one smaller than the end of your finger, that makes a phone shake, to ones bigger than a room, that pull whole trains — but inside every one of them, the same game is being played, and it has only two players.',
        ],
      ],
    },
    {
      sentences: [
        [
          'The first player is the magnet: a piece of metal that pushes and pulls, without touching, at anything made of iron or of other magnets — a force you cannot see, wrapped around every magnet like an invisible hand.',
        ],
        [
          'In the spin maker, the magnets are set as the ',
          { text: 'still ring', part: 'still-ring' },
          ': a circle of them fixed to the inside face of the ',
          { text: 'box body', part: 'box-body' },
          ', their invisible hands all reaching into the middle of the machine, a field of pull and push hanging in the empty air.',
        ],
        [
          'In the middle hangs the ',
          { text: 'spin heart', part: 'spin-heart' },
          ': a turning roll of iron, wrapped many times around with wire — and when power runs through the wire, the spin heart becomes a magnet too, pushed on one side, pulled on the other, by the still ring’s invisible hands.',
        ],
        [
          'And so it turns — but only a half turn: for the pull that turns it toward the still ring’s magnet soon becomes the pull that holds it there, facing it, stuck — unless the machine can change its mind.',
        ],
      ],
    },
    {
      sentences: [
        [
          'That is the work of the ',
          { text: 'turn changer', part: 'turn-changer' },
          ': a ring of metal on the turning part, broken into two halves, that changes the way the power goes, at exactly the right moment, every half turn.',
        ],
        [
          'Riding against it, hardly touching, are the ',
          { text: 'rubbing bridges', part: 'rubbing-bridges' },
          ': two soft blocks of black stuff, like the inside of a pencil, that the power comes in through — they hold still while the turn changer turns under them, passing power in, first one way, then the other, a ',
          { text: 'switch', dict: 'switch' },
          ' that never stops switching.',
        ],
        [
          'The push never stops pointing the same forward way: every half turn, the turn changer changes the way the power goes, and the spin heart goes from being pulled to being pushed to being pulled again — always pushed, never caught, turning faster and faster, until the turning’s own backward pull is as strong as the forward push, and there it settles: hundreds of turns every second, all day, all year.',
        ],
        [
          'Out of the end of the spin heart runs the ',
          { text: 'spin stick', part: 'spin-stick' },
          ': a round turning stick, carrying the turning out of the machine — to the fan, the wheel, the washing machine, the car — whatever the spin maker was born to drive.',
        ],
      ],
    },
    {
      sentences: [
        [
          'The power comes in through the ',
          { text: 'wire arms', part: 'wire-arms' },
          ': two wires — one for power going in, one for the used power coming back — joined to the rubbing bridges and reaching out of the box to the wall, the battery, or whatever feeds the machine.',
        ],
        [
          'And the whole game runs backwards, too: if you turn the spin stick by hand — with wind, with falling water, with a steam wheel — the machine becomes a power maker instead, pushing power back out through the wire arms: the windmills on the hills and the great falling-water houses are exactly this, spin makers run backwards, the turning making the power instead of the power making the turning.',
        ],
        [
          'Still ring, spin heart, turn changer, rubbing bridges, spin stick, wire arms, box body — seven small parts, one quiet spin: the hidden heart of nearly every machine that moves, the most-used machine on earth — and it does its work so quietly that you have probably never once thought about it, even though it has been near you every day of your life.',
        ],
      ],
    },
  ],
  flow: [
    { partIds: ['still-ring'], sentenceRef: 4, caption: 'The still ring hangs its invisible hands in the middle — pull on one side, push on the other.' },
    { partIds: ['spin-heart'], sentenceRef: 5, caption: 'Power in the wire makes the spin heart a magnet — pushed and pulled, it turns.' },
    { partIds: ['turn-changer', 'rubbing-bridges'], sentenceRef: 8, caption: 'The rubbing bridges feed the power through the turning switch — the turn changer changes the way the power goes, every half turn.' },
    { partIds: ['spin-stick'], sentenceRef: 10, caption: 'Out of the end runs the spin stick — the turning leaves the machine and does its work.' },
    { partIds: ['wire-arms'], sentenceRef: 11, caption: 'And all of it is fed from outside — the wire arms bring the power in.' },
  ],
  keyExpressions: [
    { text: 'a machine for turning power into turning' },
    { text: 'a force you cannot see', partId: 'still-ring' },
    { text: 'always pushed, never caught', partId: 'spin-heart' },
    { text: 'a switch that never stops switching', partId: 'turn-changer' },
    { text: 'like the inside of a pencil', partId: 'rubbing-bridges' },
    { text: 'carrying the turning out of the machine', partId: 'spin-stick' },
    { text: 'the most-used machine on earth' },
    { text: 'the machine becomes a power maker instead' },
    { text: 'the hidden heart of nearly every machine that moves' },
  ],
  color: '#22D3EE',
}
