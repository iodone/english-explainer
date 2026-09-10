import type { ThingData } from '../types'

export const submarine: ThingData = {
  id: 'submarine',
  slug: 'submarine',
  simpleName: 'Under-Water Boat',
  realName: 'Submarine',
  category: 'transport',
  funFacts: [
    'Go down as deep as a tall house, and the water already pushes twice as hard as the air at the top of the sea; go deep enough, and it would push a glass bottle flat.',
    'The biggest animals in the sea talk to each other across the whole sea with sound, because sound carries through water far better than light — submarines simply learned to do the same.',
    'The first boats like this were rowed by hand and held one person; the biggest today are longer than a whole football field.',
  ],
  parts: [
    { id: 'hard-skin', label: 'Hard Skin', realName: 'Pressure Hull', position: [-1.0, 0.6, 0], finish: 'hull' },
    { id: 'water-rooms', label: 'Water Rooms', realName: 'Ballast Tanks', position: [-1.3, -0.45, 0], finish: 'titanium' },
    { id: 'air-boxes', label: 'Air Boxes', realName: 'Compressed Air Tanks', position: [0.9, 0.75, 0], finish: 'cold' },
    { id: 'water-pusher', label: 'Water Pusher', realName: 'Propeller', position: [-1.75, -0.5, 0], finish: 'warning' },
    { id: 'tip-wings', label: 'Tip Wings', realName: 'Diving Planes', position: [1.25, -0.65, 0], finish: 'cold' },
    { id: 'long-eye', label: 'Long Eye', realName: 'Periscope', position: [-1.0, 1.1, 0], finish: 'cold' },
    { id: 'sound-ears', label: 'Sound Ears', realName: 'Sonar Array', position: [1.65, -0.35, 0], finish: 'cold' },
  ],
  article: [
    {
      sentences: [
        ['A ', { text: 'submarine', dict: 'submarine' }, ' is a boat that goes under the water because it wants to — and comes back up when it wants to.'],
        ['Water pushes on everything in it, and the deeper you go, the harder the push: down deep, that press would end a normal boat.'],
        ['So a submarine is two ideas in one: a ', { text: 'hard skin', part: 'hard-skin' }, ' that can take the press, and hidden rooms that choose between heavy and light.'],
      ],
    },
    {
      sentences: [
        ['Along its sides are the ', { text: 'water rooms', part: 'water-rooms' }, ' — boxes that can let water in, or push it out again.'],
        ['Let the sea in, and the boat becomes heavier than the water it pushes out of the way — down it goes.'],
        ['To rise, strong air from the ', { text: 'air boxes', part: 'air-boxes' }, ' is let into the rooms — it drives the water out, the boat grows light, and the sea lifts it up.'],
        ['With the rooms half full, the boat can hang still in the middle of the sea — not falling, not rising — it chooses how deep to sit.'],
      ],
    },
    {
      sentences: [
        ['A big turning ', { text: 'water pusher', part: 'water-pusher' }, ' at the back drives the boat along, quiet and slow, for weeks under the surface.'],
        ['The ', { text: 'tip wings', part: 'tip-wings' }, ' tip up or down, and while the boat moves, the water flowing over them lifts the boat or slides it deeper.'],
        ['A ', { text: 'long eye', part: 'long-eye' }, ' pushes up above the waves and carries the picture of the sky down a long ', { text: 'tube', dict: 'tube' }, ' to the watcher inside.'],
        ['And in the deep dark, where eyes are no use, the ', { text: 'sound ears', part: 'sound-ears' }, ' do the seeing: the boat calls out and listens for the call to come back — off rock, off other boats, off the sea floor — sound is the only eye down there.'],
      ],
    },
    {
      sentences: [
        ['Inside the ', { text: 'hard skin', part: 'hard-skin' }, ', the boat makes its own air from the sea water itself, so the people inside can breathe for months without coming up.'],
        ['Some of them make their own power too, using the same heavy metal power idea as the big power buildings — no air needed, no fire — so they can stay under for months and months.'],
        ['Heavy to go down, light to come up, sound to see — the only boat that goes under the water because it wants to.'],
      ],
    },
  ],
  flow: [
    { partIds: ['water-rooms'], sentenceRef: 4, caption: 'Let the sea in, and the boat grows heavier than the water it pushes out of the way — down it goes.' },
    { partIds: ['air-boxes'], sentenceRef: 5, caption: 'Strong air drives the water out, the boat grows light, and the sea lifts it up.' },
    { partIds: ['water-pusher'], sentenceRef: 7, caption: 'A big turning water pusher drives the boat along, quiet and slow.' },
    { partIds: ['tip-wings'], sentenceRef: 8, caption: 'Wings tip, and the moving water lifts the boat or slides it deeper.' },
    { partIds: ['sound-ears'], sentenceRef: 10, caption: 'In the deep dark, the sound ears do the seeing: call out, listen for the call to come back.' },
  ],
  keyExpressions: [
    { text: 'goes under the water because it wants to' },
    { text: 'the deeper you go, the harder the push' },
    { text: 'heavier than the water it pushes out of the way', partId: 'water-rooms' },
    { text: 'drives the water out', partId: 'air-boxes' },
    { text: 'not falling, not rising' },
    { text: 'quiet and slow for weeks', partId: 'water-pusher' },
    { text: 'tip up or down', partId: 'tip-wings' },
    { text: 'carries the picture of the sky', partId: 'long-eye' },
    { text: 'sound is the only eye down there', partId: 'sound-ears' },
  ],
  color: '#10B981',
}
