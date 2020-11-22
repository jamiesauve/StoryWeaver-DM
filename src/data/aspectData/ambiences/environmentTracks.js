import { terrainTypeNames } from '../../generalData/terrainTypes'
import { placeNames } from '../../generalData/places'

const {
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
 } = terrainTypeNames

export default [
  {
    title: 'Desert Wind',
    location: 'Desert',
    tags: ['desert', 'wind',],
    terrain: [
      desert,
      mountains,
      plains,
      winter,
    ]
  },
  {
    title: 'Horseback (no background)',
    location: 'Horseback (no background)',
    tags: ['hooves', 'horseback', 'birdsong', 'walk'],
    terrain: [
      coast, 
      forest,
      jungle,
      mountains,
    ]
  },
  {
    title: 'Quiet Night River',
    location: 'Mountain Lake,
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
    location: 'Torchlit Dungeon',
    tags: ['cave', 'fire', 'underground', 'magic', 'chains'],
    terrain: [
      caves,
    ]
  },
  {
    title: 'Dripping Windy River Cave',
    location: 'Dark Humid Cave',
    tags: ['dripping', 'windy', 'river', 'squeak'],
    terrain: [
      caves,
    ]
  },
  {
    title: 'Crystal Cave',
    location: 'Crystal Cave',
    tags: [
      'crystal', 'cave', 'underground', 'magical', 'wonder',
    ],
    terrain: [
      caves,
      winter,
    ],
    places: [{
      name: placeNames.ambalora,
      trackTitle: 'Ambalora',
    }]
  },
  {
    title: 'Sea Cave',
    location: 'Sea Cave',
    tags: ['waves',],
    terrain: [
      caves,
      coast,
    ]
  },
  {
    title: 'By a Stream',
    location: 'Lively Tundra,
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
    location: 'Slums', // ?
    tags: ['people', 'market', 'busy', 'dogs'],
    terrain: [
      city,
      village
    ],
    places: [{
      name: placeNames.abundabar,
      trackTitle: 'Narrada Market',
    }]
  },
  {
    title: 'Cicadas Campfire',
    location: 'Campfire at Dusk',
    tags: ['campfire', 'cicadas', 'evening', 'peaceful'],
    terrain: [
      coast,
      desert,
      forest,
      jungle,
      mountains,
      plains,
      swamp,
    ]
  },
  {
    title: 'Crickets Campfire',
    location: 'Campfire in the Woods',
    tags: ['campfire', 'crickets', 'birds', 'peaceful'],
    terrain: [
      coast,
      desert,
      forest,
      jungle,
      mountains,
      plains,
      swamp,
    ]
  },
  {
    title: 'Black Market (bubbling)',
    location: 'Black Market',
    tags: ['market', 'people',],
    terrain: [
      city
    ]
  },
  {
    title: 'Sewers',
    location: 'Sewers',
    tags: ['sewer', 'dripping', 'caves', 'squeaks'],
    terrain: [
      caves,
    ],
    places: [{
      name: placeNames.durukhaaz,
      trackTitle: "The Lake",
    }]
  },
  {
    title: 'Digging',
    location: 'Construction Site',
    tags: ['ruins', 'working', 'poeple', 'busy'],
    terrain: [
      city,
      village,
    ]
  },
  {
    title: 'Swamp',
    location: 'Swamp',
    tags: ['swamp', 'flies', 'crickets'],
    terrain: [
      swamp
    ]
  },
  {
    title: 'Night Swamp - Haunted',
    location: 'Dead Marshes',
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
    location: 'Swamp Campfire',
    tags: ['campfire', 'crickets', 'flies'],
    terrain: [
      swamp,
    ],
  },
  {
    title: 'Forest Daytime',
    location: 'Forest Day',
    tags: ['birds', 'day', 'peaceful'],
    terrain: [
      coast,
      forest,
      jungle,
      mountains, 
    ],
  },
  {
    title: 'Daytime Forest (roars)',
    location: 'Daytime Forest',
    tags: ['leaves', 'stream',],
    terrain: [
      forest,
      jungle,
      mountains,
    ],
  },
  {
    title: 'Twisted Forest - Roaring',
    location: 'Darkest Forest',
    tags: ['creepy', 'roaring', 'howling', 'forest'],
    terrain: [
      caves,
      forest,
      jungle,
      swamp,
    ]
  },
  {
    title: 'Desert Campfire',
    location: 'Desert Campfire',
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
    location: 'Ruined Castle',
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
    location: 'Nightfall Ruins',
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
    location: 'Windy Coast',
    tags: ['waves', 'coast', 'wind', 'ocean'],
    terrain: [
      coast,
      ocean,
    ]
  },
  {
    title: 'Bazaar',
    location: 'Bazaar',
    tags: ['market', 'bazaar', 'busy', 'crowd', 'people', 'children'],
    terrain: [
      city,
      village,
    ]
  },
  {
    title: 'Jungle Cove',
    location: 'Cove',
    tags: ['cove', 'water', 'waves', 'animals', 'night'],
    terrain: [
      coast,
      jungle,
    ]
  },
  {
    title: 'Haunted Coast',
    location: 'On The Haunted Shore',
    tags: ['coast', 'haunted', 'magic', 'night', 'creepy'],
    terrain: [
      coast,
      ocean,
    ]
  },
  {
    title: 'Blacksmith\'s Forge',
    location: 'Blacksmith',
    tags: ['blacksmith', 'torches', 'forge'],
    terrain: [
      city,
      village,
    ]
  },
  {
    title: 'Winter Coast',
    location: 'Frozen Coast',
    tags: ['windy', 'waves', 'creepy'],
    terrain: [
      winter,
      coast,
      ocean,
    ]
  },
  {
    title: 'Windy Shack',
    location: 'Abandoned Shack',
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
    location: 'On The Shore',
    tags: ['coast', 'beach', 'peaceful', 'windy', 'gulls'],
    terrain: [
      coast,
    ]
  },
  {
    title: 'Sailing Ship',
    location: 'Sailing Ship',
    tags: ['chains', 'wind', 'creaking', 'windy', 'water'],
    terrain: [
      ocean,
    ]
  },
  {
    title: 'Harbor',
    location: 'Harbour',
    tags: ['coast', 'harbor', 'ships', 'creaking', 'waves', 'gulls'],
    terrain: [
      coast,
      freshwater,
      ocean,
    ]
  },
  {
    title: 'Ship in Storm',
    location: 'Ship in Storms',
    tags: ['coast', 'harbor', 'ships', 'creaking', 'waves', 'storm'],
    terrain: [
      coast,
      ocean,
    ]
  },
  {
    title: `Ship's Cabin (by land, storm)`,
    location: 'Cabin in Port',
    tags: ['coast', 'harbor', 'ships', 'creaking', 'waves', 'birds', 'storm'],
    terrain: [
      coast,
    ]
  },
  {
    title: 'Lively Market',
    location: 'Lively Market',
    tags: ['town', 'harbor', 'music', 'drums', 'loud', 'shouting'],
    terrain: [
      city,
      village,
    ]
  },
  {
    title: 'Desert Canyon',
    location: 'Desert Canyon',
    tags: ['desert', 'wind', 'birds'],
    terrain: [
      coast,
      desert,
      forest,
      jungle,
      mountains,
    ],
    places: [{
      name: placeNames.dragon_falls,
      trackTitle: 'The Hills',
    }]
  },
  {
    title: 'Volcano',
    location: 'Inside a Volcano',
    tags: ['desert', 'wind', 'birds'],
    terrain: [
      exotic,
    ]
  },
  {
    title: 'Deep Forge',
    location: 'Deep Forge',
    tags: ['hammers', 'dwarves', placeNames.durukhaaz, 'city', 'underground'],
    terrain: [
      caves,
      exotic,
    ],
    places: [{
      name: placeNames.durukhaaz,
      trackTitle: 'The Clanging Cavern',
    }]
  },
  {
    title: 'Town',
    location: 'Dark Elves City',
    tags: ['people', placeNames.durukhaaz, 'city', 'underground', 'screeching'],
    terrain: [
      city,
    ],
    places: [{
      name: placeNames.durukhaaz,
      trackTitle: 'The Streets',
    }]
  },
  {
    title: 'Marketplace',
    location: 'Slums',
    tags: ['people', 'market', 'busy', 'dogs'],
    terrain: [
      city,
    ],
    places: [{
      name: placeNames.durukhaaz,
      trackTitle: 'The Merchantry',
    }, {
      name: placeNames.dragon_falls,
      trackTitle: 'Westcliff Market',
    }]
  },
  {
    title: 'Mushroom Forest (underground)',
    location: 'Underground Mushroom Forest',
    tags: ['magic', 'calm', 'mushrooms', 'underground'],
    terrain: [
      caves,
    ],
    places: [{
      name: placeNames.durukhaaz,
      trackTitle: 'The Forests',
    }]
  },
  {
    title: 'Mine',
    location: 'Active Mine',
    tags: ['mining', 'work', 'caves', 'underground'],
    terrain: [
      caves,
    ],
    places: [{
      name: placeNames.durukhaaz,
      trackTitle: 'The Mines', 
    }]
  },
  {
    title: 'Desert Temple',
    location: 'Desert Temple',
    tags: ['creepy', 'ruins', 'wind', 'underground'],
    terrain: [
      caves,
    ],
  },
  {
    title: 'Waterfall',
    location: 'Waterfall',
    tags: ['waterfall'],
    terrain: [
      caves,
      coast,
      forest,
      freshwater,
      jungle,
      mountains,
    ],
    places: [{
      name: placeNames.dragon_falls,
      trackTitle: 'The Cauldron',
    }]
  },
  {
    title: `Mage's Tower`,
    location: 'School of Magic',
    tags: ['waterfall'],
    terrain: [
      city,
    ],
    places: [{
      name: placeNames.dragon_falls,
      trackTitle: 'Crystal Academy',
    }]
  },
  {
    title: `Library`,
    location: 'Library',
    tags: ['library'],
    terrain: [
      city,
    ],
    places: [{
      name: placeNames.dragon_falls,
      trackTitle: `Scholar's Guild`,
    }]
  },
  {
    title: `Korrim'ban Village`,
    location: 'African Village',
    tags: ['village'],
    terrain: [
      city,
      village,
    ]
  },
  {
    title: `Herbalist's Shop`,
    location: `Herbalist's Shop`,
    tags: ['village'],
    terrain: [
      city,
      village,
    ],
  },
  {
    title: `Unicorn's Glade`,
    location: `Unicorn Glade`,
    tags: ['forest', 'village'],
    terrain: [
      city,
      village,
    ],
  },
  {
    title: `Feywild Forest`,
    location: `Forest Shrine`,
    tags: ['forest', 'village'],
    terrain: [
      forest,
      village,
    ],
  },
]