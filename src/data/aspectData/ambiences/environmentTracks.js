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
    title: 'Lively Market',
    location: 'https://www.youtube.com/watch?v=gcPSA3sUilc',
    tags: ['town', 'harbor', 'music', 'drums', 'loud', 'shouting'],
    terrain: [
      city,
      village,
    ]
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
]