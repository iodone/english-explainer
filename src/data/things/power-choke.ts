import type { ThingData } from '../types';

export const powerChoke: ThingData = {
  id: 'power-choke',
  slug: 'power-choke',
  simpleName: 'The Slow Power Thing',
  realName: 'Power Choke',
  category: 'power',
  color: '#4682B4',
  funFacts: [
    'This part can slow a quick jump in power.',
    'It is made of wire that turns round and round.',
    'A wire like this can store a little power for a short time.',
    'It has no parts that move, so it can work for many years.',
    'You can find one in many things that use power at home.',
    'It helps other parts last longer by keeping power calm.'
  ],
  parts: [
    { id: 'body', label: 'Wire Body', realName: 'Wire Coil', position: [0, 0, 0], finish: 'hull' },
    { id: 'end', label: 'Wire End', realName: 'Lead Wire', position: [-0.3, 0, 0], finish: 'cold' },
    { id: 'top', label: 'Hard Top', realName: 'Iron Core', position: [0, 0.08, 0], finish: 'titanium' },
    { id: 'inside', label: 'Open Middle', realName: 'Center Gap', position: [0, 0, 0], finish: 'warning' },
    { id: 'plug', label: 'Power In', realName: 'Input Lead', position: [-0.18, 0, 0], finish: 'titanium' },
    { id: 'power', label: 'Power Out', realName: 'Output Lead', position: [0.18, 0, 0], finish: 'cold' }
  ],
  article: [
    {
      sentences: [
        ['This is a part that slows power down for a short time.'],
        ['The ', { text: 'body', part: 'body' }, ' is a long wire that turns round and round.'],
        ['The ', { text: 'end', part: 'end' }, ' is where the wire meets the line from the wall.'],
        ['The ', { text: 'top', part: 'top' }, ' is a hard piece that helps the wire do its work.'],
        ['The ', { text: 'inside', part: 'inside' }, ' is the open space in the middle of the wire.']
      ]
    },
    {
      sentences: [
        ['The ', { text: 'plug', part: 'plug' }, ' takes power in from the wall.'],
        ['The ', { text: 'power', part: 'power' }, ' goes out to the rest of the room.'],
        ['When power first comes in, the ', { text: 'body', part: 'body' }, ' holds it back for a bit.'],
        ['This stops quick jumps in power from going through.'],
        ['Then the power moves on in a slow, even way.'],
        ['A wire like this can also store a little power for a short time.']
      ]
    }
  ],
  flow: [
    { partIds: ['plug', 'end'], caption: 'Power comes in from the wall', sentenceRef: 5 },
    { partIds: ['body', 'inside'], caption: 'The wire holds power back for a bit', sentenceRef: 7 },
    { partIds: ['top'], caption: 'The hard piece helps the wire work', sentenceRef: 3 },
    { partIds: ['power'], caption: 'Slow power goes out to the room', sentenceRef: 9 }
  ],
  keyExpressions: [
    { text: 'power choke', partId: 'body' },
    { text: 'wire coil', partId: 'body' },
    { text: 'iron core', partId: 'top' },
    { text: 'input lead', partId: 'plug' }
  ]
};
