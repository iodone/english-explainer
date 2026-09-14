import type { ThingData } from '../types';

export const powerGrounding: ThingData = {
  id: 'power-grounding',
  slug: 'power-grounding',
  simpleName: 'The Earth Wire',
  realName: 'Grounding',
  category: 'power',
  color: '#228B22',
  funFacts: [
    'This wire gives power a safe way out of a building.',
    'It takes power down into the ground, where it cannot hurt anyone.',
    'Every building with power needs a wire like this one.',
    'The rod must go deep into the ground, or it will not work well.',
    'It also stops a small bad spot from making a big fire.',
    'People check this wire often, because a broken wire is not safe.'
  ],
  parts: [
    { id: 'rod', label: 'Long Rod', realName: 'Ground Rod', position: [0, -0.24, 0], finish: 'hull' },
    { id: 'wire', label: 'Earth Wire', realName: 'Ground Wire', position: [0, 0.15, 0], finish: 'hull' },
    { id: 'clamp', label: 'Hold Clamp', realName: 'Cable Clamp', position: [0, 0.02, 0], finish: 'titanium' },
    { id: 'hole', label: 'Deep Hole', realName: 'Ground Hole', position: [0, -0.05, 0], finish: 'cold' },
    { id: 'bus', label: 'Meet Bar', realName: 'Busbar Joint', position: [0, 0.34, 0], finish: 'titanium' },
    { id: 'sign', label: 'Safe Sign', realName: 'Warning Sign', position: [0.24, 0.3, 0], finish: 'warning' }
  ],
  article: [
    {
      sentences: [
        ['This wire takes power that goes the wrong way down into the ground.'],
        ['The ', { text: 'long rod', part: 'rod' }, ' goes deep into the ground under the floor.'],
        ['The ', { text: 'earth wire', part: 'wire' }, ' carries power from the building down to the rod.'],
        ['The ', { text: 'hold clamp', part: 'clamp' }, ' holds the wire on the rod so it cannot come off.'],
        ['The ', { text: 'deep hole', part: 'hole' }, ' is the place in the ground where the rod sits.']
      ]
    },
    {
      sentences: [
        ['The ', { text: 'meet bar', part: 'bus' }, ' is where many wires come together and go down.'],
        ['The ', { text: 'safe sign', part: 'sign' }, ' tells people what this wire is for.'],
        ['When power goes the wrong way, it runs down this wire and not into a person.'],
        ['The ground can take a lot of power and it keeps it away from people.'],
        ['Every building with power needs one of these wires to be safe.'],
        ['People must not pull this wire out, or the power can hurt them.']
      ]
    }
  ],
  flow: [
    { partIds: ['rod'], caption: 'The long rod goes deep into the ground', sentenceRef: 1 },
    { partIds: ['wire'], caption: 'The earth wire carries power down to the rod', sentenceRef: 2 },
    { partIds: ['clamp'], caption: 'The hold clamp keeps the wire on the rod', sentenceRef: 3 },
    { partIds: ['bus'], caption: 'The meet bar is where many wires come together', sentenceRef: 5 }
  ],
  keyExpressions: [
    { text: 'earth wire', partId: 'wire' },
    { text: 'long rod', partId: 'rod' },
    { text: 'hold clamp', partId: 'clamp' },
    { text: 'meet bar', partId: 'bus' }
  ]
};
