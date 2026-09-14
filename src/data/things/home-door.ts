import type { ThingData } from '../types'

export const homeDoor: ThingData = {
  id: 'home-door',
  slug: 'home-door',
  simpleName: 'The Door',
  realName: 'Home door',
  category: 'home',
  funFacts: [
    'It is one of the oldest things in the world. People have been using them for a very long time.',
    'They can be made of many different things like wood or glass or metal.',
    'Some of them have small windows in them so you can see who is on the other side.',
    'They keep the wind and the rain out and keep the people inside safe and warm.',
    'They can be many different colors and have many different pictures on them.',
  ],
  parts: [
    { id: 'body', label: 'body', realName: 'Door panel', position: [0, 0, 0], finish: 'hull' },
    { id: 'top', label: 'top', realName: 'Top rail', position: [0, 0.15, 0], finish: 'cold' },
    { id: 'handle', label: 'handle', realName: 'Handle', position: [0.1, 0, 0.04], finish: 'titanium' },
    { id: 'lock', label: 'lock', realName: 'Lock', position: [0.1, -0.05, 0.04], finish: 'titanium' },
    { id: 'bottom-part', label: 'bottom part', realName: 'Bottom rail', position: [0, -0.15, 0], finish: 'cold' },
    { id: 'hinge', label: 'hinge', realName: 'Hinge', position: [-0.15, 0, 0.02], finish: 'warning' },
  ],
  article: [
    {
      sentences: [
        ['This is a ', { text: 'door', dict: 'home-door' }, '. It is a flat thing that covers a hole in a wall so you can go in and out of a room.'],
        ['The ', { text: 'body', part: 'body' }, ' is the big flat part that covers the hole. It is usually made of wood or metal or glass.'],
        ['The ', { text: 'top', part: 'top' }, ' is the part at the very top of the body. It holds the body together and stops it from falling apart.'],
        ['The ', { text: 'handle', part: 'handle' }, ' is the part you hold to open and close it. You turn it and the body moves so you can go through.'],
        ['The ', { text: 'lock', part: 'lock' }, ' is the thing that keeps the body shut so no one can get in. You need a special small thing to open it.'],
        ['The ', { text: 'bottom part', part: 'bottom-part' }, ' is the part at the very bottom of the body. It touches the floor and keeps the body strong.'],
        ['The ', { text: 'hinge', part: 'hinge' }, ' is the thing that joins the body to the wall. It lets the body move but does not let it fall off.'],
      ],
    },
    {
      sentences: [
        ['When you want to go through, you take the handle and turn it.'],
        ['The lock opens and you can push or pull the body so the hole in the wall is open.'],
        ['You walk through and then you push or pull the body back so the hole is covered again.'],
        ['Now the hole is closed and the room is safe and no one can see inside.'],
      ],
    },
  ],
  flow: [
    { partIds: ['body', 'top', 'bottom-part'], sentenceRef: 0, caption: 'Body is big flat part; top and bottom part hold it together.' },
    { partIds: ['handle', 'lock'], sentenceRef: 3, caption: 'Handle lets you open it; lock keeps it shut.' },
    { partIds: ['hinge'], sentenceRef: 6, caption: 'Hinge joins body to wall and lets it move.' },
  ],
  keyExpressions: [
    { text: 'door', partId: 'body' },
    { text: 'handle', partId: 'handle' },
    { text: 'lock', partId: 'lock' },
    { text: 'hinge', partId: 'hinge' },
  ],
  color: '#8B4513',
}