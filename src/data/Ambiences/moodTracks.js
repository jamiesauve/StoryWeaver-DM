import terrainTypes from '../../terrainTypes'
import colors from '../../styles/colors'

export default {
  'Battle': {
    titleColor: colors.battleRed,
    trackObjects: [
      {
        title: 'Music: Serious (1:00)',
        location: 'https://www.youtube.com/watch?v=yIMy3pOeo34',
        tags: ['skyrim', 'battle', 'serious'],
      },
      {
        title: 'Music: Serious mix (0:44)',
        location: 'https://www.youtube.com/watch?v=KEerqdg5f_8',
        tags: ['skyrim', 'battle', 'serious', 'mix'],
      },
      {
        title: 'Music: Intense Mix (0:52)',
        location: 'https://www.youtube.com/watch?v=w0sUw735gRw',
        tags: ['skyrim', 'battle', 'serious', 'mix'],
        
      },
      {
        title: 'Taiko Drums - clacks (1:00)',
        location: 'https://www.youtube.com/watch?v=1nq8G4BT7-w ',
        tags: ['skyrim', 'battle', 'serious', 'mix'],
        
      },
      {
        title: 'Viking Drums - steady (1:00)',
        location: 'https://www.youtube.com/watch?v=47UqaBordWE',
        tags: ['skyrim', 'battle', 'serious', 'mix'],
      },
    ],
  },
  'Exploring': {
    titleColor: colors.exploringTeal,
    trackObjects: [
      {
        title: 'Music: Mix 1 (0:58)',
        location: 'https://www.youtube.com/watch?v=S4ADbLPLmN8',
        tags: ['hooves', 'horseback', 'birdsong', 'walk'],
      },
      {
        title: 'Music: Mix 2 (0:58)',
        location: 'https://www.youtube.com/watch?v=A8qMyBWZNw0',
        tags: ['hooves', 'horseback', 'birdsong', 'walk'],
      },
      {
        title: 'Night Music (1:00)',
        location: 'https://www.youtube.com/watch?v=aK4JSwhdcdE',
        tags: ['skyrim', 'battle', 'serious'],
        terrain: [],
      },
    ]
  },
  'Puzzle': {
    titleColor: colors.puzzleOrange,
    trackObjects: [
      {
        title: 'Suspense, torches',
        location: 'https://michaelghelfi.bandcamp.com/track/temple-of-the-fire',
        tags: ['ruins', 'fire', 'quiet', 'peaceful'],
      },
      {
        title: 'Puzzle Room (Creepy)',
        location: 'https://michaelghelfi.bandcamp.com/track/temple-of-the-knowledge',
        tags: [
          'crystal', 'cave', 'underground', 'magical', 'wonder', 'puzzle', 'whispers'
        ],
      },
      {
        title: 'Taiko Drums - steady (1:11)',
        location: 'https://www.youtube.com/watch?v=KenLU_OtXsc',
        tags: ['puzzle', 'calm', 'thunder', 'interesting'],
      },
    ],
  },
  'Magic': {
    titleColor: colors.magicPink,
    trackObjects: [
      {
        title: 'Moonlight',
        location: 'https://michaelghelfi.bandcamp.com/track/temple-of-the-moon',
        tags: ['moonlight', 'night', 'birds', 'magic', 'peaceful'],
      },
      {
        title: 'Crystal Cave',
        location: 'https://michaelghelfi.bandcamp.com/track/crystal-cave',
        tags: [
          'crystal', 'cave', 'underground', 'magical', 'wonder',
        ],
      },
    ]
  },
  'Creepy': {
    titleColor: colors.creepyPurple,
    trackObjects: [
      {
        title: 'Suspense, torches',
        location: 'https://michaelghelfi.bandcamp.com/track/temple-of-the-fire',
        tags: ['ruins', 'fire', 'quiet', 'peaceful'],
      },
      {
        title: 'Slow Dread',
        location: 'https://michaelghelfi.bandcamp.com/track/gloomy-cave',
        tags: ['creepy', 'unsettling', 'fear', 'anxiety'],
      },
      {
        title: 'Music: Creepy Fight',
        location: 'https://www.youtube.com/watch?v=MI2wq39BPFo ',
        tags: ['creepy', 'unsettling', 'fear', 'anxiety'],
      },
      {
        title: 'Puzzle Room',
        location: 'https://michaelghelfi.bandcamp.com/track/temple-of-the-knowledge',
        tags: [
          'crystal', 'cave', 'underground', 'magical', 'wonder', 'puzzle', 'whispers'
        ],
      },
      {
        title: 'Creepy Dungeon',
        location: 'https://michaelghelfi.bandcamp.com/track/generic-dungeon-iv',
        tags: ['dark', 'creepy'],
      },
    ],
  },
  'Weather': {
    titleColor: colors.weatherBlue,
    trackObjects: [
      {
        title: 'Rain',
        location: 'https://michaelghelfi.bandcamp.com/track/realistic-rain',
        tags: ['rain',],
        excludeFrom: [terrainTypes.winter.name],
      },
      {
        title: 'Wind',
        location: 'https://michaelghelfi.bandcamp.com/track/stormy-highlands',
        tags: ['wind', 'storm'],
      },
    ]
  },
  'Tavern': {
    titleColor: colors.tavernSalmon,
    trackObjects: [
      {
        title: 'Music: Tavern (4:28)',
        location: 'https://www.youtube.com/watch?v=hWPPD5ww0eA',
        tags: ['tavern', 'inn', 'bard', 'music'],
      },
      {
        title: 'Shady Tavern',
        location: 'https://michaelghelfi.bandcamp.com/track/back-alley-tavern',
        tags: ['tavern',],
      },
    ],
  }
}