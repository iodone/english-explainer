import type { ThingData } from '../types';

export const spaceGyroscope: ThingData = {
  id: 'space-gyroscope',
  slug: 'space-gyroscope',
  simpleName: 'The Spin Keeper',
  realName: 'Gyroscope',
  category: 'space',
  color: '#4682B4',
  funFacts: [
    'This box keeps the same way in space while the ship turns around it.',
    'A heavy wheel inside turns very fast, all day and night.',
    'A wheel that turns fast does not want to change the way it points.',
    'The ship can turn, and the wheel still points the same way.',
    'A small part reads how much the ship has turned.',
    'People use it with star pictures, so a ship knows which way it is going.'
  ],
  parts: [
    { id: 'body', label: 'Main Body', realName: 'Gyro Case', position: [0, 0, 0], finish: 'hull' },
    { id: 'wheel', label: 'Spin Wheel', realName: 'Rotor', position: [0, 0.02, 0], finish: 'titanium' },
    { id: 'motor', label: 'Spin Motor', realName: 'Spin Motor', position: [-0.2, 0.02, 0], finish: 'cold' },
    { id: 'frame', label: 'Hold Frame', realName: 'Gimbal Frame', position: [0, 0.02, 0], finish: 'hull' },
    { id: 'sensor', label: 'Turn Sense', realName: 'Pickoff Sensor', position: [0.16, 0.02, 0], finish: 'titanium' },
    { id: 'wire', label: 'Lead Wire', realName: 'Lead Line', position: [0.2, -0.1, 0], finish: 'warning' }
  ],
  article: [
    {
      sentences: [
        ['A ship in space must know which way it is turned, even when it turns fast.'],
        ['The ', { text: 'main body', part: 'body' }, ' is the strong box that holds all the parts.'],
        ['The ', { text: 'spin wheel', part: 'wheel' }, ' is the heavy wheel that turns inside the body.'],
        ['The ', { text: 'spin motor', part: 'motor' }, ' is the part that makes the wheel turn fast.'],
        ['The ', { text: 'hold frame', part: 'frame' }, ' is the frame that holds the wheel on its rod.']
      ]
    },
    {
      sentences: [
        ['The ', { text: 'turn sense', part: 'sensor' }, ' is the small part that reads how much the ship turned.'],
        ['The ', { text: 'lead wire', part: 'wire' }, ' takes the answer to the computers.'],
        ['The spin wheel turns fast and keeps the same way in space.'],
        ['When the ship turns, the body turns with it and the wheel does not.'],
        ['The turn sense sees that and tells the computers how far the ship turned.'],
        ['People use it with star pictures, so a ship knows which way it is going.']
      ]
    }
  ],
  flow: [
    { partIds: ['wheel'], caption: 'The spin wheel keeps the same way in space', sentenceRef: 2 },
    { partIds: ['motor'], caption: 'The spin motor makes the wheel turn fast', sentenceRef: 3 },
    { partIds: ['frame'], caption: 'The hold frame holds the wheel on its rod', sentenceRef: 4 },
    { partIds: ['sensor'], caption: 'The turn sense reads how much the ship turned', sentenceRef: 5 }
  ],
  keyExpressions: [
    { text: 'spin wheel', partId: 'wheel' },
    { text: 'spin motor', partId: 'motor' },
    { text: 'hold frame', partId: 'frame' },
    { text: 'turn sense', partId: 'sensor' }
  ]
};
