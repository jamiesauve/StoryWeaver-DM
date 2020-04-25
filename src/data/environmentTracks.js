import _ from 'lodash'
import * as terrainTypes from './terrainTypes'

const [
  CAVES,
  COAST,
  CITY,
  DESERT,
  FOREST,
  FRESHWATER,
  JUNGLE,
  MOUNTAINS,
  OCEAN,
  PLAINS,
  SWAMP,
  VILLAGE,
  WINTER,
] = _.map(terrainTypes, (terrainType) => terrainType.name)

export default [
  {
    title: 'Horseback - Light Forest',
    location: 'https://michaelghelfi.bandcamp.com/track/horseback',
    tags: ['hooves', 'horseback', 'birdsong', 'walk'],
    terrain: [
      COAST, 
      FOREST,
      JUNGLE,
      MOUNTAINS,
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
      JUNGLE,
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
      FRESHWATER,
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
      FRESHWATER,
      JUNGLE,
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
    excludeFrom: [
      CAVES,
      CITY,
      FRESHWATER,
      OCEAN,
      VILLAGE,
      WINTER,
    ],
  },
  {
    title: 'Crickets Campfire',
    location: 'https://michaelghelfi.bandcamp.com/track/savannah-night-camp',
    tags: ['campfire', 'crickets', 'birds', 'peaceful'],
    excludeFrom: [
      CAVES,
      CITY,
      FRESHWATER,
      OCEAN,
      VILLAGE,
      WINTER,
    ],
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
      JUNGLE,
      MOUNTAINS,
      SWAMP
    ]
  },
  {
    title: 'Swamp Campfire',
    location: 'https://michaelghelfi.bandcamp.com/track/swamp-campfire',
    tags: ['campfire', 'crickets', 'flies'],
    terrain: [
      SWAMP,
    ],
  },
  {
    title: 'Quiet Day - Forest',
    location: 'https://www.youtube.com/watch?v=HqdjZSYNV8M',
    tags: ['birds', 'day', 'peaceful'],
    terrain: [
      COAST,
      FOREST,
      JUNGLE,
      MOUNTAINS, 
    ],
  },
  {
    title: 'Quiet Day - Plains',
    location: 'https://www.youtube.com/watch?v=66UCZF3NlRo',
    tags: ['birds', 'day', 'peaceful'],
    terrain: [
      FOREST,
      JUNGLE,
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
      JUNGLE,
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
      JUNGLE,
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
  {
    title: 'Ruins',
    location: 'https://michaelghelfi.bandcamp.com/track/ruined-castle-2',
    tags: ['quiet', 'ruins', 'calm', 'mystery', 'sad', 'desolate'],
    terrain: [
      COAST,
      DESERT,
      FOREST,
      JUNGLE,
      MOUNTAINS,
      PLAINS,
      WINTER,
    ]
  },
  {
    title: 'Night Ruins',
    location: 'https://michaelghelfi.bandcamp.com/track/nightfall-ruins',
    tags: ['quiet', 'ruins', 'calm', 'mystery', 'night', 'sad'],
    terrain: [
      COAST,
      DESERT,
      FOREST,
      JUNGLE,
      MOUNTAINS,
      PLAINS,
      SWAMP,
      WINTER,
    ]
  },
  {
    title: 'Windy Ocean',
    location: 'https://michaelghelfi.bandcamp.com/track/windy-coast',
    tags: ['waves', 'coast', 'wind', 'ocean'],
    terrain: [
      COAST,
      OCEAN,
    ]
  },
  {
    title: 'Bazaar',
    location: 'https://michaelghelfi.bandcamp.com/track/bazaar',
    tags: ['market', 'bazaar', 'busy', 'crowd', 'people', 'children'],
    terrain: [
      CITY,
      VILLAGE,
    ]
  },
  {
    title: 'Jungle Cove',
    location: 'https://michaelghelfi.bandcamp.com/track/cove',
    tags: ['cove', 'water', 'waves', 'animals', 'night'],
    terrain: [
      COAST,
      JUNGLE,
    ]
  },
  {
    title: 'Haunted Coast',
    location: 'https://michaelghelfi.bandcamp.com/track/on-the-haunted-shore',
    tags: ['coast', 'haunted', 'magic', 'night', 'creepy'],
    terrain: [
      COAST,
      OCEAN,
    ]
  },
  {
    title: 'Blacksmith\'s Forge',
    location: 'https://michaelghelfi.bandcamp.com/track/blacksmith',
    tags: ['blacksmith', 'torches', 'forge'],
    terrain: [
      CITY,
      VILLAGE,
    ]
  },
  {
    title: 'Winter Coast',
    location: 'https://michaelghelfi.bandcamp.com/track/frozen-coast',
    tags: ['windy', 'waves', 'creepy'],
    terrain: [
      WINTER,
      COAST,
      OCEAN,
    ]
  },
  {
    title: 'Windy Shack',
    location: 'https://michaelghelfi.bandcamp.com/track/abandoned-shack',
    tags: ['windy', 'people'],
    terrain: [
      COAST,
      DESERT,
      FOREST,
      MOUNTAINS,
      PLAINS,
      WINTER,
    ]
  },
  {
    title: 'Beach',
    location: 'https://michaelghelfi.bandcamp.com/track/on-the-shore',
    tags: ['coast', 'beach', 'peaceful', 'windy', 'gulls'],
    terrain: [
      COAST,
    ]
  },
  {
    title: 'Sailing Ship',
    location: 'https://michaelghelfi.bandcamp.com/track/sailing-ship',
    tags: ['chains', 'wind', 'creaking', 'windy', 'water'],
    terrain: [
      OCEAN,
    ]
  },
  {
    title: 'Harbor',
    location: 'https://michaelghelfi.bandcamp.com/track/harbour',
    tags: ['coast', 'harbor', 'ships', 'creaking', 'waves', 'gulls'],
    terrain: [
      COAST,
      FRESHWATER,
      OCEAN,
    ]
  },
  {
    title: 'Ship in Storm',
    location: 'https://michaelghelfi.bandcamp.com/track/ship-in-storms',
    tags: ['coast', 'harbor', 'ships', 'creaking', 'waves', 'storm'],
    terrain: [
      COAST,
      OCEAN,
    ]
  },
  {
    title: 'Ship\'s Cabin (by land, storm)',
    location: 'https://www.youtube.com/watch?v=Ft-lJyu_nuY',
    tags: ['coast', 'harbor', 'ships', 'creaking', 'waves', 'birds', 'storm'],
    terrain: [
      COAST,
    ]
  },
  {
    title: 'Lively Market',
    location: 'https://www.youtube.com/watch?v=gcPSA3sUilc',
    tags: ['town', 'harbor', 'music', 'drums', 'loud', 'shouting'],
    terrain: [
      CITY,
      VILLAGE,
    ]
  },
  {
    title: 'Desert Canyon',
    location: 'https://michaelghelfi.bandcamp.com/track/desert-canyon-2',
    tags: ['desert', 'wind', 'birds'],
    terrain: [
      COAST,
      DESERT,
      FOREST,
      JUNGLE,
      MOUNTAINS,
    ]
  },
]