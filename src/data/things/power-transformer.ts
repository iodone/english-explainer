import type { ThingData } from '../types';

export const powerTransformer: ThingData = {
  id: 'power-transformer',
  slug: 'power-transformer',
  simpleName: 'The Power Changer',
  realName: 'Transformer',
  category: 'power',
  color: '#708090',
  funFacts: [
    'This thing changes how strong the power is.',
    'It can make power big or small.',
    'It uses two groups of wire to change the power.',
    'You can see big ones on the ground outside.',
    'It works because of how things that pull things work.',
    'It does not have any parts that move.'
  ],
  parts: [
    { id: 'body', label: 'body', realName: 'tank', position: [0, 0, 0], finish: 'hull' },
    { id: 'end', label: 'end', realName: 'base', position: [0, -0.15, 0], finish: 'cold' },
    { id: 'top', label: 'top', realName: 'bushing', position: [0, 0.15, 0], finish: 'cold' },
    { id: 'inside', label: 'inside', realName: 'core', position: [0, 0, 0], finish: 'warning' },
    { id: 'plug', label: 'plug', realName: 'insulator', position: [0, -0.185, 0], finish: 'titanium' },
    { id: 'power', label: 'power', realName: 'winding', position: [-0.19, 0, 0], finish: 'warning' }
  ],
  article: [
    {
      sentences: [
        ['This thing changes how big the ', { text: 'power', part: 'power', dict: 'voltage' }, ' is.'],
        ['It makes the power from the wall big or small.'],
        ['It is a ', { text: 'body', part: 'body' }, ' with two groups of wire ', { text: 'inside', part: 'inside', dict: 'coil' }, '.'],
        ['You put the ', { text: 'plug', part: 'plug' }, ' into the wall and it changes the power.']
      ]
    },
    {
      sentences: [
        ['When you want to use a thing that needs different power, you use this.'],
        ['You put the ', { text: 'plug', part: 'plug' }, ' into the wall.'],
        ['The power goes into the first group of wire ', { text: 'inside', part: 'inside' }, '.'],
        ['This makes the ', { text: 'inside', part: 'inside' }, ' metal get strong pulling power.'],
        ['The strong pulling power makes power in the second group of wire.'],
        ['The ', { text: 'top', part: 'top' }, ' and ', { text: 'end', part: 'end' }, ' hold everything in place.'],
        ['This makes the ', { text: 'power', part: 'power' }, ' coming out big or small.']
      ]
    }
  ],
  flow: [
    { partIds: ['plug'], caption: 'Power goes into the plug', sentenceRef: 1 },
    { partIds: ['inside'], caption: 'The inside wire makes the metal get pulling power', sentenceRef: 3 },
    { partIds: ['body'], caption: 'The pulling power makes power in the other wire', sentenceRef: 4 },
    { partIds: ['power'], caption: 'The new power comes out', sentenceRef: 6 }
  ],
  keyExpressions: [
    { text: 'transformer', partId: 'body' },
    { text: 'coil', partId: 'inside' },
    { text: 'voltage', partId: 'power' },
    { text: 'magnetic', partId: 'end' }
  ]
};