import type { ThingData } from '../types'

export const trolley: ThingData = {
  id: 'trolley',
  slug: 'trolley',
  simpleName: 'The Push Cart',
  realName: 'Trolley',
  category: 'transport',
  funFacts: [
    'A push cart can carry many heavy things that a person can not carry by themselves.',
    'Some push carts have a special part that lets them turn very easily.',
    'Push carts are used in many places — from stores to hospitals to big buildings.',
  ],
  parts: [
    { id: 'cart-body', label: 'cart body', realName: 'Platform', position: [0, 0.04, 0], finish: 'hull' },
    { id: 'wheels', label: 'wheels', realName: 'Castors', position: [0, -0.10, 0], finish: 'cold' },
    { id: 'handle-bar', label: 'handle bar', realName: 'Push handle', position: [0, 0.14, -0.18], finish: 'titanium' },
    { id: 'lower part', label: 'lower part', realName: 'Shelf', position: [0, 0.10, 0], finish: 'hull' },
    { id: 'side-walls', label: 'side walls', realName: 'Side rails', position: [0, 0.08, 0.10], finish: 'hull' },
    { id: 'front-edge', label: 'front edge', realName: 'Lip', position: [0, 0.02, 0.18], finish: 'warning' },
    { id: 'brake', label: 'brake', realName: 'Brake', position: [0, -0.10, -0.14], finish: 'warning' },
  ],
  article: [
    {
      sentences: [
        [
          'This is a ',
          { text: 'push cart', dict: 'trolley' },
          '. It is a flat thing on wheels that you push to carry heavy things from one place to another.',
        ],
      ],
    },
    {
      sentences: [
        [
          'The ',
          { text: 'cart body', part: 'cart-body' },
          ' is the flat part where you put things.',
        ],
        [
          'It has ',
          { text: 'side walls', part: 'side-walls' },
          ' that stop things from falling off the sides.',
        ],
      ],
    },
    {
      sentences: [
        [
          'Under the cart body are ',
          { text: 'wheels', part: 'wheels' },
          ' that let the cart move easily.',
        ],
        ['Some wheels can turn all the way around so the cart can go in any way.'],
      ],
    },
    {
      sentences: [
        [
          'At the back, the ',
          { text: 'handle bar', part: 'handle-bar' },
          ' is what you hold to push the cart.',
        ],
        [
          'The ',
          { text: 'lower part', part: 'lower part' },
          ' under the cart body gives more space to put things.',
        ],
      ],
    },
    {
      sentences: [
        [
          'At the front, the ',
          { text: 'front edge', part: 'front-edge' },
          ' is a little bit raised to stop things from sliding off.',
        ],
        [
          'The ',
          { text: 'brake', part: 'brake' },
          ' at the back stops the cart from moving when you do not want it to.',
        ],
      ],
    },
    {
      sentences: [
        ['To use the push cart, you put things on it and push the handle bar.'],
        ['The wheels make it easy to move very heavy things without getting tried.'],
        ['When you stop, you push the brake down so the cart stays in one place.'],
      ],
    },
  ],
  flow: [
    { partIds: ['cart-body', 'side-walls'], sentenceRef: 1, caption: 'The cart body is the flat part with side walls.' },
    { partIds: ['wheels'], sentenceRef: 4, caption: 'Wheels under the cart let it move easily.' },
    { partIds: ['handle-bar', 'lower part'], sentenceRef: 6, caption: 'The handle bar is what you push; the lower part gives more space.' },
    { partIds: ['front-edge', 'brake'], sentenceRef: 8, caption: 'The front edge stops things sliding; the brake stops the cart.' },
    { partIds: ['handle-bar', 'wheels'], sentenceRef: 10, caption: 'Push the handle bar; wheels make it easy to move.' },
  ],
  keyExpressions: [
    { text: 'push cart', partId: 'cart-body' },
    { text: 'carry heavy things from one place to another', partId: 'cart-body' },
    { text: 'flat part where you put things', partId: 'cart-body' },
    { text: 'stop things from falling off the sides', partId: 'side-walls' },
    { text: 'wheels that let the cart move easily', partId: 'wheels' },
    { text: 'what you hold to push the cart', partId: 'handle-bar' },
    { text: 'stops the cart from moving', partId: 'brake' },
  ],
  color: '#D2B48C',
}