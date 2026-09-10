import type { ThingData } from '../types'

export const drone: ThingData = {
  id: 'drone',
  slug: 'drone',
  simpleName: 'The Sky Watcher',
  realName: 'Drone',
  category: 'transport',
  funFacts: [
    'A sky watcher can hang in one place for half an hour on one power pocket — and the biggest ones, with engines to drive their great blades, can stay up for days, holding a single point on the map like a guard dog on a chain.',
    'The smallest flying machines of this kind are smaller than your hand: they can fly through an open window, land on a table, and send back a picture of the room — all without anyone noticing they were there.',
    'They watch great groups of animals from the air, looking for the sick ones; over the sea they fly out past the waves to look for people in the water, going where a boat would take hours and a person could not go at all.',
  ],
  parts: [
    { id: 'fly-box', label: 'fly box', realName: 'Airframe', position: [0, 0, 0], finish: 'hull' },
    { id: 'cross-arms', label: 'cross arms', realName: 'Arms', position: [0.45, 0, 0.45], finish: 'cold' },
    { id: 'spin-blades', label: 'spin blades', realName: 'Rotors', position: [0.8, 0.08, 0.8], finish: 'titanium' },
    { id: 'power-pocket', label: 'power pocket', realName: 'Battery', position: [0, -0.11, 0], finish: 'cold' },
    { id: 'sky-eye', label: 'sky eye', realName: 'Camera Gimbal', position: [0, -0.21, 0.22], finish: 'warning' },
    { id: 'far-talk', label: 'far talk', realName: 'Radio Antenna', position: [0, 0.3, 0], finish: 'cold' },
    { id: 'landing-legs', label: 'landing legs', realName: 'Landing Gear', position: [0.28, -0.24, 0.28], finish: 'cold' },
  ],
  article: [
    {
      sentences: [
        [
          'The sky watcher is a flying machine that carries no one: small enough to hold in your arms, it hangs in the air, goes where it is told, and comes home with its eyes full of pictures.',
        ],
        [
          'The people who fly them call each one a ',
          { text: 'drone', dict: 'drone' },
          ' — the smallest member of the flying family, quiet enough to hang over a sleeping field without waking a bird.',
        ],
        [
          'Everything hangs from the ',
          { text: 'fly box', part: 'fly-box' },
          ': a small, strong box of light stuff, no bigger than a lunch box, that holds every other piece of the machine together — the body first, and all the rest reaching out from it.',
        ],
      ],
    },
    {
      sentences: [
        [
          'From the box reach four ',
          { text: 'cross arms', part: 'cross-arms' },
          ': thin, straight sticks, one reaching out toward each corner of the sky, spread wide to stand on the air.',
        ],
        [
          'On the end of each arm turns a set of ',
          { text: 'spin blades', part: 'spin-blades' },
          ': two thin wings crossed in the middle, going around several hundred times every second, so fast that they become a round, see-through plate of pushing air.',
        ],
        [
          'Each turning plate pushes air down, and the air pushes back up — and that is the whole heart of the flying: the machine does not move through the air the way a boat moves through water; it stands on it, held up by four round plates of its own making.',
        ],
        [
          'The standing power comes from the ',
          { text: 'power pocket', part: 'power-pocket' },
          ': a box of stored power carried under the body — when it runs low, the sky watcher must turn for home, for a flying thing that runs out of power in the sky comes down the fast way.',
        ],
      ],
    },
    {
      sentences: [
        [
          'Under the body hangs the ',
          { text: 'sky eye', part: 'sky-eye' },
          ': a little turning camera that sees the world below, holding a road, a field, or a lost person in the middle of its sight while the machine holds still above.',
        ],
        [
          'A ',
          { text: 'far talk', part: 'far-talk' },
          ' part — a small radio stick standing up from the body — carries the pictures down to a person far away, and carries the person’s orders back up: go higher, turn left, hold still, come home.',
        ],
        [
          'Most of the flying is done by the machine itself: a tiny brain inside reads the air a hundred times every second, making each set of blades go faster or slower to keep the whole thing flat and still — the person holds the stick, but the machine does the standing.',
        ],
        [
          'The pictures it sends home are good enough to count the birds on a field, follow a river to its mouth, or find the warm front door of a house on a cold night — the sky watcher sees everything, and remembers where it saw it.',
        ],
      ],
    },
    {
      sentences: [
        [
          'When the work is done, four ',
          { text: 'landing legs', part: 'landing-legs' },
          ' reach down from under the arms — and the machine sits down on them as gently as a bird, its blades slowing to a stop.',
        ],
        [
          'Some fly for a living — watching fields, carrying small things across town, going up into places too high or too hard for people to reach — and some fly for fun, playing games and dancing in the evening air with their friends.',
        ],
        [
          'The sky above us is a working street now: a quiet machine passing by with a pocket full of pictures, off to see the world for the people below.',
        ],
      ],
    },
  ],
  keyExpressions: [
    { text: 'a flying machine that carries no one' },
    { text: 'the smallest member of the flying family' },
    { text: 'no bigger than a lunch box', partId: 'fly-box' },
    { text: 'spread wide to stand on the air', partId: 'cross-arms' },
    { text: 'a round, see-through plate of pushing air', partId: 'spin-blades' },
    { text: 'a box of stored power carried under the body', partId: 'power-pocket' },
    { text: 'holding a road, a field, or a lost person in the middle of its sight', partId: 'sky-eye' },
    { text: 'carries the person’s orders back up', partId: 'far-talk' },
    { text: 'sits down on them as gently as a bird', partId: 'landing-legs' },
  ],
  flow: [
    { partIds: ['fly-box'], sentenceRef: 2, caption: 'First the fly box — the little strong box that everything else is joined to.' },
    { partIds: ['cross-arms'], sentenceRef: 3, caption: 'From it reach the four cross arms — spread wide, one to each corner of the sky.' },
    { partIds: ['spin-blades'], sentenceRef: 4, caption: 'On each arm end, the spin blades — hundreds of turns a second, a round plate of pushing air.' },
    { partIds: ['sky-eye'], sentenceRef: 7, caption: 'Below hangs the sky eye — the little camera that watches and remembers.' },
    { partIds: ['landing-legs'], sentenceRef: 11, caption: 'And at the end of the day, the landing legs — sitting down as gently as a bird.' },
  ],
  color: '#0891B2',
}
