import type { ThingData } from '../types';

export const spaceStarTracker: ThingData = {
  id: 'space-star-tracker',
  slug: 'space-star-tracker',
  simpleName: 'The Star Finder',
  realName: 'Star Tracker',
  category: 'space',
  color: '#191970',
  funFacts: [
    'This small box looks at the stars and tells the ship which way it is turned.',
    'It takes a picture of the sky and finds the same stars each time.',
    'A small chip inside knows the place of many bright stars.',
    'The hood keeps other light out of the glass eye.',
    'The ship turns until the picture in the box and the chip agree.',
    'It is much lighter than a heavy wheel that turns all the time.'
  ],
  parts: [
    { id: 'lens', label: 'Glass Eye', realName: 'Lens', position: [0, 0, 0.12], finish: 'titanium' },
    { id: 'chip', label: 'Star Chip', realName: 'Sensor Chip', position: [0, 0, 0], finish: 'warning' },
    { id: 'hood', label: 'Light Hood', realName: 'Sun Shade', position: [0, 0, 0.18], finish: 'hull' },
    { id: 'plate', label: 'Hold Plate', realName: 'Mount Plate', position: [0, -0.16, 0], finish: 'hull' },
    { id: 'wire', label: 'Lead Wire', realName: 'Data Line', position: [0, 0.08, -0.2], finish: 'cold' },
    { id: 'shutter', label: 'Shut Door', realName: 'Shutter', position: [0, 0.15, 0.2], finish: 'cold' }
  ],
  article: [
    {
      sentences: [
        ['A ship in space must know which way it is turned at all times.'],
        ['The ', { text: 'glass eye', part: 'lens' }, ' is the round glass that takes in the light of the stars.'],
        ['The ', { text: 'star chip', part: 'chip' }, ' is the small part that knows many star places.'],
        ['The ', { text: 'light hood', part: 'hood' }, ' is the short tube that keeps other light off the glass.'],
        ['The ', { text: 'hold plate', part: 'plate' }, ' is the plate that holds the box on the ship.']
      ]
    },
    {
      sentences: [
        ['The ', { text: 'lead wire', part: 'wire' }, ' takes the answer to the small computers.'],
        ['The ', { text: 'shut door', part: 'shutter' }, ' is the part that closes when the sun is in front.'],
        ['The glass eye takes a picture of the sky and the star chip reads it.'],
        ['The chip finds the same stars and works out which way the ship is turned.'],
        ['The box sends that answer down the wire to the computers.'],
        ['The shut door closes when bright sun light would hurt the chip.']
      ]
    }
  ],
  flow: [
    { partIds: ['lens'], caption: 'The glass eye takes in the star light', sentenceRef: 1 },
    { partIds: ['chip'], caption: 'The star chip knows many star places', sentenceRef: 2 },
    { partIds: ['hood'], caption: 'The light hood keeps other light off the glass', sentenceRef: 3 },
    { partIds: ['plate'], caption: 'The hold plate holds the box on the ship', sentenceRef: 4 }
  ],
  keyExpressions: [
    { text: 'glass eye', partId: 'lens' },
    { text: 'star chip', partId: 'chip' },
    { text: 'light hood', partId: 'hood' },
    { text: 'hold plate', partId: 'plate' }
  ]
};
