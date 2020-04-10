import {
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
} from './terrainTypes'

const NOT_WINTER = 'notWinter'

export default {
  // Moods - mostly available everywhere
  'Battle': {
    titleColor: "#801",
    trackObjects: [
      {
        title: 'Music: Serious (1:00)',
        location: 'https://www.youtube.com/watch?v=yIMy3pOeo34',
        tags: ['skyrim', 'battle', 'serious'],
        terrain: [],
      },
      {
        title: 'Music: Serious mix (0:44)',
        location: 'https://www.youtube.com/watch?v=KEerqdg5f_8',
        tags: ['skyrim', 'battle', 'serious', 'mix'],
        terrain: [],
      },
      {
        title: 'Music: Intense Mix (0:52)',
        location: 'https://www.youtube.com/watch?v=w0sUw735gRw',
        tags: ['skyrim', 'battle', 'serious', 'mix'],
        terrain: [],
      },
      {
        title: 'Taiko Drums - clacks (1:00)',
        location: 'https://www.youtube.com/watch?v=1nq8G4BT7-w ',
        tags: ['skyrim', 'battle', 'serious', 'mix'],
        terrain: [],
      },
      {
        title: 'Viking Drums - steady (1:00)',
        location: 'https://www.youtube.com/watch?v=47UqaBordWE',
        tags: ['skyrim', 'battle', 'serious', 'mix'],
        terrain: [],
      },
    ],
  },
  'Exploring': {
    titleColor: '#357',
    trackObjects: [
      {
        title: 'Music: Mix 1 (0:58)',
        location: 'https://www.youtube.com/watch?v=S4ADbLPLmN8',
        tags: ['hooves', 'horseback', 'birdsong', 'walk'],
        terrain: [],
      },
      {
        title: 'Music: Mix 2 (0:58)',
        location: 'https://www.youtube.com/watch?v=A8qMyBWZNw0',
        tags: ['hooves', 'horseback', 'birdsong', 'walk'],
        terrain: [],
      },
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
    ]
  },
  'Puzzle': {
    titleColor: "#b0b",
    trackObjects: [
      {
        title: 'Suspense, torches',
        location: 'https://michaelghelfi.bandcamp.com/track/temple-of-the-fire',
        tags: ['ruins', 'fire', 'quiet', 'peaceful'],
        terrain: [],
      },
      {
        title: 'Puzzle Room (Creepy)',
        location: 'https://michaelghelfi.bandcamp.com/track/temple-of-the-knowledge',
        tags: [
          'crystal', 'cave', 'underground', 'magical', 'wonder', 'puzzle', 'whispers'
        ],
        terrain: [],
      },
      {
        title: 'Taiko Drums - steady (1:11)',
        location: 'https://www.youtube.com/watch?v=KenLU_OtXsc',
        tags: ['puzzle', 'calm', 'thunder', 'interesting'],
        terrain: [],
      },
    ],
  },
  'Magic': {
    titleColor: '#b6b',
    trackObjects: [
      {
        title: 'Moonlight',
        location: 'https://michaelghelfi.bandcamp.com/track/temple-of-the-moon',
        tags: ['moonlight', 'night', 'birds', 'magic', 'peaceful'],
        terrain: [],
      },
      {
        title: 'Crystal Cave',
        location: 'https://michaelghelfi.bandcamp.com/track/crystal-cave',
        tags: [
          'crystal', 'cave', 'underground', 'magical', 'wonder',
        ],
        terrain: [],
      },
    ]
  },
  'Creepy': {
    titleColor: '#000',
    trackObjects: [
      {
        title: 'Suspense, torches',
        location: 'https://michaelghelfi.bandcamp.com/track/temple-of-the-fire',
        tags: ['ruins', 'fire', 'quiet', 'peaceful'],
        terrain: [],
      },
      {
        title: 'Slow Dread',
        location: 'https://michaelghelfi.bandcamp.com/track/gloomy-cave',
        tags: ['creepy', 'unsettling', 'fear', 'anxiety'],
        terrain: [],
      },
      {
        title: 'Music: Creepy Fight',
        location: 'https://www.youtube.com/watch?v=MI2wq39BPFo ',
        tags: ['creepy', 'unsettling', 'fear', 'anxiety'],
        terrain: [],
      },
      {
        title: 'Puzzle Room',
        location: 'https://michaelghelfi.bandcamp.com/track/temple-of-the-knowledge',
        tags: [
          'crystal', 'cave', 'underground', 'magical', 'wonder', 'puzzle', 'whispers'
        ],
        terrain: [],
      },
    ],
  },
  'Weather': {
    titleColor: '#559',
    trackObjects: [
      {
        title: 'Rain',
        location: 'https://michaelghelfi.bandcamp.com/track/realistic-rain',
        tags: ['rain',],
        terrain: [NOT_WINTER],
      },
      {
        title: 'Wind',
        location: 'https://michaelghelfi.bandcamp.com/track/stormy-highlands',
        tags: ['wind', 'storm'],
        terrain: [],
      },
    ]
  },

  // Environments - specific to terrain type
  'Tavern/Inn': {
    titleColor: "#c40",
    trackObjects: [
      {
        title: 'Music: Tavern (4:28)',
        location: 'https://www.youtube.com/watch?v=hWPPD5ww0eA',
        tags: ['tavern', 'inn', 'bard', 'music'],
        terrain: [
          CITY,
          VILLAGE,
        ]
      },
      {
        title: 'Shady Tavern',
        location: 'https://michaelghelfi.bandcamp.com/track/back-alley-tavern',
        tags: ['tavern',],
        terrain: [
          CITY,
          VILLAGE,
        ]
      },
    ],
  },
  'Campfire': {
    titleColor: '#e60',
    trackObjects: [
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
        title: 'Swamp Campfire',
        location: 'https://michaelghelfi.bandcamp.com/track/swamp-campfire',
        tags: ['campfire', 'crickets', 'flies'],
        terrain: [SWAMP],
      },
    ]
  },
  'Day': {
    titleColor: '#45e',
    trackObjects: [
      {
        title: 'Quiet Day',
        location: 'https://www.youtube.com/watch?v=HqdjZSYNV8M',
        tags: ['birds', 'day', 'peaceful'],
        terrain: [
          COAST,
          FOREST,
          MOUNTAINS, 
        ],
      },
      {
        title: 'Quiet Day',
        location: 'https://www.youtube.com/watch?v=66UCZF3NlRo',
        tags: ['birds', 'day', 'peaceful'],
        terrain: [
          FOREST, 
          MOUNTAINS, 
          PLAINS, 
        ],
      },      
    ]
  },  
  'Night': {
    titleColor: "#000",
    trackObjects: [
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
        title: 'Quiet River',
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
        title: 'Music: Night (1:00)',
        location: 'https://www.youtube.com/watch?v=aK4JSwhdcdE',
        tags: ['skyrim', 'battle', 'serious'],
        terrain: [],
      },
    ],
  },
  'Caves/Underground': {
    titleColor: "#737",
    trackObjects: [
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
    ],
  },
  'Coast/Ocean': {
    titleColor: '#33d',
    trackObjects: [
      {
        title: 'Sea Cave',
        location: 'https://michaelghelfi.bandcamp.com/track/sea-cave',
        tags: ['waves',],
        terrain: [
          CAVES,
          COAST,
        ]
      },
    ]
  },
  'City/Town': {
    titleColor: "#e5a",
    trackObjects: [
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
    ],
  },
  'Swamp': {
    titleColor: "#575",
    trackObjects: [
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
    ],
  },
  'Forest': {
    titleColor: "green",
    trackObjects: [
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
        title: 'Horseback - Light Forest',
        location: 'https://michaelghelfi.bandcamp.com/track/horseback',
        tags: ['hooves', 'horseback', 'birdsong', 'walk'],
        terrain: [
          FOREST,
        ]
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
    ],
  },
  'Desert/Grasslands': {
    titleColor: "#da0",
    trackObjects: [
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
    ],
  },

  // Special Events - avilable everywhere
  'Special Event': {
    titleColor: "#f4f",
    trackObjects: [
      {
        title: 'Desert Chase (1:03)',
        location: 'https://www.youtube.com/watch?v=L65k0_Y-LPY',
        tags: ['Skyworld', 'wyvern', 'desert'],
        terrain: [],
      },
      {
        title: 'El Dorado (0:59)',
        location: 'https://www.youtube.com/watch?v=RSrqK0tU0uc',
        tags: ['El Dorado', '',],
        terrain: [],
      },
    ],
  }, 
}