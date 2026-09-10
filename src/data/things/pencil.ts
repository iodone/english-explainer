import type { ThingData } from '../types'

export const pencil: ThingData = {
  id: 'pencil',
  slug: 'pencil',
  simpleName: 'Writing Stick',
  realName: 'Pencil',
  category: 'home',
  funFacts: [
    'People first thought the black heart was lead, a soft gray metal — the wrong name stuck for hundreds of years, but there is no lead in a pencil.',
    'The first people to go into space took pencils — a thing with wet stuff inside could fail or float away, but a rock stick could not.',
    'One pencil can draw a line so long that walking along it would take a whole day.',
  ],
  parts: [
    { id: 'write-tip', label: 'Write Tip', realName: 'Point', position: [-1.15, -0.42, 0], finish: 'cold' },
    { id: 'wood-case', label: 'Wood Case', realName: 'Cedar Barrel', position: [-0.25, 0.58, 0], finish: 'hull' },
    { id: 'black-heart', label: 'Black Heart', realName: 'Graphite Core', position: [0.15, -0.88, 0], finish: 'titanium' },
    { id: 'metal-ring', label: 'Metal Ring', realName: 'Ferrule', position: [0.9, 0.48, 0], finish: 'cold' },
    { id: 'rub-end', label: 'Rub End', realName: 'Eraser', position: [1.35, 0.42, 0], finish: 'warning' },
    { id: 'paint-skin', label: 'Paint Skin', realName: 'Lacquer Coating', position: [0.4, -1.38, 0], finish: 'cold' },
    { id: 'six-sides', label: 'Six Sides', realName: 'Hexagonal Shape', position: [-0.95, -0.88, 0], finish: 'cold' },
  ],
  article: [
    {
      sentences: [
        [
          'A ',
          { text: 'pencil', dict: 'pencil' },
          ' is a stick of rock in a ',
          { text: 'wood coat', part: 'wood-case' },
          '.',
        ],
        [
          'When it writes, its ',
          { text: 'black heart', part: 'black-heart' },
          ' leaves tiny pieces of itself on the paper.',
        ],
        ['That heart is the most important part of the whole pencil, and there is very little of it.'],
      ],
    },
    {
      sentences: [
        [
          'The heart is ',
          { text: 'graphite', dict: 'graphite' },
          ' — a soft black rock, ground to dust.',
        ],
        [
          'The dust is pressed together with wet ',
          { text: 'clay', dict: 'clay' },
          '.',
        ],
        ['Then it is made hard with fire.'],
        [
          'More clay makes a hard heart that draws thin light lines, while less clay makes a soft heart that draws dark deep lines; the whole ',
          { text: 'wood case', part: 'wood-case' },
          ' is built around that heart.',
        ],
      ],
    },
    {
      sentences: [
        ['Under glass, paper is little hills and low spots.'],
        [
          'The ',
          { text: 'write tip', part: 'write-tip' },
          ' slides across, and black dust drops into the low spots.',
        ],
        ['Your words are simply dust caught in the paper.'],
        [
          'A ',
          { text: 'rub end', part: 'rub-end', dict: 'eraser' },
          ' loves dust even more than paper does; it takes the dust back off, and the mark goes away — with a ',
          { text: 'metal ring', part: 'metal-ring' },
          ' holding it on the end.',
        ],
      ],
    },
    {
      sentences: [
        ['When the point is not sharp any more, a small turning blade cuts the wood away in thin little rolls and shows more black heart.'],
        [
          { text: 'Six flat sides', part: 'six-sides' },
          ' keep it from rolling off the table and give your fingers a place to hold.',
        ],
        [
          'A ',
          { text: 'paint skin', part: 'paint-skin' },
          ' covers the wood so your hand stays clean — a writing stick that has worked for hundreds of years, with nothing wet inside.',
        ],
      ],
    },
  ],
  flow: [
    { partIds: ['black-heart'], caption: 'The black rock leaves tiny pieces of itself behind.', sentenceRef: 1 },
    { partIds: ['wood-case'], caption: 'The wood coat holds the soft heart so it will not break.', sentenceRef: 6 },
    { partIds: ['write-tip'], caption: 'The tip slides over the paper’s hills, and dust drops into the low spots.', sentenceRef: 8 },
    { partIds: ['rub-end', 'metal-ring'], caption: 'The rub end takes the dust back off, and the mark goes away.', sentenceRef: 10 },
    { partIds: ['write-tip', 'wood-case'], caption: 'A turning blade cuts wood away and shows more black heart.', sentenceRef: 11 },
  ],
  keyExpressions: [
    { text: 'a stick of rock in a wood coat', partId: 'wood-case' },
    { text: 'ground to dust', partId: 'black-heart' },
    { text: 'pressed together with clay' },
    { text: 'hard ones draw thin light lines', partId: 'black-heart' },
    { text: 'little hills and low spots' },
    { text: 'dust drops into the low spots', partId: 'write-tip' },
    { text: 'takes the dust back off', partId: 'rub-end' },
    { text: 'shows more black heart', partId: 'black-heart' },
    { text: 'six flat sides', partId: 'six-sides' },
  ],
  color: '#A3E635',
}
