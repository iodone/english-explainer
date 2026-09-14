import type { ThingData } from '../types';

export const spaceRadiationVest: ThingData = {
  id: 'space-radiation-vest',
  slug: 'space-radiation-vest',
  simpleName: 'The Space Safe Coat',
  realName: 'Radiation Protection Vest',
  category: 'space',
  color: '#696969',
  funFacts: [
    'This coat keeps people safe from bad light in space that you cannot see.',
    'It is made of special stuff that stops the bad light from getting to the body.',
    'People wear it when they go outside the ship where the bad light is very strong.',
    'Without it, the bad light could make people sick over time.',
    'It is not heavy so people can still move and work well while wearing it.',
    'Some of these coats can also keep people safe from very small things that fly through space.'
  ],
  parts: [
    { id: 'body', label: 'Vest Body', realName: 'Vest Shell', position: [0, 0, 0], finish: 'hull' },
    { id: 'end', label: 'Neck Part', realName: 'Neck Collar', position: [0, 0.15, 0], finish: 'cold' },
    { id: 'top', label: 'Shoulder Part', realName: 'Shoulder Guard', position: [0, 0.12, -0.08], finish: 'titanium' },
    { id: 'inside', label: 'Safe Layer', realName: 'Shield Layer', position: [0, 0, 0], finish: 'warning' },
    { id: 'front', label: 'Front Part', realName: 'Front Panel', position: [0, 0, -0.08], finish: 'titanium' },
    { id: 'close', label: 'Close Part', realName: 'Closure System', position: [0, 0, -0.1], finish: 'hull' }
  ],
  article: [
    {
      sentences: [
        ['This is a coat that keeps people safe from bad light in space.'],
        ['The ', { text: 'body', part: 'body' }, ' is the main part that goes around the body.'],
        ['The ', { text: 'end', part: 'end' }, ' is the part that goes around the neck.'],
        ['The ', { text: 'top', part: 'top' }, ' is the part that sits on the shoulders.'],
        ['The ', { text: 'inside', part: 'inside' }, ' is the layer that stops the bad light.']
      ]
    },
    {
      sentences: [
        ['The ', { text: 'front', part: 'front' }, ' is the part on the chest that keeps the heart safe.'],
        ['The ', { text: 'close', part: 'close' }, ' is the part that holds the coat shut.'],
        ['When people go outside the ship, they put on this ', { text: 'body', part: 'body' }, '.'],
        ['The ', { text: 'inside', part: 'inside' }, ' stops the bad light from getting to the skin.'],
        ['The ', { text: 'top', part: 'top' }, ' keeps the shoulders safe from light coming from above.'],
        ['This coat is very important for keeping people safe when they work outside.']
      ]
    }
  ],
  flow: [
    { partIds: ['body', 'inside'], caption: 'The vest has a layer that stops bad light', sentenceRef: 4 },
    { partIds: ['end', 'top'], caption: 'The neck and shoulder parts keep the top safe', sentenceRef: 2 },
    { partIds: ['front'], caption: 'The front keeps the heart safe', sentenceRef: 5 },
    { partIds: ['close'], caption: 'The close part holds it shut', sentenceRef: 6 }
  ],
  keyExpressions: [
    { text: 'radiation vest', partId: 'body' },
    { text: 'shield layer', partId: 'inside' },
    { text: 'shoulder guard', partId: 'top' },
    { text: 'closure system', partId: 'close' }
  ]
};
