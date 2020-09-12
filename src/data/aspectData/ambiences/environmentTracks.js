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
    title: 'Horseback (no background)',
    location: 'https://www.youtube.com/watch?v=49TLUjcIWYI',
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
    ],
    places: [{
      name: placeNames.ambalora,
      trackTitle: 'Ambalora',
    }]
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
    location: 'https://www.youtube.com/watch?v=xJN2COqmLg4',
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
    location: 'https://www.youtube.com/watch?v=UlbxDQMo1o4',
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
    location: 'https://www.youtube.com/watch?v=XUts4U8saJc',
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
    location: 'https://www.youtube.com/watch?v=al1F0hURxhs',
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
    location: 'https://www.youtube.com/watch?v=vHaWAxh8vzU',
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
      name: placeNames.durukhaaz,
      trackTitle: "The Lake",
    }]
  },
  {
    title: 'Digging',
    location: 'https://www.youtube.com/watch?v=Ly9Ci1lTAnY',
    tags: ['ruins', 'working', 'poeple', 'busy'],
    terrain: [
      city,
      village,
    ]
  },
  {
    title: 'Swamp',
    location: 'https://www.youtube.com/watch?v=fq_ZTJqJTcc',
    tags: ['swamp', 'flies', 'crickets'],
    terrain: [
      swamp
    ]
  },
  {
    title: 'Night Swamp - Haunted',
    location: 'https://www.youtube.com/watch?v=NQIoLiQ_uNU',
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
    location: 'https://www.youtube.com/watch?v=1ZTqzkh1fUo',
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
    location: 'https://www.youtube.com/watch?v=HAw37tUHcOo',
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
    location: 'https://www.youtube.com/watch?v=4E-_Xpj0Mgo',
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
    location: 'https://www.youtube.com/watch?v=rOAiDBTr-N8',
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
    location: 'https://www.youtube.com/watch?v=TqH8B0_YV8M',
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
    location: 'https://www.youtube.com/watch?v=exOg8RCGluE',
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
    location: 'https://www.youtube.com/watch?v=ST_cPtDe3-c',
    tags: ['waves', 'coast', 'wind', 'ocean'],
    terrain: [
      coast,
      ocean,
    ]
  },
  {
    title: 'Bazaar',
    location: 'https://www.youtube.com/watch?v=8uRtW8lBe0I',
    tags: ['market', 'bazaar', 'busy', 'crowd', 'people', 'children'],
    terrain: [
      city,
      village,
    ]
  },
  {
    title: 'Jungle Cove',
    location: 'https://www.youtube.com/watch?v=NrEiRL7VLhs',
    tags: ['cove', 'water', 'waves', 'animals', 'night'],
    terrain: [
      coast,
      jungle,
    ]
  },
  {
    title: 'Haunted Coast',
    location: 'https://www.youtube.com/watch?v=c8mbKjH1-qU',
    tags: ['coast', 'haunted', 'magic', 'night', 'creepy'],
    terrain: [
      coast,
      ocean,
    ]
  },
  {
    title: 'Blacksmith\'s Forge',
    location: 'https://www.youtube.com/watch?v=pRkFl9j3NLk',
    tags: ['blacksmith', 'torches', 'forge'],
    terrain: [
      city,
      village,
    ]
  },
  {
    title: 'Winter Coast',
    location: 'https://www.youtube.com/watch?v=Y2yT3vH8x7M',
    tags: ['windy', 'waves', 'creepy'],
    terrain: [
      winter,
      coast,
      ocean,
    ]
  },
  {
    title: 'Windy Shack',
    location: 'https://www.youtube.com/watch?v=0Tphr0vyfFU',
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
    location: 'https://www.youtube.com/watch?v=4W2EfqdOmiI',
    tags: ['coast', 'beach', 'peaceful', 'windy', 'gulls'],
    terrain: [
      coast,
    ]
  },
  {
    title: 'Sailing Ship',
    location: 'https://www.youtube.com/watch?v=beOw8MEojQ4',
    tags: ['chains', 'wind', 'creaking', 'windy', 'water'],
    terrain: [
      ocean,
    ]
  },
  {
    title: 'Harbor',
    location: 'https://www.youtube.com/watch?v=t0AmfPQMs4k',
    tags: ['coast', 'harbor', 'ships', 'creaking', 'waves', 'gulls'],
    terrain: [
      coast,
      freshwater,
      ocean,
    ]
  },
  {
    title: 'Ship in Storm',
    location: 'https://www.youtube.com/watch?v=ZNz7yFEHtDs',
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
    location: 'https://www.youtube.com/watch?v=U-e_w9v0BwU',
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
    location: 'https://www.youtube.com/watch?v=fUN-T3zwAYc',
    tags: ['desert', 'wind', 'birds'],
    terrain: [
      exotic,
    ]
  },
  {
    title: 'Deep Forge',
    location: 'https://www.youtube.com/watch?v=gS0sNL82Tvk',
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
    location: 'https://www.youtube.com/watch?v=Jtz57E2seZY',
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
    location: 'https://www.youtube.com/watch?v=UlbxDQMo1o4',
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
    location: 'https://www.youtube.com/watch?v=dzV3o8zr5Hw',
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
    location: 'https://www.youtube.com/watch?v=F6_ZuJSWQ4c',
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
    location: 'https://www.youtube.com/watch?v=Zost8sfrQA8',
    tags: ['creepy', 'ruins', 'wind', 'underground'],
    terrain: [
      caves,
    ],
  },
  {
    title: 'Waterfall',
    location: 'https://www.youtube.com/watch?v=TUFTST1tqjQ',
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
]