import type { ThingData } from '../types';

export const powerHeatSink: ThingData = {
  id: 'power-heat-sink',
  slug: 'power-heat-sink',
  simpleName: 'The Cool Thing',
  realName: 'Heat Sink',
  category: 'power',
  color: '#C0C0C0',
  funFacts: [
    'A heat sink takes heat away from a part that works very hard.',
    'The fins give the metal a big area to touch the air.',
    'Some have a small fan that blows air over the fins.',
    'It is made of metal, because metal takes heat away very well.',
    'Without it, a hot part would break in a very short time.',
    'These blocks are found on computers, lights, and power parts.'
  ],
  parts: [
    { id: 'plate', label: 'Touch Plate', realName: 'Mounting Plate', position: [0, -0.16, 0], finish: 'hull' },
    { id: 'fin', label: 'Cool Fins', realName: 'Heat Fins', position: [0.16, -0.03, 0], finish: 'hull' },
    { id: 'top', label: 'Flat Top', realName: 'Top Cap', position: [0, 0.09, 0], finish: 'cold' },
    { id: 'part', label: 'Hot Part', realName: 'Hot Device', position: [0, -0.23, 0], finish: 'warning' },
    { id: 'clip', label: 'Hold Clip', realName: 'Spring Clip', position: [0.24, -0.2, 0], finish: 'titanium' },
    { id: 'hole', label: 'Screw Holes', realName: 'Bolt Holes', position: [0.18, -0.16, 0.14], finish: 'titanium' }
  ],
  article: [
    {
      sentences: [
        ['This block of metal takes heat away from a hot part so it does not break.'],
        ['The ', { text: 'touch plate', part: 'plate' }, ' is the flat side that sits on the hot part.'],
        ['The ', { text: 'cool fins', part: 'fin' }, ' are the thin walls that give out the heat.'],
        ['The ', { text: 'flat top', part: 'top' }, ' is the bar that holds all the fins together.'],
        ['The ', { text: 'hot part', part: 'part' }, ' is the thing that gets hot when it works.']
      ]
    },
    {
      sentences: [
        ['The ', { text: 'hold clip', part: 'clip' }, ' keeps the block on the part so it does not fall off.'],
        ['The ', { text: 'screw holes', part: 'hole' }, ' are where screws hold the block in place.'],
        ['Heat goes from the hot part into the metal and then into the air.'],
        ['The fins give the metal more room to touch the air.'],
        ['More room for the air means the part stays cool and works for many years.'],
        ['People use these blocks on computers, lights, and power parts.']
      ]
    }
  ],
  flow: [
    { partIds: ['fin'], caption: 'The cool fins give out the heat', sentenceRef: 2 },
    { partIds: ['plate'], caption: 'The touch plate sits on the hot part', sentenceRef: 1 },
    { partIds: ['clip'], caption: 'The hold clip keeps the block on the part', sentenceRef: 5 },
    { partIds: ['top'], caption: 'The flat top holds the fins together', sentenceRef: 3 }
  ],
  keyExpressions: [
    { text: 'touch plate', partId: 'plate' },
    { text: 'cool fins', partId: 'fin' },
    { text: 'hold clip', partId: 'clip' },
    { text: 'flat top', partId: 'top' }
  ]
};
