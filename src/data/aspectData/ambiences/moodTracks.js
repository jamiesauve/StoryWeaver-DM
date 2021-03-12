import { terrainTypeNames } from '../../generalData/terrainTypes'
import colors from '../../styles/colors'

export default {
  'Battle': {
    titleColor: colors.battleRed,
    trackObjects: [
      {
        title: 'Battle - Skyrim',
        location: 'Skyrim Fight',
        tags: ['skyrim', 'battle', 'serious'],
      },
      {
        title: 'Taiko Drums - clacks',
        location: 'Taiko Drums',
        tags: ['skyrim', 'battle', 'serious', 'mix'],
      },
      {
        title: 'The King of the Highlands',
        location: 'The King of the Highlands',
        tags: ['skyrim', 'battle', 'serious', 'mix'],
      },
      {
        title: 'Thunder Drums',
        location: 'Thunder Drums',
        tags: ['puzzle', 'calm', 'thunder', 'interesting'],
      },
      {
        title: 'Viking Drums',
        location: 'Viking War Drums',
        tags: ['skyrim', 'battle', 'serious', 'mix'],
      },
      {
        title: 'Creepy Fight',
        location: 'Suspenseful Music',
        tags: ['creepy', 'unsettling', 'fear', 'anxiety'],
      },
      {
        title: 'Arena',
        location: 'Arena Fight',
        tags: ['fight', 'arena'],
      },
    ],
  },
  'Exploring': {
    titleColor: colors.exploringTeal,
    trackObjects: [
      {
        title: 'Exploring Music',
        location: 'Exploration Music',
        tags: ['hooves', 'horseback', 'birdsong', 'walk'],
      },
      {
        title: 'Travel Music',
        location: 'Peaceful Travel Music',
        tags: ['hooves', 'horseback', 'birdsong', 'walk'],
      },
      {
        title: 'Day - Skyrim',
        location: 'Skyrim Day',
        tags: ['skyrim', 'battle', 'serious'],
        terrain: [],
      },
      {
        title: 'Night - Skyrim',
        location: 'Skyrim Night',
        tags: ['skyrim', 'battle', 'serious'],
        terrain: [],
      },
      {
        title: 'Moonlight',
        location: 'Moon Temple',
        tags: ['moonlight', 'night', 'birds', 'magic', 'peaceful'],
      },
      {
        title: 'Enchanted Lands',
        location: 'Enchanted Lands',
        tags: ['dull', 'quiet', 'ambience', 'grim', 'peaceful'],
      },
    ]
  },
  'Puzzle': {
    titleColor: colors.puzzleOrange,
    trackObjects: [
      {
        title: 'Suspense, torches',
        location: 'Fire Temple',
        tags: ['ruins', 'fire', 'quiet', 'peaceful'],
      },
      {
        title: 'Puzzle Room',
        location: 'Temple of Knowledge',
        tags: [
          'crystal', 'cave', 'underground', 'magical', 'wonder', 'puzzle', 'whispers'
        ],
      },
    ],
  },
  'Magic': {
    titleColor: colors.magicPink,
    trackObjects: [
      {
        title: 'Moonlight',
        location: 'Moon Temple',
        tags: ['moonlight', 'night', 'birds', 'magic', 'peaceful'],
      },
      {
        title: 'Crystal Cave',
        location: 'Crystal Cave',
        tags: [
          'crystal', 'cave', 'underground', 'magical', 'wonder',
        ],
      },
    ]
  },
  'Tension': {
    titleColor: colors.creepyPurple,
    trackObjects: [
      {
        title: 'Slow Dread',
        location: 'Gloomy Cave',
        tags: ['creepy', 'unsettling', 'fear', 'anxiety'],
      },
      {
        title: 'Puzzle Room',
        location: 'Temple of Knowledge',
        tags: [
          'crystal', 'cave', 'underground', 'magical', 'wonder', 'puzzle', 'whispers'
        ],
      },
      {
        title: 'Creepy Dungeon',
        location: 'Generic Dungeon IV',
        tags: ['dark', 'creepy'],
      },
    ],
  },
  'Weather': {
    titleColor: colors.weatherBlue,
    trackObjects: [
      {
        title: 'Rain',
        location: 'Realistic Rain',
        tags: ['rain',],
        excludeFrom: [terrainTypeNames.winter],
      },
      {
        title: 'Wind',
        location: 'Stormy Highlands',
        tags: ['wind', 'storm'],
      },
    ]
  },
  'Tavern': {
    titleColor: colors.tavernSalmon,
    trackObjects: [
      {
        title: 'Tavern - Skyrim',
        location: 'Tavern - Skyrim',
        tags: ['tavern', 'inn', 'bard', 'music'],
      },
      {
        title: 'Tavern - Warcraft',
        location: 'Tavern - Warcraft',
        tags: ['tavern', 'inn', 'bard', 'music'],
      },
      {
        title: 'Tavern - Witcher',
        location: 'Tavern - Witcher',
        tags: ['tavern', 'inn', 'bard', 'music'],
      },
      {
        title: 'Female Performers',
        location: 'Female Performers',
        tags: ['tavern',],
      },
      {
        title: 'Shady Tavern',
        location: 'Back Alley Tavern',
        tags: ['tavern',],
      },
      {
        title: 'Cozy House (raining)',
        location: 'Cozy House',
        tags: ['house',],
      },
    ],
  }
}