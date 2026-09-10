import type { ThingData } from '../types'

export const airplane: ThingData = {
  id: 'airplane',
  slug: 'airplane',
  simpleName: 'Metal Bird',
  realName: 'Airplane',
  category: 'transport',
  funFacts: [
    'The white line a high bird leaves across the sky is not smoke: it is the water of its breath, hanging in the cold thin air as a river of tiny ice drops.',
    'At take-off a big bird is heavier than five hundred cars — and at running speed the air pushes up on its wings with the weight of a small building.',
    'A hundred years ago the first bird to cross the great sea ran out of fuel before it landed and fell into a soft field; today the same trip is made before lunch, with three hundred people reading and sleeping above the water.',
  ],
  parts: [
    { id: 'wings', label: 'Main Wings', realName: 'Wings', position: [0.2, 0.06, 0.55], finish: 'titanium' },
    { id: 'jets', label: 'Jet Engines', realName: 'Jet Engines', position: [-0.15, -0.25, 0.62], finish: 'warning' },
    { id: 'body-room', label: 'Body Room', realName: 'Fuselage', position: [0, 0, 0], finish: 'hull' },
    { id: 'nose-room', label: 'Nose Room', realName: 'Cockpit', position: [1.45, 0.05, 0], finish: 'cold' },
    { id: 'tail-wing', label: 'Tail Wing', realName: 'Tailplane', position: [-1.3, 0.12, 0], finish: 'cold' },
    { id: 'tail-fin', label: 'Tail Fin', realName: 'Vertical Fin', position: [-1.35, 0.45, 0], finish: 'cold' },
    { id: 'land-wheels', label: 'Land Wheels', realName: 'Landing Gear', position: [0.2, -0.5, 0], finish: 'cold' },
  ],
  article: [
    {
      sentences: [
        [
          'A metal bird is a flying machine heavier than the air around it: it does not ',
          { text: 'float', dict: 'float' },
          ' like a hot air ball, and it does not hang from turning wings like a sky boat — it runs forward so fast that the air becomes a road under it.',
        ],
        [
          'That road is the ',
          { text: 'wings', part: 'wings' },
          ': flat on the bottom and round on top, so the air going over must travel farther and faster than the air going under — and faster air pushes less.',
        ],
        [
          'Push a wing through the sky fast enough and the air below pushes up harder than the air above pushes down; that ',
          { text: 'difference', dict: 'difference' },
          ', over the whole wing, is what holds a hundred people high above the sea.',
        ],
      ],
    },
    {
      sentences: [
        [
          'The running push comes from the ',
          { text: 'jets', part: 'jets', dict: 'jet' },
          ': round rooms that drink air at the front, push it into a small space, burn ',
          { text: 'fuel', dict: 'fuel' },
          ' in it, and throw it out the back faster than it came — each one a machine for making wind.',
        ],
        [
          'Everything rides in the ',
          { text: 'body room', part: 'body-room' },
          ', a long round metal ',
          { text: 'tube', dict: 'tube' },
          ' that carries people and their bags, with lines of little windows down its sides.',
        ],
        [
          'At the very front sits the ',
          { text: 'nose room', part: 'nose-room' },
          ', where the drivers sit behind glass with their hands on the wheel — from there the whole bird is theirs: wings, fires, and sky.',
        ],
        [
          'Under the body hang the ',
          { text: 'land wheels', part: 'land-wheels' },
          ': they carry the bird for the first half minute of running and the last half minute after it lands, and hide inside the body for everything between.',
        ],
      ],
    },
    {
      sentences: [
        [
          'A bird with no ',
          { text: 'tail', dict: 'tail' },
          ' falls out of the sky, and so does a metal one: the ',
          { text: 'tail wing', part: 'tail-wing' },
          ' spreads out flat at the back to keep the nose from tipping up or down, and the ',
          { text: 'tail fin', part: 'tail-fin' },
          ' stands straight up to keep the nose pointing where the drivers ask.',
        ],
        [
          'Flying itself is one long ',
          { text: 'trade', dict: 'trade' },
          ': the bird must run down a road faster and faster until its wings can hold it, and every bit of weight it carries eats some of that speed.',
        ],
        [
          'High above the clouds, where the air is thin, the bird can ride for hours on wings that never beat — the jets eat less, the world turns below, and the trip takes less than it does down low.',
        ],
        [
          'Coming home is the same idea turned around: the drivers tip the nose down a long slow fall through the air, the wings hold the bird back instead of pushing it up, and the road rises to meet the wheels.',
        ],
      ],
    },
    {
      sentences: [
        [
          'The first metal bird to truly fly carried one person lying flat like a rider on a two-wheel machine, and stayed up for about the time it takes to read this page.',
        ],
        [
          'Within one long life, the children of that first little wing were carrying hundreds of people across the sea faster than the sun seems to move — leaving after the sun is up, landing where the day has not yet started.',
        ],
        [
          'A tube of metal, heavier than the air, held up by nothing but its own running — the fastest way people have found to cross the world.',
        ],
      ],
    },
  ],
  flow: [
    { partIds: ['wings'], sentenceRef: 1, caption: 'Flat below, round above — the wing makes the air above travel faster, and faster air pushes less.' },
    { partIds: ['jets'], sentenceRef: 3, caption: 'The jets throw air out the back faster than it came in — each one a machine for making wind.' },
    { partIds: ['body-room'], sentenceRef: 4, caption: 'Everything rides in the long round tube: people, bags, and air to breathe.' },
    { partIds: ['tail-wing', 'tail-fin'], sentenceRef: 7, caption: 'Tail wing and tail fin keep the nose from tipping — a bird with no tail falls.' },
    { partIds: ['land-wheels'], sentenceRef: 10, caption: 'Coming home: the wings hold the bird back, and the road rises to meet the wheels.' },
  ],
  keyExpressions: [
    { text: 'heavier than the air around it' },
    { text: 'the air itself becomes a road' },
    { text: 'faster air pushes less' },
    { text: 'a machine for making wind' },
    { text: 'a long round metal tube' },
    { text: 'hide inside the body' },
    { text: 'wings that never beat' },
    { text: 'the road rises to meet the wheels' },
    { text: 'one long trade' },
  ],
  color: '#7DD3FC',
}
