import type { ThingData } from '../types';

export const powerWaveAnalyzer: ThingData = {
  id: 'power-wave-analyzer',
  slug: 'power-wave-analyzer',
  simpleName: 'The Wave Reader',
  realName: 'Wave Analyzer',
  category: 'power',
  color: '#6A7FA8',
  funFacts: [
    'This box can take a very big number of looks at a wave in one second.',
    'A clean power wave goes up and down in a round shape, over and over.',
    'If the shape is bent or has hard turns, some machine is not well.',
    'People who fix power lines carry a small one in a bag.',
    'Some of these boxes can send the picture to a computer for later study.',
    'The first ones were as big as a table and used many hot tubes.'
  ],
  parts: [
    { id: 'screen', label: 'Wave Screen', realName: 'Display', position: [0, 0.11, 0.13], finish: 'hull' },
    { id: 'input', label: 'Input Wire', realName: 'Input Terminal', position: [-0.58, -0.2, 0.05], finish: 'cold' },
    { id: 'chip', label: 'Small Brain', realName: 'Processor', position: [-0.24, -0.2, 0.14], finish: 'hull' },
    { id: 'case', label: 'Case', realName: 'Case', position: [0, -0.05, -0.1], finish: 'titanium' },
    { id: 'alarm', label: 'Red Light', realName: 'Alarm Light', position: [0.44, 0.24, 0.13], finish: 'warning' },
    { id: 'knob', label: 'Turn Knob', realName: 'Range Knob', position: [0.4, -0.2, 0.14], finish: 'titanium' }
  ],
  article: [
    {
      sentences: [
        ['This box shows the shape of a power wave on a screen.'],
        ['The ', { text: 'input wire', part: 'input' }, ' brings the wave in from the power line.'],
        ['The ', { text: 'small brain', part: 'chip' }, ' takes many quick looks at the wave each second.'],
        ['The ', { text: 'wave screen', part: 'screen' }, ' draws the shape as a line that goes up and down.'],
        ['A good wave has a clean shape, and a bad wave looks bent or broken.']
      ]
    },
    {
      sentences: [
        ['The ', { text: 'turn knob', part: 'knob' }, ' lets you look at a big or a small part of the wave.'],
        ['The ', { text: 'case', part: 'case' }, ' keeps the parts safe and blocks outside noise.'],
        ['When the shape is not right, the ', { text: 'red light', part: 'alarm' }, ' comes on.'],
        ['People use this box to find why a machine does not run well.'],
        ['They can see at once if the wave is too big or too small.'],
        ['That helps them fix the problem before a part burns out.']
      ]
    }
  ],
  flow: [
    { partIds: ['input'], caption: 'The input wire brings the wave in from the power line', sentenceRef: 1 },
    { partIds: ['chip'], caption: 'The small brain takes many quick looks at the wave each second', sentenceRef: 2 },
    { partIds: ['screen'], caption: 'The wave screen draws the shape as a line that goes up and down', sentenceRef: 3 },
    { partIds: ['alarm'], caption: 'When the shape is not right, the red light comes on', sentenceRef: 7 }
  ],
  keyExpressions: [
    { text: 'input wire', partId: 'input' },
    { text: 'small brain', partId: 'chip' },
    { text: 'wave screen', partId: 'screen' },
    { text: 'red light', partId: 'alarm' }
  ]
};
