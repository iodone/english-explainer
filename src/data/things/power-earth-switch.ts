import type { ThingData } from '../types';

export const powerEarthSwitch: ThingData = {
  id: 'power-earth-switch',
  slug: 'power-earth-switch',
  simpleName: 'The Ground Switch',
  realName: 'Earth Switch',
  category: 'power',
  color: '#228B22',
  funFacts: [
    'This switch takes the power out of a line and sends it into the ground.',
    'People use it before they work on a line, so the line is safe to touch.',
    'The blade turns down and touches the earth bar with a loud sound.',
    'It is made to take a very big push of power for a short time.',
    'You can see if the blade is open or shut through a small window.',
    'The handle is long, so your hand stays far from the live parts.'
  ],
  parts: [
    { id: 'blade', label: 'Turn Blade', realName: 'Switch Blade', position: [0.02, 0.26, 0], finish: 'titanium' },
    { id: 'post', label: 'Line Post', realName: 'Terminal Post', position: [-0.1, 0.19, 0], finish: 'hull' },
    { id: 'bar', label: 'Earth Bar', realName: 'Ground Bar', position: [0, -0.35, 0], finish: 'titanium' },
    { id: 'case', label: 'Main Case', realName: 'Switch Case', position: [0, 0, 0], finish: 'hull' },
    { id: 'handle', label: 'Pull Handle', realName: 'Operating Handle', position: [0.3, 0.16, 0], finish: 'hull' },
    { id: 'stop', label: 'End Stop', realName: 'End Stop', position: [-0.18, 0.22, 0], finish: 'warning' }
  ],
  article: [
    {
      sentences: [
        ['This switch sends the power in a line down into the ground.'],
        ['The ', { text: 'turn blade', part: 'blade' }, ' is the long metal part that turns down.'],
        ['The ', { text: 'line post', part: 'post' }, ' is where the power line joins the switch.'],
        ['The ', { text: 'earth bar', part: 'bar' }, ' is the metal bar that goes down into the ground.'],
        ['The ', { text: 'main case', part: 'case' }, ' is the box that holds the parts.']
      ]
    },
    {
      sentences: [
        ['The ', { text: 'pull handle', part: 'handle' }, ' is the long part you pull to turn the blade.'],
        ['The ', { text: 'end stop', part: 'stop' }, ' is the part that stops the blade at the end.'],
        ['People pull the handle down before they work on the line.'],
        ['The blade touches the earth bar and the power goes into the ground.'],
        ['You can look through a small window and see if the blade is down.'],
        ['The line is safe to touch only after the blade is all the way down.']
      ]
    }
  ],
  flow: [
    { partIds: ['blade'], caption: 'The turn blade turns down', sentenceRef: 1 },
    { partIds: ['post'], caption: 'The line post joins the power line', sentenceRef: 2 },
    { partIds: ['bar'], caption: 'The earth bar goes into the ground', sentenceRef: 3 },
    { partIds: ['handle'], caption: 'The pull handle turns the blade', sentenceRef: 5 }
  ],
  keyExpressions: [
    { text: 'turn blade', partId: 'blade' },
    { text: 'line post', partId: 'post' },
    { text: 'earth bar', partId: 'bar' },
    { text: 'pull handle', partId: 'handle' }
  ]
};
