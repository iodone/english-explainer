import type { ThingData } from '../types';

export const spaceThruster: ThingData = {
  id: 'space-thruster',
  slug: 'space-thruster',
  simpleName: 'The Push Thing',
  realName: 'Thruster',
  category: 'space',
  color: '#808080',
  funFacts: [
    'A thruster can push a ship even when there is no air in space.',
    'The gas it makes is very hot, but it comes out in a very short time.',
    'A small thruster can push a very big ship a little bit at a time.',
    'Ships use these to turn and to stop, not only to go fast.',
    'The gas comes out one way and pushes the ship the other way.',
    'These things must work after many years in the cold of space.'
  ],
  parts: [
    { id: 'bell', label: 'Bell Mouth', realName: 'Nozzle Bell', position: [0, -0.16, 0], finish: 'hull' },
    { id: 'chamber', label: 'Burn Box', realName: 'Thrust Chamber', position: [0, 0.04, 0], finish: 'titanium' },
    { id: 'feed', label: 'Feed Pipes', realName: 'Propellant Lines', position: [-0.16, 0.2, 0], finish: 'hull' },
    { id: 'valve', label: 'Turn Valve', realName: 'Control Valve', position: [0.16, 0.2, 0], finish: 'warning' },
    { id: 'spark', label: 'Start Spark', realName: 'Igniter', position: [0.1, 0.08, 0], finish: 'cold' },
    { id: 'mount', label: 'Hold Ring', realName: 'Mounting Ring', position: [0, 0.22, 0], finish: 'titanium' }
  ],
  article: [
    {
      sentences: [
        ['This thing pushes a ship through space with a very hot gas.'],
        ['The ', { text: 'burn box', part: 'chamber' }, ' is where the gas is made and gets very hot.'],
        ['The ', { text: 'bell mouth', part: 'bell' }, ' is the wide open end where the gas comes out.'],
        ['The ', { text: 'feed pipes', part: 'feed' }, ' bring in the two things it burns.'],
        ['The ', { text: 'turn valve', part: 'valve' }, ' opens and shuts to let the right bit of gas in.']
      ]
    },
    {
      sentences: [
        ['The ', { text: 'start spark', part: 'spark' }, ' lights the gas when the ship needs a push.'],
        ['The ', { text: 'hold ring', part: 'mount' }, ' holds the whole thing on the ship.'],
        ['Hot gas goes out one way, and the ship moves the other way.'],
        ['In space there is no air to push on, so the ship must carry its own air with it.'],
        ['A small push goes a long way when nothing slows the ship down.'],
        ['These small engines help a ship turn, stop, and start again.']
      ]
    }
  ],
  flow: [
    { partIds: ['feed'], caption: 'The feed pipes bring in what the fire burns', sentenceRef: 3 },
    { partIds: ['valve'], caption: 'The turn valve lets the right bit of gas in', sentenceRef: 4 },
    { partIds: ['bell'], caption: 'The bell mouth is where the hot gas comes out', sentenceRef: 2 },
    { partIds: ['mount'], caption: 'The hold ring holds it on the ship', sentenceRef: 6 }
  ],
  keyExpressions: [
    { text: 'bell mouth', partId: 'bell' },
    { text: 'burn box', partId: 'chamber' },
    { text: 'feed pipes', partId: 'feed' },
    { text: 'hold ring', partId: 'mount' }
  ]
};
