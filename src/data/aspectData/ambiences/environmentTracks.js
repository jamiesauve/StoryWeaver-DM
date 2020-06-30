import terrainTypes from '../../generalData/terrainTypes'

const [
  caves,
  coast,
  city,
  desert,
  forest,
  freshwater,
  jungle,
  mountains,
  ocean,
  plains,
  swamp,
  village,
  winter,
  exotic,
 ] = Object.keys(terrainTypes)

export default [
  {
    title: 'Horseback - Light Forest',
    location: 'https://michaelghelfi.bandcamp.com/track/horseback',
    tags: ['hooves', 'horseback', 'birdsong', 'walk'],
    terrain: [
      coast, 
      forest,
      jungle,
      mountains,
    ]
  },
  {
    title: 'Plains Night (4:03)',
    location: 'https://www.youtube.com/watch?v=MdZv1YVE6_w&vl=en',
    tags: ['quiet', 'peaceful', 'night', 'crickets'],
    terrain: [
      coast,
      desert, 
      mountains, 
      plains, 
      swamp, 
    ],
  },
  {
    title: 'Forest Night (10:00)',
    location: 'https://www.youtube.com/watch?v=_FJIH0Yi2Mk',
    tags: ['quiet', 'peaceful', 'night', 'crickets'],
    terrain: [
      forest, 
      jungle,
      mountains,
      swamp, 
    ],
  },
  {
    title: 'Quiet Night River',
    location: 'https://www.youtube.com/watch?v=ty_Pq__TU_0',
    tags: ['birds', 'day', 'peaceful'],
    terrain: [
      desert, 
      forest, 
      freshwater,
      mountains,
      plains, 
      swamp, 
    ],
  },
  {
    title: 'Cave - inhabited',
    location: 'https://www.youtube.com/watch?v=CSPjCl_7hXo',
    tags: ['cave', 'fire', 'underground', 'magic', 'chains'],
    terrain: [
      caves,
    ]
  },
  {
    title: 'Dripping Windy River Cave',
    location: 'https://www.youtube.com/watch?v=H0cF3t01T-w',
    tags: ['dripping', 'windy', 'river', 'squeak'],
    terrain: [
      caves,
    ]
  },
  {
    title: 'Crystal Cave',
    location: 'https://www.youtube.com/watch?v=-ck5wXXD-_4',
    tags: [
      'crystal', 'cave', 'underground', 'magical', 'wonder',
    ],
    terrain: [
      caves,
      winter,
    ]
  },
  {
    title: 'Sea Cave',
    location: 'https://www.youtube.com/watch?v=onmRPro40GI',
    tags: ['waves',],
    terrain: [
      caves,
      coast,
    ]
  },
  {
    title: 'By a Stream',
    location: 'https://michaelghelfi.bandcamp.com/track/lively-tundra-2',
    tags: ['stream', 'fire', 'day', 'birds'],
    terrain: [
      coast,
      forest,
      freshwater,
      jungle,
      plains,
      mountains,
    ]
  },
  {
    title: 'Calm Market',
    location: 'https://michaelghelfi.bandcamp.com/track/slums',
    tags: ['people', 'market', 'busy', 'dogs'],
    terrain: [
      city,
      village
    ]
  },
  {
    title: 'Cicadas Campfire',
    location: 'https://michaelghelfi.bandcamp.com/track/campfire-at-dusk',
    tags: ['campfire', 'cicadas', 'evening', 'peaceful'],
    excludeFrom: [
      caves,
      city,
      exotic,
      freshwater,
      ocean,
      village,
      winter,
    ],
  },
  {
    title: 'Crickets Campfire',
    location: 'https://michaelghelfi.bandcamp.com/track/savannah-night-camp',
    tags: ['campfire', 'crickets', 'birds', 'peaceful'],
    excludeFrom: [
      caves,
      city,
      exotic,
      freshwater,
      ocean,
      village,
      winter,
    ],
  },
  {
    title: 'Black Market (bubbling)',
    location: 'https://michaelghelfi.bandcamp.com/track/black-market-2',
    tags: ['market', 'people',],
    terrain: [
      city
    ]
  },
  {
    title: 'Sewers',
    location: 'https://www.youtube.com/watch?v=pv7sc85UZ-4',
    tags: ['sewer', 'dripping', 'caves', 'squeaks'],
    terrain: [
      caves,
    ],
    places: [{
      name: "durukhaaz",
      trackTitle: "The Lake",
    }]
  },
  {
    title: 'Digging',
    location: 'https://michaelghelfi.bandcamp.com/track/construction-site',
    tags: ['ruins', 'working', 'poeple', 'busy'],
    terrain: [
      city,
      village,
    ]
  },
  {
    title: 'Swamp',
    location: 'https://michaelghelfi.bandcamp.com/track/swamp',
    tags: ['swamp', 'flies', 'crickets'],
    terrain: [
      swamp
    ]
  },
  {
    title: 'Night Swamp - Haunted',
    location: 'https://michaelghelfi.bandcamp.com/track/dead-marshes',
    tags: ['swamp', 'flies', 'magic', 'crickets', 'tense'],
    terrain: [
      forest,
      jungle,
      mountains,
      swamp
    ]
  },
  {
    title: 'Swamp Campfire',
    location: 'https://michaelghelfi.bandcamp.com/track/swamp-campfire',
    tags: ['campfire', 'crickets', 'flies'],
    terrain: [
      swamp,
    ],
  },
  {
    title: 'Quiet Day - Forest',
    location: 'https://www.youtube.com/watch?v=HqdjZSYNV8M',
    tags: ['birds', 'day', 'peaceful'],
    terrain: [
      coast,
      forest,
      jungle,
      mountains, 
    ],
  },
  {
    title: 'Quiet Day - Plains',
    location: 'https://www.youtube.com/watch?v=66UCZF3NlRo',
    tags: ['birds', 'day', 'peaceful'],
    terrain: [
      forest,
      jungle,
      mountains, 
      plains, 
    ],
  }, 
  {
    title: 'Daytime Forest (roars)',
    location: 'https://michaelghelfi.bandcamp.com/track/daytime-forest',
    tags: ['leaves', 'stream',],
    terrain: [
      forest,
      jungle,
      mountains,
    ],
  },
  {
    title: 'Twisted Forest - Roaring',
    location: 'https://www.youtube.com/watch?v=7ElGv7zMqeY',
    tags: ['creepy', 'roaring', 'howling', 'forest'],
    terrain: [
      caves,
      forest,
      jungle,
      swamp,
    ]
  },
  {
    title: 'Desert Wind',
    location: 'https://michaelghelfi.bandcamp.com/track/desert',
    tags: ['desert', 'wind',],
    terrain: [
      desert,
      mountains,
      plains,
      winter,
    ]
  },
  {
    title: 'Desert Campfire',
    location: 'https://michaelghelfi.bandcamp.com/track/desert-campfire',
    tags: ['desert', 'wind',],
    terrain: [
      desert,
      mountains,
      plains,
      winter,
    ]
  },
  {
    title: 'Ruins',
    location: 'https://michaelghelfi.bandcamp.com/track/ruined-castle-2',
    tags: ['quiet', 'ruins', 'calm', 'mystery', 'sad', 'desolate'],
    terrain: [
      coast,
      desert,
      forest,
      jungle,
      mountains,
      plains,
      winter,
    ]
  },
  {
    title: 'Night Ruins',
    location: 'https://michaelghelfi.bandcamp.com/track/nightfall-ruins',
    tags: ['quiet', 'ruins', 'calm', 'mystery', 'night', 'sad'],
    terrain: [
      coast,
      desert,
      forest,
      jungle,
      mountains,
      plains,
      swamp,
      winter,
    ]
  },
  {
    title: 'Windy Ocean',
    location: 'https://michaelghelfi.bandcamp.com/track/windy-coast',
    tags: ['waves', 'coast', 'wind', 'ocean'],
    terrain: [
      coast,
      ocean,
    ]
  },
  {
    title: 'Bazaar',
    location: 'https://michaelghelfi.bandcamp.com/track/bazaar',
    tags: ['market', 'bazaar', 'busy', 'crowd', 'people', 'children'],
    terrain: [
      city,
      village,
    ]
  },
  {
    title: 'Jungle Cove',
    location: 'https://michaelghelfi.bandcamp.com/track/cove',
    tags: ['cove', 'water', 'waves', 'animals', 'night'],
    terrain: [
      coast,
      jungle,
    ]
  },
  {
    title: 'Haunted Coast',
    location: 'https://michaelghelfi.bandcamp.com/track/on-the-haunted-shore',
    tags: ['coast', 'haunted', 'magic', 'night', 'creepy'],
    terrain: [
      coast,
      ocean,
    ]
  },
  {
    title: 'Blacksmith\'s Forge',
    location: 'https://michaelghelfi.bandcamp.com/track/blacksmith',
    tags: ['blacksmith', 'torches', 'forge'],
    terrain: [
      city,
      village,
    ]
  },
  {
    title: 'Winter Coast',
    location: 'https://michaelghelfi.bandcamp.com/track/frozen-coast',
    tags: ['windy', 'waves', 'creepy'],
    terrain: [
      winter,
      coast,
      ocean,
    ]
  },
  {
    title: 'Windy Shack',
    location: 'https://michaelghelfi.bandcamp.com/track/abandoned-shack',
    tags: ['windy', 'people'],
    terrain: [
      coast,
      desert,
      forest,
      mountains,
      plains,
      winter,
    ]
  },
  {
    title: 'Beach',
    location: 'https://michaelghelfi.bandcamp.com/track/on-the-shore',
    tags: ['coast', 'beach', 'peaceful', 'windy', 'gulls'],
    terrain: [
      coast,
    ]
  },
  {
    title: 'Sailing Ship',
    location: 'https://michaelghelfi.bandcamp.com/track/sailing-ship',
    tags: ['chains', 'wind', 'creaking', 'windy', 'water'],
    terrain: [
      ocean,
    ]
  },
  {
    title: 'Harbor',
    location: 'https://michaelghelfi.bandcamp.com/track/harbour',
    tags: ['coast', 'harbor', 'ships', 'creaking', 'waves', 'gulls'],
    terrain: [
      coast,
      freshwater,
      ocean,
    ]
  },
  {
    title: 'Ship in Storm',
    location: 'https://michaelghelfi.bandcamp.com/track/ship-in-storms',
    tags: ['coast', 'harbor', 'ships', 'creaking', 'waves', 'storm'],
    terrain: [
      coast,
      ocean,
    ]
  },
  {
    title: 'Ship\'s Cabin (by land, storm)',
    location: 'https://www.youtube.com/watch?v=Ft-lJyu_nuY',
    tags: ['coast', 'harbor', 'ships', 'creaking', 'waves', 'birds', 'storm'],
    terrain: [
      coast,
    ]
  },
  {
    title: 'Lively Market',
    location: 'https://www.youtube.com/watch?v=gcPSA3sUilc',
    tags: ['town', 'harbor', 'music', 'drums', 'loud', 'shouting'],
    terrain: [
      city,
      village,
    ]
  },
  {
    title: 'Desert Canyon',
    location: 'https://michaelghelfi.bandcamp.com/track/desert-canyon-2',
    tags: ['desert', 'wind', 'birds'],
    terrain: [
      coast,
      desert,
      forest,
      jungle,
      mountains,
    ]
  },
  {
    title: 'Volcano',
    location: 'https://michaelghelfi.bandcamp.com/track/volcano-temple',
    tags: ['desert', 'wind', 'birds'],
    terrain: [
      exotic,
    ]
  },
  {
    title: 'Deep Forge',
    location: 'https://www.youtube.com/watch?v=gS0sNL82Tvk',
    tags: ['hammers', 'dwarves', 'durukhaaz', 'city', 'underground'],
    terrain: [
      caves,
      exotic,
    ],
    places: [{
      name: 'durukhaaz',
      trackTitle: 'The Clanging Cavern',
    }]
  },
  {
    title: 'Town',
    location: 'https://www.youtube.com/watch?v=Jtz57E2seZY',
    tags: ['people', 'durukhaaz', 'city', 'underground', 'screeching'],
    terrain: [
      city,
    ],
    places: [{
      name: 'durukhaaz',
      trackTitle: 'The Streets',
    }]
  },
  {
    title: 'Marketplace',
    location: 'https://www.youtube.com/watch?v=UlbxDQMo1o4',
    tags: ['people', 'market', 'busy', 'dogs'],
    terrain: [
      city,
    ],
    places: [{
      name: 'durukhaaz',
      trackTitle: 'The Merchantry',
    }]
  },
  {
    title: 'Mushroom Forest (underground)',
    location: 'https://www.youtube.com/watch?v=dzV3o8zr5Hw',
    tags: ['magic', 'calm', 'mushrooms', 'underground'],
    terrain: [
      caves,
    ],
    places: [{
      name: 'durukhaaz',
      trackTitle: 'The Forests',
    }]
  },
  {
    title: 'Mine',
    location: 'https://www.youtube.com/watch?v=F6_ZuJSWQ4c',
    tags: ['mining', 'work', 'caves', 'underground'],
    terrain: [
      caves,
    ],
    places: [{
      name: 'durukhaaz',
      trackTitle: 'The Mines', 
    }]
  },
]