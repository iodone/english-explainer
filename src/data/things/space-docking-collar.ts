import type { ThingData } from '../types';

export const spaceDockingCollar: ThingData = {
  id: 'space-docking-collar',
  slug: 'space-docking-collar',
  simpleName: 'The Ship Lock',
  realName: 'Docking Collar',
  category: 'space',
  color: '#B4BCC4',
  funFacts: [
    'Ships that meet in space need a lock that does not let air out.',
    'The ring is made of strong metal so it does not bend.',
    'The lock arms can open and close many times.',
    'People must check the air seal before they open the door.',
    'If the air seal is bad, the two ships can not open their doors.',
    'Boxes of food and new parts come in through this door.'
  ],
  parts: [
    { id: 'ring', label: 'Big Ring', realName: 'Docking Ring', position: [0, 0, 0.15], finish: 'hull' },
    { id: 'latch', label: 'Lock Arms', realName: 'Latch', position: [0.4, 0, 0.1], finish: 'titanium' },
    { id: 'seal', label: 'Air Seal', realName: 'Seal', position: [0, 0, 0.05], finish: 'cold' },
    { id: 'guide', label: 'Guide Pin', realName: 'Guide Pin', position: [-0.3, 0.2, 0.12], finish: 'hull' },
    { id: 'port', label: 'Door', realName: 'Port', position: [0, 0, -0.1], finish: 'titanium' },
    { id: 'sensor', label: 'Near Finder', realName: 'Proximity Sensor', position: [0.2, -0.3, 0.08], finish: 'cold' }
  ],
  article: [
    {
      sentences: [
        ['This ring is on the front of a ship that carries people up to a station.'],
        ['The ', { text: 'big ring', part: 'ring' }, ' meets the same ring on the other ship and holds them together.'],
        ['The ', { text: 'lock arms', part: 'latch' }, ' pull the two ships close and lock them.'],
        ['The ', { text: 'air seal', part: 'seal' }, ' stops air from going out between the two ships.'],
        ['The ', { text: 'guide pin', part: 'guide' }, ' leads the ring into the right spot before the lock arms close.']
      ]
    },
    {
      sentences: [
        ['The ', { text: 'door', part: 'port' }, ' opens so people can walk from one ship to the other.'],
        ['The ', { text: 'near finder', part: 'sensor' }, ' tells the people inside how close the two ships are.'],
        ['The two ships must meet very slow so the ring is not bent.'],
        ['If the ring is bent, air can get out and that is very bad.'],
        ['A good lock lets people and boxes move from ship to ship with no space suit.'],
        ['This part looks simple, but it makes the whole station work.']
      ]
    }
  ],
  flow: [
    { partIds: ['guide'], caption: 'The guide pin leads the ring into the right spot before the lock arms close', sentenceRef: 4 },
    { partIds: ['latch'], caption: 'The lock arms pull the two ships close and lock them', sentenceRef: 2 },
    { partIds: ['seal'], caption: 'The air seal stops air from going out between the two ships', sentenceRef: 3 },
    { partIds: ['port'], caption: 'The door opens so people can walk from one ship to the other', sentenceRef: 5 }
  ],
  keyExpressions: [
    { text: 'big ring', partId: 'ring' },
    { text: 'lock arms', partId: 'latch' },
    { text: 'air seal', partId: 'seal' },
    { text: 'near finder', partId: 'sensor' }
  ]
};
