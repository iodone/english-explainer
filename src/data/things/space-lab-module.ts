import type { ThingData } from '../types';

export const spaceLabModule: ThingData = {
  id: 'space-lab-module',
  slug: 'space-lab-module',
  simpleName: 'The Space Science Room',
  realName: 'Space Laboratory Module',
  category: 'space',
  color: '#4682B4',
  funFacts: [
    'This room can go around the world in about 90 minutes.',
    'People float inside it because there is very little pull on them.',
    'The top windows let people see the sun come up many times each day.',
    'People must use special bags to keep water from flying around.',
    'A shirt can float beside a person if it is not held down.',
    'Work in this room helps people learn how to live far from home.'
  ],
  parts: [
    { id: 'body', label: 'Room Body', realName: 'Pressurized Shell', position: [0, 0, 0], finish: 'hull' },
    { id: 'end', label: 'Round End', realName: 'End Cone', position: [0, 0, -0.35], finish: 'cold' },
    { id: 'top', label: 'Top Window Room', realName: 'Observation Dome', position: [0, 0.2, 0], finish: 'titanium' },
    { id: 'inside', label: 'Work Room', realName: 'Laboratory Rack', position: [0, -0.05, 0], finish: 'warning' },
    { id: 'plug', label: 'Space Door', realName: 'Docking Port', position: [0, 0, 0.35], finish: 'titanium' },
    { id: 'power', label: 'Sun Catcher', realName: 'Solar Array', position: [0.42, 0, 0], finish: 'warning' }
  ],
  article: [
    {
      sentences: [
        ['This is a room where people study space.'],
        ['The ', { text: 'body', part: 'body' }, ' is the long round wall that holds air in.'],
        ['The ', { text: 'end', part: 'end' }, ' at one side closes the room and keeps it strong.'],
        ['The ', { text: 'top', part: 'top' }, ' is a place with small windows where people can look down at the world.'],
        ['The ', { text: 'inside', part: 'inside' }, ' is the work space where people do tests.']
      ]
    },
    {
      sentences: [
        ['The ', { text: 'plug', part: 'plug' }, ' is a door that lets people and things come in or go out.'],
        ['The ', { text: 'power', part: 'power' }, ' is a set of flat sun catchers outside.'],
        ['It turns light from the sun into power for the room.'],
        ['The ', { text: 'body', part: 'body' }, ' must hold air very well because space has no air.'],
        ['People work at the ', { text: 'inside', part: 'inside' }, ' and use the ', { text: 'top', part: 'top' }, ' to see the world.'],
        ['Together, these parts make a safe place to live and study far from home.']
      ]
    }
  ],
  flow: [
    { partIds: ['body', 'end'], caption: 'The strong room keeps air in', sentenceRef: 1 },
    { partIds: ['plug'], caption: 'The door lets people come in and go out', sentenceRef: 5 },
    { partIds: ['inside', 'top'], caption: 'People work and look at the world', sentenceRef: 9 },
    { partIds: ['power'], caption: 'The sun catchers make power', sentenceRef: 7 }
  ],
  keyExpressions: [
    { text: 'laboratory module', partId: 'body' },
    { text: 'docking port', partId: 'plug' },
    { text: 'solar array', partId: 'power' },
    { text: 'laboratory rack', partId: 'inside' }
  ]
};
