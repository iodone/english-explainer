import type { ThingData } from '../types'

export const bookShelf: ThingData = {
  id: 'book-shelf',
  slug: 'book-shelf',
  simpleName: 'The Book Thing',
  realName: 'Bookshelf',
  category: 'home',
  funFacts: [
    'A book thing can hold hundreds of books in a small room.',
    'The first book things were made a very, very long time ago.',
    'Some book things are so big they need to be held up with very strong sticks.',
  ],
  parts: [
    { id: 'side-left', label: 'side left', realName: 'Left side panel', position: [-0.18, 0, 0], finish: 'hull' },
    { id: 'side-right', label: 'side right', realName: 'Right side panel', position: [0.18, 0, 0], finish: 'hull' },
    { id: 'top-board', label: 'top board', realName: 'Top shelf', position: [0, 0.16, 0], finish: 'hull' },
    { id: 'bottom-board', label: 'bottom board', realName: 'Bottom shelf', position: [0, -0.16, 0], finish: 'hull' },
    { id: 'middle-board', label: 'middle board', realName: 'Middle shelf', position: [0, 0, 0], finish: 'hull' },
    { id: 'back-board', label: 'back board', realName: 'Back panel', position: [0, 0, -0.08], finish: 'cold' },
    { id: 'hold-part', label: 'hold part', realName: 'Anti-tip bracket', position: [0, 0.14, -0.06], finish: 'titanium' },
  ],
  article: [
    {
      sentences: [
        [
          'This is a ',
          { text: 'book thing', dict: 'book-shelf' },
          '. It holds books so they do not lie all over the floor.',
        ],
      ],
    },
    {
      sentences: [
        [
          'The ',
          { text: 'side left', part: 'side-left' },
          ' and ',
          { text: 'side right', part: 'side-right' },
          ' are the tall pieces on each side.',
        ],
        ['They hold the boards in place.'],
      ],
    },
    {
      sentences: [
        [
          'The ',
          { text: 'top board', part: 'top-board' },
          ' at the top and the ',
          { text: 'bottom board', part: 'bottom-board' },
          ' at the bottom make the top and bottom of the book thing.',
        ],
        [
          'The ',
          { text: 'middle board', part: 'middle-board' },
          ' in the middle makes more room for books.',
        ],
      ],
    },
    {
      sentences: [
        [
          'The ',
          { text: 'back board', part: 'back-board' },
          ' at the back keeps books from falling out the back.',
        ],
        ['It also makes the book thing stronger.'],
      ],
    },
    {
      sentences: [
        [
          'The ',
          { text: 'hold part', part: 'hold-part' },
          ' at the top holds the book thing to the wall.',
        ],
        ['This is important so it does not fall on someone.'],
      ],
    },
    {
      sentences: [
        ['Book things are very simple but very good at keeping books in one place.'],
        ['Without them, we would have books all over the floor.'],
      ],
    },
  ],
  flow: [
    { partIds: ['side-left', 'side-right'], sentenceRef: 1, caption: 'Side left and side right hold everything in place.' },
    { partIds: ['top-board', 'bottom-board', 'middle-board'], sentenceRef: 4, caption: 'Top, bottom, and middle boards make rooms for books.' },
    { partIds: ['back-board'], sentenceRef: 6, caption: 'Back board keeps books from falling out.' },
    { partIds: ['hold-part'], sentenceRef: 8, caption: 'Hold part holds it to the wall so it does not fall.' },
    { partIds: ['middle-board'], sentenceRef: 10, caption: 'Book things keep books in one place.' },
  ],
  keyExpressions: [
    { text: 'book thing', partId: 'middle-board' },
    { text: 'holds books so they do not lie on the floor', partId: 'middle-board' },
    { text: 'tall pieces on each side', partId: 'side-left' },
    { text: 'makes more room for books', partId: 'middle-board' },
    { text: 'keeps books from falling out the back', partId: 'back-board' },
    { text: 'holds the book thing to the wall', partId: 'hold-part' },
    { text: 'does not fall on someone', partId: 'hold-part' },
  ],
  color: '#DEB887',
}