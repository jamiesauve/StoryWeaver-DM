import _ from 'lodash'
import * as terrainTypes from './terrainTypes'

const [
  CAVES,
  COAST,
  CITY,
  DESERT,
  FOREST,
  MOUNTAINS,
  PLAINS,
  SWAMP,
  VILLAGE,
  WINTER,
] = _.map(terrainTypes, (terrainType) => terrainType.name)

const NOT_WINTER = 'notWinter'

export default [
  {
    title: 'Horseback - Light Forest',
    location: 'https://michaelghelfi.bandcamp.com/track/horseback',
    tags: ['hooves', 'horseback', 'birdsong', 'walk'],
    terrain: [
      COAST, 
      FOREST, 
      MOUNTAINS
    ]
  },
  {
    title: 'Plains Night (4:03)',
    location: 'https://www.youtube.com/watch?v=MdZv1YVE6_w&vl=en',
    tags: ['quiet', 'peaceful', 'night', 'crickets'],
    terrain: [
      COAST,
      DESERT, 
      MOUNTAINS, 
      PLAINS, 
      SWAMP, 
    ],
  },
  {
    title: 'Forest Night (10:00)',
    location: 'https://www.youtube.com/watch?v=_FJIH0Yi2Mk',
    tags: ['quiet', 'peaceful', 'night', 'crickets'],
    terrain: [
      FOREST, 
      MOUNTAINS,
      SWAMP, 
    ],
  },
  {
    title: 'Quiet Night River',
    location: 'https://www.youtube.com/watch?v=ty_Pq__TU_0',
    tags: ['birds', 'day', 'peaceful'],
    terrain: [
      DESERT, 
      FOREST, 
      MOUNTAINS,
      PLAINS, 
      SWAMP, 
    ],
  },
  {
    title: 'Cave - inhabited',
    location: 'https://michaelghelfi.bandcamp.com/track/torchlit-dungeon',
    tags: ['cave', 'fire', 'underground', 'magic', 'chains'],
    terrain: [
      CAVES,
    ]
  },
  {
    title: 'Dripping Windy River Cave',
    location: 'https://michaelghelfi.bandcamp.com/track/dark-humid-cave',
    tags: ['dripping', 'windy', 'river', 'squeak'],
    terrain: [
      CAVES,
    ]
  },
  {
    title: 'Crystal Cave',
    location: 'https://michaelghelfi.bandcamp.com/track/crystal-cave',
    tags: [
      'crystal', 'cave', 'underground', 'magical', 'wonder',
    ],
    terrain: [
      CAVES,
      WINTER,
    ]
  },
  {
    title: 'Sea Cave',
    location: 'https://michaelghelfi.bandcamp.com/track/sea-cave',
    tags: ['waves',],
    terrain: [
      CAVES,
      COAST,
    ]
  },
  {
    title: 'By a Stream',
    location: 'https://michaelghelfi.bandcamp.com/track/lively-tundra-2',
    tags: ['stream', 'fire', 'day', 'birds'],
    terrain: [
      COAST,
      FOREST,
      PLAINS,
      MOUNTAINS,
    ]
  },
  {
    title: 'Calm Market',
    location: 'https://michaelghelfi.bandcamp.com/track/slums',
    tags: ['people', 'market', 'busy', 'dogs'],
    terrain: [
      CITY,
      VILLAGE
    ]
  },
  {
    title: 'Cicadas Campfire',
    location: 'https://michaelghelfi.bandcamp.com/track/campfire-at-dusk',
    tags: ['campfire', 'cicadas', 'evening', 'peaceful'],
    terrain: [NOT_WINTER],
  },
  {
    title: 'Crickets Campfire',
    location: 'https://michaelghelfi.bandcamp.com/track/savannah-night-camp',
    tags: ['campfire', 'crickets', 'birds', 'peaceful'],
    terrain: [NOT_WINTER],
  },
  {
    title: 'Black Market (bubbling)',
    location: 'https://michaelghelfi.bandcamp.com/track/black-market-2',
    tags: ['market', 'people',],
    terrain: [
      CITY
    ]
  },
  {
    title: 'Sewers',
    location: 'https://michaelghelfi.bandcamp.com/track/sewers',
    tags: ['sewer', 'dripping', 'caves', 'squeaks'],
    terrain: [
      CAVES,
    ]
  },
  {
    title: 'Digging',
    location: 'https://michaelghelfi.bandcamp.com/track/construction-site',
    tags: ['ruins', 'working', 'poeple', 'busy'],
    terrain: [
      CITY,
      VILLAGE,
    ]
  },
  {
    title: 'Swamp',
    location: 'https://michaelghelfi.bandcamp.com/track/swamp',
    tags: ['swamp', 'flies', 'crickets'],
    terrain: [
      SWAMP
    ]
  },
  {
    title: 'Night Swamp - Haunted',
    location: 'https://michaelghelfi.bandcamp.com/track/dead-marshes',
    tags: ['swamp', 'flies', 'magic', 'crickets', 'tense'],
    terrain: [
      FOREST,
      MOUNTAINS,
      SWAMP
    ]
  },
  {
    title: 'Swamp Campfire',
    location: 'https://michaelghelfi.bandcamp.com/track/swamp-campfire',
    tags: ['campfire', 'crickets', 'flies'],
    terrain: [SWAMP],
  },
  {
    title: 'Quiet Day - Forest',
    location: 'https://www.youtube.com/watch?v=HqdjZSYNV8M',
    tags: ['birds', 'day', 'peaceful'],
    terrain: [
      COAST,
      FOREST,
      MOUNTAINS, 
    ],
  },
  {
    title: 'Quiet Day - Plains',
    location: 'https://www.youtube.com/watch?v=66UCZF3NlRo',
    tags: ['birds', 'day', 'peaceful'],
    terrain: [
      FOREST, 
      MOUNTAINS, 
      PLAINS, 
    ],
  }, 
  {
    title: 'Daytime Forest (roars)',
    location: 'https://michaelghelfi.bandcamp.com/track/daytime-forest',
    tags: ['leaves', 'stream',],
    terrain: [
      FOREST,
      MOUNTAINS,
    ],
  },
  {
    title: 'Twisted Forest - Roaring',
    location: 'https://michaelghelfi.bandcamp.com/track/darkest-forest',
    tags: ['creepy', 'roaring', 'howling', 'forest'],
    terrain: [
      CAVES,
      FOREST,
      SWAMP,
    ]
  },
  {
    title: 'Desert Wind',
    location: 'https://michaelghelfi.bandcamp.com/track/desert',
    tags: ['desert', 'wind',],
    terrain: [
      DESERT,
      MOUNTAINS,
      PLAINS,
      WINTER,
    ]
  },
  {
    title: 'Desert Campfire',
    location: 'https://michaelghelfi.bandcamp.com/track/desert-campfire',
    tags: ['desert', 'wind',],
    terrain: [
      DESERT,
      MOUNTAINS,
      PLAINS,
      WINTER,
    ]
  },
]
  
