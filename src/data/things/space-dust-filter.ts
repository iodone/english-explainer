import type { ThingData } from '../types';

export const spaceDustFilter: ThingData = {
  id: 'space-dust-filter',
  slug: 'space-dust-filter',
  simpleName: 'The Dust Catcher',
  realName: 'Dust Filter',
  category: 'space',
  color: '#D2B48C',
  funFacts: [
    'Space dust is very fine and it can get into every small hole.',
    'This box stops the dust before it can get into the machines.',
    'The dust in space can be as hard as small stones.',
    'The bag must be emptied often, or the dust will block the mesh.',
    'People wear a cover on their face when they clean the box.',
    'Dust from space can also make people on a ship sick.'
  ],
  parts: [
    { id: 'case', label: 'Main Case', realName: 'Filter Case', position: [-0.22, 0.12, 0], finish: 'hull' },
    { id: 'mesh', label: 'Fine Mesh', realName: 'Mesh Screen', position: [-0.1, -0.05, 0.06], finish: 'titanium' },
    { id: 'ring', label: 'Lock Ring', realName: 'Retainer Ring', position: [0.02, 0.16, 0], finish: 'titanium' },
    { id: 'bag', label: 'Dust Bag', realName: 'Dust Bag', position: [0, -0.16, 0], finish: 'warning' },
    { id: 'door', label: 'Side Door', realName: 'Access Door', position: [0.16, 0.08, -0.17], finish: 'cold' },
    { id: 'handle', label: 'Pull Handle', realName: 'Pull Handle', position: [0.22, 0, -0.19], finish: 'hull' }
  ],
  article: [
    {
      sentences: [
        ['Fine dust can get into a ship and stop the machines from working.'],
        ['The ', { text: 'main case', part: 'case' }, ' is the box that holds the mesh and the dust.'],
        ['The ', { text: 'fine mesh', part: 'mesh' }, ' is the sheet with very small holes that stops the dust.'],
        ['The ', { text: 'lock ring', part: 'ring' }, ' holds the mesh in its place in the box.'],
        ['The ', { text: 'side door', part: 'door' }, ' is the part you open to take the mesh out.']
      ]
    },
    {
      sentences: [
        ['The ', { text: 'dust bag', part: 'bag' }, ' is where the dust stays after the mesh catches it.'],
        ['The ', { text: 'pull handle', part: 'handle' }, ' is the part you hold to pull the bag out.'],
        ['Space dust is very fine and can go through most small holes.'],
        ['This box must be cleaned often, or the dust will fill it up.'],
        ['The mesh can be washed and put back in the box.'],
        ['Dark dust from space can also make people on a ship sick.']
      ]
    }
  ],
  flow: [
    { partIds: ['mesh'], caption: 'The fine mesh stops the dust', sentenceRef: 2 },
    { partIds: ['bag'], caption: 'The dust bag holds what the mesh catches', sentenceRef: 5 },
    { partIds: ['handle'], caption: 'The pull handle helps you take the bag out', sentenceRef: 6 },
    { partIds: ['door'], caption: 'The side door opens so you can take the mesh out', sentenceRef: 4 }
  ],
  keyExpressions: [
    { text: 'fine mesh', partId: 'mesh' },
    { text: 'dust bag', partId: 'bag' },
    { text: 'lock ring', partId: 'ring' },
    { text: 'pull handle', partId: 'handle' }
  ]
};
