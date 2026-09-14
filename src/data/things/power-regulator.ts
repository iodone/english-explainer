import type { ThingData } from '../types';

export const powerRegulator: ThingData = {
  id: 'power-regulator',
  slug: 'power-regulator',
  simpleName: 'The Power Holder',
  realName: 'Voltage Regulator',
  category: 'power',
  color: '#808080',
  funFacts: [
    'This thing keeps the power at the same strength.',
    'It stops the power from going too high or too low.',
    'It is like a door that opens more or less to let the right power through.',
    'You can find it in many things that use power.',
    'It helps keep things from breaking because of too much power.',
    'It works all by itself without you doing anything.'
  ],
  parts: [
    { id: 'body', label: 'body', realName: 'housing', position: [0, 0, 0], finish: 'hull' },
    { id: 'end', label: 'end', realName: 'output', position: [0, -0.15, 0], finish: 'cold' },
    { id: 'top', label: 'top', realName: 'input', position: [0, 0.15, 0], finish: 'cold' },
    { id: 'inside', label: 'inside', realName: 'circuit', position: [0, 0, 0], finish: 'warning' },
    { id: 'plug', label: 'plug', realName: 'connector', position: [0.24, 0, 0], finish: 'titanium' },
    { id: 'power', label: 'power', realName: 'sensor', position: [-0.24, 0, 0], finish: 'warning' }
  ],
  article: [
    {
      sentences: [
        ['This thing keeps the power at the right strength.'],
        ['The ', { text: 'body', part: 'body' }, ' stops the power from getting too big or too small.'],
        ['It is a small box with a good ', { text: 'inside', part: 'inside', dict: 'circuit' }, '.'],
        ['The ', { text: 'inside', part: 'inside' }, ' watches the power all the time.']
      ]
    },
    {
      sentences: [
        ['When the power from the ', { text: 'top', part: 'top' }, ' changes, the ', { text: 'inside', part: 'inside' }, ' knows.'],
        ['If the power is too strong, the ', { text: 'inside', part: 'inside' }, ' makes it smaller.'],
        ['If the power is too small, the ', { text: 'inside', part: 'inside' }, ' makes it stronger.'],
        ['The ', { text: 'power', part: 'power' }, ' feels how strong the power is.'],
        ['The right power then goes out through the ', { text: 'end', part: 'end' }, '.'],
        ['The ', { text: 'plug', part: 'plug' }, ' joins it to the thing that needs the power.'],
        ['This way, the thing always gets the right power.']
      ]
    }
  ],
  flow: [
    { partIds: ['top'], caption: 'Power comes in through the top', sentenceRef: 0 },
    { partIds: ['power', 'inside'], caption: 'The sensor and circuit watch the power', sentenceRef: 3 },
    { partIds: ['end'], caption: 'The right power goes out through the end', sentenceRef: 4 },
    { partIds: ['plug'], caption: 'The connector sends power to the thing', sentenceRef: 5 }
  ],
  keyExpressions: [
    { text: 'regulator', partId: 'body' },
    { text: 'circuit', partId: 'inside' },
    { text: 'sensor', partId: 'power' },
    { text: 'voltage', partId: 'end' }
  ]
};