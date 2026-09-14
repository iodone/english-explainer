import type { ThingData } from '../types'

export const waterFilter: ThingData = {
  id: 'water-filter',
  slug: 'water-filter',
  simpleName: 'The Water Cleaner',
  realName: 'Water filter',
  category: 'home',
  funFacts: [
    'A water cleaner can take water that looks dirty and make it clean enough to drink.',
    'Some water cleaners use special rocks and sand to clean the water.',
    'The first water cleaners were made a very long time ago using sand and cloth.',
  ],
  parts: [
    { id: 'body', label: 'body', realName: 'Housing', position: [0, 0, 0], finish: 'hull' },
    { id: 'water-in', label: 'water in', realName: 'Inlet', position: [0, 0.16, 0], finish: 'cold' },
    { id: 'water-out', label: 'water out', realName: 'Outlet', position: [0, -0.16, 0], finish: 'cold' },
    { id: 'clean-part', label: 'clean part', realName: 'Filter media', position: [0, 0, 0], finish: 'titanium' },
    { id: 'top-cover', label: 'top cover', realName: 'Cap', position: [0, 0.18, 0], finish: 'hull' },
    { id: 'bottom-part', label: 'bottom part', realName: 'Base', position: [0, -0.18, 0], finish: 'hull' },
    { id: 'hold-ring', label: 'hold ring', realName: 'Mounting ring', position: [0, -0.12, 0.08], finish: 'cold' },
  ],
  article: [
    {
      sentences: [
        [
          'This is a ',
          { text: 'water cleaner', dict: 'water-filter' },
          '. It takes dirty water and makes it clean so people can drink it.',
        ],
      ],
    },
    {
      sentences: [
        [
          'The ',
          { text: 'body', part: 'body' },
          ' is the outside part that holds all the cleaning things inside.',
        ],
        [
          'Dirty water comes in through the ',
          { text: 'water in', part: 'water-in' },
          ' part at the top.',
        ],
      ],
    },
    {
      sentences: [
        [
          'Inside is the ',
          { text: 'clean part', part: 'clean-part' },
          ' — special rocks and sand that catch the dirt as the water goes through.',
        ],
        ['The water goes down through the clean part, and the dirt stays behind.'],
      ],
    },
    {
      sentences: [
        [
          'Clean water comes out through the ',
          { text: 'water out', part: 'water-out' },
          ' part at the bottom.',
        ],
        ['The water that comes out is much cleaner than the water that went in.'],
      ],
    },
    {
      sentences: [
        [
          'The ',
          { text: 'top cover', part: 'top-cover' },
          ' closes the top so nothing can fall in.',
        ],
        [
          'The ',
          { text: 'bottom part', part: 'bottom-part' },
          ' holds the clean part in place and lets the water flow down.',
        ],
      ],
    },
    {
      sentences: [
        [
          'A ',
          { text: 'hold ring', part: 'hold-ring' },
          ' on the side helps join the water cleaner to the wall or a table.',
        ],
        ['Some water cleaners are very small and can sit on a table, while others are very big.'],
      ],
    },
  ],
  flow: [
    { partIds: ['body', 'water-in'], sentenceRef: 1, caption: 'The body holds everything; dirty water comes in at the top.' },
    { partIds: ['clean-part'], sentenceRef: 4, caption: 'The clean part catches dirt as water goes through.' },
    { partIds: ['water-out'], sentenceRef: 6, caption: 'Clean water comes out at the bottom.' },
    { partIds: ['top-cover', 'bottom-part'], sentenceRef: 8, caption: 'Top cover closes the top; bottom part holds things in place.' },
    { partIds: ['hold-ring'], sentenceRef: 10, caption: 'The hold ring helps join it to a wall or table.' },
  ],
  keyExpressions: [
    { text: 'water cleaner', partId: 'clean-part' },
    { text: 'takes dirty water and makes it clean', partId: 'clean-part' },
    { text: 'special rocks and sand that catch the dirt', partId: 'clean-part' },
    { text: 'water goes down through the clean part', partId: 'clean-part' },
    { text: 'much cleaner than the water that went in', partId: 'water-out' },
    { text: 'closes the top so nothing can fall in', partId: 'top-cover' },
    { text: 'helps join the water cleaner to the wall', partId: 'hold-ring' },
  ],
  color: '#B0E0E6',
}