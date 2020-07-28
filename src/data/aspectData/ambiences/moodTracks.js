import { terrainTypeNames } from '../../generalData/terrainTypes'
import colors from '../../styles/colors'

export default {
  'Battle': {
    titleColor: colors.battleRed,
    trackObjects: [
      {
        title: 'Battle - Skyrim (1:00)',
        location: 'https://www.youtube.com/watch?v=yIMy3pOeo34',
        tags: ['skyrim', 'battle', 'serious'],
      },
      {
        title: 'Taiko Drums - clacks (1:00)',
        location: 'https://www.youtube.com/watch?v=1nq8G4BT7-w ',
        tags: ['skyrim', 'battle', 'serious', 'mix'],
        
      },
      {
        title: 'Steady Viking Drums (1:00)',
        location: 'https://www.youtube.com/watch?v=47UqaBordWE',
        tags: ['skyrim', 'battle', 'serious', 'mix'],
      },
      {
        title: 'Creepy Fight',
        location: 'https://www.youtube.com/watch?v=MI2wq39BPFo ',
        tags: ['creepy', 'unsettling', 'fear', 'anxiety'],
      },
    ],
  },
  'Exploring': {
    titleColor: colors.exploringTeal,
    trackObjects: [
      {
        title: 'Exploring Mix 1 (0:58)',
        location: 'https://www.youtube.com/watch?v=S4ADbLPLmN8',
        tags: ['hooves', 'horseback', 'birdsong', 'walk'],
      },
      {
        title: 'Exploring Mix 2 (0:58)',
        location: 'https://www.youtube.com/watch?v=A8qMyBWZNw0',
        tags: ['hooves', 'horseback', 'birdsong', 'walk'],
      },
      {
        title: 'Night - Skyrim (1:00)',
        location: 'https://www.youtube.com/watch?v=aK4JSwhdcdE',
        tags: ['skyrim', 'battle', 'serious'],
        terrain: [],
      },
      {
        title: 'Moonlight',
        location: 'https://www.youtube.com/watch?v=tZBV2JJ20Hw',
        tags: ['moonlight', 'night', 'birds', 'magic', 'peaceful'],
      },
      {
        title: 'Enchanted Lands',
        location: 'https://www.youtube.com/watch?v=zloJ_yptWU0',
        tags: ['dull', 'quiet', 'ambience', 'grim', 'peaceful'],
      },
    ]
  },
  'Puzzle': {
    titleColor: colors.puzzleOrange,
    trackObjects: [
      {
        title: 'Suspense, torches',
        location: 'https://www.youtube.com/watch?v=6AlsnSQZP8I',
        tags: ['ruins', 'fire', 'quiet', 'peaceful'],
      },
      {
        title: 'Puzzle Room (Creepy)',
        location: 'https://www.youtube.com/watch?v=IA0_cxItj9s',
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
        location: 'https://www.youtube.com/watch?v=tZBV2JJ20Hw',
        tags: ['moonlight', 'night', 'birds', 'magic', 'peaceful'],
      },
      {
        title: 'Crystal Cave',
        location: 'https://www.youtube.com/watch?v=-ck5wXXD-_4',
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
        location: 'https://www.youtube.com/watch?v=3radp0y5FFs',
        tags: ['creepy', 'unsettling', 'fear', 'anxiety'],
      },
      {
        title: 'Puzzle Room',
        location: 'https://www.youtube.com/watch?v=IA0_cxItj9s',
        tags: [
          'crystal', 'cave', 'underground', 'magical', 'wonder', 'puzzle', 'whispers'
        ],
      },
      {
        title: 'Creepy Fight',
        location: 'https://www.youtube.com/watch?v=MI2wq39BPFo ',
        tags: ['creepy', 'unsettling', 'fear', 'anxiety'],
      },
      {
        title: 'Creepy Dungeon',
        location: 'https://www.youtube.com/watch?v=j6rCcTTOs1I',
        tags: ['dark', 'creepy'],
      },
    ],
  },
  'Weather': {
    titleColor: colors.weatherBlue,
    trackObjects: [
      {
        title: 'Rain',
        location: 'https://www.youtube.com/watch?v=fGRh_hIpDt4',
        tags: ['rain',],
        excludeFrom: [terrainTypeNames.winter],
      },
      {
        title: 'Wind',
        location: 'https://www.youtube.com/watch?v=1zCDGPtDR8Q',
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
        location: 'https://www.youtube.com/watch?v=Ag8sbpNXBEQ',
        tags: ['tavern',],
      },
    ],
  }
}