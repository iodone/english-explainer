import type { ThingData } from '../types';

export const powerDinRail: ThingData = {
  id: 'power-din-rail',
  slug: 'power-din-rail',
  simpleName: 'The Metal Track',
  realName: 'DIN Rail',
  category: 'power',
  color: '#808080',
  funFacts: [
    'This is a metal track that holds many power parts in a row.',
    'It was made so people could put power parts in fast and take them out easy.',
    'You can find it in big boxes that control power for a whole building.',
    'The track is the same size all over the world so parts fit everywhere.',
    'It can hold many parts next to each other in a small space.',
    'People use it to keep power parts safe and in order.'
  ],
  parts: [
    { id: 'body', label: 'Long Track', realName: 'Rail Profile', position: [0, 0, 0], finish: 'hull' },
    { id: 'end', label: 'End Stop', realName: 'End Clip', position: [0, 0, -0.35], finish: 'cold' },
    { id: 'top', label: 'Top Part', realName: 'Top Hat Section', position: [0, 0.06, 0], finish: 'titanium' },
    { id: 'mount', label: 'Wall Part', realName: 'Mounting Tab', position: [0, -0.06, 0], finish: 'warning' },
    { id: 'slot', label: 'Hold Part', realName: 'Clip Channel', position: [0, 0.03, 0], finish: 'titanium' },
    { id: 'side', label: 'Side Wall', realName: 'Retention Lip', position: [0.03, 0.04, 0], finish: 'hull' }
  ],
  article: [
    {
      sentences: [
        ['This is a metal track that holds many power parts in a row.'],
        ['The ', { text: 'body', part: 'body' }, ' is the long piece of metal that everything sits on.'],
        ['The ', { text: 'end', part: 'end' }, ' is a small part that stops things from falling off the end.'],
        ['The ', { text: 'top', part: 'top' }, ' is the part that sticks up and holds the parts on.'],
        ['The ', { text: 'mount', part: 'mount' }, ' is how it joins to the wall or box.']
      ]
    },
    {
      sentences: [
        ['The ', { text: 'hold', part: 'slot' }, ' is the space where parts push onto the track.'],
        ['The ', { text: 'side', part: 'side' }, ' is a wall that stops parts from moving to the side.'],
        ['People put power parts on the ', { text: 'body', part: 'body' }, ' by pushing them onto the ', { text: 'top', part: 'top' }, '.'],
        ['The parts push into the ', { text: 'hold', part: 'slot' }, ' and stay in place.'],
        ['The ', { text: 'side', part: 'side' }, ' keeps them from moving when the ship or building moves.'],
        ['This track makes it easy to put many power parts in a small space.']
      ]
    }
  ],
  flow: [
    { partIds: ['mount', 'body'], caption: 'The track is joined to the wall', sentenceRef: 4 },
    { partIds: ['top', 'slot'], caption: 'Parts push onto the track', sentenceRef: 7 },
    { partIds: ['side'], caption: 'The wall keeps parts from moving', sentenceRef: 9 },
    { partIds: ['end'], caption: 'The end stop keeps parts on', sentenceRef: 2 }
  ],
  keyExpressions: [
    { text: 'DIN rail', partId: 'body' },
    { text: 'rail profile', partId: 'body' },
    { text: 'top hat section', partId: 'top' },
    { text: 'clip channel', partId: 'slot' }
  ]
};
