/**
 * Thing Explainer — Data Registry
 *
 * Each thing follows Munroe's convention: a "simple name" (title)
 * and a "real name" (subtitle), with content using only the ~1000
 * most common English words.
 *
 * Data-driven: all components consume from this single source.
 */

export interface ThingPart {
  id: string
  label: string        // simple word label
  realName: string     // actual technical term
  position: [number, number, number]  // 3D coordinates for annotation
}

export interface ThingData {
  id: string
  slug: string
  simpleName: string
  realName: string
  category: string
  description: string          // simple English description
  funFacts: string[]           // learning tidbits
  parts: ThingPart[]           // labeled parts for annotation
  hudMetrics: {                // dashboard panel data
    power: number              // 0-100
    complexity: number         // 0-100
    yearInvented: number
    wordCount: number          // how many simple words used
  }
  color: string                // accent color for this thing
}

export const things: ThingData[] = [
  {
    id: 'nuclear-reactor',
    slug: 'nuclear-reactor',
    simpleName: 'Heavy Metal Power Building',
    realName: 'Nuclear Reactor',
    category: 'power',
    description: 'This is a building that makes power by breaking apart tiny pieces of matter. When you break these pieces, they let out a lot of heat. We use that heat to make water become steam, and the steam turns a wheel that makes power for our lights and things.',
    funFacts: [
      'The tiny pieces of matter are so small you can not see them',
      'One building like this can make enough power for a whole city',
      'The hot parts need to stay in water all the time so they do not get too hot',
    ],
    parts: [
      { id: 'core', label: 'Hot Part', realName: 'Reactor Core', position: [0, 0, 0] },
      { id: 'rods', label: 'Sticks That Stop Heat', realName: 'Control Rods', position: [0, 1.5, 0] },
      { id: 'water', label: 'Hot Water Box', realName: 'Coolant System', position: [1.5, 0, 0] },
      { id: 'steam', label: 'Steam Maker', realName: 'Steam Generator', position: [2.5, 1, 0] },
      { id: 'wheel', label: 'Power Wheel', realName: 'Turbine', position: [3.5, 1, 0] },
      { id: 'building', label: 'Big Round House', realName: 'Containment Dome', position: [0, 3, 0] },
    ],
    hudMetrics: { power: 95, complexity: 88, yearInvented: 1942, wordCount: 87 },
    color: '#E8453C',
  },
  {
    id: 'helicopter',
    slug: 'helicopter',
    simpleName: 'Sky Boat with Turning Wings',
    realName: 'Helicopter',
    category: 'transport',
    description: 'This is a sky boat that can go up and down without a long road. It has wings on top that turn around very fast. The turning wings push air down, and that makes the boat go up. It can also go forward, backward, and even side to side!',
    funFacts: [
      'The turning wings can spin more than four hundred times in one minute',
      'This sky boat can land in a very small space, unlike planes that need long roads',
      'The word for this thing comes from two old words that mean "turning" and "wing"',
    ],
    parts: [
      { id: 'rotor', label: 'Turning Wings', realName: 'Main Rotor', position: [0, 2.5, 0] },
      { id: 'tail', label: 'Back Turning Stick', realName: 'Tail Rotor', position: [0, 1, -3] },
      { id: 'body', label: 'Sky Boat Body', realName: 'Fuselage', position: [0, 0, 0] },
      { id: 'engine', label: 'Hot Air Machine', realName: 'Turboshaft Engine', position: [0, 1.5, 0] },
      { id: 'skids', label: 'Standing Legs', realName: 'Landing Skids', position: [0, -1, 0] },
      { id: 'window', label: 'See-Through Front', realName: 'Windshield', position: [0, 0.5, 1.5] },
    ],
    hudMetrics: { power: 72, complexity: 65, yearInvented: 1936, wordCount: 62 },
    color: '#F0923A',
  },
  {
    id: 'space-station',
    slug: 'space-station',
    simpleName: 'Shared Space House',
    realName: 'International Space Station',
    category: 'space',
    description: 'This is a house that flies around our world very high up. It goes so fast that it falls around the world all the time. People from many different countries live here together and do work to learn about space. It has rooms for sleeping, eating, and doing science.',
    funFacts: [
      'It goes around our world sixteen times every day',
      'You can see it from the ground at night — it looks like a bright star moving across the sky',
      'The house is as big as a football field',
    ],
    parts: [
      { id: 'modules', label: 'Living Rooms', realName: 'Habitation Modules', position: [0, 0, 0] },
      { id: 'solar', label: 'Sun Power Wings', realName: 'Solar Arrays', position: [4, 0, 0] },
      { id: 'truss', label: 'Back Bone', realName: 'Truss Structure', position: [2, 0, 0] },
      { id: 'dome', label: 'Look-Down Window', realName: 'Cupola', position: [0, -1, 0] },
      { id: 'radiators', label: 'Heat Get-Rid-Of Things', realName: 'Thermal Radiators', position: [2, 1, 0] },
      { id: 'arm', label: 'Long Grabber', realName: 'Canadarm2', position: [0, 1, 0] },
    ],
    hudMetrics: { power: 85, complexity: 96, yearInvented: 1998, wordCount: 94 },
    color: '#60A5FA',
  },
  {
    id: 'curiosity-rover',
    slug: 'curiosity-rover',
    simpleName: 'Red World Space Car',
    realName: 'Curiosity Rover',
    category: 'space',
    description: 'This is a car that we sent to the red world far away. It drives around on the ground and looks at rocks and dirt. It sends pictures back to us so we can learn about the red world. It has a long neck with a camera on top, like a giraffe.',
    funFacts: [
      'It took more than seven months to get to the red world',
      'It is about as big as a small car, but it goes very slowly',
      'It has been working for more than ten years, even though it was only supposed to work for two',
    ],
    parts: [
      { id: 'body', label: 'Car Body', realName: 'Warm Electronics Box', position: [0, 0, 0] },
      { id: 'wheels', label: 'Rolling Feet', realName: 'Rocker-Bogie Wheels', position: [0, -0.5, 0] },
      { id: 'mast', label: 'Long Neck', realName: 'Camera Mast', position: [0, 1.5, 0] },
      { id: 'arm', label: 'Reaching Hand', realName: 'Robotic Arm', position: [0, 0, 1] },
      { id: 'power', label: 'Hot Box', realName: 'RTG Power Source', position: [-1, 0, 0] },
      { id: 'brain', label: 'Think Box', realName: 'Rover Computer', position: [0, 0.5, 0] },
    ],
    hudMetrics: { power: 45, complexity: 82, yearInvented: 2011, wordCount: 71 },
    color: '#E8453C',
  },
  {
    id: 'washing-machine',
    slug: 'washing-machine',
    simpleName: 'Boxes That Make Clothes Smell Better',
    realName: 'Washing Machine & Dryer',
    category: 'home',
    description: 'These are two boxes that help keep your clothes clean. The first box fills with water and moves your clothes around to get the dirt off. The second box blows hot air on your clothes to make them dry. Together they make your clothes smell good and feel soft.',
    funFacts: [
      'The first box can use more than forty liters of water each time',
      'The second box gets so hot that it could burn your clothes if you leave them too long',
      'The first box spins your clothes around more than a thousand times',
    ],
    parts: [
      { id: 'drum', label: 'Round Turning Box', realName: 'Drum', position: [0, 0, 0] },
      { id: 'motor', label: 'Spinning Power', realName: 'Electric Motor', position: [0, -1, 0] },
      { id: 'water-in', label: 'Water In', realName: 'Water Inlet', position: [-1, 1, 0] },
      { id: 'soap', label: 'Soap Box', realName: 'Detergent Dispenser', position: [-1, 0.5, 0] },
      { id: 'pump', label: 'Water Pusher', realName: 'Drain Pump', position: [0, -1, 1] },
      { id: 'hot-air', label: 'Hot Air Blower', realName: 'Heating Element', position: [1, 0, 0] },
    ],
    hudMetrics: { power: 30, complexity: 35, yearInvented: 1851, wordCount: 54 },
    color: '#4ADE80',
  },
]

export const getThingBySlug = (slug: string): ThingData | undefined =>
  things.find(t => t.slug === slug)

export const categories = [
  { id: 'all', label: 'All Things' },
  { id: 'power', label: 'Power' },
  { id: 'transport', label: 'Move' },
  { id: 'space', label: 'Space' },
  { id: 'home', label: 'Home' },
]