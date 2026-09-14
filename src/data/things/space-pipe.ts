import type { ThingData } from '../types'

export const spacePipe: ThingData = {
  id: 'space-pipe',
  slug: 'space-pipe',
  simpleName: 'The Flow Thing',
  realName: 'Space pipe system',
  category: 'space',
  funFacts: [
    'In the sky, you can not pour water because it floats around.',
    'Pipes must work without any pulling force to move things along.',
    'They use pushing air to move water and other stuff through them.',
    'If one breaks, it can be very bad because water floats everywhere.',
    'They are made to work in very cold and very hot places.',
  ],
  parts: [
    { id: 'body', label: 'body', realName: 'Main pipe', position: [0, 0, 0], finish: 'hull' },
    { id: 'join-parts', label: 'join parts', realName: 'Pipe joints', position: [0.12, 0, 0], finish: 'cold' },
    { id: 'turn-part', label: 'turn part', realName: 'Bend section', position: [0, 0.08, 0], finish: 'titanium' },
    { id: 'open-part', label: 'open part', realName: 'Valve', position: [-0.1, 0, 0.04], finish: 'cold' },
    { id: 'cover', label: 'cover', realName: 'Insulation wrap', position: [0, 0, 0.04], finish: 'hull' },
    { id: 'hold-parts', label: 'hold parts', realName: 'Pipe clamps', position: [0, -0.04, -0.04], finish: 'titanium' },
  ],
  article: [
    {
      sentences: [
        ['This is a ', { text: 'flow thing', dict: 'space-pipe' }, '. It moves water and other things from one place to another in the sky.'],
        ['The ', { text: 'body', part: 'body' }, ' is the long round part that the water goes through. It must not have any holes.'],
        ['The ', { text: 'join parts', part: 'join-parts' }, ' put different pieces together. They must close very well so nothing comes out.'],
        ['The ', { text: 'turn part', part: 'turn-part' }, ' is where the pipe changes direction. It lets the water go around corners.'],
        ['The ', { text: 'open part', part: 'open-part' }, ' can start and stop the flow. When you close it, no water can get through.'],
        ['The ', { text: 'cover', part: 'cover' }, ' goes around the pipe to keep it warm or cold. This stops the water inside from turning to ice or getting too hot.'],
        ['The ', { text: 'hold parts', part: 'hold-parts' }, ' keep the pipe in place. Without them, the pipe would just float around.'],
      ],
    },
    {
      sentences: [
        ['When water needs to move, it goes into one end of the pipe.'],
        ['Air pushes it along through the body until it gets to the other end.'],
        ['If someone needs to stop the flow, they close the open part.'],
        ['The join parts and turn parts help the water get where it needs to go.'],
      ],
    },
  ],
  flow: [
    { partIds: ['body'], sentenceRef: 1, caption: 'The body is the long round part.' },
    { partIds: ['join-parts'], sentenceRef: 2, caption: 'Join parts put pieces together.' },
    { partIds: ['turn-part'], sentenceRef: 3, caption: 'The turn part changes direction.' },
    { partIds: ['open-part'], sentenceRef: 4, caption: 'The open part starts and stops flow.' },
    { partIds: ['cover', 'hold-parts'], sentenceRef: 5, caption: 'Cover keeps it right; hold parts keep it still.' },
  ],
  keyExpressions: [
    { text: 'flow thing', partId: 'body' },
    { text: 'join parts', partId: 'join-parts' },
    { text: 'turn part', partId: 'turn-part' },
    { text: 'open part', partId: 'open-part' },
  ],
  color: '#4682B4',
}