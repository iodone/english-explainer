import type { ThingData } from '../types'

export const hovercraft: ThingData = {
  id: 'hovercraft',
  slug: 'hovercraft',
  simpleName: 'The Boat on an Air Bed',
  realName: 'Hovercraft',
  category: 'transport',
  funFacts: [
    'The biggest hovercraft carried cars and 400 people at once, flying across the water faster than most cars on a road.',
    'Because nothing hard touches the ground, a hovercraft can cross a wet land full of life without hurting it.',
    'In 1959, one of these boats crossed a whole sea for the first time, and people could not believe their eyes.',
  ],
  parts: [
    { id: 'flat-hull', label: 'boat body', realName: 'Hull', position: [0, 0.02, 0], finish: 'hull' },
    { id: 'soft-skirt', label: 'soft skirt', realName: 'Skirt', position: [0.37, -0.09, 0], finish: 'cold' },
    { id: 'lift-fan', label: 'lift fan', realName: 'Lift fan', position: [0.02, 0.075, 0], finish: 'warning' },
    { id: 'push-fan', label: 'push fan', realName: 'Propulsion fan', position: [0.46, 0.02, 0], finish: 'titanium' },
    { id: 'air-bed', label: 'air bed', realName: 'Air cushion', position: [0, -0.06, 0], finish: 'cold' },
    { id: 'small-cabin', label: 'small top room', realName: 'Cabin', position: [-0.22, 0.12, 0], finish: 'cold' },
    { id: 'turn-fin', label: 'turning fin', realName: 'Rudder', position: [0.56, -0.02, 0], finish: 'cold' },
  ],
  article: [
    {
      sentences: [
        [
          'This boat has no wheels and almost touches nothing — it ',
          { text: 'hovers', dict: 'hover' },
          ', hanging on a bed of air.',
        ],
        [
          'Its real name is a ',
          { text: 'hovercraft', dict: 'hovercraft' },
          ', and it can cross water, grass, and flat land in one easy ride.',
        ],
        ['Where a normal boat would stop on the sand and a car would go under, this one keeps going.'],
      ],
    },
    {
      sentences: [
        [
          'The wide ',
          { text: 'boat body', part: 'flat-hull' },
          ' is flat like a big table, with room for people and machines inside.',
        ],
        [
          'All around its bottom edge runs a ',
          { text: 'soft skirt', part: 'soft-skirt', dict: 'skirt' },
          ' — a rubber bag that can bend and change shape.',
        ],
        [
          'On top, a ',
          { text: 'lift fan', part: 'lift-fan' },
          ' blows air down into the middle of the skirt.',
        ],
        [
          'The air stays inside the skirt, so it fills an ',
          { text: 'air bed', part: 'air-bed' },
          ' under the boat and lifts the whole thing a few fingers off the ground.',
        ],
      ],
    },
    {
      sentences: [
        [
          'At the back, a ',
          { text: 'push fan', part: 'push-fan' },
          ' blows air backwards, and the boat slides forward, riding its soft bed.',
        ],
        ['Now nothing hard touches anything: no wheels on a road, no bottom on the sand.'],
        ['With so little holding it back, it can stop almost right away and turn on the spot.'],
        [
          'The driver sits in the ',
          { text: 'small top room', part: 'small-cabin' },
          ' and turns the boat by pushing air through a ',
          { text: 'turning fin', part: 'turn-fin', dict: 'fin' },
          ' at the back.',
        ],
      ],
    },
    {
      sentences: [
        ['The biggest ones carry 400 people across the water at the speed of a slow train.'],
        ['They can land on beaches where no boat or truck could ever go.'],
        ['Riding one feels strange at first: the boat floats like a leaf, and the ground seems to be moving under you.'],
      ],
    },
  ],
  flow: [
    { partIds: ['flat-hull'], sentenceRef: 3, caption: 'The wide boat body is flat like a big table, with room inside.' },
    { partIds: ['soft-skirt'], sentenceRef: 4, caption: 'A soft skirt runs around the bottom edge — a rubber bag that can bend.' },
    { partIds: ['lift-fan'], sentenceRef: 5, caption: 'The lift fan blows air down into the middle of the skirt.' },
    { partIds: ['air-bed'], sentenceRef: 6, caption: 'The air fills a bed under the boat and lifts the whole thing up.' },
    { partIds: ['push-fan'], sentenceRef: 7, caption: 'The push fan blows air backwards, and the boat slides forward.' },
  ],
  keyExpressions: [
    { text: 'flat like a big table', partId: 'flat-hull' },
    { text: 'a rubber bag that can bend and change shape', partId: 'soft-skirt' },
    { text: 'blows air down into the middle of the skirt', partId: 'lift-fan' },
    { text: 'lifts the whole thing a few fingers off the ground', partId: 'air-bed' },
    { text: 'blows air backwards', partId: 'push-fan' },
    { text: 'the driver sits in the small top room', partId: 'small-cabin' },
    { text: 'pushing air through a turning fin', partId: 'turn-fin' },
    { text: 'water, grass, and flat land in one easy ride' },
    { text: 'no wheels on a road, no bottom on the sand' },
  ],
  color: '#90E0EF',
}
