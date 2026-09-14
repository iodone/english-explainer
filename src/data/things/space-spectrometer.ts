import type { ThingData } from '../types';

export const spaceSpectrometer: ThingData = {
  id: 'space-spectrometer',
  slug: 'space-spectrometer',
  simpleName: 'The Light Checker',
  realName: 'Spectrometer',
  category: 'space',
  color: '#9370DB',
  funFacts: [
    'This box takes light apart and tells what the light is made of.',
    'It can read light from a star or from a rock.',
    'Each thing sends out its own lines of color.',
    'The lines fall on a chip, and the chip tells them apart.',
    'People use it to find what far things are made of.',
    'It works with light that your eye can not see.'
  ],
  parts: [
    { id: 'body', label: 'Main Body', realName: 'Case', position: [0, 0, 0], finish: 'hull' },
    { id: 'slit', label: 'Thin Slit', realName: 'Slit', position: [-0.2, 0, 0], finish: 'cold' },
    { id: 'mirror', label: 'Split Mirror', realName: 'Grating', position: [0, 0, 0], finish: 'titanium' },
    { id: 'lens', label: 'Small Lens', realName: 'Lens', position: [0.12, 0, 0], finish: 'hull' },
    { id: 'chip', label: 'Read Chip', realName: 'Sensor Chip', position: [0.24, 0, 0], finish: 'titanium' },
    { id: 'wire', label: 'Lead Wire', realName: 'Lead Line', position: [0.36, -0.1, 0], finish: 'warning' }
  ],
  article: [
    {
      sentences: [
        ['This box takes light apart and tells what the light is made of.'],
        ['The ', { text: 'main body', part: 'body' }, ' is the case that holds the parts.'],
        ['The ', { text: 'thin slit', part: 'slit' }, ' is the small gap that lets a line of light in.'],
        ['The ', { text: 'split mirror', part: 'mirror' }, ' is the part that spreads the light into lines of color.'],
        ['The ', { text: 'small lens', part: 'lens' }, ' is the glass that points the light at the chip.']
      ]
    },
    {
      sentences: [
        ['The ', { text: 'read chip', part: 'chip' }, ' is the part that turns the light into numbers.'],
        ['The ', { text: 'lead wire', part: 'wire' }, ' takes the numbers to the computers.'],
        ['Each thing in the sky sends out its own lines of color.'],
        ['When those lines fall on the chip, the chip tells them apart.'],
        ['People read the numbers to find what the far thing is made of.'],
        ['A star, a rock, or a cloud each has its own line shape.']
      ]
    }
  ],
  flow: [
    { partIds: ['slit'], caption: 'The thin slit lets a line of light in', sentenceRef: 2 },
    { partIds: ['mirror'], caption: 'The split mirror spreads the light into lines of color', sentenceRef: 3 },
    { partIds: ['lens'], caption: 'The small lens points the light at the chip', sentenceRef: 4 },
    { partIds: ['chip'], caption: 'The read chip turns the light into numbers', sentenceRef: 5 }
  ],
  keyExpressions: [
    { text: 'thin slit', partId: 'slit' },
    { text: 'split mirror', partId: 'mirror' },
    { text: 'small lens', partId: 'lens' },
    { text: 'read chip', partId: 'chip' }
  ]
};
