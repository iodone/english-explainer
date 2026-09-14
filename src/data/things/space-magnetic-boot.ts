import type { ThingData } from '../types';

export const spaceMagneticBoot: ThingData = {
  id: 'space-magnetic-boot',
  slug: 'space-magnetic-boot',
  simpleName: 'The Space Boot',
  realName: 'Magnetic Boot',
  category: 'space',
  color: '#696969',
  funFacts: [
    'These boots let people stick to the floor in space where there is no pull.',
    'They use a force that pulls metal things together to hold people down.',
    'People can turn them on and off with a small part on the side.',
    'Without them, people would just float away when they walk.',
    'They work on floors that have metal in them.',
    'Some people think they feel like walking with heavy things on your feet.'
  ],
  parts: [
    { id: 'body', label: 'Boot Body', realName: 'Boot Shell', position: [0, 0, 0], finish: 'hull' },
    { id: 'end', label: 'Toe Part', realName: 'Toe Cap', position: [0, 0, -0.15], finish: 'cold' },
    { id: 'top', label: 'Top Part', realName: 'Ankle Collar', position: [0, 0.12, 0], finish: 'titanium' },
    { id: 'sole', label: 'Bottom Part', realName: 'Magnetic Sole', position: [0, -0.06, 0], finish: 'warning' },
    { id: 'switch', label: 'On Off Part', realName: 'Activation Switch', position: [0.06, 0.05, -0.08], finish: 'titanium' },
    { id: 'power', label: 'Power Part', realName: 'Battery Pack', position: [0, 0.06, 0.08], finish: 'hull' }
  ],
  article: [
    {
      sentences: [
        ['These are boots that let people stick to the floor in space.'],
        ['The ', { text: 'body', part: 'body' }, ' is the hard outside that goes around the foot.'],
        ['The ', { text: 'end', part: 'end' }, ' is the part at the front that covers the toes.'],
        ['The ', { text: 'top', part: 'top' }, ' is the part that goes up around the leg.'],
        ['The ', { text: 'sole', part: 'sole' }, ' is the bottom part that sticks to metal floors.']
      ]
    },
    {
      sentences: [
        ['The ', { text: 'switch', part: 'switch' }, ' is a small part that turns the boots on and off.'],
        ['The ', { text: 'power', part: 'power' }, ' gives power to the bottom part so it can stick.'],
        ['When you turn the ', { text: 'switch', part: 'switch' }, ' on, the ', { text: 'sole', part: 'sole' }, ' starts to pull on the floor.'],
        ['This pull holds you down so you do not float away.'],
        ['The ', { text: 'body', part: 'body' }, ' keeps the foot safe and in the right place.'],
        ['These boots are very important for people who work outside the ship.']
      ]
    }
  ],
  flow: [
    { partIds: ['body', 'end'], caption: 'The boot goes around the foot', sentenceRef: 1 },
    { partIds: ['switch', 'power'], caption: 'The switch turns power on', sentenceRef: 6 },
    { partIds: ['sole'], caption: 'The bottom sticks to the metal floor', sentenceRef: 7 },
    { partIds: ['top'], caption: 'The top keeps the leg in place', sentenceRef: 3 }
  ],
  keyExpressions: [
    { text: 'magnetic boot', partId: 'body' },
    { text: 'magnetic sole', partId: 'sole' },
    { text: 'activation switch', partId: 'switch' },
    { text: 'battery pack', partId: 'power' }
  ]
};
